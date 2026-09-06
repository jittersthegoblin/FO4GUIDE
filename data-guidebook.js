// Prima-style Location, Miscellaneous and Freeform activity layer.
// Every entry below is based on the Prima Fallout 4 quest/location index or a directly
// searchable Prima guide extract. These are intentionally kept out of the full Side Quest list.
const guidebookExtras=[
  // Explicit Freeform / city activities
  {id:'gb_out_left_field',name:'Out in Left Field',kind:'Freeform',area:'Diamond City / Westing Estate',tags:['freeform','diamond'],prima:true,desc:'Recover Moe Cronin’s signed baseball memorabilia from Westing Estate.'},
  {id:'gb_in_sheeps',name:"In Sheep's Clothing",kind:'Freeform',area:'Diamond City',tags:['freeform','diamond'],prima:true,desc:'A later Diamond City freeform event tied to the city’s leadership.'},
  {id:'gb_memory_den',name:'The Memory Den',kind:'Freeform',area:'Goodneighbor',tags:['freeform','goodneighbor'],prima:true,desc:'A Goodneighbor freeform activity centered on Irma and the Memory Den.'},
  {id:'gb_painting',name:'Painting the Town',kind:'Freeform',area:'Diamond City',tags:['freeform','diamond'],prima:true,desc:'Help Abbot acquire green paint for Diamond City’s wall.'},
  {id:'gb_public_knowledge',name:'Public Knowledge',kind:'Freeform',area:'Goodneighbor / Boston Public Library',tags:['freeform','goodneighbor'],prima:true,desc:'Help Daisy by dealing with the threats inside Boston Public Library.'},
  {id:'gb_story_century',name:'Story of the Century',kind:'Freeform',area:'Diamond City',tags:['freeform','diamond'],prima:true,desc:'Give Piper an interview for Publick Occurrences.'},
  {id:'gb_trouble_brewin',name:"Trouble Brewin'",kind:'Freeform',area:'Goodneighbor / Shamrock Taphouse',tags:['freeform','goodneighbor'],prima:true,desc:'Find the Drinkin’ Buddy brewing machine and decide whether to keep it or deliver it to Hotel Rexford.'},

  // Bunker Hill freeform jobs
  {id:'gb_fallen_hero',name:'Fallen Hero',kind:'Freeform',area:'Bunker Hill / Old Gullet Sinkhole',tags:['freeform','bunker'],prima:true,desc:'A Bunker Hill job involving a fallen caravan guard and Grandpa Savoldi’s hat.'},
  {id:'gb_megs_tour',name:"Meg's Tour",kind:'Freeform',area:'Bunker Hill',tags:['freeform','bunker'],prima:true,desc:'Take Meg’s informal tour around Bunker Hill.'},
  {id:'gb_prep_school',name:'Prep School',kind:'Freeform',area:'Bunker Hill / East Boston Preparatory School',tags:['freeform','bunker'],prima:true,desc:'A Bunker Hill job that sends you to East Boston Preparatory School.'},
  {id:'gb_traffic',name:'Traffic Jam',kind:'Freeform',area:'Bunker Hill / National Guard Training Yard',tags:['freeform','bunker'],prima:true,desc:'Help Deb with the feral-ghoul problem at the National Guard Training Yard.'},

  // Diamond City freeform jobs / activities
  {id:'gb_botany',name:'Botany Class',kind:'Freeform',area:'Diamond City / Forest Grove Marsh',tags:['freeform','diamond'],prima:true,desc:'Help Doctor Duff obtain a mutated fern flower.'},
  {id:'gb_brother',name:'Brother Against Brother',kind:'Freeform',area:'Diamond City',tags:['freeform','diamond'],prima:true,desc:'A small Diamond City freeform interaction involving two brothers.'},
  {id:'gb_dc_wanted',name:"Diamond City's Most Wanted",kind:'Freeform',area:'Diamond City / Radiant locations',tags:['freeform','diamond'],prima:true,desc:'Take wanted-poster jobs for hostile groups around the Commonwealth.'},
  {id:'gb_end_game',name:'End Game',kind:'Freeform',area:'Diamond City',tags:['freeform','diamond'],prima:true,desc:'A small Diamond City freeform activity.'},
  {id:'gb_fly_fishing',name:'Fly Fishing',kind:'Freeform',area:'Diamond City / Science! Center',tags:['freeform','diamond'],prima:true,desc:'Help Doctor Duff by obtaining a bloatfly gland for the Science! Center.'},
  {id:'gb_holidays',name:'Holidays',kind:'Freeform',area:'Diamond City',tags:['freeform','diamond'],prima:true,desc:'A small seasonal Diamond City activity.'},
  {id:'gb_homerun',name:'Home Run!',kind:'Freeform',area:'Diamond City',tags:['freeform','diamond'],prima:true,desc:'Run the bases around Diamond City Market.'},
  {id:'gb_new_hair',name:'New Hair, New Face',kind:'Freeform',area:'Diamond City',tags:['freeform','diamond'],prima:true,desc:'Use Diamond City’s appearance services.'},
  {id:'gb_nuka_needs',name:'Nuka Cola Needs',kind:'Freeform',area:'Diamond City',tags:['freeform','diamond'],prima:true,desc:'A small Diamond City request involving Nuka-Cola.'},
  {id:'gb_pool_clean',name:'Pool Cleaning',kind:'Freeform',area:'Diamond City',tags:['freeform','diamond'],prima:true,desc:'A small Diamond City job involving the local pool area.'},
  {id:'gb_wedding',name:'Wedding Day',kind:'Freeform',area:'Diamond City',tags:['freeform','diamond'],prima:true,desc:'A Diamond City freeform event connected to a local wedding.'},
  {id:'gb_world_series',name:'World Series Win',kind:'Freeform',area:'Diamond City / Jamaica Plain',tags:['freeform','diamond'],prima:true,desc:'A freeform interaction tied to the 2076 World Series baseball bat.'},

  // Goodneighbor freeform jobs
  {id:'gb_art_appreciation',name:'Art Appreciation',kind:'Freeform',area:'Goodneighbor / Pickman Gallery',tags:['freeform','goodneighbor'],prima:true,desc:'Take Hancock’s job involving Pickman Gallery.'},
  {id:'gb_cleaner',name:'The Cleaner',kind:'Freeform',area:'Goodneighbor',tags:['freeform','goodneighbor'],prima:true,desc:'Take Whitechapel Charlie’s warehouse-cleanup job.'},
  {id:'gb_familiar',name:'Familiar Faces',kind:'Freeform',area:'Goodneighbor',tags:['freeform','goodneighbor'],prima:true,desc:'A Goodneighbor freeform interaction involving familiar faces.'},
  {id:'gb_hazardous',name:'Hazardous Material',kind:'Freeform',area:'Goodneighbor / HalluciGen',tags:['freeform','goodneighbor'],prima:true,desc:'Help Fred Allen obtain material connected to HalluciGen.'},
  {id:'gb_maccready_action',name:'MacCready for Action',kind:'Freeform / Recruitment',area:'Goodneighbor / The Third Rail',tags:['freeform','companion','goodneighbor'],prima:true,desc:'Hire Robert MacCready in the Third Rail and make him available as a companion.'},
  {id:'gb_recruit_hancock',name:'Recruiting Hancock',kind:'Freeform / Recruitment',area:'Goodneighbor',tags:['freeform','companion','goodneighbor'],prima:true,desc:'The follow-up that makes Hancock available after The Big Dig, depending on how its ending was resolved.'},
  {id:'gb_tough_times',name:'Tough Times',kind:'Freeform',area:'Goodneighbor',tags:['freeform','goodneighbor'],prima:true,desc:'A small Goodneighbor freeform job.'},

  // Other Prima Location quests / miscellaneous activities
  {id:'gb_cambridge_polymer',name:'Cambridge Polymer Labs',kind:'Location / Miscellaneous',area:'Cambridge Polymer Labs',tags:['misc'],prima:true,desc:'Complete the research project inside Cambridge Polymer Labs.'},
  {id:'gb_pillar',name:'A Pillar of the Community',kind:'Location Quest',area:'Charles View Amphitheater',tags:['misc'],prima:true,desc:'Investigate the Pillars of the Community and their recruitment pitch.'},
  {id:'gb_edwins_terminal',name:"Edwin's Terminal",kind:'Location Quest',area:'Commonwealth',tags:['misc'],prima:true,desc:'A small location activity discovered through Edwin’s terminal.'},
  {id:'gb_message_bottle',name:'Message in a Bottle – Trapped For Days',kind:'Location Quest',area:'Commonwealth coast',tags:['misc'],prima:true,desc:'Follow a message-in-a-bottle clue to its destination.'},
  {id:'gb_drumlin',name:'Drumlin Diner Shakedown',kind:'Location Quest',area:'Drumlin Diner',tags:['misc'],prima:true,desc:'Resolve the standoff between Trudy and Wolfgang at Drumlin Diner.'},
  {id:'gb_dunwich',name:'Dunwich Borers',kind:'Location Quest',area:'Dunwich Borers',tags:['misc'],prima:true,desc:'Explore the depths and strange history of Dunwich Borers.'},
  {id:'gb_phyllis',name:'Phyllis Daily',kind:'Location Quest',area:'Egret Tours Marina',tags:['misc'],prima:true,desc:'Speak with Phyllis Daily and resolve the situation at Egret Tours Marina.'},
  {id:'gb_dear_detective',name:'Dear Detective',kind:'Location Quest',area:'Fens Street Sewer',tags:['misc'],prima:true,desc:'Follow the detective-themed clues found around the Fens Street Sewer.'},
  {id:'gb_quality',name:'Quality Assurance',kind:'Location Quest',area:'General Atomics Factory',tags:['misc'],prima:true,desc:'Complete a robot-driven quality-assurance activity at General Atomics Factory.'},
  {id:'gb_galleria',name:'Galleria',kind:'Location Quest',area:'General Atomics Galleria',tags:['misc'],prima:true,desc:'Deal with the Galleria’s automated pre-War management routines.'},
  {id:'gb_brown',name:'Supervisor Brown',kind:'Location Quest',area:'Graygarden',tags:['misc'],prima:true,desc:'A small Graygarden activity involving Supervisor Brown.'},
  {id:'gb_green',name:'Supervisor Green',kind:'Location Quest',area:'Graygarden',tags:['misc'],prima:true,desc:'A small Graygarden trading/activity interaction with Supervisor Green.'},
  {id:'gb_k198',name:'K1-98',kind:'Location Quest',area:'Greenetech Genetics',tags:['misc'],prima:true,desc:'A location activity involving K1-98 at Greenetech Genetics.'},
  {id:'gb_hallucigen',name:'HalluciGen Exploration',kind:'Location Quest',area:'HalluciGen, Inc.',tags:['misc'],prima:true,desc:'Explore HalluciGen and uncover what happened inside.'},
  {id:'gb_jamaica',name:'Treasure of Jamaica Plain',kind:'Location Quest',area:'Jamaica Plain',tags:['misc'],prima:true,desc:'Investigate the legendary treasure beneath Jamaica Plain.'},
  {id:'gb_mystery_meat',name:'Mystery Meat',kind:'Location Quest',area:"Longneck Lukowski's Cannery",tags:['misc'],prima:true,desc:'Investigate the cannery and the source of its suspicious meat.'},
  {id:'gb_rylee',name:'Trader Rylee',kind:'Location Quest',area:"Longneck Lukowski's Cannery",tags:['misc'],prima:true,desc:'A location interaction involving the trader Rylee.'},
  {id:'gb_pickmans_gift',name:"Pickman's Gift",kind:'Location Quest',area:'Pickman Gallery',tags:['misc'],prima:true,desc:'Investigate Pickman Gallery and decide how to handle Pickman.'},
  {id:'gb_virgils_cure',name:"Virgil's Cure",kind:'Location / Miscellaneous',area:'The Institute / Rocky Cave',tags:['misc'],prima:true,desc:'Recover the experimental serum from the Institute FEV laboratory and return it to Virgil.'},
  {id:'gb_barney_rook',name:'Barney Rook',kind:'Location / Miscellaneous',area:'Salem / Rook Family House',tags:['misc'],prima:true,desc:'Help Barney Rook with the mirelurk threat around Salem.'},
  {id:'gb_ness',name:'Random Encounter: Ness',kind:'Location / Encounter',area:'Skylanes Flight 1981',tags:['misc'],prima:true,desc:'Meet Ness for a scavenging opportunity at a crashed aircraft.'},
  {id:'gb_arlen_glass',name:'Arlen Glass',kind:'Location / Miscellaneous',area:'The Slog / Wilson Atomatoys',tags:['misc'],prima:true,desc:'Help Arlen Glass with a Giddyup Buttercup-related request tied to his pre-War life.'},
  {id:'gb_holly',name:'Holly',kind:'Location Quest',area:'The Slog',tags:['misc'],prima:true,desc:'A small activity involving Holly at the Slog.'},
  {id:'gb_marlene',name:"Marlene's Holotape",kind:'Location Quest',area:'The Slog',tags:['misc'],prima:true,desc:'Find the holotape connected to Arlen Glass’s family.'},
  {id:'gb_wiseman',name:'Wiseman',kind:'Location Quest',area:'The Slog',tags:['misc'],prima:true,desc:'A small activity involving Wiseman and the Slog.'},
  {id:'gb_vault75',name:'Vault 75',kind:'Location Quest',area:'Malden Middle School / Vault 75',tags:['misc','vault'],prima:true,desc:'Investigate the hidden Vault 75 beneath Malden Middle School.'},
  {id:'gb_vault81_tour',name:'Vault 81 Tour',kind:'Location Quest',area:'Vault 81',tags:['misc','vault'],prima:true,desc:'Take the guided tour of Vault 81.'},
  {id:'gb_dependency',name:'Dependency',kind:'Location Quest',area:'Vault 81',tags:['misc','vault'],prima:true,desc:'A Vault 81 activity involving Bobby De Luca and Rachel.'},
  {id:'gb_maintenance',name:'Maintenance Man',kind:'Location Quest',area:'Vault 81',tags:['misc','vault'],prima:true,desc:'Help with a maintenance-related task inside Vault 81.'},
  {id:'gb_fertilizer',name:'Fertilizer Woman',kind:'Location Quest',area:'Vault 81',tags:['misc','vault'],prima:true,desc:'A small Vault 81 activity involving fertilizer supplies.'},
  {id:'gb_herekitty',name:'Here Kitty, Kitty',kind:'Location Quest',area:'Vault 81',tags:['misc','vault'],prima:true,desc:'Find Erin Combes’ missing cat.'},
  {id:'gb_shortstories',name:'Short Stories',kind:'Location Quest',area:'Vault 81',tags:['misc','vault'],prima:true,desc:'Tell a story to Katy’s class inside Vault 81.'},
  {id:'gb_bill_sutton',name:'Bill Sutton',kind:'Location Quest',area:'Warwick Homestead',tags:['misc'],prima:true,desc:'A small Warwick Homestead activity involving Bill Sutton.'},
  {id:'gb_wicked_shipments',name:'Wicked Shipments',kind:'Location Quest',area:'Wicked Shipping Fleet Lockup',tags:['misc'],prima:true,desc:'Investigate the shipping records and supplies at Wicked Shipping Fleet Lockup.'},
  {id:'gb_pull_plug',name:'Pull the Plug',kind:'Location Quest',area:'Thicket Excavations',tags:['misc'],prima:true,desc:'Help Sully Mathis repair the pumps at Thicket Excavations.'},
  {id:'gb_out_fire',name:'Out of the Fire',kind:'Location Quest',area:'Finch Farm / Saugus Ironworks',tags:['misc','minutemen'],prima:true,desc:'Help Finch Farm recover Abraham Finch’s sword from Saugus Ironworks.'},
  {id:'gb_troubled_waters',name:'Troubled Waters',kind:'Location Quest',area:'Graygarden / Weston Water Treatment Plant',tags:['misc','minutemen'],prima:true,desc:'Restore Graygarden’s water supply by clearing Weston Water Treatment Plant.'}
];

const guidebookExtraFilters=[['all','All'],['misc','Location / Misc'],['freeform','Freeform'],['companion','Companion-linked'],['prima','Prima verified']];
