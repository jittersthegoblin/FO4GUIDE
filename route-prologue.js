// Prima's quest index begins the Main story with War Never Changes.
// Keep this as a tiny overlay so existing route IDs/checklist progress stay stable.
(() => {
  if (typeof routes !== 'undefined') {
    const prologue=['War Never Changes','Complete the pre-War prologue, enter Vault 111, and emerge into the Wasteland.','Main Story · Prologue','main_war_never_changes'];
    Object.values(routes).forEach(route=>{
      if (!route || !Array.isArray(route.steps)) return;
      if (!route.steps.some(step=>step[3]===prologue[3])) route.steps.unshift([...prologue]);
    });
  }

  // Build Planner is a separate page, not another app.js tab. Keeping it isolated means
  // a planner error can never stop the quest guide, companions or achievement tracker.
  const tabs=document.querySelector('.tabs');
  if(tabs&&!tabs.querySelector('.build-planner-launch')){
    const link=document.createElement('a');
    link.className='pill build-planner-launch';
    link.href='builds.html';
    link.textContent='Build Planner ↗';
    link.style.textDecoration='none';
    link.style.display='inline-flex';
    link.style.alignItems='center';
    link.style.justifyContent='center';
    tabs.appendChild(link);
  }
})();
