const KEY='fo4guide-v2';
const routeList=[['undecided','Undecided / Maximum Content'],['minutemen','Minutemen'],['railroad','Railroad'],['bos','Brotherhood of Steel'],['institute','Institute']];
const spoilerList=[['light','Light'],['warn','Warnings'],['full','Full']];
const dlcList=['Automatron','Far Harbor','Nuka-World','Vault-Tec Workshop','Wasteland Workshop','Contraptions Workshop'];

// Independent/companion Side quests. Prima classification wins where it is explicitly verifiable.
// Quests Prima classifies as Miscellaneous or Freeform (for example Cambridge Polymer Labs,
// Trouble Brewin' and Out in Left Field) live in the separate Guidebook Extras tab instead.
const sideQuests=[
['Benign Intervention',['companion'],'Cait companion quest. Requires enough affinity with Cait and deals directly with her addiction.','sq_benign'],
['Confidence Man',['world'],'Diamond City side quest centered on Travis Miles and the Dugout Inn.','sq_confidence'],
['Curtain Call',['world','companion'],'Trinity Tower rescue quest. Completing it makes Strong available as a companion.','sq_curtain'],
['Dependency',['vault'],'Vault 81 side quest involving Bobby De Luca and Rachel.','sq_dependency'],
['Detective Case Files: The Disappearing Act',['world'],'Nick Valentine detective case concerning a missing Diamond City resident.','sq_disappear'],
['Detective Case Files: The Gilded Grasshopper',['world'],'Nick Valentine detective case and treasure hunt leading through old Boston.','sq_grasshopper'],
['Detective Case Files: Long Time Coming',['companion'],'Nick Valentine companion quest centered on Eddie Winter.','sq_longtime'],
['Diamond City Blues',['world'],'Diamond City drug-deal quest with several branching outcomes.','sq_blues'],
['Emogene Takes a Lover',['world'],'Part of the Cabot family storyline; locate Emogene Cabot.','sq_emogene'],
['Emergent Behavior',['companion'],'Curie companion quest about giving her a new form.','sq_emergent'],
['Here Kitty, Kitty',['vault'],'Vault 81 side quest to find Erin Combes’ missing cat.','sq_herekitty'],
['Here There Be Monsters',['world'],'Boston Harbor / Yangtze side quest involving Captain Zao.','sq_monsters'],
['Hole in the Wall',['vault','companion'],'Explore Secret Vault 81 during the molerat outbreak. Completing it makes Curie available as a companion.','sq_holewall'],
['Human Error',['world'],'Covenant side quest with a significant local choice.','sq_humanerror'],
["In Sheep's Clothing",['world'],'Diamond City follow-up that can occur after certain mayoral events.','sq_sheep'],
['Kid in a Fridge',['world'],'Optional Commonwealth side quest involving Billy Peabody.','sq_fridge'],
['Last Voyage of the U.S.S. Constitution',['world'],'Long multi-stage side quest aboard the U.S.S. Constitution.','sq_constitution'],
['Long Road Ahead',['companion'],'MacCready companion quest involving his past and Med-Tek Research.','sq_longroad'],
['The Big Dig',['world','companion'],'Goodneighbor side quest with a major choice near the end. Its outcome leads into Hancock recruitment.','sq_bigdig'],
['Mystery Meat',['world'],'Investigate the strange operation at Longneck Lukowski’s Cannery.','sq_mysterymeat'],
['Order Up',['world'],'Drumlin Diner standoff with multiple ways to resolve the conflict.','sq_orderup'],
['Painting the Town',['world'],'Help Abbot acquire green paint for Diamond City’s wall.','sq_painting'],
["Pickman's Gift",['world'],'Investigate Pickman Gallery and decide what to do with Pickman.','sq_pickman'],
['Public Knowledge',['world'],'Help Daisy in Goodneighbor by clearing Boston Public Library.','sq_publicknowledge'],
['Pull the Plug',['world'],'Help Sully Mathis repair the pumps at Thicket Excavations.','sq_pullplug'],
['Reveille',['world'],'A Brotherhood-related introductory side quest that can point you toward the Boston Airport after the Prydwen arrives.','sq_reveille'],
['Short Stories',['vault'],'Help Katy in Vault 81 by telling a story to her class.','sq_shortstories'],
['Special Delivery',['world'],'Begin the Cabot family questline by helping Edward Deegan.','sq_specialdelivery'],
['Story of the Century',['world'],'Give Piper an interview for Publick Occurrences.','sq_storycentury'],
["The Devil's Due",['world'],'Museum of Witchcraft / deathclaw egg side quest.','sq_devil'],
['The Marowski Heist',['world'],'A later Diamond City / Goodneighbor crime quest that depends on earlier choices.','sq_marowski'],
['The Memory Den',['world'],'A short Goodneighbor side quest involving Irma and the Memory Den.','sq_memoryden'],
['The Secret of Cabot House',['world'],'Cabot family questline with a major final choice.','sq_cabot'],
['The Silver Shroud',['world'],'Goodneighbor superhero questline with a fragile rescue sequence involving Kent Connolly.','sq_shroud'],
['Vault 75',['vault'],'Investigate the hidden Vault 75 beneath Malden Middle School.','sq_vault75'],
['Vault 81',['vault','companion'],'Gain entry to Vault 81 and meet its residents. This is the gateway to Curie’s recruitment chain.','sq_vault81']
];

const commonMain=[
['Out of Time','Leave Vault 111, return to Sanctuary, and begin searching the Commonwealth.','Main Story','main_out'],
['Jewel of the Commonwealth','Travel to Diamond City while following the trail of Shaun.','Main Story','main_jewel'],
['Unlikely Valentine','Find and rescue Nick Valentine from Vault 114.','Main Story','main_valentine'],
['Getting a Clue','Work with Nick to identify your next lead.','Main Story','main_clue'],
['Reunions','Track Kellogg to Fort Hagen and confront him.','Main Story','main_reunions'],
['Dangerous Minds','Use the Memory Den to search Kellogg’s memories for the next lead.','Main Story','main_dangerous'],
['The Glowing Sea','Travel into the Glowing Sea to find Virgil.','Main Story','main_glowing'],
['Hunter/Hunted','Track down a Courser and obtain its chip.','Main Story','main_hunter'],
['The Molecular Level','Decode the Courser chip and construct the signal interceptor. This is an excellent permanent branch-save point.','Main Story','main_molecular'],
['Institutionalized','Enter the Institute and meet its leadership.','Main Story','main_institutionalized']
];

const routes={
undecided:{title:'Maximum Content',desc:'Keep all major factions usable as long as possible while seeing the game in guidebook-sized quest steps.',status:{Minutemen:'friendly',Railroad:'friendly',Brotherhood:'friendly',Institute:'friendly'},steps:[
...commonMain.slice(0,2),
['When Freedom Calls','Help Preston Garvey and the Quincy survivors in Concord; opens the Minutemen path.','Minutemen','r_wfc'],
...commonMain.slice(2,5),
['Fire Support','Respond to Cambridge Police Station and meet Paladin Danse.','Brotherhood','r_fire'],
['Call to Arms','Help Danse at ArcJet Systems and open early Brotherhood access.','Brotherhood','r_call'],
['Road to Freedom','Follow the Freedom Trail and locate Railroad HQ.','Railroad','r_road'],
['Tradecraft','Work with Deacon and gain full Railroad access.','Railroad','r_trade'],
...commonMain.slice(5,9),
['SAVE BRANCH — The Molecular Level','Keep a permanent manual save around the teleporter/faction-choice stage if you want to explore several endings or achievement branches.','Guide Note','r_branchsave'],
...commonMain.slice(9),
['Boston After Dark','Do early Railroad side work while all factions are still available.','Railroad','r_bad'],
['The Lost Patrol','Useful optional Brotherhood story before late faction hostility.','Brotherhood Side','r_lostpatrol'],
['Blind Betrayal','See Danse’s major Brotherhood story before pushing toward Tactical Thinking.','Brotherhood','r_blind']
],warnings:{light:['Tactical Thinking / Mass Fusion','These are major faction breakpoints. Stop and review first.'],warn:['Tactical Thinking / Mass Fusion','Do not push Tactical Thinking if you still want the Railroad; do not casually pick Mass Fusion/Spoils of War while keeping Institute/Brotherhood options open.'],full:['Maximum-content hard stops','Finish the side, companion, miscellaneous, freeform and faction jobs you care about before Tactical Thinking, Mass Fusion/Spoils of War, End of the Line, or the late stages of Underground Undercover.']}},

railroad:{title:'Railroad Ending',desc:'Prioritize the Railroad while keeping the Institute friendly long enough for the undercover route.',status:{Minutemen:'friendly',Railroad:'friendly',Brotherhood:'neutral',Institute:'neutral'},steps:[
...commonMain.slice(0,2),
['Road to Freedom','Find Railroad HQ.','Railroad','rr_road'],
['Tradecraft','Join the Railroad and unlock its early work.','Railroad','rr_trade'],
...commonMain.slice(2,5),
['Boston After Dark','Complete the early Railroad escort operation and open more Railroad work.','Railroad','rr_bad'],
...commonMain.slice(5,10),
['Underground Undercover','Begin the Railroad infiltration plan while remaining undercover in the Institute.','Railroad Main','rr_uu'],
['Operation Ticonderoga','Complete it when offered; late undercover progression can make it unavailable.','Railroad Side','rr_ticon'],
['Precipice of War','Late Railroad commitment and open conflict with the Brotherhood.','Railroad Main','rr_precipice'],
["Rockets' Red Glare",'Railroad endgame operation against the Brotherhood.','Railroad Main','rr_redglare'],
['The Nuclear Option (Railroad)','Railroad assault on the Institute and ending.','Railroad Main','rr_nuclear']
],warnings:{light:['Tactical Thinking','Brotherhood danger to your Railroad path.'],warn:['Tactical Thinking','If you want the Railroad ending, treat Tactical Thinking as a giant stop sign.'],full:['Railroad route protection','Stay on speaking terms with the Institute long enough to progress Underground Undercover. Avoid Brotherhood progression through Tactical Thinking, and finish Operation Ticonderoga before the late undercover trigger can fail it.']}},

minutemen:{title:'Minutemen Ending',desc:'Flexible route with settlement-building and a broad amount of optional faction content.',status:{Minutemen:'friendly',Railroad:'friendly',Brotherhood:'neutral',Institute:'neutral'},steps:[
...commonMain.slice(0,1),
['When Freedom Calls','Rescue Preston and the Quincy survivors in Concord.','Minutemen','mm_wfc'],
['Sanctuary','Help Sturges establish the Sanctuary settlement.','Minutemen','mm_sanctuary'],
['The First Step','Help a settlement and formally establish the Minutemen network.','Minutemen','mm_first'],
...commonMain.slice(1,5),
['Taking Independence','Retake the Castle.','Minutemen','mm_castle'],
['Old Guns','Reopen the Castle armory and unlock artillery.','Minutemen','mm_oldguns'],
...commonMain.slice(5,10),
['Inside Job','Retrieve Institute network data for Sturges while entering/leaving the Institute stage.','Minutemen','mm_inside'],
['Form Ranks','Build enough Minutemen strength for the late route.','Minutemen Main','mm_form'],
['Defend the Castle','Defend the Minutemen headquarters during the endgame.','Minutemen Main','mm_defend'],
['The Nuclear Option (Minutemen)','Minutemen assault on the Institute and ending.','Minutemen Main','mm_nuclear'],
['With Our Powers Combined','OPTIONAL post-split anti-Brotherhood quest. Only pursue if you intentionally want the Minutemen to destroy the Brotherhood.','Minutemen Optional','mm_combined']
],warnings:{light:['Nuka-World raider expansion','Check consequences before helping raiders take Commonwealth settlements.'],warn:['Nuka-World raider expansion','A Preston-friendly Minutemen run and Commonwealth raider settlements do not mix well.'],full:['Minutemen caution','This route is flexible. With Our Powers Combined is optional, not required for the normal Minutemen ending. Nuka-World Commonwealth raider expansion can damage your Preston relationship.']}},

bos:{title:'Brotherhood of Steel Ending',desc:'Advance Brotherhood content while still completing the common main story and outside-faction content before bridges burn.',status:{Minutemen:'neutral',Railroad:'neutral',Brotherhood:'friendly',Institute:'hostile'},steps:[
...commonMain.slice(0,2),
['Fire Support','Respond to Cambridge Police Station and meet Paladin Danse.','Brotherhood','bos_fire'],
['Call to Arms','Assist Danse at ArcJet Systems.','Brotherhood','bos_call'],
...commonMain.slice(2,5),
['Semper Invicta','Continue working with Danse’s Cambridge team.','Brotherhood','bos_semper'],
...commonMain.slice(5,6),
['Shadow of Steel','Board the Prydwen after the Brotherhood arrives in force.','Brotherhood','bos_shadow'],
['Tour of Duty','Meet the senior Prydwen personnel.','Brotherhood','bos_tour'],
['Show No Mercy','Take part in the Brotherhood assault on Fort Strong.','Brotherhood','bos_mercy'],
...commonMain.slice(6,10),
['From Within','Try to recruit Dr. Li from inside the Institute.','Brotherhood','bos_from'],
['Outside the Wire','Deliver Institute network data to Proctor Ingram.','Brotherhood','bos_wire'],
['Liberty Reprimed','Help rebuild Liberty Prime.','Brotherhood','bos_liberty'],
['Blind Betrayal','Resolve the major Paladin Danse revelation.','Brotherhood','bos_blind'],
['Tactical Thinking','Hard Railroad danger point.','Brotherhood Danger','bos_tactical'],
['Spoils of War','Major Brotherhood-versus-Institute commitment.','Brotherhood Danger','bos_spoils'],
['Ad Victoriam','Brotherhood endgame assault.','Brotherhood Main','bos_ad'],
['The Nuclear Option (Brotherhood)','Brotherhood ending.','Brotherhood Main','bos_nuclear']
],warnings:{light:['Tactical Thinking','Major Railroad lockout danger.'],warn:['Tactical Thinking','Finish Railroad work you care about before advancing this quest.'],full:['Brotherhood route protection','Blind Betrayal is worth seeing before the final faction break. Tactical Thinking threatens the Railroad; Spoils of War is the Brotherhood side of the Institute split.']}},

institute:{title:'Institute Ending',desc:'Follow the complete common main story into the Institute, then finish outside-faction content before the late Institute hostility points.',status:{Minutemen:'neutral',Railroad:'hostile',Brotherhood:'hostile',Institute:'friendly'},steps:[
...commonMain,
['Synth Retention','Recover a missing Institute synth.','Institute','inst_synth'],
['The Battle of Bunker Hill','Large multi-faction operation involving escaped synths.','Institute','inst_bunker'],
['Mankind - Redefined','Advance the Institute leadership storyline.','Institute','inst_mankind'],
['Mass Fusion','Major Brotherhood split.','Institute Danger','inst_mass'],
['Pinned','Resolve the Institute/Minutemen confrontation at Graygarden.','Institute','inst_pinned'],
['Powering Up','Bring the Institute reactor fully online.','Institute','inst_power'],
['End of the Line','Late quest directly threatening the Railroad.','Institute Danger','inst_end'],
['Airship Down','Institute operation against the Brotherhood.','Institute Danger','inst_air'],
['Nuclear Family','Institute ending.','Institute Main','inst_nuclear']
],warnings:{light:['Mass Fusion / End of the Line','Major faction consequence points.'],warn:['Mass Fusion / End of the Line','Finish Brotherhood and Railroad content you want before these late Institute commitments.'],full:['Institute route protection','Mass Fusion is a major Brotherhood split, and End of the Line directly threatens the Railroad. Finish outside-faction rewards/content first.']}}
};
