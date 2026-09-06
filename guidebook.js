(() => {
  let extraFilter='all';
  const g$=id=>document.getElementById(id);

  function extraDone(q){return !!(state&&state.done&&state.done[q.id])}
  function setExtraDone(q,value){
    state.done[q.id]=value;
    save();
    renderGuidebookExtras();
  }
  function matchesFilter(q){
    if(extraFilter==='all')return true;
    if(extraFilter==='prima')return !!q.prima;
    return (q.tags||[]).includes(extraFilter);
  }
  function matchesSearch(q,term){
    return !term||[q.name,q.kind,q.area,q.desc,...(q.tags||[])].join(' ').toLowerCase().includes(term);
  }
  function renderExtraSummary(){
    const done=guidebookExtras.filter(extraDone).length,total=guidebookExtras.length,p=total?Math.round(done/total*100):0;
    const t=g$('guidebookProgressText'),f=g$('guidebookProgressFill');
    if(t)t.innerHTML='<strong class="count">'+done+'</strong> of <strong>'+total+'</strong> Misc / Freeform entries checked off <span class="guidebook-percent">'+p+'%</span>';
    if(f)f.style.width=p+'%';
  }
  function renderExtraFilters(){
    const box=g$('guidebookFilters');if(!box)return;box.innerHTML='';
    guidebookExtraFilters.forEach(([id,label])=>{
      const b=document.createElement('button');b.type='button';b.textContent=label;b.classList.toggle('active',extraFilter===id);
      b.onclick=()=>{extraFilter=id;renderGuidebookExtras()};box.append(b);
    });
  }
  function extraCard(q){
    const card=document.createElement('label');card.className='guidebook-card'+(extraDone(q)?' done':'');
    const c=document.createElement('input');c.type='checkbox';c.checked=extraDone(q);c.onchange=()=>setExtraDone(q,c.checked);
    const body=document.createElement('div');body.className='guidebook-body';
    body.innerHTML='<div class="guidebook-title"><h3>'+q.name+'</h3><div class="guidebook-badges"><span class="tag">'+q.kind+'</span>'+(q.prima?'<span class="prima-badge">PRIMA ✓</span>':'')+'</div></div><p>'+q.desc+'</p><p class="guidebook-area">⌖ '+q.area+'</p>';
    card.append(c,body);return card;
  }
  function renderExtraList(){
    const box=g$('guidebookList');if(!box)return;box.innerHTML='';
    const search=g$('guidebookSearch'),term=((search&&search.value)||'').trim().toLowerCase();
    const list=guidebookExtras.filter(q=>matchesFilter(q)&&matchesSearch(q,term));
    if(!list.length){box.innerHTML='<div class="empty">No Misc / Freeform entries match that filter.</div>';return}
    list.forEach(q=>box.append(extraCard(q)));
  }
  function renderGuidebookExtras(){
    if(typeof guidebookExtras==='undefined'||!Array.isArray(guidebookExtras))return;
    renderExtraSummary();renderExtraFilters();renderExtraList();
  }
  const search=g$('guidebookSearch');if(search)search.addEventListener('input',renderExtraList);
  renderGuidebookExtras();
})();
