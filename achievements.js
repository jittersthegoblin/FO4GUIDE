const ACHIEVEMENT_KEY='fo4guide-achievements-v1';
let achievementFilter='all';
let achievementState=loadAchievementState();
const ach$=id=>document.getElementById(id);

function loadAchievementState(){try{return JSON.parse(localStorage.getItem(ACHIEVEMENT_KEY)||'{}')}catch{return {}}}
function saveAchievementState(){localStorage.setItem(ACHIEVEMENT_KEY,JSON.stringify(achievementState))}
function achievementDone(id){return !!achievementState[id]}
function setAchievementDone(id,value){achievementState[id]=value;saveAchievementState();renderAchievementTracker()}
function achievementPercent(done,total){return total?Math.round(done/total*100):0}

function renderAchievementSummary(){
  const total=steamAchievements.length;
  const done=steamAchievements.filter(a=>achievementDone(a.id)).length;
  const percent=achievementPercent(done,total);
  ach$('achievementProgressText').innerHTML='<strong class="count">'+done+'</strong> of <strong>'+total+'</strong> achievements checked off <span class="achievement-percent">'+percent+'%</span>';
  ach$('achievementProgressFill').style.width=percent+'%';
  const groups=ach$('achievementGroupProgress');groups.innerHTML='';
  achievementGroups.forEach(group=>{
    const list=steamAchievements.filter(a=>a.group===group),groupDone=list.filter(a=>achievementDone(a.id)).length;
    const card=document.createElement('button');card.className='achievement-group-card'+(achievementFilter===group?' active':'');card.type='button';
    card.innerHTML='<span>'+group+'</span><strong>'+groupDone+'/'+list.length+'</strong><div class="mini-progress"><i style="width:'+achievementPercent(groupDone,list.length)+'%"></i></div>';
    card.onclick=()=>{achievementFilter=achievementFilter===group?'all':group;renderAchievementFilters();renderAchievementList();renderAchievementSummary()};groups.append(card);
  });
}

function renderAchievementFilters(){
  const box=ach$('achievementFilters');box.innerHTML='';
  const options=[['all','All 84'],['unchecked','Unchecked'],['checked','Completed'],...achievementGroups.map(x=>[x,x])];
  options.forEach(([id,label])=>{
    const b=document.createElement('button');b.textContent=label;b.classList.toggle('active',achievementFilter===id);b.onclick=()=>{achievementFilter=id;renderAchievementFilters();renderAchievementList();renderAchievementSummary()};box.append(b);
  });
}

function achievementMatches(a,term){
  if(achievementFilter==='unchecked'&&achievementDone(a.id))return false;
  if(achievementFilter==='checked'&&!achievementDone(a.id))return false;
  if(!['all','unchecked','checked'].includes(achievementFilter)&&a.group!==achievementFilter)return false;
  return !term||(a.name+' '+a.goal+' '+a.group+' '+a.kind+' '+(a.warning||'')).toLowerCase().includes(term);
}

function achievementCard(a){
  const card=document.createElement('label');card.className='achievement-card'+(achievementDone(a.id)?' done':'');
  const check=document.createElement('input');check.type='checkbox';check.checked=achievementDone(a.id);check.onchange=()=>setAchievementDone(a.id,check.checked);
  const body=document.createElement('div');body.className='achievement-body';
  body.innerHTML='<div class="achievement-title"><h3>🏆 '+a.name+'</h3><span class="tag">'+a.group+'</span></div><p>'+a.goal+'</p><div class="achievement-meta"><span class="tag">'+a.kind+'</span>'+(a.warning?'<span class="achievement-warning">'+a.warning+'</span>':'')+'</div>';
  card.append(check,body);return card;
}

function renderAchievementList(){
  const box=ach$('achievementList'),search=ach$('achievementSearch');if(!box)return;
  const term=((search&&search.value)||'').trim().toLowerCase();box.innerHTML='';
  const visible=steamAchievements.filter(a=>achievementMatches(a,term));
  if(!visible.length){box.innerHTML='<div class="empty">No achievements match that filter.</div>';return}
  visible.forEach(a=>box.append(achievementCard(a)));
}

function resetAchievementTracker(){
  if(!confirm('Reset every manual achievement check? This cannot be undone.'))return;
  achievementState={};saveAchievementState();renderAchievementTracker();
}

function renderAchievementTracker(){
  if(typeof steamAchievements==='undefined'||!Array.isArray(steamAchievements))return;
  renderAchievementSummary();renderAchievementFilters();renderAchievementList();
}

const achievementSearch=ach$('achievementSearch');if(achievementSearch)achievementSearch.addEventListener('input',renderAchievementList);
const achievementReset=ach$('achievementReset');if(achievementReset)achievementReset.addEventListener('click',resetAchievementTracker);
renderAchievementTracker();