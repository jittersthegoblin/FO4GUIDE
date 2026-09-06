const companions = [
  {
    id:'cait', name:'Cait', image:'assets/companions/Cait.png', content:'Base Game', romance:true,
    origin:'An Irish pit fighter found in Boston’s Combat Zone. Cait has survived abuse, exploitation, cage fighting, and a severe chem addiction, which makes her prickly, defensive, and very slow to trust people.',
    recruit:'Clear the Combat Zone and speak with Tommy Lonegan. He will offer Cait as a companion.',
    questline:['The Combat Zone — unlock quest','Benign Intervention — personal quest; required before her affinity story can fully finish'],
    likes:['Picking locks and other rule-breaking behavior','Asking for more caps, selfish or tough dialogue','Chem use before Benign Intervention','Bold or violent solutions when they fit the situation'],
    dislikes:['Overly charitable choices and doing work for free','Helping settlers simply out of kindness','Joining several major factions in front of her','Chem use after Benign Intervention'],
    affinityTip:'A very easy early method is taking her lock-picking and choosing mercenary dialogue. After Benign Intervention, stop using chems around her.',
    perk:'Trigger Rush', perkEffect:'AP regenerates 25% faster while your health is below 25%.',
    note:'Romanceable. Benign Intervention changes some of her affinity reactions, especially around chems.'
  },
  {
    id:'codsworth', name:'Codsworth', image:'assets/companions/Codsworth.png', content:'Base Game', romance:false,
    origin:'The Sole Survivor’s pre-War Mister Handy and household servant. He remained in Sanctuary for roughly two centuries after the bombs, still waiting for his family to return.',
    recruit:'Return to Sanctuary after leaving Vault 111. He becomes recruitable after the story advances far enough — commonly by reaching Concord, Diamond City, or Nick Valentine.',
    questline:['Out of Time — story introduction','No personal companion quest'],
    likes:['Kind, polite and generous choices','Helping people and settlers','Weapon modding','Armor modding'],
    dislikes:['Stealing and pickpocketing','Murder and needless cruelty','Chem use and addiction','Selfish or callous behavior'],
    affinityTip:'If you want his perk quickly, keep him nearby while modifying weapons and armor, then let the repeatable affinity cooldown reset.',
    perk:'Robot Sympathy', perkEffect:'+10 Damage Resistance against energy attacks from robots.',
    note:'Not romanceable. With Automatron installed, Codsworth can be modified at a robot workbench.'
  },
  {
    id:'curie', name:'Curie', image:'assets/companions/Curie.png', content:'Base Game', romance:true,
    origin:'CVRIE — the Contagions Vulnerability Robotic Infirmary Engineer — is a Miss Nanny scientist from Vault 81’s hidden medical wing. She spent generations continuing the vault scientists’ research into a universal cure.',
    recruit:'Complete Vault 81’s Hole in the Wall and speak with Curie in the secret wing.',
    questline:['Vault 81 / Hole in the Wall — unlock','Emergent Behavior — personal quest after gaining affinity; Dangerous Minds must also be complete'],
    likes:['Peaceful and compassionate choices','Helping settlers and innocent people','Healing Dogmeat','Scientific or humane solutions'],
    dislikes:['Stealing and pickpocketing','Cruel or needlessly violent decisions','Chem abuse and addiction','Cannibalism'],
    affinityTip:'Travel with her while doing helpful side quests. Her affinity is gated until Emergent Behavior progresses, so do not panic if approval seems stuck.',
    perk:'Combat Medic', perkEffect:'Once every 24 hours, restores 100 HP if your health falls below 10%.',
    note:'Romanceable. Emergent Behavior transfers Curie into a synth body and is required for her affinity to progress to maximum.'
  },
  {
    id:'danse', name:'Paladin Danse', image:'assets/companions/Paladin-Danse.png', content:'Base Game', romance:true,
    origin:'A Brotherhood of Steel paladin leading Recon Squad Gladius from Cambridge Police Station. He is disciplined, duty-driven, and deeply loyal to Brotherhood ideals.',
    recruit:'Complete Fire Support and Call to Arms, progress the main story through Reunions, then board the Prydwen and complete Shadow of Steel.',
    questline:['Fire Support','Call to Arms','Shadow of Steel — companion unlock','Brotherhood main questline','Blind Betrayal — personal/story quest required for maximum affinity'],
    likes:['Weapon and armor modding','Entering power armor','Helping the Brotherhood','Disciplined, duty-focused choices'],
    dislikes:['Chems and addiction','Stealing and pickpocketing','Cannibalism','Helping the Institute'],
    affinityTip:'Weapon/armor modding and using power armor are reliable repeatable approval triggers. Maximum affinity is locked behind Blind Betrayal.',
    perk:'Know Your Enemy', perkEffect:'+20% damage against feral ghouls, super mutants, and synths.',
    note:'Romanceable after Blind Betrayal. Faction choices can permanently affect whether Danse remains available.'
  },
  {
    id:'deacon', name:'Deacon', image:'assets/companions/Deacon.png', content:'Base Game', romance:false,
    origin:'A veteran Railroad spy who constantly changes clothes, identities, and stories. He has quietly watched the Sole Survivor’s progress before formally meeting them.',
    recruit:'Find the Railroad through Road to Freedom, join them, and complete Tradecraft.',
    questline:['Road to Freedom','Tradecraft — companion unlock','Railroad main questline; no personal affinity quest'],
    likes:['Picking locks','Hacking terminals','Peaceful dialogue','Helping synths and supporting Railroad ideals'],
    dislikes:['Cruelty and murder','Chem use','Cannibalism','Turning against the Railroad'],
    affinityTip:'Bring him for exploration-heavy play: locks + terminals can give steady approval without requiring evil choices.',
    perk:'Cloak & Dagger', perkEffect:'+20% sneak attack damage and +40% Stealth Boy duration.',
    note:'Not romanceable. Siding hard against the Railroad can cost you Deacon as a companion.'
  },
  {
    id:'dogmeat', name:'Dogmeat', image:'assets/companions/Dogmeat.png', content:'Base Game', romance:false,
    origin:'A loyal German Shepherd encountered wandering near the Red Rocket truck stop outside Sanctuary. His exact pre-meeting history is deliberately left mysterious.',
    recruit:'Simply greet Dogmeat at the Red Rocket truck stop south of Sanctuary.',
    questline:['Red Rocket introduction','Reunions — Dogmeat helps track Kellogg','No personal companion quest'],
    likes:['Dogmeat has no affinity system. He stays loyal regardless of your moral choices.'],
    dislikes:['None — Dogmeat does not gain or lose affinity.'],
    affinityTip:'There is nothing to grind. He has no affinity meter and no affinity perk.',
    perk:'No affinity perk', perkEffect:'Attack Dog is a normal Charisma perk purchased with perk points; it is not earned from Dogmeat affinity.',
    note:'Not romanceable. His ability to search for items, containers and enemies makes him useful even without an affinity system.'
  },
  {
    id:'hancock', name:'John Hancock', image:'assets/companions/John-Hancock.png', content:'Base Game', romance:true,
    origin:'The ghoul mayor of Goodneighbor: fiercely anti-authoritarian, protective of his town, and fond of chems. He is the estranged brother of Diamond City mayor McDonough and became a ghoul after taking an experimental drug.',
    recruit:'Complete The Big Dig, then finish Recruiting Hancock if that follow-up is required by your ending to The Big Dig.',
    questline:['The Big Dig — required unlock quest','Recruiting Hancock — possible follow-up','The Silver Shroud and Art Appreciation — related Goodneighbor content'],
    likes:['Using chems and becoming addicted','Helping settlers and underdogs','Generous or anti-authoritarian choices','Healing Dogmeat'],
    dislikes:['Stealing and pickpocketing','Cruelty and needless murder','Abusing innocent people'],
    affinityTip:'Helpful quests plus occasional chem use make him fairly easy to please without playing an outright villain.',
    perk:'Isodoped', perkEffect:'Critical meter fills 20% faster while you have 250 or more rads.',
    note:'Romanceable. The Big Dig is both a World/City side quest and a companion-unlock quest — the guide intentionally tags it in both places.'
  },
  {
    id:'maccready', name:'Robert MacCready', image:'assets/companions/Robert-MacCready.png', content:'Base Game', romance:true,
    origin:'The former child mayor of Little Lamplight from Fallout 3, now grown into a Commonwealth mercenary. He is a widower and is trying to protect his sick son Duncan from afar.',
    recruit:'Find him arguing with Gunners in The Third Rail in Goodneighbor and hire him for caps. Speech checks can lower his fee.',
    questline:['MacCready for Action — hiring/unlock','Long Road Ahead — two-stage personal quest that unfolds as affinity rises'],
    likes:['Asking for more caps and mercenary dialogue','Stealing','Picking owned locks','Fighting and pragmatic solutions'],
    dislikes:['Working purely for charity','Overly self-sacrificing choices','Actions that turn Goodneighbor hostile'],
    affinityTip:'Ask for better pay, pick owned locks, and take him on combat-heavy jobs. Long Road Ahead must progress before his affinity can keep climbing.',
    perk:'Killshot', perkEffect:'+20% V.A.T.S. accuracy when targeting an enemy’s head.',
    note:'Romanceable. Long Road Ahead eventually takes you to Med-Tek Research to find medicine for Duncan.'
  },
  {
    id:'nick', name:'Nick Valentine', image:'assets/companions/Nick-Valentine.png', content:'Base Game', romance:false,
    origin:'A prototype synth detective living in Diamond City. Nick carries the implanted memories of a pre-War police detective and has built an identity of his own around helping people solve cases.',
    recruit:'Rescue Nick from Vault 114 during Unlikely Valentine, then progress Getting a Clue in Diamond City.',
    questline:['Unlikely Valentine — rescue','Getting a Clue — companion unlock','Dangerous Minds','Long Time Coming — personal quest after enough affinity; collect Eddie Winter holotapes','Far Harbor — major extra Nick/DiMA story content'],
    likes:['Hacking terminals','Helping people','Peaceful or compassionate choices','Healing Dogmeat'],
    dislikes:['Stealing and pickpocketing','Murder and cruelty','Cannibalism'],
    affinityTip:'Take him along for detective-style side quests and terminals. Long Time Coming must be completed before maximum affinity/perk can be reached.',
    perk:'Close to Metal', perkEffect:'One extra hacking guess and 50% faster terminal lockout cooldown.',
    note:'Not romanceable. Bringing Nick to Far Harbor adds a substantial amount of unique story dialogue.'
  },
  {
    id:'piper', name:'Piper Wright', image:'assets/companions/Piper-Wright.png', content:'Base Game', romance:true,
    origin:'The investigative reporter behind Publick Occurrences in Diamond City. Piper grew up challenging corruption and now spends her life poking at powerful people — especially the Institute and Mayor McDonough.',
    recruit:'Meet Piper at Diamond City and complete Story of the Century by agreeing to her interview. She can also become available later after Reunions.',
    questline:['Story of the Century — companion unlock','No personal affinity quest'],
    likes:['Helping innocent people','Peaceful and honest dialogue','Picking unowned locks','Supporting the Minutemen and Railroad'],
    dislikes:['Stealing and picking owned locks','Bribery, extortion and demanding money','Cruelty toward civilians','Several pro-Brotherhood choices'],
    affinityTip:'She fits naturally with a helpful explorer: accept side quests, discover locations, talk people down, and avoid theft.',
    perk:'Gift of Gab', perkEffect:'Double XP for successful speech challenges and discovering new locations.',
    note:'Romanceable. She has no personal companion quest, so affinity can be raised naturally as you explore.'
  },
  {
    id:'preston', name:'Preston Garvey', image:'assets/companions/Preston-Garvey.png', content:'Base Game', romance:true,
    origin:'A surviving Commonwealth Minuteman who endured the collapse of the organization and the Quincy Massacre. By the time you meet him in Concord, he is trying to protect the last few people still depending on him.',
    recruit:'Rescue Preston’s group during When Freedom Calls, complete The First Step, and accept his offer to become General of the Minutemen.',
    questline:['When Freedom Calls','The First Step — companion unlock','Taking Independence','Old Guns','Minutemen radiant settlement quests','Minutemen endgame'],
    likes:['Helping settlements and civilians','Minutemen-friendly decisions','Weapon modding','Generous and community-minded choices'],
    dislikes:['Stealing and pickpocketing','Murder and cruelty','Chem use','Raider behavior'],
    affinityTip:'Just doing Minutemen/settlement work with him is extremely effective. Weapon modding is also repeatable.',
    perk:'United We Stand', perkEffect:'+20% damage and +20 Damage Resistance when facing three or more enemies.',
    note:'Romanceable. WARNING: taking a Commonwealth settlement for Nuka-World raiders during Home Sweet Home can crash Preston’s affinity to Hated and permanently damage the relationship.'
  },
  {
    id:'strong', name:'Strong', image:'assets/companions/Strong.png', content:'Base Game', romance:false,
    origin:'A super mutant imprisoned at Trinity Tower alongside Rex Goodman. Strong became fascinated by Rex’s reading of Macbeth and now searches for the mysterious “milk of human kindness.”',
    recruit:'Complete Curtain Call at Trinity Tower and escort Rex and Strong safely to the lobby.',
    questline:['Curtain Call — companion unlock','No personal companion quest'],
    likes:['Fighting','Murder','Cannibalism','Direct, forceful solutions'],
    dislikes:['Picking locks','Entering power armor','Sneaky or overly technical behavior','Many anti-super-mutant or overly civilized choices'],
    affinityTip:'Strong is easiest for melee/violent characters. If you are a compulsive lock-picker or power-armor user, affinity can feel painfully slow.',
    perk:'Berserk', perkEffect:'+20% melee weapon damage while your health is below 25%.',
    note:'Not romanceable. Curtain Call should appear under both World/City and Companion-related side quests.'
  },
  {
    id:'x688', name:'X6-88', image:'assets/companions/X6-88.png', content:'Base Game', romance:false,
    origin:'An Institute Courser from the Synth Retention Bureau: calm, precise, heavily conditioned, and built to retrieve escaped synths and eliminate threats to the Institute.',
    recruit:'He first accompanies you temporarily during Synth Retention. He becomes a permanent companion after Mankind - Redefined, around the start of Mass Fusion.',
    questline:['Synth Retention — temporary companion','Mankind - Redefined','Mass Fusion — permanent-companion stage','Institute questline; no personal affinity quest'],
    likes:['Institute side/radiant work','Weapon modding','Armor modding','Entering power armor','Hacking terminals'],
    dislikes:['Chem use','Actions that openly undermine the Institute'],
    affinityTip:'If you are on an Institute-friendly route, his affinity rises naturally. Weapon/armor modding and power armor provide repeatable approval.',
    perk:'Shield Harmonics', perkEffect:'+20 Energy Resistance.',
    note:'Not romanceable. Bringing X6-88 into Railroad HQ can create faction trouble, so keep an eye on where you take him.'
  },
  {
    id:'ada', name:'Ada', image:'assets/companions/Ada.png', content:'Automatron', romance:false,
    origin:'A heavily modified Assaultron built by caravan leader Jackson. Ada is the sole survivor after the Mechanist’s robots destroy her caravan, and she becomes determined to stop the attacks.',
    recruit:'Start Automatron’s Mechanical Menace, defeat the attacking robots near Wattz Consumer Electronics, then agree to help Ada hunt the Mechanist.',
    questline:['Mechanical Menace — companion unlock','A New Threat','Headhunting','Restoring Order','Rogue Robot — repeatable post-story work'],
    likes:['Ada has no affinity system and remains loyal regardless of your choices.'],
    dislikes:['None — she does not gain or lose affinity.'],
    affinityTip:'No affinity grind is needed. Instead, improve Ada at the robot workbench with weapons, armor, hacking, or lock-picking modules.',
    perk:'No affinity perk', perkEffect:'Ada has no companion affinity perk.',
    note:'Not romanceable. Fully customizable at a Robot Workbench.'
  },
  {
    id:'automatron', name:'Automatron', image:'assets/companions/Automatron.png', content:'Automatron', romance:false,
    origin:'A custom robot companion designed and built by the player at a Robot Workbench using interchangeable Protectron, Assaultron, Sentry Bot, Mr. Handy and Robobrain-style components.',
    recruit:'Progress the Automatron questline until the Robot Workbench is unlocked, then construct a robot and activate its personality subroutine.',
    questline:['Automatron DLC / Robot Workbench','Restoring Order — optional companion use','No personal companion quest'],
    likes:['Player-built Automatrons have no affinity system.'],
    dislikes:['None — their affinity cannot change.'],
    affinityTip:'Treat this as a build-crafting companion instead: decide whether you want combat, carrying capacity, hacking, lock-picking, or a ridiculous murder machine.',
    perk:'No affinity perk', perkEffect:'Custom Automatrons do not grant an affinity perk.',
    note:'Not romanceable. Their stats and abilities depend heavily on the parts you install.'
  },
  {
    id:'longfellow', name:'Old Longfellow', image:'assets/companions/Old-Longfellow.png', content:'Far Harbor', romance:false,
    origin:'A veteran hunter and guide living on the Island. Longfellow knows the Fog better than almost anyone and spends much of his time drinking at the Last Plank in Far Harbor.',
    recruit:'During Far Harbor, speak with him at the Last Plank and complete Walk in the Park by reaching Acadia.',
    questline:['Walk in the Park — companion unlock','Far Harbor main questline','Shipbreaker — related side quest'],
    likes:['Drinking hard liquor','Gathering junk','Helping locals and settlers','Practical survival-minded choices'],
    dislikes:['Chem use','Pickpocketing','Cannibalism','Murder and pointless cruelty'],
    affinityTip:'Scavenge while traveling with him and occasionally drink hard liquor. His tastes fit a rugged exploration playthrough very naturally.',
    perk:'Hunter’s Wisdom', perkEffect:'Animals and sea creatures have 25% less Damage Resistance and Energy Resistance against your attacks.',
    note:'Not romanceable. Certain destructive Far Harbor endings can make him hostile.'
  },
  {
    id:'gage', name:'Porter Gage', image:'assets/companions/Porter-Gage.png', content:'Nuka-World', romance:true,
    origin:'A hardened raider and former mercenary who serves as Overboss Colter’s right-hand man in Nuka-World. After Colter falls, Gage becomes the new Overboss’s guide, adviser, and possible partner.',
    recruit:'Complete An Ambitious Plan by meeting the Nuka-World gang bosses, then speak with Gage again at Fizztop Grille as The Grand Tour begins.',
    questline:['Taken for a Ride','An Ambitious Plan — companion unlock','The Grand Tour','Home Sweet Home','Power Play','Open Season — WARNING: turning the raiders hostile costs you Gage'],
    likes:['Weapon modding','Lock-picking','Stealing','Aggressive raider-style choices'],
    dislikes:['Helping settlers out of kindness','Overly friendly or generous dialogue','Chem use','Alcohol use'],
    affinityTip:'Weapon modding is one of the safest repeatable ways to raise his affinity without committing crimes all over the Commonwealth.',
    perk:'Lessons in Blood', perkEffect:'+5% XP per kill and +10 Damage Resistance.',
    note:'Romanceable. If you turn the Nuka-World raiders hostile, Gage becomes hostile and is lost as a companion.'
  }
];

const companionFilters = [
  ['all','All'],['Base Game','Base Game'],['Automatron','Automatron'],['Far Harbor','Far Harbor'],['Nuka-World','Nuka-World'],['romance','Romanceable'],['noaffinity','No Affinity']
];
