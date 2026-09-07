// Search aliases for named/unique weapons that share a normal parent weapon mod platform.
// Kept separate so the Weapon Mod Lab does not duplicate an entire card for every legendary variant.
(() => {
  if (typeof weaponCatalog === 'undefined') return;
  const add=(id,names)=>{
    const w=weaponCatalog.find(x=>x.id===id); if(!w)return;
    w.aliases=[...new Set([...(w.aliases||[]),...names])];
  };
  const remove=(id,names)=>{
    const w=weaponCatalog.find(x=>x.id===id); if(!w)return;
    w.aliases=(w.aliases||[]).filter(x=>!names.includes(x));
  };

  // Prima's printed appendix calls this "Prototype PA77"; the in-game weapon is
  // Prototype UP77 "Limitless Potential", a unique Laser Gun, not a Gauss Rifle.
  remove('gauss',['Prototype PA77']);
  add('laser',['Prototype UP77 “Limitless Potential”','Prototype UP77','Limitless Potential']);

  // Base-game named variants.
  add('hunting',['Tinker Tom Special']);
  add('combat-shotgun',['Justice']);
  add('gauss',['The Last Minute']);
  add('laser',['Good Intentions',"Survivor's Special"]);
  add('institute-laser',["Virgil's Rifle"]);
  remove('plasma',['Virgil’s Rifle',"Virgil's Rifle"]);
  add('missile',['Partystarter']);
  add('rev-sword',["Shem Drowne's Sword",'Shem Drowne Sword']);

  // Official DLC named variants that share existing platforms.
  add('combat',["December's Child"]);
  add('lever',['Lucky Eddy']);
  add('harpoon',["Skipper's Last Stand"]);
  add('bat',['Fencebuster']);
  add('flamer',['Sergeant Ash']);
  add('ripper',['The Harvester','Reckoning']);
  add('pole-hook',['Bloodletter','The Fish Catcher']);
  add('super-sledge',["Atom's Judgement"]);
  add('chinese-sword',["Zao's Sword",'Sword of Wonders']);
  add('gatling-laser',['Aeternus']);
  add('alien',["Hub's Alien Blaster"]);
  add('laser',["Protectron's Gaze"]);
})();
