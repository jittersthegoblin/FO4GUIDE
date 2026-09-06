// Quest coverage follows the Prima Fallout 4 GOTY eGuide DLC chapters.
const dlcQuestGroups=[
  {dlc:'Automatron',intro:'Prima lists four Main quests plus two Radiant quests.',quests:[
    ['dlc_auto_mechanical','Mechanical Menace','Main','Respond to the caravan distress call and meet Ada.'],
    ['dlc_auto_threat','A New Threat','Main','Investigate the Mechanist’s robots and unlock the Robot Workbench.'],
    ['dlc_auto_head','Headhunting','Main','Track the second Robobrain and continue the search for the Mechanist.'],
    ['dlc_auto_restore','Restoring Order','Main','Enter the Mechanist’s Lair and resolve the Automatron main story.'],
    ['dlc_auto_rogue','Rogue Robot','Radiant','Repeatable post-story robot-hunting assignment.'],
    ['dlc_auto_recon','Robotic Reconnaissance','Radiant / Misc','A small repeatable Automatron reconnaissance activity listed by Prima.']
  ]},
  {dlc:'Far Harbor',intro:'Prima separates the Island into Main, Far Harbor Side, Nucleus, Acadia, and faction-linked quests.',quests:[
    ['dlc_fh_farhome','Far from Home','Main','Investigate the Nakano family’s missing daughter and travel to the Island.'],
    ['dlc_fh_walk','Walk in the Park','Main','Travel with Old Longfellow toward Acadia and learn how the fog changes exploration.'],
    ['dlc_fh_belong','Where You Belong','Main','Investigate Acadia and Kasumi’s reasons for coming to the Island.'],
    ['dlc_fh_forgotten','Best Left Forgotten','Main','Recover DiMA’s memories and uncover several secrets that can decide the Island’s future.'],
    ['dlc_fh_way','The Way Life Should Be','Main · major choice','Investigate DiMA’s secret and decide what to do with the truth.'],
    ['dlc_fh_reformation','Reformation','Main · branch','A peace-oriented main-story branch involving DiMA and High Confessor Tektus.'],
    ['dlc_fh_cleansing','Cleansing the Land','Main · branch','A major main-story branch involving the Nucleus and Far Harbor.'],
    ['dlc_fh_close','Close to Home','Main','Return to the Nakano family and conclude Kasumi’s story.'],

    ['dlc_fh_brain','Brain Dead','Side','Investigate a murder mystery in Vault 118.'],
    ['dlc_fh_brain2','Brain Dead, Part 2','Side','Continue the Vault 118 mystery after the first case.'],
    ['dlc_fh_edge','Living on the Edge','Side hub','Help Far Harbor residents to build the town’s trust.'],
    ['dlc_fh_rite','Rite of Passage','Side','Help Far Harbor with a dangerous local tradition.'],
    ['dlc_fh_tide','The Changing Tide','Side hub','Continue helping Far Harbor after earning more trust.'],
    ['dlc_fh_blood','Blood Tide','Side','Help Cassie Dalton settle old family business.'],
    ['dlc_fh_safe','Safe Passage','Side','Help Captain Avery make a safer route through the fog.'],
    ['dlc_fh_hull1','Hull Breach','Side','Help the Mariner improve Far Harbor’s defenses.'],
    ['dlc_fh_hull2','Hull Breach 2','Side','Continue the Mariner’s defensive improvements.'],
    ['dlc_fh_hull3','Hull Breach 3','Side','Finish the Mariner’s sequence of defense jobs.'],
    ['dlc_fh_hold','The Hold Out','Side','Help defend a threatened Island settlement.'],
    ['dlc_fh_fog','Turn Back the Fog','Side','Help establish another foothold against the fog.'],
    ['dlc_fh_hunt','The Great Hunt','Side','Join a dangerous Far Harbor hunt.'],

    ['dlc_fh_visions','Visions in the Fog','Nucleus','Complete the Children of Atom initiation and gain peaceful access to the Nucleus.'],
    ['dlc_fh_atom','What Atom Requires','Nucleus hub','Help members of the Nucleus congregation.'],
    ['dlc_fh_heretic','The Heretic','Nucleus','Track down Sister Gwyneth for Grand Zealot Richter.'],
    ['dlc_fh_devin','The Trial of Brother Devin','Nucleus','Help Zealot Ware end Brother Devin’s dangerous fast.'],
    ['dlc_fh_witch','Witch Hunt','Nucleus','Investigate a suspected traitor inside the Nucleus.'],
    ['dlc_fh_ablutions','Ablutions','Nucleus','Help Sister Mai repair the decontamination arch.'],

    ['dlc_fh_ideals','Acadian Ideals','Acadia hub','Help residents of Acadia to unlock their individual requests.'],
    ['dlc_fh_arrival','The Arrival','Acadia','Investigate a missing synth for Chase.'],
    ['dlc_fh_hunter','Hunting the Hunter','Acadia','Help Dejen deal with a threat connected to Acadia.'],
    ['dlc_fh_data','Data Recovery','Acadia','Recover Faraday’s missing data drives.'],
    ['dlc_fh_price','The Price of Memory','Acadia','Investigate Jule’s damaged memories and decide what truth to reveal.'],
    ['dlc_fh_searchdestroy','Search and Destroy','Faction-linked Side','Brotherhood route for acting on information about Acadia.'],
    ['dlc_fh_forbidden','Forbidden Knowledge','Faction-linked Side','Institute route for acting on information about Acadia.']
  ]},
  {dlc:'Vault-Tec Workshop',intro:'Prima presents Vault 88 as a dedicated quest chain plus optional exploration/recruitment work.',quests:[
    ['dlc_vt_call','Vault-Tec Calling','Main','Receive the Vault 88 radio signal and travel to the new vault site.'],
    ['dlc_vt_better','Better Living Underground','Main','Enter Vault 88 and help Overseer Barstow secure the main area.'],
    ['dlc_vt_model','A Model Citizen','Main','Recruit test subjects and prepare Vault 88 for its experiments.'],
    ['dlc_vt_explore','Explore Vault 88','Side','Unlock the remaining Vault 88 sectors and workshops; Prima notes this is optional for the main chain.'],
    ['dlc_vt_power','Power to the People','Main / experiment','Run the Power Cycle 1000 experiment with Clem.'],
    ['dlc_vt_water','The Watering Hole','Main / experiment','Run the Soda Fountain experiment after retrieving HalluciGen research.'],
    ['dlc_vt_vision','Vision of the Future','Main / experiment','Run the Phoropter experiment.'],
    ['dlc_vt_luck','Lady Luck','Main / experiment','Run the final Slot Machine experiment.'],
    ['dlc_vt_wanted','Overseer’s Most Wanted','Side / recruitment','Use the Vault-Tec Population Management System to locate special Commonwealth settlers.']
  ]},
  {dlc:'Nuka-World',intro:'Prima separates Nuka-World Main, Radiant and Side quests. The Raider route can permanently damage a Preston-friendly run.',quests:[
    ['dlc_nw_aboard','All Aboard','Main','Travel to the Nuka-World transit center and begin the DLC.'],
    ['dlc_nw_ride','Taken for a Ride','Main','Survive the Gauntlet and become Nuka-World’s new Overboss.'],
    ['dlc_nw_plan','An Ambitious Plan','Main','Meet the three raider gangs and begin planning the park takeover.'],
    ['dlc_nw_open','Open Season','Main · anti-raider branch','Turn against the Nuka-World raiders. Prima recommends considering this before Commonwealth raider expansion if Preston matters to you.'],
    ['dlc_nw_tour','The Grand Tour','Main','Secure the five major park zones and assign them to gangs.'],
    ['dlc_nw_star','Star Control','Main / park zone','Secure the Galactic Zone using Star Cores.'],
    ['dlc_nw_highnoon','High Noon at the Gulch','Main / park zone','Secure Dry Rock Gulch.'],
    ['dlc_nw_magic','A Magical Kingdom','Main / park zone','Secure Kiddie Kingdom.'],
    ['dlc_nw_safari','Safari Adventure','Main / park zone','Secure Safari Adventure.'],
    ['dlc_nw_refresh','A World of Refreshment','Main / park zone','Secure the Nuka-Cola Bottling Plant.'],
    ['dlc_nw_home','Home Sweet Home','Main · Commonwealth warning','Establish Raider outposts in the Commonwealth. This is the serious Preston/Minutemen consequence point.'],
    ['dlc_nw_power','Power Play','Main','Resolve the gang rebellion and restore power to Nuka-World.'],

    ['dlc_nw_amoral','Amoral Combat','Side / repeatable','Fight challengers in the Cola-cars arena after becoming Overboss.'],
    ['dlc_nw_cappy','Cappy in a Haystack','Side','Search Nuka-World for hidden Cappy clues.'],
    ['dlc_nw_medals','Precious Medals','Side','Collect park medallions for N.I.R.A.'],
    ['dlc_nw_stars','Trip to the Stars','Side','Help the Hubologists with their Nuka-World project.'],

    ['dlc_nw_goods','A Goods Defense','Radiant','Repeatable Nuka-World raider assignment.'],
    ['dlc_nw_solution','A Permanent Solution','Radiant','Repeatable Nuka-World raider assignment.'],
    ['dlc_nw_cache','Cache-ing In','Radiant','Repeatable Nuka-World raider assignment.'],
    ['dlc_nw_capture','Capture','Radiant','Repeatable Nuka-World raider assignment.'],
    ['dlc_nw_claim','Claiming the Commonwealth','Radiant','Repeatable Commonwealth raider expansion assignment.'],
    ['dlc_nw_cleanhouse','Cleaning House','Radiant','Repeatable Nuka-World raider assignment.'],
    ['dlc_nw_clear','Clear Out','Radiant','Repeatable Nuka-World raider assignment.'],
    ['dlc_nw_collarout','Collaring Outside the Lines','Radiant','Repeatable Nuka-World raider assignment.'],
    ['dlc_nw_shake','Shake Down','Radiant','Repeatable Nuka-World raider assignment.'],
    ['dlc_nw_subdue','Subdue','Radiant','Repeatable Nuka-World raider assignment.'],
    ['dlc_nw_trash','Taking Out the Trash','Radiant','Repeatable Nuka-World raider assignment.'],
    ['dlc_nw_collar','Under the Collar','Radiant','Repeatable Nuka-World raider assignment.']
  ]}
];

const workshopOnlyDlc=[
  ['Wasteland Workshop','Prima covers cages, creature trapping and arena systems rather than a conventional questline.'],
  ['Contraptions Workshop','Prima covers manufacturing, conveyors, displays and workshop systems rather than a conventional questline.']
];
