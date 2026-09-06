const KEY='fo4guide-v2';
const routeList=[['undecided','Undecided / Maximum Content'],['minutemen','Minutemen'],['railroad','Railroad'],['bos','Brotherhood of Steel'],['institute','Institute']];
const spoilerList=[['light','Light'],['warn','Warnings'],['full','Full']];
const dlcList=['Automatron','Far Harbor','Nuka-World','Vault-Tec Workshop','Wasteland Workshop','Contraptions Workshop'];

// Full Side / Side Companion quests. Prima classification wins where its quest index differs
// from modern community lists. Small Location, Miscellaneous and Freeform jobs are kept in
// data-guidebook.js instead of being flattened into this list.
const sideQuests=[
['Benign Intervention',['companion'],'Cait companion quest. Requires enough affinity with Cait and deals directly with her addiction.','sq_benign'],
['Combat Zone',['world','companion'],'Clear the Combat Zone and speak with Tommy Lonegan. This is the recruitment gateway for Cait.','sq_combatzone'],
['Confidence Man',['world'],'Diamond City side quest centered on Travis Miles and the Dugout Inn.','sq_confidence'],
['Curtain Call',['world','companion'],'Trinity Tower rescue quest. Completing it makes Strong available as a companion.','sq_curtain'],
['Detective Case Files',['world'],'Open Nick Valentine’s detective casework from the files in his agency.','sq_casefiles'],
['Detective Case Files: The Disappearing Act',['world'],'Nick Valentine detective case concerning a missing Diamond City resident.','sq_disappear'],
['Detective Case Files: The Gilded Grasshopper',['world'],'Nick Valentine detective case and treasure hunt leading through old Boston.','sq_grasshopper'],
['Detective Case Files: Long Time Coming',['companion'],'Nick Valentine companion quest centered on Eddie Winter.','sq_longtime'],
['Diamond City Blues',['world'],'Diamond City drug-deal quest with several branching outcomes.','sq_blues'],
["The Devil's Due",['world'],'Museum of Witchcraft / deathclaw egg side quest.','sq_devil'],
['Emogene Takes a Lover',['world'],'Part of the Cabot family storyline; locate Emogene Cabot.','sq_emogene'],
['Emergent Behavior',['companion'],'Curie companion quest about giving her a new form.','sq_emergent'],
['Here There Be Monsters',['world'],'Boston Harbor / Yangtze side quest involving Captain Zao.','sq_monsters'],
['Hole in the Wall',['vault','companion'],'Explore Secret Vault 81 during the molerat outbreak. Completing it makes Curie available as a companion.','sq_holewall'],
['Human Error',['world'],'Covenant side quest with a significant local choice.','sq_humanerror'],
['Kid in a Fridge',['world'],'Optional Commonwealth side quest involving Billy Peabody.','sq_fridge'],
['Last Voyage of the U.S.S. Constitution',['world'],'Long multi-stage side quest aboard the U.S.S. Constitution.','sq_constitution'],
['Long Road Ahead',['companion'],'MacCready companion quest involving his past and Med-Tek Research.','sq_longroad'],
['The Big Dig',['world','companion'],'Goodneighbor side quest with a major choice near the end. Its outcome leads into Hancock recruitment.','sq_bigdig'],
['The Secret of Cabot House',['world'],'Cabot family questline with a major final choice.','sq_cabot'],
['The Silver Shroud',['world'],'Goodneighbor superhero questline with a fragile rescue sequence involving Kent Connolly.','sq_shroud'],
['Vault 81',['vault','companion'],'Gain entry to Vault 81 and meet its residents. This is the gateway to Curie’s recruitment chain.','sq_vault81']
];

const commonMain=[
['Out of Time','Leave Vault 111, return to Sanctuary, and begin searching the Commonwealth.','Main Story','main_out'],
['Jewel of the Commonwealth','Travel to Diamond City while following the trail of Shaun.','Main Story','main_jewel'],
['Unlikely Valentine','Find and rescue Nick Valentine from Vault 114.','Main Story','main_valentine'],
['Getting a Clue','Work with Nick to identify your next lead.','Main Story','main_clue'],
['Reunions','Track Kellogg to Fort Hagen and confront him.','Main Story','main_reunions'],
['Dangerous Minds','Use the Memory Den to search Kellogg’s memories for the next lead.','Main Story','main_dangerous'],
['Shattered','A short main-story transition after Dangerous Minds that moves the search toward the Institute.','Main Story','main_shattered'],
['The Glowing Sea','Travel into the Glowing Sea to find Virgil.','Main Story','main_glowing'],
['Hunter/Hunted','Track down a Courser and obtain its chip.','Main Story','main_hunter'],
['The Molecular Level','Decode the Courser chip and construct the signal interceptor. This is an excellent permanent branch-save point.','Main Story','main_molecular'],
['Institutionalized','Enter the Institute and meet its leadership.','Main Story','main_institutionalized']
];

const routes={
undecided:{title:'Maximum Content',desc:'Keep all major factions usable as long as possible while seeing the game in guidebook-sized quest steps.',status:{Minutemen:'friendly',Railroad:'friendly',Brotherhood:'friendly',Institute:'friendly'},steps:[
...commonMain.slice(0,2),
['When Freedom Calls','Help Preston Garvey and the Quincy survivors in Concord; opens the Minutemen path.','Minutemen Main','r_wfc'],
...commonMain.slice(2,5),
['Fire Support','Respond to Cambridge Police Station and meet Paladin Danse.','Brotherhood Main','r_fire'],
['Call to Arms','Help Danse at ArcJet Systems and open early Brotherhood access.','Brotherhood Main','r_call'],
['Road to Freedom','Follow the Freedom Trail and locate Railroad HQ.','Railroad Main','r_road'],
['Tradecraft','Work with Deacon and gain full Railroad access.','Railroad Main','r_trade'],
...commonMain.slice(5,10),
['SAVE BRANCH — The Molecular Level','Keep a permanent manual save around the teleporter/faction-choice stage if you want to explore several endings or achievement branches.','Guide Note','r_branchsave'],
...commonMain.slice(10),
['Boston After Dark','Prima classifies this as Railroad Miscellaneous; doing it early opens more Railroad work while all factions are still available.','Railroad Misc','r_bad'],
['The Lost Patrol','Prima classifies this as Brotherhood Miscellaneous; useful story content before late faction hostility.','Brotherhood Misc','r_lostpatrol'],
['Blind Betrayal','See Danse’s major Brotherhood story before pushing toward Tactical Thinking.','Brotherhood Main','r_blind']
],warnings:{light:['Tactical Thinking / Mass Fusion','These are major faction breakpoints. Stop and review first.'],warn:['Tactical Thinking / Mass Fusion','Do not push Tactical Thinking if you still want the Railroad; do not casually pick Mass Fusion/Spoils of War while keeping Institute/Brotherhood options open.'],full:['Maximum-content hard stops','Finish the side, companion, miscellaneous, freeform and faction jobs you care about before Tactical Thinking, Mass Fusion/Spoils of War, End of the Line, or the late stages of Underground Undercover.']}},

railroad:{title:'Railroad Ending',desc:'Prioritize the Railroad while keeping the Institute friendly long enough for the undercover route.',status:{Minutemen:'friendly',Railroad:'friendly',Brotherhood:'neutral',Institute:'neutral'},steps:[
...commonMain.slice(0,2),
['Road to Freedom','Find Railroad HQ.','Railroad Main','rr_road'],
['Tradecraft','Join the Railroad and unlock its early work.','Railroad Main','rr_trade'],
...commonMain.slice(2,5),
['Boston After Dark','Prima classifies this as Railroad Miscellaneous; complete it to open more Railroad work.','Railroad Misc','rr_bad'],
...commonMain.slice(5,11),
['Underground Undercover','Begin the Railroad infiltration plan while remaining undercover in the Institute.','Railroad Main','rr_uu'],
['Operation Ticonderoga','Complete it when offered; late undercover progression can make it unavailable.','Railroad Main','rr_ticon'],
['Precipice of War','Late Railroad commitment and open conflict with the Brotherhood.','Railroad Main','rr_precipice'],
["Rockets' Red Glare",'Railroad endgame operation against the Brotherhood.','Railroad Main','rr_redglare'],
['The Nuclear Option (Railroad)','Railroad assault on the Institute and ending.','Railroad Main','rr_nuclear']
],warnings:{light:['Tactical Thinking','Brotherhood danger to your Railroad path.'],warn:['Tactical Thinking','If you want the Railroad ending, treat Tactical Thinking as a giant stop sign.'],full:['Railroad route protection','Stay on speaking terms with the Institute long enough to progress Underground Undercover. Avoid Brotherhood progression through Tactical Thinking, and finish Operation Ticonderoga before the late undercover trigger can fail it.']}},

minutemen:{title:'Minutemen Ending',desc:'Flexible route with settlement-building and a broad amount of optional faction content.',status:{Minutemen:'friendly',Railroad:'friendly',Brotherhood:'neutral',Institute:'neutral'},steps:[
...commonMain.slice(0,1),
['When Freedom Calls','Rescue Preston and the Quincy survivors in Concord.','Minutemen Main','mm_wfc'],
['Sanctuary','Help Sturges establish the Sanctuary settlement.','Minutemen Main','mm_sanctuary'],
['The First Step','Prima classifies this as a Radiant Recruitment quest: help a settlement and expand the Minutemen network.','Minutemen Radiant Recruitment','mm_first'],
...commonMain.slice(1,5),
['Taking Independence','Retake the Castle.','Minutemen Main','mm_castle'],
['Old Guns','Reopen the Castle armory and unlock artillery.','Minutemen Main','mm_oldguns'],
...commonMain.slice(5,11),
['Inside Job','Retrieve Institute network data for Sturges while entering/leaving the Institute stage.','Minutemen Main','mm_inside'],
['Form Ranks','Build enough Minutemen strength for the late route.','Minutemen Main','mm_form'],
['Defend the Castle','Defend the Minutemen headquarters during the endgame.','Minutemen Main','mm_defend'],
['The Nuclear Option (Minutemen)','Minutemen assault on the Institute and ending.','Minutemen Main','mm_nuclear'],
['With Our Powers Combined','Prima classifies this as Minutemen Main, but it is an optional anti-Brotherhood branch rather than a requirement for the normal Minutemen ending.','Minutemen Main · Optional Branch','mm_combined']
],warnings:{light:['Nuka-World raider expansion','Check consequences before helping raiders take Commonwealth settlements.'],warn:['Nuka-World raider expansion','A Preston-friendly Minutemen run and Commonwealth raider settlements do not mix well.'],full:['Minutemen caution','This route is flexible. With Our Powers Combined is a classified Minutemen Main quest but only appears for the optional anti-Brotherhood branch. Nuka-World Commonwealth raider expansion can damage your Preston relationship.']}},

bos:{title:'Brotherhood of Steel Ending',desc:'Advance Brotherhood content while still completing the common main story and outside-faction content before bridges burn.',status:{Minutemen:'neutral',Railroad:'neutral',Brotherhood:'friendly',Institute:'hostile'},steps:[
...commonMain.slice(0,2),
['Reveille','Prima classifies Reveille as Brotherhood Main. It can serve as a Brotherhood introduction after the Prydwen arrives, depending on how you discovered the faction.','Brotherhood Main · Conditional Intro','bos_reveille'],
['Fire Support','Respond to Cambridge Police Station and meet Paladin Danse.','Brotherhood Main','bos_fire'],
['Call to Arms','Assist Danse at ArcJet Systems.','Brotherhood Main','bos_call'],
...commonMain.slice(2,5),
['Semper Invicta','Continue working with Danse’s Cambridge team.','Brotherhood Main','bos_semper'],
...commonMain.slice(5,7),
['Shadow of Steel','Board the Prydwen after the Brotherhood arrives in force.','Brotherhood Main','bos_shadow'],
['Tour of Duty','Meet the senior Prydwen personnel.','Brotherhood Main','bos_tour'],
['Show No Mercy','Take part in the Brotherhood assault on Fort Strong.','Brotherhood Main','bos_mercy'],
...commonMain.slice(7,11),
['From Within','Try to recruit Dr. Li from inside the Institute.','Brotherhood Main','bos_from'],
['Outside the Wire','Deliver Institute network data to Proctor Ingram.','Brotherhood Main','bos_wire'],
['Liberty Reprimed','Help rebuild Liberty Prime.','Brotherhood Main','bos_liberty'],
['Blind Betrayal','Resolve the major Paladin Danse revelation.','Brotherhood Main','bos_blind'],
['Tactical Thinking','Hard Railroad danger point.','Brotherhood Danger','bos_tactical'],
['Spoils of War','Major Brotherhood-versus-Institute commitment.','Brotherhood Danger','bos_spoils'],
['Ad Victoriam','Brotherhood endgame assault.','Brotherhood Main','bos_ad'],
['The Nuclear Option (Brotherhood)','Brotherhood ending.','Brotherhood Main','bos_nuclear'],
['A New Dawn','Prima classifies this post-ending Brotherhood quest as Main.','Brotherhood Main · Post-ending','bos_dawn']
],warnings:{light:['Tactical Thinking','Major Railroad lockout danger.'],warn:['Tactical Thinking','Finish Railroad work you care about before advancing this quest.'],full:['Brotherhood route protection','Blind Betrayal is worth seeing before the final faction break. Tactical Thinking threatens the Railroad; Spoils of War is the Brotherhood side of the Institute split.']}},

institute:{title:'Institute Ending',desc:'Follow the complete common main story into the Institute, then finish outside-faction content before the late Institute hostility points.',status:{Minutemen:'neutral',Railroad:'hostile',Brotherhood:'hostile',Institute:'friendly'},steps:[
...commonMain,
['Synth Retention','Recover a missing Institute synth.','Institute Main','inst_synth'],
['The Battle of Bunker Hill','Large multi-faction operation involving escaped synths.','Institute Main','inst_bunker'],
['Mankind - Redefined','Advance the Institute leadership storyline.','Institute Main','inst_mankind'],
['Mass Fusion','Major Brotherhood split.','Institute Danger','inst_mass'],
['Pinned','Resolve the Institute/Minutemen confrontation at Graygarden.','Institute Main','inst_pinned'],
['Powering Up','Bring the Institute reactor fully online.','Institute Main','inst_power'],
['End of the Line','Late quest directly threatening the Railroad.','Institute Danger','inst_end'],
['Airship Down','Institute operation against the Brotherhood.','Institute Danger','inst_air'],
['Nuclear Family','Institute ending.','Institute Main','inst_nuclear']
],warnings:{light:['Mass Fusion / End of the Line','Major faction consequence points.'],warn:['Mass Fusion / End of the Line','Finish Brotherhood and Railroad content you want before these late Institute commitments.'],full:['Institute route protection','Mass Fusion is a major Brotherhood split, and End of the Line directly threatens the Railroad. Finish outside-faction rewards/content first.']}}
};
