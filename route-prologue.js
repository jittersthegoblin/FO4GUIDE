// Prima's quest index begins the Main story with War Never Changes.
// Keep this as a tiny overlay so existing route IDs/checklist progress stay stable.
(() => {
  if (typeof routes === 'undefined') return;
  const prologue=['War Never Changes','Complete the pre-War prologue, enter Vault 111, and emerge into the Wasteland.','Main Story · Prologue','main_war_never_changes'];
  Object.values(routes).forEach(route=>{
    if (!route || !Array.isArray(route.steps)) return;
    if (!route.steps.some(step=>step[3]===prologue[3])) route.steps.unshift([...prologue]);
  });
})();
