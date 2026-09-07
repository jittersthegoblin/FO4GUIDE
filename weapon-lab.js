// Expanded Weapon Mod Lab UI. Kept separate from app.js so weapon data cannot break the core guide.
let weaponCategoryFilter='All';
let weaponSearchTerm='';

function weaponDlcEnabled(w){
  if(w.content==='Base Game')return true;
  if(typeof state==='undefined'||!Array.isArray(state.dlc))return true;
  return state.dlc.includes(w.content);
}
function weaponMatchesFilters(w){
  if(!weaponDlcEnabled(w))return false;
  if(weaponCategoryFilter!=='All'&&w.category!==weaponCategoryFilter)return false;
  if(!weaponSearchTerm)return true;
  const hay=[w.name,w.category,w.content,w.perks,w.damagePerk,w.acquire,...(w.aliases||[]),...(w.slots||[]).flat()].join(' ').toLowerCase();
  return hay.includes(weaponSearchTerm);
}
function currentWeaponEntry(){
  let w=weaponCatalog.find(x=>x.id===state.weapon);
  if(!w){w=weaponCatalog[0];state.weapon=w.id;save()}
  return w;
}
function renderWeaponCategoryFilters(){
  const host=document.getElementById('weaponCategoryFilters');if(!host)return;
  host.innerHTML='';
  weaponCategories.forEach(cat=>{
    const b=document.createElement('button');b.type='button';b.textContent=cat;b.classList.toggle('active',weaponCategoryFilter===cat);
    b.onclick=()=>{weaponCategoryFilter=cat;renderWeaponCategoryFilters();renderWeaponPicker()};host.appendChild(b);
  });
}
function renderWeaponPicker(){
  const host=document.getElementById('weaponBtns');if(!host)return;
  host.classList.add('weapon-picker');host.innerHTML='';
  const list=weaponCatalog.filter(weaponMatchesFilters);
  const count=document.getElementById('weaponCount');if(count)count.textContent=list.length+' shown / '+weaponCatalog.length+' platforms';
  if(!list.length){host.innerHTML='<div class="weapon-picker-empty">No weapons match this search/filter — or that DLC is toggled off above.</div>';return}
  list.forEach(w=>{
    const b=document.createElement('button');b.type='button';b.classList.toggle('active',state.weapon===w.id);
    b.innerHTML='<span class="weapon-btn-name">'+w.name+'</span><span class="weapon-btn-meta">'+w.category+' · '+w.content+'</span>';
    b.onclick=()=>{state.weapon=w.id;save();renderWeaponPicker();renderWeapon()};host.appendChild(b);
  });
}
function renderWeaponBuildButtons(){
  const host=document.getElementById('buildBtns');if(!host)return;
  host.classList.add('weapon-goals');host.innerHTML='';
  buildList.forEach(([id,label])=>{
    const b=document.createElement('button');b.type='button';b.textContent=label;b.classList.toggle('active',state.build===id);
    b.onclick=()=>{state.build=id;save();renderWeaponBuildButtons();renderWeapon()};host.appendChild(b);
  });
}
function renderWeapon(){
  const w=currentWeaponEntry(),out=document.getElementById('weaponOut');if(!out)return;
  if(!buildList.some(x=>x[0]===state.build)){state.build='general';save()}
  renderWeaponBuildButtons();
  const profile=weapons[w.id][state.build]||weapons[w.id].general;
  const buildName=(buildList.find(x=>x[0]===state.build)||['general','General Use'])[1];
  const aliases=(w.aliases||[]).length?'<p class="weapon-unique-note"><strong>Uses this platform:</strong> '+w.aliases.join(' · ')+'</p>':'';
  const dlcWarn=!weaponDlcEnabled(w)?'<div class="weapon-donor"><h4>DLC currently toggled off</h4><p>This weapon belongs to '+w.content+'. It remains visible because it was your last selected weapon, but the picker hides disabled-DLC platforms.</p></div>':'';
  const slotCards=(w.slots||[]).map(([n,d])=>'<div class="weapon-slot-card"><strong>'+n+'</strong><p>'+d+'</p></div>').join('');
  const setupSlots=(profile[1]||[]).map(([n,d])=>'<div class="slot"><strong>'+n+'</strong><p>'+d+'</p></div>').join('');
  out.innerHTML=
    '<div class="weapon-result-head"><div><p class="eyebrow">WEAPON PLATFORM</p><h3>'+w.name+'</h3><div class="weapon-result-tags"><span class="tag">'+w.category+'</span><span class="tag">'+w.content+'</span><span class="tag">'+buildName+'</span></div></div></div>'+aliases+dlcWarn+
    '<div class="weapon-detail-grid"><div class="weapon-detail-box"><h4>CRAFTING PERKS</h4><p>'+w.perks+'</p></div><div class="weapon-detail-box"><h4>DAMAGE PERK</h4><p>'+w.damagePerk+'</p></div></div>'+ 
    '<div class="weapon-detail-box acquire" style="margin-top:10px"><h4>HOW TO GET THE WEAPON / DONOR MODS</h4><p>'+w.acquire+'</p></div>'+ 
    '<h4 class="weapon-slots-title">What the mod slots actually mean</h4><div class="weapon-slot-grid">'+slotCards+'</div>'+ 
    '<div class="weapon-plan"><h4>'+buildName+' setup</h4><p>'+profile[0]+'</p>'+setupSlots+'<p class="small" style="margin-top:10px"><strong>Guide note:</strong> '+profile[2]+'</p></div>'+ 
    '<div class="weapon-donor"><h4>DONOR WEAPON TRICK</h4><p>See a '+w.name+' with a mod you want? Take or buy that weapon. At a Weapons Workbench, replace the good attachment with a cheap/basic option in the same slot. The removed attachment becomes a loose mod in your Mods inventory. You can then install that owned mod on another compatible '+w.name+' without needing the perk/materials that would have been required to craft it from scratch.</p></div>';
}
function setupWeaponLab(){
  if(typeof weaponCatalog==='undefined'||!weaponCatalog.length)return;
  const search=document.getElementById('weaponSearch');
  if(search&&!search.dataset.weaponBound){search.dataset.weaponBound='1';search.addEventListener('input',()=>{weaponSearchTerm=search.value.toLowerCase().trim();renderWeaponPicker()})}
  renderWeaponCategoryFilters();renderWeaponPicker();renderWeaponBuildButtons();renderWeapon();
  const dlcBox=document.getElementById('dlcBox');
  if(dlcBox&&!dlcBox.dataset.weaponBound){dlcBox.dataset.weaponBound='1';dlcBox.addEventListener('change',()=>setTimeout(()=>{renderWeaponPicker();renderWeapon()},0))}
}

// Keep the app's normal renderControls behavior for everything else, then replace only the weapon picker.
if(typeof renderControls==='function'){
  const coreRenderControls=renderControls;
  renderControls=function(){coreRenderControls();setTimeout(setupWeaponLab,0)};
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setupWeaponLab);else setupWeaponLab();
