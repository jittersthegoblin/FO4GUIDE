const factionData={
railroad:{title:'Railroad',intro:'Core Railroad storyline plus optional, miscellaneous and radiant Railroad work. Repeating jobs are labeled Radiant.',main:[['Road to Freedom','Main','f_rr_road'],['Tradecraft','Main','f_rr_trade'],['Boston After Dark','Main','f_rr_bad'],['Underground Undercover','Main','f_rr_uu'],['Operation Ticonderoga','Main','f_rr_ticon'],['Precipice of War','Main','f_rr_precipice'],["Rockets' Red Glare",'Main','f_rr_redglare'],['The Nuclear Option (Railroad)','Main','f_rr_nuclear']],side:[['Mercer Safehouse','Radiant / settlement','f_rr_mercer'],["Butcher's Bill",'Side','f_rr_b1'],["Butcher's Bill 2",'Side','f_rr_b2'],['Memory Interrupted','Side','f_rr_memory'],['Jackpot','Radiant','f_rr_jackpot'],['Concierge','Radiant','f_rr_concierge'],['Weathervane','Radiant','f_rr_weather'],['Randolph Safehouse','Radiant chain','f_rr_randolph'],['Variable Removal','Radiant','f_rr_variable'],['To the Mattresses','Radiant chain','f_rr_mattress'],['Lost Soul','Radiant','f_rr_lost'],['High Ground','Radiant','f_rr_high'],['A Clean Equation','Radiant','f_rr_clean']]},

minutemen:{title:'Minutemen',intro:'Core Minutemen storyline, settlement side quests and radiant recruitment/defense work. With Our Powers Combined is optional and is not required for the normal Minutemen ending.',main:[['When Freedom Calls','Main','f_mm_wfc'],['Sanctuary','Main','f_mm_san'],['The First Step','Main','f_mm_first'],['Taking Independence','Main','f_mm_independence'],['Old Guns','Main','f_mm_oldguns'],['Inside Job','Main','f_mm_inside'],['Form Ranks','Main','f_mm_form'],['Defend the Castle','Main','f_mm_defend'],['The Nuclear Option (Minutemen)','Main','f_mm_nuclear']],side:[['Returning the Favor','Side / settlement','f_mm_return'],['Out of the Fire','Side / settlement','f_mm_fire'],['Troubled Waters','Side / settlement','f_mm_water'],['The Sight','Side / Mama Murphy','f_mm_sight'],['With Our Powers Combined','Optional late side','f_mm_combined'],['Raider Troubles','Radiant recruitment','f_mm_raider'],['Ghoul Problem','Radiant recruitment','f_mm_ghoul'],['Greenskins','Radiant recruitment','f_mm_green'],['Kidnapping','Radiant recruitment','f_mm_kidnap'],['Clearing the Way','Radiant recruitment','f_mm_clear'],['Taking Point','Radiant recruitment','f_mm_point'],['Resettle Refugees','Radiant recruitment','f_mm_refugees'],['Defend a Settlement','Radiant ownership','f_mm_defsettle'],['Defend Artillery','Radiant ownership','f_mm_art'],['Stop the Raiding','Radiant ownership','f_mm_stop'],['Kidnapped Trader','Radiant ownership','f_mm_trader'],['Suspected Synth','Radiant / local','f_mm_synth'],['Rogue Courser','Radiant / late','f_mm_courser']]},

bos:{title:'Brotherhood of Steel',intro:'Brotherhood main story and optional Prydwen/patrol work. Repeatable assignments are marked Radiant.',main:[['Fire Support','Main','f_bos_fire'],['Call to Arms','Main','f_bos_call'],['Semper Invicta','Main','f_bos_semper'],['Shadow of Steel','Main','f_bos_shadow'],['Tour of Duty','Main','f_bos_tour'],['Show No Mercy','Main','f_bos_mercy'],['From Within','Main','f_bos_from'],['Outside the Wire','Main','f_bos_wire'],['Liberty Reprimed','Main','f_bos_liberty'],['Blind Betrayal','Main','f_bos_blind'],['Tactical Thinking','Danger','f_bos_tactical'],['Spoils of War','Danger','f_bos_spoils'],['Ad Victoriam','Main','f_bos_ad'],['The Nuclear Option (Brotherhood)','Main','f_bos_nuclear']],side:[['The Lost Patrol','Side','f_bos_lost'],['Duty or Dishonor','Side','f_bos_duty'],['A Loose End','Side','f_bos_loose'],['A New Dawn','Post-ending side','f_bos_dawn'],['Cleansing the Commonwealth','Radiant','f_bos_clean'],['Quartermastery','Radiant','f_bos_quarter'],['Feeding the Troops','Radiant','f_bos_feed'],['Leading by Example','Radiant','f_bos_lead'],['Learning Curve','Radiant','f_bos_curve'],['Blood Bank','Misc / repeatable','f_bos_blood'],['Getting Technical','Misc / repeatable','f_bos_tech'],['Reactor Coolant','Misc / repeatable','f_bos_coolant']]},

institute:{title:'Institute',intro:'Institute main story plus directorate side work and repeating Institute assignments.',main:[['Institutionalized','Main','f_i_inst'],['Synth Retention','Main','f_i_synth'],['The Battle of Bunker Hill','Main','f_i_bunker'],['Mankind - Redefined','Main','f_i_mankind'],['Mass Fusion','Danger','f_i_mass'],['Pinned','Main','f_i_pinned'],['Powering Up','Main','f_i_power'],['End of the Line','Danger','f_i_end'],['Airship Down','Main','f_i_air'],['Nuclear Family','Main','f_i_nuclear']],side:[['Building a Better Crop','Side / Misc','f_i_crop'],['A House Divided','Side / Misc','f_i_house'],["Plugging a Leak",'Side / Misc','f_i_leak'],['Hypothesis','Radiant','f_i_hyp'],['Pest Control','Radiant','f_i_pest'],['Reclamation','Radiant','f_i_reclaim'],['Appropriation','Radiant','f_i_approp'],['Political Leanings','Radiant','f_i_political']]},

undecided:{title:'All Factions',intro:'You have not committed. Use this section to sample optional faction jobs before lockouts.',main:[],side:[['Railroad: Boston After Dark / Mercer Safehouse / Jackpot','Optional Railroad work','f_all_rr'],['Brotherhood: Lost Patrol / Duty or Dishonor','Optional Brotherhood work','f_all_bos'],['Minutemen: Returning the Favor / Out of the Fire / Troubled Waters','Optional Minutemen work','f_all_mm'],['Institute miscellaneous/radiant jobs after Institutionalized','Optional Institute work','f_all_i']]}
};

const questDescriptions={
'Road to Freedom':'Follow the Freedom Trail through Boston to locate the Railroad and gain access to their headquarters.',
'Tradecraft':'Work with Deacon on an early Railroad operation and prove yourself useful to the organization.',
'Boston After Dark':'Help the Railroad move an escaped synth safely through the Commonwealth.',
'Underground Undercover':'Operate secretly inside the Institute while helping the Railroad prepare a large-scale synth escape plan.',
'Operation Ticonderoga':'Respond to an Institute attack on a Railroad safehouse. Do this when offered on a Railroad route.',
'Precipice of War':'The Railroad enters open conflict with the Brotherhood of Steel as the endgame begins.',
"Rockets' Red Glare":'Carry out the Railroad operation against the Brotherhood airship. This is a major late-game commitment.',
'The Nuclear Option (Railroad)':'The Railroad endgame assault on the Institute and final push toward its ending.',
'Mercer Safehouse':'Establish and prepare a settlement to serve as a new Railroad safehouse.',
"Butcher's Bill":'Investigate a Railroad safehouse problem and follow the trail left by agents in the field.',
"Butcher's Bill 2":'A follow-up Railroad investigation involving another compromised operation.',
'Memory Interrupted':'Help with a Railroad operation involving an escaped synth after memory work and relocation.',
'Jackpot':'Recover a hidden DIA cache for P.A.M.; completing Jackpot work is tied to unlocking Ballistic Weave access.',
'Concierge':'Handle a threat connected to one of the Railroad safehouses.',
'Weathervane':'Help Tinker Tom place MILA monitoring devices at high locations around the Commonwealth.',
'Randolph Safehouse':'A chain of Railroad dead-drop assignments supporting the hidden Randolph Safehouse.',
'Variable Removal':'Carry out a P.A.M. elimination assignment against an Institute target.',
'To the Mattresses':'A repeating Railroad chain aimed at removing a gang that threatens escaped synths and agents.',
'Lost Soul':'Recover or rescue a synth who has fallen into hostile hands.',
'High Ground':'A late Railroad radiant assignment connected to fighting Brotherhood forces.',
'A Clean Equation':'A late Railroad radiant operation against Brotherhood forces after relations have fully broken down.',
'When Freedom Calls':'Help Preston Garvey and the Quincy survivors escape Concord, opening the Minutemen path.',
'Sanctuary':'Help the Minutemen survivors establish basic resources and defenses in Sanctuary.',
'The First Step':'Help a settlement with its problem and formally establish the early Minutemen network.',
'Returning the Favor':'Help Blake Abernathy recover his daughter’s locket from USAF Satellite Station Olivia.',
'Out of the Fire':'Help Finch Farm recover Abraham Finch’s sword from Saugus Ironworks.',
'Troubled Waters':'Restore Graygarden’s water supply by clearing Weston Water Treatment Plant.',
'The Sight':'Bring chems to Mama Murphy to hear visions; optional and potentially consequential for her.',
'Taking Independence':'Reclaim the Castle so the Minutemen can use it as their headquarters.',
'Old Guns':'Restore the Castle armory and unlock Minutemen artillery support.',
'Inside Job':'Use Institute access to obtain network data for Sturges.',
'Form Ranks':'Strengthen the Minutemen before their late-game confrontation with the Institute.',
'Defend the Castle':'Defend the Castle during the Minutemen endgame.',
'With Our Powers Combined':'Optional Minutemen quest to destroy the Brotherhood after the factions become enemies; not required for the standard Minutemen ending.',
'Fire Support':'Respond to the distress signal at Cambridge Police Station and meet Paladin Danse.',
'Call to Arms':'Assist Paladin Danse at ArcJet Systems and deepen your connection to the faction.',
'Blind Betrayal':'A major Brotherhood character quest with an important decision involving Paladin Danse.',
'Tactical Thinking':'A Brotherhood quest that becomes extremely dangerous if you still want to remain friendly with the Railroad.',
'Spoils of War':'The Brotherhood side of a major Brotherhood-versus-Institute story split.',
'Institutionalized':'Enter the Institute, meet its leadership, and decide whether to keep working with them.',
'Synth Retention':'Assist the Institute with recovering a missing synth.',
'The Battle of Bunker Hill':'A major multi-faction mission where several groups collide over escaped synths.',
'Mankind - Redefined':'An Institute leadership quest that pushes its main storyline forward.',
'Mass Fusion':'A major Institute commitment quest that directly threatens your relationship with the Brotherhood.',
'End of the Line':'A late Institute quest that creates a serious conflict with the Railroad.'
};
function describeQuest(title,type){return questDescriptions[title]||('A '+type.toLowerCase()+' quest. This entry is kept concise so the checklist remains spoiler-friendly.');}

const timed=[['Settlement defense / rescue-style radiant quests','Treat these as the closest thing to “do it soon.” Do not leave them sitting forever if you care about the settlement outcome.'],['Kidnapping / urgent-help radiants','Handle promptly when practical. Radiant objectives are much more likely to have failure conditions than the cinematic main story.']];
const notTimed=[['Most main-story urgency','The dialogue sounds urgent, but Fallout 4 normally lets you wander, build settlements, and loot desk fans for ages.'],['Faction NPCs saying “right away”','Often dramatic language rather than an actual ticking clock. The dangerous part may be the faction consequence, not time.']];
const danger=[['Tactical Thinking','Faction consequence warning: progressing it is dangerous for a Railroad-friendly run.'],['Mass Fusion / Spoils of War','Major Institute-versus-Brotherhood commitment point.'],['Late Underground Undercover','For Railroad players, pay attention to Operation Ticonderoga before pushing the late Institute-undercover trigger too far.'],['Nuka-World raider settlement expansion','Important relationship/faction warning for a Preston-friendly Minutemen run.']];
