const specialTree={
S:{name:'Strength',short:'STR',role:'Carry weight and melee damage.',perks:[
['Iron Fist',1],['Big Leagues',2],['Armorer',3],['Blacksmith',4],['Heavy Gunner',5],['Strong Back',6],['Steady Aim',7],['Basher',8],['Rooted',9],['Pain Train',10]
]},
P:{name:'Perception',short:'PER',role:'V.A.T.S. accuracy and ranged utility.',perks:[
['Pickpocket',1],['Rifleman',2],['Awareness',3],['Locksmith',4],['Demolition Expert',5],['Night Person',6],['Refractor',7],['Sniper',8],['Penetrator',9],['Concentrated Fire',10]
]},
E:{name:'Endurance',short:'END',role:'Health, durability and environmental survival.',perks:[
['Toughness',1],['Lead Belly',2],['Life Giver',3],['Chem Resistant',4],['Aquaboy / Aquagirl',5],['Rad Resistant',6],['Adamantium Skeleton',7],['Cannibal',8],['Ghoulish',9],['Solar Powered',10]
]},
C:{name:'Charisma',short:'CHR',role:'Persuasion, companions, prices and settlements.',perks:[
['Cap Collector',1],['Black Widow / Lady Killer',2],['Lone Wanderer',3],['Attack Dog',4],['Animal Friend',5],['Local Leader',6],['Party Girl / Party Boy',7],['Inspirational',8],['Wasteland Whisperer',9],['Intimidation',10]
]},
I:{name:'Intelligence',short:'INT',role:'XP gain, hacking, crafting and technology.',perks:[
['V.A.N.S.',1],['Medic',2],['Gun Nut',3],['Hacker',4],['Scrapper',5],['Science!',6],['Chemist',7],['Robotics Expert',8],['Nuclear Physicist',9],['Nerd Rage!',10]
]},
A:{name:'Agility',short:'AGI',role:'Action Points, stealth and fast weapon styles.',perks:[
['Gunslinger',1],['Commando',2],['Sneak',3],['Mister Sandman',4],['Action Boy / Action Girl',5],['Moving Target',6],['Ninja',7],['Quick Hands',8],['Blitz',9],['Gun Fu',10]
]},
L:{name:'Luck',short:'LCK',role:'Critical hits, loot and V.A.T.S. chaining.',perks:[
['Fortune Finder',1],['Scrounger',2],['Bloody Mess',3],['Mysterious Stranger',4],['Idiot Savant',5],['Better Criticals',6],['Critical Banker',7],["Grim Reaper's Sprint",8],['Four Leaf Clover',9],['Ricochet',10]
]}
};

const buildTags=[
{id:'stealth',label:'Stealth',group:'Combat style',desc:'Stay unseen, open fights with sneak attacks and control when combat starts.',weights:{A:7,P:2,L:1},perks:[
{name:'Sneak',tier:'core',reason:'The basic stealth perk: harder detection and progressively safer sneaking.'},
{name:'Ninja',tier:'core',reason:'Multiplies sneak-attack damage, making successful ambushes much more rewarding.'},
{name:'Mister Sandman',tier:'strong',reason:'Excellent when your stealth build uses suppressed firearms.'},
{name:'Action Boy / Action Girl',tier:'strong',reason:'Faster AP recovery helps V.A.T.S., sprinting and repositioning.'}
]},
{id:'sniper',label:'Sniper',group:'Weapons',desc:'Non-automatic rifles, long-range precision and scoped combat.',weights:{P:7,A:2,I:2,L:1},perks:[
{name:'Rifleman',tier:'core',reason:'The main damage perk for non-automatic rifles.'},
{name:'Sniper',tier:'core',reason:'Adds dedicated scoped-rifle benefits for a long-range playstyle.'},
{name:'Penetrator',tier:'strong',reason:'Useful for V.A.T.S. shots through cover and hard-to-reach body parts.'},
{name:'Concentrated Fire',tier:'optional',reason:'Very strong for a V.A.T.S.-heavy sniper once you can afford PER 10.'},
{name:'Gun Nut',tier:'strong',reason:'Unlocks better ballistic receiver, barrel, stock, sight and suppressor mods.'}
]},
{id:'melee',label:'Melee',group:'Weapons',desc:'Bats, blades, hammers and other close-range melee weapons.',weights:{S:8,E:2,A:2},perks:[
{name:'Big Leagues',tier:'core',reason:'The primary damage perk for melee weapons.'},
{name:'Blacksmith',tier:'strong',reason:'Unlocks increasingly advanced melee weapon modifications.'},
{name:'Rooted',tier:'strong',reason:'A strong close-combat damage and resistance bonus while standing still.'},
{name:'Armorer',tier:'optional',reason:'Useful because melee characters spend much more time inside enemy reach.'},
{name:'Life Giver',tier:'optional',reason:'Extra health is a forgiving quality-of-life choice for close combat.'}
]},
{id:'unarmed',label:'Unarmed',group:'Weapons',desc:'Fists, knuckles, power fists and other unarmed attacks.',weights:{S:8,E:3,A:2},perks:[
{name:'Iron Fist',tier:'core',reason:'The primary damage perk for unarmed attacks.'},
{name:'Rooted',tier:'strong',reason:'Excellent when you are planted in place trading blows at close range.'},
{name:'Blitz',tier:'strong',reason:'Transforms V.A.T.S. unarmed combat by letting you attack from much farther away.'},
{name:'Life Giver',tier:'optional',reason:'Extra health makes the early unarmed game less punishing.'}
]},
{id:'pistols',label:'Pistols',group:'Weapons',desc:'Fast, light non-automatic handguns and sidearms.',weights:{A:6,L:3,P:1,I:1},perks:[
{name:'Gunslinger',tier:'core',reason:'The main damage perk for non-automatic pistols.'},
{name:'Action Boy / Action Girl',tier:'strong',reason:'Pistols pair naturally with AP-heavy V.A.T.S. play.'},
{name:'Gun Nut',tier:'strong',reason:'Unlocks useful receivers, sights, barrels and suppressors for ballistic pistols.'},
{name:'Better Criticals',tier:'optional',reason:'A strong late-game addition for V.A.T.S. pistol builds.'}
]},
{id:'automatic',label:'Automatic',group:'Weapons',desc:'Automatic rifles, SMGs and automatic pistols.',weights:{A:6,I:3,L:2},perks:[
{name:'Commando',tier:'core',reason:'The main damage perk for automatic weapons.'},
{name:'Gun Nut',tier:'core',reason:'Important for automatic receivers and practical ballistic weapon upgrades.'},
{name:'Scrounger',tier:'strong',reason:'Automatic weapons consume ammunition quickly; finding more ammo helps enormously.'},
{name:'Action Boy / Action Girl',tier:'optional',reason:'Useful if you mix automatic fire with V.A.T.S. or lots of sprinting.'}
]},
{id:'heavy',label:'Heavy Guns',group:'Weapons',desc:'Miniguns, missile launchers, Fat Man and other heavy weapons.',weights:{S:8,I:3,E:2},perks:[
{name:'Heavy Gunner',tier:'core',reason:'The primary damage perk for heavy weapons.'},
{name:'Strong Back',tier:'strong',reason:'Heavy weapons and their ammunition make carry capacity especially valuable.'},
{name:'Gun Nut',tier:'strong',reason:'Useful for many conventional heavy-weapon modifications.'},
{name:'Nuclear Physicist',tier:'optional',reason:'Especially relevant if your heavy setup overlaps with fusion-core weapons or Power Armor.'}
]},
{id:'explosives',label:'Explosives',group:'Weapons',desc:'Grenades, mines and explosive launchers.',weights:{P:8,S:2,I:1},perks:[
{name:'Demolition Expert',tier:'core',reason:'The defining perk for explosives, improving damage and later grenade utility.'},
{name:'Heavy Gunner',tier:'strong',reason:'Relevant when your explosive build includes missile launchers or the Fat Man.'},
{name:'Scrounger',tier:'optional',reason:'Helpful for ammunition-heavy explosive weapon setups.'}
]},
{id:'vats',label:'V.A.T.S.',group:'Combat style',desc:'Spend Action Points deliberately and build around critical hits.',weights:{A:7,L:7,P:4},perks:[
{name:'Action Boy / Action Girl',tier:'core',reason:'More AP regeneration means more frequent V.A.T.S. use.'},
{name:'Better Criticals',tier:'core',reason:'Makes your manually triggered critical hits hit much harder.'},
{name:'Critical Banker',tier:'core',reason:'Lets you save critical hits for dangerous enemies or guaranteed shots.'},
{name:"Grim Reaper's Sprint",tier:'strong',reason:'Can refill Action Points after V.A.T.S. kills and keep a chain going.'},
{name:'Four Leaf Clover',tier:'strong',reason:'Builds the critical meter through ordinary V.A.T.S. hits.'},
{name:'Concentrated Fire',tier:'strong',reason:'Excellent for repeated ranged V.A.T.S. shots against the same body part.'},
{name:'Gun Fu',tier:'optional',reason:'A very high-Agility capstone for fighting groups in V.A.T.S.'}
]},
{id:'powerarmor',label:'Power Armor',group:'Combat style',desc:'Live in Power Armor and invest in its upgrades and fusion-core economy.',weights:{I:8,S:4,E:2},perks:[
{name:'Armorer',tier:'core',reason:'Many Power Armor upgrades require Armorer ranks.'},
{name:'Science!',tier:'core',reason:'Advanced Power Armor technology and many high-end modifications require Science!.'},
{name:'Nuclear Physicist',tier:'core',reason:'Makes fusion cores last longer, one of the most useful perks for a dedicated suit user.'},
{name:'Strong Back',tier:'strong',reason:'Pairs well with a heavily equipped scavenging character.'},
{name:'Pain Train',tier:'optional',reason:'A fun STR 10 capstone specifically built around charging enemies in Power Armor.'}
]},
{id:'energy',label:'Energy Weapons',group:'Weapons',desc:'Laser, plasma and other technologically advanced weapons.',weights:{I:8,P:2,A:2},perks:[
{name:'Science!',tier:'core',reason:'The key crafting perk for advanced energy-weapon modifications.'},
{name:'Scrapper',tier:'strong',reason:'Useful for recovering uncommon components from upgraded equipment.'},
{name:'Nuclear Physicist',tier:'optional',reason:'Useful for radiation weapons and setups that also rely heavily on fusion cores.'}
],note:'Energy damage does not have one universal damage perk. Use Rifleman, Commando, Gunslinger or Heavy Gunner according to the weapon configuration you actually fire.'},
{id:'survival',label:'Survival / Tank',group:'Combat style',desc:'Prioritize staying alive, taking hits and recovering from dangerous fights.',weights:{E:8,S:3,C:1},perks:[
{name:'Toughness',tier:'core',reason:'Straightforward damage resistance.'},
{name:'Life Giver',tier:'core',reason:'More maximum health with a useful high-rank regeneration benefit.'},
{name:'Adamantium Skeleton',tier:'strong',reason:'Reduces limb damage, useful in long or brutal fights.'},
{name:'Armorer',tier:'strong',reason:'Better armor is one of the most reliable forms of survivability.'},
{name:'Solar Powered',tier:'optional',reason:'A high-END quality-of-life capstone for daytime adventuring.'}
]},
{id:'chems',label:'Chems',group:'Utility',desc:'Use chems deliberately and extend their strongest combat effects.',weights:{I:6,E:5,C:2},perks:[
{name:'Chemist',tier:'core',reason:'Extends chem duration and supports a chem-centered playstyle.'},
{name:'Chem Resistant',tier:'strong',reason:'Removes the addiction downside from regular chem use at higher rank.'},
{name:'Medic',tier:'strong',reason:'Improves Stimpaks and RadAway for a consumable-heavy character.'},
{name:'Party Girl / Party Boy',tier:'optional',reason:'A separate alcohol-focused branch if booze is part of the build.'}
]},
{id:'solo',label:'Solo Wanderer',group:'Role / utility',desc:'Travel without a normal humanoid companion and gain direct personal bonuses.',weights:{C:6,E:2,A:1},perks:[
{name:'Lone Wanderer',tier:'core',reason:'One of the best general-purpose perks when travelling without a normal companion.'},
{name:'Action Boy / Action Girl',tier:'optional',reason:'A flexible AP boost that works with almost any solo combat style.'}
],note:'Dogmeat does not disable Lone Wanderer, so a Dogmeat-focused run can still use this perk.'},
{id:'companions',label:'Companions',group:'Role / utility',desc:'Travel with companions and make them safer and more effective.',weights:{C:8},perks:[
{name:'Inspirational',tier:'core',reason:'Directly improves companion performance and prevents friendly-fire problems at higher ranks.'},
{name:'Attack Dog',tier:'strong',reason:'Specifically improves Dogmeat when he is your chosen companion.'}
],note:'Lone Wanderer and a normal companion are competing playstyles. Dogmeat is the notable exception.'},
{id:'settlements',label:'Settlements',group:'Utility',desc:'Build connected settlements, shops and a strong Commonwealth network.',weights:{C:8,I:3},perks:[
{name:'Local Leader',tier:'core',reason:'The central settlement perk for supply lines and advanced settlement stores/workstations.'},
{name:'Cap Collector',tier:'strong',reason:'Useful for the economy side of settlement shops and trading.'},
{name:'Scrapper',tier:'strong',reason:'Makes salvaging equipment for useful building components more rewarding.'},
{name:'Science!',tier:'optional',reason:'Useful for higher-tech settlement objects and powered equipment.'}
]},
{id:'crafting',label:'Crafting / Modding',group:'Utility',desc:'Build your own weapon, armor and technology upgrades instead of relying on loot.',weights:{I:8,S:4},perks:[
{name:'Gun Nut',tier:'core',reason:'The main crafting gate for conventional firearm modifications.'},
{name:'Armorer',tier:'core',reason:'The main crafting gate for armor modifications.'},
{name:'Science!',tier:'core',reason:'The main crafting gate for advanced technology and energy modifications.'},
{name:'Scrapper',tier:'core',reason:'Helps recover valuable components from modified weapons and armor.'},
{name:'Blacksmith',tier:'strong',reason:'Add this when melee weapon modification matters to your build.'}
]},
{id:'speech',label:'Speech / Trading',group:'Role / utility',desc:'Persuade people, negotiate better prices and lean into social solutions.',weights:{C:9,L:1},perks:[
{name:'Cap Collector',tier:'strong',reason:'Improves buying/selling and unlocks higher merchant investment utility.'},
{name:'Black Widow / Lady Killer',tier:'strong',reason:'Adds dialogue options and combat bonuses against the relevant sex.'},
{name:'Local Leader',tier:'optional',reason:'A natural extension if your charismatic character also manages settlements.'}
],note:'Base Charisma itself matters for persuasion and prices, so this tag values CHR even though there is no single generic “Speech” perk.'},
{id:'explorer',label:'Explorer / Loot',group:'Utility',desc:'Open more doors, hack more terminals and squeeze more value from scavenging.',weights:{P:5,I:5,L:3},perks:[
{name:'Locksmith',tier:'core',reason:'Opens increasingly difficult physical locks.'},
{name:'Hacker',tier:'core',reason:'Opens increasingly difficult terminals.'},
{name:'Scrounger',tier:'strong',reason:'Finds more ammunition while scavenging.'},
{name:'Fortune Finder',tier:'optional',reason:'Adds more caps to containers.'},
{name:'Scrapper',tier:'optional',reason:'Makes unwanted equipment more valuable as crafting components.'},
{name:'Awareness',tier:'optional',reason:'Useful scouting information in V.A.T.S. when learning enemy defenses.'}
]}
];

const buildTagGroups=['Combat style','Weapons','Utility','Role / utility'];
