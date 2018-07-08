//497 = berz npc card
/*
	location number:
		0 = unequipped
		1 = weapon
		2 = headgear
		3 = shield
		4 = armor
		5 = garment
		6 = shoes
		7 = accessory
		10 = weapon elemental stone
		11 = weapon special
		999 = unused
*/
cardOBJ = [
[0,0,"(No Card)",0,0]
,[1,11,"All Race +20%",0,30,20,31,20,32,20,33,20,34,20,35,20,36,20,37,20,38,20,39,20,0]
,[2,11,"All Element +20%",0,40,20,41,20,42,20,43,20,44,20,45,20,46,20,47,20,48,20,49,20,0]
,[3,11,"All Size +15%,Atk+5",0,17,5,27,15,28,15,29,15,0]
,[4,1,"Fabre",0,3,1,13,100,0]
,[5,1,"Drops",0,5,1,8,3,0]
,[6,1,"Hornet",0,1,1,17,3,0]
,[7,1,"Lunatic",0,6,1,10,1,11,1,0]
,[8,1,"Female Thief Bug",0,2,1,9,1,0]
,[9,1,"Skeleton",0,17,10,131,2,0]
,[10,1,"Wolf",0,17,15,10,1,0]
,[11,1,"Andre",0,17,20,0]
,[12,1,"Peco Peco Egg",0,30,20,0]
,[13,1,"Hydra",0,37,20,0]
,[14,1,"Goblin",0,32,20,0]
,[15,1,"Caramel",0,34,20,0]
,[16,1,"Scorpion",0,33,20,0]
,[17,1,"Flora",0,35,20,0]
,[18,1,"Strouf",0,36,20,0]
,[19,1,"Earth Petite",0,39,20,0]
,[20,1,"Deviace",0,37,7,32,7,33,7,34,7,0]
,[21,1,"Drainliar",0,41,20,0]
,[22,1,"Santa Poring",0,47,20,0]
,[23,1,"Mandragora",0,44,20,0]
,[24,1,"Vadon",0,43,20,0]
,[25,1,"Anacondaq",0,45,20,0]
,[26,1,"Kaho",0,42,20,0]
,[27,1,"Orc Skeleton",0,46,20,0]
,[28,1,"Desert Wolf",0,27,15,17,5,0]
,[29,1,"Skeleton Worker",0,28,15,17,5,0]
,[30,1,"Minorous",0,29,15,17,5,0]
,[31,1,"Abysmal Knight",0,26,25,0]
,[32,1,"Drake","Deal 100% damage on all sizes<BR>(Certain weapon types have reduced attack power against certain sizes of monsters)",220,46,0] //custom TalonRO - allow skill usage Water Ball lv4
,[33,1,"Plankton",0,17,5,135,5,0]
,[34,1,"Snake",0,17,5,130,5,0]
,[35,1,"Marina",0,17,5,132,5,0]
,[36,1,"Metaller",0,17,5,136,5,0]
,[37,1,"Magnolia",0,17,5,133,5,0]
,[38,1,"Zenorc",0,17,10,130,4,0]
,[39,1,"Golem","Weapon Cannot be broken",17,5,0]
,[40,1,"Mummy",0,8,20,0]
,[41,1,"Soldier Skeleton",0,10,9,0]
,[42,1,"Doppelganger",0,12,25,0] //custom TalonRO +25% aspd instead of +10
,[43,1,"Sidewinder","Enable the use of [Double Attack]Lv 1 (with all weapons)<BR>If you know a level higher than 1, you will use that level instead",0]
,[44,1,"Phreeoni",0,8,100,0]
,[45,1,"Baphomet","All regular attacks become 3x3 splash damage like a Bowling Bash Effect Permanently",8,-10,0]
,[46,1,"Hunter Fly","Enables a 3% chance of gaining 15% of the damage inflicted on an enemy as HP with each attack",0]
,[47,1,"Dracula","-1500 HP on unequip (not calced)",190,4,191,4,192,4,0] //custom TalonRO -4% dmg from all sizes
,[48,2,"Willow",0,14,80,0]
,[49,2,"Elder Willow",0,4,2,0]
,[50,2,"Nightmare",0,2,1,155,100,0]
,[51,2,"Deviruchi",0,1,1,154,100,0]
,[52,2,"Orc Hero",0,3,3,151,100,0]
,[53,3,"Thief Bug Egg",0,13,400,0]
,[54,3,"Andre Egg",0,15,5,0]
,[55,3,"Ambernite",0,18,2,0]
,[56,3,"Thara Frog",0,57,30,0]
,[57,3,"Orc Warrior",0,52,30,0]
,[58,3,"Bigfoot",0,54,30,0]
,[59,3,"Rafflesia",0,55,30,0]
,[60,3,"Sky Petite",0,59,30,0]
,[61,3,"Khalitzburg",0,56,30,0]
,[62,3,"Horn",0,78,35,0]
,[63,3,"Medusa",0,56,15,159,100,0]
,[64,4,"Poring",0,6,2,11,1,0]
,[65,4,"Picky",0,1,1,17,10,0]
,[66,4,"Picky Egg",0,3,1,13,100,0]
,[67,4,"Thief Bug",0,2,1,0]
,[68,4,"Rocker",0,5,1,17,5,0]
,[69,4,"Baby Desert Wolf",0,4,1,0]
,[70,4,"Savage",0,3,3,0]
,[71,4,"Pupa",0,13,700,0]
,[72,4,"Roda Frog",0,13,400,14,50,0]
,[73,4,"Peco Peco",0,15,10,0]
,[74,4,"Steel Chonchon",0,18,2,64,10,0]
,[75,4,"Evil Druid",0,4,1,18,1,198,9,0]
,[76,5,"Whisper",0,9,20,68,-50,0]
,[77,5,"Raydric",0,60,20,0]
,[78,5,"Bapho Jr.",0,2,3,10,1,0]
,[79,5,"Condor",0,9,10,0]
,[80,5,"Dustiness",0,9,5,64,30,0]
,[81,5,"Marse",0,9,5,61,30,0]
,[82,5,"Jakk",0,9,5,63,30,0]
,[83,5,"Hode",0,9,5,62,30,0]
,[84,5,"Marionette",0,9,5,68,30,0]
,[85,5,"Orc Zombie",0,9,5,69,30,0]
,[86,5,"Isis",0,9,5,67,30,0]
,[87,5,"Myst",0,9,5,65,30,0]
,[88,6,"Chonchon",0,9,2,2,1,0]
,[89,6,"Male Thief Bug",0,2,2,0]
,[90,6,"Matyr",0,2,1,15,10,0]
,[91,6,"Sohee",0,16,15,76,3,0]
,[92,6,"Verit",0,15,8,16,8,0]
,[93,6,"Zombie",0,75,20,0]
,[94,6,"Eggyra",0,76,15,0]
,[95,6,"Eddga","Infinite [Endure] Effect, no Mdef Bonus. Doesn't work in GvG Maps",15,12,0] //custom TalonRO +12% HP instead of -25%
,[96,7,"Spore",0,3,2,0]
,[97,7,"Kukre",0,2,2,0]
,[98,7,"Tarou",0,1,2,0]
,[99,7,"Wormtail",0,5,2,0]
,[100,7,"Zerom",0,5,3,0]
,[101,7,"Mantis",0,1,3,0]
,[102,7,"Yoyo",0,2,1,11,5,0]
,[103,7,"Kobold",0,1,1,10,4,0]
,[104,7,"Muka",0,75,10,0]
,[105,7,"Phen","Skill casts cannot be interrupted (except in WoE)",73,25,0]
,[106,11,"*Star Crumb",0,0]
,[107,1,"Archer Skeleton",0,25,10,0]
,[108,1,"Scorpion King",0,31,20,0]
,[109,1,"Savage Babe",0,131,5,0]
,[110,1,"Familiar",0,17,5,134,5,0]
,[111,1,"Requiem",0,137,5,0]
,[112,1,"Andre Larva",0,4,1,14,10,0]
,[113,2,"Stainer",0,18,1,156,20,0]
,[114,2,"Coco",0,18,1,155,20,0]
,[115,2,"Martin",0,18,1,154,20,0]
,[116,2,"Ghoul",0,18,1,150,20,0]
,[117,2,"Giearth",0,157,100,62,15,0]
,[118,2,"Marduk",0,156,100,0]
,[119,2,"Mistress","Skills requiring gemstones to cast no longer require them.<BR>SP cost of skills + 25%",0]
,[120,2,"Pharaoh","SP cost of skills - 30%",0]
,[121,3,"Soldier Andre",0,53,30,0]
,[122,3,"Anubis",0,58,30,0]
,[123,3,"Megalodon",0,18,1,152,20,0]
,[124,3,"Argos",0,18,1,159,20,0]
,[125,3,"Munak",0,18,1,62,5,159,15,0]
,[126,3,"Golden Thief Bug","Immunity to all magic (including Heal, Buffs ,Quagmire, etc).<BR>SP cost of skills + 100%",0]
,[127,3,"Maya","Enable to use [Auto-Guard] lvl 2 (not calced)",19,20,0] //custom TalonRO enables Auto-Guard lv2; mdef+20
,[128,4,"Swordfish",0,18,1,198,1,0]
,[129,4,"Sandman",0,18,1,198,2,0]
,[130,4,"Pasana",0,18,1,198,3,0]
,[131,4,"Dokebi",0,18,1,198,4,0]
,[132,4,"Cornutus","Armor cannot be broken",18,1,0]
,[133,4,"Argiope",0,18,1,198,5,0]
,[134,4,"Angeling",0,198,6,0]
,[135,4,"Bathory",0,198,7,0]
,[136,4,"Ghostring","Ghost Element (not working against monster)",75,-25,0] //custom TalonRO Ghost element not working against monster
,[137,4,"Marc",0,152,100,61,5,0]
,[138,4,"Orc Lord",0,71,30,0]
,[139,5,"Frilldora",0,220,19,0]
,[140,6,"Moonlight Flower","Movement speed increased (same as Increase AGI)",5,5,15,25,0] //custom TalonRO dex+5; MaxHP +25%
,[141,7,"Berzebub",0,73,-30,0]
,[142,7,"Poison Spore",0,220,20,0]
,[143,7,"Marine Sphere",0,220,21,0]
,[144,7,"Vitata","SP cost of skills + 25%",220,5,0]
,[145,7,"Smokie",0,220,22,0]
,[146,7,"Creamy",0,220,23,0]
,[147,7,"Poporing",0,220,24,0]
,[148,7,"Obeaune",0,220,25,0]
,[149,7,"Pirate Skeleton",0,220,26,0]
,[150,7,"Horong",0,220,16,0]
,[151,7,"Joker",0,220,27,0]
,[152,7,"Osiris","When revived, you recover full HP &amp; SP<BR>Enable to use [Increase Agility] lvl 5",0] //custom TalonRO enables Increase Agility lv 5
,[153,999,"0",0,0]
,[154,3,"Race Reduction 30%",0,50,30,51,30,52,30,53,30,54,30,55,30,56,30,57,30,58,30,59,30,0]
,[155,999,"0",0,0]
,[156,11,"Crit Dmg+10%,Crit+7",0,70,10,10,7,0]
,[157,1,"Metaling",0,221,54,0]
,[158,1,"Eremes Guile",0,117,10,0]
,[159,1,"Howard Alt-Eisen",0,8,30,12,-5,0]
,[160,1,"Cecil Damon",0,12,5,8,-30,0]
,[161,1,"Whitesmith","Add a low chance to cast Level 4 Meltdown when attacking",0] //custom TalonRO low chance for lv4 Meltdown
,[162,1,"Sniper","When attacking with an ATK based attack, adds a 10% chance to absorb 20% of the damage inflicted on the enemy as HP",75,-10,0] //custom TalonRO 10% chance to absorb instead of 5%; HPregen -10% instead of -100%
,[163,1,"Breeze",0,17,5,138,5,0]
,[164,1,"Solace","When equipped by a priest:<BR>When attacking with an ATK based attack, adds a chance to autocast [Grand Cross]Lv 5",0]
,[165,1,"Thanatos Maero",0,17,5,221,55,0]
,[166,1,"Thanatos","Bypass 30% of enemy DEF (both boss and non-boss)",18,-15,9,-15,0] //custom TalonRO 30% def bypass (boss+non-boss), def-15;flee-15;no ice pick effect
,[167,1,"Hill Wind","When unequipping the weapon with this card, drains 50 sp from you",5057,5,5126,5,5127,5,0]
,[168,1,"Laurell Weinder","When un equipping the weapon with this card, drains 50 sp from you.",5130,3,5131,3,0]
,[169,1,"Deathword","When un equipping the weapon with this card, drains 50 sp from you",5046,5,5047,5,5277,5,0]
,[170,1,"Red Ferus","When unequipping the weapon with this card, drains 50 sp from you",5122,5,5125,5,0]
,[171,1,"Pitman","When un equipping the weapon with this card, drains 50 sp from you",5132,5,5133,5,0]
,[172,3,"Teddy Bear",0,51,30,0]
,[173,3,"Thanatos Despero","Each refine increases your INT by 1",4,-6,0]
,[174,2,"Ungoliant",0,75,10,158,100,0]
,[175,2,"Holden",0,6,2,0]
,[176,2,"Gemini-S58","When base AGI is at or higher than 90, gain +30% resistance to [Silence] and [Stun]<BR>When base VIT is at or higher than 80, +50% resistance to [Stone] and [Sleep]",0]
,[177,2,"Kathryne Keyron","Each refine decreases cast time by 1%.<BR>If refined to +9 or higher, MATK + 2%",0]
,[178,2,"Lord Knight","Add a 5% chance to autocast Joint Beat lvl 5 when attacking",0] //custom TalonRO no Berserk effect, but autocast Joint Beat
,[179,2,"Blue Acidus","If refined to 4 or less, gain MaxSP + 40, SP Recovery Rate + 5%",14,40,0]
,[180,2,"Seyren Windsor","Each refine increases your STR by 1",1,-6,0]
,[181,4,"Waste Stove",0,4,1,17,5,0]
,[182,4,"Venomous","When receiving ATK based damage, there is a very high chance to cast poison on both you and your opponent",0]
,[183,4,"Porcellio",0,17,25,18,-5,0]
,[184,4,"Mineral",0,17,-25,18,3,0]
,[185,4,"Obsidian","For every 18 base DEX, gain VIT + 1",0]
,[186,4,"Remover","Each refine decreases the HP gained by 40",13,800,0]
,[187,4,"Egnigem Cenia","For every 18 INT, gain STR + 1",0]
,[188,7,"Armeyer Dinze","When killing a fish type monster, gain a chance to obtain Clam Soup (VIT + 3) as a drop",0]
,[189,4,"Venatu","For every 18 base AGI, gain LUK + 1",0]
,[190,4,"Archdam",0,17,10,73,20,0]
,[191,4,"Ancient Mimic","For every 18 base LUK, gain AGI + 1",0]
,[192,4,"Red Novus","30% chance to inflict you and your enemy with [Chaos] when attacking with an ATK based attack attacking",0]
,[193,4,"Yellow Novus",0,13,500,75,10,0]
,[194,4,"Alicel",0,9,10,18,-5,0]
,[195,4,"Skogul","30% chance to inflict you and your enemy with [Bleeding] when attacking with an ATK based attack attacking",0]
,[196,4,"Shelter","For every 18 base STR, INT + 1",0]
,[197,4,"Observation","For every 18 base VIT, DEX + 1",0]
,[198,4,"Dimik","Each refine increases your VIT by 1",3,-5,0]
,[199,4,"Frus","Each refine increases your chance to reflect targeted magic spells by 2%.<BR>If equipped by a Mage type character, MDEF+3",0]
,[200,999,"0",0,0]
,[201,10,"Element Stone (Water)",0,0]
,[202,10,"Element Stone (Earth)",0,0]
,[203,10,"Element Stone (Fire)",0,0]
,[204,10,"Element Stone (Wind)",0,0]
,[205,999,"Unused",0,0]
,[206,999,"Unused",0,0]
,[207,999,"Unused",0,0]
,[208,999,"Unused",0,0]
,[209,999,"Unused",0,0]
,[210,999,"Unused",0,0]
,[211,999,"Unused",0,0]
,[212,7,"Quve","When equipped by a Novice or Super Novice character, gain a 10% chance to autocast [Increase AGI]Lv 1 on yourself when taking ATK based damage",0]
,[213,2,"Gibbet","If refined to +5 or less, gain MDEF + 5",0]
,[214,4,"Disguise","When receiving ATK based damage, gain a chance to [Silence] your opponent.<BR>If you have base VIT of 77 or higher, the chance of [Silence] increases.",0]
,[215,1,"Dullahan",0,70,10,119,7,0]
,[216,7,"Hylozoist","1% chance to polymorph the monster when attacking with an ATK based attack",0]
,[217,1,"Bloody Murderer",0,70,10,114,7,0]
,[218,7,"Lude","When equipped by a Novice or Super Novice character, gain a 20% chance to autocast [Endure]Lv 1 when taking ATK based damage",0]
,[219,5,"Lord of Death",0,3,10,190,10,191,10,192,10,0] //custom TalonRO -10% dmg of monster sizes; vit+10 - diff position
,[220,4,"Loli Ruri","When receiving ATK based damage, there is a 5% chance to autocast [Heal]Lv 3 on yourself",0]
,[221,2,"Archangeling","If you have 77 base LUK or higher, increases HP and SP recovery by 100%",13,300,0]
,[222,3,"Arclouse","If refined to +5 or less, gain DEF+2, MDEF+3",0]
,[223,1,"Assaulter",0,70,10,117,7,0]
,[224,4,"Anolian","If you know [Improve Concentration]Lv 10, you will autocast Lv10 instead",221,56,0]
,[225,4,"Apocalipse","If armor is refined to +9 or higher, Max HP + 800",3,2,0]
,[226,7,"Li Me Mang Ryang","1% chance to obtain [Box of Sunlight] as a drop when killing an Angel race monster",0]
,[227,6,"Am Mut",0,127,10,57,-20,0]
,[228,6,"Amon Ra","If you have 99 base INT, the chance to autocast [Kyrie Eleison] increases to 10%",7,1,221,57,0]
,[229,6,"Alarm",0,3,1,13,300,0]
,[230,1,"Alligator",0,10,12,0]  //custom TalonRO crit+12; diff position
,[231,3,"Alice",0,77,40,79,-40,0]
,[232,4,"Antonio",0,221,58,0]
,[233,1,"The Paper","When attacking with an ATK based attack, drains 1SP with every attack",70,20,0]
,[234,2,"Incubus",0,14,150,4,-3,76,-20,0]
,[235,1,"Injustice",0,221,59,0]
,[236,7,"Violy","If you know [Frost Joke]Lv 5, you will autocast Lv5 instead",221,60,0]
,[237,7,"Wind Ghost","If you know [Jupitel Thunder]Lv 10, you will autocast Lv10 instead",221,61,0]
,[238,2,"Wootan Shooter",0,18,1,157,20,0]
,[239,2,"Wootan Fighter",0,18,1,158,20,0]
,[240,4,"Wooden Golem",0,75,30,18,1,0]
,[241,3,"Executioner",0,18,1,192,25,0]
,[242,6,"Explosion",0,129,10,59,-20,0]
,[243,5,"Eclipse",0,3,1,0]
,[244,1,"Elder","Increase damage on Guardian type monsters by 40%<BR>[does not work on WoE: SE Guardians]",1063,40,1064,40,1065,40,1575,40,1576,40,0]
,[245,3,"Ancient Mummy",0,221,62,0]
,[246,6,"Ancient Worm",0,126,10,56,-20,0]
,[247,7,"Owl Duke",0,221,63,0]
,[248,7,"Owl Baron",0,221,64,0]
,[249,3,"Tirfing",0,18,1,191,25,0]
,[250,7,"Orc Archer","1% chance to obtain [Box of Panting] as a drop when killing a Demi-human race monster",0]
,[251,7,"Poisonous Toad","Causes Envenom to push the target 5 cells back",221,65,0]
,[252,1,"Orc Lady","<b>Does not work on Orc Hero neither Orc Lord</b>",83,30,0]
,[253,1,"Seal","When equipped by an Acolyte type class, gain +9 critical against undead and demon monsters",8,10,9,3,0]
,[254,1,"Shell Fish","Increase damage on [Crab] by 30%",1072,30,17,5,0]
,[255,1,"Incantation Samurai",0,17,65,0] //custom TalonRO atk+65
,[256,6,"Gargoyle",0,5,5,0] //custom TalonRO dex+5 - diff position
,[257,6,"Gajomart",0,123,10,53,-20,0]
,[258,5,"Kapha","If refined to +5 or less, gain MDEF+8",0]
,[259,1,"Crab","Increase damage on [Aster] by 30%",1240,30,17,5,0]
,[260,7,"Shinobi","10% chance of casting lv5 [Cloaking] when recieving ATK based damage",2,1,0]
,[261,4,"Karakasa","3% chance of inflicting [Chaos] when recieving ATK based damage<BR>If the user has 77 Base STR or higher, 9% chance instead",0]
,[262,7,"Galapago","3% chance of obtaining Apple Juice, Banana Juice and Carrot Juice when killing an Insect race monster<BR>Increase recovery by 50% with those items",0]
,[263,1,"Gig","Regain 5 SP when killing a Insect race monster with a ATK based attack<BR>Drains 5 SP when the weapon is unequipped",0]
,[264,4,"Chimera","3% chance of inflicting Poison status when receiving ATK based damage<BR>If equipped by an Assassin job type, 9% chance instead",0]
,[265,1,"Caterpillar","Regain 5 SP when killing a Plant race monster with a ATK based attack<BR>Drains 5 SP when the weapon is unequipped",0]
,[266,6,"Cat o' Nine Tails","5% chance of reflecting the damage received from a targetted magical attack",19,3,0]
,[267,5,"Giant Whisper","If the user's base Str is 80 or more: Attack +20<BR>If the user's base Vit is 80 or more: Max HP +3%<BR>If the user's base Luk is 80 or more: Crit Rate +3",9,10,0]
,[268,4,"Killer Mantis","6% chance of inflicting Bleeding status when receiving ATK based damage",0]
,[269,6,"Christmas Cookie",0,128,10,58,-20,0]
,[270,7,"Cookie",0,6,2,5037,10,5387,10,0]
,[271,5,"Nine Tail","If the garment is upgraded to +9 or higher: Flee Rate +20",2,2,0]
,[272,3,"Increase Soil","-50% damage from Guardian type monsters<BR>(does not work on WoE:SE Guardians as of Nov. 2008)",3063,50,3064,50,3065,50,0]
,[273,2,"Cramp","1% chance of gaining 1 to 500 zeny when killing a monster",0]
,[274,2,"Grand Peco",0,221,66,0]
,[275,4,"Creamy Fear","6% chance of inflicting [Chaos] status when receiving ATK based damage",0]
,[276,4,"Grizzly","3% chance of inflicting [Blind] status when receiving ATK based damage",0]
,[277,2,"Gryphon","For every 11 Base STR the critical bonus is reduced by 2, and you receive an additional 2 LUK",10,20,0] //custom TalonRO crit+20, crit-STR/11*2 luk+STR/11*2
,[278,6,"Gullinbursti",0,125,10,55,-20,0]
,[279,1,"Cruiser",0,70,10,112,7,0]
,[280,4,"Clock","3% chance of casting level 3 Guard when receiving phyiscal damage<BR>If the user has learned level 10, that level is used instead",221,67,0]
,[281,4,"Baby Leopard","If equipped by a Merchant job: Armor becomes unbreakable",6,3,0]
,[282,4,"Aliza","5% chance of casting [Wink of Charm] when receiving phyiscal damage<BR>If equipped by a Dancer job type: 10% chance instead",0]
,[283,4,"Goat","If the armor is upgraded to +5 or less: Def +2, MDef +5",0]
,[284,2,"Evil Snake Lord",0,4,3,157,50,159,50,0]
,[285,4,"Majoruros","6% chance of inflicting [Stun] status when receiving ATK based damage",0]
,[286,1,"Goblin Archer",0,70,10,111,7,0]
,[287,1,"Steam Goblin",0,70,10,110,7,0]
,[288,1,"Goblin Leader",0,81,30,0]
,[289,1,"Kobold Archer",0,70,10,113,7,0]
,[290,1,"Kobold Leader",0,82,30,0]
,[291,4,"Succubus",0,13,1000,3,-3,75,-20,0]
,[292,7,"Tengu","Chance of a healing type item dropping when killing a monster (Not implemented)",0]
,[293,4,"Sasquatch","6% chance of inflicting Frozen status when receiving ATK based damage",0]
,[294,5,"Vagabond Wolf",0,1,1,0]
,[295,5,"Wanderer","If equipped by a Thief job type: Flee Rate +20",221,68,0]
,[296,1,"Tri Joint","Regain 5 SP when killing a Formless race monster with a ATK based attack<BR>Drains 5 SP when the weapon is unequipped",0]
,[297,7,"Sea-Otter","3% chance of Raw Fish and Sushi dropping when killing a Fish race monster<BR>+50% HP restoration with those items",0]
,[298,2,"Carat","If the headgear is upgraded to +9 or higher: SP +150",4,2,0]
,[299,4,"Kraben","6% chance of inflicting [Blind] status when receiving ATK based damage",0]
,[300,6,"Skeleton General",0,124,10,54,-20,0]
,[301,4,"Geographer","3% chance of casting level 2 Blessing when receiving phyiscal damage<BR>If the user has learned level 10, that level is used instead",221,69,0]
,[302,4,"Giant Spider","6% chance of inflicting [Poison] status when receiving ATK based damage",0]
,[303,2,"Giant Hornet","1% chance of the Wind of Verdure item dropping when killing an Insect race monster",64,10,0]
,[304,6,"Antique Firelock","If the shoes are upgraded to +9 or higher: Max HP and Max SP +10%",1,2,0]
,[305,1,"Garm Baby",0,221,70,0]
,[306,3,"Zherlthsh",0,5207,10,5199,10,6,2,0]
,[307,3,"Enchanted Peach Tree","2% chance of casting level 1 Heal when doing a ATK based attack<BR>If the user has learned level 10, that level is used instead",0]
,[308,4,"Skeleton Prisoner","3% chance of inflicting [Sleep] status when receiving ATK based damage",0]
,[309,2,"Stalactic Golem",0,18,1,151,20,0]
,[310,7,"Sting",0,5,4,0] //custom TalonRO dex+4; diff position
,[311,1,"Dark Priest","+5% chance of decreasing the target's SP by 10%<BR>If equipped by a Sage job type: Regain 1 SP with each ATK based attack",0]
,[312,5,"Stem Worm",0,5,5,0] //custom TalonRO dex+5; diff position
,[313,2,"Stormy Knight",0,9,20,0] //custom TalonRO flee +20; diff position
,[314,7,"Spring Rabbit","2% chance of [Meat] and [Monster's Feed] item dropping when killing a Brute race monster<BR>+50% HP restoration with those items",0]
,[315,7,"Sleeper","1% chance of [Box of Drowsiness] item dropping when killing a Fish race monster",0]
,[316,7,"Sage Worm","0.3% chance of Blue/Red/Yellow Gemstone item dropping when killing a monster",0]
,[317,4,"Solider",0,18,2,19,2,0]
,[318,6,"Zombie Prisoner",0,121,10,51,-20,0]
,[319,1,"Zombie Master","Regain 5 SP when killing a Undead race monster with a ATK based attack<BR>Drains 5 SP when the weapon is unequipped",0]
,[320,2,"Dark Illusion",0,73,-5,15,-10,16,-10,0] //custom TalonRO casttime -5% instead of -10%
,[321,4,"Dark Frame","6% chance of inflicting [Stone] status when receiving ATK based damage",0]
,[322,6,"Dark Lord",0,15,50,0] //custom TalonRO hp+50%; no autoskill
,[323,1,"Turtle General",0,80,20,0] //custom TalonRO; no autostkill
,[324,7,"Dumpling Child","3% chance of Candy, and 1% chance of Candy Cane item dropping when killing a Demi-human race monster<BR>+50% HP restoration with those items",0]
,[325,1,"Chepet","(on your enemy, not yourself)",221,74,0]
,[326,1,"Zipper Bear","1 SP is drained with each physical attack<BR>If equipped by a Merchant job type: Weapon becomes unbreakable",17,30,0]
,[327,5,"Choco",0,9,10,11,5,0]
,[328,1,"Mobster","If equipped by a Thief job type: +4 Crit Rate",70,15,0]
,[329,1,"Diabolic","Regain 5 SP when killing a Demon race monster with a ATK based attack<BR>Drains 5 SP when the weapon is unequipped",0]
,[330,4,"Demon Pungus","6% chance of inflicting [Sleep] status when receiving ATK based damage",0]
,[331,4,"Wraith Dead","6% chance of inflicting [Curse] status when receiving ATK based damage",0]
,[332,2,"Bacsojin","Potion Pitcher effectiveness increased by + 20%<BR>Increase SP consumption by 15%",57,-10,91,20,94,20,0] //custom TalonRO heal-stuff +20% instead of +30; +10% dmg from demi-human
,[333,4,"Sky Deleter","Regain 100 HP each time a monster is killed with a ATK based attack",75,-100,0]
,[334,4,"Earth Deleter","Regain 10 SP each time a monster is killed with a ATK based attack<BR>Drains 100 SP when the armor is unequipped",76,-100,0]
,[335,7,"Greatest General","0.2% chance of casting level 5 Summon Spirit Sphere when doing a ATK based attack<BR>If equipped by an Acolyte job type: 2% chance instead",0]
,[336,7,"Cloud Hermit","1% chance of [Box of Gloom] item dropping when killing a Plant race monster",0]
,[337,2,"Evil Nymph",0,4,1,14,50,0]
,[338,3,"Toad",0,57,35,0] //custom TalonRO -35% dmg from demi-human - diff position
,[339,2,"Clock Tower Manager",0,73,-5,4,1,0]
,[340,5,"Dragon Tail",0,5040,5,5041,5,2,1,9,10,0]
,[341,5,"Dragon Fly",0,2,1,0]
,[342,2,"Dryad","1% chance of [Green Live] item dropping when killing a Plant race monster",62,10,0]
,[343,1,"Driller","Regain 5 SP when killing a Dragon race monster with a ATK based attack<BR>Drains 5 SP when the weapon is unequipped",0]
,[344,4,"Nightmare Terror","3% chance of inflicting [Curse] status when receiving ATK based damage",0]
,[345,1,"Neraid","Regain 5 SP when killing a Brute race monster with a ATK based attack<BR>Drains 5 SP when the weapon is unequipped",0]
,[346,5,"Harpy",0,60,15,5046,5,0]
,[347,2,"Permeter",0,67,15,69,15,0]
,[348,3,"High Orc",0,18,1,71,5,0]
,[349,4,"Garm",0,18,10,0] //custom TalonRO def +10
,[350,7,"Bloody Butterfly","Skill casts cannot be interrupted (except in WoE)",73,30,5053,5,0]
,[351,6,"Merman",0,75,10,76,10,0]
,[352,5,"Punk","5% chance of casting level 1 Quagmire when doing a ATK based attack<BR>If the user has learned level 5, that level is used instead",221,75,0]
,[353,1,"Panzer Goblin",0,70,10,116,7,0]
,[354,7,"Heater","<b>[Swordman Class]</b><br>Perfect Dodge +3",10,3,0]
,[355,1,"Beetle King","Regain 5 SP when killing a Fish race monster with a ATK based attack<BR>Drains 5 SP when the weapon is unequipped",0]
,[356,1,"Aster","+30% damage on [Shellfish]",1059,30,17,5,0]
,[357,1,"Kiel D-01","Add a 10% chance of gaining 5% of the damage inflicted upon an enemy as SP with each attack. (not calced)<BR>Add a 10% chance of decreasing enemy's SP amount by 5% when attacking. (not calced)",0] //custom TalonRO - diff position
,[358,3,"Parasite",0,60,5,18,1,0]
,[359,1,"False Angel","Regain 5 SP when killing a Angel race monster with a ATK based attack<BR>Drains 5 SP when the weapon is unequipped",0]
,[360,1,"Phendark","Regain 5 SP when killing a Demi-human race monster with a ATK based attack<BR>Drains 5 SP when the weapon is unequipped",0]
,[361,2,"Bloody Knight","Add a 2% chance to cause External Bleeding on target when attacking",17,30,0] //custom TalonRO atk+30 - diff position
,[362,6,"Freezer","If shoes are upgraded to +9 or higher: +10% damage with Bash",13,300,0]
,[363,1,"Valkyrie Randgris",0,80,10,221,77,0] //custom TalonRO dispell chance increased to 4%; weap not unbreakable anymore
,[364,4,"Brilight","6% chance of inflicting [Silence] status when receiving ATK based damage",0]
,[365,7,"Blazer","Chance of a food type item dropping when killing a monster",0]
,[366,1,"Stone Shooter",0,8,10,17,10,0]
,[367,4,"Pest","3% chance of inflicting [Stone] status when receiving ATK based damage<BR>If user's base Int is 77 or higher: 9% chance instead",0]
,[368,3,"Penomena",0,50,30,0]
,[369,5,"Vocal",0,19,3,0]
,[370,7,"Bongun","You recieve +100% from [Munak]<BR>Causes Bash to push the target 5 cells back",221,78,3302,-100,0]
,[371,7,"Marin","20% chance of [Jellopy], and 0.1% chance of [Large Jellopy] item dropping when killing a monster",0]
,[372,5,"Mastering",0,6,1,0]
,[373,999,0,0,0]
,[374,2,"Maya Purple","Makes hidden monsters and players visible<BR>Unable to move while wearing this item (not calced)",0] //custom TalonRO unable to move
,[375,6,"Mysteltainn",0,9,20,17,30,0] //custom TalonRO flee+20; atk+30 - diff position
,[376,2,"Myst Case","0.3% chance of [Gift Box] item dropping when killing a monster",0]
,[377,6,"Mini Demon",0,122,10,52,-20,0]
,[378,7,"Mimic","0.1% chance of [Old Blue Box] item dropping when killing a monster",0]
,[379,6,"Miyabi Doll",0,16,10,5055,5,0]
,[380,1,"Mutant Dragonoid","If the user has learned level 10, that level is used instead",17,15,221,79,0]
,[381,6,"Megalith","If the shoes are upgraded to +5 or less: MDef +7",0]
,[382,1,"Lava Golem",0,84,30,0]
,[383,2,"Rideword","If equipped by an Acolyte job type: MDef +1, Int +1",4,1,0]
,[384,4,"Rybio","3% chance of inflicting [Stun] status when receiving ATK based damage<BR>If user's base Dex is 77 or higher: 9% chance instead",0]
,[385,7,"Wraith","1% chance of [Giggling Box] item dropping when killing an Undead race monster",0]
,[386,7,"Raydric Archer","1% chance of [Box of Resentment] item dropping when killing a Demon race monster",0]
,[387,2,"Leib Olmai","1% chance of [Red Blood] item dropping when killing a Brute race monster",63,10,0]
,[388,6,"Raggler",0,1,1,3,1,0]
,[389,7,"Hermit Plant","3% chance of [Hed Herb], 2% chance of [Yellow Herb], and 1% chance of [White Herb] item dropping when killing a Plant race monster<BR>+50% HP restoration with those items",0]
,[390,1,"Rotar Zairo",0,70,10,115,7,0]
,[391,6,"Wild Rose","If equipped by a Thief job type: Perfect Dodge +5",2,1,0]
,[392,4,"Tao Gunka",0,15,100,18,-50,19,-50,0]
,[393,5,"Hyegun",0,9,15,10,1,0]
,[394,5,"Deviling",0,60,50,61,-50,62,-50,63,-50,64,-50,65,-50,66,-50,67,-50,68,-50,69,-50,0]
,[395,7,"Dancing Dragon",0,2,1,10,3,0]
,[396,3,"Tamruan",0,18,2,5158,10,5159,10,5384,10,0]
,[397,2,"Leaf Cat","1% chance of [Crystal Blue] item dropping when killing a Fish race monster",61,10,0]
,[398,1,"Civil Servant",0,48,20,0]
,[399,6,"Iron Fist",0,120,10,50,-20,0]
,[400,5,"Noxious",0,60,10,78,10,0]
,[401,5,"Kavach Icarus","If the garment is upgraded to +4 or less: Flee Rate +20 instead, Perfect Dodge +1",9,10,0]
,[402,5,"Chung E","Luk +1 and Crit Rate +1 for each upgrade on the garment",6,-5,0]
,[403,5,"Orc Baby","If the garment is upgraded to +9 or higher: Additional Flee Rate +5 and -5% damage from Neutral element",60,10,9,10,0]
,[404,4,"Assassin Cross","Add a 6% chance of inflicting Critical Wounds Level 3 on an enemy when the user receives Physical Damage (not calced)",0] //custom TalonRO - diff position
,[405,5,"Aliot","If equipped by a Swordman, Thief, or Merchant job type: Max HP +5%, Str +2<BR>If equipped by an Acolyte, Mage, or Archer job type: Max SP +5%, Int +2",0]
,[406,6,"Thanatos Odium","Agi +1 for each upgrade on the shoes",2,-5,0]
,[407,6,"Gold Acidus","If shoes are upgraded to +4 or less: Additional Max HP and Max SP +4% and HP Regen and SP Regen +5%",15,4,16,4,0]
,[408,6,"Green Ferus",0,3,1,15,10,0]
,[409,6,"Lady Tanee","+1% additional MaxHP per 8 base AGI<BR>+1% ATK/MATK per 8 base VIT<BR>+1 Perfect Dodge per 8 base LUK",15,30,0] //custom TalonRO todo everything
,[410,7,"Gremlin","0.5% chance of [Bomber Steak] (STR+3) item dropping when killing a Brute race monster",0]
,[411,7,"Beholder",0,220,29,0]
,[412,7,"Anopheles","0.5% chance of [Tentacle Cheese Gratin] (AGI+3) item dropping when killing an Insect race monster",0]
,[413,7,"Wikebine Tres",0,221,80,0]
,[414,7,"Errende Ebecee",0,221,81,0]
,[415,7,"Plasma","0.5% chance of any Elemental-proof Potion item dropping when killing a monster",0]
,[416,7,"Retribution","0.5% chance of [Fried Sweet Potato] (LUK+3) item dropping when killing an Angel race monster",0]
,[417,7,"Dragon Egg","0.5% chance of the Honey [Herbal Tea] (INT+3) item dropping when killing a Dragon race monster",0]
,[418,7,"Green Iguana","0.5% chance of [Fruit Mix] (DEX+3) item dropping when killing a Formless race monster",0]
,[419,7,"Hydro",0,221,82,0]
,[420,4,"RSX 0806","Skills cannot push or move the user",3,3,0] //custom TalonRO not unbreakable anymore
,[421,7,"High Priest",0,221,83,0] //custom TalonRO diff position
,[422,999,"Detardeurus",0,19,-20,221,84,0] //replace me
,[423,6,"General Egnigem Cenia","Regain 100 HP and 100 SP every 10 seconds",15,20,16,20,0] //custom TalonRO better regenaration; +20% instead of +10% hp, +20% sp
,[424,2,"High Wizard","Ignore 20% MDEF of non-boss targets<BR>Drains 2000 SP when the headgear is unequipped",0] //custom TalonRO ignore 20% mdef of non-boss; removed cast-time and spregen stuff
,[425,2,"Vesper","Magical attacks ignore the magical defenses by 20% on boss type monsters",0] //custom TalonRO ignores 20% instead of 30%
,[426,2,"Margaretha Solin",0,4,1,221,85,0]
,[427,1,"Thanatos Dolor",0,178,10,0]
,[428,1,"Skeggiold",0,176,2,0]
,[429,100,0,"[2 or more Injustice cards don't make you get more % of Sonic Blows being cast or give more atk/luk]",17,20,6,3,0]
,[430,100,0,"Frost Diver chance Increases to 30%",0]
,[431,100,0,"Adds 30% chance of gaining [Raw Fish] item each time a [Fish] race monster is killed",41,30,0]
,[432,100,0,0,18,3,19,3,0]
,[433,100,0,0,4,4,3,4,75,30,76,30,0]
,[434,100,0,0,73,-5,15,20,16,20,0] //custom TalonRO card combo Dark Illusion & Dark Lord: cast time -5% instead of -10%
,[435,100,0,"<b>STR + 3</b>",0]
,[436,100,0,0,18,3,3,3,0]
,[437,100,0,0,86,20,0]
,[438,100,0,"'Sleep' chance increases to 9%",0]
,[439,100,0,"'Blind' chance increases to 9%",0]
,[440,100,0,"'Curse' chance increases to 9%",0]
,[441,100,0,0,7,1,0]
,[442,100,0,0,9,18,0]
,[443,100,0,"TalonRO: nothing",0] //custom TalonRO Toad+Roda Frog have no combo
,[444,999,0]
,[445,999,0]
,[446,999,0]
,[447,999,0]
,[448,100,0,0,13,300,14,60,0]
,[449,100,0,0,221,86,0]
,[450,100,0,"5% chance of the Red Potion item dropping when killing a monster<BR><b>[Swordman Class]</b><br>+50% HP restoration with Red Potion, Yellow potion, and White Potion",1,10,15,20,75,50,221,87,0]
,[451,100,0,"Move Speed +5%<BR>Disables the auto casting of Snatch and the SP drain<BR><b>[Thief Class]</b><br>Removes the consumption of gemstones from skills that usually would",1,5,2,5,12,5,0]
,[452,100,0,"SP Cost -10%<BR><b>[Acolyte Class]</b><br>-30% damage from Demon and Undead race<BR>+5% experience from Demon and Undead race monsters",3,10,73,-10,0]
,[453,100,0,"<b>[Archer Class]</b><br>10% chance of inflicting Coma on Brute race<BR>+5% experience from Brute race monsters",25,20,2,5,5,3,86,20,0]
,[454,100,0,"<b>[Mage Class]</b><br>Magic Attack +3%, Cast Time -15%",13,500,18,5,19,5,5051,10,5054,10,5056,10,0]
,[455,100,0,"1 SP regained with each ATK based attack instead of draining SP<BR><b>[Merchant Class]</b><br>0.05% chance of [Old Purple Box] item dropping when killing a monster<BR>20% chance of reflecting the damage received from a targetted magical attack",6,10,5065,20,0]
,[456,100,0,"<b>[Crusader Class]</b><br>Makes the armor Holy element",1,1,4,1,18,2,76,10,73,-10,5324,10,5284,10,0]
,[457,100,0,"5% chance of casting level 5 Divest Armor when doing a ATK based attack<BR><b>[Rogue Class]</b><br>SP Cost -20%, Disables the auto casting of Snatch",1,6,2,4,5169,10,0]
,[458,100,0,"<b>[Monk Class]</b><br>SP Cost -10%, Skill casts cannot be interrupted (except in WoE)",1,3,17,25,14,80,5197,10,5321,10,221,88,0]
,[459,100,0,"<b>[Bard/Dancer Class]</b><br>5% chance of casting level 5 Tarot Card of Fate when receiving ATK based damage",5,5,5199,10,5207,10,5292,5,0]
,[460,100,0,"<b>[Sage Class]</b><br>Cast Time -20%<BR>5% chance of reflecting the damage received from a targetted magical attack<br>Adds a 1% chance of gaining [Red Gemstone] or [Yellow Gemstone] item each time a monster is killed",4,3,5057,10,5133,10,0]
,[461,100,0,"Disables the SP drain<BR><b>[Alchemist Class]</b><br>1% chance of casting [Adrenaline Rush] when doing an ATK based attack<BR>0.1% chance of [Stem] item dropping when killing a monster<BR>0.03% chance of [Coating Bottle] item dropping when killing a monster",1,4,15,7,16,7,5065,20,0]
,[462,1,"Drosera","Adds CRIT + 15 for long range ATK based attacks",0]
,[463,1,"Atros","When performing a ATK based attack there is a 0.5% chance that will set your attack speed to 190 for 10seconds",17,25,0]
,[464,1,"Sword Guardian","When equipped with a [Sword] or [Two-Handed Sword] class weapon, CRIT + 5, HIT + 5, and increases the damage of the skill [Bowling Bash] by 25%",0]
,[465,1,"Bow Guardian","When slotted into a [Bow] class weapon, CRIT + 5, HIT + 5, and increases the damage of the skill [Arrow Shower] by 50%",0]
,[466,1,"Necromancer","When equipped with a [Rod] class weapon, INT + 1 and 2% magic defense bypassing.",0]
,[467,3,"Hodremlin","When receiving ATK based damage there is a 0.3% chance to gain Perfect Dodge + 30 for 10 seconds",190,15,191,15,192,15,0]
,[468,3,"Seeker",0,220,30,159,30,19,10,0]
,[469,3,"Muscipular",0,221,89,221,90,0]
,[470,3,"Flame Skull","Has a 5% chance to inflict [Stun], [Curse], [Blind], and [Stone] when receiving ATK based damage",151,30,153,30,154,30,159,30,0]
,[471,2,"Vanberk","When dealing ATK based damage, there's a 0.5% chance that you will receive CRIT + 100 for 5 seconds",1,2,0]
,[472,2,"Isilla","When dealing magical damage, there is a 5% chance that you will gain FLEE +30 and your skill casting time will be reduced by 50% for 5 seconds",4,2,0]
,[473,2,"Knocker","Adds a 0.1% chance of obtaining [Rough Elunium] and [Rough Oridecon] when killing a monster (not calced)",30,5,0]
,[474,2,"Banshee","When equipped by [Mage] type class:<br>SP + 100<br>HP - 100<br>Increases the damage of the skills [Soul Strike], [Napalm Beat], and [Napalm Vulcan] by 20%",0]
,[475,4,"Gloom Under Night",0,46,20,47,20,38,20,36,20,0] //custom TalonRO +20% dmg instead of +40%
,[476,4,"Agav","<b>[Mage Class]</b><br>SP + 100",89,5,18,-10,0]
,[477,4,"Echio","When equipped by a [Swordsman] type class, HP + 500",17,15,0]
,[478,4,"Ktullanux",0,43,20,221,91,0] //custom TalonRO
,[479,4,"Byorgue","<b>[Rogue Class]</b><br>Physical damage + 10% [versus Normal/Boss/Guardian]<br>MATK + 10%",0]
,[480,5,"Roween",0,9,5,11,3,41,10,115,15,0]
,[481,5,"Salamander",0,5122,40,5125,40,0]
,[482,5,"Kasa",0,221,92,221,93,0]
,[483,5,"Magmaring",0,17,5,42,10,112,15,113,15,0]
,[484,6,"Ice Titan","When receiving ATK based damage there is a 0.3% chance that you'll receive DEF + 10 for 10 seconds",3,2,0]
,[485,6,"Zombie Slaughter","The player recovers 50 HP each time a monster is killed with a ATK based attack",37,1,177,1,0]
,[486,4,"Fallen Bishop Hibram","Add a 100% chance of auto casting Level 2 Magic Mirror when the user receives Magical Damage",0] //custom TalonRO add autocast; removed matk stuff - diff position
,[487,7,"Snowier","Adds a 20% chance to gain [Ice Cream] when killing a monster<BR>Increases recovery of the item [Ice Cream] by 100%",0]
,[488,7,"Siroma",0,5054,25,7054,25,0]
,[489,7,"Gazeti",0,221,94,0]
,[490,7,"Galion",0,8,5,41,5,0]
,[491,7,"Stapo",0,220,31,220,32,0]
,[492,7,"Ifrit","Increases your ATK and HIT by 1 for every 5 job levels you have<BR>Increases your Crit by 1 for every 10 job levels you have",0] //custom TalonRO atk+hit increase every 5jlvl; removed autocast
,[493,7,"Imp",0,5051,25,7051,25,0]
,[494,7,"Ragged Zombie","When dealing ATK based damage there is a 0.1% chance to cause [Bleeding] status on the opponent.",117,5,37,1,177,1,0]
,[495,7,"Hell Poodle","Increases recovery of the item [Meat] by 100%<BR>When dealing ATK based damage there's a 0.5% chance to cause [Bleeding] status on the opponent",8,1,0]
,[496,100,0,"Recover 2SP each time you kill a monster with a ATK based attack",0]
,[497,999,"Beelzebub NPC Card","<br><b>*Warning*</b>Having more then one Beelzebub NPC Card doesn't give -60% cast, it will give you -30% always.<b>*Warning*</b>",73,-30,0] //replace me
,[498,1,"Hillsrion",0,17,25,0]
,[499,1,"Centipede Larva",'MATK + 3<BR><b>*Warning*</b>MATK Bonus not implemented yet since the info on the card is with "Effect Undecided"<b>*Warning*</b>',4,1,0]
,[500,4,"Banshee Master",'MATK + 10<BR><b>*Warning*</b>MATK Bonus not implemented yet since the info on the card is with "Effect Undecided"<b>*Warning*</b>',4,1,0]
,[501,4,"Entweihen Crothen","MATK + 100<BR><b>*Warning*</b>MATK Bonus not implemented yet<b>*Warning*</b>",0]
,[502,3,"Aqua Elemental",0,61,20,41,5,0]
,[503,3,"Centipede",0,65,20,45,5,0]
,[504,3,"Cornus",0,66,20,46,5,0]
,[505,3,"Draco",0,63,20,43,5,0]
,[506,3,"Dark Shadow",0,67,20,47,5,0]
,[507,3,"Luciola Vespa",0,64,20,44,5,0]
,[508,3,"Tatacho",0,62,20,42,5,0]
,[509,999,"Rata","MATK + 10<BR><b>*Warning*</b>MATK Bonus not implemented yet<b>*Warning*</b>",0]
,[510,2,"Dark Pinguicula","<b>[Alchemist Class]</b><br>Nullifies the use of Bottle Grenades when casting the Demonstration skill<br>Increases SP usage of Demonstration by 15 SP<br><b>Only works in PvM</b>",0]
,[511,999,"Duneyrr",0,17,10,0]
,[512,999,"Phylla",0,2,1,5,1,0]
,[513,999,"Rhyncho","+3% recovery with skill [Potion Pitcher]<BR>Increase SP consumption by 5%",91,3,94,3,0]
//custom TalonRO [Update 2013-10-06]
,[514,2,"Dolomedes","<b>[Archer Class]</b><br>DEX + 1 for every 3 refines<br><b>[Other Class]</b><br>INT + 1 for every 3 refines",3,2,0]
,[515,1,"Queen Scaraba",0,8,35,80,15,0]
,[516,7,"Scaraba",0,16,-5,89,5,0]
,[517,2,"Cendrawasih","<b>[Mage Class]</b><br>INT + 1 for every 3 refines",4,2,0]
,[518,3,"Alnoldi","[Refine Rate 9~10]</b><br> MDEF +5",18,2,0] //213
,[519,1,"Butoijo",0,38,20,0]
,[520,1,"Banaspaty",0,139,2,0]
,[521,5,"Leak","Chance of causing Confusion on target enemy when doing magic damage",4,5,190,10,191,10,192,10,0]
,[522,4,"Comodo",0,9,-20,18,8,0]
,[523,1,"Sropho",0,17,5,152,3,158,3,0]
,[524,1,"Sedora","<b>[Thief Class]</b><br>Flee Rate +4",10,15,0]
,[525,4,"Pot Dofle",0,55,10,64,10,63,-10,198,1,0]
,[526,5,"Kraken","25% chance of causing Sleep effect when using Raid",9,20,220,22,220,54,0]
,[527,2,"King Dramoh","<b>[Swordsman Class]</b><br>STR + 1 for every 3 refines",1,2,0]
//custom TalonRO [Update 2014-08-30]
,[528,7,"Gold Scaraba","Increases your ATK by 1 for every 5 job levels you have",15,-1,0]
,[529,1,"Gold Queen Scaraba","Add a 1% Magical Defense bypass (with rod-type weapon)",12,15,190,1,191,1,192,1,0]
//custom TalonRO [Update 2015-01-01]
,[530,2,"Pinguicula","<b>[Ninja Class]</b><br>Nullifies the use of Ninja Stones when casting skills<br>Increases SP usage of all skills by 25%",0]
//custom TalonRO [Update 2015-12-29]
,[531,7,"Nepenthes","",78,5,0]
//[Custom TalonRO - Update 2018-06-05] [Kato]
,[532,4,"Detale","-Add 5% chance of auto casting level 1 Land Protector around the user when the user receives Magical Damage<br /><br /><b>[ Aegir Helm, Aegir Cloak, Aegir Armor, Aegir Shoes Combo ] Gain full immunity against against Freeze status</b>",19,-10,152,50,0]
,[533,6,"Wild Rider","",2,1,221,128,221,129,0]
,[534,1,"Red Eruma","When dealing magic damage there's a 1.5% chance to cause curse status",0]
,[535,2,"Siorava","[Merchant and Merchant Upper Classes]<br />Every 3 refine on the compounded item adds LUK +1",6,3,0]
,[536,2,"Parus","[Acolyte class]<br />Every 2 refine adds 1% heal effectiveness",91,3,0]
,[537,1,"Little Fatum","When dealing magic damage there is a 1.5% chance to silence the enemy",0]
,[538,7,"Miming",0,5056,25,7056,25,0]
,[539,1,"Pom Spider",0,31,20,0]
,[540,1,"Mini Octopus","When dealing magic damage there's a 1.5% chance to cause blind status",0]
];

/*
	array for card ID linking  - [Loa] - 2018-06-28
		format for entries in cardID is [a,b,c] where:
			a = index in cardOBJ
			b:
				0 = unequipped
				1 = card
				2 = set
				3 = unused
				4 = enchants/special
			c = in game ID (0 if no ID or not yet filled)
*/
cardID = [
[0,0,0]
,[1,4,0]
,[2,4,0]
,[3,4,0]
,[4,1,4002]
,[5,1,4004]
,[6,1,4019]
,[7,1,4006]
,[8,1,4026]
,[9,1,4025]
,[10,1,4029]
,[11,1,4043]
,[12,1,4007]
,[13,1,4035]
,[14,1,4060]
,[15,1,4063]
,[16,1,4068]
,[17,1,4080]
,[18,1,4111]
,[19,1,4118]
,[20,1,4125]
,[21,1,4069]
,[22,1,4005]
,[23,1,4030]
,[24,1,4049]
,[25,1,4062]
,[26,1,4065]
,[27,1,4085]
,[28,1,4082]
,[29,1,4092]
,[30,1,4126]
,[31,1,4140]
,[32,1,4137]
,[33,1,4024]
,[34,1,4037]
,[35,1,4055]
,[36,1,4057]
,[37,1,4076]
,[38,1,4096]
,[39,1,4072]
,[40,1,4106]
,[41,1,4086]
,[42,1,4142]
,[43,1,4117]
,[44,1,4121]
,[45,1,4147]
,[46,1,4115]
,[47,1,4134]
,[48,1,4010]
,[49,1,4052]
,[50,1,4127]
,[51,1,4122]
,[52,1,4143]
,[53,1,4012]
,[54,1,4013]
,[55,1,4032]
,[56,1,4058]
,[57,1,4066]
,[58,1,4074]
,[59,1,4083]
,[60,1,4120]
,[61,1,4136]
,[62,1,4045]
,[63,1,4124]
,[64,1,4001]
,[65,1,4008]
,[66,1,4011]
,[67,1,4016]
,[68,1,4021]
,[69,1,4023]
,[70,1,4078]
,[71,1,4003]
,[72,1,4014]
,[73,1,4031]
,[74,1,4042]
,[75,1,4141]
,[76,1,4102]
,[77,1,4133]
,[78,1,4129]
,[79,1,4015]
,[80,1,4056]
,[81,1,4095]
,[82,1,4109]
,[83,1,4081]
,[84,1,4113]
,[85,1,4071]
,[86,1,4116]
,[87,1,4108]
,[88,1,4009]
,[89,1,4050]
,[90,1,4097]
,[91,1,4100]
,[92,1,4107]
,[93,1,4038]
,[94,1,4070]
,[95,1,4123]
,[96,1,4022]
,[97,1,4027]
,[98,1,4028]
,[99,1,4034]
,[100,1,4064]
,[101,1,4079]
,[102,1,4051]
,[103,1,4091]
,[104,1,4036]
,[105,1,4077]
,[106,11,0]
,[107,1,4094]
,[108,1,4130]
,[109,1,4017]
,[110,1,4020]
,[111,1,4104]
,[112,1,4018]
,[113,1,4039]
,[114,1,4041]
,[115,1,4046]
,[116,1,4110]
,[117,1,4087]
,[118,1,4112]
,[119,1,4132]
,[120,1,4148]
,[121,1,4059]
,[122,1,4138]
,[123,1,4067]
,[124,1,4075]
,[125,1,4090]
,[126,1,4128]
,[127,1,4146]
,[128,1,4089]
,[129,1,4101]
,[130,1,4099]
,[131,1,4098]
,[132,1,4061]
,[133,1,4114]
,[134,1,4054]
,[135,1,4119]
,[136,1,4047]
,[137,1,4105]
,[138,1,4135]
,[139,1,4088]
,[140,1,4131]
,[141,1,4145]
,[142,1,4048]
,[143,1,4084]
,[144,1,4053]
,[145,1,4044]
,[146,1,4040]
,[147,1,4033]
,[148,1,4093]
,[149,1,4073]
,[150,1,4103]
,[151,1,4139]
,[152,1,4144]
,[153,4,0]
,[154,4,0]
,[155,4,0]
,[156,4,0]
,[157,1,4341]
,[158,1,4360]
,[159,1,4362]
,[160,1,4368]
,[161,1,4361]
,[162,1,4367]
,[163,1,4390]
,[164,1,4394]
,[165,1,4395]
,[166,1,4399]
,[167,1,4345]
,[168,1,4350]
,[169,1,4388]
,[170,1,4380]
,[171,1,4335]
,[172,1,4340]
,[173,1,4397]
,[174,1,4336]
,[175,1,4343]
,[176,1,4354]
,[177,1,4366]
,[178,1,4357]
,[179,1,4379]
,[180,1,4358]
,[181,1,4332]
,[182,1,4333]
,[183,1,4337]
,[184,1,4339]
,[185,1,4338]
,[186,1,4353]
,[187,1,4346]
,[188,1,4347]
,[189,1,4369]
,[190,1,4371]
,[191,1,4387]
,[192,1,4383]
,[193,1,4382]
,[194,1,4401]
,[195,1,4404]
,[196,1,4393]
,[197,1,4392]
,[198,1,4370]
,[199,1,4405]
,[200,3,0]
,[201,4,0]
,[202,4,0]
,[203,4,0]
,[204,4,0]
,[205,3,0]
,[206,3,0]
,[207,3,0]
,[208,3,0]
,[209,3,0]
,[210,3,0]
,[211,3,0]
,[212,1,4294]
,[213,1,4278]
,[214,1,4181]
,[215,1,4176]
,[216,1,4321]
,[217,1,4214]
,[218,1,4193]
,[219,1,4276]
,[220,1,4191]
,[221,1,4241]
,[222,1,4240]
,[223,1,4246]
,[224,1,4234]
,[225,1,4242]
,[226,1,4265]
,[227,1,4245]
,[228,1,4236]
,[229,1,4244]
,[230,1,4252]
,[231,1,4253]
,[232,1,4243]
,[233,1,4172]
,[234,1,4269]
,[235,1,4268]
,[236,1,4209]
,[237,1,4264]
,[238,1,4260]
,[239,1,4261]
,[240,1,4259]
,[241,1,4250]
,[242,1,4267]
,[243,1,4266]
,[244,1,4251]
,[245,1,4248]
,[246,1,4249]
,[247,1,4237]
,[248,1,4238]
,[249,1,4254]
,[250,1,4256]
,[251,1,4175]
,[252,1,4255]
,[253,1,4312]
,[254,1,4273]
,[255,1,4263]
,[256,1,4149]
,[257,1,4151]
,[258,1,4287]
,[259,1,4153]
,[260,1,4230]
,[261,1,4286]
,[262,1,4152]
,[263,1,4165]
,[264,1,4300]
,[265,1,4289]
,[266,1,4290]
,[267,1,4303]
,[268,1,4301]
,[269,1,4235]
,[270,1,4293]
,[271,1,4159]
,[272,1,4231]
,[273,1,4296]
,[274,1,4161]
,[275,1,4298]
,[276,1,4162]
,[277,1,4163]
,[278,1,4164]
,[279,1,4297]
,[280,1,4299]
,[281,1,4233]
,[282,1,4400]
,[283,1,4150]
,[284,1,4330]
,[285,1,4201]
,[286,1,4157]
,[287,1,4156]
,[288,1,4155]
,[289,1,4292]
,[290,1,4291]
,[291,1,4218]
,[292,1,4282]
,[293,1,4216]
,[294,1,4183]
,[295,1,4210]
,[296,1,4308]
,[297,1,4326]
,[298,1,4288]
,[299,1,4295]
,[300,1,4221]
,[301,1,4280]
,[302,1,4270]
,[303,1,4271]
,[304,1,4160]
,[305,1,4323]
,[306,1,4277]
,[307,1,4217]
,[308,1,4222]
,[309,1,4223]
,[310,1,4226]
,[311,1,4171]
,[312,1,4224]
,[313,1,4318]
,[314,1,4227]
,[315,1,4228]
,[316,1,4219]
,[317,1,4220]
,[318,1,4275]
,[319,1,4274]
,[320,1,4169]
,[321,1,4170]
,[322,1,4168]
,[323,1,4305]
,[324,1,4154]
,[325,1,4284]
,[326,1,4281]
,[327,1,4285]
,[328,1,4317]
,[329,1,4182]
,[330,1,4173]
,[331,1,4189]
,[332,1,4372]
,[333,1,4158]
,[334,1,4279]
,[335,1,4283]
,[336,1,4262]
,[337,1,4258]
,[338,1,4306]
,[339,1,4229]
,[340,1,4178]
,[341,1,4179]
,[342,1,4177]
,[343,1,4180]
,[344,1,4166]
,[345,1,4167]
,[346,1,4325]
,[347,1,4311]
,[348,1,4322]
,[349,1,4324]
,[350,1,4327]
,[351,1,4199]
,[352,1,4313]
,[353,1,4310]
,[354,1,4331]
,[355,1,4307]
,[356,1,4247]
,[357,1,4403]
,[358,1,4309]
,[359,1,4316]
,[360,1,4329]
,[361,1,4320]
,[362,1,4319]
,[363,1,4407]
,[364,1,4213]
,[365,1,4215]
,[366,1,4225]
,[367,1,4315]
,[368,1,4314]
,[369,1,4211]
,[370,1,4212]
,[371,1,4196]
,[372,1,4197]
,[373,3,0]
,[374,1,4198]
,[375,1,4207]
,[376,1,4206]
,[377,1,4204]
,[378,1,4205]
,[379,1,4208]
,[380,1,4203]
,[381,1,4200]
,[382,1,4184]
,[383,1,4185]
,[384,1,4194]
,[385,1,4190]
,[386,1,4187]
,[387,1,4188]
,[388,1,4186]
,[389,1,4232]
,[390,1,4192]
,[391,1,4257]
,[392,1,4302]
,[393,1,4328]
,[394,1,4174]
,[395,1,4272]
,[396,1,4304]
,[397,1,4195]
,[398,1,4202]
,[399,1,4239]
,[400,1,4334]
,[401,1,4351]
,[402,1,4373]
,[403,1,4375]
,[404,1,4359]
,[405,1,4402]
,[406,1,4396]
,[407,1,4378]
,[408,1,4381]
,[409,1,4376]
,[410,1,4355]
,[411,1,4356]
,[412,1,4344]
,[413,1,4348]
,[414,1,4349]
,[415,1,4389]
,[416,1,4391]
,[417,1,4385]
,[418,1,4377]
,[419,1,4384]
,[420,1,4342]
,[421,1,4363]
,[422,3,0]
,[423,1,4352]
,[424,1,4365]
,[425,1,4374]
,[426,1,4364]
,[427,1,4398]
,[428,1,4406]
,[429,2,0]
,[430,2,0]
,[431,2,0]
,[432,2,0]
,[433,2,0]
,[434,2,0]
,[435,2,0]
,[436,2,0]
,[437,2,0]
,[438,2,0]
,[439,2,0]
,[440,2,0]
,[441,2,0]
,[442,2,0]
,[443,2,0]
,[444,3,0]
,[445,3,0]
,[446,3,0]
,[447,3,0]
,[448,2,0]
,[449,2,0]
,[450,2,0]
,[451,2,0]
,[452,2,0]
,[453,2,0]
,[454,2,0]
,[455,2,0]
,[456,2,0]
,[457,2,0]
,[458,2,0]
,[459,2,0]
,[460,2,0]
,[461,2,0]
,[462,1,4421]
,[463,1,4425]
,[464,1,4427]
,[465,1,4428]
,[466,1,4440]
,[467,1,4413]
,[468,1,4414]
,[469,1,4420]
,[470,1,4439]
,[471,1,4411]
,[472,1,4412]
,[473,1,4434]
,[474,1,4438]
,[475,1,4408]
,[476,1,4409]
,[477,1,4410]
,[478,1,4419]
,[479,1,4426]
,[480,1,4422]
,[481,1,4429]
,[482,1,4431]
,[483,1,4432]
,[484,1,4417]
,[485,1,4435]
,[486,1,4441]
,[487,1,4415]
,[488,1,4416]
,[489,1,4418]
,[490,1,4423]
,[491,1,4424]
,[492,1,4430]
,[493,1,4433]
,[494,1,4436]
,[495,1,4437]
,[496,2,0]
,[497,3,0]
,[498,1,4453]
,[499,1,4452]
,[500,1,4450]
,[501,1,4451]
,[502,1,4443]
,[503,1,4447]
,[504,1,4448]
,[505,1,4444]
,[506,1,4449]
,[507,1,4445]
,[508,1,4442]
,[509,3,0]
,[510,1,4468]
,[511,3,0]
,[512,3,0]
,[513,3,0]
,[514,1,4506]
,[515,1,4507]
,[516,1,4505]
,[517,1,4517]
,[518,1,4515]
,[519,1,4519]
,[520,1,4518]
,[521,1,4520]
,[522,1,4516]
,[523,1,4522]
,[524,1,4521]
,[525,1,4523]
,[526,1,4525]
,[527,1,4524]
,[528,1,4508]
,[529,1,4509]
,[530,1,4476]
,[531,1,4470]
,[532,1,4386]
,[533,1,4532]
,[534,1,4531]
,[535,1,4530]
,[536,1,4512]
,[537,1,4511]
,[538,1,4510]
,[539,1,4514]
,[540,1,4533]
];

CardNum = cardOBJ.length -1;
//Sort cards alphabetically - [Loa] - 2018-06-28
function sortCards(cardArray){
	var tempArray = [[0],[0],[0],[0],[0],[0],[0],[0]];
	var elementalStone = [];
	var cardSpecial = [];
	//sort all cards into array of arrays based on location
	for(i = 1; i < cardArray.length; i++){
		if(eval(document.calcForm.vanilla.checked) && restrictedCards.includes(i)){
			continue;
		}
		else if(cardArray[i][1] >= 1 && cardArray[i][1] <= 7){
			for(j = tempArray[cardArray[i][1]].length - 1; j >= 0; j--){
				if(cardArray[i][2] > cardArray[tempArray[cardArray[i][1]][j]][2]){
					tempArray[cardArray[i][1]].splice(j + 1, 0, cardArray[i][0]);
					if(cardArray[i][1] == 1){
						tempArray[0].splice(j + 1, 0, cardArray[i][0]);
					}
					break;
				}
			}
		}
		//filter out weapon elemental stone
		else if(cardArray[i][1] == 10){
			elementalStone.push(cardArray[i][0]);
		}
		//filter out weapon special
		else if(cardArray[i][1] == 11){
			cardSpecial.push(cardArray[i][0]);
		}
	}
	//add special to weapon cards list
	for(i = 0; i < cardSpecial.length; i++){
		tempArray[0].splice(i + 1, 0, cardSpecial[i]);
		tempArray[1].splice(i + 1, 0, cardSpecial[i]);
	}
	//add elemental stone to 1st weapon card slot list
	for(i = 0; i < elementalStone.length; i++){
		tempArray[0].splice(i + 1, 0, elementalStone[i]);
	}
	for(i = 0; i < tempArray.length; i++){
		tempArray[i].push("NULL");
	}
	return tempArray
}

function PopulateCards(){
	CardSortOBJ = sortCards(cardOBJ);
	for(i=0;CardSortOBJ[0][i]!="NULL";i++)
		document.calcForm.A_weapon1_card1.options[i] = new Option(cardOBJ[CardSortOBJ[0][i]][2],cardOBJ[CardSortOBJ[0][i]][0]);
	for(i=0;CardSortOBJ[1][i]!="NULL";i++){
		document.calcForm.A_weapon1_card2.options[i] = new Option(cardOBJ[CardSortOBJ[1][i]][2],cardOBJ[CardSortOBJ[1][i]][0]);
		document.calcForm.A_weapon1_card3.options[i] = new Option(cardOBJ[CardSortOBJ[1][i]][2],cardOBJ[CardSortOBJ[1][i]][0]);
		document.calcForm.A_weapon1_card4.options[i] = new Option(cardOBJ[CardSortOBJ[1][i]][2],cardOBJ[CardSortOBJ[1][i]][0]);
	}
	document.calcForm.A_weapon1_card4.options[4] = new Option("TOP10 Ranked",106);

	for(i=0;CardSortOBJ[2][i]!="NULL";i++){
		document.calcForm.A_head1_card.options[i] = new Option(cardOBJ[CardSortOBJ[2][i]][2],cardOBJ[CardSortOBJ[2][i]][0]);
		document.calcForm.A_head2_card.options[i] = new Option(cardOBJ[CardSortOBJ[2][i]][2],cardOBJ[CardSortOBJ[2][i]][0]);
	}
	for(i=0;CardSortOBJ[3][i]!="NULL";i++)
		document.calcForm.A_left_card.options[i] = new Option(cardOBJ[CardSortOBJ[3][i]][2],cardOBJ[CardSortOBJ[3][i]][0]);
	for(i=0;CardSortOBJ[4][i]!="NULL";i++)
		document.calcForm.A_body_card.options[i] = new Option(cardOBJ[CardSortOBJ[4][i]][2],cardOBJ[CardSortOBJ[4][i]][0]);
	for(i=0;CardSortOBJ[5][i]!="NULL";i++)
		document.calcForm.A_shoulder_card.options[i] = new Option(cardOBJ[CardSortOBJ[5][i]][2],cardOBJ[CardSortOBJ[5][i]][0]);
	for(i=0;CardSortOBJ[6][i]!="NULL";i++)
		document.calcForm.A_shoes_card.options[i] = new Option(cardOBJ[CardSortOBJ[6][i]][2],cardOBJ[CardSortOBJ[6][i]][0]);
	for(i=0;CardSortOBJ[7][i]!="NULL";i++){
		document.calcForm.A_acces1_card.options[i] = new Option(cardOBJ[CardSortOBJ[7][i]][2],cardOBJ[CardSortOBJ[7][i]][0]);
		document.calcForm.A_acces2_card.options[i] = new Option(cardOBJ[CardSortOBJ[7][i]][2],cardOBJ[CardSortOBJ[7][i]][0]);
	}
}
//populate cards for left hand weapon as assassin
function PopulateCardsLeft(){
	for(i=0;CardSortOBJ[0][i]!="NULL";i++)
		document.calcForm.A_weapon2_card1.options[i] = new Option(cardOBJ[CardSortOBJ[0][i]][2],cardOBJ[CardSortOBJ[0][i]][0]);
	for(i=0;CardSortOBJ[1][i]!="NULL";i++){
		document.calcForm.A_weapon2_card2.options[i] = new Option(cardOBJ[CardSortOBJ[1][i]][2],cardOBJ[CardSortOBJ[1][i]][0]);
		document.calcForm.A_weapon2_card3.options[i] = new Option(cardOBJ[CardSortOBJ[1][i]][2],cardOBJ[CardSortOBJ[1][i]][0]);
		document.calcForm.A_weapon2_card4.options[i] = new Option(cardOBJ[CardSortOBJ[1][i]][2],cardOBJ[CardSortOBJ[1][i]][0]);
	}
	document.calcForm.A_weapon2_card4.options[4] = new Option("Top10",106);
}
//remove all card select options
function ClearCards(){
with(document.calcForm){
	var len = A_weapon1_card1.length;
	for(var i=0;i<len;i++){
		A_weapon1_card1.options[0] = null;
		A_weapon1_card2.options[0] = null;
		A_weapon1_card3.options[0] = null;
	if(n_Nitou){
			A_weapon1_card4.options[0] = null;
			A_weapon2_card1.options[0] = null;
			A_weapon2_card2.options[0] = null;
			A_weapon2_card3.options[0] = null;
			A_weapon2_card4.options[0] = null;
		}
	}
	var len = A_head1_card.length;
	for(var i=0;i<len;i++){
		A_head1_card.options[0] = null;
	}
	var len = A_head2_card.length;
	for(i=0;i<len;i++){
		A_head2_card.options[0] = null;
	}
	var len = A_left_card.length;
	for(i=0;i<len;i++){
		A_left_card.options[0] = null;
	}
	var len = A_body_card.length;
	for(i=0;i<len;i++){
		A_body_card.options[0] = null;
	}
	var len = A_shoulder_card.length;
	for(i=0;i<len;i++){
		A_shoulder_card.options[0] = null;
	}
	var len = A_shoes_card.length;
	for(i=0;i<len;i++){
		A_shoes_card.options[0] = null;
	}
	var len = A_acces1_card.length;
	for(i=0;i<len;i++){
		A_acces1_card.options[0] = null;
		A_acces2_card.options[0] = null;
	}
}}

function Click_Card(CBI)
{
	var tempScrollTop = window.pageYOffset;

	Item_or_Card = "Card";
	ItemCardNumberCheck = CBI;

	ActiveSkillSetPlus();

	if(eval(document.calcForm.ITEM_SW.checked)==0)
		return;
	for(i=0;i<=4;i++)
		myInnerHtml("ITEM"+i,"",0);
	myInnerHtml("ITEM_W_LV","",0);
	myInnerHtml("ITEM_DATA","",0);
	myInnerHtml("ITEM_SLOT","",0);
	myInnerHtml("ITEM_LV","",0);
	myInnerHtml("ITEM_WAIT","",0);

	if(CBI == 106){
		myInnerHtml("nm080","Very Strong or Top10",0);
		myInnerHtml("B_SETUMEI","1 Star Crumb adds +5 seeking damage<BR>2 Star Crumb adds +10 seeking damage<BR>3 Star Crumb adds +40 seeking damage<BR>If is made by a TOP 10 Blacksmith/Whitemisth Rank damage +10 seeking damage<BR>[Rank card available at the forth column]",0);
		window.scrollTo(0, tempScrollTop);
		return;
	}
	if(201 <= CBI && CBI <= 204){
		myInnerHtml("nm080",cardOBJ[CBI][2],0);
		myInnerHtml("B_SETUMEI","Weapons "+ ZokuseiOBJ[CBI-200] +" to attribute",0);
		window.scrollTo(0, tempScrollTop);
		return;
	}
	// Card IDs with links to Talonro Item Database - [Loa] - 2018-06-28
	if(cardID[CBI][1] == 1 && cardID[CBI][2] != 0){
		var itemLink = "";
		itemLink = " <a class=\"linkW\" href=\"https://panel.talonro.com/itemdb/"+ cardID[CBI][2] + "/\" target=\"_blank\"><b>" + cardID[CBI][2] + "</b></a>";
		myInnerHtml("nm080",cardOBJ[CBI][2] + " # Item ID :" + itemLink,0);
	}
	else{
	    myInnerHtml("nm080",cardOBJ[CBI][2],0);
	}

	CBIstr = "";
	for(i=4;cardOBJ[CBI][i] != 0;i+=2)
		Item_Setumei(cardOBJ[CBI][i],cardOBJ[CBI][i+1]);
	if(cardOBJ[CBI][3] != 0)
		CBIstr += cardOBJ[CBI][3] +"<BR>";

	var check = 0;
	for(var i=4;cardOBJ[CBI][i] != 0;i+=2){
		if(cardOBJ[CBI][i] == 90){
			CBIstr += "<Font size=2><BR><B>When equipping "+ SetCardName(cardOBJ[CBI][i+1]);
			var w = w_SC[cardOBJ[CBI][i+1]][0];
			while(cardOBJ[CBI][i+2] != 0 && check == 0){
				if(w == w_SE[cardOBJ[CBI][i+3]][0]){
					CBIstr += " or<BR>"+ SetCardName(CardOBJ[CBI][i+3]);
					i += 2;
				}else
					check = 1;
			}
			CBIstr += " at the same time:<BR>";
			check = 0;
			for(var j=4;cardOBJ[w][j] != 0;j+=2)
				Item_Setumei(cardOBJ[w][j],cardOBJ[w][j+1]);
			if(cardOBJ[w][3] != 0)
				CBIstr += cardOBJ[w][3] +"<BR>";
			CBIstr += "</Font></B>";
		}
	}
	myInnerHtml("B_SETUMEI",CBIstr,0);
	window.scrollTo(0, tempScrollTop);
}

w_SC = [[429,235,306,"NULL"],
[430,349,305,"NULL"],
[431,254,259,356,"NULL"],
[432,229,280,352,"NULL"],
[433,291,234,"NULL"],
[434,322,320,"NULL"],
[435,273,98,"NULL"],
[436,274,73,"NULL"],
[437,245,40,"NULL"],
[438,9,308,"NULL"],
[439,58,276,"NULL"],
[440,50,344,"NULL"],
[441,125,370,393,"NULL"],
[442,294,10,"NULL"],
[442,341,88,"NULL"],
[442,243,7,"NULL"],
[442,372,64,"NULL"],
[442,369,68,"NULL"],
[443,338,72,"NULL"],
[448,218,212,"NULL"],
[449,248,247,"NULL"],
[450,223,317,347,354,362,"NULL"],
[451,233,295,391,395,260,"NULL"],
[452,253,383,307,301,270,"NULL"],
//custom TalonRO Archer card combo Alligator changed to Nepenthes
//before
//[453,279,224,340,351,230,"NULL"],
//after
[453,279,224,340,351,531,"NULL"],
[454,337,358,220,346,379,350,"NULL"],
[455,326,376,281,388,216,"NULL"],
[456,190,347,354,362,"NULL"],
[457,413,113,295,391,260,"NULL"],
[458,253,383,181,270,"NULL"],
[459,279,408,224,340,230,"NULL"],
[460,337,193,346,379,350,"NULL"],
[461,326,175,281,388,104,"NULL"],
[496,485,494,"NULL"]
];
SC_MAXnum = w_SC.length;

for(var i=0;i<SC_MAXnum;i++){
	for(var k=1;w_SC[i][k] != "NULL";k++){
		for(var j=4;cardOBJ[w_SC[i][k]][j] != 0;j+=2);
		cardOBJ[w_SC[i][k]][j]=90;
		cardOBJ[w_SC[i][k]][j+1]=i;
		cardOBJ[w_SC[i][k]][j+2]=0;
	}
}
//Updated with links to itemdb - [Loa] - 2018-07-04
function SetCardName(SENw){
	var SENstr = "";
	for(var i=0;i<SC_MAXnum;i++){
		if(i == SENw){
			for(var j=1;w_SC[i][j] != "NULL";j++){
				//if card id in cardID array, generate links
				if(cardID[w_SC[i][j]][2]){
					SENstr += "<a class=\"linkW\" href=\"https://panel.talonro.com/itemdb/"+ cardID[w_SC[i][j]][2] + "/\" target=\"_blank\"><b>" + "<font color='blue'>["+ cardOBJ[w_SC[i][j]][2] +"]</font></b></a>";
					if(w_SC[i][j+1] != "NULL")
						SENstr += "+";
				}
				else{
					SENstr += "["+ cardOBJ[w_SC[i][j]][2] +" Card]";
					if(w_SC[i][j+1] != "NULL")
						SENstr += "+";
				}
			}
			return SENstr;
		}
	}
}

function SetCard()
{
	for(var i=19;i<=28;i++)
		n_A_card[i] = 0;

	var w_SE_num= 19;
	var w_SE_ch = 0;
	for(var k=0;k<SC_MAXnum;k++){
		for(var j=1;w_SC[k][j] != "NULL" && (w_SE_ch == 1 || (w_SE_ch == 0 && j == 1));j++){
			w_SE_ch = 0;
			for(var i=0;i<=19 && w_SE_ch == 0;i++){
				if(n_A_card[i] == w_SC[k][j])
					w_SE_ch = 1;
			}
		}
		if(w_SE_ch == 1){
			n_A_card[w_SE_num] = w_SC[k][0];
			w_SE_num++;
		}
	}
}

PopulateCards();