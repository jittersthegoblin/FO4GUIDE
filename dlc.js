(() => {
  let dlcFilter='all';
  const d$=id=>document.getElementById(id);
  function installed(name){return !state||!Array.isArray(state.dlc)||state.dlc.includes(name)}
  function done(id){return !!(state&&state.done&&state.done[id])}
  function setDone(id,value){state.done[id]=value;save();renderDlcTracker()}
  function visibleGroups(){return dlcQuestGroups.filter(g=>installed(g.dlc)&&(dlcFilter==='all'||dlcFilter===g.dlc))}
  function allVisibleQuests(){return visibleGroups().flatMap(g=>g.quests)}
  function renderDlcSummary(){
    const all=dlcQuestGroups.filter(g=>installed(g.dlc)).flatMap(g=>g.quests),completed=all.filter(q=>done(q[0])).length,p=all.length?Math.round(completed/all.length*100):0;
    const t=d$('dlcProgressText'),f=d$('dlcProgressFill');if(t)t.innerHTML='<strong class="count">'+completed+'</strong> of <strong>'+all.length+'</strong> enabled DLC quest entries checked off <span class="dlc-percent">'+p+'%</span>';if(f)f.style.width=p+'%';
  }
  function renderDlcFilters(){
    const box=d$('dlcQuestFilters');if(!box)return;box.innerHTML='';
    [['all','All enabled'],...dlcQuestGroups.map(g=>[g.dlc,g.dlc])].forEach(([id,label])=>{
      const b=document.createElement('button');b.type='button';b.textContent=label;b.classList.toggle('active',dlcFilter===id);if(id!=='all'&&!installed(id))b.disabled=true;b.onclick=()=>{dlcFilter=id;renderDlcTracker()};box.append(b);
    });
  }
  function card(q,dlc){
    const el=document.createElement('label');el.className='dlc-quest-card'+(done(q[0])?' done':'');
    const c=document.createElement('input');c.type='checkbox';c.checked=done(q[0]);c.onchange=()=>setDone(q[0],c.checked);
    const body=document.createElement('div');body.innerHTML='<div class="dlc-qhead"><h3>'+q[1]+'</h3><span class="tag">'+q[2]+'</span></div><p>'+q[3]+'</p><span class="dlc-source">'+dlc+' · Prima GOTY eGuide</span>';
    el.append(c,body);return el;
  }
  function renderDlcGroups(){
    const box=d$('dlcQuestGroups');if(!box)return;box.innerHTML='';const term=((d$('dlcQuestSearch')&&d$('dlcQuestSearch').value)||'').trim().toLowerCase();
    visibleGroups().forEach(g=>{
      const qs=g.quests.filter(q=>!term||(q[1]+' '+q[2]+' '+q[3]+' '+g.dlc).toLowerCase().includes(term));if(!qs.length)return;
      const section=document.createElement('section');section.className='dlc-group';const complete=g.quests.filter(q=>done(q[0])).length;
      section.innerHTML='<div class="dlc-group-head"><div><h2>'+g.dlc+'</h2><p>'+g.intro+'</p></div><span class="pill">'+complete+'/'+g.quests.length+'</span></div>';
      const grid=document.createElement('div');grid.className='dlc-quest-grid';qs.forEach(q=>grid.append(card(q,g.dlc)));section.append(grid);box.append(section);
    });
    if(!box.children.length)box.innerHTML='<div class="empty">No enabled DLC quests match that search/filter.</div>';
    if(dlcFilter==='all'){
      const notes=document.createElement('section');notes.className='dlc-group workshop-only';notes.innerHTML='<div class="dlc-group-head"><div><h2>Workshop-only expansions</h2><p>These packs expand workshop systems rather than adding a conventional story questline.</p></div></div>';
      const list=document.createElement('div');list.className='notes';workshopOnlyDlc.filter(x=>installed(x[0])).forEach(x=>{const n=document.createElement('div');n.className='note';n.innerHTML='<h3>'+x[0]+'</h3><p>'+x[1]+'</p>';list.append(n)});if(list.children.length){notes.append(list);box.append(notes)}
    }
  }
  function renderDlcTracker(){if(typeof dlcQuestGroups==='undefined')return;renderDlcSummary();renderDlcFilters();renderDlcGroups()}
  const s=d$('dlcQuestSearch');if(s)s.addEventListener('input',renderDlcGroups);
  // Re-render when the main DLC checkboxes change.
  document.addEventListener('change',e=>{if(e.target&&e.target.closest('#dlcBox')){if(dlcFilter!=='all'&&!installed(dlcFilter))dlcFilter='all';setTimeout(renderDlcTracker,0)}});
  renderDlcTracker();
})();
