//[ id, display location, job that can use, atk, def,  lvl of weapon, lvl of equip, slots, weight, lvl required to use, "name of item",  ?, "description", effect1, effect2, ..., 0 =?]
//444 = lord kaho's horn activado com info correcta
//items deletados ou trocados:
//Corrigido conflito de dois cute ribbon, alterei o nome do cute ribbon com data de kawaii ribbon

/*
  ZoneSoldier - 6/2/208
   id, display location, job that can use,(atk; def),lvl equip, slots, weight, lvl required to use, "name of item",  ?, "description", effect1, effect2, ..., 0 =?]
   Example : [1535 = ID,62 = Location,0 = all jobs,0 = def(atk if its a weapon),0-default = equipment level,1 = slots, 0 = weight, 60 = Level required to use item,0 = ,"Beach Manteau" = Name of object,"" = ?,0 = description(No info added so left at 0),1 = STR,1 = 1 next to str value,4 = Int,1 = Int value 1 on site,63 = Fire resistance,10 = 10% resistance,0= end]
   Location values:
   Weapons: 1 = Dagger, 2 = One-handed Sword, 3 = Two-handed Sword, 4 = One-handed Spear, 5 = Two-handed Spear, 6 = One-handed Axe, 7 = Two-handed Axe, 8 = Mace, 9 = Staff/Rod, 10 = Bow/CrossBow, 11 = 	Katar, 12 = Book, 13 = Knuckles, 	Instrument = 14, 15 = Whip, 16 = Shuriken, 17 = Revolver, 18 = Rifle, 19 = Shotgun, 20 = Gatling Gun, 21 = Gernade Launcher.
   Headgear: 50 = Upper Headgear, 51 = Middle Headgear, 52 = Lower Headgear
   Armor: 60 = 	Armor
   Shield: 61 = Shield
   Garment: 62 = Garment
   Footgear: 63 = Footgear
   Accessory: 64 = Accessory
   Digits after description. Each digit after description can mean different values: Example(1,1 = Str + 1, 4,1 = Int + 1)
   After description values: 0 NONE,1 STR,2 AGI,3 VIT,4 INT,5 DEX,6 LUK,7 ALL STATS,8 HIT,9 FLEE,10 CRIT,11 Perfect Dodge,12 ASPD,13 MHP,14 MSP,15 MHP%,16 MSP%,17 ATK,18 DEF,19 MDEF
*/

ItemOBJ = [
[0,0,0,0,1,0,0,0,"(Unarmed)","",0,0]
,[1,1,0,17,1,"3 / 4",40,0,"Knife","",0,0]
,[2,1,0,30,1,"3 / 4",50,0,"Cutter","",0,0]
,[3,1,0,43,1,"3 / 4",60,0,"Main Gauche","",0,0]
,[4,1,0,59,2,"2 / 3",50,12,"Dirk","",0,0]
,[5,1,0,73,2,"2 / 3",60,12,"Dagger","",0,0]
,[6,1,0,87,2,"2 / 3",70,12,"Stiletto","",0,0]
,[7,1,1,64,3,0,120,70,"Zeny Knife","","Steals Zeny from monsters upon their defeat",0]
,[8,1,1,64,3,"0 / 2",80,65,"Poison Knife","",0,20,5,130,30,0]
,[9,1,1,105,3,"2 / 3",70,24,"Gladius","",0,0]
,[10,1,1,118,3,"1 / 2",80,24,"Damascus","",0,194,1,0]
,[11,1,1,50,4,0,70,36,"Moonlight Dagger","","Regain 3 SP with each attack",16,10,0]
,[12,1,1,90,4,0,50,24,"Fortune Sword","","A knife with a gold handle that is said to bring great fortune to whoever holds it.",6,5,11,20,0]
,[13,1,108,140,4,"0 / 1",60,36,"Assassin Dagger","",0,20,7,12,2,15,20,16,15,0]
,[14,1,1,140,4,"0 / 1",80,36,"Sucsamad","",0,42,10,44,10,194,1,0]
,[15,1,1,180,4,0,80,36,"Grimtooth","",0,9,10,11,5,24,2,0]
,[16,2,0,25,1,"3 / 4",50,2,"Sword","",0,0]
,[17,2,0,39,1,"3 / 4",60,2,"Falchion","",0,0]
,[18,2,0,53,1,"3 / 4",70,2,"Blade","",0,0]
,[19,2,0,70,2,"2 / 3",50,14,"Rapier","",0,0]
,[20,2,0,85,2,"2 / 3",70,14,"Scimitar","",0,0]
,[21,2,1,100,2,"2 / 3",90,14,"Ring Pommel Saber","",0,0]
,[22,2,1,75,3,0,140,48,"Sashimi","","Increases Sushi drop chance when killing Fish monsters by 40%",20,4,0]
,[23,2,0,90,3,0,80,5,"Orcish Sword","",0,194,1,0]
,[24,2,1,104,3,0,220,68,"Jeweled Sword","","Upon killing a monster, add a chance to gain a random Gem item",0]
,[25,2,1,140,3,0,250,74,"Gaia Sword","","Upon killing a monster, add a chance to gain a random Ore item",0]
,[26,2,1,115,3,"2 / 3",100,27,"Saber","",0,0]
,[27,2,1,120,3,"1 / 2",90,27,"Haedonggum","",0,4,3,0]
,[28,2,113,125,3,0,135,75,"Holy Avenger","",0,3,2,20,6,0]
,[29,2,1,130,3,"1 / 2",120,27,"Tsurugi","",0,0]
,[30,2,61,150,3,"0 / 2",150,27,"Flamberge","",0,0]
,[31,2,1,85,4,0,120,40,"Solar Sword","","Regains 1% of the damage inflicted on his target as HP with each attack<BR>Drains 15 SP from his owner every 10 seconds",20,3,0]
,[32,2,1,100,4,0,60,40,"Ice Falchion","","Freeze enemies by 5% chance when hit<br>Freeze its owner by 1% chance when used",20,1,220,1,221,1,0]
,[33,2,1,100,4,0,50,40,"Fireblend","",0,20,3,220,2,221,2,0]
,[34,2,1,150,4,"0 / 1",90,40,"Cutlus","",0,1,2,18,1,220,3,0]
,[35,2,1,170,4,0,100,40,"Mysteltainn","","",20,7,48,15,5,3,221,3,0]
,[36,2,1,200,4,0,100,40,"Tirfing","","Drains 35 HP from his owner every 10 seconds",20,7,0]
,[37,3,0,60,1,"3 / 4",100,4,"Katana","",0,0]
,[38,3,0,90,2,"2 / 3",130,18,"Slayer","",0,0]
,[39,3,0,115,2,"2 / 3",160,18,"Bastard Sword","",0,0]
,[40,3,0,140,3,"1 / 2",200,33,"Broad Sword","",0,18,5,0]
,[41,3,0,160,3,"1 / 2",220,33,"Two-handed Sword","",0,0]
,[42,3,61,180,3,"0 / 2",250,33,"Claymore","",0,0]
,[43,3,0,155,4,"0 / 1",220,48,"Executioner","",0,37,20,57,-10,187,1,20,7,0]
,[44,3,0,155,4,0,100,48,"Muramasa","","Curse his owner by a low chance",10,30,12,8,0]
,[45,3,0,175,4,0,200,48,"Katzbalger","",0,3,5,18,10,0]
,[46,3,0,200,4,"0 / 2",220,48,"Zweihander","",0,194,1,0]
,[47,3,0,200,4,0,100,48,"Masamune","",0,1,-5,9,30,24,3,0]
,[48,4,0,28,1,"3 / 4",70,4,"Javelin","",0,0]
,[49,4,0,44,1,"3 / 4",85,4,"Spear","",0,0]
,[50,4,0,60,1,"3 / 4",100,4,"Pike","",0,0]
,[51,4,0,160,3,1,380,71,"Pole Axe","",0,1,1,4,2,5,1,0]
,[52,4,0,120,4,"0 / 2",50,4,"Gungnir","",0,8,30,20,4,86,25,0]
,[53,5,0,84,2,"2 / 3",100,18,"Guisarme","",0,0]
,[54,5,0,104,2,"2 / 3",120,18,"Glave","",0,0]
,[55,5,0,124,2,"1 / 2",200,18,"Partizan","",0,0]
,[56,5,0,150,3,"2 / 3",120,33,"Trident","",0,0]
,[57,5,0,165,3,"1 / 2",250,33,"Halberd","",0,0]
,[58,5,0,185,3,0,250,33,"Lance","",0,0]
,[59,5,0,170,4,"0 / 3",200,48,"Zephyrus","",0,20,4,221,4,136,2,0]
,[60,5,0,180,4,"0 / 1",250,48,"Crescent Scythe","",0,8,10,10,30,0]
,[61,6,0,38,1,"3 / 4",80,3,"Axe","",0,0]
,[62,6,0,75,3,"0 / 4",150,3,"Orcish Axe","",0,0]
,[63,6,66,140,3,1,420,76,"War Axe","",0,5,2,6,2,0]
,[64,7,1,80,1,"3 / 4",150,3,"Battle Axe","",0,0]
,[65,7,1,120,2,"2 / 3",200,16,"Hammer","",0,0]
,[66,7,1,155,3,"1 / 2",220,30,"Buster","",0,0]
,[67,7,1,185,3,"1 / 2",250,30,"Two-handed Axe","",0,0]
,[68,7,0,170,4,0,400,44,"Bloody Axe","","Increases Movement Speed",1,10,0]
,[69,7,0,180,4,0,230,44,"Light Epsilon","",0,20,6,36,3,220,4,0]
,[70,7,0,187,4,0,180,44,"Great Axe","","Mammonite will shove his target back 5 cells",131,15,0]
,[71,8,0,23,1,"3 / 4",70,2,"Club","",0,0]
,[72,8,0,37,1,"3 / 4",80,2,"Mace","",0,0]
,[73,8,0,54,2,"2 / 3",100,14,"Smasher","",0,0]
,[74,8,1,69,2,"2 / 3",90,14,"Flail","",0,0]
,[75,8,1,84,2,"2 / 3",80,14,"Chain","",0,0]
,[76,8,1,110,3,"1 / 2",150,27,"Morning Star","",0,0]
,[77,8,53,115,3,0,250,55,"Wrench","","1% of randomly inflict Stun, Blind, Poison or Freeze Status with each melee attack",0]
,[78,8,1,130,3,"0 / 1",120,27,"Swordmace","",0,0]
,[79,8,53,140,3,"0 / 2",200,27,"Stunner","",0,131,10,0]
,[80,8,63,155,3,0,300,78,"Iron Driver","",0,0]
,[81,8,53,110,4,"1 / 2",80,40,"Golden Mace","",0,49,10,194,1,0]
,[82,8,53,135,4,0,80,40,"Long Mace","","Capable of damaging enemies 3 cells away from his owner",78,10,0]
,[83,8,53,140,4,"0 / 1",150,40,"Grand Cross","","Regain 1 SP for each attack on an Undead Monster<BR>Regain 3 SP for each killed Undead Monster",20,6,221,5,0]
,[84,8,112,220,4,3,600,0,"Mjolnir","","<font color='blue'>SQI</font>",1,5,5,5,6,5,20,4,0] //custom TalonRO SQI
,[85,9,0,15,1,"3 / 4",40,0,"Rod","",0,88,15,0]
,[86,9,0,25,2,"2 / 3",40,12,"Wand","",0,4,1,89,15,0]
,[87,9,1,40,2,"2 / 3",40,12,"Staff","",0,4,2,89,15,0]
,[88,9,55,25,3,0,140,73,"Soul Staff","",0,4,5,2,2,89,15,195,1,0]
,[89,9,1,40,3,0,70,24,"Bone Wand","",0,4,4,20,9,89,15,0]
,[90,9,1,60,3,"1 / 2",40,24,"Arc Wand","",0,4,3,89,15,0]
,[91,9,1,75,3,0,70,24,"Wand of Occult","",0,4,3,89,15,0]
,[92,9,55,120,4,0,240,90,"Wizardry Staff","",0,4,6,5,2,89,15,195,1,0]
,[93,9,1,130,3,0,70,24,"Mighty Staff","","Consume 2 SP with each physical attack",1,10,89,15,0]
,[94,10,0,15,1,"3 / 4",50,4,"Bow","",0,0]
,[95,10,0,29,1,"3 / 4",60,4,"Composite Bow","",0,0]
,[96,10,0,50,2,"2 / 3",100,18,"Great Bow","",0,0]
,[97,10,0,65,2,"2 / 3",90,18,"Crossbow","",0,0]
,[98,10,0,90,3,"1 / 2",100,33,"Arbalest","",0,5,2,0]
,[99,10,80,95,3,1,200,65,"Repeating Crossbow","","Weapon Range +4",0]
,[100,10,0,100,3,"1 / 2",110,33,"Gakkung Bow","",0,0]
,[101,10,110,125,3,"0 / 1",110,33,"Hunter Bow","","If equipped together with Hunting Arrow, increases damage by 50%",0]
,[102,10,102,75,4,0,50,48,"Roguemaster's Bow","","Weapon Range +6",0]
,[103,10,64,145,4,"0 / 1",350,77,"Ballista","",0,0]
,[104,10,76,150,4,0,120,48,"Rudra's Bow","",0,4,5,150,50,153,50,154,50,156,50,157,50,220,5,220,6,0]
,[105,11,0,125,2,"2 / 3",80,18,"Jur","",0,0]
,[106,11,0,105,3,"0 / 3",120,55,"Katar of Piercing Wind","",0,20,4,135,5,0]
,[107,11,0,105,3,"0 / 3",120,55,"Katar of Quaking","",0,20,2,134,5,0]
,[108,11,0,105,3,"0 / 3",120,55,"Katar of Raging Blaze","",0,20,3,136,5,0]
,[109,11,0,105,3,"0 / 3",120,55,"Katar of Frozen Icicle","",0,20,1,132,5,0]
,[110,11,0,148,3,"1 / 2",120,33,"Katar","",0,5,1,0]
,[111,11,0,150,3,0,170,65,"Sharpened Legbone of Ghoul","",0,20,9,0]
,[112,11,0,165,3,"0 / 1",150,33,"Jamadhar","",0,0]
,[113,11,0,140,4,"0 / 1",150,75,"Infiltrator","",0,37,50,18,3,9,5,11,2,0]
,[114,12,0,85,2,3,60,14,"Book","",0,0]
,[115,12,0,90,3,"0 / 3",75,27," Book of Gust of Wind","",0,20,4,0]
,[116,12,0,90,3,"0 / 3",75,27,"Book of Billows","",0,20,1,0]
,[117,12,0,90,3,"0 / 3",75,27,"Book of Blazing Sun","",0,20,3,0]
,[118,12,0,90,3,"0 / 3",75,27,"Book of Mother Earth","",0,20,2,0]
,[119,12,0,115,3,2,100,27,"Bible","",0,4,2,0]
,[120,12,0,125,3,1,80,27,"Tablet","",0,0]
,[121,12,0,60,4,1,30,40,"Girl's Diary","","Increase damage on Bongun Monsters by 150%",1275,150,0]
,[122,12,0,120,4,0,80,40,"Book of the Apocalypse","",0,20,7,41,7,42,7,43,7,44,7,0]
,[123,13,0,30,1,"3 / 4",40,0,"Waghnak","",0,0]
,[124,13,0,50,2,"2 / 3",45,12,"Knuckle Duster","",0,0]
,[125,13,0,65,2,"2 / 3",45,12,"Hora","",0,0]
,[126,13,0,86,3,"1 / 2",50,24,"Claw","",0,1,2,0]
,[127,13,0,97,3,"1 / 2",50,24,"Finger","",0,0]
,[128,13,0,115,3,"0 / 1",65,24,"Fist","",0,0]
,[129,14,0,50,1,"3 / 4",70,2,"Violin","",0,0]
,[130,14,0,90,2,"2 / 3",40,14,"Mandolin","",0,0]
,[131,14,0,105,2,"2 / 3",50,14,"Lute","",0,0]
,[132,14,0,114,3,"1 / 2",90,27,"Harp","",0,4,2,0]
,[133,14,0,126,3,"1 / 2",130,27,"Gumoongoh","",0,0]
,[134,14,0,142,3,"0 / 1",90,27,"Guitar","",0,0]
,[135,15,0,45,1,"3 / 4",40,3,"Rope","",0,0]
,[136,15,0,80,2,"2 / 3",30,16,"Line","",0,0]
,[137,15,0,95,2,"2 / 3",100,16,"Wire","",0,0]
,[138,15,0,105,3,"1 / 2",70,30,"Tail","",0,6,3,0]
,[139,15,0,120,3,"1 / 2",70,30,"Whip","",0,0]
,[140,15,0,135,3,"0 / 1",90,30,"Rante","",0,0]
,[141,15,0,135,4,0,70,44,"Chemeti","",0,10,5,9,10,11,2,0]
,[142,50,0,0,0,0,0,0,"(No Upper Headgear)","",0,0]
,[143,50,0,0,0,0,70,0,"Poo Poo Hat","",0,57,10,193,1,0]
,[144,50,0,0,0,0,10,0,"Wedding Veil","",0,19,5,0]
,[145,50,1,0,0,0,15,14,"Bao Bao","",0,0]
,[146,50,0,0,0,0,10,0,"Heart Hairbin","",0,0]
,[147,50,1,0,0,0,10,0,"Fashionable Glasses","",0,0]
,[148,50,0,0,0,0,10,0,"Hairband","",0,193,1,0]
,[149,50,0,0,0,0,15,0,"Candle","",0,0]
,[150,50,0,0,0,0,10,0,"Halo","",0,66,15,193,1,0]
,[151,50,0,0,0,0,10,0,"Crescent Hairpin","",0,0]
,[152,50,0,0,0,0,10,0,"Fancy Flower","",0,53,10,193,1,0]
,[153,50,1,0,0,0,50,0,"Light Bulb Band","",0,0]
,[154,50,56,0,0,0,100,0,"Parcel Hat","",0,0]
,[155,50,1,0,0,0,10,0,"Ghost Bandana","",0,2,2,68,10,0]
,[156,50,1,0,0,0,20,30,"Apple of Archer","",0,5,3,0]
,[157,50,1,1,0,0,80,0,"Sunday Hat","",0,0]
,[158,50,0,1,0,0,100,0,"Cake Hat","",0,0]
,[159,50,0,1,0,0,30,50,"Chef Hat","",0,5,1,0]
,[160,50,0,1,0,0,10,0,"Santa Hat","",0,19,1,6,1,0]
,[161,50,0,1,0,0,10,0,"Stellar","",0,0]
,[162,50,55,1,0,0,30,0,"Mage Hat","",0,4,2,14,150,0]
,[163,50,1,1,0,0,10,0,"Joker Jester","",0,19,5,6,2,0]
,[164,50,0,1,0,0,10,0,"Mini Propeller","",0,0]
,[165,50,0,1,0,"0 / 1",10,0,"Ribbon","",0,19,3,0]
,[166,50,1,1,0,0,10,0,"Cute Ribbon","",0,14,20,193,1,0]
,[167,50,0,1,0,0,10,0,"Pretend Murdered","",0,193,1,0]
,[168,50,1,1,0,0,10,0,"Puppy Love","",0,193,1,0]
,[169,50,0,1,0,0,15,0,"Striped Hairband","",0,193,1,0]
,[170,50,1,1,0,0,25,10,"Cross Hat","",0,0]
,[171,50,0,1,0,0,15,0,"Blue Hairband","",0,0]
,[172,50,0,1,0,0,10,0,"Funeral Hat","",0,193,1,0]
,[173,50,0,1,0,"0 / 1",10,0,"Sunflower","",0,54,10,193,1,0]
,[174,50,0,1,0,0,40,0,"Stop Post","",0,0]
,[175,50,1,1,0,0,10,0,"Jack Be Dandy","",0,193,1,0]
,[176,50,0,1,0,0,10,0,"Bandana","",0,0]
,[177,50,0,1,0,0,10,0,"Bomb Wick","",0,193,1,0]
,[178,50,0,2,0,0,10,0,"Bunny Band","",0,6,2,0]
,[179,50,0,2,0,"0 / 1",20,0,"Hat","",0,0]
,[180,50,0,2,0,0,10,0,"Red Bandana","",0,0]
,[181,50,1,2,0,0,70,38,"Poring Hat","",0,0]
,[182,50,0,2,0,0,10,0,"Flower Band","",0,0]
,[183,50,1,2,0,"0 / 1",10,0,"Ph.D Hat","",0,0]
,[184,50,53,2,0,0,10,0,"Nurse Cap","",0,4,1,0]
,[185,50,1,2,0,0,80,64,"Deviruchi Hat","","",1,1,4,1,0]
,[186,50,0,2,0,0,10,0,"Unicorn Horn","",0,0]
,[187,50,1,2,0,"0 / 1",20,0,"Big Ribbon","",0,19,3,0]
,[188,50,1,2,0,0,10,0,"Angel Wing","",0,2,1,6,1,19,3,56,3,0]
,[189,50,0,2,0,0,10,0,"Kitty Band","",0,0]
,[190,50,0,2,0,0,10,0,"Green Feeler","",0,193,1,0]
,[191,50,0,3,0,0,10,0,"Aerial","",0,0]
,[192,50,0,3,0,0,10,0,"Indian Fillet","",0,0]
,[193,50,1,3,0,0,40,0,"Western Grace","",0,0]
,[194,50,1,3,0,0,40,0,"Romantic Gent","",0,0]
,[195,50,0,3,0,0,50,0,"Kafra Band","",0,19,3,0]
,[196,50,1,3,0,0,30,0,"Coronet","",0,4,1,0]
,[197,50,77,3,0,"0 / 1",30,0,"Circlet","",0,19,3,0]
,[198,50,77,3,0,0,50,50,"Magician Hat","",0,2,1,5,1,14,50,0]
,[199,50,1,3,0,0,40,0,"Sweet Gent","",0,0]
,[200,50,1,3,0,0,90,20,"Spore Hat","",0,0]
,[201,50,1,3,0,0,90,50,"Raccoon Hat","",0,0]
,[202,50,1,3,0,0,80,40,"Panda Hat","",0,0]
,[203,50,1,3,0,0,20,0,"Headset","",0,153,10,0]
,[204,50,1,3,0,0,20,55,"Grand Circlet","",0,1,1,4,1,6,1,19,4,0]
,[205,50,1,3,0,0,10,0,"Evin Wing","",0,1,1,19,2,58,3,0]
,[206,50,1,3,0,0,10,0,"Doctor Band","",0,4,1,0]
,[207,50,1,3,0,"0 / 1",10,0,"Pirate Bandana","",0,1,1,0]
,[208,50,1,3,0,"0 / 1",20,0,"Boys Cap","",0,0]
,[209,50,0,3,0,0,30,0,"Sakkat","",0,2,1,0]
,[210,50,1,3,0,"0 / 1",30,0,"Turban","",0,0]
,[211,50,1,3,0,0,50,0,"Safety Helmet","",0,19,3,0]
,[212,50,0,3,0,0,20,0,"Ear Muffs","",0,153,10,0]
,[213,50,0,3,0,0,20,0,"Egg Shell","",0,193,1,0]
,[214,50,55,4,0,0,30,0,"Wizard Hat","",0,14,100,0]
,[215,50,56,4,0,0,120,38,"Grief for Greed","",0,4,1,5,1,0]
,[216,50,75,4,0,"0 / 1",40,0,"Cap","",0,0]
,[217,50,1,4,0,0,40,45,"Crown","",0,4,2,0]
,[218,50,72,4,0,0,60,60,"Jewel Crown","",0,4,2,6,1,19,3,0]
,[219,50,72,4,0,"0 / 1",50,0,"Jewel Helm","",0,19,3,0]
,[220,50,1,4,0,0,40,45,"Tiara","",0,4,2,0]
,[221,50,53,4,0,"0 / 1",10,0,"Bireta","",0,0]
,[222,50,72,4,0,0,40,0,"Army Hat","",0,0]
,[223,50,0,4,0,0,40,19,"Rainbow Eggshell","",0,193,1,0]
,[224,50,54,4,0,0,30,0,"Feather Bonnet","",0,2,1,0]
,[225,50,78,4,0,0,150,55,"Mine Hat","",0,5,2,0]
,[226,50,1,4,0,0,50,0,"Antlers","",0,0]
,[227,50,0,4,0,0,15,5,"Nut Shell","",0,193,1,0]
,[228,50,79,4,0,"0 / 1",240,0,"Hat of the Sun God","","",1,3,4,2,0]
,[229,50,72,5,0,"0 / 1",50,0,"Orc Helm","",0,0]
,[230,50,1,5,0,"0 / 1",50,0,"Corsair","",0,3,1,0]
,[231,50,86,5,0,"0 / 1",80,0,"Majestic Goat","",0,1,1,0]
,[232,50,0,5,0,0,30,30,"Wonder Nutshell","",0,193,1,0]
,[233,50,53,5,0,"0 / 1",10,0,"Monk Hat","",0,19,3,0]
,[234,50,79,5,0,0,160,74,"Angel Helm","",0,2,1,6,1,19,3,0]
,[235,50,1,5,0,"0 / 1",90,40,"Golden Gear","",0,0]
,[236,50,75,5,0,"0 / 1",30,0,"Goggles","","",0]
,[237,50,0,5,0,"0 / 1",30,0,"Bongun Hat","","",193,1,0]
,[238,50,0,5,0,"0 / 1",30,0,"Munak Hat","","",51,10,193,1,0]
,[239,50,51,5,0,1,300,65,"Sphinx Hat [1]","","",1,2,193,1,0]
,[240,50,85,6,0,"0 / 1",100,50,"Spiky Band","",0,0]
,[241,50,51,6,0,"0 / 1",60,0,"Helm","",0,0]
,[242,50,70,7,0,"0 / 1",80,70,"Bone Helm","",0,67,-15,0]
,[243,51,0,0,0,0,0,0,"(No Middle Headgear)","",0,0]
,[244,51,0,0,0,"0 / 1",10,0,"Glasses","",0,0]
,[245,51,0,0,0,"0 / 1",10,0,"Sunglasses","",0,154,5,0]
,[246,51,0,0,0,0,10,0,"Diver Goggles","",0,0]
,[247,51,0,0,0,0,10,0,"Blush","",0,0]
,[248,51,0,0,0,0,10,0,"Eye Patch","",0,0]
,[249,51,1,0,0,0,10,0,"Zorro Mask","",0,0]
,[250,51,1,0,0,0,10,0,"Masquerade","",0,37,3,0]
,[251,51,0,0,0,0,10,0,"Monocle","",0,0]
,[252,51,1,0,0,0,10,0,"Blinker","",0,154,100,0]
,[253,51,1,0,0,0,10,70,"Elven Ears","",0,0]
,[254,51,0,1,0,0,10,0,"Geek Glasses","",0,154,15,0]
,[255,51,1,1,0,0,10,0,"Machoman's Classes","",0,0]
,[256,51,1,1,0,0,20,20,"Opera Phantom Mask","",0,0]
,[257,51,1,1,0,0,10,0,"Mini Glasses","",0,0]
,[258,51,0,1,0,0,10,0,"Purple Glasses","",0,154,10,0]
,[259,51,54,1,0,0,10,50,"Binoculars","",0,5,1,0]
,[260,51,0,1,0,0,10,0,"Angled Glasses","",0,0]
,[261,51,1,1,0,0,10,0,"Gas Mask","","<b>Mid and Low Headgear</b>",150,30,0]
,[262,51,1,1,0,0,10,0,"Goblin Mask","","<b>Mid and Low Headgear</b>",0]
,[263,51,1,1,0,0,10,0,"Mr. Scream","","<b>Mid and Low Headgear</b>",0]
,[264,51,0,1,0,0,10,0,"Mr. Smile","","<b>Mid and Low Headgear</b>",0]
,[265,51,51,2,0,0,30,65,"Fin Helm","",0,0]
,[266,51,1,2,0,0,20,0,"Opera Mask","","",0]
,[267,51,56,2,0,0,30,50,"Welding Mask","","<b>Mid and Low Headgear</b>",63,10,0]
,[268,52,0,0,0,0,0,0,"(No Lower Headgear)","",0,0]
,[269,52,1,0,0,0,10,0,"Cigarette","",0,54,3,0]
,[270,52,0,0,0,0,10,0,"Gangster Mask","",0,156,15,0]
,[271,52,1,0,0,0,10,0,"Pipe","",0,54,3,0]
,[272,52,0,0,0,0,10,0,"Clown Nose","",0,0]
,[273,52,0,0,0,0,10,0,"Flu Mask","",0,156,10,0]
,[274,52,1,0,0,0,10,0,"Romantic Flower","",0,53,3,0]
,[275,52,1,0,0,0,20,0,"Oxygen Mask","",0,150,20,0]
,[276,52,1,0,0,0,10,0,"Romantic Leaf","",0,53,3,0]
,[277,52,0,0,0,0,10,0,"Grampa Beard","",0,0]
,[278,52,51,1,0,0,30,50,"Iron Cain","",0,0]
,[279,60,0,0,0,0,0,0,"(No Armor)","",0,0]
,[280,60,1,0,0,0,50,0,"Wedding Dress","",0,19,15,0]
,[281,60,0,1,0,"0 / 1",10,0,"Cotton Shirt","",0,0]
,[282,60,0,2,0,"0 / 1",20,0,"Leather Jacket","",0,0]
,[283,60,0,3,0,"0 / 1",30,0,"Adventure Suit","",0,0]
,[284,60,71,3,0,"0 / 1",40,0,"Silk Robe","",0,19,10,0]
,[285,60,70,4,0,"0 / 1",100,0,"Wooden Mail","",0,0]
,[286,60,55,4,0,"0 / 1",70,0,"Silver Robe","",0,0]
,[287,60,53,4,0,"0 / 1",40,0,"Scapulare","",0,0]
,[288,60,0,4,0,"0 / 1",10,0,"Pantie","",0,0]
,[289,60,1,4,0,"0 / 1",60,0,"Mantle","",0,0]
,[290,60,50,4,0,1,50,10,"Novice Breastplate","",0,13,2000,0]
,[291,60,1,5,0,1,30,0,"Formal Suit","",0,0]
,[292,60,55,5,0,"0 / 1",60,50,"Mage Coat","",0,19,5,4,1,0]
,[293,60,1,5,0,"0 / 1",120,0,"Coat","",0,0]
,[294,60,52,6,0,"0 / 1",10,0,"Thief Clothes","",0,2,1,0]
,[295,60,73,6,0,"0 / 1",60,0,"Saint Robe","",0,19,5,0]
,[296,60,54,6,0,"0 / 1",50,45,"Tights","",0,5,1,0]
,[297,60,1,6,0,1,230,30,"Mink Coat","",0,0]
,[298,60,72,7,0,"0 / 1",280,0,"Padded Armor","",0,0]
,[299,60,53,7,0,"0 / 1",170,60,"Holy Robe","",0,19,5,56,15,67,10,0]
,[300,60,52,7,0,"0 / 1",150,50,"Ninja Suit","",0,2,1,19,3,0]
,[301,60,72,8,0,"0 / 1",330,0,"Chain Mail","",0,0]
,[302,60,56,8,0,1,250,70,"Lord's Clothes","",0,4,1,19,5,0]
,[303,60,51,10,0,"0 / 1",450,40,"Full Plate","",0,0]
,[304,60,113,11,0,"0 / 1",550,70,"Legion Plate Armor","",0,0]
,[305,61,0,0,0,0,0,0,"(No Shield)","",0,0]
,[306,61,0,3,0,"0 / 1",30,0,"Guard","",0,0]
,[307,61,55,3,0,"0 / 1",100,0,"Memory Book","",0,19,2,4,1,0]
,[308,61,74,4,0,"0 / 1",60,0,"Buckler","",0,0]
,[309,61,87,4,0,"0 / 1",100,0,"Mirror Shield","",0,19,5,0]
,[310,61,51,6,0,"0 / 1",130,0,"Shield","",0,0]
,[311,62,0,0,0,0,0,0,"(No Garment)","",0,0]
,[312,62,0,1,0,"0 / 1",20,0,"Hood","",0,0]
,[313,62,1,1,0,0,50,0,"Ragamuffin Manteau","",0,19,10,0]
,[314,62,1,2,0,"0 / 1",40,0,"Muffler","",0,0]
,[315,62,1,2,0,"0 / 1",60,40,"Ancient Cape","",0,2,1,0]
,[316,62,84,4,0,"0 / 1",60,0,"Manteau","",0,0]
,[317,63,0,0,0,0,0,0,"(No Footgear)","",0,0]
,[318,63,1,0,0,0,10,0,"Crystal Pumps","",0,19,10,6,5,0]
,[319,63,0,5,0,"0 / 1",150,80,"Sleipnir","","Movement speed increased (same as Increase AGI)",15,20,16,20,19,10,76,15,0] //custom TalonRO SQI - added slot // Fixed weight and lvl required [NattWara]
,[320,63,0,1,0,"0 / 1",20,0,"Sandals","",0,0]
,[321,63,1,2,0,"0 / 1",40,0,"Shoes","",0,0]
,[322,63,1,2,0,"0 / 1",60,0,"High Heels","",0,19,5,0]
,[323,63,0,3,0,0,300,0,"Shackles","",0,0]
,[324,63,83,4,0,"0 / 1",60,0,"Boots","",0,0]
,[325,63,61,5,0,"0 / 1",75,65,"Greaves","",0,0]
,[326,64,0,0,0,0,0,0,"(No Accessory)","",0,0]
,[327,64,1,0,0,0,10,20,"Earring","",0,4,2,0]
,[328,64,1,0,0,1,10,90,"Earring [1]","",0,4,1,0]
,[329,64,0,0,0,1,5,0,"Clip","",0,14,10,0]
,[330,64,1,0,0,0,5,40,"Critical Ring","",0,10,5,0]
,[331,64,1,0,0,0,10,20,"Glove","",0,5,2,0]
,[332,64,1,0,0,1,10,90,"Glove [1]","",0,5,1,0]
,[333,64,1,0,0,0,10,50,"Dullahan's Eye","",0,56,4,51,4,150,100,0]
,[334,64,1,0,0,0,10,20,"Necklace","",0,3,2,0]
,[335,64,1,0,0,1,10,90,"Necklace [1]","",0,3,1,0]
,[336,64,50,0,0,1,20,0,"Novice Armlet","",0,1,1,4,1,6,1,0]
,[337,64,1,0,0,0,10,20,"Brooch","",0,2,2,0]
,[338,64,1,0,0,1,10,90,"Brooch [1]","",0,2,1,0]
,[339,64,0,0,0,1,120,25,"Belt","",0,0]
,[340,64,1,0,0,0,10,20,"Ring","",0,1,2,0]
,[341,64,1,0,0,1,10,90,"Ring [1]","",0,1,1,0]
,[342,64,1,0,0,0,10,20,"Rosary","",0,19,5,6,2,0]
,[343,64,1,0,0,1,10,90,"Rosary [1]","",0,19,3,6,1,0]
,[344,64,54,0,0,"0 / 1",10,65,"Bow Thimble","",0,25,3,0]
,[345,64,1,1,0,0,10,35,"Martyr's Leash","",0,2,1,0]
,[346,64,1,1,0,0,10,35,"Celebrant's Mitten","",0,4,1,0]
,[347,64,0,5,0,1,20,94,"Brisingamen [1]","",0,1,6,2,6,3,6,4,6,5,3,6,6,19,5,0]
,[348,64,0,2,0,0,300,94,"Meginjard","","STR + 30<BR>[Assassin Class]<BR>STR bonus does not apply",19,7,5197,-10,5321,-10,0] //custom TalonRO str +30 instead of +40(will be added in foot.js cuz assa gets no bonus); weight 300 instead of 800
,[349,64,1,3,0,0,10,40,"Safety Ring","",0,19,3,0]
,[350,50,1,0,0,0,10,75,"Mistress Crown","",0,4,2,14,100,0]
,[351,50,0,1,0,0,20,45,"Giant Ribbon","",0,19,10,0]
,[352,50,1,1,0,0,20,0,"Indian Headband","",0,5,1,0]
,[353,50,1,1,0,0,30,0,"Fox Mask","",0,2,1,6,1,0]
,[354,50,0,1,0,0,10,0,"X Hairpin","",0,0]
,[355,50,0,1,0,0,50,0,"Drooping Cat","",0,19,15,153,30,0]
,[356,50,0,1,0,0,10,0,"Tulip Hairpin","",0,0]
,[357,50,1,1,0,0,10,0,"Hot-Blooded Headband","",0,1,2,0]
,[358,50,0,1,0,0,10,0,"Flower Hairpin","",0,0]
,[359,50,1,1,0,0,10,0,"Giant Band Aid","",0,0]
,[360,50,0,1,0,0,10,0,"Smokie Leaf","",0,0]
,[361,50,1,1,0,0,50,0,"Lazy Smokie","",0,155,20,0]
,[362,51,0,1,0,0,10,45,"Small Ribbons","",0,0]
,[363,50,0,2,0,0,50,50,"Blue Fish","",0,35,10,0]
,[364,51,1,2,0,0,10,0,"Alarm Mask","","<b>Mid and Low Headgear</b>",154,50,0]
,[365,50,1,2,0,0,20,35,"Decorative Golden Bell","","<b>Mid and Upper Headgear</b>",0]
,[366,50,0,2,0,0,10,0,"Decorative Mushroom","",0,0]
,[367,50,0,2,0,0,20,45,"Black Cat Ears","",0,0]
,[368,50,1,2,0,0,70,0,"Model Training Hat","",0,5,2,0]
,[369,50,0,2,0,0,35,0,"Beanie","",0,6,1,0]
,[370,50,0,3,0,0,30,0,"Party Hat","",0,6,1,0]
,[371,50,0,3,0,0,80,50,"Teddybear Hat","",0,0]
,[372,50,0,3,0,0,20,50,"Straw Hat","",0,2,1,0]
,[373,50,0,3,0,0,80,0,"Sea Otter Hat","",0,3,1,0]
,[374,50,1,4,0,0,80,70,"Incubus Horns","",0,2,1,19,10,0]
,[375,50,0,4,0,0,50,0,"Cowboy Hat","",0,0]
,[376,50,0,4,0,0,40,45,"Crown of Ancient Queen","",0,0]
,[377,50,1,4,0,0,80,70,"Succubus Horns","",0,4,1,19,10,0]
,[378,50,1,4,0,0,35,0,"Sombrero","",0,2,1,0]
,[379,50,1,5,0,0,90,55,"Orc Hero Helm","",0,1,2,3,1,0]
,[380,50,81,5,0,0,30,65,"Coif","","<b>Mid and Upper Headgear</b>",0]
,[381,51,0,1,0,0,10,70,"Evil Wing Ears","",0,1,1,0]
,[382,51,0,1,0,0,10,0,"Surprised Mask","","<b>Mid and Low Headgear</b>",0]
,[383,51,0,1,0,0,10,0,"Poker Face","","<b>Mid and Low Headgear</b>",0]
,[384,51,0,1,0,0,10,0,"Annoyed Mask","","<b>Mid and Low Headgear</b>",0]
,[385,51,0,1,0,0,10,70,"Angel Wing Ears","",0,1,1,0]
,[386,51,0,2,0,0,10,0,"Goblin Leader Mask","","<b>Mid and Low Headgear</b>",0]
,[387,1,1,75,4,0,50,36,"Kitchen Knife","","Adds a 50% additional chance of dropping Meat each time a Brute monster dies",37,3,10,30,0]
,[388,1,1,80,4,0,60,36,"Ice Pick","","-30% damage to Emperium<br>-30% damage to castle guardians",23,1,37,-30,1044,-30,1547,-30,1548,-30,1063,-30,1064,-30,1065,-30,1575,-30,1576,-30,0]
,[389,1,1,84,4,0,40,0,"Princess Knife","",0,7,1,0]
,[390,1,1,70,4,"0 / 3",100,36,"Sword Breaker","",0,140,5,0]
,[391,1,1,70,4,"0 / 3",100,36,"Mail Breaker","",0,141,5,0]
,[392,1,1,80,4,0,40,36,"Weeder Knife","",0,183,1,33,15,53,15,0]
,[393,1,1,80,4,0,40,36,"Combat Knife","",0,57,10,56,-10,187,1,0]
,[394,1,1,90,4,0,70,36,"Exorciser","",0,56,5,57,-10,186,1,0]
,[395,1,1,70,4,0,50,36,"Bazerald","",0,20,3,4,5,89,10,0]
,[396,1,119,110,4,0,70,36,"Azoth","","When performing a physical attack, there's a 3% chance to transforming all monsters",0]
,[397,1,55,55,4,0,40,85,"Cursed Dagger","","Curse an enemy by a 50% chance",0]
,[398,1,55,140,4,0,50,55,"Dagger of Counter","",0,10,90,0]
,[399,2,1,120,4,0,50,40,"Nagan","","Enables use of the skill [Double Attack]Lv5",37,5,0]
,[400,2,1,115,4,0,70,40,"Edge","","When attacking, adds a 0.03% chance to inflict [Coma] on the enemy",133,3,0]
,[401,2,1,140,4,0,70,40,"Caesar's Sword","",0,33,25,183,1,0]
,[402,2,1,150,4,0,120,40,"Excalibur","",0,20,6,4,5,6,10,5,-1,0]
,[403,2,1,150,4,0,90,40,"Byeollungum","",0,7,2,26,50,79,-10,0]
,[404,2,1,140,4,0,90,40,"Immaterial Sword","","Drains 30% of target's SP by a low chance<br>Drain 1 SP from its owner on each attack",20,8,194,1,0]
,[405,3,1,150,4,"0 / 2",130,48,"Dragon Slayer","",0,39,15,189,1,0]
,[406,3,1,160,4,"0 / 2",160,48,"Schweizer Sabel","",0,18,1,20,4,221,6,0]
,[407,999,1,250,4,0,100,48,"Balmung","",0,4,20,6,20,0]
,[408,4,1,145,4,0,70,48,"Gelerdria","",0,20,2,13,800,14,-50,0]
,[409,4,1,100,4,0,85,48,"Brocca","",0,40,25,22,10,0]
,[410,4,1,95,4,0,100,48,"Tjungkuletti","","Regains 1 SP with each attack and 5 SP each time an enemy is killed",0]
,[411,5,1,183,4,0,100,48,"Bill Guisarme","",0,32,10,37,5,0]
,[412,5,1,180,4,0,250,48,"Longinus's Spear","",0,20,7,37,10,38,10,0]
,[413,5,1,190,4,0,300,48,"Brionac","",0,20,6,220,7,221,7,0]
,[414,5,1,200,4,0,350,48,"Hellfire","","",20,3,1,3,221,8,0]
,[415,6,70,140,4,0,120,44,"Cleaver","","Add a 30% additional chance of dropping Meat each time a Brute monster is killed",37,5,0]
,[416,7,1,120,4,0,230,44,"Sabbath","","Can cause the Coma effect on Demon monster by a 0.50% chance",20,7,111,50,0]
,[417,7,1,120,4,0,250,44,"Slaughter","","Can cause the Coma effect on Brute monster by a 0.40% chance",20,2,182,1,0]
,[418,7,1,165,4,0,250,44,"Tomahawk","",0,20,4,220,8,0]
,[419,7,1,215,4,0,300,44,"Guillotine","","Can cause the Coma effect on Demi-Human monster by a 0.30% chance<br>Regain 2 SP for each attack on a DemiHuman monster and 20 SP for each killed DemiHuman monster",0]
,[420,8,53,85,4,"0 / 2",70,40,"Spike","",0,10,40,24,3,0]
,[421,8,53,145,4,0,100,40,"Slash","","Can cause the Coma effect on Undead monster by a 0.10% chance",49,15,121,5,0]
,[422,8,53,165,4,0,90,40,"Quadrille","",0,49,10,42,10,37,10,0]
,[423,13,1,110,4,0,45,46,"Kaiser Knuckle","",0,20,4,49,5,41,10,42,10,43,10,44,10,0]
,[424,13,1,120,4,"0 / 1",36,46,"Berserk","",0,12,12,0]
,[425,15,1,100,4,0,40,44,"Lairat Whip","",0,5,5,2,1,0]
,[426,15,1,115,4,0,30,44,"Rapture Rose","",0,20,5,130,50,0]
,[427,60,70,4,0,0,220,45,"Claytos Cracking Earth Armor","",0,198,2,0]
,[428,60,70,4,0,0,220,45,"Luciu's Fierce Armor of Volcano","",0,198,3,0]
,[429,60,70,4,0,0,220,45,"Saphien's Armor of Ocean","",0,198,1,0]
,[430,60,70,4,0,0,220,45,"Aebecee's Raging Typhoon Armor","",0,198,4,0]
,[431,60,65,5,0,"0 / 1",110,75,"Robe of Cast","",0,19,4,73,-3,0]
,[432,60,1,7,0,1,250,60,"Glittering Jacket","",0,19,5,134,3,0]
,[433,61,113,6,0,"0 / 1",160,83,"Sacred Mission","",0,3,3,4,2,19,3,194,1,0]
,[434,61,113,5,0,0,140,68,"Holy Guard","",0,3,2,19,2,0]
,[435,63,51,6,0,0,35,30,"Safety Boots","",0,193,1,0]
,[436,62,55,0,0,0,55,75,"Survivor's Manteau","",0,3,10,19,5,0]
,[437,64,0,0,0,0,10,0,"Flower Ring","",0,0]
,[438,64,0,0,0,0,10,0,"Skull Ring","","",0]
,[439,64,0,0,0,0,10,0,"Silver Ring","",0,0]
,[440,64,0,0,0,0,10,0,"Gold Ring","",0,0]
,[441,64,0,0,0,0,10,0,"Diamond Ring","",0,0]
,[442,64,52,0,0,0,10,70,"Thief's Ring","","If user's base STR is 90 or higher: HIT + 10, FLEE + 10<br>If user's base AGI is 90 or higher: ATK + 10, CRIT + 10",0]
,[443,999,999,2,0,0,35,45,"Wing of Diablo","",0,0]
,[444,50,0,6,0,0,10,0,"-Lord Kaho's Horn","",0,1,20,4,20,5,20,19,20,0]  //custom TalonRO
,[445,52,81,0,0,0,10,70,"Assassin Mask","",0,0]
,[446,999,0,0,0,0,1,0,"Aniversary Ring","",0,7,1,13,1,14,1,0]
,[447,999,0,1,0,0,30,0,"Neko Mimi","",0,6,2,19,10,52,5,0]
,[448,999,0,3,0,0,30,0,"Aniversary Hat","",0,7,2,13,2,14,2,0]
,[449,999,0,0,0,0,10,0,"Christmas Ring","",0,6,1,0]
,[450,50,0,2,0,0,40,50,"Tiger Mask","","",1,3,13,100,193,1,0]
,[451,50,0,3,0,1,20,10,"Bone Hat","","A weird corsage with a skeleton motif that symbolizes the death.<br>Add a chance of gaining 'Immortal Heart' each time a DemiHuman monster is killed.",19,3,177,5,37,5,57,5,0]
,[452,51,0,0,0,0,10,0,"Takius Blindfold","",0,0]
,[453,50,81,5,0,1,30,65,"Coif [1]","","<b>Mid and Upper Headgear</b>",14,100,0]
,[454,64,0,0,0,0,0,0,"The Sign","",0,80,5,89,5,0]
,[455,50,0,1,0,0,30,30,"Magic Eyes","","Increases SP consumption of skills by 20% ",19,5,73,-10,0]
,[456,50,0,0,0,0,20,10,"Hibiscus","",0,19,5,4,1,5,1,193,1,0]
,[457,50,0,5,0,1,100,30,"Kabuki Mask","","",156,30,0]
,[458,50,0,1,0,1,40,10,"Kawaii Ribbon","",0,56,5,51,5,0]
,[459,50,0,0,0,1,50,30,"Alice Doll","",0,1,1,37,10,193,1,0]
,[460,50,0,8,0,0,300,50,"Crescent Helm","","",3,1,57,5,0]
,[461,1,0,39,1,0,60,0,"Kindle Dagger","",0,20,3,0]
,[462,1,0,39,1,0,60,0,"Fisherman's Dagger","",0,20,1,0]
,[463,1,0,39,1,0,60,0,"Jujube Dagger","",0,20,4,0]
,[464,1,0,39,1,0,60,0,"Obsidian Dagger","",0,20,2,0]
,[465,1,50,110,3,"1 / 2",70,55,"Cinquedea","",0,0]
,[466,1,52,80,3,"1 / 2",70,55,"Cowardice Blade","",0,18,5,0]
,[467,1,0,110,4,"0 / 2",90,60,"Dragon Killer","",0,189,1,129,10,0]
,[468,1,0,148,4,"0 / 1",70,70,"Ginnungagap","","When attacking, adds a 0.5% chance to inflict [Blind] on yourself",20,7,134,5,0]
,[469,2,50,100,3,"1 / 2",80,30,"Town Sword","",0,0]
,[470,2,50,140,4,1,100,45,"Stardust Blade","",0,131,5,194,1,0]
,[471,5,0,160,4,"0 / 2",200,60,"Gae Bolg","",0,189,1,26,10,0]
,[472,6,72,115,2,0,150,14,"Windhawk","",0,20,4,12,5,0]
,[473,9,50,70,3,"1 / 2",50,30,"Hypnotist's Staff","",0,89,25,4,1,0]
,[474,9,1,50,3,0,100,24,"Survivor's Rod [0] (dex)","",0,89,15,5,2,13,300,0]
,[475,9,1,50,3,1,100,24,"Survivor's Rod [1] (dex)","",0,89,15,5,3,13,400,0]
,[476,9,1,50,3,0,100,24,"Survivor's Rod [0] (int)","",0,89,15,4,2,13,300,0]
,[477,9,1,50,3,1,100,24,"Survivor's Rod [1] (int)","",0,89,15,4,3,13,400,0]
,[478,9,55,60,4,0,50,40,"Wing Staff","",0,20,4,89,15,73,-5,0]
,[479,10,0,100,4,0,120,60,"Dragon Wing","","3% chance to get Oridecon Arrow upon killing Dragon monsters",189,1,0]
,[480,11,0,90,1,4,80,0,"Specialty Jur","","When attacking, adds a 0.1% chance to inflict [External Bleed] on yourself",0]
,[481,11,0,115,3,0,120,55,"Loki's Nail","",0,138,3,0]
,[482,11,0,151,4,0,125,70,"Unholy Touch","",0,20,7,10,-1,133,2,0]
,[483,11,0,120,4,0,100,75,"Bloody Roar","","Flee Rate - 160<br>Perfect Dodge - 160<br>Reduces natural HP and SP recovery by 100%",187,1,76,-100,75,-100,0]
,[484,12,0,100,3,2,110,60,"Sage's Diary","","If user's base Str is 50 or higher: Increases Attack Speed by 5%<br>If user's base Int is 70 or higher: Add a MATK + 5%",89,15,0]
,[485,12,0,140,4,1,150,55,"Hardcover Book","",0,1,3,5,2,0]
,[486,12,0,130,4,0,70,70,"Legacy of Dragon","","Recover 10 SP every time you kill a Dragon monster",189,1,4,3,0]
,[487,13,0,152,4,1,55,70,"Garm Claw","",0,20,7,15,-2,138,2,0]
,[488,14,0,110,3,0,90,27,"Burning Passion Guitar","",0,20,3,0]
,[489,14,0,110,3,0,90,27,"Loner's Guitar","",0,20,1,0]
,[490,14,0,110,3,0,90,27,"Gentle Breeze Guitar","",0,20,4,0]
,[491,14,0,110,3,0,90,27,"Green Acre Guitar","",0,20,2,0]
,[492,14,0,150,4,"0 / 2",120,65,"Oriental Lute","",0,5199,10,5292,10,0]
,[493,15,0,110,3,0,90,30,"Red Flame Whip","",0,20,3,0]
,[494,15,0,110,3,0,90,30,"Icicle Whip","",0,20,1,0]
,[495,999,999,110,3,0,90,30,"Breeze Whip","",0,20,4,0]
,[496,15,0,110,3,0,90,30,"Gaia Whip","",0,20,2,0]
,[497,15,0,120,3,0,40,30,"Skipping Rope","",0,10,20,0]
,[498,15,0,140,4,0,120,30,"Blade Whip","",0,0]
,[499,15,0,150,4,"0 / 2",110,65,"Queen's Whip","",0,5207,10,5292,10,0]
,[500,50,0,2,0,0,10,0,"Puppy Hairband","",0,0]
,[501,50,0,2,0,0,40,0,"Red Bonnet","",0,0]
,[502,50,0,2,0,0,50,55,"Galapago Cap","","Add a low chance of gaining the 'Anodyne' item each time a monster is killed",0]
,[503,50,0,3,0,0,50,0,"Winter Hat","",0,152,10,0]
,[504,50,50,4,0,"0 / 1",40,40,"Super Novice Hat","",0,7,1,0]
,[505,50,0,3,0,"0 / 1",30,0,"Bucket Hat","",0,0]
,[506,50,0,3,0,1,35,0,"Renown Detective Cap","",0,0]
,[507,50,0,1,0,0,20,0,"Banana Hat","",0,221,10,0]
,[508,50,0,0,0,0,10,0,"Mystic Rose","",0,53,2,0]
,[509,50,1,3,0,0,40,70,"Zealotus Mask","","<b>Upper and Mid Headgear</b>",37,5,57,5,0]
,[510,61,50,3,0,0,1,0,"Novice Guard","",0,13,400,193,1,0]
,[511,61,50,3,0,1,100,30,"Novice Shield","",0,61,20,62,20,63,20,64,20,65,20,66,20,67,20,68,20,69,20,0]
,[512,62,50,2,0,0,1,0,"Somber Novice Hood","",0,60,20,193,1,0]
,[513,62,50,2,0,1,50,40,"Novice Manteau","",0,60,10,0]
,[514,62,72,5,0,1,80,80,"Pauldron","",0,0]
,[515,63,50,2,0,0,1,0,"Novice Slippers","",0,193,1,0]
,[516,63,50,2,0,1,50,40,"Novice Shoes","",0,15,5,0]
,[517,64,0,0,0,0,10,40,"Goddess of Fortune's Cursed Brooch","","When attacking, adds a 0.5% chance to inflict [Curse] on yourself",10,6,0]
,[518,60,50,4,0,0,1,0,"Tattered Novice Ninja Suit","",0,13,700,193,1,0]
,[519,50,50,3,0,0,1,0,"Novice False Eggshell","",0,14,80,193,1,0]
,[520,1,50,45,1,0,1,0,"Novice Main-Gauche","",0,8,20,17,60,193,1,0]
,[521,10,110,100,3,2,200,30,"Luna Bow","","<b>[Refine Rate 0~6]</b><br>DEF + 2<br><b>[Refine Rate 7~8]</b><br>DEF + 3<br><b>[Refine Rate 9~10]</b><br>DEF + 5",0]
,[522,62,1,3,0,1,50,80,"Heavenly Maiden's Robe","",0,0]
,[523,64,0,0,0,1,10,0,"Nile Rose","",0,13,10,0]
,[524,64,82,1,0,0,10,0,"Vesper Core 01","",0,4,2,16,5,19,3,0]
,[525,64,82,1,0,0,10,0,"Vesper Core 02","",0,1,3,17,10,19,3,0]
,[526,64,82,1,0,0,10,0,"Vesper Core 03","",0,2,3,9,5,19,3,0]
,[527,64,82,1,0,0,10,0,"Vesper Core 04","",0,5,3,8,10,19,3,0]
,[528,50,0,1,0,1,10,10,"Laurel Crown","",0,6,3,154,5,153,5,0]
,[529,50,0,2,0,0,50,30,"Puppy Hat","","If user's base AGI is 77 or higher: Chance to cast the skill [Gloria]Lv 1 becomes 3%",2,1,193,1,221,11,0]
,[530,50,72,3,0,1,200,50,"Helm of Darkness","","",1,2,0]
,[531,50,0,0,0,1,20,30,"Maiden's Twin Ribbon","",0,14,30,19,3,76,5,0]
,[532,50,0,1,0,0,50,30,"Decorative Geographer","",0,4,1,193,1,221,12,0]
,[533,50,0,2,0,0,50,10,"Bird's Nest Hat","",0,2,1,5,1,151,10,0]
,[534,60,1001,6,0,1,280,0,"Valkyrian Armor","","<b>[Mage, Archer, Acolyte Class]</b><br>Status effect [Silence] resistance +50%<br><b>[Swordman, Merchant, Thief Class]</b><br>Status effect [Stun] resistance +50%",7,1,194,1,0]
,[535,62,1001,3,0,1,50,0,"Valkyrian Manteau","","<b>[Mage, Archer, Acolyte Class]</b><br>Perfect Dodge + 5 + Refine Rate * 2<br><b>[Swordman, Merchant, Thief Class]</b><br>Reflect Melee Physical Attacks by 5% + Refine Rate * 2",194,1,0]
,[536,63,1001,4,0,1,50,0,"Valkyrian Shoes","","<b>[Mage, Archer, Acolyte Class]</b><br>Maximum HP + 5 * Base Level<br><b>[Swordman, Merchant, Thief Class]</b><br>Maximum SP + 2 * Job Level",194,1,0]
,[537,61,58,5,0,"0 / 1",15,20,"Arm Guard","",0,0]
,[538,61,58,4,0,"0 / 1",15,50,"Advanced Arm Guard","",0,19,5,0]
,[539,1,58,50,1,"2 / 3",60,12,"Ashura","",0,89,10,0]
,[540,1,58,70,2,"0 / 1",40,35,"Jitte","","When attacking, adds a 5% chance of destroying the enemy's weapon",0]
,[541,1,58,95,2,"1 / 2",70,24,"Murasame","",0,20,1,117,10,0]
,[542,1,58,120,3,"0 / 1",80,42,"Hakujin","",0,4,2,221,13,0]
,[543,1,58,150,3,0,60,65,"Gokurin","","When attacking, adds a 10% chance to inflict [Curse] on the enemy",20,7,0]
,[544,1,58,125,4,0,90,70,"Kamaitachi","","Weapon Range + 1",20,4,12,3,10,3,0]
,[545,16,58,50,4,"3 / 4",250,42,"Huuma Giant Wheel Shuriken","","When attacking, adds a 1% chance to inflict [External Bleeding] on the enemy",0]
,[546,16,58,185,4,0,150,55,"Huuma Blaze Shuriken","",0,20,3,5,-2,221,14,0]
,[547,16,58,150,4,0,300,65,"Huuma Wing Shuriken","",0,20,4,2,-1,5,-2,0]
,[548,17,59,30,1,"1 / 2",40,10,"Six Shooter","",0,8,-10,0]
,[549,17,59,45,2,"1 / 2",45,35,"Crimson Bolt","",0,8,-10,0]
,[550,17,59,70,2,"1 / 2",50,55,"Garrison","",0,8,-10,0]
,[551,17,59,20,3,0,50,12,"Gold Lux","","Add a 10% chance of auto casting Flip Coin when the user receives Physical Damage<br>Autocast Coin Flip will be equal to the Coin Flip skill level that the user has learned",8,-10,0]
,[552,18,59,50,1,3,50,0,"Branch","",0,8,10,0]
,[553,18,59,120,2,"1 / 2",70,24,"Cyclone","",0,8,10,10,10,0]
,[554,18,59,150,2,1,75,56,"Dusk","",0,8,10,10,10,0]
,[555,19,59,135,1,1,90,14,"Rolling Stone","","Inflicts Splash Damage[Baphomet MVP Card Effect]",0]
,[556,19,59,180,2,1,90,35,"Black Rose","","Inflicts Splash Damage[Baphomet MVP Card Effect]",0]
,[557,19,59,210,2,0,100,55,"Gate Keeper","","Inflicts Splash Damage[Baphomet MVP Card Effect]",221,113,0]
,[558,20,59,50,2,1,230,55,"Drifter","",0,0]
,[559,20,59,75,3,"0 / 1",250,68,"Butcher","",0,112,10,0]
,[560,21,59,220,2,"0 / 1",120,52,"Destroyer","",0,0]
,[561,21,59,280,2,1,125,65,"Inferno","",0,0]
,[562,50,0,4,0,1,20,10,"Note Headphones","","",151,10,152,10,19,3,0]
,[563,999,0,2,0,0,50,50,"Legendary Minstrel's Hat","",0,4,1,5,1,0]
,[564,50,0,2,0,0,20,0,"Pumpkin Hat","",0,56,5,0]
,[565,50,0,2,0,1,20,20,"Dress Hat","","<b>[Refine Rate 6~10]</b><br>MATK + 1%<br>Physical damage + 1% (versus Normal/Boss/Guardian)<br>Heal amount increased by + 1%<br>Sanctuary effectiveness increased by + 1%",19,7,1,1,4,1,89,2,80,2,91,5,94,5,0]
,[566,50,0,3,0,1,100,30,"Satellite Hat","",0,13,50,14,10,220,10,0]
,[567,50,0,3,0,0,20,0,"Moonlight Flower Hat","",0,5,2,221,15,0]
,[568,50,0,2,0,0,20,0,"Bunny Hairband","",0,19,3,2,2,0]
,[569,50,0,1,0,0,30,10,"Flapping Angel Wings","",0,12,3,73,-3,2,1,4,1,0]
,[570,50,0,1,0,0,10,10,"Baby Chick","","Allows usage Level 2 Double Attack<br>If you already know a level higher than Level 2 Double Attack, the appropriate level will be used instead",6,2,13,50,14,50,57,3,193,1,0]
,[571,51,0,1,0,0,10,10,"Red Glasses","",0,19,5,0]
,[572,50,0,3,0,0,10,70,"Peco Peco Hairband","","Movement speed increased by 5%",12,5,73,-5,0] //custom TalonRO +5% aspd, -5% casting time
,[573,50,0,2,0,1,30,30,"Windmill Hairpin","",0,2,2,193,1,0]
,[574,50,0,4,0,0,60,30,"Kettle Hat","","",221,16,221,17,0]
,[575,1,58,120,1,0,0,1,"Ashura R","",0,89,15,193,1,0] //custom TalonRO Rental
,[576,3,51,190,4,0,0,1,"Executioner R","",0,20,7,187,1,37,20,57,-10,193,1,0] //custom TalonRO Rental
,[577,1,55,209,4,0,0,1,"Dagger of Counter R","",0,10,90,193,1,0] //custom TalonRO Rental
,[578,2,72,185,4,0,0,1,"Cutlus R","",0,1,2,18,1,193,1,220,3,0] //custom TalonRO Rental
,[579,1,1,85,4,0,0,1,"Moonlight Dagger R","","Regain 3 SP with each attack",16,10,193,1,0] //custom TalonRO Rental
,[580,12,0,135,3,0,0,1,"Sage's Diary R","",0,89,20,12,5,193,1,0] //custom TalonRO Rental
,[581,8,53,150,3,0,0,1,"Wrench R","","Small chance of randomly inflict Stun, Blind, Poison or Freeze Status with each melee attack",193,1,0] //custom TalonRO Rental
,[582,2,1,120,4,0,0,1,"Solar Sword R","","Regains 1% of the damage inflicted on his target as HP with each attack<BR>Drains 15 SP from his owner every 10 seconds",20,3,193,1,0] //custom TalonRO Rental
,[583,7,1,200,4,0,0,1,"Tomahawk R","",0,20,4,193,1,220,8,0] //custom TalonRO Rental
,[584,4,0,195,3,0,480,1,"Pole Axe R","",0,1,1,4,2,5,1,193,1,0] //custom TalonRO Rental
,[585,7,1,229,4,0,0,1,"Light Epsilon R","","Increases Movement Speed by 25%",20,6,1,10,36,3,193,1,220,4,0] //custom TalonRO Rental
,[586,10,76,185,4,0,0,1,"Rudra's Bow R","",0,20,6,4,5,193,1,220,5,220,6,0] //custom TalonRO Rental
,[587,50,0,9,0,0,0,0,"Bunny Band R","",0,19,5,57,10,193,1,0] //custom TalonRO Rental
,[588,999,1,1,0,0,10,0,"Steel Flower R","",0,193,1,221,18,0]
,[589,999,1,5,0,0,80,0,"Majestic Goat R","",0,1,1,193,1,0]
,[590,50,1,7,0,0,0,1,"Apple of Archer R","",0,5,4,193,1,0] //custom TalonRO Rental
,[591,51,1,1,0,0,10,0,"Eye Of Darkness","",0,5,1,0]
,[592,64,1,0,0,0,0,1,"Earring R","",0,4,3,0] //custom TalonRO Rental
,[593,64,1,0,0,0,0,1,"Critical Ring R","",0,10,10,0] //custom TalonRO Rental
,[594,64,1,0,0,0,0,1,"Glove R","",0,5,4,0] //custom TalonRO Rental
,[595,64,1,5,0,0,0,1,"Safety Ring R","",0,19,5,0] //custom TalonRO Rental
,[596,64,1,0,0,0,0,1,"Necklace R","",0,3,4,0] //custom TalonRO Rental
,[597,64,1,0,0,0,0,1,"Brooch R","",0,2,4,0] //custom TalonRO Rental
,[598,64,1,0,0,0,0,1,"Ring R","",0,1,4,0] //custom TalonRO Rental
,[599,64,1,0,0,0,0,1,"Rosary R","",0,19,5,6,4,0] //custom TalonRO Rental
,[600,50,0,2,0,1,20,10,"Holy Marcher Hat","",0,19,2,1,2,221,19,151,10,0]
,[601,999,0,1,0,1,20,30,"Resort Hat","",0,193,1,3,1,0]
,[602,50,0,0,0,1,20,30,"Lily Crown","",0,193,1,19,3,2,1,5,1,75,5,76,3,0]
,[603,60,1,4,0,1,220,45,"Claytos Cracking Earth Armor [1]","",0,198,2,0]
,[604,60,1,4,0,1,220,45,"Luciu's Fierce Armor of Volcano [1]","",0,198,3,0]
,[605,60,1,4,0,1,220,45,"Saphien's Armor of Ocean [1]","",0,198,1,0]
,[606,60,1,4,0,1,220,45,"Aebecee's Raging Typhoon Armor [1]","",0,198,4,0]
,[607,1,1,70,4,1,60,36,"Ice Pick [1]","","-30% damage to Emperium<br>-30% damage to castle guardians",23,1,37,-30,1044,-30,1547,-30,1548,-30,1063,-30,1064,-30,1065,-30,1575,-30,1576,-30,0]
,[608,50,1,4,0,1,40,45,"Crown [1]","",0,4,1,0]
,[609,50,1,4,0,1,40,45,"Tiara [1]","",0,4,1,0]
,[610,1,1001,120,4,3,50,55,"Mes","","When attacking, adds a 5% chance to inflict [External Bleeding] on the enemy",0]
,[611,1,1001,130,4,1,70,55,"Tooth Blade","","Whenever you attack, 0.5% to cause all enemies within 5 x 5 (PBAoE) cells around you to delay their casting time by 20%<br><b>[Refine Rate 9~10]</b><br>The chance of the effect is increased to 0.7% as well as increasing PBAoE cell effects to 11 x 11 and the delay casting time of all enemies by 40%",0]
,[612,2,72,130,4,1,150,55,"Silver Shotel","",0,10,50,0]
,[613,2,72,125,4,2,80,55,"Thin Blade","","Every time you attack, small chance to cause Curse on the enemy",12,10,0]
,[614,3,1001,200,4,1,350,55,"Atroce's Blade","","If the user's base Str is 80 or higher, adds a 5% chance of damaging the target's armor when doing a physical attack",10,10,0]
,[615,3,1001,160,4,2,220,55,"Muscle Cutter","","Add a 2% chance of auto casting Level 1 Decrease Agi on the enemy when attacking<br>Add a 1% chance of auto casting External Bleeding on the enemy when attacking",0]
,[616,4,1001,150,4,1,100,65,"Long Horn","","Enables the use of [Detoxify]Lv 1<br>Adds a 5% chance of inflicting [Bleeding] on the target when doing a melee attack",20,6,194,1,0]
,[617,4,1001,140,4,1,90,65,"Battle Hook","",0,37,20,131,5,220,11,0]
,[618,4,1001,180,4,1,420,60,"Hunting Spear","","Adds a 10% chance of the Meat item dropping when killing a [Brute] race monster",182,1,221,20,0]
,[619,5,1,170,4,"0 / 1",200,75,"Phantom Spear","","If the target enemy dies, Recovers 50 HP<BR>Small chance to cause Chaos on yourself",31,20,36,20,47,20,51,10,56,10,67,10,0]
,[620,5,61,120,4,0,100,65,"Ahlspiess","",0,22,10,37,10,221,21,0]
,[621,7,1,10,4,"0 / 1",600,80,"Doom Slayer","","Decrease Attack Speed by 40%<br>SP cost of All Skills is doubled<br>If user's base Str is 95 or higher: ATK + 340, Causes Stun effect to enemies by 30% chance when receiving damage and add a 5% chance of breaking the enemy's armor when attacking",0]
,[622,7,1001,200,3,2,250,70,"Bardiche","",0,191,13,192,15,0]
,[623,7,1001,175,4,1,200,70,"Heart Breaker","","Each upgrade gives Crit +1<br><b>[Whitesmith, Creator]</b><br>Add a chance of auto casting Level 3 Hammerfall on the enemy when attacking",10,20,12,5,0]
,[624,7,1001,332,4,1,350,80,"Hurricane Fury","","<b>For each upgrade:</b><br>ASPD +1%<br>1% less damage from [Medium] size enemies",191,10,221,22,0]
,[625,8,1,4,4,1,44,44,"Holgren's Refining Hammer","","Every time you attack the enemy, small chance to destroy their weapon or armor by 10%<br>If user's base Str is 44 or higher: Damage calculation becomes ATK + 44<br><br><b>When equipping [Holgren's Refining Hammer]+[Whitesmith Card] at the same time:<br>Very high chance to destroy enemy's equipment, and small chance to destroy your own by 1%</b>",0]
,[626,10,76,95,3,1,140,55,"Burning Bow","","If equipped together with Fire Arrow, increases damage by 25%",63,10,0]
,[627,10,76,100,3,1,140,55,"Freezing Bow","","If equipped together with Crystal Arrow, increases damage by 25%",132,1,0]
,[628,10,76,105,3,1,140,55,"Earthen Bow","","If equipped together with Stone Arrow, increases damage by 25%",134,1,0]
,[629,10,76,95,3,1,140,55,"Gale Bow","","If equipped together with Wind Arrow, increases damage by 25%",221,23,0]
,[630,10,76,120,3,0,160,65,"Orc Archer's Bow","","If equipped together with Steel Arrow, increases damage by 50%.",0]
,[631,11,122,160,4,1,145,55,"Ogre's Toenail","","[description translation missing - ItemID: 631]",0]
,[632,11,122,140,4,0,150,55,"Inverse Scare","","[description translation missing - ItemID: 632]",20,6,0]
,[633,11,122,110,4,1,140,55,"Drill Katar","","[description translation missing - ItemID: 633]",8,30,0]
,[634,11,122,120,4,2,170,55,"Bloody Blades","","[description translation missing - ItemID: 634]",0]
,[635,13,0,80,3,3,65,75,"Magma Fist","",0,221,24,0]
,[636,13,0,80,3,3,65,75,"Icicle Fist","",0,221,25,0]
,[637,13,0,80,3,3,65,75,"Electric Fist","",0,221,26,0]
,[638,13,0,80,3,3,65,75,"Seismic Fist","",0,221,27,0]
,[639,13,0,30,3,4,50,60,"Barrage Fist","","",5187,15,5188,15,5189,20,0]
,[640,12,0,110,3,2,200,70,"Giant Encyclopedia","","Critical Rate bonus is further increased by +1 per 5 base LUK",89,15,4,3,5,2,10,20,0]
,[641,12,0,137,4,2,100,85,"Book of the Dead","","Add a 0.1% chance of auto casting Coma effect on DemiHuman monster<br>Attack Speed increased depending on the refinement rate of this weapon<br><b>[Sage, Professor]</b><br>There is a 2% chance of using [Hell's Judgment]Lv 5 on the target when doing a physical attack",89,15,1,3,4,3,6,-20,0]
,[642,9,1001,60,3,2,80,70,"Lich's Bone Wand","","Whenever you take a Physical Damage, small chance to cause Curse status ailment to every enemies in the screen. This chance is increased depending on the refinement rate of this weapon<br><b>[Refine Rate 9~10]</b><br>You will receive bonus MATK + 3%, Maximum SP + 300",89,20,4,1,5,1,20,9,0]
,[643,51,1,0,0,0,10,0,"Dark Blinder","",0,154,100,151,2,0]
,[644,9,53,10,3,0,40,55,"Staff of Recovery","","Heal and Sanctuary effectiveness increased by the refine of the weapon",89,15,20,6,0]
,[645,9,1001,80,3,0,50,70,"Staff of Piercing","","When you attack using magical ability, it will ignore 10% of their MDEF<br>The amount ignored will increase depending on the refinement rate of this weapon",89,15,4,4,0]
,[646,9,125,130,4,1,250,80,"Staff of Destruction","","Reduces casting time of Amplify Magic by 50%<br>Refinement in multiples of 2 (+2, +4, +6, +8, +10) increases MATK by 1%<br>SP taken by all skills will increase depending on the refinement rate of this weapon<br>Small chance to cast [Jupitel Thunder]Lv 5 whenever you are attacked physically. This chance depends on the refinement rate of this weapon",89,25,4,3,2,10,195,1,0]
,[647,9,63,120,4,0,150,70,"Divine Cross","","",89,15,20,6,5,4,51,15,56,15,0]
,[648,14,130,130,3,1,150,70,"Bass Guitar","","[description translation missing - ItemID: 648]",0]
,[649,14,130,10,4,0,180,70,"Spirited Guitar","","[description translation missing - ItemID: 649]",12,100,75,-100,0]
,[650,15,0,110,3,0,70,30,"Electric Wire","",0,20,4,0]
,[651,15,131,100,4,2,200,70,"Electric Eel","","The skill level of the autocast Arrow Vulcan changes depending on the refinement rate of this weapon (not yet calculated!)",20,4,2,2,4,2,221,28,0]
,[652,15,131,110,4,1,150,70,"Foot of the Sea Witch","","[description translation missing - ItemID: 652]",221,29,0]
,[653,15,131,185,4,0,130,70,"Carrot Whip","","[description translation missing - ItemID: 653]",0]
,[654,17,0,68,3,2,58,70,"Western Outlaw","","[description translation missing - ItemID: 654]",0]
,[655,18,0,150,3,"0 / 1",100,70,"Long Barrel","",0,10,20,12,-3,221,30,0]
,[656,18,0,170,3,"0 / 1",70,70,"Jungle Carbine","","[description translation missing - ItemID: 656]",8,10,10,4,12,10,0]
,[657,18,0,138,3,2,77,70,"Lever Action Rifle","",0,8,20,10,50,12,-5,0]
,[658,19,0,200,4,0,130,70,"Gate Keeper-DD","","DEF increases by Refine Rate",5,1,221,31,0]
,[659,19,0,80,3,"1 / 2",70,70,"THUNDER-P","","[description translation missing - ItemID: 659]",8,-5,12,20,0]
,[660,16,0,112,3,2,155,70,"Huuma Morning Star Shuriken","",0,5396,30,0]
,[661,50,1,5,0,0,100,65,"Magni's Cap","",0,1,2,0]
,[662,50,1,3,0,1,50,65,"Ulle's Cap","",0,5,2,2,1,0]
,[663,50,1,3,0,0,30,65,"Frigg's Circlet","",0,19,10,4,2,14,50,0]
,[664,50,50,3,0,1,30,50,"Angel's Kiss","",0,76,3,0]
,[665,50,1,1,0,0,20,33,"Morpheus's Hood","",0,4,2,0]
,[666,50,1,4,0,0,50,61,"Morrigane's Helm","",0,6,2,17,3,0]
,[667,50,1,5,0,0,50,54,"Goibne's Helm","",0,19,3,3,3,0]
,[668,50,1,0,0,1,40,30,"Marionette Doll","",0,1,1,0]
,[669,50,1,1,0,0,60,0,"Feather Beret","",0,19,1,57,10,0]
,[670,50,0,7,0,1,10,0,"Valkyrie Helm","",0,2,20,3,20,6,20,19,20,57,10,0] //custom TalonRO SQI - original: ,[670,50,1001,5,0,1,100,0,"Valkyrian Helm","",0,19,5,0]
,[671,50,0,0,0,0,70,0,"Beret","",0,57,10,193,1,0]
,[672,50,0,3,0,1,40,60,"Magistrate Hat","","[description translation missing - ItemID: 672]",0]
,[673,50,0,3,0,1,40,60,"Ayam","","<b>[TaeKwon Class]</b><br>INT + 1, SP Recovery + 3%",0]
,[674,999,0,0,0,0,10,0,"HORIORUGORU","","[description translation missing - ItemID: 674]",0]
,[675,50,0,4,0,1,50,40,"Bride Mask","","[description translation missing - ItemID: 675]",0]
,[676,50,0,5,0,1,50,40,"Mythical Lion Mask","","[description translation missing - ItemID: 676]",0]
,[677,51,0,0,0,0,10,0,"Censor Bar","",0,19,1,8,-5,153,5,0]
,[678,51,0,2,0,0,10,30,"Hahoe Mask","","[description translation missing - ItemID: 678]",0]
,[679,50,0,1,0,0,10,0,"Rabbit Doll","",0,5,1,9,2,0]
,[680,50,0,5,0,0,80,50,"Dragon Skull","",0,59,5,0]
,[681,50,0,1,0,0,50,30,"Ramen Hat","","Chance of auto casting Decrease AGI Level 1 on the enemy when attacking",5,4,0]
,[682,50,0,0,0,0,10,10,"Whisper Mask","","[description translation missing - ItemID: 682]",2,3,68,-10,193,1,0]
,[683,60,50,4,0,1,60,40,"Angelic Protection","",0,19,20,0]
,[684,60,1,6,0,1,250,65,"Odin's Blessing","",0,0]
,[685,60,1,7,0,0,350,54,"Goibne's Armor","",0,3,2,15,10,0]
,[686,60,1070,10,0,1,300,55,"Meteor Plate","",0,151,30,152,30,0]
,[687,60,1001,2,0,1,30,55,"Orlean's Uniform","","Skill casts cannot be interrupted (except in WoE)",73,15,0]
,[688,60,1001,6,0,1,150,55,"Divine Clothes","",0,153,5,156,5,151,5,155,5,159,5,0]
,[689,60,124,5,0,1,75,50,"Sniping Suit","","Bonus (LUK/10) Critical Rate depending on your LUK rate",19,5,10,6,74,23,0]
,[690,61,50,3,0,1,40,20,"Angelic Guard","",0,56,5,0]
,[691,61,1,3,0,1,150,65,"Stone Buckler","",0,192,5,0]
,[692,61,1,3,0,1,50,65,"Valkyrian Shield","",0,19,5,61,20,63,20,67,20,69,20,0]
,[693,61,1001,5,0,0,120,68,"Platinum Shield","","40% chance to reflect magic spells for 2 seconds",19,5,191,15,192,15,51,10,0]
,[694,61,1001,5,0,1,100,55,"Orlean's Server","","5% chance to reflect magic spells",19,2,0]
,[695,61,1001,5,0,1,100,55,"Thorn Shield","",0,19,2,0]
,[696,61,1001,4,0,1,250,75,"Strong Shield","","Skills cannot push or move the user<br>",60,-20,61,-20,62,-20,63,-20,64,-20,66,-20,67,-20,68,-20,0]
,[697,62,55,1,0,1,30,85,"Wing of Eagle","",0,0]
,[698,62,50,2,0,1,40,20,"Angelic Cardigan","",0,75,5,0]
,[699,62,0,2,0,"0 / 1",15,0,"Undershirt","",0,19,1,0]
,[700,62,1,3,0,0,60,33,"Morpheus's Shawl","",0,19,3,16,10,0]
,[701,62,1,3,0,0,60,61,"Morrigane Manteau","",0,6,2,11,8,0]
,[702,62,1,3,0,0,70,54,"Goibne's Spaulders","",0,78,10,19,2,3,1,0]
,[703,62,1,3,0,0,40,65,"Falcon Robe","",0,9,15,11,5,0]
,[704,62,1,4,0,0,60,65,"Vali's Manteau","",0,60,15,0]
,[705,62,1001,4,0,1,60,48,"Dragon's Breath","",0,59,15,0]
,[706,62,1001,3,0,1,50,55,"Wool Scarf","",0,19,4,0]
,[707,62,1001,4,0,"0 / 1",50,55,"Crest of Rider","",0,2,2,0]
,[708,62,1072,3,0,1,70,70,"Wolfheiden","","Whenever you receive a Physical Damage, there is a small chance to activate [Stone Skin]Lv 6",0]
,[709,62,1089,3,0,1,40,70,"Mithril Magic Manteau","","Whenever you receive a Magical Damage, there is a small chance to activate [Anti-Magic]Lv 6",19,3,0]
,[710,63,50,2,0,1,30,54,"Angel's Reincarnation","",0,13,100,0]
,[711,63,1,4,0,0,70,54,"Goibne's Greaves","",0,19,3,15,5,16,5,0]
,[712,63,1,3,0,0,50,65,"Fricco's Shoes","","Increase the heal power of Red, Orange, Yellow and White Potion by 20%",2,2,0]
,[713,63,1,4,0,0,65,65,"Vidar's Boots","",0,15,9,16,9,0]
,[714,63,77,2,0,1,20,0,"High Fashion Sandals","",0,19,10,0]
,[715,63,1001,3,0,0,50,85,"Variant Shoes","","Maximum HP / Maximum SP reduced by 1% per refine rate<br>Added +1 DEF for every 2 refinement",15,20,16,20,0]
,[716,63,1001,3,0,1,30,55,"Tidal Shoes","",0,61,5,0]
,[717,63,1001,4,0,"0 / 1",50,55,"Black Leather Boots","","<b>[Refine Rate 9~10]</b><br>AGI + 2",2,1,0]
,[718,63,1001,0,0,0,200,75,"Shadow Walk","","Whenever you receive a Magical Damage, there is a small chance to activate [Cloaking]Lv 3<br>If the user knows Lv 4 or more, that Lv will be used",19,10,0]
,[719,64,1,0,0,0,10,33,"Morpheus's Ring","",0,4,1,16,5,0]
,[720,64,1,0,0,0,10,33,"Morpheus's Bracelet","",0,4,1,16,5,0]
,[721,64,1,0,0,0,20,61,"Morrigane's Belt","",0,17,5,10,3,0]
,[722,64,1,0,0,0,20,61,"Morrigane's Pendant","",0,1,2,10,3,0]
,[723,64,1,0,0,0,10,90,"Sacrifice Ring","",0,0]
,[724,64,52,0,0,0,30,30,"Shinobi Sash","",0,1,1,2,1,19,1,0]
,[725,64,1,0,0,0,400,0,"Bloody Shackle Ball","",0,0]
,[726,64,72,1,0,0,100,0,"Armor Charm","",0,13,50,0]
,[727,64,0,0,0,0,10,0,"Spiritual Ring","",0,4,2,5,1,0]
,[728,64,82,0,0,0,10,0,"Ring of Flame Lord","",0,1,2,3,1,17,15,63,10,221,32,221,33,221,34,221,35,221,36,0]
,[729,64,82,2,0,0,10,0,"Ring of Resonance","",0,2,2,3,1,19,2,221,37,221,38,221,39,221,40,221,41,0]
,[730,64,0,0,0,0,10,0,"Lesser Elemental Ring","",0,7,1,0]
,[731,64,1051,0,0,0,10,60,"Seal of Red Silk","","[description translation missing - ItemID: 731]",0]
,[732,64,1001,0,0,1,10,90,"Orlean's Gloves","",0,5,2,89,3,0]
,[733,64,1001,0,0,1,10,90,"Horn of Buffalo","",0,2,2,0]
,[734,64,1001,0,0,1,15,50,"Expert Ring","","Increases SP consumption of skills by 5%",74,5,0]
,[735,64,1,1,0,0,20,0,"Kafra Ring","",0,19,1,1,1,2,1,4,1,6,1,0]
,[736,100,0,0,0,0,0,0,"No Set",0,0,0]
,[737,100,0,0,0,0,0,0,0,0,"MATK increase by Survivor's Rod refine rate<br>Increase resistance from Neutral Property attacks by refine rate * 3",13,300,89,-5,0]
,[738,100,0,0,0,0,0,0,0,0,0,212,5,9,10,0]
,[739,100,0,0,0,0,0,0,0,0,"[description translation missing - ItemID: 739]",13,300,0]
,[740,100,0,0,0,0,0,0,0,0,"Reduces damage from Zombie Prisoner and Skeleton Prisoner by 20%",17,50,3147,20,3171,20,0]
,[741,100,0,0,0,0,0,0,0,0,0,13,150,18,5,0]
,[742,100,0,0,0,0,0,0,0,0,"<b>[Swordman Class]</b><br>Additional DEF + 6",1,2,18,5,19,5,0]
,[743,100,0,0,0,0,0,0,0,0,0,212,3,15,5,16,5,0]
,[744,100,0,0,0,0,0,0,0,0,0,213,5,75,10,76,10,0]
,[745,100,0,0,0,0,0,0,0,0,0,213,5,15,15,16,5,18,5,19,15,61,10,62,10,63,10,64,10,0]
,[746,100,0,0,0,0,0,0,0,0,0,1,2,6,9,17,18,10,13,11,13,0]
,[747,100,0,0,0,0,0,0,0,0,"[description translation missing - ItemID: 747]",214,5,19,11,16,20,73,25,0]
,[748,100,0,0,0,0,0,0,0,0,"Add a 3% chance of auto casting Level 1 Assumptio on the user when the user receives Physical Damage",13,900,14,100,0]
,[749,100,0,0,0,0,0,0,0,0,0,7,1,0]
,[750,100,0,0,0,0,0,0,0,0,"Reduce Casting Time by [Wizardry Staff] or [Soul Staff] Refine Rate",89,6,215,2,0]
,[751,100,0,0,0,0,0,0,0,0,0,76,9,5104,30,93,50,96,50,0]
,[752,100,0,0,0,0,0,0,0,0,0,73,-10,0]
,[753,100,0,0,0,0,0,0,0,0,0,12,10,71,5,0]
,[754,100,0,0,0,0,0,0,0,0,0,15,10,75,5,0]
,[755,100,0,0,0,0,0,0,0,0,0,39,5,0]
,[756,100,0,0,0,0,0,0,0,0,0,9,10,0]
,[757,100,0,0,0,0,0,0,0,0,0,215,2,89,10,51,10,56,10,0]
,[758,50,0,0,0,0,100,30,"Vanilmirth Hat","","",19,5,193,1,194,1,221,103,221,104,221,105,0]
,[759,50,53,1,0,0,15,0,"Sheep Hat","",0,193,1,71,5,0]
,[760,50,0,0,0,0,80,75,"Sales Banner","",0,1,1,2,1,6,1,0]
,[761,50,0,1,0,0,30,0,"Yellow Mage Hat","",0,4,2,14,150,0]
,[762,999,0,10,0,0,75,94,"Sniping Suit R","","[description translation missing - ItemID: 762]",19,10,80,10,89,10,193,1,194,1,0]
,[763,100,0,0,0,0,0,0,0,0,"Increase Movement Speed by 25%",0]
,[764,100,0,0,0,0,0,0,0,0,"Additional DEF decrease by Frigg's Circlet and Valkyrja's Shield refine rate<br>Additional MDEF increase by Frigg's Circlet and Valkyrja's Shield refine rate",18,2,19,5,0]
,[765,100,0,0,0,0,0,0,0,0,"[description translation missing - ItemID: 765]",0]
,[766,100,0,0,0,0,0,0,0,0,"[description translation missing - ItemID: 766]",0]
,[767,100,0,0,0,0,0,0,0,0,"Adds a 0.5% chance of using [Assumptio]Lv 2 on the user when physically attacked",0]
,[768,100,0,0,0,0,0,0,0,0,0,221,42,221,43,221,44,221,45,221,46,0]
,[769,999,0,1,0,1,10,0,"Quill Pen Ring","",0,19,1,0]
,[770,999,0,0,0,0,0,0,"Quill + Small Book Pen[?]",0,"[description translation missing - ItemID: 770]",60,3,0]
,[771,60,0,8,0,1,0,0,"Adventure Novice Suit","",0,193,1,0]
,[772,999,52,110,4,1,65,24,"RAKUMA","","[description translation missing - ItemID: 772]",89,5,0]
,[773,52,0,0,0,0,10,0,"Red Cup","","[description translation missing - ItemID: 773]",0]
,[774,52,0,0,0,0,5,0,"Crunch Toast","",0,0]
,[775,52,0,0,0,0,5,0,"Baby Pacifier","",0,0]
,[776,52,0,0,0,0,5,0,"Angry Snarl","",0,0]
,[777,64,0,0,0,0,90,75,"Accuracy Gauntlet","",0,1,1,8,15,0]
,[778,64,56,0,0,0,70,50,"Fashion Hip Sack","",0,1,2,0]
,[779,50,0,1,0,0,30,0,"Blue Mage Hat","",0,4,2,14,150,0]
,[780,50,1,1,0,0,60,30,"Sunflower Hairpin","",0,2,2,10,5,193,1,0]
,[781,63,1,3,0,1,30,30,"Bunny Slippers","",0,19,3,6,3,0]
,[782,50,0,1,0,0,30,0,"Pointed Hat (white)","",0,1,2,8,5,0]
,[783,50,0,4,0,0,50,30,"Captain Hat","",0,61,5,0]
,[784,50,0,0,0,0,50,0,"Elephant hat","",0,3,1,0]
,[785,50,0,1,0,0,35,20,"Deviling Hat","","If Refine is +6 or more, + CRIT equal to refine minus 5",1,1,10,3,58,-20,0]
,[786,50,0,1,0,0,40,50,"Bird Nest","",0,2,2,52,10,0]
,[787,50,0,3,0,1,0,0,"Baseball Cap","",0,0]
,[788,50,0,0,0,0,10,0,"Silver Tiara","",0,4,2,0]
,[789,50,0,1,0,0,30,20,"Drooping Fox","",0,2,1,5,1,221,47,0]
,[790,50,0,0,0,1,40,10,"Wig","",0,60,1,221,48,0]
,[791,50,0,2,0,1,80,0,"Earpad Hat","","[description translation missing - ItemID: 791]",152,10,0]
,[792,50,51,8,0,0,120,75,"Closed Helmet","","[description translation missing - ItemID: 792]",3,3,15,3,0]
,[793,51,1,0,0,0,20,75,"Cyclops Eyes","",0,14,50,0]
,[794,52,1,0,0,0,10,0,"White Petals","",0,53,3,0]
,[795,60,63,5,0,1,250,70,"Vestiary of grace","",0,19,5,154,80,0]
,[796,62,1,1,0,0,70,75,"Skeleton Manteau","",0,1,2,2,-4,3,-3,4,-3,5,2,6,2,0]
,[797,999,53,0,0,0,50,60,"The Magic Ring exit","",0,126,5,121,5,0]
,[798,64,1,0,0,0,30,60,"Renown Archer's Gloves","",0,5,1,8,5,10,5,0]
,[799,1,52,100,4,0,80,55,"Holy Dagger","",0,20,6,5,1,0]
,[800,64,52,0,0,0,20,60,"Moonlight Ring","",0,10,3,12,3,0]
,[801,64,1,0,0,0,20,75,"Belcarf","",0,5,2,4,1,0]
,[802,50,0,3,0,0,50,0,"Shark Hat","",0,19,1,1,1,2,2,41,5,331,10,0]
,[803,50,0,2,0,0,20,45,"Whickebine Black Cat Ears","",0,9,10,10,3,70,10,0] //custom TalonRO
,[804,50,0,3,0,0,50,1,"Ship Captain's Hat",0,0,5,1,25,7,13,100,0] //custom TalonRO
,[805,51,0,1,0,0,10,70,"Peco Wing Ears","",0,19,2,2,1,0]
,[806,52,0,0,0,0,10,60,"Gangster Scarf","","<b>[Rogue Class]</b><br>Enables the use of the skill [Gangster's Paradise]Lv 1",17,5,0]
,[807,52,0,0,0,0,20,60,"Ninja Scroll","",0,89,1,0]
,[808,60,0,5,0,0,100,1,"Angel dress","",0,6,4,193,1,0]
,[809,50,0,1,0,1,20,20,"Leaf Hat","","[description translation missing - ItemID: 809]",4,1,0]
,[810,50,0,2,0,0,70,38,"Angeling Hat","",0,57,10,193,1,0]
,[811,50,0,2,0,0,70,10,"Guildsman Cap","",0,0]
,[812,50,0,2,0,0,70,10,"Guild recruit Cap","",0,0]
,[813,50,0,3,0,0,70,0,"Angeling Heartpin","",0,9,5,0]
,[814,100,0,0,0,0,0,0,0,0,0,214,2,6,2,0]
,[815,50,0,1,0,1,50,0,"Classic Hat","",0,1,1,27,5,28,5,29,5,0]
,[816,1,122,130,2,2,60,70,"Desert Twilight","",0,0]
,[817,1,122,50,2,4,60,70,"Desert Wind","",0,0]
,[818,100,0,0,0,0,0,0,0,0,"Adds a 0.1% chance for when dealing physical damage, the user will have max Aspd for 7 seconds",14,20,8,10,15,5,29,30,0]
,[819,3,0,200,4,2,120,50,"Bloody Eater","","Restores 100 HP to the user when a monster is killed with a melee attack<br>Adds a 0.1% chance for when dealing physical damage, the user will gain Atk +50 and Crit +100 for 5 seconds",20,8,0]
,[820,8,53,120,4,0,90,60,"Nemesis","","Adds 1% chance ATK + 50 during 20 seconds when physical attack",20,6,36,10,47,10,221,49,0]
,[821,10,124,135,4,1,30,70,"Ixion Wings","","[description translation missing - ItemID: 821]",0]
,[822,12,0,60,3,2,30,60,"Principles of Magic","",0,89,20,4,3,76,5,0]
,[823,12,0,30,3,2,70,70,"Ancient Magic","",0,89,15,0]
,[824,100,0,0,0,0,0,0,0,0,0,214,4,19,8,16,10,0]
,[825,9,55,30,3,0,50,50,"Radiant Wisdom","","When performing a Magical attack, there's a small chance recover SP and HP",89,15,4,3,91,5,94,5,0]
,[826,50,0,0,0,0,50,0,"Knit Hat Earmuffs","",0,4,2,0]
,[827,50,1,2,0,1,30,40,"Rideword Hat","","5% chance to absorb 8% HP on Physical attack<br>1% chance to absorb 4% SP on Physical attack<br>You lose 10 HP each 5 seconds when equipped ",0]
,[828,50,82,5,0,1,25,0,"Dark Bacilium","","Each refine increases resistance by 2%<br><b>Upper, Mid and Low Headgear</b>",159,20,152,20,151,20,0]
,[829,60,1089,6,0,1,30,60,"Diabolus Robe","",0,14,150,19,5,74,10,91,6,0]
,[830,60,1072,7,0,1,60,60,"Diabolus Armor","",0,19,5,1,2,5,1,13,150,151,5,159,5,0]
,[831,61,63,5,0,0,60,50,"Exorcism Bible","",0,4,1,75,3,76,3,0]
,[832,61,113,6,0,1,200,80,"Cross Shield","","[description translation missing - ItemID: 832]",1,1,5324,30,5159,30,5384,30,0]
,[833,61,1055,2,0,1,100,70,"Book of Charms Vol. 1","",0,4,2,19,3,131,1,0]
,[834,62,1,2,0,1,25,60,"Skin of Ventus","",0,9,10,13,200,19,2,0]
,[835,62,1079,5,0,1,25,0,"Diabolus Manteau","","Increases Physical Damage when facing Satan Morroc by 10%",13,100,60,5,1495,10,1496,10,0]
,[836,63,1079,4,0,1,25,0,"Diabolus Boots","","Maximum HP + 10 * Base Level",0]
,[837,64,65,0,0,1,10,80,"Librarians Gloves","",0,14,20,0]
,[838,64,55,0,0,0,20,80,"Pocket Watch","",0,0]
,[839,64,54,0,0,1,20,65,"Lunatic Brooch","",0,0]
,[840,64,70,0,0,0,70,50,"Iron Wrist","",0,5006,6,5065,6,0]
,[841,64,124,0,0,0,10,70,"Feather of Icarus","",0,5,3,14,50,0]
,[842,64,124,0,0,0,20,70,"Renown Archer's Scarf","",0,5,3,14,50,0]
,[843,64,1,0,0,1,5,80,"Cursed Hand","","[description translation missing - ItemID: 843]",8,10,75,20,0]
,[844,64,1079,0,0,1,5,0,"Diabolus Ring","","Increases Physical Damage when facing Satan Morroc by 10%",13,100,14,100,91,5,94,5,1495,10,1496,10,0]
,[845,64,1,0,0,1,5,80,"Seal of Continental Guard","",0,12,3,13,50,0]
,[846,64,1,0,0,1,5,80,"Morroc Charm Stone","","[description translation missing - ItemID: 846]",73,-1,14,50,0]
,[847,64,1,0,0,1,5,80,"Morroc Ring","","[description translation missing - ItemID: 847]",10,5,0]
,[848,64,0,0,0,1,10,0,"Marvelous Pendant","",0,51,2,56,2,57,1,55,1,52,1,0]
,[849,50,0,3,0,1,80,0,"Balloon Hat","","Each refine increases your MATK",89,2,19,2,0]
,[850,50,1,3,0,1,25,50,"Hunting Cap","",0,6,1,32,10,0]
,[851,50,0,2,0,0,70,10,"Bf Recruiter Cap","",0,0]
,[852,50,0,2,0,0,70,10,"Gf Recruiter Cap","",0,0]
,[853,10,124,70,3,3,90,70,"Double Bound","","[description translation missing - ItemID: 853]",0]
,[854,100,0,0,0,0,0,0,0,0,"",80,3,89,3,0]
,[855,100,0,0,0,0,0,0,"Tournament Shield System Set","","[Lord Knight]<br>Aspd -5%",18,2,80,4,0]
,[856,100,0,0,0,0,0,0,0,0,0,5104,20,221,50,0]
,[857,100,0,0,0,0,0,0,0,0,0,15,6,0]
,[858,100,0,0,0,0,0,0,0,0,0,214,5,13,700,12,5,0]
,[859,60,0,10,0,0,40,94,"Brynhild","",0,19,10,80,10,89,10,193,1,194,1,0]
,[860,100,0,0,0,0,0,0,0,0,0,89,7,75,15,76,15,0]
,[861,100,0,0,0,0,0,0,0,0,0,215,1,14,50,76,10,0]
,[862,100,0,0,0,0,0,0,0,0,"Reduce SP Consumption of skills by 25%",0]
,[863,9,63,50,4,1,50,70,"Holy Stick","",0,89,15,7037,25,7102,25,7104,25,0]
,[864,50,0,0,0,0,10,0,"Leaves","",0,13,40,14,40,0]
,[865,50,0,3,0,0,60,20,"Triple Poring Hat","","[description translation missing - ItemID: 865]",6,3,193,1,0]
,[866,50,0,0,0,0,10,0,"Gold Tiara","",0,4,2,0]
,[867,50,0,0,0,0,10,0,"Ring of Money Spirit","",0,6,1,66,5,193,1,0]
,[868,50,0,1,0,1,10,20,"Valkyrie Feather Band","",0,4,1,221,102,0]
,[869,50,1,2,0,0,30,20,"Resurrecting Soul","",0,19,2,0]
,[870,50,0,2,0,1,10,0,"Santa Poring Cap","",0,19,2,47,3,67,3,193,2,0]
,[871,50,0,3,0,1,20,0,"Bell Ribbon","",0,3,1,220,12,0]
,[872,50,0,2,0,1,200,0,"Phoenix Crown","","Each refine adds 1% of boss type reduction<br><b>Mid and Upper Headgear</b>",19,3,0]
,[873,51,0,2,0,0,20,0,"Tongue-Sticking Mask","","[description translation missing - ItemID: 873]",0]
,[874,51,0,0,0,0,10,0,"Blank Eyes","",0,0]
,[875,50,0,0,0,0,30,0,"Coppola","",0,0]
,[876,50,1,1,0,0,10,20,"Yellow Bandana","",0,3,2,6,2,78,10,0]
,[877,50,0,0,0,0,20,0,"True Love","",0,0]
,[878,64,1,0,0,0,15,75,"Anklet","",0,3,3,75,10,0]
,[879,64,1,0,0,0,10,75,"Body piercing","",0,5,3,6,1,19,2,0]
,[880,51,0,0,0,0,20,30,"Mask of the Goddess","",0,80,2,89,2,0]
,[881,50,0,2,0,0,20,0,"Academy Freshman Hat","","[description translation missing - ItemID: 881]",13,80,14,10,0]
,[882,50,0,2,0,1,20,0,"Academy Completion Hat","","[description translation missing - ItemID: 882]",14,30,0]
,[883,64,0,0,0,0,10,0,"Badge Academy","","[description translation missing - ItemID: 883]",0]
,[884,50,0,1,0,1,20,30,"Neko Mimi Kafra","","[description translation missing - ItemID: 884]",19,5,0]
,[885,50,0,1,0,1,10,45,"Blue Ribbon","",0,221,101,0]
,[886,50,0,0,0,0,20,0,"Hopping Filir","","Increases your AGI by 1/19th of your base stats<BR>Has a very small chance to cast Level 5 Running when hit",0]
,[887,51,0,1,0,0,20,70,"Black Framed Glasses","",0,19,2,4,1,0]
,[888,51,0,1,0,0,20,70,"Mischievous Fairy","",0,11,3,0]
,[889,52,0,0,0,0,20,30,"Fish in Mouth","","[description translation missing - ItemID: 889]",0]
,[890,50,0,0,0,1,50,60,"Telling Doll Hat","",0,193,1,2,2,57,5,0]
,[891,50,0,0,0,1,50,60,"Defolty Doll Hat","",0,193,1,1,2,57,5,0]
,[892,50,0,0,0,1,50,60,"Sorin Doll Hat","",0,193,1,5,2,57,5,0]
,[893,50,0,0,0,1,50,60,"W Doll Hat","",0,193,1,6,2,57,5,0]
,[894,50,1,1,0,0,10,20,"Yellow Ribbon","",0,3,2,6,2,78,10,0]
,[895,50,0,2,0,0,70,10,"Friend Recruiter Hat","",0,0]
,[896,50,0,2,0,0,30,0,"Jumping Poring","",0,6,1,193,1,194,1,0]
,[897,1,0,120,3,0,0,80,"Brave Assassin Damascus","","<b>[Ninja Class, Rogue or Stalker]</b><br>MATK + 15%",194,1,1,1,2,1,37,75,307,20,0]
,[898,1,0,120,3,0,0,80,"Valorous Assassin Damascus","","When attacking, there is a chance that for 6 seconds, the weapon will be endowed with occult impaction/icepick effect<br><b>[Ninja Class, Rogue or Stalker]</b><br>MATK + 15%",194,1,1,1,2,1,37,75,0]
,[899,2,0,115,3,0,0,80,"Valorous Gladiator Blade","",0,194,1,1,1,5,1,37,75,307,20,0]
,[900,2,0,115,3,0,0,80,"Brave Gladiator Blade","",0,194,1,1,1,5,1,37,75,89,10,0]
,[901,3,0,200,3,0,0,80,"Valorous Assault Katzbalger","",0,194,1,1,2,37,55,307,20,0]
,[902,3,0,200,3,0,0,80,"Brave Assault Katzbalger","",0,194,1,10,20,37,55,70,20,0]
,[903,4,0,60,3,0,0,80,"Assaulter Spear","","<b>[Crusader or Paladin]</b><br>Increases attack speed by 20%",194,1,1,2,37,95,307,20,0]
,[904,5,0,160,3,0,0,80,"Assaulter Lance","",0,194,1,1,2,37,25,187,1,0]
,[905,7,1,200,3,0,0,80,"Valorous Insane Battle Axe","",0,194,1,1,3,37,55,307,20,0]
,[906,7,1,200,3,0,0,80,"Brave Insane Battle Axe","","When attacking, chance to activate 100% chance to destroy the monster armor for 3 seconds",194,1,1,3,37,55,0]
,[907,8,0,105,3,0,0,80,"Valorous Battlefield Morning Star","",0,194,1,1,1,5,1,37,75,307,20,0]
,[908,8,0,105,3,0,0,80,"Brave Battlefield Morning Star","","When attacking there is a chance to activate for 6 seconds a 50% chance to Stun the monster",194,1,1,1,5,1,37,75,0]
,[909,11,0,130,3,0,0,80,"Brave Carnage Katar","",0,194,1,1,1,5,1,6,1,37,70,307,20,0]
,[910,11,0,130,3,0,0,80,"Valorous Carnage Katar","",0,194,1,1,1,5,1,6,1,37,70,70,20,12,5,0]
,[911,12,0,90,3,0,0,80,"Brave Battle Strategy Book","",0,194,1,1,1,4,2,89,15,37,75,307,20,0]
,[912,12,0,90,3,0,0,80,"Valorous Battle Strategy Book","",0,194,1,1,1,4,2,89,15,317,25,0]
,[913,10,0,100,3,0,0,80,"Valorous Battle Crossbow","",0,194,1,5,2,37,55,307,20,0]
,[914,10,0,100,3,0,0,80,"BraveBattle Crossbow","",0,194,1,5,2,4,10,37,55,0]
,[915,13,0,30,3,0,0,80,"Valorous Battle Fist","",0,194,1,1,2,4,1,37,95,307,20,0]
,[916,13,0,30,3,0,0,80,"Brave Battle Fist","","When attacking, there is a chance to activate for 6 seconds an effect that completely negates the cast time on Guillotine Fist",194,1,1,2,4,1,37,95,7197,25,7321,25,0]
,[917,9,1,70,3,0,0,80,"Warlock's Magic Wand","","Adds a 5% chance to Stun opponents with your magic",194,1,89,15,4,4,5,3,317,25,0]
,[918,9,1,70,3,0,0,80,"Warlock's Battle Wand","","Adds a 5% chance to Stun opponents with your magic",194,1,89,15,4,3,5,3,177,15,0]
,[919,9,1,70,3,0,0,80,"Strong Recovery Wand","","Recover 5SP every 10 seconds",194,1,89,15,91,14,94,14,0]
,[920,9,1,70,3,0,0,80,"Speedy Recovery Wand","","Recover 5SP every 10 seconds",194,1,89,15,4,3,5,2,74,15,0]
,[921,14,0,50,3,0,0,80,"Valorous Battlefield Guitar","",0,194,1,5,2,37,95,307,20,0]
,[922,14,0,50,3,0,0,80,"Brave Battlefield Guitar","",0,194,1,5,2,37,95,5292,20,0]
,[923,15,0,50,3,0,0,80,"Valorous Battle Lariat","",0,194,1,5,2,37,95,307,20,0]
,[924,15,0,50,3,0,0,80,"Brave Battle Lariat","",0,194,1,5,2,37,95,5292,20,0]
,[925,17,0,70,3,0,0,80,"Soldier Revolver","","[description translation missing - ItemID: 925]",194,1,5,2,8,-10,37,55,307,20,0]
,[926,18,0,50,3,0,0,80,"Soldier Rifle","","[Tracking] Cast Time -25%",194,1,5,2,8,10,10,10,37,75,307,20,0]
,[927,20,0,80,3,0,0,80,"Soldier Gatling Gun","","[description translation missing - ItemID: 927]",194,1,5,2,37,35,307,20,0]
,[928,19,0,100,3,0,0,80,"Soldier Shotgun","","[description translation missing - ItemID: 928]",194,1,5,2,37,55,307,20,0]
,[929,21,0,300,3,0,0,80,"Soldier Grenade Launcher","","[description translation missing - ItemID: 929]",194,1,5,2,37,35,307,20,0]
,[930,16,0,55,3,0,0,80,"Brave Huuma Front Shuriken","",0,194,1,1,2,5,1,37,95,307,20,0]
,[931,16,0,55,3,0,0,80,"Valorous Huuma Front Shuriken","","[description translation missing - ItemID: 931]",194,1,1,2,5,1,37,95,0]
,[932,2,1001,150,4,3,150,75,"Naght Sieger Twin Blade [Blue]","","Adds a 5% chance for when dealing physical damage, all physical attacks will ignore the defense of normal monsters and players for 5 seconds",20,1,220,13,0]
,[933,2,1001,160,4,3,150,75,"Naght Sieger Twin Blade [Red]","","Adds a 5% chance for when dealing physical damage, all physical attacks will ignore the defense of normal monsters and players for 5 seconds",20,3,220,14,0]
,[934,3,1000,250,4,2,200,90,"Tae Goo Lyeon","","<b>[Job Level >= 70]</b><br>When dealing physical damage chance of activate ATK + 50 for 10 seconds<br><b>[Refine Rate 9~10]</b><br>Reduces all skill's after-cast delay by 20%",11,10,0]
,[935,3,1000,275,4,2,220,80,"Violet Fear","","When dealing physical damage there is a chance that for 5 seconds, you will completely bypass enemy defense",221,51,221,52,0]
,[936,9,1001,60,4,0,70,75,"Dark Thorn Staff","","Each refine adds magic defense bypassing to your magic attacks<br>Each refine reduces the aftercast delay of your skills",20,7,89,20,4,3,5,3,0]
,[937,1,128,120,3,3,70,70,"Dagger of Hunter","","Adds a 10% chance of using [Bash]Lv 10 when [Back Stab] is casted",1,1,2,2,5,1,5169,20,0]
,[938,1,1001,130,3,2,70,50,"Ivory Knife","","Adds a 3% chance of using [Critical Wound]Lv 1 on the target when doing a physical attack",2,2,12,3,0]
,[939,2,1001,105,3,3,120,70,"Elemental Sword","","Adds a 5% chance of using [Cold Bolt]Lv 3 on the target when doing a physical attack<br>Casts [Fire Bolt]Lv 3 on the target when [Cold Bolt] is used<br>Casts [Lightening Bolt]Lv 3 on the target when [Fire Bolt] is used<br>Casts [Earth Spike]Lv 3 on the target when [Lightening Bolt] is used",1,2,4,4,5,1,89,5,40,10,0]
,[940,3,1001,200,4,2,200,70,"Death Guidance","","Adds a 1% chance of using [Hell Power]Lv 1 on the user or target when doing a physical attack<br>Adds a 2% chance of using [Vampire's Gift]Lv 1 on the target when doing a physical attack<br><b>[Refine Rate 9~10]</b><br>Area becomes 15 * 15, and you will do 200% damage to the area while you regaining 200% damage worth of HP",1,5,2,2,11,20,0]
,[941,5,1001,160,3,1,100,50,"Ivory Lance","","[description translation missing - ItemID: 941]",2,2,12,3,220,15,0]
,[942,5,121,150,4,1,560,70,"Carled","","Every two upgrades made to the weapon gives Def +1",12,-10,0]
,[943,5,1001,112,2,4,70,50,"Battle Fork","",0,0]
,[944,8,1053,110,3,3,70,50,"Luna Kaleet","","If user's base Str is 77 or higher: ASPD +4% and Causes Stun effect to enemies by 15% chance.<BR>When a Brute is killed, 15% chance to drop +4 STR Food<BR>When a Plant is killed, 15% chance to drop +5 DEX Food<BR>When a Fish is killed, 15% chance to drop +3 LUK Food",0]
,[945,10,124,105,4,2,100,60,"Nepenthes Bow","","[description translation missing - ItemID: 945]",0]
,[946,10,1054,125,4,1,125,80,"Cursed Lyre","","[description translation missing - ItemID: 946]",6,-2,0]
,[947,13,129,95,3,3,60,60,"Soul of Hels Leon","","Adds a 3% chance of using [Joint Beat]Lv 1 on the target when doing a physical attack<br>Adds a 1% chance of using [Summon Spirit Sphere]Lv 5 when doing a physical attack<br>10% chance of using [Investigate]Lv 1 when [Palm Push Strike] is casted",0]
,[948,9,1001,80,4,0,50,70,"Eraser","","There is a small chance while magically attacking, on a radius 11 * 11 of your cell and drain every enemies SP by 20%<br><b>[Refine Rate 10]</b><br>The area becomes 19 * 19 and you drain every enemies SP by 60%",89,20,4,3,5,2,76,8,0]
,[949,14,130,110,3,3,70,70,"Chello","","[description translation missing - ItemID: 949]",2,2,5,3,0]
,[950,14,130,120,4,2,100,60,"Harp of Nepenthes","","[description translation missing - ItemID: 950]",4,2,0]
,[951,15,131,120,4,2,100,60,"Stem of Nepenthes","","[description translation missing - ItemID: 951]",4,2,0]
,[952,15,131,110,3,3,70,70,"Rope of Balance","","[description translation missing - ItemID: 952]",2,2,5,3,0]
,[953,50,0,5,0,0,80,0,"Baphomet Horns","","As your JOB Level increases,the helm grants additional ATK",37,12,0]
,[954,50,1070,5,0,1,120,85,"Bone Head","",0,1,2,19,5,151,5,158,5,0]
,[955,50,82,1,0,1,30,85,"Mandragora Cap","",0,3,3,193,1,221,100,0]
,[956,50,0,3,0,1,10,0,"Shining Bulb Hairband","",0,67,10,220,16,0]
,[957,62,0,5,0,0,40,94,"Asprika","","[description translation missing - ItemID: 957]",9,30,19,5,193,1,194,1,220,17,0]
,[958,60,86,7,0,1,0,80,"Assaulter Plate","",0,13,150,19,2,57,2,0]
,[959,60,56,7,0,1,0,80,"Elite Engineer's Armor","",0,13,150,19,2,57,2,0]
,[960,60,52,7,0,1,0,80,"Assassin's Robe","",0,13,150,19,2,57,2,0]
,[961,60,55,3,0,1,0,80,"Warlock's Battle Robe","",0,13,150,19,2,57,2,0]
,[962,60,53,3,0,1,0,80,"Medic's Robe","",0,13,150,19,2,57,2,0]
,[963,60,54,3,0,1,0,80,"Elite Archer Suit","",0,13,150,19,2,57,2,0]
,[964,60,145,3,0,1,0,80,"Elite Shooter Suit","",0,13,150,19,2,57,2,0]
,[965,62,91,4,0,1,0,80,"Captain's Manteau","",0,13,50,19,1,57,1,0]
,[966,62,89,3,0,1,0,80,"Commander's Manteau","",0,13,50,19,1,57,1,0]
,[967,62,145,3,0,1,0,80,"Sheriff's Manteau","",0,13,50,19,1,57,1,0]
,[968,63,91,4,0,1,0,80,"Battle Greaves","",0,13,100,19,1,57,1,0]
,[969,63,89,3,0,1,0,80,"Combat Boots","",0,13,100,19,1,57,1,0]
,[970,63,145,3,0,1,0,80,"Battle Boots","",0,13,100,19,1,57,1,0]
,[971,100,0,0,0,0,0,0,"Commanding Officer Set",0,"Increases the recovery rate of skills and items by 10%<BR>When attacking physically, there is a chance to recover 6000HP over 10 seconds<BR>Increases damage received from all Non-Demihuman monster by 3 times",3,3,15,12,0]
,[972,100,0,0,0,0,0,0,"Elite Engineer Set",0,"Heal amount increased by + 10%<BR>Potion Pitcher effectiveness by + 10%<br>Increases damage received from all Non-Demihuman monster by 3 times",1,3,15,12,194,1,5065,20,0]
,[973,100,0,0,0,0,0,0,"Assassin Robe Set",0,"When attacking physically, small chance to recover 3000HP over per 10 seconds<BR>Increases damage received from all Non-Demihuman monster by 3 times",2,3,15,12,12,5,10,5,0]
,[974,100,0,0,0,0,0,0,"Warlock Battle Set",0,"When receiving physical damage, small chance that for 10 seconds your armor will have <font color=grey>ghostring</font> effect<BR>Increases damage received from all Non-Demihuman monster by 3 times",4,3,15,12,151,20,0]
,[975,100,0,0,0,0,0,0,"Robe of Order Set",0,"When receiving physical damage, small chance that for 10 seconds your armor will have <font color=grey>ghostring</font> effect<BR>Increases damage received from all Non-Demihuman monster by 3 times",4,3,15,12,7037,50,91,6,94,6,0]
,[976,100,0,0,0,0,0,0,"Elite Marksmans Set",0,"Increases damage received from all Non-Demihuman monster by 3 times",5,3,15,12,78,10,74,25,0]
,[977,100,0,0,0,0,0,0,"Elite Shooter Set",0,"Increases damage received from all Non-Demihuman monster by 3 times",5,3,15,12,78,10,74,25,0]
,[978,64,87,1,0,0,0,70,"Medal of Honor [Swordsman]","","ATK + 5%<BR>Add 1% chance of auto casting Stun on the enemy when attacking",89,5,8,10,13,500,14,50,0]
,[979,64,52,1,0,0,0,70,"Medal of Honor [Thief]","","ATK + 5%<BR>Add 1% chance of auto casting Poison on the enemy when attacking",89,5,9,10,13,300,14,80,0]
,[980,64,53,1,0,0,0,70,"Medal of Honor [Acolyte]","","ATK + 5%<BR>Add 1% chance of auto casting Silence on the enemy when attacking",89,5,19,6,13,600,0]
,[981,64,55,1,0,0,0,70,"Medal of Honor [Mage]","","ATK + 5%<BR>Add 1% chance of auto casting Stone on the enemy when attacking",89,5,19,6,13,600,0]
,[982,64,54,1,0,0,0,70,"Medal of Honor [Archer]","","ATK + 5%<BR>Add 1% chance of auto casting Blind on the enemy when attacking",89,5,10,10,13,300,14,80,0]
,[983,64,56,1,0,0,0,70,"Medal of Honor [Merchant]","","ATK + 5%<BR>Add 1% chance of auto casting Curse on the enemy when attacking",89,5,12,10,13,500,14,50,0]
,[984,64,145,1,0,0,0,70,"Sheriff Badge","","ATK + 5%<BR>Add 1% chance of auto casting Blind on the enemy when attacking",89,5,10,10,13,300,14,80,0]
,[985,62,1001,4,0,1,70,70,"Naght Sieger Burning Manteau","",0,15,5,89,1,19,2,43,2,0]
,[986,60,1079,5,0,0,170,70,"Chameleon Armor","","A mysterious armor that can change its abilities depending on its owner.<br>Increases HP and SP depending by base level.<br>Adds a chance immune from all magic skill for 2 sec When receiving magical attack.<br><b>[Swordman, Merchant, Thief Class]</b><br>DEF + 3<br><b>[Mage, Archer, Acolyte Class]</b><br>MDEF + 5",0]
,[987,60,1079,3,0,1,100,0,"Sprint Mail","","[description translation missing - ItemID: 987]",3,1,75,5,92,3,0]
,[988,60,122,4,0,1,30,70,"Gandora","",0,2,1,9,5,12,2,0]
,[989,60,1079,5,0,1,100,0,"Armor of Naga","","[description translation missing - ItemID: 989]",19,2,0]
,[990,60,1054,6,0,1,40,75,"Improved Tights","",0,19,2,11,3,0]
,[991,60,1051,9,0,1,350,82,"Life Link","",0,3,2,19,5,75,50,0]
,[992,61,1051,5,0,1,100,50,"Tournament Shield",0,0,80,1,0]
,[993,61,1079,3,0,1,50,0,"Shield of Naga","","When receiving physical damage there's low chance physical damage will be reflected to the attacker for 5 seconds<br>The chance for the reflect rate is around 3% for each refine",19,3,0]
,[994,61,128,4,0,1,80,70,"Shadow Guard","",0,0]
,[995,100,0,0,0,0,0,0,"Shadow Guard Set",0,"When attacking, adds a high chance to inflict [Blind] on the enemy and get FLEE + 20",0]
,[996,62,1079,3,0,1,50,0,"Tendrilion Skin","",0,62,5,61,5,52,5,53,5,0]
,[997,62,123,2,0,1,50,70,"Musika","","[description translation missing - ItemID: 997]",19,3,0]
,[998,63,1079,2,0,1,30,0,"Sprint Shoes","",0,2,1,76,5,0]
,[999,100,0,0,0,0,0,0,"Sprint Set",0,0,15,7,16,7,73,-3,74,15,0]
,[1000,64,1079,0,0,0,10,70,"Angelic Ring","","[description translation missing - ItemID: 1000]",4,2,5,1,19,2,0]
,[1001,64,1079,0,0,0,10,0,"Sprint Ring","",0,73,-10,74,5,0]
,[1002,64,1079,0,0,1,20,0,"Pinguicula Corsage","",0,19,2,14,25,0]
,[1003,64,122,1,0,0,10,80,"Cold Heart","",0,2,3,0]
,[1004,100,0,0,0,0,0,0,"Cold Heart Set","","Increases Attack speed by the refine rate of your weapon",28,8,0]
,[1005,64,128,1,0,0,10,80,"Black Cat","",0,5,3,0]
,[1006,100,0,0,0,0,0,0,"Black Cat Set","","Increases HIT and decreases casting time by the refine level of your weapon",29,8,0]
,[1007,64,1054,0,0,0,20,84,"Cursed Star","","[description translation missing - ItemID: 1007]",5,2,6,-1,19,3,0]
,[1008,100,0,0,0,0,0,0,"Cursed Star Set",0,"[description translation missing - ItemID: 1008]",17,25,0]
,[1009,64,1079,1,0,1,12,90,"Linen Glove","",0,2,2,5,1,19,1,0]
,[1010,100,0,0,0,0,0,0,"Improved Tights Set",0,0,11,5,0]
,[1011,50,0,2,0,0,150,60,"Antenna","",0,9,5,10,5,19,5,220,18,221,118,0]
,[1012,50,0,0,0,0,100,30,"Her National Treasury","","Allows usage of the skill [Loud Exclamation]Lv 1",12,-10,193,1,0]
,[1013,50,0,2,0,1,10,0,"Fanta Orange Can","",0,0]
,[1014,50,0,2,0,1,10,0,"Fanta Grape Can","",0,0]
,[1015,50,0,2,0,1,10,0,"Coca-Cola Can","",0,0]
,[1016,50,0,6,0,0,10,0,"Paper Bag Hat","","<b>Upper, Mid and Low Headgear</b>",57,4,151,4,13,100,0]
,[1017,50,0,2,0,1,10,0,"Flower Tea Cap","",0,2,1,0]
,[1018,50,0,2,0,1,10,0,"Coca-Cola Cap","",0,1,1,0]
,[1019,50,0,0,0,1,10,10,"Happy Wig","",0,60,1,221,48,0]
,[1020,50,0,0,0,0,10,50,"Umbrella Hat","",0,61,3,0]
,[1021,50,0,2,0,0,30,10,"Little Angel Doll","",0,5,3,221,53,0]
,[1022,50,0,6,0,0,20,0,"Bread Bag","","[description translation missing - ItemID: 1022]",13,100,57,4,131,4,193,1,0]
,[1023,51,0,1,0,0,10,50,"Odin Mask","","",77,2,0]
,[1024,50,0,3,0,0,20,0,"Pumpkin Hat2007","","[description translation missing - ItemID: 1024]",0]
,[1025,52,0,0,0,0,10,0,"Reindeer Nose","","[description translation missing - ItemID: 1025]",0]
,[1026,52,0,5,0,0,10,0,"Santa's Beard","","[description translation missing - ItemID: 1026]",0]
,[1027,50,0,0,0,1,50,60,"Clarice Doll Hat","",0,193,1,4,2,57,5,0]
,[1028,50,0,0,0,1,50,60,"Bennit Doll Hat","","When attacking with an ATK based attack, there's a low chance to increase ASPD by 5% for 6 seconds",193,1,3,2,57,5,0]
,[1029,50,0,1,0,0,80,10,"Pagdayaw","","[description translation missing - ItemID: 1029]",5,2,89,3,0]
,[1030,64,0,1,0,1,10,1,"Aumdura's Benefit","",0,7,1,19,1,0]
,[1031,50,0,10,0,0,20,0,"Wings of Victory","",0,19,10,194,1,0]
,[1032,50,0,3,0,0,40,0,"Carmen Miranda Hat","","[description translation missing - ItemID: 1032]",19,3,0]
,[1033,50,0,0,0,1,10,10,"Marvelous Wig","",0,60,1,221,48,0]
,[1034,50,0,5,0,0,200,50,"Dragon Helm","","[description translation missing - ItemID: 1034]",39,20,0]
,[1035,50,0,2,0,1,10,30,"Wind Guidepost","",0,2,2,220,23,0]
,[1036,50,0,3,0,1,80,1,"Parade Hat","","[description translation missing - ItemID: 1036]",19,2,74,5,0]
,[1037,51,0,1,0,0,10,50,"Darkness Eyes","",0,5,1,154,100,0]
,[1038,51,0,1,0,0,80,50,"Wings of Reginleif","",0,61,3,63,3,67,3,69,3,0]
,[1039,50,0,5,0,1,10,10,"Hyegun Hat","",0,19,3,56,10,193,1,0]
,[1040,50,0,0,0,0,30,0,"Bunny Top Hat","","Has a small chance to cast Level 5 Agility",2,3,0]
,[1041,9,1,40,4,1,50,50,"Gentleman Staff","",0,89,15,5,1,0]
,[1042,100,0,0,0,0,0,0,"Gentleman Set",0,"Refine rate increases MATK",5,2,4,2,76,5,0]
,[1043,50,0,4,0,1,80,30,"Executioner Hood","","[description translation missing - ItemID: 1043]",154,100,153,7,0]
,[1044,50,0,2,0,0,10,24,"Scarves","",0,19,2,9,5,0]
,[1045,50,0,0,0,1,10,10,"Shiny Wig","",0,60,1,221,48,0]
,[1046,50,0,3,0,0,20,0,"Pumpkin Hat 2008","","[description translation missing - ItemID: 1046]",0]
,[1047,50,1,2,0,0,70,38,"Poporing Cap","",0,0]
,[1048,50,0,2,0,0,50,0,"Tiraya Bonnet","",0,3,2,0]
,[1049,52,0,1,0,0,10,0,"Sweet Candy","",0,0]
,[1050,50,0,5,0,0,300,80,"Dark Knight Mask [Type A]","",0,1,3,0]
,[1051,64,0,1,0,0,50,80,"Dark Knight Belt [Type A]","",0,1,2,2,1,0]
,[1052,64,0,1,0,0,50,80,"Dark Knight Glove [Type A]","","When attacking with an ATK based attack, there's a low chance to increase ASPD by 2% for 10 seconds",0]
,[1053,100,0,0,0,0,0,0,"Dark Knight Set [Type A]",0,0,89,10,4,5,58,10,0]
,[1054,50,0,3,0,1,100,30,"Bijofnil Wings","","Recover 2% HP each 10 seconds<br>Recover 1% SP each 10 seconds",7,2,60,5,61,5,62,5,63,5,64,5,65,5,66,5,67,5,68,5,69,5,0]
,[1055,50,0,1,0,0,30,30,"Shaman Hair Ornaments","",0,19,3,60,5,0]
,[1056,64,0,0,0,0,10,30,"Shaman Ring","","SP cost of skills - 5%",0]
,[1057,64,0,0,0,0,10,30,"Shaman Earring","",0,4,2,0]
,[1058,100,0,0,0,0,0,0,"Shaman Set",0,"Skill casts cannot be interrupted (except in WoE)<br>Increases Max HP by 10 times base level<br>Increases Max SP by 2 times base level",73,15,0]
,[1059,50,0,1,0,0,50,0,"Poring Cake Hat","",0,6,2,0]
,[1060,50,0,1,0,0,10,0,"Cute Santa Hat","",0,19,1,6,1,0]
,[1061,10,64,120,4,1,170,70,"Bard Bow","",0,4,2,76,10,0]
,[1062,50,0,3,0,0,10,0,"Luise's Santa Hat","","[description translation missing - ItemID: 1062]",6,1,19,1,57,5,56,5,58,5,0]
,[1063,50,0,1,0,0,40,0,"Fish Head Hat","",0,221,97,0]
,[1064,50,0,3,0,1,10,1,"Diadem","","[description translation missing - ItemID: 1064]",4,1,89,3,16,3,73,-3,91,3,94,3,0]
,[1065,50,0,1,0,0,30,20,"Yoyo Cap","",0,220,22,0]
,[1066,50,0,1,0,1,10,0,"Large Hibiscus","",0,19,15,0]
,[1067,50,0,2,0,0,80,30,"Grand-Peco Hairband","","[description translation missing - ItemID: 1067]",1,2,15,-10,83,15,0]
,[1068,50,0,4,0,1,100,70,"Helmet of the Abyss","",0,77,10,79,-10,0]
,[1069,50,0,3,0,1,50,40,"Sky Hat","","[description translation missing - ItemID: 1069]",6,2,19,5,0]
,[1070,50,0,2,0,1,10,0,"Canada Dry Sakura Mist Cap","",0,5,1,0]
,[1071,50,0,2,0,1,10,0,"Tea and Cherrymilk Hat","",0,3,1,0]
,[1072,50,0,2,0,1,10,0,"Fanta Zero Lemon Can","",0,0]
,[1073,50,0,0,0,1,10,10,"Fantastic Wig","",0,60,1,221,48,0]
,[1074,50,0,4,0,1,40,0,"Cruiser Cap","","[description translation missing - ItemID: 1074]",80,3,1,1,0]
,[1075,50,0,2,0,1,10,0,"Flower Hat","",0,13,80,14,20,0]
,[1076,1,0,120,4,0,0,80,"Glorious Gladius","","Add a chance of auto casting [Lex Devina]Lv 1 on an enemy when attacking<br><b>[Refine Rate 6~10]</b><br>Pierces Defense of DemiHuman monster by 5%<br><font color=red>[Slaughter]Lv 1:</font> Increases physical damage bonus by (Upgrade - 4) ^ 2<br><b>[Refine Rate 9~10]</b><br>Adds a 25% chance of inflicting [Bleed] in a 5x5 area when using [Backstab]",37,75,307,20,221,106,194,1,0]
,[1077,2,0,130,4,0,0,80,"Glorious Flamberge","","<b>[Refine Rate 6~10]</b><br>Pierces Defense of DemiHuman monster by 5%<br><font color=red>[Slaughter]Lv 1:</font> Increases physical damage bonus by (Upgrade - 4) ^ 2<br><b>[Refine Rate 7~10]</b><br>ASPD +5%<br><b>[Refine Rate 9~10]</b><br>ASPD +5%<br>Adds a 20% chance of using [Critical Wound]Lv 2 on the target when [Bash] is used",37,75,307,20,194,1,0]
,[1078,2,0,130,4,0,0,80,"Glorious Rapier","","Adds Refine Level -5 INT<br><b>[Refine Rate 6~10]</b><br>Reduces SP consumption of skill by 10%<br><b>[Refine Rate 9~10]</b><br>INT + 5",4,6,89,10,194,1,0]
,[1079,2,0,130,4,0,0,80,"Glorious Holy Avenger","","Adds Refine Level -5 INT<br><b>[Refine Rate 6~10]</b><br>Reduces SP consumption of skill by 10%<br><b>[Refine Rate 9~10]</b><br>Add a chance of auto casting [Lex Devina]Lv 1 when using [Pressure]<br><b>[Refine Rate 10]</b><br>INT + 5",4,6,89,10,194,1,0]
,[1080,3,0,220,4,0,0,80,"Glorious Claymore","","<b>[Refine Rate 6~10]</b><br>Pierces Defense of DemiHuman monster by 5%<br><font color=red>[Slaughter]Lv 2:</font> Increases physical damage bonus by (Upgrade - 3) ^ 2<br><b>[Refine Rate 9~10]</b><br>Adds a 3% chance of using [Aura Blade]Lv 1 or the user's level if its higher, on the user when doing a physical attack<br>Adds a 3% chance of using [Concentration]Lv 1 or the user's level if its higher, on the user when doing a physical attack",37,70,307,25,194,1,0]
,[1081,4,0,130,4,0,0,80,"Glorious Spear","","<b>[Refine Rate 6~10]</b><br>Pierces Defense of DemiHuman monster by 5%<br><font color=red>[Slaughter]Lv 1:</font> Increases physical damage bonus by (Upgrade - 4) ^ 2<br>Pierces Defense of DemiHuman monster by 5%<br>Aspd +10%<br><b>[Refine Rate 9~10]</b><br>If used by a Knight job type, adds a 20% chance of using [Critical Wound]Lv 2 on the target when [Pierce] is used<br>If used by a Crusader job type, adds a 10% chance of using [Pressure]Lv 5 on the target when doing a physical attack",37,95,307,20,194,1,0]
,[1082,5,0,220,4,0,0,80,"Glorious Lance","","<b>[Refine Rate 6~10]</b><br>Pierces Defense of DemiHuman monster by 5%<br><font color=red>[Slaughter]Lv 1:</font> Increases physical damage bonus by (Upgrade - 4) ^ 2<br><b>[Refine Rate 9~10]</b><br>If used by a Knight job type, adds a 20% chance of using [Critical Wound]Lv 2 on the target when [Pierce] is used<br>If used by a Crusader job type, adds a 20% chance of using [Pressure]Lv 5 on the target when doing a physical attack",37,70,307,25,194,1,0]
,[1083,9,1,70,4,0,0,80,"Glorious Destruction Staff","","Each refine increases MATK + 1%<br><b>[Refine Rate 6~10]</b><br><font color=red>[Desctruction]Lv 1</font>: Increases magic damage bonus and magical defense bypassing by (Upgrade - 5) * 2<br>Increases magical defense bypassing by 5%.<br><b>[Refine Rate 9~10]</b><br>Adds a 20% chance of auto casting [Safety Wall]Lv 10 when casting Level 10 [Lord of Vermillion], [Meteor Storm], [Storm Gust] on yourself",195,1,89,15,177,15,317,25,194,1,0]
,[1084,9,1,70,4,0,0,80,"Glorious Arc Wand","","<b>[Refine Rate 6~10]</b><br>Increases magic defense bypassing by 5%<br><b>[Refine Rate 9~10]</b><br>MATK + 5%<br>Decreases cast time by 5%<br>Decreases aftercast delay by 5%",89,15,177,15,317,25,194,1,0]
,[1085,9,1,70,4,0,0,80,"Glorious Cure Wand","","<b>[Refine Rate 6~10]</b><br><font color=red>[Blessing]Lv 1:</font> Increases healing bonus bonus by (Upgrade - 5) * 2<br>Increases the effectiveness of your Heal by 5%<br>When you attack using magical ability, it will ignore 5% of their MDEF<br><b>[Refine Rate 9~10]</b><br>Add a chance of auto casting [Heal]Lv 10 when using skill Heal<br><b>[Refine Rate 10]</b><br>Increases the effectiveness of your [Heal] by 10%",89,15,91,14,94,14,74,10,194,1,0]
,[1086,8,0,130,4,0,0,80,"Glorious Morning Star","","<b>[Refine Rate 6~10]</b><br>Pierces Defense of DemiHuman monster by 5%<br>ASPD +5%<br><font color=red>[Slaughter]Lv 1:</font>Increases physical damage bonus by (Upgrade - 4) ^ 2<br><b>[Refine Rate 9~10]</b><br>ASPD +5%<br>Adds a 20% chance of inflicting [Stun] on the target when doing a physical attack",37,75,307,20,194,1,0]
,[1087,7,0,220,4,0,0,80,"Glorious Two-handed Axe",0,"<b>[Refine Rate 6~10]</b><br>Pierces Defense of DemiHuman monster by 5%<br><font color=red>[Slaughter]Lv 2:</font> Increases physical damage bonus by (Upgrade - 3) ^ 2<br>Adds a 5% chance of using [Fatal Wound]Lv 1 on the target when doing a physical attack.<br><b>[Refine Rate 9~10]</b><br>Attack Speed + 10%<br>Increases the chance of using [Critical Wound]Lv 1 to 10%<br>Adds a 20% chance of auto casting [Critical Wound]Lv 2 when using [Mammonite]",37,70,307,25,194,1,0]
,[1088,6,70,130,4,0,0,80,"Glorious Cleaver",0,"<b>[Refine Rate 6~10]</b><br>Attack Speed + 5%<br><font color=red>[Slaughter]Lv 1:</font> Increases physical damage bonus by (Upgrade - 4) ^ 2<br>Pierces Defense of DemiHuman monster by 5%<br><b>[Refine Rate 9~10]</b><br>Attack Speed + 5%<br>Adds 5% chance of auto casting [Critical Wound]Lv 1 when dealing physical damage<br>Adds a 20% chance of auto casting [Critical Wound]Lv 2 when using [Mammonite]",37,75,307,20,194,1,0]
,[1089,10,0,100,4,0,0,80,"Glorious Hunter Bow",0,"Critical Damage Refine Level x 2<br><b>[Refine Rate 6~10]</b><br>Pierces Defense of DemiHuman monster by 5%<br><font color=red>[Slaughter]Lv 1:</font> Increases physical damage bonus by (Upgrade - 4) ^ 2<br><b>[Refine Rate 9~10]</b><br>[Double Strafe] damage +20%",37,55,307,20,194,1,0]
,[1090,11,0,140,4,0,0,80,"Glorious Bloody Roar",0,"<b>[Refine Rate 6~10]</b><br>Pierces Defense of DemiHuman monster by 5%<br><font color=red>[Slaughter]Lv 1:</font> Increases physical damage bonus by (Upgrade - 4) ^ 2<br><b>[Refine Rate 9~10]</b><br>Adds a 7% chance for when dealing physical damage, the user will have max Aspd for 3 seconds",37,70,307,20,194,1,0]
,[1091,11,0,140,4,0,0,80,"Glorious Jamadhar",0,"<b>[Refine Rate 6~10]</b><br><font color=red>[Slaughter]Lv 1:</font> Increases physical damage bonus by (Upgrade - 4) ^ 2<br>Increases the critical rate on [Demi-Human] race targets by 5<br><b>[Refine Rate 9~10]</b><br>Adds a 7% chance for when dealing physical damage, the user will have max Aspd for 3 seconds",37,70,70,20,194,1,0]
,[1092,14,0,50,4,0,0,80,"Glorious Guitar",0,"<b>[Refine Rate 6~10]</b><br><font color=red>[Slaughter]Lv 1:</font> Increases physical damage bonus by (Upgrade - 4) ^ 2<br>Pierces Defense of DemiHuman monster by 5%<br><b>[Refine Rate 9~10]</b><br>Adds a 10% chance of using [Tarot Card of Fate]Lv 5 on the target when [Arrow Vulcan] is used",37,95,307,20,194,1,0]
,[1093,15,0,50,4,0,0,80,"Glorious Lariat",0,"<b>[Refine Rate 6~10]</b><br><font color=red>[Slaughter]Lv 1:</font> Increases physical damage bonus by (Upgrade - 4) ^ 2<br>Pierces Defense of DemiHuman monster by 5%<br><b>[Refine Rate 9~10]</b><br>Adds a 10% chance of using [Tarot Card of Fate]Lv 5 on the target when [Arrow Vulcan] is used",37,95,307,20,194,1,0]
,[1094,12,0,90,4,0,0,80,"Glorious Tablet",0,"<b>[Refine 6~10]</b><br><font color=red>[Slaughter]Lv 1:</font> Increases physical damage bonus by (Upgrade - 4) ^ 2<br>Pierces Defense of DemiHuman monster by 5%<br><b>[Refine 9~10]</b><br>Adds a 3% chance for when dealing physical damage, the user will gain Atk +200 for 3 seconds",89,15,37,80,307,25,194,1,0]
,[1095,12,0,90,4,0,0,80,"Glorious Apocalypse",0,"<b>[Refine 6~10]</b><br><font color=red>[Slaughter]Lv 1:</font> Increases physical damage bonus by (Upgrade - 4) ^ 2<br>Pierces Defense of DemiHuman monster by 5%<br><b>[Refine 9~10]</b><br>MAtk +5%<br>Reduces the cast time of skills by 5%<br>Reduces the skill usage delay by 5%",89,15,37,80,317,25,194,1,0]
,[1096,13,0,30,4,0,0,80,"Glorious Claw",0,"<b>[Refine Rate 6~10]</b><br><font color=red>[Slaughter]Lv 1:</font> Increases physical damage bonus by (Upgrade - 4) ^ 2<br>Pierces Defense of DemiHuman monster by 5%<br><b>[Refine Rate 9~10]</b><br>Adds a (Upgrade*10 - 50)% chance of auto casting Level 1 Occult Impact when dealing physical damage<br>Adds a (Upgrade*10 - 50)% chance of auto casting Level 1 Decrease Agility when dealing physical damage",37,95,307,25,194,1,0]
,[1097,13,0,30,4,0,0,80,"Glorious Fist",0,"<b>[Refine 6~10]</b><br><font color=red>[Slaughter]Lv 1:</font> Increases physical damage bonus by (Upgrade - 4) ^ 2<br>Pierces Defense of DemiHuman monster by 5%<br><b>[Refine Rate 9~10]</b><br>Removes the cast time for [Asura Strike]<br>Automaticly casts [Dangerous Soul Collect] when [Critical Explosion] is used",37,95,307,20,194,1,0]
,[1098,16,0,55,4,0,0,80,"Glorious Shuriken",0,"Adds a 5% chance for when performing a ATK based attack, the user will deal doubled damage with [Throw Huuma Shuriken] and [Killing Stroke] for 10 seconds<br><b>[Refine Rate 6~10]</b><br>Pierces Defense of DemiHuman monster by 5%<br><font color=red>[Slaughter]Lv 2:</font> Increases physical damage bonus by (Upgrade - 3) ^ 2<br><b>[Refine Rate 9~10]</b><br>Adds a 20% chance of using [Fatal Wound] Lv 2 on the target when [Throw Huuma Shuriken] is used<br>Casts [Heal] Lv 10 on the user after [Killing Stroke] is used",37,95,307,20,89,15,194,1,0]
,[1099,17,0,80,4,0,0,80,"Glorious Pistol",0,"<b>[Refine Rate 6~10]</b><br>Pierces Defense of DemiHuman monster by 5%<br><font color=red>[Slaughter]Lv 1:</font> Increases physical damage bonus by (Upgrade - 4) ^ 2<br><b>[Refine Rate 9~10]</b><br>Each upgrade increases the damage inflicted with [Rapid Shower] by 2%<br>Automaticly casts [Coin Flip] Lv 1 when [Rapid Shower] is used",37,55,307,20,194,1,0]
,[1100,18,0,90,4,0,0,80,"Glorious Rifle",0,"<b>[Refine Rate 6~10]</b><br>Pierces Defense of DemiHuman monster by 5%<br><font color=red>[Slaughter]Lv 1:</font> Increases physical damage bonus by (Upgrade - 4) ^ 2<br><b>[Refine Rate 9~10]</b><br>Increases the cast time for [Tracking] by 25%<br>Each upgrade increases the damage inflicted with [Tracking] by 3%",37,75,307,20,5418,30,194,1,0]
,[1101,20,0,90,4,0,0,80,"Glorious Gatling Gun",0,"[description translation missing - ItemID: 1101]",37,35,307,20,5418,30,194,1,0]
,[1102,19,0,110,4,0,0,80,"Glorious Shotgun",0,"[description translation missing - ItemID: 1102]",37,55,307,20,5418,30,194,1,0]
,[1103,21,0,330,4,0,0,80,"Glorious Grenade Launcher",0,"[description translation missing - ItemID: 1103]",37,35,307,20,5418,30,194,1,0]
,[1104,60,1,0,0,0,0,81,"Glorious Suit","",0,15,20,57,7,0]
,[1105,60,1,0,0,0,0,61,"Glorious Popularized Suit","",0,13,600,76,10,0]
,[1106,60,1,0,0,0,0,0,"Glorious Mass-Production Suit","",0,13,500,0]
,[1107,63,1,0,0,0,0,81,"Glorious Shoes","","",15,10,57,4,0]
,[1108,63,1,0,0,0,0,61,"Glorious Popularized Shoes","",0,15,5,16,5,0]
,[1109,63,1,0,0,0,0,0,"Glorious Mass-Production Shoes","",0,15,5,0]
,[1110,62,1,0,0,0,0,81,"Glorious Muffler","",0,15,5,57,5,0]
,[1111,64,1,0,0,0,0,81,"Glorious Ring","","+5% recovery with skill [Potion Pitcher]",61,10,62,10,63,10,64,10,13,300,12,5,73,-3,91,5,94,5,0]
,[1112,64,1,0,0,0,0,61,"Glorious Popularized Ring","",0,7,2,0]
,[1113,64,1,0,0,0,0,0,"Glorious Mass-Production Ring","",0,7,1,0]
,[1114,100,0,0,0,0,0,0,"Glorious Clothing Set",0,"Potion Pitcher effectiveness by + 3%",80,5,89,5,91,3,94,3,152,100,0]
,[1115,100,0,0,0,0,0,0,"Ring + Battlefield Accessories",0,"",80,5,89,3,91,5,94,5,0]
,[1116,64,0,0,0,0,10,0,"Novice Figure","","<b>[Novice Class]</b><br>MHP + 30",13,70,0]
,[1117,64,0,0,0,0,10,0,"Swordman Figure","","<b>[Crusader Class]</b><br>DEF + 2",3,1,0]
,[1118,64,0,0,0,0,10,0,"Acolyte Figure","","<b>[Acolyte Class]</b><br>MSP + 50",4,1,0]
,[1119,64,0,0,0,0,10,0,"Magician Figure","","<b>[Mage Class]</b><br>SP Regen + 5%",4,1,0]
,[1120,64,0,0,0,0,10,0,"Archer Figure","","<b>[Archer Class]</b><br>ATK + 10",5,1,0]
,[1121,64,0,0,0,0,10,0,"Thief Figure","","<b>[Thief Class]</b><br>ASPD + 3%",2,1,0]
,[1122,64,0,0,0,0,10,0,"Merchant Figure","","<b>[Merchant Class]</b><br>CRIT + 5",1,1,0]
,[1123,50,0,2,0,1,10,1,"Black Tea Kochakaden Hat","",0,2,1,0]
,[1124,50,0,3,0,1,100,0,"Magnolia Hat","",0,220,41,151,5,193,1,0]
,[1125,50,0,1,0,1,20,0,"Crown Parrot","",0,156,100,4,1,221,107,193,1,0]
,[1126,50,0,0,0,0,10,0,"Red Hat","","[description translation missing - ItemID: 1126]",0]
,[1127,50,0,4,0,0,50,30,"Crab Nipper Hairpin","","[description translation missing - ItemID: 1127]",221,104,0]
,[1128,50,0,2,0,0,70,10,"Notice Board","",0,0]
,[1129,50,0,2,0,0,30,30,"Noble Hat","","0.7% chance of auto casting [Adrenaline Rush]Lv 1 when receiving ATK based damage",1,2,0]
,[1130,50,0,3,0,1,80,80,"Emperor's Laurel Crown","",0,7,1,19,3,0]
,[1131,50,79,0,0,0,75,75,"Lion Mask","","[description translation missing - ItemID: 1131]",19,1,0]
,[1132,51,0,1,0,0,10,70,"White Fox Mask","","[description translation missing - ItemID: 1132]",2,1,11,2,0]
,[1133,999,0,0,0,0,10,30,"Pirate Dagger","",0,71,1,0]
,[1134,1,0,50,1,3,0,0,"Novice Cutter","",0,193,1,0]
,[1135,999,0,63,1,3,0,0,"Novice Main-Gauche[3]","",0,193,1,0]
,[1136,2,0,59,1,3,0,2,"Novice Falchion","",0,193,1,0]
,[1137,8,0,57,1,3,0,2,"Novice Mace","",0,193,1,0]
,[1138,7,1,100,1,3,0,3,"Novice Battle Axe","",0,193,1,0]
,[1139,10,0,49,1,3,0,4,"Novice Composite Bow","",0,193,1,0]
,[1140,9,0,15,1,3,0,0,"Novice Rod","",0,89,16,193,1,0]
,[1141,999,0,0,0,0,20,0,"Fisherman's Scarf","","[description translation missing - ItemID: 1141]",0]
,[1142,999,0,0,0,0,25,0,"Fishing Boots","","[description translation missing - ItemID: 1142]",0]
,[1143,999,0,0,0,0,10,0,"Lure","","[description translation missing - ItemID: 1143]",0]
,[1144,51,0,0,0,0,30,50,"Tiger Face","","[description translation missing - ItemID: 1144]",32,5,0]
,[1145,50,0,1,0,0,100,10,"Hermose's cap","",0,12,10,80,-10,89,-20,0]
,[1146,50,0,1,0,1,20,0,"Katyusha Flowers","","[description translation missing - ItemID: 1146]",5132,15,5133,15,7132,25,7133,25,0]
,[1147,51,0,0,0,0,10,70,"Ifrit Ear","",0,19,3,1,1,63,5,61,-5,5051,2,5125,2,5122,2,5006,2,5070,2,5007,2,0]
,[1148,52,0,0,0,0,10,50,"Red Nose","","[description translation missing - ItemID: 1148]",6,1,0]
,[1149,50,0,3,0,0,300,75,"Horn Helmet","","[description translation missing - ItemID: 1149]",13,100,60,-30,61,-30,62,-30,63,-30,64,-30,65,-30,66,-30,67,-30,68,-30,69,-30,0]
,[1150,50,0,0,0,1,50,0,"New Cowboy Hat","",0,17,15,9,-5,0]
,[1151,50,0,1,0,1,75,45,"Quati Hat","",0,193,1,2,3,0]
,[1152,50,0,3,0,0,25,1,"Corona Torch","",0,193,1,63,20,220,34,0]
,[1153,50,0,2,0,0,20,1,"Pinwheel Hat","",0,15,5,16,5,0]
,[1154,50,0,0,0,1,10,45,"True Love","","[description translation missing - ItemID: 1154]",193,1,19,10,73,-10,0]
,[1155,50,0,1,0,0,80,1,"Magic Rabbit Hat","",0,4,1,14,50,221,109,221,110,221,111,221,89,0]
,[1156,1,1052,110,2,3,50,50,"Krieg","","Adds a 10% chance of inflicting [Bleeding] on the target when using [Back Stab]",5169,15,0]
,[1157,1,1052,135,3,2,5,50,"Weihna","","Adds a 10% chance of inflicting [Poison] on the target when using [Raid]<br>Adds a chance for when dealing physical damage, increase phyical damage by 10% for 5 seconds",0]
,[1158,2,1051,170,3,1,150,50,"Roubel","","Adds a 0.5% chance for when dealing physical damage, the damage inflicted with [Bash] and [Bowling Bash] will be increased by 20% for 15 seconds",0]
,[1159,3,51,180,4,1,200,80,"Veteran Sword","","If the user has mastered [Bash], increases the damage with it by 50%<br>If the user has mastered [Bowling Bash], increases the damage with it by 50%",1,1,5,1,0]
,[1160,3,1051,200,2,3,380,50,"Krasnaya","","If user's base Str is 95 or higher: ATK + 20",0]
,[1161,8,53,160,3,2,180,80,"Veteran Hammer","","For each level of [Divine Protection] the user has learned, the power of the user's [Heal] is increased by 1%<br>For each level of [Mace Mastery] the user has learned, Crit +2",4,1,6,1,0]
,[1162,8,1001,130,3,2,50,50,"Erde","","",14,50,5244,20,5248,20,91,10,94,10,0]
,[1163,8,1001,130,3,2,50,50,"Red Broad Mace","","Every time you kill a monster, low chance to drop random Potion<br>If user's base Str is 77 or higher: Causes Stun effect to enemies by 5% chance",13,200,5244,20,5248,20,0]
,[1164,6,1070,140,3,2,150,50,"Berchel Axe","","If the user's base Luk is 90 or higher, Atk +20<br>If the user's base Dex is 90 or higher, Crit +5<br>If the user's base Dex and Luk are 90 or higher, increases the damage inflicted with [Mammonite] by 15%",0]
,[1165,7,56,250,3,2,300,80,"Veteran Axe","","If the player has mastered Smith Dagger, ATK + 10<br>If the player has mastered Smith Sword, ATK + 10<br>If the player has mastered Smith Two-hand Sword, ATK + 10<br>If the player has mastered Smith Knuckle, ATK + 10<br>If the player has mastered Smith Spear, ATK + 10<br>If the player has mastered Smith Axe, ATK + 10<br>If the player has mastered Smith Mace, ATK + 10",3,2,0]
,[1166,7,126,210,4,0,270,75,"Bradium Stone Hammer","","Additional 5% chance to Stun when using the skill Hammer Fall<br>The chance to Stun with Hammer Fall increases by 2% per refine on the weapon",0]
,[1167,7,1070,330,3,1,400,50,"Giant Axe","","If user's base Str is 95 or higher: HIT + 10, ASPD + 3 %",5326,15,0]
,[1168,9,77,100,4,0,10,70,"Dead Tree Staff","","INT bonus increases if refined past + 6, at the cost of reduced Max HP and Max SP<br><b>[Refine Rate 6]</b><br>INT + 1, MaxHP - 200, MaxSP - 100<br><b>[Refine Rate 7]</b><br>INT + 2, MaxHP - 400, MaxSP - 200<br><b>[Refine Rate 8]</b><br>INT + 3, MaxHP - 600, MaxSP - 300<br><b>[Refine Rate 9]</b><br>INT + 4, MaxHP - 800, MaxSP - 400<br><b>[Refine Rate 10]</b><br>INT + 5, MaxHP - 1000, MaxSP - 500",89,15,4,4,0]
,[1169,9,1055,30,3,2,50,50,"Lacrima Stick","","<b>For each upgrade:</b><br>MDef +1<br>Increases the damage inflicted with [Storm Gust] by 1%<br><b>[Refine Rate 10]</b><br>Reduces the cast time for [Storm Gust] by 8%",89,15,4,4,19,1,0]
,[1170,9,1053,30,3,1,50,50,"Croce Staff","","Adds a chance of using [Blessing]Lv 1, or the user's level if its higher, on the target when [Heal] is used",20,6,89,15,4,4,0]
,[1171,9,1055,30,4,0,50,50,"Staff Of Bordeaux","","If character has learned [Dragonology], SP Cost is reduced by 1%, INT + 3",89,15,4,2,5,1,0]
,[1172,9,55,30,4,0,100,50,"Chronos","","Adds a chance for when dealing magic damage, the user will gain MAtk +12% and SP cost of skills will be increased by 20% for 5 seconds<br><b>For every two upgrades:</b><br> Int +1<br>Max HP +50",4,3,13,300,89,20,195,1,0]
,[1173,9,1053,30,3,1,100,50,"Burnt Rod","","Adds a chance of 200 SP being restored to the user when [Heal] is used<br><b>For every upgrade:</b><br>Increase MATK by 1%",195,1,20,6,89,15,4,6,3,2,0]
,[1174,10,1054,100,3,2,100,50,"Falken Blitz","",0,5272,10,5040,10,5044,10,0]
,[1175,11,122,120,3,2,120,50,"Krishna","","",221,126,5084,10,0]
,[1176,11,122,130,3,2,100,50,"Chakram","","HIT + 10 when Katar Mastery is fully learned",5264,20,0]
,[1177,50,1,5,0,0,90,55,"Large Orc Hero Helm","","[description translation missing - ItemID: 1177]",1,2,3,1,0]
,[1178,50,0,0,0,1,20,0,"Cat Hair Foot","",0,9,5,11,3,0]
,[1179,999,0,1,0,0,10,0,"Cute [Color] Ribbon","","",14,20,193,1,0]
,[1180,50,0,1,0,0,20,0,"Bride's Corolla","",0,6,3,19,2,0]
,[1181,50,0,1,0,1,20,0,"Flower Fairy","",0,4,1,19,1,54,5,0]
,[1182,50,0,3,0,1,10,70,"Neck Tie","","Increases SP Consumption by 5%",0,3,1,8,-5,0]
,[1183,50,0,3,0,1,60,70,"Baby Angel","","When receiving physical damage, chance to cast Level 1 Recovery on yourself",19,2,0]
,[1184,50,0,0,0,0,10,0,"Red Comb","",0,10,6,0]
,[1185,50,0,3,0,0,50,70,"Frog Hat","",0,19,1,34,12,174,12,0]
,[1186,999,0,0,0,1,30,0,"Box of Fun [A]","","[description translation missing - ItemID: 1186]",0]
,[1187,999,0,0,0,1,30,0,"Box of Fun [B]","","[description translation missing - ItemID: 1187]",0]
,[1188,52,0,0,0,0,10,0,"Stick Candy?","",0,14,5,0]
,[1189,60,1001,3,0,1,50,0,"Dragon Vest","",0,19,3,0]
,[1190,60,1072,7,0,1,100,85,"Bone Plate","","Adds a 1% chance to cause External Bleeding status ailment all players in a 5x5 area around you when taking ATK based damage",1,1,19,3,307,10,302,10,0]
,[1191,61,1079,5,0,1,180,65,"Bradium Shield","",0,13,500,5159,60,5384,60,2,-1,0]
,[1192,62,1001,5,0,1,100,0,"Dragon Manteau","",0,2,1,19,5,0]
,[1193,62,1001,5,0,1,40,90,"Proxy Skin Fragment","","Increases SP by Level/3 + [Refine Rate * 10]<br>When dealing physical damage there's a 1% chance that you'll recover 1% of your damage as SP",19,3,60,3,61,3,62,3,63,3,64,3,65,3,66,3,67,3,68,3,69,3,0]
,[1194,63,1001,4,0,0,50,60,"Life Tree Wooden Shoes","","Recover 30 HP every 10 seconds",15,10,75,5,3,2,19,3,92,5,0]
,[1195,64,0,0,0,0,10,0,"Ring of Wisdom King","",0,13,50,14,20,0]
,[1196,64,1,0,0,1,10,70,"Eyeball Ring","",0,10,2,14,25,0]
,[1197,64,1001,0,0,1,20,75,"Waterdrop Brooch","",0,61,5,13,80,19,2,0]
,[1198,64,1001,0,0,1,20,60,"Bradium Earring","",0,4,1,5,1,89,2,0]
,[1199,64,1001,0,0,1,20,60,"Bradium Ring","",0,1,1,3,1,80,2,0]
,[1200,64,1001,0,0,1,20,60,"Bradium Brooch","",0,2,1,9,4,12,2,0]
,[1201,999,0,0,0,0,25,0,"Small Fishing..?","","[description translation missing - ItemID: 1201]",0]
,[1202,100,0,0,0,0,0,0,"Blush &amp; Necktie",0,"",12,3,73,3,0]
,[1203,100,0,0,0,0,0,0,"Dragon Vest &amp; Manteau",0,0,2,5,9,15,0]
,[1204,50,0,2,0,1,10,10,"Hood of Necromancer","",0,193,1,221,112,0]
,[1205,50,0,5,0,0,60,20,"Wandering Wolf Hat","","",193,1,3,5,9,10,0]
,[1206,50,1,2,0,1,50,30,"Frog Prince Hat","",0,193,1,2,1,0]
,[1207,51,0,0,0,0,30,50,"Jaguar Face","","",43,5,0]
,[1208,50,0,3,0,1,50,70,"Darkness Helm","",0,0]
,[1209,100,0,0,0,0,0,0,"Dark Angel Wings + Ear",0,0,1,1,12,2,0]
,[1210,100,0,0,0,0,0,0,"Dark Devil Wings + Ear",0,"ATK + 5%",1,1,0]
,[1211,100,0,0,0,0,0,0,"Awfully Dark Wings + Ear",0,0,2,1,9,3,0]
,[1212,100,0,0,0,0,0,0,"Dark + Glasses",0,0,4,1,89,2,0]
,[1213,100,0,0,0,0,0,0,"Dark + Darkness Ice",0,0,5,1,25,3,0]
,[1214,50,0,2,0,1,20,10,"Red Marcher Hat","","When attacking with an ATK based attack, there's a low chance to cast the skill [Aspersio]Lv 2",1,2,0]
,[1215,50,0,7,0,1,100,50,"Scooter Helm","",0,194,1,0]
,[1216,52,0,0,0,0,10,30,"Captain's Pipe","",0,0]
,[1217,999,0,0,0,0,0,0,"Captains's Hat + Pipe",0,"[description translation missing - ItemID: 1217]",0]
,[1218,50,0,2,0,0,30,0,"Moon Rabbit Hat","","[description translation missing - ItemID: 1218]",2,3,5,1,151,15,0]
,[1219,50,0,5,0,1,100,30,"Tiara Samambaia","","",76,8,0]
,[1220,50,0,2,0,0,30,1,"Lunatic Hat","","[description translation missing - ItemID: 1220]",19,2,6,5,11,5,0]
,[1221,51,0,1,0,0,10,0,"Cube Mask","","[description translation missing - ItemID: 1221]",0]
,[1222,50,0,1,0,0,40,30,"Gryphon Hat","","[description translation missing - ItemID: 1222]",0]
,[1223,50,0,0,0,0,10,1,"Lady Tanee Hat","","[description translation missing - ItemID: 1223]",193,1,194,1,0]
,[1224,50,0,0,0,1,40,1,"Rabbit Earplugs","","[description translation missing - ItemID: 1224]",80,4,89,4,0]
,[1225,50,0,0,0,1,50,60,"Lilia Doll Hat","",0,13,500,57,5,193,1,0]
,[1226,50,0,0,0,1,50,60,"Dorothy Doll Hat","",0,14,80,57,5,193,1,0]
,[1227,50,0,0,0,1,30,70,"Incarnation of Morocc Hat (Human)","","[description translation missing - ItemID: 1227]",193,1,0]
,[1228,50,0,3,0,1,60,50,"Southern Cross","","<b>[Refine Rate 6~10]</b><br>Ignored MDEF increased by 1 for each refine rate",4,1,297,5,0]
,[1229,50,0,2,0,1,10,30,"Sakura Yuu Township","","[description translation missing - ItemID: 1229]",73,35,0]
,[1230,50,0,3,0,0,100,10,"Pig's Piggybank","","[description translation missing - ItemID: 1230]",193,1,74,-10,0]
,[1231,52,0,0,0,0,10,10,"Poring Letter","",0,33,5,0]
,[1232,50,1,1,0,0,10,0,"Cute Red Ribbon","",0,14,20,193,1,0]
,[1233,50,1,1,0,0,10,0,"Cute Blue Ribbon","",0,14,20,193,1,0]
,[1234,50,1,1,0,0,10,0,"Cute White Ribbon","",0,14,20,193,1,0]
,[1235,999,0,2,0,1,60,50,"Frist Hat","",0,47,10,0]
,[1236,999,1,170,4,3,120,50,"Frist Sword","",0,0]
,[1237,100,0,0,0,0,0,0,"Frist Hat + Sword",0,0,37,4,8,10,0]
,[1238,100,0,0,0,0,0,0,"Frist Sword + Odin's Blessing",0,0,5076,5,14,50,0]
,[1239,50,0,1,0,0,40,1,"Imp Hat","","[description translation missing - ItemID: 1239]",0]
,[1240,50,1,2,0,0,60,18,"Beer Hat","","Allows usage of the skill [Increase Recuperative Power]Lv 3 and [Increase Spiritual Power]Lv 3<br><b>NOTE:<br>For [Increase Recuperative Power] in Sword Classes, use the manual feature at the top right menu<br>For [Increase Spiritual Power] in Priest and Magician Classes, use the manual feature at the top right menu</b>",11,5,0]
,[1241,50,0,2,0,1,20,10,"Engineer Cap","",0,30,10,0]
,[1242,50,0,1,0,0,40,1,"Sleeper Hat","","[description translation missing - ItemID: 1242]",0]
,[1243,50,0,1,0,0,40,1,"Cactus Hat","","[description translation missing - ItemID: 1243]",193,1,0]
,[1244,50,0,3,0,0,25,1,"Ice Hat","","[description translation missing - ItemID: 1244]",194,1,220,42,61,15,0]
,[1245,50,0,0,0,1,10,40,"Eddga Hat","","[description translation missing - ItemID: 1245]",194,1,220,43,15,-3,0]
,[1246,999,0,0,0,0,70,1,"Red Beret","",0,194,1,37,5,57,5,0]
,[1247,50,0,1,0,1,50,1,"Noah's Hat",0,"[description translation missing - ItemID: 1247]",19,3,76,3,0]
,[1248,50,0,3,0,0,30,0,"Phantom Thief's Hat",0,"[description translation missing - ItemID: 1248]",2,1,0]
,[1249,100,0,0,0,0,0,0,"Monocle + Phantom Thief's Hat",0,"[description translation missing - ItemID: 1249]",0]
,[1250,52,0,0,0,0,10,0,"Pirate Dagger","",0,17,5,0]
,[1251,50,0,2,0,0,70,0,"Jasper Crest","",0,3,1,5,3,0]
,[1252,51,0,1,0,0,20,10,"Robo Eye","",0,80,2,89,2,5,1,0]
,[1253,50,0,2,0,0,30,40,"Hukke's Blackcat Ears","","",9,10,18,-50,10,3,70,10,0]
,[1254,50,0,3,0,1,10,0,"Flying Evil Wing","","[description translation missing - ItemID: 1254]",14,120,0]
,[1255,999,0,1,0,0,20,70,"Fairy Ears [bRO]","",0,11,3,0]
,[1256,52,0,1,0,0,10,1,"4 Leaf Clover In Mouth","",0,89,1,0] //custom TalonRO
,[1257,50,51,5,0,1,300,65,"Sphinx Hat","","",1,5,0]
,[1258,50,0,3,0,0,0,70,"Anubis Hat",0,0,77,3,91,3,0]
,[1259,64,0,0,0,1,10,1,"Skull Ring [1]","","",51,1,0]
,[1260,50,0,0,0,1,10,0,"Wild Rose Hat",0,0,2,3,0]
,[1261,999,0,5,0,0,80,50,"Large Bapho Horns [DEF Version]","","As your JOB Level increases,the helm grants additional ATK",57,12,0]
,[1262,52,0,0,0,0,10,0,"Gentleman's Pipe","","",89,1,0] //custom TalonRO
,[1263,51,0,6,0,0,0,1,"Blush of Groom","","",57,3,0]
,[1264,50,0,0,0,1,10,0,"Purple Cowboy Hat",0,0,4,2,3,2,14,50,0]
,[1265,50,0,0,0,1,20,30,"Dark Randgris Helm","","<b>Upper and Mid Headgear</b>",5,4,19,1,0]
,[1266,50,0,2,0,0,70,10,"AFK Hat","",0,0]
,[1267,50,0,0,0,0,10,10,"Afro Wig","","Add a 30% chance of auto casting First Aid on the user when the user receives Physical Damage",60,1,0]
,[1268,50,0,0,0,0,10,0,"Angel Blessing","","",66,5,6,1,0,]
,[1269,51,1,0,0,0,20,30,"Angel of Ghost","",0,87,2,89,2,0]
,[1270,52,0,0,0,0,5,0,"Angry Mouth","",0,74,3,0]
,[1271,50,0,3,0,0,30,1,"Anniversary Hat","","",7,2,0]
,[1272,50,0,3,0,0,30,70,"Aries Crown",0,"<b>[Refine Rate 7~10]</b><br>DEF + 1<br>VIT + 1",63,5,3,2,0]
,[1273,50,0,3,0,0,30,70,"Aries Diadem",0,"<b>[Refine Rate 7~10]</b><br>DEF + 1<br>VIT + 1",63,5,3,2,0]
,[1274,50,0,3,0,0,30,70,"Aquarius Crown",0,"<b>[Refine Rate 7~10]</b><br>DEF + 1<br>ATK + 15",64,5,9,10,1,2,0]
,[1275,50,0,3,0,0,30,70,"Aquarius Diadem",0,"<b>[Refine Rate 7~10]</b><br>DEF + 1<br>ATK + 15",64,5,9,10,1,2,0]
,[1276,50,0,3,0,0,30,70,"Cancer Crown",0,"<b>[Refine Rate 7~10]</b><br>DEF + 1<br>Heal amount increased by + 30%<br>Sanctuary effectiveness increased by + 30%<br>+30% recovery with skill [Potion Pitcher]<br>FLEE + 10",61,5,1,2,0]
,[1277,50,0,3,0,0,30,70,"Cancer Diadem",0,"<b>[Refine Rate 7~10]</b><br>MDEF + 1<br>Heal amount increased by + 30%<br>Sanctuary effectiveness increased by + 30%<br>+30% recovery with skill [Potion Pitcher]<br>MATK + 2%",61,5,4,2,0]
,[1278,50,0,3,0,0,30,70,"Capricorn Crown",0,"<b>[Refine Rate 7~10]</b><br>Small chance of auto casting [Warm Wind]Lv 1 [<b><font color='brown'>Earth Endow</font></b>] when receiving ATK based damage",3,2,5,2,0]
,[1279,50,0,3,0,0,30,70,"Capricorn Diadem",0,"<b>[Refine Rate 7~10]</b><br>INT + 2<br><b>[Refine Rate 8~10]</b><br>Cast Time -3%<br><b>[Refine Rate 9~10]</b><br>Heal amount increased by + 4%<br>Sanctuary effectiveness increased by + 4%<br><b>[Refine Rate 10]</b><br>When recieving ATK based damage, there's a medium chance to cast the skill [Hammerfall]Lv 5",62,5,19,5,5,2,0]
,[1280,50,0,3,0,1,30,70,"Gemini Crown",0,"<b>[Refine Rate 7~10]</b><br>DEF + 1<br>ATK + 15<br>FLEE + 10<br><b><font color='green'>Wind</font></b> element resistance + 5%",19,5,17,2,0]
,[1281,50,0,3,0,1,30,70,"Gemini Diadem",0,"<b>[Refine Rate 7~10]</b><br>MDEF + 7<br>MATK + 8%<br><b><font color='green'>Wind</font></b> element resistance + 5%",89,2,0]
,[1282,50,0,3,0,0,30,70,"Leo Crown",0,"<b>[Refine Rate 7~10]</b><br>DEF + 1<br>ATK + 15<br>FLEE + 10<br>Small chance of auto casting [Warm Wind]Lv 4 [<b><font color='red'>Fire Endow</font></b>] when receiving ATK based damage",63,5,1,2,0]
,[1283,50,0,3,0,0,30,70,"Leo Diadem",0,"<b>[Refine Rate 7~10]</b><br>ASPD + 3%<br>FLEE + 10<br>Small chance of all regular attacks become 3x3 splash damage like a Bowling Bash Effect [Baphomet Card Effect] on attacking",63,5,5,2,0]
,[1284,50,0,3,0,0,30,1,"Libra Crown",0,"<b>[Refine Rate 7~10]</b><br>MATK + 3%<br><b>[Refine Rate 9~10]</b><br>MATK + 5%<br>Small chance of casting [Frost Nova]Lv 5 when receiving ATK based damage",64,7,5,3,0]
,[1285,50,0,3,0,0,30,1,"Libra Diadem",0,"<b>[Refine Rate 7~10]</b><br>Small chance of auto casting [Warm Wind]Lv 2 [<b><font color='green'>Wind Endow</font></b>] when receiving ATK based damage<br><b>[Refine Rate 9~10]</b><br>FLEE + 5<br>Physical damage + 3% (versus Normal/Boss/Guardian)",17,7,0]
,[1286,50,0,3,0,0,30,70,"Pisces Crown",0,"<b>[Refine Rate 7~10]</b><br>MDEF + 5<br>MATK + 2%",61,5,19,1,4,2,0]
,[1287,50,0,3,0,0,30,70,"Pisces Diadem",0,"<b>[Refine Rate 7~10]</b><br>INT + 3<br>MATK + 2%",61,7,19,5,0]
,[1288,50,0,3,0,0,30,1,"Sagittarius Crown",0,"<b>[Refine Rate 7~10]</b><br>ASPD + 2%<br><b>[Refine Rate 8~10]</b><br>AGI + 2<br><b>[Refine Rate 9~10]</b><br>Increases ranged damage by 5%<br><b>[Refine Rate 10]</b><br>When attacking with an ATK based attack, there's a low chance to increase Dex and Agi by 10 for 10 seconds",63,7,5,2,0]
,[1289,50,0,3,0,0,30,1,"Sagittarius Diadem",0,"<b>[Refine Rate 7~10]</b><br>Cast Time -3%<br><b>[Refine Rate 8~10]</b><br>When using MATK based damage, there's a low chance to cast the skill [Sightrasher]Lv 1<br><b>[Refine Rate 9~10]</b><br>Cast Time -2%<br><b>[Refine Rate 10]</b><br>MATK + 4%",5,2,63,7,19,3,0]
,[1290,50,0,3,0,0,30,1,"Scorpio Crown",0,"<b>[Refine Rate 7~10]</b><br>Small chance of auto casting [Warm Wind]Lv 3 [<b><font color='blue'>Water Endow</font></b>] when receiving ATK based damage<br><b>[Refine Rate 8~10]</b><br>ASPD + 2%<br><b>[Refine Rate 9~10]</b><br>When attacking with an ATK based attack, there's a low chance to cast the skill [Frost Nova]Lv 5<br><b>[Refine Rate 10]</b><br>ASPD + 2%<br>ATK + 5",17,5,61,5,12,3,0]
,[1291,50,0,3,0,0,30,1,"Scorpio Diadem",0,"<b>[Refine Rate 7~10]</b><br>DEX + 1<br>ATK + 5",5,2,0]
,[1292,50,0,3,0,0,30,70,"Taurus Crown",0,"<b>[Refine Rate 7~10]</b><br>DEF + 2<br><b><font color='brown'>Earth</font></b> element resistance +5%",5,2,3,2,0]
,[1293,50,0,3,0,0,30,70,"Taurus Diadem",0,"<b>[Refine Rate 7~10]</b><br>DEF + 2<br>VIT + 2",5,2,62,5,0]
,[1294,50,0,3,0,1,30,70,"Virgo Crown",0,"<b>[Refine Rate 7~10]</b><br><b><font color='brown'>Earth</font></b> element resistance +5%<br>When attacking with an ATK based attack, there's a low chance to increase Dex by 20 for 6 seconds",5,2,12,1,0]
,[1295,50,0,3,0,1,30,70,"Virgo Diadem",0,"<b>[Refine Rate 7~10]</b><br>When attacking with an ATK based attack, there's a low chance to cast the skill [Ki Explosion]Lv 1",62,5,12,3,0]
,[1296,50,0,2,0,0,50,50,"Ashura Fairy Hat",0,"Allows usage of the skill [Don't Forget Me]Lv 1",5,2,6,2,0]
,[1297,50,0,4,0,0,50,1,"Australian Flag Hat",0,0,7,2,0]
,[1298,50,0,0,0,0,10,1,"Autumn Leaves [0]",0,0,13,40,14,40,0]
,[1299,50,0,1,0,1,10,1,"Autumn Leaves [1]",0,0,11,5,0]
,[1300,50,72,5,0,1,10,1,"Ayothaya King's Hat",0,0,1,1,37,5,0]
,[1301,50,0,3,0,1,10,1,"Baby Dragon Hat",0,0,0]
,[1302,52,0,0,0,0,10,1,"Bandit Beard",0,0,0]
,[1303,50,0,3,0,0,50,1,"Bandit Hat",0,0,1,2,63,10,0]
,[1304,50,0,2,0,0,0,10,"Bf Recruiter Hat","",0,0]
,[1305,50,0,1,0,1,10,1,"Black Ribbon","",0,19,3,0]
,[1306,50,0,5,0,0,300,80,"Dark Knight Mask [Type B]","",0,5,3,0]
,[1307,50,1,1,0,0,10,0,"Cute Green Ribbon","",0,14,20,193,1,0]
,[1308,50,55,1,0,0,30,0,"Red Mage Hat","",0,4,2,14,150,0]
,[1309,64,0,1,0,0,50,80,"Dark Knight Belt [Type B]","",0,5,2,2,1,0]
,[1310,64,0,1,0,0,50,80,"Dark Knight Glove [Type B]","","Small chance of increasing MHP by 10% for 10 seconds when receiving ATK based damage",0]
,[1311,100,0,0,0,0,0,0,"Dark Knight Set [Type A]",0,0,89,10,4,5,58,10,0]
,[1312,50,0,5,0,0,300,80,"Blue Night Cap","","ATK + 5%",89,5,0]
,[1313,52,0,1,0,0,10,90,"Spiked Scarf","","",3,1,0]  //custom TalonRO removed: 37,1,57,1,
,[1314,63,131,4,0,1,30,90,"Dance Shoes","","Reduces SP cost of all skills by 10%",2,1,12,2,0]
,[1315,5,121,150,4,1,475,93,"Gigantic Lance","","When using Spiral Pierce, knock back your enemies 4 cells<br>When unequipping, you lose 500 sp<br><b>For every refine > 4:</b><br>ASPD + 1%",12,-10,0]
,[1316,51,0,1,0,0,10,50,"Hockey Mask","","<b>Mid and Low Headgear</b>",37,5,0]
,[1317,50,0,4,0,1,25,25,"Jaguar Hat","","Allows usage of the skill [Loud Exclamation]Lv 1<br><b>Upper, Mid and Low Headgear</b>",19,2,0]
,[1318,50,0,5,0,0,25,1,"I Love China","","",5,3,57,10,0]
,[1319,52,0,0,0,0,10,10,"Well-Chewed Pencil","","",8,3,0] //custom TalonRO removed: 5,2, added combo
//custom TalonRO
,[1320,64,0,0,0,0,1,0,"Celebration Ring",0,0,7,5,0] //custom TalonRO
//custom TalonRO rental
,[1321,10,64,194,4,0,0,1,"Ballista R","",0,25,20,193,1,0] //custom TalonRO rental
,[1322,7,1,220,3,0,0,1,"Two-handed Axe R","",0,27,40,28,40,29,40,0] //custom TalonRO rental
,[1323,13,0,150,3,0,0,1,"Fist R","",0,27,40,28,40,29,40,0] //custom TalonRO rental
,[1324,12,0,145,3,0,0,0,"Giant Encyclopedia R","","Critical Rate bonus is further increased by +1 per 5 base LUK",89,15,4,3,5,2,10,20,27,40,28,40,29,40,0] //custom TalonRO rental
,[1325,14,0,177,3,0,0,1,"Guitar R","",0,27,40,28,40,29,40,0] //custom TalonRO rental
,[1326,11,0,200,3,0,0,1,"Jamadhar R","",0,27,40,28,40,29,40,0] //custom TalonRO rental
,[1327,5,0,220,3,0,0,1,"Lance R","",0,27,50,28,50,29,50,0] //custom TalonRO rental
,[1328,15,0,170,3,0,0,1,"Rante Whip R","",0,27,40,28,40,29,40,0] //custom TalonRO rental
,[1329,8,53,175,3,0,0,1,"Stunner R","",0,131,10,27,40,28,40,29,40,0] //custom TalonRO rental
,[1330,7,0,205,4,0,0,1,"Bloody Axe R","","Increases Movement Speed",1,20,12,5,193,1,0] //custom TalonRO rental
,[1331,11,0,148,4,0,0,1,"Bloody Roar R","","Recovery 3 HP every 5 seconds",187,1,193,1,0] //custom TalonRO rental
,[1332,10,75,170,4,0,0,0,"Bow of Evil R","","[Double Strafe] damage +25%",5,2,0] //custom TalonRO rental
,[1333,4,1,149,4,0,0,1,"Brocca R","",0,28,20,22,1,193,1,0] //custom TalonRO rental //fixed 2016-05-05
,[1334,1,1,129,4,0,0,1,"Combat Knife R","","Drain 3% SP",57,10,56,-10,187,1,16,10,193,1,0] //custom TalonRO rental
,[1335,2,1,199,4,0,0,1,"Excalibur R","",0,20,6,4,10,6,10,193,1,0] //custom TalonRO rental
,[1336,2,1,120,4,0,0,1,"Fireblend R","",0,20,3,4,2,220,47,221,114,193,1,0] //custom TalonRO rental
,[1337,7,0,215,4,0,0,1,"Great Axe R","","Mammonite will shove his target back 5 cells",1,5,8,20,131,15,193,1,0] //custom TalonRO rental
,[1338,12,0,168,4,0,0,1,"Hardcover Book R","",0,1,5,5,2,89,20,193,1,0] //custom TalonRO rental
,[1339,2,1,160,4,0,0,1,"Immaterial Sword R","","Drains 45% of target's SP by a low chance<br>Drain 1 SP from its owner on each attack",20,8,193,1,194,1,0] //custom TalonRO rental
,[1340,11,0,189,4,0,0,1,"Infiltrator R","",0,37,70,18,3,9,5,11,2,12,5,193,1,0] //custom TalonRO rental
,[1341,13,1,159,4,0,0,1,"Kaiser Knuckle R","",0,12,5,20,4,49,5,41,10,42,10,43,10,44,10,0] //custom TalonRO rental
,[1342,11,0,175,4,0,0,1,"Katar of Speed R","","[Sonic Blow] damage +25%",12,3,193,1,0] //custom TalonRO rental
,[1343,8,0,150,3,0,0,1,"Mace of Madness R","","[Cart Revolution] damage +25%",1,2,0] //custom TalonRO rental
,[1344,1,1,105,4,0,0,1,"Mail Breaker R","",0,141,5,193,1,0] //custom TalonRO rental
,[1345,9,1,165,3,0,0,1,"Mighty Staff R","","Consume 1 SP with each physical attack",1,10,4,4,89,20,193,1,0] //custom TalonRO rental
,[1346,13,0,150,4,0,0,1,"Monk Knuckle R","","[Finger Offensive] damage +25%",4,2,0] //custom TalonRO rental
,[1347,3,0,204,4,0,0,1,"Muramasa R","",0,10,30,12,8,193,1,0] //custom TalonRO rental
,[1348,2,1,148,4,0,0,1,"Nagan R","","Enables use of the skill [Double Attack]Lv5",37,10,193,1,0] //custom TalonRO rental
,[1349,15,0,160,4,0,0,1,"Phenomena Whip R","","[Throw Arrow] damage +25%",5,2,0] //custom TalonRO rental
,[1350,12,0,140,3,0,0,1,"Book of Prayer R","",0,3,2,19,10,16,10,0] //custom TalonRO rental
,[1351,8,53,193,4,0,0,1,"Quadrille R","",0,31,40,36,40,37,30,193,1,0] //custom TalonRO rental
,[1352,4,0,160,3,0,0,1,"Spear of Excellent R","","[Magnum Break] damage +25%",1,2,0] //custom TalonRO rental
,[1353,9,1,100,2,0,0,1,"Staff of Darkness R","",0,4,2,89,15,73,-5,0] //custom TalonRO rental
,[1354,9,53,10,3,0,0,1,"Staff of Healing R","","Increase 15% chance to heal yourself by [Heal] and [Sanctuary] (didn't really get the description...)",89,15,193,1,0] //custom TalonRO rental
,[1355,9,1,71,3,1,0,1,"Survivor's Rod (dex) R","",0,89,20,5,4,13,500,193,1,0] //custom TalonRO rental
,[1356,1,1,105,4,0,0,1,"Sword Breaker R","",0,140,5,193,1,0] //custom TalonRO rental
,[1357,11,0,179,4,0,0,1,"Unholy Touch R","",0,20,7,133,5,193,1,194,1,0] //custom TalonRO rental
,[1358,64,1,1,0,0,10,0,"Vesper Core 01 R","",0,4,2,16,5,19,3,0] //custom TalonRO rental
,[1359,64,1,1,0,0,10,0,"Vesper Core 02 R","",0,1,3,17,10,19,3,0] //custom TalonRO rental
,[1360,64,1,1,0,0,10,0,"Vesper Core 03 R","",0,2,3,9,5,19,3,0] //custom TalonRO rental
,[1361,64,1,1,0,0,10,0,"Vesper Core 04 R","",0,5,3,8,10,19,3,0] //custom TalonRO rental
,[1362,60,0,12,0,0,0,0,"Recuvative Armor R","","Reduces natural HP and SP recovery by 100%<BR>When unequipped, you lose 100 SP<BR>When a monster is defeated from Physical or Magical Attacks, it recover 60 HP and 6 SP",76,-100,75,-100,0] //custom TalonRO rental
,[1363,63,0,9,0,0,0,0,"Refresh Shoes R","","Every 10 seconds, your HP goes up by 20, SP goes up by 3",15,17,16,8,0] //custom TalonRO rental
,[1364,62,0,9,0,0,0,0,"Silf Manteau R","",0,9,13,11,1,60,13,0] //custom TalonRO rental
,[1365,62,55,5,0,0,0,0,"Survivor's Manteau R","",0,3,10,19,10,193,1,0] //custom TalonRO rental
,[1366,64,1,0,0,0,0,0,"Bloody Shackle Ball R","",0,17,30,0] //custom TalonRO rental
,[1367,64,0,0,0,0,0,0,"Spiritual Ring R","",0,4,2,5,2,0] //custom TalonRO rental
,[1368,50,1,10,0,0,0,0,"Corsair R","",0,3,3,4,3,193,1,0] //custom TalonRO rental
,[1369,50,1,6,0,0,0,0,"Drooping Cat R","",0,19,15,151,10,153,40,193,1,0] //custom TalonRO rental
,[1370,50,1,10,0,0,0,0,"Grand Circlet R","",0,1,3,4,3,6,3,19,4,193,1,0] //custom TalonRO rental
,[1371,51,1,1,0,0,0,0,"Masquerade R","",0,37,7,0] //custom TalonRO rental
//custom TalonRO common mid-headgears
,[1372,51,0,1,0,1,10,0,"+1 STR [1]","",0,1,1,0] //custom TalonRO +1 str mid
,[1373,51,0,1,0,1,10,0,"+1 AGI [1]","",0,2,1,0] //custom TalonRO +1 agi mid
,[1374,51,0,1,0,1,10,0,"+1 INT [1]","",0,4,1,0] //custom TalonRO +1 int mid
//custom TalonRO SQI
,[1375,11,0,140,4,4,150,0,"Twin Fang","","<font color='blue'>SQI</font>",2,5,10,5,0] //custom TalonRO SQI
,[1376,61,113,8,0,1,400,0,"Aegis Shield","","<font color='blue'>SQI</font>",1,3,3,5,4,3,19,5,0] //custom TalonRO SQI
,[1377,10,110,200,4,3,150,0,"Artemis Bow","","<font color='blue'>SQI</font>",4,5,6,5,0] //custom TalonRO SQI
,[1378,15,117,190,4,3,70,0,"Belmont Whip","","<font color='blue'>SQI</font>",2,4,5,5,6,4,20,3,0] //custom TalonRO SQI
,[1379,1,50,150,4,3,150,0,"Blade of Angels","","<font color='blue'>SQI</font>",1,10,3,10,8,40,15,20,14,250,0] //custom TalonRO SQI
,[1380,6,119,250,4,3,600,0,"Djinn","","<font color='blue'>SQI</font>",3,3,5,5,6,5,20,2,194,1,0] //custom TalonRO SQI
,[1381,14,0,110,2,0,180,70,"Electric Guitar","","<font color='blue'>SQI</font>",0,20,4,5,5,4,4,3,4,0]
,[1382,8,109,250,4,3,150,0,"Evangelist","","<font color='blue'>SQI</font>",4,5,5,5,20,1,194,1,220,50,0] //custom TalonRO SQI
,[1383,63,150,4,0,1,150,0,"Eversong Greaves","","Movement speed increased (same as Increase AGI)<BR><font color='blue'>SQI</font><BR>[Taekwon]<BR>MaxHP + 10%<BR>HIT + 25<BR>[Taekwon Master]<BR>MaxHP + 20%",15,10,19,10,0] //custom TalonRO SQI
,[1384,9,143,225,4,3,150,0,"Ghostdancer Staff","","<font color='blue'>SQI</font>",4,5,5,5,89,15,0] //custom TalonRO SQI
,[1385,16,144,250,4,3,100,0,"Hira Shurikat","","<font color='blue'>SQI</font>",5,5,15,20,16,20,18,8,20,4,77,20,79,20,0] //custom TalonRO SQI
//,[84,8,112,220,4,3,600,0,"Mjolnir","","<font color='blue'>SQI</font>",1,5,5,5,6,5,20,4,0] //custom TalonRO SQI
,[1386,4,107,200,4,3,550,0,"Nibelungen","","Enable to use Level 1 [Enchant Poison]<BR><font color='blue'>SQI</font>",1,5,8,10,0] //custom TalonRO SQI
,[1387,51,145,7,0,1,10,0,"Scouter","","Power Level: &gt;9000<BR><font color='blue'>SQI</font>",5,10,12,15,0] //custom TalonRO SQI
,[1388,10,114,150,4,3,150,0,"Sherwood Bow","","Enable to use [Arrow Crafting]<BR><font color='blue'>SQI</font>",2,5,5,5,0] //custom TalonRO SQI
,[1389,9,111,250,4,3,50,0,"Staff of Magi","","<font color='blue'>SQI</font>",4,5,5,5,89,20,20,3,0] //custom TalonRO SQI
,[1390,13,115,150,4,3,60,0,"Suiken","","<font color='blue'>SQI</font>",1,5,2,3,5,5,20,1,0] //custom TalonRO SQI
,[1391,12,118,250,4,3,80,0,"Tome of Ymir","","<font color='blue'>SQI</font>",3,3,4,4,5,5,194,1,0] //custom TalonRO SQI
//custom TalonRO equip combos
,[1392,100,0,0,0,0,0,0,0,0,0,60,25,89,5,0]
//custom TalonRO etc (low/mid-headgears)
,[1393,52,0,0,0,0,10,0,"Pussy Cat Bell","",0,18,5,0]
,[1394,52,1,0,0,0,20,20,"Rock Replica","",0,1,1,0]
,[1395,52,0,1,0,0,10,1,"Chewing Bubblegum","","ATK + 1%",0]
,[1396,52,0,1,0,0,0,1,"Nut Donut In Mouth","",0,17,5,0]
,[1397,52,1,0,0,0,20,20,"Scissors Replica","",0,2,1,0]
,[1398,52,1,0,0,0,20,20,"Paper Replica","",0,6,1,0]
,[1399,50,0,3,0,1,30,85,"Crown of Deceit","",0,4,4,73,-10,0]
,[1400,52,1,0,0,0,20,20,"Cherry Blossom In Mouth","",0,33,1,0]
,[1401,52,0,1,0,0,10,1,"+1 DEF","",0,0]
,[1402,52,0,1,0,0,5,1,"Choco Donut In Mouth","",0,13,50,0]
,[1403,52,0,1,0,0,5,1,"Donut In Mouth","","Regain 1 HP every 10 seconds.",13,100,0]
,[1404,52,1,0,0,0,20,20,"Green Onion In Mouth","",0,190,1,0]
,[1405,52,0,0,0,0,10,12,"Handkerchief In Mouth","",0,37,1,57,-1,0]
,[1406,52,0,0,0,0,10,0,"Lollipop","",0,14,5,0]
,[1407,52,0,0,0,0,20,50,"Love Piece","",0,0]
,[1408,50,0,0,0,0,30,50,"Heart Wing Hairband","","Decreases SP taken by all skills by 5%",74,5,0]
,[1409,100,0,0,0,0,0,0,0,0,0,73,-5,0]
,[1410,50,0,1,0,1,30,10,"Flying Angel","",0,2,1,4,1,12,3,73,-3,0]
,[1411,52,0,0,0,0,5,1,"Plant Stem In Mouth","",0,150,20,0]
,[1412,52,0,0,0,0,10,1,"Puppy Grass","",0,73,-1,0]
,[1413,52,0,1,0,0,10,90,"Rainbow Scarf","",0,4,1,0]
,[1414,52,0,0,0,0,10,50,"Rose Of Crimson","",0,6,1,0]
,[1415,52,0,1,0,0,30,50,"Samurai Mask","",0,80,1,0]
,[1416,52,0,1,0,0,20,1,"Special Carrot In Mouth","",0,53,1,0]
,[1417,50,0,2,0,0,20,0,"Sheila Hairnet","","Sexy rating will be increased by 100%",2,2,19,3,0]
,[1418,100,0,0,0,0,0,0,0,0,"When receiving physical attack there's a chance to autocast [High Jump] Level 1",0]
,[1419,52,0,0,0,0,10,1,"Strange Tongue","",0,56,1,0]
,[1420,52,0,1,0,0,20,30,"Umbala Spirit","","",3,1,0]
,[1421,100,0,0,0,0,0,0,0,0,0,5,2,18,2,0]
,[1422,50,0,0,0,1,100,30,"Chicken Hat","","Add a chance to autocast skill [Loud Exclamation]Lv 1",12,5,0]
,[1423,51,0,1,0,0,10,70,"Filir Wings","","",12,2,73,-2,0]
,[1424,50,0,2,0,0,10,0,"Chicken Of Love hat","",0,1,3,13,100,52,7,57,7,0]
,[1425,50,1001,5,0,1,100,0,"Minor Valkyrian Helm","",0,19,5,0]
,[1426,50,0,2,0,1,20,30,"Deviruchi Headphones","","MaxHP  -1%<br/ ><b>[Mage, Archer, Acolyte Class]</b><br>When combined with Deviruchi Pet, add additional 5% [Stun] resistance (not calced)<br>If Deviruchi Pet is loyal, add an additional 10% [Stun] resistance (not calced)",19,1,151,15,0]
,[1427,50,0,1,0,0,30,40,"Black Feather Beret","",0,3,1,19,1,57,10,0]
,[1428,50,0,5,0,0,30,1,"Cat Ear Beret","","<b>[Refine Rate 5~10]</b><br>Increase physical damage against [Demi-Human] race monsters by 2% per refine level over 5<br>Decrease damage from [Demi-Human] race monsters by 2% per refine level over 5",0]
,[1429,50,0,2,0,1,50,33,"Knit Rabbit Ear Hat","","<b>[Base LUK > 55]</b><br>HP Regen + 30%<br>SP Regen + 30%",75,20,76,20,0]
,[1430,51,0,0,0,0,30,30,"Magical Booster","",0,89,3,0]
,[1431,100,0,0,0,0,0,0,0,0,"<b>[Refine Rate 5~10]</b><br>On Bosstype monsters, ignore 3% MDEF<br>Adjusts your resistance to normal monsters by -5%<br><b>[Refine Rate 7~10]</b><br>On Bosstype monsters, ignore 4% MDEF<br>Adjusts your resistance to normal monsters by -5%",297,2,0] //Magical Booster & Southern Cross Combo
,[1432,100,0,0,0,0,0,0,0,0,"For every refine on the Staff of Piercing, add +3 MATK<br><b>[Refine Rate 10]</b><br>Additional MATK + 25<br>Cast Time - 10%",0] //Magical Booster & Staff of Piercing Combo
,[1433,100,0,0,0,0,0,0,0,0,"For every refine of the Hypnotist's Staff, add +4 MATK<br><b>[Refine Rate 10]</b><br>Additional MATK + 25<br>After Cast Delay - 10%",0] //Magical Booster & Hypnotist's Staff Combo
,[1434,51,0,0,0,0,20,10,"Anemos Mask","",0,44,4,0]
,[1435,51,0,0,0,0,10,10,"Ice Ear Wing","",0,6,1,0]
,[1436,51,0,0,0,0,10,1,"Ifrit Eyes","",0,5,1,153,25,0]
,[1437,52,0,0,0,0,5,10,"Poker Card In Mouth","",0,37,1,57,-1,0]
,[1438,52,0,0,0,0,5,10,"Choco Stick In Mouth","","ATK - 1%",14,10,0]
,[1439,52,0,0,0,0,10,10,"Cold Breath","",0,3,-1,4,1,0]
,[1440,50,0,3,0,0,10,10,"Blue Poring Clip","",0,0]
,[1441,50,0,3,0,0,10,10,"Green Poring Clip","",0,0]
,[1442,50,0,3,0,0,10,10,"Pink Poring Clip","",0,0]
,[1443,50,0,3,0,0,10,10,"Yellow Poring Clip","",0,0]
,[1444,50,0,5,0,0,60,10,"King Poring Hat","","For every 3 refines DEX+1, LUK+1",5,1,6,1,0]
,[1445,50,0,6,0,0,50,1,"Majoruros Horn","",0,1,2,13,100,0]
,[1446,50,0,0,0,1,0,1,"Gold Coin Poring Hat","",0,5,2,6,2,0]
,[1447,50,0,0,0,1,10,1,"Rainbow Poring Hat","","<b>[Refine Rate ~7-10]</b><br>ATK + 1%<br>MATK + 1%",57,5,0]
,[1448,50,0,3,0,1,20,1,"Scrat Hat","",0,191,5,0]
,[1449,50,0,3,0,0,10,1,"Pink Bunny Band","",0,6,2,0]
,[1450,50,0,0,0,1,40,1,"Black Shiba Hat","",0,37,10,0]
,[1451,50,1,3,0,1,30,90,"Cursed Book","","4% chance to absorb 4% HP on physical attack<br>For every 2 refines, increase the HP absorbed by 1%<br>1% chance to absorb 1% SP on physical attack<br>For every 3 refines, increase the SP absorbed by 1%<br>You lose the amount of refines in HP per 5 seconds when equipped (not calcled)",0]
,[1452,64,1,0,0,1,5,80,"Death Loop","",0,10,5,0]
,[1453,64,1,0,0,1,5,80,"Rune Spellstone","",0,14,50,73,-1,0]
//custom TalonRO [Update 2013-10-06]
,[1454,15,131,170,3,1,80,90,"Stem Whip","","MATK +50<br>When using Scream, add a 3% chance of casting Level 2 Wide Sleep<br>For every refine above +6, decrease SP cost of all skills by 2%",12,5,0]
,[1455,3,1051,280,3,0,340,90,"Alca Bringer","","Every 2 refines + 3% ASPD",0]
,[1456,3,1051,280,3,0,40,90,"Chrome Metal Two-Handed Sword","","A cold blue color sword crafted from the other world mineral Bradium.",0,2,3,15,-10,194,1,0]
,[1457,10,1054,90,3,1,170,90,"Mystic Bow","","When using Arrow Shower, add a 5% chance of casting Level 2 Dragon Fear<br>Reduces the SP cost of all skills by 10%",4,4,5041,30,0]
,[1458,8,133,150,3,1,100,90,"Red Ether Bag","","MATK + 90",5248,25,0]
,[1459,61,127,4,0,1,250,90,"Imperial Guard","","Each refine above +6 increases [Shield Chain] attack power by an additional 2%",19,5,5324,5,0]
,[1460,4,127,180,3,1,180,90,"Imperial Spear","","MATK + 40<br>ATK + 2 for every Spear Mastery level<br>ATK + 2 for every 2 refines",0]
,[1461,100,0,0,0,0,0,0,0,0,0,5162,20,0] //Imperial Guard & Imperial Spear combo
,[1462,14,130,170,3,1,80,90,"Green Whistle","","MATK +50<br>When using Frost Joker, add a 3% chance of casting Level 2 Wide Curse<br>For every refine above +6, decrease SP cost of all skills by 2%",12,5,0]
,[1463,1,128,142,3,1,60,90,"Black Wing","","Each refine increases skill damage of [Back Stab] by 2%<br>Each refine increases MATK by 3%",5169,30,0]
,[1464,100,0,0,0,0,0,0,0,0,"MATK +5<br>Reduces the SP cost of all skills by 5%",8,5,0] //Black Wing & Black Cat combo
,[1465,60,1,2,0,1,50,1,"Tidung","",0,19,5,50,3,51,3,52,3,53,3,54,3,55,3,56,3,58,3,59,3,151,10,152,10,0]
//custom TalonRO [Update 2013-10-07]
,[1466,51,0,0,0,0,10,1,"Mother Elven Ears","",0,19,4,0]
,[1467,50,0,5,0,0,10,1,"Elder Crown","",0,4,2,19,5,0]
,[1468,50,0,2,0,1,30,1,"RWC Commemorative Pin","","<b>[Refine Rate 4-10]</b><br>Additional +1% to ATK and MATK for each refine level",27,1,28,1,29,1,89,1,0]
,[1469,50,0,0,0,1,30,1,"Angeling Fur Hat","","ATK + 1%",7,1,89,1,0]
,[1470,50,0,5,0,0,50,20,"Wunderkammer","","When doing short range physical attacks, add a chance of auto casting various skills:<br>Monster Property/Sense<br>Identify<br>Pick Stone<br>Greed<br>Running<br>High Jump<br>First Aid<br>Back Sliding",19,10,193,1,0]
,[1471,100,0,0,0,0,0,0,0,0,"Add a chance of auto casting Level 2 Weapon Perfection on the enemy when attacking",0] //Wunderkammer & Lesser Elemental Ring combo
,[1472,1,0,107,3,1,70,30,"Kris","","Enable a 5% chance of gaining 10% of the damage inflicted on an enemy as HP with each attack",89,10,0]
,[1473,50,0,3,0,1,30,50,"Valkyrie Circlet","",0,1,1,19,3,36,3,47,3,0]
,[1474,51,0,0,0,0,10,10,"Patron of the Sea God","",0,61,5,0]
,[1475,51,0,0,0,0,50,10,"Imperial Feather","","If user's base AGI is 90 or higher: ASPD + 1%",12,1,64,5,0]
,[1476,100,0,0,0,0,0,0,0,0,0,5162,5,0] //Imperial Guard & Imperial Spear & Imperial Feather combo
,[1477,10,1054,145,3,1,150,80,"Elven Bow","","If equipped together with Elven Arrow, increases damage by 50%",5,2,0]
,[1478,61,1001,5,0,1,60,22,"Round Buckler","",0,0]
,[1479,61,0,4,0,1,30,22,"Silver Guard","",0,19,-1,0]
,[1480,61,1051,7,0,1,130,90,"Rosa Shield","",0,0]
,[1481,8,1001,175,3,2,150,90,"Carga Mace","","Its name means 'Great Echo' in the Manuk tribe language, a rugged heavy mace with a sharp edge on one side.",0,0]
,[1482,11,122,180,3,1,120,90,"Dulga","",0,0]
,[1483,60,1051,11,0,1,450,90,"Ebone Armor","",0,0]
,[1484,60,1000,5,0,1,40,22,"Puente Robe","","Potion Pitcher effectiveness increased by + 3%",73,-1,91,3,0]
,[1485,60,1001,7,0,1,280,22,"Claire Suits","",0,0]
,[1486,9,1077,30,3,0,50,90,"Lapine Staff","","Each refine reduces your casting time by 1%",89,20,0]
,[1487,50,0,5,0,1,100,20,"Fancy Phantom Mask","","+100 MaxHP for each refine",1,1,80,5,74,1,5065,20,0]
//custom TalonRO [Update 2013-10-13]
,[1488,50,0,1,0,1,50,10,"Little Feather Hat","","If equipped together with Sharp Arrow, increases Critical Damage by 5%<br><br><b>[Refine Rate 7-10]</b><br>Increase Critical Damage by an additional 5%",5,2,70,5,0] // fixed 2016-11-02
,[1489,100,0,0,0,0,0,0,0,0,"Reduce Sharp Shooting casting time by 15%",0] //Little Feather Hat & Falken Blitz combo
,[1490,50,0,5,0,0,100,1,"Sting Hat","",0,1,2,3,1,19,3,42,5,43,5,221,119,0]
,[1491,50,0,4,0,1,75,50,"New Ascended Black Dragon Hat","",0,12,3,19,5,193,1,0]
,[1492,50,0,5,0,1,75,60,"Powerful Ascended Black Dragon Hat",0,"When defeating a monster, add a chance to gain an Old Blue Box",12,4,19,7,193,1,0]
,[1493,50,0,5,0,1,75,70,"Ultimate Ascended Black Dragon Hat",0,"When defeating a monster, add a chance to gain an Old Blue Box<br>Increase EXP gained from non-Boss monsters by 5%",12,5,19,10,0]
,[1494,100,0,0,0,0,0,0,0,0,"Add a low chance of casting Level 1 Dragon Fear when attacking",0] //Ultimate Ascended Black Dragon Hat & Pipe combo
,[1495,50,1,1,0,1,20,30,"Snake Head Hat","","Enables use of Level 1 [Double Attack]",0]
//custom TalonRO [Update 2014-08-30]
,[1496,60,0,15,0,0,0,0,"Used Mage Coat","",0,2,1,13,300,14,30,17,10,0]
,[1497,50,0,2,0,1,20,10,"Holy Marching Hat","","When doing physical damage, holy property is given to the weapon for 90 seconds at a 3% rate.",1,2,0]
,[1498,62,1151,1,0,0,40,93,"Salvage Cape","","Possible to use Cicada Skin Shed Level 1<br>Increase cool time 30sec of the skill, 2 times more on SP consumption of all skills when equipped<br>When de-equipping, SP - 1200",0]
,[1499,8,53,170,4,0,150,90,"Bloody Cross","","Adds a 1% chance to cast Level 1 Critical Wounds when attacking<br>The chance increases by the refine level of the weapon",20,7,138,1,0]
,[1500,61,1051,7,0,1,280,90,"Giant Shield","","Reduces damage form large size monsters by 5%<br><b>[Refine Rate 9-10]</b><br>Reduces damage by an additional 5%",192,5,0]
,[1501,50,0,2,0,0,30,1,"Polar Bear Cap","","SP recovery speed 3% increase",2,1,5,1,19,3,0]
,[1502,50,0,5,0,1,20,90,"Magician's Night Cap","","",4,1,5,1,0]
,[1503,50,0,4,0,0,15,30,"Tasty Strawberry Hat","","<b>[Refine Rate 7-10]</b><br>ASPD + 4%",7,1,0]
,[1504,50,0,2,0,1,20,40,"Full Bloom Hairpin","","",9,4,11,4,19,4,0]
,[1505,50,1152,3,0,1,60,60,"Diadem Of Bruenhild","","Creates a chance of casting Level 8 Endure when you receive Physical damage<br>Consumes 100 HP every 4 seconds",59,5,60,5,194,1,0]
,[1506,10,124,115,3,2,150,93,"Creeper Bow","","Has a chance of activating Fiber Lock while attacking",5,1,0]
,[1507,61,123,4,0,1,50,95,"Bible of Promise(2nd Vol.)","",0,19,5,91,5,94,5,0]
,[1508,9,132,40,3,1,50,90,"Mental Stick","","Reduces SP usage of all skills by 5%<br><b>[Refine 6-10]</b><br>Each refine above 5 decreases SP usage by 1%",73,-10,89,15,0]
,[1509,64,1001,1,0,0,20,92,"Telekinetic Orb","","",4,3,14,30,19,1,221,120,0]
,[1510,100,0,0,0,0,0,0,0,0,0,221,121,0] //Mental Stick & Telekinetic Orb combo
,[1511,9,123,30,4,1,40,91,"Recovery Light","","A staff that increases the potency of Heal while increasing SP consumption depending on refine level",20,6,89,15,194,1,0]
,[1512,13,129,142,3,1,50,90,"Sura's Rampage","","Increases the SP cost of all skills by 5%<br><b>[Refine 5-10]</b><br>Each refine above +4 decreases the SP cost of skills by 1%",221,122,221,123,5187,10,0]
,[1513,60,133,7,0,1,66,90,"Green Surgical Gown","","",5,1,14,30,0]
,[1514,100,0,0,0,0,0,0,0,0,"Has a chance when killing animal and demi-human type monsters to drop 'Immortal Heart' and 'Alcohol'<br>Higher refine rate increases the chance of item drop",0] //Green Surgical Gown & Mes combo
,[1515,10,128,135,4,2,110,90,"Catapult","","If you have a higher level of Double Strafing, use that instead",221,124,0]
,[1516,4,127,180,4,1,160,90,"Cannon Spear","","Increases damage of Head Crush by 5% every 3rd refine",14,-100,221,125,0]
,[1517,64,122,1,0,1,40,90,"Assassin's Glove","","",10,3,14,20,0]
,[1518,100,0,0,0,0,0,0,0,0,0,9,-20,17,25,5083,25,0] //Assassin's Glove & Krishna
,[1519,100,0,0,0,0,0,0,0,0,0,10,2,15,-10,70,20,0] //Assassin's Glove & Chakram
,[1520,61,125,3,0,1,100,90,"Geffenia Water Book","","If Base INT is 99, adds MATK +1%, MaxHP + 800",4,1,19,2,0]
,[1521,100,0,0,0,0,0,0,0,0,"Reduces cast time of Storm Gust by 2% for every shield refine",0] //Geffenia Water Book & Lacrima Stick combo
,[1522,18,0,170,3,2,0,70,"Lever Action Rifle R","",0,8,20,10,50,12,-5,80,30,0]
//custom TalonRO [Update 2014-09-02]
,[1523,51,0,3,0,0,100,10,"Evil Mask","","Drain 1 SP from user every 2 seconds<br><b>Mid and Low Headgear</b>",12,1,0]
,[1524,100,0,0,0,0,0,0,0,0,"ASPD +1<br>Drain 3 SP from user every 2 seconds",12,9,0] //Evil Mask & Succubus Horn
,[1525,100,0,0,0,0,0,0,0,0,"ASPD +1<br>Drain 3 SP from user every 2 seconds",12,9,0] //Evil Mask & Incubus Horn
,[1526,50,0,3,0,0,50,10,"Halloween Midas Whisper","","<b>[Base STR >= 80]</b><br>ATK + 30<br><b>[Base VIT >= 80]</b><br>MaxHP + 5%<br><b>[Base LUK >= 80]</b><br>CRIT + 5<br><b>[Base AGI >= 80]</b><br>ASPD + 5%<br><b>[Base INT >= 80]</b><br>MATK + 3%<br><b>[Base DEX >= 80]</b><br>Cast Time - 5%<br>Gain a candy item when killing monsters of DemiHuman type by low chance",7,1,56,5,0]
//custom TalonRO [Update 2014-09-11]
,[1527,51,0,2,0,0,10,1,"Gossip Raven","","Has a 2% chance of activating Level 1 Ruwach when receiving a physical attack",7,1,0]
//custom TalonRO [Update 2014-12-30]
,[1528,51,1,3,0,0,40,20,"Shutter Glasses","",0,0]
,[1529,51,1,3,0,0,40,20,"Unique Sunglasses","",0,0]
,[1530,51,1,3,0,0,40,20,"Hexagonal Glasses","",0,9,2,0]
,[1531,50,0,2,0,0,60,30,"Gentleman Fez","","<b>[Refine Rate 8~10]</b><br>DEX + 1<br><b>[Refine Rate 10]</b><br>DEX + 1",5,2,0]
,[1532,50,0,1,0,0,20,50,"Tarnished Lamp","","",6,7,0]
//custom TalonRO [Update 2015-12-19]
,[1533,50,0,2,0,0,20,1,"Santa Cat Hat","","Increases your walking speed",7,2,12,5,73,-10,0]
,[1534,50,0,3,0,1,20,20,"Butterfly Hairpin","","Add a chance of gaining Izidor each time a Plant-type monster is killed",19,3,33,5,173,5,53,5,0]
//custom TalonRO [Update 2015-12-21]
,[1535,62,0,0,0,1,60,0,"Beach Manteau","",0,1,1,4,1,63,10,0]
,[1536,63,0,0,0,0,20,0,"Beach Sandals","",0,1,1,4,1,63,10,0]
,[1537,100,0,0,0,0,0,0,0,0,0,9,5,0] //Beach Manteau & Beach Sandals
,[1538,50,0,4,0,1,40,50,"Ancient Horns","","<b>[Refine Rate 7~10]</b><br>Add a 1% chance of activating ATK + 100 for 10 seconds when hitting a monster.",0]
//custom TalonRO [Update 2015-12-29]
,[1539,50,0,3,0,1,50,1,"Evil Marching Hat","","<b>[Refine Rate 7~10]</b><br> Critical damage increased by 10%<br><b>[Refine Rate 9~10]</b><br>ATK + 5%<br>5% increased ranged physical damage",1,2,19,1,87,2,0]
//custom TalonRO [Update 2016-05-05]
,[1540,52,0,0,0,0,30,20,"Vajra","","",25,1,0]
//custom TalonRO [Update 2016-11-02]
,[1541,60,0,6,0,1,50,1,"Bayani Bakonawa Scale Armor","","For every 2 refines, decreases Boss monster damage by 1%",7,1,0]
,[1542,62,0,2,0,1,20,1,"Bayani Buwaya Skin Clothes","","Healing capacity and healing item effect increases 1% per 3 refines",61,7,62,7,63,7,64,7,0]
,[1543,61,0,3,0,1,40,1,"Bayani Kalasag","","For every 3 refines, decreases Boss monster damage by 1%",0]
,[1544,63,0,2,0,1,60,1,"Bayani Nightmare Bangungot Boots","","For every refine, MDEF + 1<br><b>[Refine Rate 7-10]</b><br>Increases walking speed",0]
//[Custom TalonRO Updates 2018-06-02] [Kato]
,[1545,50,0,3,0,1,100,50,"Palace Guard Cap","","Increase resistance against long range physical and magic attacks by +5%.<br /><br />Increase resistance to neutral attacks by +5%.<br /><br />Indestructible (except in upgrade attempts).<br /><br /><b>[Refine Rate 7~10]</b><br />For every refine, additional increased resistance against long range physical and magic attacks by 1%.",0,78,5,60,5,0]
,[1546,51,124,0,0,0,10,60,"Hawk Eye","","<b>[Slottable at Chiqita NPC]</b>",5,1,25,3,0]
,[1547,50,0,8,0,1,100,10,"Drooping Permeter","","Increases physical attack against Solider, Permeter, Freezer, Assaulter, Heater and Turtle General by 20%.",0]
,[1548,50,0,3,0,0,50,1,"Burning Crown","","Add a 1.5% chance of auto casting Level 3 Bash on an enemy when doing Physical damage.",63,20,42,20,0]
,[1549,11,1,190,4,1,150,95,"Guillotine Katar","",0,37,25,9,-30,5,2,5083,15,0]
,[1550,63,0,3,0,1,30,40,"Aegir Shoes","",0,13,500,14,50,194,1,0]
,[1551,62,0,2,0,1,30,40,"Aegir Cloak","",0,13,500,14,50,194,1,0]
,[1552,60,0,5,0,1,160,40,"Aegir Armor","",0,13,500,14,50,194,1,0]
,[1553,50,0,2,0,1,80,40,"Aegir Helm","",0,3,3,0]
,[1554,100,0,0,0,0,0,0,"Aegir Helm + Aegir Shoes","","Increases CRIT against Fish type monster by 1% per refinement of Aegir Shoes",115,10,0] //Aegir Helm + Aegir Shoes
,[1555,100,0,0,0,0,0,0,"Aegir Helm + Aegir Cloak","","Recovers 10 SP every time you kill a Fish type monster.<BR><BR>Add a chance to drop Sushi or Raw Fish when killing a Fish type monster, which increases per refinement rate of Aegir Cloak.<BR><BR>Increases natural HP recovery by 5% per refinement rate of Aegir Cloak.<BR><BR>Sushi and Raw Fish's HP recovery increase by 5%.",0] //Aegir Helm + Aegir Cloak
,[1556,100,0,0,0,0,0,0,"Aegir Helm + Aegir Armor","","Decreases damage from [Fish] race monsters by 1% per refinement of Aegir Armor",55,10,0] //Aegir Helm + Aegir Armor
,[1557,100,0,0,0,0,0,0,"Aegir Helm + Aegir Armor + Aegir Cloak + Aegir Shoes","","",13,1000,14,100,125,20,35,50,175,50,61,30,0] //Aegir Set
,[1558,52,0,0,0,0,10,0,"Blood Sucker","","When doing a physical attack, add a chance to absorb 5% of your damage dealt as HP.",75,-100,76,-100,0]
,[1559,8,0,130,3,2,50,50,"Red Square Bag","","If user's base Str is 90 or higher: Causes Stun effect to enemies by 5% chance.<BR>Every time you kill a monster, low chance to drop random Potion.",13,200,5244,20,5248,20,0]
,[1560,50,0,2,0,0,0,0,"Reforged Lord Kaho's Horns","","<br />Reforged Horns Of Lord Kaho. You feel a strange power emitting from them but they are not quite complete yet.",1,5,4,5,5,5,19,5,193,1,0]
,[1561,51,51,2,0,65,30,65,"Advanced Fin Helm","","Additional Maximum HP + 6 * Base Level.",13,300,0]
,[1562,50,0,2,0,1,10,0,"Blue Pajamas Hat","","A cute blue pajama hat, very cuddly. Ensures a good night's rest, giving energy to chase your dreams.",17,5,89,5,0]
,[1563,50,0,2,0,1,10,0,"Pink Pajamas Hat","","A cute pink pajama hat, very cuddly. Ensures a good night's rest, giving energy to chase your dreams.",17,5,89,5,0]
//Eden Gear
,[1564,63,0,3,0,0,0,12,"Eden Group Boots I","","Boots that are provided only for members of the Eden Group. These are designed to fit comfortably throughout long-walks.",75,10,76,2,193,1,0]
,[1565,63,0,3,0,0,0,26,"Eden Group Boots II","","Boots that are provided only for members of the Eden Group. These are designed to fit comfortably throughout long-walks.",75,12,76,4,193,1,0]
,[1566,63,0,4,0,0,0,40,"Eden Group Boots III","","Boots that are provided only for members of the Eden Group. These are designed to fit comfortably throughout long-walks.",75,14,76,6,193,1,0]
,[1567,63,0,4,0,0,0,60,"Eden Group Boots IV","","Boots that are provided only for members of the Eden Group. These are designed to fit comfortably throughout long-walks.",75,14,76,6,3,1,2,1,193,1,0]
,[1568,10,0,82,2,0,0,26,"Eden Group Bow I","","A bow that is made by the Eden Group. It's been remodeled for beginning Archers.",193,1,0]
,[1569,10,0,120,2,0,0,40,"Eden Group Bow II","","A rich bow that is made by the Eden Group. It is suitable for intermediates who have handled a bow before.",193,1,0]
,[1570,10,0,140,3,0,0,60,"Eden Group Bow III","","A rich bow that is made by the Eden Group. It is suitable for advanced level adventurers who know how to handle a bow.",193,1,0]
,[1571,1,0,124,2,0,0,26,"Eden Group Dagger I","","A practical dagger that is made by the Eden Group. This dagger is very useful for beginning adventurers.",89,5,8,10,193,1,0]
,[1572,1,0,158,2,0,0,40,"Eden Group Dagger II","","A practical dagger that is made by the Eden Group. It's suitable for an intermediate who has handled a dagger before.",89,7,8,10,193,1,0]
,[1573,1,0,165,3,0,0,60,"Eden Group Dagger III","","A practical dagger that is made by the Eden Group. It's suitable for those who have experience handling daggers.",89,10,8,10,193,1,0]
,[1574,12,0,135,3,0,0,60,"Eden Group Dictonary I","","A book that is made by the Eden Group. It is suitable for those who have more advanced experience handling magic books.",89,15,193,1,0]
,[1575,14,0,150,3,0,0,60,"Eden Group Guitar I","","An instrument that is made by the Eden Group. It is suitable for those who have more advanced experience as Bards.",193,1,0]
,[1576,50,0,1,0,0,0,12,"Eden Group Hat","","A hat that is provided only for members of the Eden Group. It's designed to go well with a suit.",193,1,0]
,[1577,50,0,1,1,0,0,60,"Eden Group Hat II","","A hat that is provided only for members of the Eden Group. It's designed to go well with a suit.<br/><br/>When dealing physical damage there's a high chance that for 5 seconds you will gain ATK + 10.<br/><br/>When dealing magic damage there's a high chance that for 5 seconds you will gain MATK + 10.",193,1,0]
,[1578,16,0,200,3,0,0,60,"Eden Group Huuma Shuriken I","","A Huuma Shuriken that is made by the Eden Group. It is suitable for experienced Ninjas only.",89,15,,8,10,193,1,0]
,[1579,12,0,155,3,0,0,60,"Eden Group Katar I","","A katar that is made by the Eden Group. It is suitable for those who have more advanced experience handling katars.",10,5,8,10,193,1,0]
,[1580,12,0,155,3,0,0,60,"Eden Group Knuckle I","","A claw that is made by the Eden Group. It is suitable for those who have more advanced experience as Champions.",12,10,8,10,193,1,0]
,[1581,8,0,142,2,0,0,26,"Eden Group Mace I","","A beginner's mace that is made exclusively by the Eden Group.",8,10,193,1,0]
,[1582,8,0,163,2,0,0,40,"Eden Group Mace II","","A mace that is made by the Eden Group.",8,10,193,1,0]
,[1583,8,0,172,3,0,0,60,"Eden Group Mace III","","A mace that is made by the Eden Group. It's suitable for an experienced mace wielder.",8,10,193,1,0]
,[1584,62,0,3,0,0,0,12,"Eden Group Manteau","","A manteau which is only for Eden Group members. It is designed to flatter anyone's backside.",60,10,193,1,0]
,[1585,62,0,4,0,0,0,60,"Eden Group Manteau II","","A manteau which is only for Eden Group members. It is designed to flatter anyone's backside.",60,10,193,1,0]
,[1586,17,0,40,2,0,0,26,"Eden Group Revolver I","","A revolver that is made by the Eden Group. This is easy for beginning Gunslingers to weild.",8,-5,193,1,0]
,[1587,17,0,60,2,0,0,40,"Eden Group Revolver II","","A revolver that is made by the Eden Group. It's suitable for an intermediate gun handler.",8,-5,193,1,0]
,[1588,17,0,76,3,0,0,60,"Eden Group Revolver III","","A revolver that is made by the Eden Group. It's suitable for an advanced gun handler.",8,-5,193,1,0]
,[1589,2,0,147,2,0,0,26,"Eden Group Saber I","","A one-handed sword that is made by the Eden Group. A weapon that can be used by anyone easily.",8,10,193,1,0]
,[1590,2,0,170,2,0,0,40,"Eden Group Saber II","","A one-handed sword that is made by the Eden Group. It's suitable for an intermediate sword handler.",8,10,193,1,0]
,[1591,2,0,185,3,0,0,60,"Eden Group Saber III","","A one-handed sword that is made by the Eden Group. It's suitable for an experienced sword handler.",8,10,193,1,0]
,[1592,3,0,162,2,0,0,26,"Eden Group Slayer I","","A Two-Handed Sword that is made by the Eden Group for a beginner Swordman.",8,10,193,1,0]
,[1593,3,0,185,2,0,0,40,"Eden Group Slayer II","","A Two-Handed Sword that is made by the Eden Group. It is suitable for intermediates who have more experience handling Two-Handed Swords.",8,10,193,1,0]
,[1594,3,0,200,3,0,0,60,"Eden Group Slayer III","","A Two-Handed Sword that is made by the Eden Group. It is suitable for those who have more advanced experience handling Two-Handed Swords.",8,10,193,1,0]
,[1595,4,0,165,3,0,0,60,"Eden Group Spear I","","A spear that is made by the Eden Group. It is suitable for those who have more advanced experience handling spears.",8,10,193,1,0]
,[1596,9,0,60,2,0,0,26,"Eden Group Staff I","","A staff that is made by the Eden Group. A basic item for a beginning Mage.",89,15,4,1,193,1,0]
,[1597,9,0,60,2,0,0,40,"Eden Group Staff II","","A staff that is made by the Eden Group. A basic item for an intermediate Mage.",89,15,4,2,193,1,0]
,[1598,9,0,60,2,0,0,60,"Eden Group Staff III","","A staff that is made by the Eden Group. An advanced item for an experienced magic practitioner.",89,16,4,3,193,1,0]
,[1599,7,0,250,3,0,0,60,"Eden Group Two Handed Axe I","","An axe that is made by the Eden Group. It is suitable for those who have more advanced experience handling Two-Handed Axes.",8,10,193,1,0]
,[1600,60,0,4,0,0,0,12,"Eden Group Uniform I","","A suit that is only provided for members of the Eden Group. There are various sizes so tall people don't have to worry about it.",13,100,14,10,193,1,0]
,[1601,60,0,6,0,0,0,26,"Eden Group Uniform II","","A suit that is only provided for members of the Eden Group. There are various sizes so tall people don't have to worry about it.",13,200,14,20,193,1,0]
,[1602,60,0,8,0,0,0,40,"Eden Group Uniform III","","A suit that is only provided for members of the Eden Group. There are various sizes so tall people don't have to worry about it.",13,300,14,30,19,5,193,1,0]
,[1603,60,0,10,0,0,0,60,"Eden Group Uniform IV","","A suit that is only provided for members of the Eden Group. There are various sizes so tall people don't have to worry about it.",13,500,14,50,19,5,1,1,5,1,4,1,193,1,0]
,[1604,15,0,150,3,0,0,60,"Eden Group Whip I","","A whip that is made by the Eden Group. It is suitable for those who have more advanced experience as Dancers.",193,1,0]
//End of Eden Gear
,[1605,62,0,2,0,0,40,95,"Loki's Muffler","","A red scarf worn out from long use.",2,1,1083,5,193,1,0]
,[1606,50,0,4,0,1,40,0,"Legionaire Hat","","It's feel like you're on the marching band just by wearing this hat.",1,1,80,3,0]
,[1607,51,0,2,0,1,50,50,"Lude Mask","","A mask which resembles a Lude. However, you will never be as awesome as a real Lude.",17,1,89,2,57,1,0]
,[1608,50,0,4,0,0,20,30,"Xmas Rudolph Hairband","","A Christmas hairband. Rudolf's excited mind for christmas is dwelled on it.<br/>You will feel like running faster.",1,3,5,2,6,3,2,3,12,5,0]
,[1609,50,0,4,0,0,20,30,"Xmas Snowman Hat","","A Christmas Snowman Hat. Wearing this always makes you look forward to a White Christmas.<br/>Add a 3% chance of freezing an enemy when receiving Physical Damage.",4,3,5,2,3,3,2,3,73,-10,221,6,0]
,[1610,50,0,2,0,0,20,1,"Xmas Rudolph Santa Hat","","Increase effectiveness of healing items by 5%.<br>A Santa Hat with antlers attached to it. Used to celebrate Xmas 2010.<br/>Gain a Christmas Firecracker when killing monsters of Non-Boss type by low chance.",7,1,73,-5,80,5,0]
,[1611,64,0,0,0,0,10,1,"Bakonawa Agimat Tattoo","","Agimat Tattoo with a dragon swallowing the moon pattern. It is told that the one who owns this tattoo will possess extreme power.",87,5,12,5,0]
,[1612,64,0,0,0,0,10,1,"Bangungot Agimat Tattoo","","Agimat Tattoo with a plump lady pattern. It is told that the one who owns this tattoo will possess extreme power.",92,7,91,4,0]
,[1613,64,0,0,0,1,10,1,"Cat Hand Glove","","A souvenir from Malangdo, just by equpping it will give you a happy mood.",3,1,2,1,6,1,0]
,[1614,64,0,0,0,0,10,1,"Buwaya Agimat Tattoo","","Agimat Tattoo with a huge Alligator pattern. It is told that the one who owns this tattoo will possess extreme power.",89,7,73,-8,0]
,[1615,64,0,0,0,0,10,0,"Bunch of Carnations","","	A carnation bouquet given as gifts to mothers.",7,3,0]
,[1616,7,1001,255,4,1,190,95,"End Sektura","","An axe made of artic ice.<br>Chance of inflicting Curse status when dealing physical damage. Risk of targeting yourself.<br>Indestructible (except in upgrade attempts).",20,1,0]
,[1617,7,1001,250,4,1,190,95,"Ygnus Stale","","A large axe made by a blacksmith from the fires of a volcano.<br>Chance of inflicting Bleeding status when dealing physical damage.<br>Risk of targeting yourself.",20,3,0]
,[1618,1,0,107,4,0,60,93,"Ancient Dagger","","A dagger used in ancient rituals, it feels as though it holds a mysterious power.<br>When dealing physical or magical damage there's a low chance to receive the Curse status.",89,10,14,100,76,5,0]
,[1619,64,0,1,0,1,10,93,"Alchemy Glove","","Magic gloves made for handling corrosive chemicals, smells a bit like charcoal.",4,1,19,2,343,10,221,127,351,25,0]
,[1620,50,0,2,0,1,0,10,"Entweihen Hairband","","It grows only on the top floor of the endless tower.<br/>This magic-filled hairband was made from the thorns.<br/>",4,1,5,1,89,1,0]
,[1621,100,0,0,0,0,0,0,"Entweihen Hairband + Dark Thorn Staff","","<br/>[Refine Rate 5~10]<br/>For every refine, add +1% MATK.<br/><br/>When equipping [Entweihen Hairband]+[Dark Thorn Staff] at the same time:<br/>[Refine Rate 5~10 Dark Thorn Staff]<br/>For every 2 refines on the Dark Thorn Staff, add +10 MATK",0]
,[1622,15,131,150,4,0,100,92,"Rosevine","","A whip created from a magically enchanted rose that radiates the smell of roses.",7,2,10,5,89,10,221,130,0]
,[1623,2,0,180,3,0,220,90,"Chrome Metal Sword","","A cold blue dagger crafted from the other world mineral Bradium.<Br>Indestructible (except in upgrade attempts).",2,1,15,-5,0]
,[1624,1,0,160,4,0,50,92,"Scarletto Nail","","Has a chance of activating Stone Curse status while physically attacking and increases the chance with each refine level.",89,5,0]
,[1625,1,0,160,4,0,50,92,"Aztoe Nail","","A dagger that shines blue and enchanted with binding magic.<Br>Has a chance of activating Freeze status while physically attacking and increases the chance with each refine level.",89,5,0]
,[1626,63,1001,3,0,1,50,85,"Enhanced Variant Shoes","","Shoes that seem to be wrong somewhere. The intention of the maker to perfect the shoes can be seen but it seems to be a failure.",15,12,16,12,0]
,[1627,11,122,170,3,1,120,90,"Agent Katar","","Add 1 HIT for every 2 LUK.",0]
,[1628,50,0,2,0,1,20,20,"Maiden Hat","","An adorable hat which is always worn on the side of head.<br>If the wearer carries an umbrella with this hat on, the wearer will look as if one is going for a picnic.<[Refine Rate 7~10]<br>Additional ATK + 1%<br>Additional MATK +1%<br>Additional Heal effectiveness + 1%",1,1,4,1,19,7,87,2,89,2,91,5,0]
//Advanced Angel Gear - Set
,[1629,50,50,6,0,1,30,99,"Advanced Angel's Kiss","","A hair ornament that was kissed by the Super Novice's Guardian Angel.",76,30,0]
,[1630,63,50,2,0,1,30,99,"Advanced Angel's Reincarnation","","Heavenly sandals worn by the Guardian Angel of Super Novices.",14,500,16,100,0]
,[1631,62,50,6,0,1,40,99,"Advanced Angelic Cardigan","","Super Novice Guardian Angel's warm and comfortable cardigan.",16,50,0]
,[1632,61,50,6,0,1,40,99,"Advanced Angelic Guard","","Super Novice Guardian Angel's shield which contains holy power that can nullify evil.",56,5,61,5,62,5,63,5,64,5,65,5,66,5,67,5,68,5,69,5,0]
,[1633,60,50,8,0,1,60,99,"Advanced Angelic Protection","","Super Novice Guardian Angel's robe.",19,20,0]
,[1634,100,0,0,0,0,0,0,"Advanced Angels Kiss + Advanced Angelic Cardigan","","",17,10,0]
,[1635,100,0,0,0,0,0,0,"Advanced Angels Reincarnation + Advanced Angels Kiss","","",89,5,0]
,[1636,100,0,0,0,0,0,0,"Advanced Angelic Cardigan + Advanced Angelic Protection","","",2,5,9,10,0]
,[1637,100,0,0,0,0,0,0,"Advanced Angelic Guard + Advanced Angel's Reincarnation","","",7,2,0]
,[1638,100,0,0,0,0,0,0,"Advanced Angelic Protection + Advanced Angelic Cardigan","","",60,5,0]
,[1639,100,0,0,0,0,0,0,"Advanced Angelic Protection, Advanced Angel's Reincarnation, Advanced Angelic Guard, Advanced Angelic Cardigan & Advanced Angel's Kiss Equip","","",13,900,14,100,221,131,0]
,[1640,9,1053,30,3,1,100,50,"Staff of Thea","","A chance to recover 200 SP after using Heal<br><b>For every two upgrades:</b><br>Increase MATK by 1%",89,15,4,6,3,2,195,1,0]
,[1641,64,1,0,0,1,10,50,"Advanced Safety Ring","","Add a 1.5% chance of auto casting level 5 Kyrie Eleison when being attacked physically<br>Every 30 VIT reduces DEF by 1<br><b>[If 2 Advanced Safety Rings are worn together]</b><br>Kyrie Eleison level increases to 10 and auto cast chance increases to 2.5%",3,1,19,3,0]
,[1642,51,54,2,0,0,10,50,"Advanced Binoculars","",0,5,1,25,1,0]
,[1643,52,81,1,0,0,10,70,"Advanced Assassin Mask","",0,10,1,70,1,0]
,[1644,51,56,2,0,0,30,50,"Advanced Welding Mask","","<b>Mid and Low Headgear</b>",5,1,6,1,63,10,0]
,[1645,50,55,2,0,1,30,0,"Improved Mage Hat","","<b>For every 2 refines:</b><br>MATK +1%<br><b>For every refine > 6:</b><br>INT + 1",4,2,14,150,0]
,[1646,50,77,6,0,1,50,50,"Improved Magician Hat","","<b>For every refine:</b><br>MSP + 5<br><b>For every refine > 6:</b><br>DEX + 1",5,1,2,1,14,50,0]
,[1647,50,1,3,0,1,10,0,"Improved Joker Jester","","<b>If refine > 6:</b><br>Critical damage + 5%",6,2,19,5,0]
,[1648,50,0,3,0,1,10,0,"Improved Bunny Band","","<b>If refine > 6:</b><br>CRIT + 5",6,2,0]
,[1649,50,0,5,0,1,30,0,"Improved Munak Hat","","<b>If refine > 6:</b><br>Increases damage against [Undead] monster by 10%",51,10,0]
,[1650,50,0,5,0,1,30,0,"Improved Bongun Hat","","<b>If refine > 6:</b><br>Increases damage against [Demon] monster by 10%",56,10,0]
,[1651,51,1,2,0,0,20,20,"Improved Opera Phantom Mask","",0,17,5,89,3,0]
,[1652,50,1,2,0,1,30,0,"Improved Kitsune Mask","","<b>If refine > 6:</b><br>Perfect Dodge + 4",2,2,6,2,0]
,[1653,12,132,100,4,2,100,90,"Chilly Spell Book","","The research of a great Sorcerer is detailed in this book. One of the 4 great elemental books (Cold Volume).<br>Add a chance of casting Storm Gust level 2 when doing a physical attack.<br>Each refine increases Cold Bolt and Storm Gust's attack power by 3%, and increases their SP cost by 5.",89,20,5,1,194,1,20,1,221,132,0]
,[1654,50,79,4,0,1,240,70,"Enhanced Hat of the Sun God","","A hat that is said to have been worn by the god of the sun.<br>[Refine Rate 5~6+]<br>ATK + 4, MATK + 1%<br>[Refine Rate 7+]<br>ATK + 6, MATK + 1%<br>[Refine Rate 8+]<br>ATK + 6, MATK + 2%",1,3,4,2,17,10,89,5,0]
,[1655,50,79,5,0,1,160,74,"Enhanced Helm of Angel","","A wondrous helmet adorned with angel wings that was made by a smithing genius.<br>[Refine Rate 5~6+]<br>AGI + 1, LUK + 1, MDEF + 1<br>[Refine Rate 7+]<br>ASPD + 1",2,1,6,1,19,3,12,5,0]
,[1656,50,70,5,0,1,240,70,"Enhanced Bone Helm","","An incredibly heavy, yet almost impenetrable helmet constructed of bone.<br>Every refine level past +4 until +8 reduces DEF by 1 and decreases damage received from Neutral Property attacks by another 1%.",60,1,67,-15,0]
,[1657,50,1,5,0,1,50,70,"Enhanced Corsair","","A flamboyant hat worn only by the strongest of pirates.<br>[Refine Rate 5~7+]<br>Maximum HP + 1%<br>[Refine Rate 8+]<br>Maximum HP + 2%<br>Reduce another 1% damage from Neutral type attacks.",3,1,15,5,60,1,0]
,[1658,50,0,5,0,1,100,70,"Lord of the Dead Helm","","[Refine Rate 5~10]<br>Increase damage on Boss monster by 1% for every refine.<br><br>[+ Abysmal Knight Card]<br>Increase damage on Boss monster by 5%.<br><br>[Refine Rate 6~10]<br>Receive 1% more damage from all monsters for every refine.",19,5,26,10,77,-5,79,-5,0]
];

//Test code for finding the values in Skill.js AutoSpellSkill
//,[1620,64,0,1,0,1,10,93,"AAt","","This shit is a test for developing comments for skills.js",221,17,0]

/*
  ZoneSoldier - 6/2/208
   id, display location, job that can use,(atk; def),lvl equip, slots, weight, lvl required to use, "name of item",  ?, "description", effect1, effect2, ..., 0 =?]
   Example : [1535 = ID,62 = Location,0 = all jobs,0 = def(atk if its a weapon),0-default = equipment level,1 = slots, 0 = weight, 60 = Level required to use item,0 = ,"Beach Manteau" = Name of object,"" = ?,0 = description(No info added so left at 0),1 = STR,1 = 1 next to str value,4 = Int,1 = Int value 1 on site,63 = Fire resistance,10 = 10% resistance,0= end]
   Location values:
   Weapons: 1 = Dagger, 2 = One-handed Sword, 3 = Two-handed Sword, 4 = One-handed Spear, 5 = Two-handed Spear, 6 = One-handed Axe, 7 = Two-handed Axe, 8 = Mace, 9 = Staff/Rod, 10 = Bow/CrossBow, 11 = 	Katar, 12 = Book, 13 = Knuckles, 	Instrument = 14, 15 = Whip, 16 = Shuriken, 17 = Revolver, 18 = Rifle, 19 = Shotgun, 20 = Gatling Gun, 21 = Gernade Launcher.
   Headgear: 50 = Upper Headgear, 51 = Middle Headgear, 52 = Lower Headgear
   Armor: 60 = 	Armor
   Shield: 61 = Shield
   Garment: 62 = Garment
   Footgear: 63 = Footgear
   Accessory: 64 = Accessory
   Digits after description. Each digit after description can mean different values: Example(1,1 = Str + 1, 4,1 = Int + 1)
   After description values: 0 NONE,1 STR,2 AGI,3 VIT,4 INT,5 DEX,6 LUK,7 ALL STATS,8 HIT,9 FLEE,10 CRIT,11 Perfect Dodge,12 ASPD,13 MHP= +/-,14 MSP= +/-,15 MHP = %,16 MSP = %,17 ATK,18 DEF,19 MDEF
*/

ItemMax = ItemOBJ.length -1;


function ClickB_Item(CBI)
{
	if(eval(document.calcForm.ITEM_SW.checked)==1 && CBI == "SW" && Item_or_Card == "Card"){
		Click_Card(ItemCardNumberCheck);
		return;
	}
	if(CBI != "SW"){
		Item_or_Card = "Item";
		ItemCardNumberCheck = CBI;
	}
	ActiveSkillSetPlus();

	if(CBI == "SW"){
		if(eval(document.calcForm.ITEM_SW.checked)==0){
			myInnerHtml("nm080","Item Data",0);
			for(i=0;i<=4;i++)
				myInnerHtml("ITEM"+i,"",0);
			myInnerHtml("ITEM_W_LV","",0);
			myInnerHtml("ITEM_DATA","",0);
			myInnerHtml("ITEM_SLOT","",0);
			myInnerHtml("ITEM_LV","",0);
			myInnerHtml("ITEM_WAIT","",0);
			myInnerHtml("B_SETUMEI","",0);
			return;
		}else{
			CBI = ItemCardNumberCheck;
		}
	}
	if(eval(document.calcForm.ITEM_SW.checked)==0)
		return;
	myInnerHtml("nm080",ItemOBJ[CBI][8],0);
	myInnerHtml("ITEM1","Slot",0);
	myInnerHtml("ITEM3","Req. Lvl",0);
	myInnerHtml("ITEM4","Weight",0);
	if(ItemOBJ[CBI][1] < 50){
		myInnerHtml("ITEM0","ATK",0);
		myInnerHtml("ITEM2","Weapon Lvl",0);
		myInnerHtml("ITEM_W_LV",ItemOBJ[CBI][4],0);
	}
	else{
		myInnerHtml("ITEM0","DEF",0);
		myInnerHtml("ITEM2","-",0);
		myInnerHtml("ITEM_W_LV","-",0);
	}
	myInnerHtml("ITEM_DATA",ItemOBJ[CBI][3],0);
	myInnerHtml("ITEM_SLOT",ItemOBJ[CBI][5],0);
	myInnerHtml("ITEM_LV",ItemOBJ[CBI][7],0);
	myInnerHtml("ITEM_WAIT",ItemOBJ[CBI][6],0);

	CBIstr = "";
	for(i=11;ItemOBJ[CBI][i] != 0;i+=2)
		Item_Setumei(ItemOBJ[CBI][i],ItemOBJ[CBI][i+1]);
	if(ItemOBJ[CBI][10] != 0)
		CBIstr += ItemOBJ[CBI][10] +"<BR>";

	var check = 0;
	for(var i=11;ItemOBJ[CBI][i] != 0;i+=2){
		if(ItemOBJ[CBI][i] == 90){
			CBIstr += "<Font size=2><BR><B>When equipping "+ SetEquipName(ItemOBJ[CBI][i+1]);
			var w = w_SE[ItemOBJ[CBI][i+1]][0];
			while(ItemOBJ[CBI][i+2] != 0 && check == 0){
				if(w == w_SE[ItemOBJ[CBI][i+3]][0]){
					CBIstr += " or<BR>"+ SetEquipName(ItemOBJ[CBI][i+3]);
					i += 2;
				}else{
					check = 1;
				}
			}
			CBIstr += " at the same time:<BR>";
			check = 0;
			for(var j=11;ItemOBJ[w][j] != 0;j+=2)
				Item_Setumei(ItemOBJ[w][j],ItemOBJ[w][j+1]);
			if(ItemOBJ[w][10] != 0)
				CBIstr += ItemOBJ[w][10] +"<BR>";
			CBIstr += "</Font></B>";
		}
	}
	myInnerHtml("B_SETUMEI",CBIstr,0);

	//custom TalonRO - deactivate SQI bonuses and interface if SQI is unequipped
	if(SQI_equipped!=0)
		if(!EquipNumSearch(SQI_equipped)) {
			document.calcForm.SQI_Bonus_SW.checked=0
			Click_SQI_Bonus_SW();
			for(i=0;i<4;i++)
				SQI_Bonus_Effect[i] = 0;
			Click_SQI_Bonus(0);
		}
}

function Item_Setumei(nC1,nC2)
{
	wNAME1 = ["0","STR","AGI","VIT","INT","DEX","LUK","All Stats","HIT","FLEE","CRIT","Perfect Dodge","ASPD","MHP","MSP","MHP","MSP","ATK","DEF","MDEF"];
	wIS = " + ";
	if(nC2 < 0)
		wIS = " ";

	if(1 <= nC1 && nC1 <=11)
		CBIstr += wNAME1[nC1] + wIS + nC2 +"<BR>";
	if(12 == nC1)
		CBIstr += wNAME1[nC1] + wIS + nC2 +"%<BR>";
	if(13 <= nC1 && nC1 <=14)
		CBIstr += wNAME1[nC1] + wIS + nC2 +"<BR>";
	if(15 <= nC1 && nC1 <=16)
		CBIstr += wNAME1[nC1] + wIS + nC2 +"%<BR>";
	if(17 <= nC1 && nC1 <=19)
		CBIstr += wNAME1[nC1] + wIS + nC2 +"<BR>";
    /*ZoneSoldier - 6/3/2018
      Elemental Weapon: 20,0 = Neutral
      0 = Neutral
      1 = Water
      2 = Earth
      3 = Fire
      4 = Wind
      5 = Poison
      6 = Holy
      7 = Shadow
      8 = Ghost
      9 = Undead
    */
	if(20 == nC1)
		CBIstr += ZokuseiOBJ[nC2] +" Element Weapon<BR>";
	if(22 == nC1){
		if(nC2 == 1)
			CBIstr += "Bypass Enemy defence [Not on bosstype]<BR>";
		else
			CBIstr += "Bypass Enemy defence [Also works on bosstype]<BR>";
	}
	if(23 == nC1)
		CBIstr += "Enemy's DEF and VIT increases damage<BR>";
	if(24 == nC1)
		CBIstr += "Reduces your defence by 1/"+ nC2 +"<BR>";
	if(25 == nC1)
		CBIstr += "Increases ranged damage by "+ nC2 +"%<BR>";
	if(26 == nC1)
		CBIstr += "Increases physical damage against bosstype monsters by "+ nC2 +"%<BR>";
	if(27 <= nC1 && nC1 <=29)
		CBIstr += "Increases physical damage against [" + SizeOBJ[nC1-27] +"] size monsters by "+ nC2 +"%<BR>";
    /*ZoneSoldier - 6/3/2018
      Increase damage against Race monsters: 30,5 = Increase physical damage against [formless] + 5%
      30 = Formless
      31 = Undead
      32 = Brute
      33 = Plant
      34 = Insect
      35 = Fish
      36 = Demon
      37 = Demi-Human
      38 = Angel
      39 = Dragon
    */
	if(30 <= nC1 && nC1 <=39)
		CBIstr += "Increases physical damage against [" + SyuzokuOBJ[nC1-30] +"] race monsters by "+ nC2 +"%<BR>";
/*
      [Kato] - 6/4/2018
      Increase damage from element: 40,5 = Increase damage from [Neural] + 5%
      40 = Neural
      41 = Water
      42 = Earth
      43 = Fire
      44 = Wind
      45 = Poison
      46 = Holy
      47 = Shadow
      48 = Ghost
      49 = Undead
    */
	if(40 <= nC1 && nC1 <=49)
		CBIstr += "Increases physical damage against [" + ZokuseiOBJ[nC1-40] +"] element monsters by "+ nC2 +"%<BR>";
  /*ZoneSoldier - 6/3/2018
    Decrease damage from race: 50,5 = Decrease damage from [Formless] + 5%
    50 = Formless
    51 = Undead
    52 = Brute
    53 = Plant
    54 = Insect
    55 = Fish
    56 = Demon
    57 = Demi-Human
    58 = Angel
    59 = Dragon
  */
	if(50 <= nC1 && nC1 <=59){
		if(nC2 > 0)
			CBIstr += "Decreases damage from [" + SyuzokuOBJ[nC1-50] +"] race monsters by "+ nC2 +"%<BR>";
		else
			CBIstr += "Increases damage from [" + SyuzokuOBJ[nC1-50] +"] race monsters by "+ (-1 * nC2) +"%<BR>";
	}
  /*ZoneSoldier - 6/3/2018
    Elemental Resistance: 60,5 = [Neutral] element resistance + 5%
    60 = Neutral
    61 = Water
    62 = Earth
    63 = Fire
    64 = Wind
    65 = Poison
    66 = Holy
    67 = Shadow
    68 = Ghost
    69 = Undead
  */
	if(60 <= nC1 && nC1 <=69){
		if(nC1 == 60){
			CBIstr += "[<b><font color='#A8A682'>" + ZokuseiOBJ[nC1-60] + "</font></b>";}
		if(nC1 == 61){
			CBIstr += "[<b><font color='blue'>" + ZokuseiOBJ[nC1-60] + "</font></b>";}
		if(nC1 == 62){
			CBIstr += "[<b><font color='brown'>" + ZokuseiOBJ[nC1-60] + "</font></b>";}
		if(nC1 == 63){
			CBIstr += "[<b><font color='red'>" + ZokuseiOBJ[nC1-60] + "</font></b>";}
		if(nC1 == 64){
			CBIstr += "[<b><font color='green'>" + ZokuseiOBJ[nC1-60] + "</font></b>";}
		if(nC1 == 65){
			CBIstr += "[<b><font color='#7B2488'>" + ZokuseiOBJ[nC1-60] + "</font></b>";}
		if(nC1 == 66){
			CBIstr += "[<b><font color='grey'>" + ZokuseiOBJ[nC1-60] + "</font></b>";}
		if(nC1 == 67){
			CBIstr += "[<b><font color='black'>" + ZokuseiOBJ[nC1-60] + "</font></b>";}
		if(nC1 == 68){
			CBIstr += "[<b><font color='#9F9E9B'>" + ZokuseiOBJ[nC1-60] + "</font></b>";}
		if(nC1 == 69){
			CBIstr += "[<b><font color='#252520'>" + ZokuseiOBJ[nC1-60] + "</font></b>";}
		CBIstr +="] element resistance "+ wIS + nC2 +"%<BR>";}
	if(70 == nC1)
		CBIstr += "Critical Damage +"+ nC2 +"%<BR>";
	if(71 == nC1)
		CBIstr += "Reflect Melee Physical Attacks by "+ nC2 +"%<BR>";
    /*ZoneSoldier - 6/3/2018
      Casting Time %
      73,10 = Casting time +10%
      73,-10 = Casting Time -10%
    */
	if(73 == nC1)
		CBIstr += "Cast Time"+ wIS + nC2 +"%<BR>";
	if(74 == nC1){
		if(nC2 > 0)
			CBIstr += "Cast Delay -" + nC2 +"%<BR>";
		else
			CBIstr += "Cast Delay +" + (nC2 * -1) +"%<BR>";
	}
	if(75 == nC1)
		CBIstr += "HP Regen"+ wIS + nC2 +"%<BR>";
	if(76 == nC1)
		CBIstr += "SP Regen"+ wIS + nC2 +"%<BR>";
	if(77 == nC1)
		CBIstr += "Bosstype monster resistance " + wIS + nC2 +"%<BR>";
	if(78 == nC1)
		CBIstr += "Adjusts your resistance to ranged attacks by "+ wIS + nC2 +"%<BR>";
	if(79 == nC1)
		CBIstr += "Adjusts your resistance to normal monsters by "+ wIS + nC2 +"%<BR>";
    /*ZoneSoldier - 6/3/2018
      Increase Damage on all monsters Boss/NonBoss by %
    */
	if(80 == nC1)
		CBIstr += "Physical damage "+ wIS + nC2 +"% [versus Normal/Boss/Guardian]<BR>";
	if(81 == nC1)
		CBIstr += "Increase physical damage on Goblin monsters by "+ wIS + nC2 +"%<BR>";
	if(82 == nC1)
		CBIstr += "Increase physical damage on Kobold monsters by "+ wIS + nC2 +"%<BR>";
	if(83 == nC1)
		CBIstr += "Increase physical damage on Orc monsters by "+ wIS + nC2 +"%<BR>";
	if(84 == nC1)
		CBIstr += "Increase physical damage on Golem monsters by "+ wIS + nC2 +"%<BR>";
	if(85 == nC1)
		CBIstr += "Lowers your defence rate by "+ nC2 +"%<BR>";
	if(86 == nC1)
		CBIstr += "Increases your chance to hit all targets by a fixed " + nC2 +"%<BR>";
    //Increase ATK by %
	if(87 == nC1)
		CBIstr += "ATK"+ wIS + nC2 +"%<BR>";
	if(88 == nC1)
		CBIstr += "MATK"+ wIS + nC2 +"% (Staff Type)<BR>";
    //Increase MATK by %
  if(89 == nC1)
		CBIstr += "MATK"+ wIS + nC2 +"%<BR>";
	if(91 == nC1)
		CBIstr += "Heal amount increased by "+ wIS + nC2 +"%<BR>";
	if(92 == nC1)
		CBIstr += "Heal amount on yourself increased by "+ wIS + nC2 +"%<BR>";
	if(93 == nC1)
		CBIstr += "Heal damage increase on undead by "+ wIS + nC2 +"%<BR>";
	if(94 == nC1 || 95 == nC1)
		CBIstr += "Sanctuary effectiveness increased by "+ wIS + nC2 +"%<BR>";
	if(96 == nC1)
		CBIstr += "Sanctuary damage effectiveness against Demon increased by "+ wIS + nC2 +"%<BR>";
	if(110 <= nC1 && nC1 <=119)
		CBIstr += "Increases the critical rate on [" + SyuzokuOBJ[nC1-110] +"] race monsters by "+ wIS + nC2 +"<BR>";
	if(120 <= nC1 && nC1 <=129)
		CBIstr += "Experience gained from [" + SyuzokuOBJ[nC1-120] +"] race monsters "+ wIS + nC2 +"%<BR>";
	if(130 <= nC1 && nC1 <=149)
		CBIstr += "When attacking, adds a "+ nC2 +"% chance to inflict ["+ IjyouOBJ[nC1-130] +"] on the enemy<BR>";
	if(150 <= nC1 && nC1 <=169)
		CBIstr += "Status effect ["+ IjyouOBJ[nC1-150] +"] resistance +"+ nC2 +"%<BR>";
	if(170 <= nC1 && nC1 <=179)
		CBIstr += "Increases magical damage against ["+ SyuzokuOBJ[nC1-170] +"] race monsters by "+ nC2 +"%<BR>";
	if(180 <= nC1 && nC1 <=189)
		CBIstr += "Completely ignore defense of [" + SyuzokuOBJ[nC1-180] +"] race monsters<BR>";
	if(190 <= nC1 && nC1 <=192){
		if(nC2 > 0)
			CBIstr += "Decrease damage from [" + SizeOBJ[nC1-190] +"] size monsters by "+ nC2 +"%<BR>";
		else
			CBIstr += "Increase damage from [" + SizeOBJ[nC1-190] +"] size monsters by "+ (-1 * nC2) +"%<BR>";
	}
	if(193 == nC1)
		CBIstr += "<br><Font color='#FF0000'>Unrefinable</Font><BR>";
	if(194 == nC1)
		CBIstr += "Cannot be broken<BR>";
	if(195 == nC1)
		CBIstr += "Two-Handed Staff<BR>";
	if(198 == nC1)
		CBIstr += "Armor becomes "+ ZokuseiOBJ[nC2] +" element<BR>";
	if(212 <= nC1 && nC1 <= 215)
		CBIstr += wNAME1[nC1 -210] + wIS + nC2 +"<BR>";
    /*ZoneSoldier - 6/3/2018
      Allows usage of the skill
      Refer to Skill.js Each number after 220
      220,1 = Basic attack
    */
	if(220 == nC1)
		CBIstr += "Allows usage of the skill ["+ SkillOBJ[InsertSkill[nC2][2]][2] +"]Lv "+ InsertSkill[nC2][3] +"<BR>";
    /*ZoneSoldier - 6/3/2018
      When Performing an action it will activate a skill
      221,6 = When performing a ATK based attack, there's a 10 % chance to cast the skill [Lightning Bolt]Lv 3
    */
	if(221 == nC1){
		wNAME99 = [0,"When performing a ATK based attack, ","When performing a short-range ATK based attack, ","When performing a long-range ATK based attack, ","When performing a magical attack, ","When attacking, ","When recieving ATK based damage, ","When recieving short-range ATK based damage, ","When recieving long-range ATK based damage, ","When recieving magical damage, ","When recieving ATK based or magical damage, "];
		wNAME98 = ["low","medium","high"];
		CBIstr += wNAME99[AutoSpellSkill[nC2][5]] +"there's a ";
    //Checks the 6th line in the AutoSpellSKill array to see if its name should be wName98
		if(AutoSpellSkill[nC2][6] == 0)
			CBIstr += wNAME98[0];
    else if(AutoSpellSkill[nC2][6] == 1)
      CBIstr += wNAME98[1];
    else if(AutoSpellSkill[nC2][6] == 2)
      CBIstr += wNAME98[2];
    //If the AutoSpellSKill 4th spot is greater than 0 give it a %
		else if(AutoSpellSkill[nC2][4] > 0)
			CBIstr += AutoSpellSkill[nC2][4] + " %";
		  CBIstr += " chance to cast the skill ["+ SkillOBJ[AutoSpellSkill[nC2][2]][2] +"]Lv "+ AutoSpellSkill[nC2][3] +"<BR>";
	}
	if(290 == nC1)
		CBIstr += "On (all?) monsters, ignore "+ nC2 +"% DEF<BR>";
	if(291 == nC1)
		CBIstr += "On Normal monsters, ignore "+ nC2 +"% DEF<BR>";
	if(292 == nC1)
		CBIstr += "On Bosstype monsters, ignore "+ nC2 +"% DEF<BR>";
	if(295 == nC1)
		CBIstr += "On (all?) monsters, ignore "+ nC2 +"% MDEF<BR>";
	if(296 == nC1)
		CBIstr += "On Normal monsters, ignore "+ nC2 +"% MDEF<BR>";
	if(297 == nC1)
		CBIstr += "On Bosstype monsters, ignore "+ nC2 +"% MDEF<BR>";
	if(300 <= nC1 && nC1 <=309)
		CBIstr += "On " + SyuzokuOBJ[nC1-300] +" race monsters, ignore "+ nC2 +"% DEF<BR>";
	if(310 <= nC1 && nC1 <=319)
		CBIstr += "On " + SyuzokuOBJ[nC1-310] +" race monsters, ignore "+ nC2 +"% MDEF<BR>";
	if(320 <= nC1 && nC1 <= 329)
		CBIstr += "On " + SyuzokuOBJ[nC1-320] +" race monster, +"+ nC2 +"% Critical Damage<BR>";
	if(330 <= nC1 && nC1 <=339)
		CBIstr += wIS + nC2 +"% damage from "+ ZokuseiOBJ[nC1-330] +" element monsters<BR>";
    /*ZoneSoldier - 6/3/2018
      Increase Damage of [Element] magic by %
      Example: 343,5 = Increase Damge of [Fire] magic by 5%
      440 = Neutral
      441 = Water
      442 = Earth
      443 = Fire
      444 = Wind
      445 = Poison
      446 = Holy
      447 = Shadow
      448 = Ghost
      449 = Undead
    */
  if(340 <= nC1 && nC1 <=349)
    CBIstr += "Increases damage of ["+ ZokuseiOBJ2[nC1-340] + "] magic by "+ nC2 +"%<BR>";
    //Recieve more Damage of [element] by %
  if(350 <= nC1 && nC1 <=359)
    CBIstr += "Recieve "+ nC2 + "%" + " more damage from " + ZokuseiOBJ2[nC1-350] + " attacks.<BR>";
    //Incease Damage of skill by %
  if(1000 <= nC1 && nC1 <=1439)
    CBIstr += "Increases damage inflicted by skill " + SkillOBJ[nC1-1000][2] + " " + nC2 + " %<b>";
	if(5000 <= nC1 && nC1 <= 6999)
		CBIstr += "["+ SkillOBJ[nC1 -5000][2] +"] damage"+ wIS + nC2 +"%<BR>";
    /*
      Reduce Cast time of Skill - Refer to Skill.js Each number 7000 - 7439
      7000 = Basic Attack
      7001 = First Aid
    */
	if(7000 <= nC1 && nC1 <= 8999){
		if(nC2 > 0)
			CBIstr += "[" + SkillOBJ[nC1 -7000][2] +"] Cast Time "+ (-1 * nC2) +"%<BR>";
		else
			CBIstr += "[" + SkillOBJ[nC1 -7000][2] +"] Cast Time "+ wIS + nC2 +"%<BR>";
	}
}

w_SE = [[737,436,475,"NULL"]
,[737,436,477,"NULL"]
,[738,288,699,"NULL"]
,[739,300,724,"NULL"]
,[740,323,725,"NULL"]
,[741,298,726,"NULL"]
,[742,684,661,691,"NULL"]
,[743,684,703,712,"NULL"]
,[744,684,704,713,"NULL"]
,[745,667,685,702,711,"NULL"]
,[746,666,701,721,722,"NULL"]
,[747,665,700,719,720,"NULL"]
,[748,664,683,690,698,710,"NULL"]
,[749,534,535,536,1425,"NULL"] //custom TalonRO Valk Set changed, Minor Valkyrie Helm instead of Valkyrie Helm
,[750,727,88,"NULL"]
,[750,727,92,"NULL"]
,[751,727,329,"NULL"]
,[751,727,342,"NULL"]
,[751,727,343,"NULL"]
,[752,694,732,"NULL"]
,[753,695,733,"NULL"]
,[754,716,706,"NULL"]
,[755,705,405,"NULL"]
,[755,705,467,"NULL"]
,[755,705,471,"NULL"]
,[756,707,717,"NULL"]
,[757,727,647,"NULL"]
,[763,478,697,"NULL"]
,[764,684,663,692,"NULL"]
,[765,684,662,"NULL"]
,[766,619,731,"NULL"]
,[767,616,692,"NULL"]
,[768,728,729,"NULL"]
,[770,769,848,"NULL"]
,[814,813,808,"NULL"]
,[818,816,817,"NULL"]
,[824,823,292,"NULL"]
,[854,829,844,"NULL"]
,[854,830,844,"NULL"]
,[855,992,616,"NULL"]
,[855,992,617,"NULL"]
,[855,992,618,"NULL"]
,[856,863,831,"NULL"]
,[857,835,836,"NULL"]
,[858,823,838,837,"NULL"]
,[858,822,838,837,"NULL"]
,[860,251,307,838,"NULL"]
,[861,521,839,"NULL"]
,[862,841,842,"NULL"]
,[971,958,965,968,"NULL"]
,[972,959,965,968,"NULL"]
,[973,960,965,968,"NULL"]
,[974,961,966,969,"NULL"]
,[975,962,966,969,"NULL"]
,[976,963,966,969,"NULL"]
,[977,964,967,970,"NULL"]
,[995,718,994,"NULL"]
,[999,987,998,1001,"NULL"]
,[1004,442,1003,"NULL"]
,[1006,442,1005,"NULL"]
,[1008,946,1007,"NULL"]
,[1010,990,1009,"NULL"]
,[1042,198,1041,"NULL"]
,[1053,1050,1051,1052,"NULL"]
,[1058,1055,1056,1057,"NULL"]
,[1114,1104,1107,1110,"NULL"]
,[1115,1111,978,"NULL"]
,[1115,1111,979,"NULL"]
,[1115,1111,980,"NULL"]
,[1115,1111,981,"NULL"]
,[1115,1111,982,"NULL"]
,[1115,1111,983,"NULL"]
,[1115,1111,984,"NULL"]
,[1202,247,1182,"NULL"]
,[1203,1189,1192,"NULL"]
,[1209,1208,385,"NULL"]
,[1210,1208,381,"NULL"]
,[1211,1208,805,"NULL"]
,[1212,1208,887,"NULL"]
,[1213,1208,1037,"NULL"]
,[1237,1235,1236,"NULL"]
,[1238,684,1236,"NULL"]
,[1249,251,1248,"NULL"]
,[1311,1306,1309,1310,"NULL"]
,[1392,1365,475,"NULL"] //custom TalonRO Survivor's Manteau R
,[1392,1365,477,"NULL"] //custom TalonRO Survivor's Manteau R
,[750,1367,88,"NULL"] //custom TalonRO Spiritual Ring R
,[750,1367,92,"NULL"] //custom TalonRO Spiritual Ring R
,[751,1367,329,"NULL"] //custom TalonRO Spiritual Ring R
,[751,1367,342,"NULL"] //custom TalonRO Spiritual Ring R
,[751,1367,343,"NULL"] //custom TalonRO Spiritual Ring R
,[757,1367,647,"NULL"] //custom TalonRO Spiritual Ring R
,[1409,1407,1408,"NULL"] //custom TalonRO Love Piece & Heart Wing Hairband
,[1418,1416,1417,"NULL"] //custom TalonRO Special Carrot In Mouth & Sheila Hairnet
,[1421,1319,368,"NULL"] //custom TalonRO Well-Chewed Pencil & Model Training Hat
,[1431,1430,1228,"NULL"] //custom TalonRO Magical Booster & Southern Cross
,[1432,1430,645,"NULL"] //custom TalonRO Magical Booster & Staff of Piercing
,[1433,1430,473,"NULL"] //custom TalonRO Magical Booster & Staff of Piercing
,[1461,1459,1460,"NULL"] //custom TalonRO Imperial Guard & Imperial Spear
,[1464,1005,1463,"NULL"] //custom TalonRO Black Cat & Black Wing
,[1471,1470,730,"NULL"] //custom TalonRO Wunderkammer & Lesser Elemental Ring
,[1476,1459,1460,1475,"NULL"] //custom TalonRO Imperial Guard & Imperial Spear & Imperial Feather
,[1489,1488,1174,"NULL"] //custom TalonRO Little Feather Hat & Falken Blitz
,[1494,1493,271,"NULL"] //custom TalonRO Ultimate Ascended Black Dragon Hat & Pipe
,[1510,1508,1509,"NULL"] //custom TalonRO Mental Stick & Telekinetic Orb combo
,[1514,1513,610,"NULL"] //custom TalonRO Green Surgical Gown & Mes combo
,[1518,1517,1175,"NULL"] //custom TalonRO Assassin's Glove & Krishna combo
,[1519,1517,1176,"NULL"] //custom TalonRO Assassin's Glove & Chakram combo
,[1521,1520,1169,"NULL"] //custom TalonRO Geffenia Water Book & Lacrima Stick combo
,[1524,1523,377,"NULL"] //custom TalonRO Evil Mask & Succubus Horn combo
,[1525,1523,374,"NULL"] //Custom TalonRO Evil Mask & Incubus Horn combo
,[1537,1535,1536,"NULL"] //Custom TalonRO Beach Manteau & Beach Sandals combo
,[1554,1553,1550,"NULL"] //[Custom TalonRO - 2018-06-02 - Aegir helm + shoes] [Kato]
,[1555,1553,1551,"NULL"] //[Custom TalonRO - 2018-06-02 -Aegir helm + cloak] [Kato]
,[1556,1553,1552,"NULL"] //[Custom TalonRO - 2018-06-02 -Aegir helm + armor] [Kato]
,[1557,1550,1551,1552,1553,"NULL"] //[Custom TalonRO - 2018-06-02 - All Aegir Set] [Kato]
,[1621,1620,936,"NULL"] //[Custom TalonRO1 - 2018-06-02 - Entweihen Hairband + Dark Thorn Staff [ZoneSoldier]
,[1634,1629,1631,"NULL"] //Custom TalonRO - 2018-06-06 - Advanced Angels Kiss + Advanced Angelic Cardigan [ZoneSoldier]
,[1635,1630,1629,"NULL"] //Custom TalonRO - 2018-06-06 - Advanced Angels Reincarnation + Advanced Angels Kiss [ZoneSoldier]
,[1636,1631,1633,"NULL"] //Custom TalonRO - 2018-06-06 - Advanced Angelic Cardigan + Advanced Angelic Protection [ZoneSoldier]
,[1637,1632,1630,"NULL"] //Custom TalonRO - 2018-06-06 - Advanced Angelic Guard + Advanced Angel's Reincarnation [ZoneSoldier]
,[1638,1633,1631,"NULL"] //Custom TalonRO - 2018-06-06 - Advanced Angelic Protection + Advanced Angelic Cardigan [ZoneSoldier]
,[1639,1633,1630,1632,1631,1629,"NULL"] //Custom TalonRO - 2018-06-06 - Advanced Angelic Protection, Advanced Angel's Reincarnation, Advanced Angelic Guard, Advanced Angelic Cardigan & Advanced Angel's Kiss [ZoneSoldier]
];
SE_MAXnum = w_SE.length -1;
for(var i=0;i<=SE_MAXnum;i++){
	for(var k=1;w_SE[i][k] != "NULL";k++){
		for(var j=11;ItemOBJ[w_SE[i][k]][j] != 0;j+=2);
		ItemOBJ[w_SE[i][k]][j]=90;
		ItemOBJ[w_SE[i][k]][j+1]=i;
		ItemOBJ[w_SE[i][k]][j+2]=0;
	}
}

function SetEquipName(SENw){
	var SENstr = "";
	for(var i=0;i<=SE_MAXnum;i++){
		if(i == SENw){
			for(var j=1;w_SE[i][j] != "NULL";j++){
				SENstr += "["+ ItemOBJ[w_SE[i][j]][8] +"]";
				if(w_SE[i][j+1] != "NULL")
					SENstr += "+";
			}
			return SENstr;
		}
	}
}


function SetEquip()
{
	for(var i=11;i<=20;i++)
		n_A_Equip[i] = 736;

	var w_num= 11;
	var w_ch = 0;
	for(var k=0;k<=SE_MAXnum;k++){
		for(var j=1;w_SE[k][j] != "NULL"  && (w_ch == 1 || (w_ch == 0 && j == 1));j++){
			w_ch = 0;
			for(var i=0;i<=10 && w_ch == 0;i++){
				if(n_A_Equip[i] == w_SE[k][j])
					w_ch = 1;
			}
		}
		if(w_ch == 1){
			n_A_Equip[w_num] = w_SE[k][0];
			w_num++;
		}
	}
}
