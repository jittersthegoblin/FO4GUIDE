const BUILD_KEY='fo4guide-build-planner-v1';
const statOrder=['S','P','E','C','I','A','L'];
const tierRank={optional:1,strong:2,core:3};
const tierLabel={core:'CORE',strong:'STRONG',optional:'OPTIONAL'};
const baselineWeights={S:1.2,P:1.4,E:2.2,C:1.2,I:2.2,A:1.4,L:1.4};

const perkIndex={};
Object.entries(specialTree).forEach(([stat,data])=>data.perks.forEach(([name,req])=>{perkIndex[name]={name,stat,req}}));

let selectedTags=new Set(loadBuildTags());

function loadBuildTags(){
  try{
    const raw=JSON.parse(localStorage.getItem(BUILD_KEY)||'{}');
    return Array.isArray(raw.tags)?raw.tags.filter(id=>buildTags.some(t=>t.id===id)):[];
  }catch{return []}
}
function saveBuildTags(){localStorage.setItem(BUILD_KEY,JSON.stringify({tags:[...selectedTags]}))}
const byId=id=>document.getElementById(id);

function toggleTag(id){
  if(selectedTags.has(id))selectedTags.delete(id);else selectedTags.add(id);
  saveBuildTags();
  renderPlanner();
}
function clearTags(){selectedTags.clear();saveBuildTags();renderPlanner()}

function aggregateBuild(){
  const weights={...baselineWeights};
  const perks=new Map();
  const selected=buildTags.filter(t=>selectedTags.has(t.id));
  selected.forEach(tag=>{
    Object.entries(tag.weights||{}).forEach(([s,w])=>weights[s]+=w);
    (tag.perks||[]).forEach(rec=>{
      const base=perkIndex[rec.name];
      if(!base)return;
      const old=perks.get(rec.name)||{...base,tier:rec.tier,reasons:[],tags:[]};
      if(tierRank[rec.tier]>tierRank[old.tier])old.tier=rec.tier;
      if(!old.reasons.includes(rec.reason))old.reasons.push(rec.reason);
      if(!old.tags.includes(tag.label))old.tags.push(tag.label);
      perks.set(rec.name,old);
    });
  });
  return {selected,weights,perks};
}

function longTermTargets(build){
  const target=Object.fromEntries(statOrder.map(s=>[s,1]));
  build.perks.forEach(p=>{
    if(p.tier!=='optional')target[p.stat]=Math.max(target[p.stat],p.req);
  });
  statOrder.forEach(s=>{
    const playstyleWeight=Math.max(0,build.weights[s]-baselineWeights[s]);
    const weightTarget=Math.min(10,Math.max(1,Math.round(playstyleWeight/1.5)));
    target[s]=Math.max(target[s],weightTarget);
  });
  return target;
}

function startingSpread(build){
  const current=Object.fromEntries(statOrder.map(s=>[s,1]));
  const target=longTermTargets(build);
  let budget=21;
  const unlockValue={core:17,strong:8,optional:3};
  while(budget>0){
    let best=null,bestScore=-Infinity;
    statOrder.forEach(s=>{
      if(current[s]>=10)return;
      const next=current[s]+1;
      let score=(build.weights[s]*4)/(current[s]+0.75);
      build.perks.forEach(p=>{if(p.stat===s&&p.req===next)score+=unlockValue[p.tier]||0});
      if(next<=target[s])score+=3;
      if(current[s]>=target[s])score*=0.45;
      score+=((7-statOrder.indexOf(s))*0.0001);
      if(score>bestScore){bestScore=score;best=s}
    });
    if(!best)break;
    current[best]++;budget--;
  }
  return current;
}

function renderTags(){
  const host=byId('playstyleGroups');host.innerHTML='';
  buildTagGroups.forEach(group=>{
    const tags=buildTags.filter(t=>t.group===group);
    if(!tags.length)return;
    const section=document.createElement('section');section.className='tag-group';
    const h=document.createElement('h3');h.textContent=group;section.appendChild(h);
    const row=document.createElement('div');row.className='build-tag-row';
    tags.forEach(tag=>{
      const b=document.createElement('button');b.type='button';b.className='build-tag'+(selectedTags.has(tag.id)?' active':'');
      b.innerHTML='<strong>'+tag.label+'</strong><span>'+tag.desc+'</span>';
      b.onclick=()=>toggleTag(tag.id);row.appendChild(b);
    });
    section.appendChild(row);host.appendChild(section);
  });
  byId('clearBuild').disabled=selectedTags.size===0;
}

function renderSelected(build){
  const host=byId('selectedBuildTags');host.innerHTML='';
  if(!build.selected.length){host.innerHTML='<span class="muted-inline">No playstyle tags selected yet.</span>';return}
  build.selected.forEach(tag=>{
    const chip=document.createElement('button');chip.type='button';chip.className='selected-chip';chip.textContent=tag.label+' ×';chip.title='Remove '+tag.label;chip.onclick=()=>toggleTag(tag.id);host.appendChild(chip);
  });
}

function statImportance(weight,maxWeight){
  if(!weight)return 'low';
  if(weight>=maxWeight*.72)return 'high';
  if(weight>=maxWeight*.38)return 'medium';
  return 'low';
}

function renderSpecial(build){
  const host=byId('specialRecommendation');host.innerHTML='';
  if(!build.selected.length){
    host.innerHTML='<div class="planner-empty"><h3>Pick at least one tag</h3><p>Your legal 28-point starting SPECIAL suggestion will appear here.</p></div>';
    return;
  }
  const start=startingSpread(build),target=longTermTargets(build),maxWeight=Math.max(...Object.values(build.weights),1);
  const total=statOrder.reduce((n,s)=>n+start[s],0);
  const head=document.createElement('div');head.className='special-summary-head';
  head.innerHTML='<div><h3>Suggested starting SPECIAL</h3><p>This is a legal '+total+'-point starting spread, weighted toward the tags you picked without starving every unselected stat.</p></div><span class="pill">28 points</span>';
  host.appendChild(head);
  const grid=document.createElement('div');grid.className='special-grid';
  statOrder.forEach(s=>{
    const data=specialTree[s],card=document.createElement('article');card.className='special-card '+statImportance(build.weights[s],maxWeight);
    const needed=[...build.perks.values()].filter(p=>p.stat===s&&p.tier!=='optional').sort((a,b)=>a.req-b.req);
    const unlock=needed.length?needed[needed.length-1].name:'No key perk threshold';
    card.innerHTML='<div class="special-letter">'+s+'</div><div class="special-stat-name">'+data.name+'</div><div class="special-number">'+start[s]+'</div><div class="special-target">Long-term target: <strong>'+target[s]+'</strong></div><p>'+data.role+'</p><small>'+unlock+'</small>';
    grid.appendChild(card);
  });
  host.appendChild(grid);
  const note=document.createElement('div');note.className='build-note';
  note.innerHTML='<strong>Important:</strong> this is a starting recommendation, not a permanent lock-in. Fallout 4 lets you spend later perk points directly on SPECIAL training, and SPECIAL bobbleheads / You’re SPECIAL! can also raise base attributes.';
  host.appendChild(note);
}

function renderPerks(build){
  const host=byId('recommendedPerks');host.innerHTML='';
  if(!build.selected.length){host.innerHTML='<div class="planner-empty"><p>Recommended perk cards will appear after you choose a playstyle.</p></div>';return}
  const perks=[...build.perks.values()].sort((a,b)=>tierRank[b.tier]-tierRank[a.tier]||a.req-b.req||statOrder.indexOf(a.stat)-statOrder.indexOf(b.stat));
  ['core','strong','optional'].forEach(tier=>{
    const items=perks.filter(p=>p.tier===tier);if(!items.length)return;
    const section=document.createElement('section');section.className='perk-tier-section';
    const h=document.createElement('div');h.className='perk-tier-title';h.innerHTML='<h3>'+tierLabel[tier]+'</h3><span>'+({core:'Build-defining',strong:'Very useful',optional:'Nice if you have room'}[tier])+'</span>';section.appendChild(h);
    const grid=document.createElement('div');grid.className='perk-card-grid';
    items.forEach(p=>{
      const card=document.createElement('article');card.className='perk-rec '+tier;
      card.innerHTML='<div class="perk-rec-head"><div><span class="perk-threshold">'+specialTree[p.stat].short+' '+p.req+'</span><h4>'+p.name+'</h4></div><span class="perk-tier-badge">'+tierLabel[tier]+'</span></div><p>'+p.reasons.join(' ')+'</p><div class="perk-from">Helps: '+p.tags.join(' · ')+'</div>';
      grid.appendChild(card);
    });
    section.appendChild(grid);host.appendChild(section);
  });
}

function buildSynergies(build){
  const has=id=>selectedTags.has(id),notes=[];
  if(has('stealth')&&has('sniper'))notes.push(['synergy','Stealth Sniper','Rifleman + Sneak + Ninja is a natural combination. A suppressor makes Mister Sandman relevant too.']);
  if(has('stealth')&&has('pistols'))notes.push(['synergy','Silent Pistol','Gunslinger, Sneak, Ninja and Mister Sandman work beautifully together on suppressed pistols such as Deliverer.']);
  if((has('melee')||has('unarmed'))&&has('vats'))notes.push(['synergy','V.A.T.S. Close Combat','AGI 9 for Blitz becomes one of your most valuable long-term targets.']);
  if(has('heavy')&&has('explosives'))notes.push(['synergy','Heavy Explosives','Missile Launcher and Fat Man benefit from the overlap between Heavy Gunner and Demolition Expert.']);
  if(has('energy'))notes.push(['info','Energy weapon rule','Energy is a damage type, not a universal weapon class. Pair Science! with Gunslinger, Rifleman, Commando or Heavy Gunner depending on the weapon configuration.']);
  if(has('powerarmor')&&has('stealth'))notes.push(['warning','Awkward pairing','Stealth in Power Armor is possible, but these tags pull in different directions. Treat stealth as secondary unless you deliberately build around it.']);
  if(has('solo')&&has('companions'))notes.push(['warning','Companion conflict','Lone Wanderer is for travelling without a normal companion. Dogmeat is the important exception: he does not disable Lone Wanderer.']);
  if(has('settlements')&&has('crafting'))notes.push(['synergy','Commonwealth Engineer','Local Leader + Scrapper + Gun Nut + Armorer + Science! gives you an extremely self-sufficient crafting and settlement character.']);
  if(has('vats')&&has('automatic'))notes.push(['info','Automatic V.A.T.S.','This works, but automatic weapons can be AP- and ammo-hungry. Commando is still the damage perk; Luck/Agility perks are the V.A.T.S. support layer.']);
  build.selected.forEach(tag=>{if(tag.note)notes.push(['info',tag.label+' note',tag.note])});
  return notes;
}

function renderSynergies(build){
  const host=byId('buildSynergies');host.innerHTML='';
  if(!build.selected.length){host.innerHTML='<div class="planner-empty"><p>Synergy and conflict notes will appear here.</p></div>';return}
  const notes=buildSynergies(build);
  if(!notes.length){host.innerHTML='<div class="build-note"><strong>Clean combination:</strong> these tags do not create any obvious perk conflicts. Pick the weapon-specific damage perk that matches what you actually use.</div>';return}
  notes.forEach(([kind,title,text])=>{const d=document.createElement('div');d.className='synergy-note '+kind;d.innerHTML='<h4>'+title+'</h4><p>'+text+'</p>';host.appendChild(d)});
}

function renderTree(build){
  const host=byId('specialTree');host.innerHTML='';
  const rec=build.perks;
  statOrder.forEach(s=>{
    const data=specialTree[s],col=document.createElement('section');col.className='tree-column';
    col.innerHTML='<div class="tree-head"><span class="tree-letter">'+s+'</span><div><h3>'+data.name+'</h3><p>'+data.role+'</p></div></div>';
    const list=document.createElement('div');list.className='tree-list';
    data.perks.forEach(([name,req])=>{
      const recommendation=rec.get(name),row=document.createElement('div');row.className='tree-perk'+(recommendation?' recommended '+recommendation.tier:'');
      row.innerHTML='<span class="tree-req">'+req+'</span><span class="tree-name">'+name+'</span>'+(recommendation?'<span class="tree-mark">'+tierLabel[recommendation.tier]+'</span>':'');
      list.appendChild(row);
    });
    col.appendChild(list);host.appendChild(col);
  });
}

function renderPlanner(){
  const build=aggregateBuild();
  renderTags();renderSelected(build);renderSpecial(build);renderPerks(build);renderSynergies(build);renderTree(build);
  const count=byId('tagCount');if(count)count.textContent=selectedTags.size+' selected';
}

document.addEventListener('DOMContentLoaded',()=>{
  const clear=byId('clearBuild');if(clear)clear.onclick=clearTags;
  renderPlanner();
});
