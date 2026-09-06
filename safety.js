// Quest safety overlays: timed jobs, faction lockouts, points of no return, and smart manual-save moments.
(() => {
  const safety = {
    'The Silver Shroud': [
      ['save','💾','SAVE FIRST','Make a manual save before entering Milton General Hospital / beginning the final Kent rescue. Kent can die during the confrontation, and this sequence can be finicky.']
    ],
    'The Big Dig': [
      ['save','💾','SAVE FIRST','The ending contains a major choice that changes the outcome and is tied to unlocking Hancock. A manual save before the final stretch is useful.']
    ],
    'Diamond City Blues': [
      ['save','💾','SAVE FIRST','This quest has several branching outcomes and NPC consequences. Save before the drug-deal confrontation if you want room to reconsider the result.']
    ],
    'Human Error': [
      ['save','💾','SAVE FIRST','Covenant has a major local choice with permanent consequences. Save before committing to the final resolution.']
    ],
    'The Secret of Cabot House': [
      ['save','💾','SAVE FIRST','The Cabot storyline ends in a major choice. A manual save before the final decision is recommended.']
    ],
    'Vault 81 and Hole in the Wall': [
      ['save','💾','SAVE FIRST','This quest has an easy-to-miss permanent health consequence and an important reward choice. A save before entering the hidden Vault 81 section is useful.']
    ],
    'Blind Betrayal': [
      ['save','💾','SAVE FIRST','A major Danse story decision happens here. Save before the confrontation if his outcome matters to you.']
    ],
    'Tactical Thinking': [
      ['lockout','⚠','LOCKOUT RISK','Dangerous for a Railroad-friendly run. Finish Railroad content you care about before pushing this quest.'],
      ['point','⛔','POINT OF NO RETURN','Treat this as a major Brotherhood commitment point.']
    ],
    'Mass Fusion': [
      ['lockout','⚠','LOCKOUT RISK','A major Institute-versus-Brotherhood split. Continuing can close Brotherhood options.'],
      ['point','⛔','POINT OF NO RETURN','Confirm your intended faction route before continuing.']
    ],
    'Spoils of War': [
      ['lockout','⚠','LOCKOUT RISK','A major Brotherhood-versus-Institute split. Continuing can close Institute options.'],
      ['point','⛔','POINT OF NO RETURN','Confirm your intended faction route before continuing.']
    ],
    'End of the Line': [
      ['lockout','⚠','LOCKOUT RISK','This late Institute quest directly threatens the Railroad.'],
      ['point','⛔','POINT OF NO RETURN','Finish Railroad content you care about first.']
    ],
    'Precipice of War': [
      ['point','⛔','POINT OF NO RETURN','Late Railroad commitment: open conflict with the Brotherhood is beginning.']
    ],
    "Rockets' Red Glare": [
      ['point','⛔','POINT OF NO RETURN','This is a late Railroad endgame operation against the Brotherhood.']
    ],
    'Airship Down': [
      ['point','⛔','POINT OF NO RETURN','Late Institute endgame operation against the Brotherhood.']
    ],
    'Operation Ticonderoga': [
      ['lockout','⚠','LOCKOUT RISK','For a Railroad route, finish this when offered. Advancing the undercover line too far can make it unavailable.']
    ],
    'Underground Undercover': [
      ['lockout','⚠','LOCKOUT RISK','This quest is tightly linked to late Railroad/Institute progression. Check your remaining Railroad jobs before advancing its late stages.']
    ],
    'Defend a Settlement': [
      ['timed','⏰','TIMED','Settlement defense quests use hidden timing logic. Treat this as urgent once it appears.']
    ],
    'Defend Artillery': [
      ['timed','⏰','TIMED','This Minutemen defense job uses hidden timing logic. Handle it promptly.']
    ],
    'Kidnapping': [
      ['timed','⏰','TIMED','Minutemen kidnapping radiants can expire. Do not leave this sitting indefinitely.']
    ],
    'Kidnapped Trader': [
      ['timed','⏰','TIMED','This rescue-style Minutemen radiant can expire. Handle it promptly.']
    ],
    'Raider Troubles': [
      ['timed','⏰','TIMED','This Minutemen recruitment radiant has a hidden time limit, even though the game does not show a countdown.']
    ],
    'Ghoul Problem': [
      ['timed','⏰','TIMED','This Minutemen recruitment radiant has a hidden time limit.']
    ],
    'Greenskins': [
      ['timed','⏰','TIMED','This Minutemen recruitment radiant has a hidden time limit.']
    ]
  };

  const styles = document.createElement('style');
  styles.textContent = `
    .safety-legend{margin-top:14px;padding:14px 16px}
    .safety-legend h2{margin:0 0 5px;color:var(--bright);font-size:1.05rem}
    .safety-legend p{margin:0;color:var(--muted);line-height:1.5}
    .safety-legend-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
    .safety-badge{display:inline-flex;align-items:center;gap:5px;padding:4px 8px;border-radius:999px;border:1px solid;font:700 .75rem Consolas,"Courier New",monospace;letter-spacing:.02em;white-space:nowrap}
    .safety-badge.timed{color:#dff8ff;border-color:#70d9ff88;background:#0c3340}
    .safety-badge.lockout{color:#ffe39a;border-color:#ffc96f88;background:#3a2a0d}
    .safety-badge.point{color:#ffb0b0;border-color:#ff7d7d88;background:#3a1515}
    .safety-badge.save{color:#d8c7ff;border-color:#b99cff88;background:#261b3d}
    .quest-safety-row{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
    .quest-safety-note{margin-top:7px;padding:8px 10px;border-left:3px solid #b99cff88;background:#0a1d12;border-radius:0 8px 8px 0;color:var(--muted);font-size:.88rem;line-height:1.45}
    .quest-safety-note strong{color:var(--text)}
    .questpeek-safety{margin-top:10px;display:grid;gap:7px}
    .questpeek-safety .quest-safety-note{margin-top:0}
    @media(max-width:600px){.safety-legend-row{display:grid;grid-template-columns:1fr 1fr}.safety-badge{justify-content:center}}
  `;
  document.head.appendChild(styles);

  function normalizeTitle(title){
    return (title || '').trim();
  }

  function warningsFor(title){
    const exact = safety[normalizeTitle(title)];
    if (exact) return exact;
    // Route cards sometimes combine quest names into one title.
    const out = [];
    Object.entries(safety).forEach(([name, warnings]) => {
      if (normalizeTitle(title).includes(name)) warnings.forEach(w => out.push(w));
    });
    return out;
  }

  function badge(w){
    const span = document.createElement('span');
    span.className = `safety-badge ${w[0]}`;
    span.textContent = `${w[1]} ${w[2]}`;
    span.title = w[3];
    return span;
  }

  function ensureLegend(){
    if (document.querySelector('.safety-legend')) return;
    const tabs = document.querySelector('.tabs');
    if (!tabs) return;
    const box = document.createElement('section');
    box.className = 'box safety-legend';
    box.innerHTML = '<h2>Quest Warning Legend</h2><p>These symbols mean different things. A quest can have more than one.</p>';
    const row = document.createElement('div');
    row.className = 'safety-legend-row';
    [
      ['timed','⏰','TIMED','There is a real or hidden time limit.'],
      ['lockout','⚠','LOCKOUT RISK','Progress can close another quest, faction, companion, or outcome.'],
      ['point','⛔','POINT OF NO RETURN','A major commitment point; confirm your route first.'],
      ['save','💾','SAVE FIRST','A manual save is especially useful before a fragile or heavily branching sequence.']
    ].forEach(w => row.appendChild(badge(w)));
    box.appendChild(row);
    tabs.insertAdjacentElement('afterend', box);
  }

  function decorateQuestCards(){
    document.querySelectorAll('.item').forEach(card => {
      const titleEl = card.querySelector('h3');
      if (!titleEl) return;
      const title = titleEl.textContent.trim();
      const warnings = warningsFor(title);
      const old = card.querySelector('.quest-safety-row');
      if (!warnings.length){ if(old) old.remove(); return; }
      if (old && old.dataset.safetyTitle === title) return;
      if (old) old.remove();
      const row = document.createElement('div');
      row.className = 'quest-safety-row';
      row.dataset.safetyTitle = title;
      warnings.forEach(w => row.appendChild(badge(w)));
      const info = titleEl.parentElement;
      if (info) info.appendChild(row);
    });
  }

  function decorateQuestPeek(){
    const peek = document.getElementById('questPeek');
    const titleEl = document.getElementById('questPeekTitle');
    if (!peek || !titleEl) return;
    const title = titleEl.textContent.trim();
    const warnings = warningsFor(title);
    let area = peek.querySelector('.questpeek-safety');
    if (!warnings.length){ if(area) area.remove(); return; }
    if (!area){ area = document.createElement('div'); area.className='questpeek-safety'; peek.appendChild(area); }
    if (area.dataset.safetyTitle === title) return;
    area.dataset.safetyTitle = title;
    area.innerHTML = '';
    const row = document.createElement('div');
    row.className = 'quest-safety-row';
    warnings.forEach(w => row.appendChild(badge(w)));
    area.appendChild(row);
    warnings.forEach(w => {
      const note = document.createElement('div');
      note.className = 'quest-safety-note';
      note.innerHTML = `<strong>${w[1]} ${w[2]}:</strong> ${w[3]}`;
      area.appendChild(note);
    });
  }

  let queued = false;
  function apply(){
    queued = false;
    ensureLegend();
    decorateQuestCards();
    decorateQuestPeek();
  }
  function queueApply(){
    if (queued) return;
    queued = true;
    requestAnimationFrame(apply);
  }

  // The guide re-renders quest cards when checkboxes, filters, or route buttons change.
  // Observe those changes and re-apply badges without touching the guide's core logic.
  const observer = new MutationObserver(queueApply);
  observer.observe(document.body,{childList:true,subtree:true,characterData:true});
  apply();
})();
