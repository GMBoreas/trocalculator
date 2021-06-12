debugMode = 0;
n_Nitou=0;
n_Tensei=0;
n_Ses=0;
n_Enekyori=0;
w_AG=[100,95,90,86,82,79,76,74,72,71,70];
n_SkillSW=0;
n_Skill3SW=0;
n_Skill4SW=0;
n_Skill5SW=0;
n_Skill6SW=0;
n_Skill7SW=0;
n_Skill8SW=0;
//custom TalonRO - Skill9SW
n_Skill9SW=0;
n_ENSKSW=0;
n_IjyouSW=0;
n_KyoukaSW=0;
wBCEDPch=0;
wLAch=0;
wCriTyuu=0;
wBTw1=0;
n_TAKA_DMG=0;
TyouEnkakuSousa3dan = 0;
not_use_card = 0;
support_autospell = 0;
support_double_casting = 0;	
str_bSUBname = "";
str_bSUB = "";
SuperNoviceFullWeaponCHECK = 0;
cast_kotei = 0;
b = 0;
n_PerHIT_DMG = 0;
n_Delay = [0,0,0,0,0,0,0];
wDelay = 0;
n_tok = new Array();
for(var i=0;i<=450;i++)
	n_tok[i] = 0;
var first_check = 0;
n_B = new Array();
Last_DMG_A = [0,0,0];
Last_DMG_B = [0,0,0];
InnStr = new Array();

SG_Special_HITnum = 0;
SG_Special_DMG = [0,0,0];

Item_or_Card = "Item";
ItemCardNumberCheck = 142;

//custom TalonRO SQI Bonus Calculation
SQI_Bonus_Effect = [0,0,0,0];
n_SQI_Bonus_SW = 0;
SQI_equipped = 0;

//custom TalonRO debug-mode-atk (finger offensive)
debug_atk = "";
debug_mode = 0;
debug_dmg_avg = 0;

//custom TalonRO
EQB = [1,0,0,0];

//[Custom TalonRO 2018-06-15 - Global for Malangdo Enchants values] [Kato]
tRO_MalangdoEnchantment = [0,0,0,0];

//[Custom TalonRO 2018-07-10 - Global for Biolab Weapon Enchants values] [NattWara]
tRO_BiolabWeaponEnchantment = [0,0,0,0];

//[Custom TalonRO 2018-07-12 - Global for Eden Weapon Enchants values] [NattWara]
tRO_EdenWeaponEnchantment = [0,0,0,0,0,0];

//[Custom TalonRO 2018-07-10 - Global for Biolab Armor Enchants values] [NattWara]
//[Headgear1,Headgear2,Armor1,Armor2,Shield1,Shield2,Garment1,Garment2,Acc1_1,Acc1_2,Acc2_1,Acc2_2]
tRO_BiolabArmorEnchantment = [0,0,0,0,0,0,0,0,0,0,0,0];

//[Custom TalonRO 2018-07-12 - Global for Eden Armor Enchants values] [NattWara]
//[Hat,Armor1,Armor2,Garment1,Garment2,Footgear1,Footgear2]
tRO_EdenArmorEnchantment = [0,0,0,0,0,0,0];

//[Custom TalonRO 2018-07-12 - Global for El Dicaste Enchants values] [NattWara]
//[Garment1,Garment2,Garment3,Footgear1,Footgear2,Footgear3,Accessory1_1,Accessory1_2,Accessory1_3,Accessory2_1,Accessory2_2,Accessory2_3]
//Added values new values for Golden Trickle so it's not overwritten by Light of El Dicastes [Loa]
tRO_EDEnchantment = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//[Custom TalonRO 2018-07-12 - Global for Mora Enchants values] [NattWara]
//[Armor1,Armor2,Armor3,Garment1,Garment2,Garment3,Accessory1_1,Accessory1_2,Accessory1_3,Accessory2_1,Accessory2_2,Accessory2_3]
tRO_MoraEnchantment = [0,0,0,0,0,0,0,0,0,0,0,0];

function myInnerHtml(wIH1,wIH2,wIH3)
{
	if(wIH3 == 0){
		wIHOB = document.getElementById(wIH1);
		while(wIHOB.hasChildNodes()){
			wIHOB.removeChild(wIHOB.firstChild);
		}
		wIHOB.innerHTML = wIH2;
	}else{
		wIHOB = document.getElementById(wIH1);
		wIHOB.insertAdjacentHTML('BeforeEnd',wIH2);

	}
}

WeaponName = ["Unarmed","Dagger","Sword","Two-handed Sword","Spear","Two-handed Spear","Axe","Two-handed Axe","Mace","Staff","Bow","Katar","Book","Knuckle","Instrument","Whip","Huuma Shuriken","Revolver","Rifle","Shotgun","Gatling Gun","Grenade Launcher"];

ArrowOBJ = [
[25,0,"Arrow"],//0
[30,6,"Silver Arrow"],//1
[30,3,"Fire Arrow"],//2
[30,0,"Iron Arrow"],//3
[30,2,"Stone Arrow"],//4
[30,1,"Crystal Arrow"],//5
[30,4,"Arrow of Wind"],//6
[30,7,"Arrow of Shadow"],//7
[30,8,"Immaterial Arrow"],//8
[30,5,"Rusty Arrow"],//9
[40,0,"Steel Arrow"],//10
[50,0,"Oridecon Arrow"],//11
[50,6,"Arrow of Counter Evil"],//12
[ 1,1,"Frozen Arrow"],//13
[ 1,5,"Poison Arrow"],//14
[10,0,"Sharp Arrow"],//15
[50,6,"Holy Arrow"],//16
[35,0,"Hunting Arrow"],//17
[45,0,"Elven Arrow"],//18
];

ArrowOBJbackup = [
[25,0,"Arrow"],
[30,6,"Silver Arrow"],
[30,3,"Fire Arrow"],
[30,0,"Iron Arrow"],
[30,2,"Stone Arrow"],
];

BulletOBJ = [
[10,0,"Bullet"],
[15,6,"Silver Bullet"],
[30,0,"Blood Bullet"],
//custom TalonRO elemental bullets
[15,3,"Fire Bullet"],
[15,4,"Wind Bullet"],
[15,2,"Earth Bullet"],
[15,1,"Water Bullet"],
[15,7,"Shadow Bullet"],
[15,8,"Immaterial Bullet"],
];

GrenadeOBJ = [
[50,3,"Flare Sphere"],
[50,1,"Freezing Sphere"],
[50,4,"Lightning Sphere"],
[50,7,"Blind Sphere"],
[50,5,"Poison Sphere"],
];

SyurikenOBJ = [
[10,0,"Shuriken"],
[30,0,"Numbus Shuriken"],
[45,0,"Flash Shuriken"],
[70,0,"Sharp Leaf Shuriken"],
[100,0,"Thorn Needle Shuriken"],
];

KunaiOBJ = [
[30,3,"Heat Wave Kunai"],
[30,1,"Icicle Kunai"],
[30,4,"High Wind Kunai"],
[30,2,"Black Earth Kunai"],
[30,5,"Fell Poison Kunai"],
];

JobEquipItemOBJ = [
[0,50,90,93,94,95,96,100,999], //Novice
[0, 1, 51,101, 70, 71, 72, 74, 75,78,83,84,85,86,87,90,91,93,94,95,999], //Swordman
[0, 1, 52,102, 72, 74, 75,78, 80,83,84,85,90,91,92,93,94,999], //Thief
[0, 1, 53,103, 71, 73, 74, 77,78,85,89,95,96,152,999], //Acolyte
[0, 1, 54,104, 75, 76,83,89,92,999], //Archer
[0, 1, 55,105, 71, 77,89,96,152,999], //Mage
[0, 1, 56,106, 70, 71, 72, 73, 74, 75,78,83,84,85,86,90,91,93,94,95,999], //Merchant
[0, 1, 51, 61,107, 70, 71, 72, 74, 75,78,79,83,84,85,86,87,90,91,93,94,999], //Knight
[0, 1, 52, 62,108, 72, 74, 75,78,79,81,83,84,85,90,91,93,94,999], //Assassin
[0, 1, 53, 63,109, 71, 73, 74, 77,78,79,81,85,89,95,96,999], //Priest
[0, 1, 54, 60,64,110, 75, 76,79,80,83,88,89,92,999], //Hunter
[0, 1, 55, 65,111, 71, 77,79,89,96,999], //Wizard
[0, 1, 56, 66,112, 70, 71, 72, 73, 74, 75,78,79,83,84,85,86,90,91,93,94,95,999], //Blacksmith
[0, 1, 51, 61,113, 70, 71, 72, 74, 75,78,79,83,84,85,86,87,90,91,93,94,999], //Crusader
[0, 1, 52, 62,114, 72, 74, 75, 76,78,79,80,83,84,85,88,91,92,93,94,999], //Rogue
[0, 1, 53, 63,115, 71, 73, 74, 77,78,79,85,89,95,96,999], //Monk
[0, 1, 54, 60,64,116, 74, 75, 76,79,83,89,92,999], //Bard
[0, 1, 54, 60,64,117, 74, 75, 76,79,83,89,92,999], //Dancer
[0, 1, 55, 65,118, 71, 77,79,89,96,999], //Sage
[0, 1, 56, 66,119, 70, 71, 72, 73, 74, 75,78,79,83,84,85,86,90,91,93,94,95,999], //Alchemist
[0,50,90,93,94,95,96,120,999], // Super Novice
[0, 1, 51, 61,107,121, 70, 71, 72, 74, 75,78,79,82,83,84,85,86,87,90,91,93,94,95,999], //Lord Knight
[0, 1, 52, 62,108,122, 72, 74, 75,78,79,81,82,83,84,85,90,91,93,94,999], //Assassin Cross
[0, 1, 53, 63,109,123, 71, 73, 74, 77,78,79,81,82,85,89,95,96,151,152,999], //High Priest
[0, 1, 54, 60,64,110,124, 75, 76,79,80,82,83,88,89,92,999], //Sniper
[0, 1, 55, 65,111,125, 71, 77,79,82,89,96,151,152,999], //High Wizard
[0, 1, 56, 66,112,126, 70, 71, 72, 73, 74, 75,78,79,82,83,84,85,86,90,91,93,94,95,999], //Whitesmith
[0, 1, 51, 61,113,127, 70, 71, 72, 74, 75,78,79,82,83,84,85,86,87,90,91,93,94,95,999], //Paladin
[0, 1, 52, 62,114,128, 72, 74, 75, 76,78,79,80,82,83,84,85,88,91,92,93,94,999], //Stalker
[0, 1, 53, 63,115,129, 71, 73, 74,77,78,79,82,85,89,95,96,152,999], //Champion
[0, 1, 54, 60,64,116,130, 74, 75, 76,79,82,83,89,153,92,999], //Clown
[0, 1, 54, 60,64,117,131, 74, 75, 76,79,82,83,89,153,92,999], //Gypsy
[0, 1, 55, 65,118,132, 71,77,79,82,89,152,96,999], //Professor
[0, 1, 56, 66,119,133, 70, 71, 72, 73, 74, 75,78,79,82,83,84,85,86,90,91,93,94,95,999], //Creator
[0],
[0],
[0],
[0],
[0],
[0],
[0],
[0, 1,141, 83,84,85,86,150,999], //Taekwon Kid //custom
[0, 1,142, 79,83,84,85,86,87,91,150,999], //Star Gladiator
[0, 1,143, 55, 65, 71, 77,79,89,93,96,999], //Soul Linker
[0, 1,144, 58, 52, 91, 93,999], //Ninja
[0, 1,145, 59, 60, 83,145,999], //Gunslinger
];

/*
	JobEquipItemOBJ values - [Loa] - 2018-06-03

		0 = all jobs
		1 = every job except novice

		50 = novice
		51 = swordman class
		52 = thief class, ninja
		53 = acolyte class
		54 = archer class
		55 = mage class, soul linker
		56 = merchant class
		58 = ninja
		59 = gunslinger
		60 = archer class, gunslinger

		61 = knight, crusader
		62 = assassin, rogue
		63 = priest, monk
		64 = hunter, bard, dancer
		65 = wizard, sage, soul linker
		66 = blacksmith, alchemist

		70 = swordman class, merchant class
		71 = swordman class, mage class, acolyte class, merchant class, soul linker
		72 = swordman class, merchant class, thief class
		73 = acolyte class, merchant class
		74 = swordman class, acolyte class, merchant class, thief class, bard/dancer
		75 = swordman class, archer class, merchant class, thief class
		76 = archer class, rogue
		77 = mage class, acolyte class, soul linker
		78 = swordman class, acolyte class, merchant class, thief class
		79 = 2nd class or above
		80 = thief, hunter, rogue
		81 = priest, assassin
		82 = rebirth 2nd class or above
		83 = swordman class, archer class, merchant class, thief class, taekwon, star gladiator, gunslinger
		84 = swordman class, merchant class, thief class, taekwon, star gladiator
		85 = swordman class, acolyte class, merchant class, thief class, taekwon, star gladiator
		86 = swordman class, merchant class, taekwon, star gladiator
		87 = swordman class, star gladiator
		88 = hunter, rogue
		89 = mage class, acolyte class, archer class, soul linker
		90 = novice, swordman class, merchant class, thief, assassin
		91 = swordman class, merchant class, thief class, star gladiator, ninja
		92 = archer class, thief, rogue
		93 = novice, swordman class, merchant class, thief class, ninja, soul linker
		94 = novice, swordman class, merchant class, thief class
		95 = novice, swordman class, merchant class, acolyte class
		96 = novice, mage class, acolyte class, soul linker

		100 = novice ONLY
		101 = swordman ONLY
		102 = thief ONLY
		103 = acolyte ONLY
		104 = archer ONLY
		105 = mage ONLY
		106 = merchant ONLY

		107 = knight
		108 = assassin
		109 = priest
		110 = hunter
		111 = wizard
		112 = blacksmith
		113 = crusader
		114 = rogue
		115 = monk
		116 = bard
		117 = dancer
		118 = sage
		119 = alchemist

		120 = high novice
		121 = lord knight
		122 = assassin cross
		123 = high priest
		124 = sniper
		125 = high wizard
		126 = whitesmith
		127 = paladin
		128 = stalker
		129 = champion
		130 = clown
		131 = gypsy
		132 = professor
		133 = creator

		141 = taekwon ONLY
		142 = star gladiator
		143 = soul linker
		144 = ninja
		145 = gunslinger
		150 = taekwon, star gladiator //for SQI
		151 = priest, wizard
		152 = mage ONLY, acolyte ONLY, high priest, high wizard, champion, professor

	Unless otherwise stated, upper classes are included.
		Example 1: 109 = priest //includes high priest
		Example 2: 80 = thief, hunter, rogue //does not include assassin
		Example 3: 101 = swordman ONLY //no other classes included
	Adding 1000 makes it rebirth classes only.
		Example 1: 1 = every job except novice, 1001 = every rebirth job except high novice
		Example 2: 51 = swordman class, 1051 = trans swordman class
	If a class cannot equip an item type, even if the JobEquipItemOBJ value includes that class, it will not show up in the calculator
		For example: the JobEquipItemOBJ value of Jamadhar (id:112) is 0 (all classes)
		Since only assassins can equip katars, the item will only be an option for assassins in the calculator since no other classes can choose a katar as the weapon
	To add new jobids, simply add the new value to the subarrays in JobEquipItemOBJ for the classes that should be able to equip the item
*/

SyuzokuOBJ = ["Formless","Undead","Brute","Plant","Insect","Fish","Demon","Demi-Human","Angel","Dragon","Unknown"];
ZokuseiOBJ = ["<b><font color='#A8A682'>Neutral</font></b>","<b><font color='blue'>Water</font></b>","<b><font color='brown'>Earth</font></b>","<b><font color='red'>Fire</font></b>","<b><font color='green'>Wind</font></b>","<b><font color='#7B2488'>Poison</font></b>","<b><font color='#CDCD40'>Holy</font></b>","<b><font color='black'>Shadow</font></b>","<b><font color='#9F9E9B'>Ghost</font></b>","<b><font color='#252520'>Undead</font></b>"];
ZokuseiOBJ2 =["Neutral","Water","Earth","Fire","Wind","Poison","Holy","Shadow","Ghost","Undead"];
SizeOBJ = ["Small","Medium","Large"];
IjyouOBJ = ["Poison","Stun","Freeze","Curse","Blind","Sleep","Silence","Chaos","Bleeding","Stone","Weapon Break","Armor Break"];
EnergyCoatOBJ = ["0","6% Reduction","12% Reduction","18% Reduction","24% Reduction","30% Reduction"];
SpecialTypeOBJ = ["None","Goblin","Golem","Guardian","Kobold","Orc","Satan Morroc"];
BossTypeOBJ = ["Normal","Boss"];

SubName = ["%","s","Damage","Critical Damage","Critical Rate","Over 10000 Hits","Too High to Calculate","Immesurable"," x ","Cast Time","Off","On"];

function BattleCalc999()
{
	wbairitu = 1;
	wCast = 0;
	wHITsuu = 1;
	n_Enekyori=0;
	wLAch=0;

	w_DMG = [0,0,0];
	not_use_card = 0;
	cast_kotei = 0;
	zeny_cost = 0;

	str_PerHIT_DMG = 0;
	SG_Special_ch = 0;
	for(var i=0;i<=2;i++){
		Last_DMG_A[i] = 0;
		Last_DMG_B[i] = 0;
	}

	str_bSUB = "";
	str_bSUBname = "";
	InnStr = ["", "", ""];

	if(n_A_ActiveSkill != 0 && n_A_ActiveSkill !=272 && n_A_ActiveSkill !=401 && !(n_A_ActiveSkill == 86 && (50 <= n_B[3] && n_B[3] < 60))){
		myInnerHtml("CRIATK","",0);
		myInnerHtml("CRInum","",0);
		myInnerHtml("CRIATKname","",0);
		myInnerHtml("CRInumname","",0);
	}

	if(n_A_WeaponType==10 && n_A_ActiveSkill==0)
		n_Enekyori=1;

	if((n_A_WeaponType==17||n_A_WeaponType==18||n_A_WeaponType==19||n_A_WeaponType==20||n_A_WeaponType==21)&& n_A_ActiveSkill==0)
		n_Enekyori=1;


	if(n_A_ActiveSkill==0 || (n_A_ActiveSkill==86 && (50 <= n_B[3] && n_B[3] < 60))){ // Poison React [Counter]#86
		myInnerHtml("CRIATKname",SubName[3],0);
		myInnerHtml("CRInumname",SubName[4],0);

		if(n_A_ActiveSkill==86){
			n_Delay[0] = 1;
		}
		debug_atk+="\n --- (BattleCalc999) skill calc:0,86 ---";
		if(n_Nitou){
			TyouEnkakuSousa3dan = 0;

			//custom TalonRO ignore effects on left/offhand like Ice Pick and bIgnoreDefRace
			manage_left_hand_effect(-1);

			n_A_workDEX = Math.floor(n_A_DEX * (1 + (n_A_Weapon2LV - 1) * 0.2));

			if(n_A_workDEX>=n_A_Weapon2_ATK)
				w_left_Maxatk = n_A_ATK + n_A_Weapon2LV_Maxplus + Math.floor(n_A_Weapon2_ATK * wCSize);
			else
				w_left_Maxatk = n_A_ATK + n_A_Weapon2LV_Maxplus + Math.floor((n_A_Weapon2_ATK - 1) * wCSize);

			w_left_Maxatk = BattleCalc4(w_left_Maxatk * wbairitu,2,1);

			if(w_left_Maxatk<1)w_left_Maxatk=1;
			w_left_Maxatk = Math.floor(w_left_Maxatk * zokusei[n_B[3]][n_A_Weapon2_zokusei]);

			w_left_star = 0;
			if(n_A_card[4]==106 && n_A_card[5]==106 && n_A_card[6]==106){
				w_left_star += 40;
			}else{
				for(i=4;i<=6;i++){
					if(cardOBJ[n_A_card[i]][0]==106)
						w_left_star += 5;
				}
			}
			if(n_A_card[7]==106)
				w_left_star += 10;
			w_left_Maxatk += w_left_star;
			w_left_Maxatk = w_left_Maxatk * (3 + SkillSearch(80)) /10;
			w_left_Maxatk = Math.floor(w_left_Maxatk);

			if(n_A_workDEX > n_A_Weapon2_ATK)
				n_A_workDEX = n_A_Weapon2_ATK;
			w_left_Minatk = n_A_ATK + n_A_Weapon2LV_Minplus + Math.floor(n_A_workDEX * wCSize);
			w_left_Minatk = BattleCalc4(w_left_Minatk * wbairitu,0,1);
			
			manage_left_hand_effect(1);

			if(w_left_Minatk<1)
				w_left_Minatk=1;
			w_left_Minatk = Math.floor(w_left_Minatk * zokusei[n_B[3]][n_A_Weapon2_zokusei]);
			w_left_Minatk  += w_left_star;
			w_left_Minatk *= (0.3 + SkillSearch(80) /10);
			w_left_Minatk = Math.floor(w_left_Minatk);

			w_left_Aveatk = (w_left_Maxatk + w_left_Minatk) /2;

			w_left_Maxatk = tPlusDamCut(w_left_Maxatk);
			w_left_Minatk = tPlusDamCut(w_left_Minatk);
			w_left_Aveatk = tPlusDamCut(w_left_Aveatk);

			ATKbai02(wbairitu,0);

			n_Min_DMG += w_left_Minatk;
			n_Max_DMG += w_left_Maxatk;

			w_DMG[0] = BattleCalc(n_A_DMG[0],0);

			var wX = w_DMG[0] + EDP_DMG(0);

			Last_DMG_A[0] = Last_DMG_B[0] = wX + w_left_Minatk;
			InnStr[0] += wX +" ("+ w_left_Minatk +")";
			if(w998D){
				str_bSUBname += "Double Attack chance<BR>";
				str_bSUB += (wX *2 + w_left_Minatk) +"~";
			}
			if(wX + w_left_Minatk < n_Min_DMG && w998G < 100)
				n_Min_DMG = wX + w_left_Minatk;
			w_DMG[0] = n_Min_DMG;

			w_DMG[2] = BattleCalc(n_A_DMG[2],2);

			var wX = w_DMG[2] + EDP_DMG(2) + w_left_Maxatk;
			Last_DMG_A[2] = Last_DMG_B[2] = wX + w_left_Maxatk;
			InnStr[2] += w_DMG[2] + EDP_DMG(2) +" ("+ w_left_Maxatk +")";
			if(w998D){
				wX = (w_DMG[2] + EDP_DMG(2)) * 2 + w_left_Maxatk;
				str_bSUB += wX +" ("+ w998D +"%)<BR>";
			}
			if(wX > n_Max_DMG && w998G < 100)
				n_Max_DMG = wX;
			w_DMG[2] = n_Max_DMG;

			w_DMG[1] = BattleCalc(n_A_DMG[1],1);

			var wX = w_DMG[1] + EDP_DMG(1);
			Last_DMG_A[1] = Last_DMG_B[1] = wX + w_left_Aveatk;
			InnStr[1] += wX +" ("+ w_left_Aveatk +")";

			w_DMG[1] = BattleCalc3(w_DMG[1]);
			w_DMG[1] += BattleCalc3left(w_left_Aveatk);
			w_DMG[1] += EDP_DMG(1);

			EDPhyouzi(1);

			var wX = BattleCalc2(0);
			var wX2 = Math.floor(w_left_star * (0.3 + SkillSearch(80) /10));

			n_PerHIT_DMG = wX + wX2;
			str_PerHIT_DMG = wX +"+"+ wX2;

			CastAndDelay();
			BattleCalc998();
		}
		else{
			n_TAKA_DMG=0;
			//debug_atk+="\n --- (BattleCalc999) BlitzBeat ---";
			//debug_atk+="\nb_wTAKA:not defined(manuell)";
			wTAKA = BattleTAKA();
			//debug_atk+="\na_wTAKA:"+wTAKA;
			TyouEnkakuSousa3dan = 0;

			//debug_atk+="\n --- (BattleCalc999) Triple Attack ---";
			//debug_atk+="\nb_n_Min_DMG:"+n_Min_DMG;
			//debug_atk+="\nb_n_Max_DMG:"+n_Max_DMG;
			if(SkillSearch(187)){ // Triple Attack#187
				TyouEnkakuSousa3dan = -1;
				wBC3_3danAtkBairitu = SkillSearch(187) * 0.2;
				var san = [0,0,0];
				for(var i=0;i<=2;i++){
					san[i] = BattleCalc(n_A_DMG[i] * (wbairitu + wBC3_3danAtkBairitu),i) + EDP_DMG(i);
					
					san[i] = san[i] * (1 + (StPlusCalc2(5187) +  StPlusCard(5187)) / 100);
					san[i] = Math.floor(san[i] /3) *3;
					if(n_B[19] == 5)
						san[i] = 3;
				}
				str_bSUBname += "Raging Trifecta Blow Damage<BR>";
				str_bSUB += san[0] +"~"+ san[2] +" ("+ (30 - SkillSearch(187) + 10 * CardNumSearch(619)) +"% Chance)<BR>";
				TyouEnkakuSousa3dan = 0;
				if(n_Min_DMG > san[0])
					n_Min_DMG = san[0];
				if(n_Max_DMG < san[2])
					n_Max_DMG = san[2];
			}
			//debug_atk+="\na_n_Min_DMG:"+n_Min_DMG;
			//debug_atk+="\na_n_Max_DMG:"+n_Max_DMG;

			debug_atk+="\n --- (BattleCalc999) extra Boni: Powerthrust/Fighting Chant ---";
			debug_atk+="\nb_ATKbai02 (n_A_DMG[1]):"+n_A_DMG[1];
			ATKbai02(wbairitu,0);
			debug_atk+="\na_ATKbai02 (n_A_DMG[1]):"+n_A_DMG[1];

			for(var i=0;i<=2;i++) {
				if (i==1) {
					debug_dmg_avg=1;
					debug_atk+="\nb_BattleCalc (w_DMG[1]):"+w_DMG[i]+"\n\tn_A_DMG[1]:"+n_A_DMG[i];
				}
				w_DMG[i] = BattleCalc(n_A_DMG[i],i);
				if (i==1) {
					debug_dmg_avg=0;
					debug_atk+="\na_BattleCalc (w_DMG[1]):"+w_DMG[i];
				}
			}

			var w_KATARU = [0,0,0];
			var w_Ave_KATARU = 0;
			if(n_A_WeaponType == 11){
				for(i=0;i<=2;i++)
					w_KATARU[i] = Math.floor((w_DMG[i] + EDP_DMG(i)) * (0.01 + SkillSearch(13) * 0.02));
				w_Ave_KATARU = Math.floor(w_DMG[1] * (0.01 + SkillSearch(13) * 0.02));
			}

			Last_DMG_B[0] = w_DMG[0] + EDP_DMG(0);
			Last_DMG_A[0] = Last_DMG_B[0] + w_KATARU[0];
			InnStr[0] += Last_DMG_A[0];
			if(n_A_WeaponType == 11)
				InnStr[0] = Last_DMG_A[0] +" ("+ Last_DMG_B[0] +"+"+ w_KATARU[0] +")";
			if(Last_DMG_A[0] < n_Min_DMG && w998G < 100)
				n_Min_DMG = Last_DMG_A[0];
			if(w998D){
				if(n_A_WeaponType == 17 && SkillSearch(427)){
					if(CardNumSearch(43) || EquipNumSearch(570))
						str_bSUBname += "Double attack chance<BR>";
					else
						str_bSUBname += "Chain action chance<BR>";
				}else
					str_bSUBname += "Double attack chance<BR>";
				str_bSUB += Last_DMG_A[0] * 2 +"~";
			}
			w_DMG[0] = n_Min_DMG;

			Last_DMG_B[2] = w_DMG[2] + EDP_DMG(2);
			Last_DMG_A[2] = Last_DMG_B[2] + w_KATARU[2];
			InnStr[2] += Last_DMG_A[2];
			if(n_A_WeaponType == 11)
				InnStr[2] = Last_DMG_A[2] +" ("+ Last_DMG_B[2] +"+"+ w_KATARU[2] +")";
			n_Max_DMG += n_TAKA_DMG;
			var wX = Last_DMG_A[2];
			wX += n_TAKA_DMG;
			if(n_Max_DMG < wX && w998G < 100)
				n_Max_DMG = wX;
			if(w998D){
				var wX = (w_DMG[2] + EDP_DMG(2) + w_KATARU[2]) *2;
				str_bSUB += wX +" ("+ w998D +"%)<BR>";
				wX += n_TAKA_DMG;
				if(n_Max_DMG < wX)
					n_Max_DMG = wX;
			}
			w_DMG[2] = n_Max_DMG;

			Last_DMG_B[1] = w_DMG[1] + EDP_DMG(1);
			Last_DMG_A[1] = Last_DMG_B[1] + w_KATARU[1];
			InnStr[1] += Last_DMG_A[1];
			if(n_A_WeaponType == 11)
				InnStr[1] = Last_DMG_A[1] +" ("+ Last_DMG_B[1] +"+"+ w_KATARU[1] +")";
			if(SkillSearch(187))
				TyouEnkakuSousa3dan = san[1];

			w_DMG[1] += w_Ave_KATARU;
			w_DMG[1] = BattleCalc3(w_DMG[1]);
			w_DMG[1] += wTAKA;
			w_DMG[1] += EDP_DMG(1);

			EDPhyouzi(1);

			CastAndDelay();
			BattleCalc998();
		}
		if (debug_mode)
			alert(debug_atk);
		return;
	}else if(n_A_ActiveSkill==272 || n_A_ActiveSkill==401){ // Sharp Shooting#272, Shadow Slash#401
		myInnerHtml("CRIATKname","Critical Hit",0);
		myInnerHtml("CRInumname","Critical Attack chance",0);

		if(n_A_ActiveSkill==272){
			n_Enekyori=1;
			wbairitu += (1 + 0.5 * n_A_ActiveSkillLV);
			wCast = 2 * n_A_CAST;
			n_Delay[2] = 1.5;
		}else{
			n_Delay[0] = 1;
			n_Enekyori=0;
			wbairitu += (n_A_ActiveSkillLV -1);
		}


		for(i=0;i<=2;i++)
			n_A_CriATK[i] = n_A_DMG[i];

		ATKbai02(wbairitu,1);

		wCriTyuu=1;
		for(var i=0;i<=2;i++)
			n_A_CriATK[i] = BattleCalc(n_A_CriATK[i],10);

		wCriTyuu=0;


		for(var i=0;i<=2;i++)
			n_A_CriATK[i] += EDP_DMG(i);

		if(w998G >= 100)
			n_Min_DMG = n_A_CriATK[0];
		if(w998G > 0)
			n_Max_DMG = n_A_CriATK[2];
		myInnerHtml("CRIATK",n_A_CriATK[0] +"~"+ n_A_CriATK[2],0);

		ATKbai02(wbairitu,0);

		for(var i=0;i<=2;i++){
			w_DMG[i] = BattleCalc(n_A_DMG[i],i);
			Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i] + EDP_DMG(i);
			InnStr[i] += Last_DMG_A[i];
		}

		if(w998G >= 100)
			w_DMG[0] = n_Min_DMG;
		if(w998G > 0)
			w_DMG[2] = n_Max_DMG;


		w_DMG[1] = BattleCalc3(w_DMG[1]);

		EDPplus(1);

		CastAndDelay();
		BattleCalc998();
		return;
	}

	w_ActS=[6,7,19,41,44,65,71,72,73,83,84,111,158,161,169,171,176,188,189,199,207,248,260,261,264,288,289,290,292,302,303,305,306,307,308,326,317,318,331,333,335,337,339,382,388,398,400,419,423,428,430,431,432,434,435,436,437,"NULL"];
	for(iw=0;w_ActS[iw] != n_A_ActiveSkill && w_ActS[iw] != "NULL";iw++);
	if(n_A_ActiveSkill==w_ActS[iw]){
		wActiveHitNum = 1;
		if(n_A_ActiveSkill==6)
			wbairitu += n_A_ActiveSkillLV *0.3;
		else if(n_A_ActiveSkill==7){
			wbairitu += n_A_ActiveSkillLV *0.2;
			n_A_Weapon_zokusei = 3;
			n_Delay[2] = 2;
		}else if(n_A_ActiveSkill==19){
			not_use_card = 1;
			wbairitu += 0.3;
			n_A_Weapon_zokusei = 2;
		}else if(n_A_ActiveSkill==41){
			n_Enekyori=1;
			wbairitu += n_A_ActiveSkillLV *0.05 - 0.25;
			n_Delay[2] = 1;
		}else if(n_A_ActiveSkill==44){
			n_Enekyori=1;
			wCast = 1.5;
			wbairitu += 0.5;
		}else if(n_A_ActiveSkill==65) // Mammonite#65
		{
			zeny_cost = n_A_ActiveSkillLV * 100;
			
			// #46#56 - 75% reduced zeny cost with [Mammonite]
			if (SQI_Bonus_Effect.findIndex(x => x == 46) > -1 || SQI_Bonus_Effect.findIndex(x => x == 56) > -1)
				zeny_cost = Math.ceil(zeny_cost * 0.25);
			
			// Goldsmithing Dagger#1677
			if (EquipNumSearch(1677))
				zeny_cost = Math.ceil(zeny_cost * 0.90);
			
			wbairitu += n_A_ActiveSkillLV *0.5;
		}
		else if(n_A_ActiveSkill==71){
			wbairitu += n_A_ActiveSkillLV *0.2;
			n_Enekyori=1;
		}else if(n_A_ActiveSkill==84){
			if(n_A_ActiveSkillLV >= 3)
				n_Enekyori=1;
			wbairitu += 0.2 * n_A_ActiveSkillLV;
		}else if(n_A_ActiveSkill==158){
			wbairitu += n_A_ActiveSkillLV *0.2;
		}else if(n_A_ActiveSkill==161){
			wbairitu += n_A_ActiveSkillLV *0.35;
			n_A_Weapon_zokusei = 6;
		}else if(n_A_ActiveSkill==171)
			wbairitu += n_A_ActiveSkillLV *0.4;
		else if(n_A_ActiveSkill==72){
			wbairitu += n_A_ActiveSkillLV *0.5;
			n_Delay[2] = 1;
			n_Enekyori=1;
		}
		else if (73 == n_A_ActiveSkill) // Brandish Spear#73
		{
			wCast = 0.7;
			skill_ratio = 1 + n_A_ActiveSkillLV * 0.2;
			aoe_position = eval(document.calcForm.SkillSubNum.value);
			
			// #131 - inflict full damage regardless of AoE position
			if (1386 == n_A_Equip[0] && SQI_Bonus_Effect.findIndex(x => x == 131) > -1)
				aoe_position = 0;
			
			wbairitu += skill_ratio - 1;
			
			if(n_A_ActiveSkillLV > 3 && aoe_position == 0)
				wbairitu += skill_ratio / 2;
			if(n_A_ActiveSkillLV > 6 && aoe_position == 0)
				wbairitu += skill_ratio / 4;
			if(n_A_ActiveSkillLV > 9 && aoe_position == 0)
				wbairitu += skill_ratio / 8;
			if(n_A_ActiveSkillLV > 6 && aoe_position == 1)
				wbairitu += skill_ratio / 2;
			if(n_A_ActiveSkillLV > 9 && aoe_position == 1)
				wbairitu += skill_ratio / 4;
			if(n_A_ActiveSkillLV > 9 && aoe_position == 2)
				wbairitu += skill_ratio / 2;
		}else if(n_A_ActiveSkill==83 || n_A_ActiveSkill==388){ // Sonic Blow#83#388 (Soul Linked)

			wActiveHitNum = 8;
			wbairitu += n_A_ActiveSkillLV *0.5 + 2;
			if(n_A_ActiveSkill==388 && Taijin==0)
				wbairitu *= 2;
			if(n_A_ActiveSkill==388 && Taijin==1){
				if(n_Ses)
					wbairitu *= 1.25;
				else
					wbairitu *= 2;
			}
			n_Delay[3] = 2;
		}else if(n_A_ActiveSkill==111){
			n_Delay[0] = 1;
			not_use_card = 1;
			n_A_Weapon_zokusei = 1;
		}else if(n_A_ActiveSkill==169){
			wbairitu += n_A_ActiveSkillLV *0.4 + 2;
			n_Delay[2] = 0.5;
			w_HIT = 100;
			w_HIT_HYOUJI = 100;
		}else if(n_A_ActiveSkill==176){
			wbairitu += n_A_ActiveSkillLV * 0.3;
			n_Delay[2] = 1;
		}else if(n_A_ActiveSkill==188){
			wActiveHitNum = 4;
			wbairitu += 0.5+n_A_ActiveSkillLV *0.5;
			n_Delay[0] = 1;
			n_Delay[1] = 0.1;
			n_Delay[3] = 1 - (0.004 * n_A_AGI) - (0.002 * n_A_DEX);
		}else if(n_A_ActiveSkill==189){
			wbairitu += 1.4+n_A_ActiveSkillLV *0.6;
			n_Delay[0] = 1;
			n_Delay[1] = 0.1;
			n_Delay[3] = 0.7 - (0.004 * n_A_AGI) - (0.002 * n_A_DEX);
		}else if(n_A_ActiveSkill==199||n_A_ActiveSkill==207){
			wCast = 1.5;
			wbairitu += (n_A_ActiveSkillLV * 0.4 - 0.4);
			n_A_Weapon_zokusei = ArrowOBJ[n_A_Arrow][1];
			if(eval(document.calcForm.A_Weapon_zokusei.value) != 0)
				n_A_Weapon_zokusei = eval(document.calcForm.A_Weapon_zokusei.value);
			n_Enekyori=1;
		}else if(n_A_ActiveSkill==248){
			not_use_card = 1;
			n_A_Weapon_zokusei = 3;
			
			n_Delay[0] = 1;
			// #57 - [Demonstration] damage interval reduced by 75% (every 0.25 secs instead of 1 sec)
			if (SQI_Bonus_Effect.findIndex(x => x == 57) > -1)
				n_Delay[0] = 0.25

			wCast = 1;
			wbairitu += n_A_ActiveSkillLV *0.2;
			w_HIT = 100;
			w_HIT_HYOUJI = 100;
		}else if(n_A_ActiveSkill==260){
			n_Enekyori=1;
			wbairitu += n_A_ActiveSkillLV *0.4;
			n_Delay[2] = 0.5;
		}else if(n_A_ActiveSkill==261){
			n_Enekyori=1;
			wbairitu += (n_A_ActiveSkillLV *0.1 -0.5);
			if(n_A_ActiveSkillLV > 5)
				n_Delay[2] = 1;
			else
				n_Delay[2] = 0.8;
		}else if(n_A_ActiveSkill==264){
			not_use_card = 1;
			wbairitu += (n_A_ActiveSkillLV *0.4 -0.6);
			wCast = 0.5;
			n_Delay[2] = 0.5;
		}else if(n_A_ActiveSkill==288){
			wbairitu += (1 + n_A_ActiveSkillLV);
			n_Delay[2] = 0.3;
		}else if(n_A_ActiveSkill==289){
			n_Delay[0] = 1;
			wbairitu += n_A_ActiveSkillLV -0.6;
			n_Delay[1] = 0.1;
			n_Delay[3] = 0.7 - (0.004 * n_A_AGI) - (0.002 * n_A_DEX);
		}else if(n_A_ActiveSkill==290){
			n_Delay[0] = 1;
			wbairitu += (3 + n_A_ActiveSkillLV);
			if(n_A_ActiveSkillLV>6) n_Delay[2]=1;
			else n_Delay[2]=0.8;
		}else if(n_A_ActiveSkill==292){ // Arrow Vulcan#292
			wActiveHitNum = 9;
			wbairitu += 1 + n_A_ActiveSkillLV;
			n_A_Weapon_zokusei = ArrowOBJ[n_A_Arrow][1];
			if(eval(document.calcForm.A_Weapon_zokusei.value) != 0)
				n_A_Weapon_zokusei = eval(document.calcForm.A_Weapon_zokusei.value);
			n_Enekyori=1;
			wCast = 1.8 + n_A_ActiveSkillLV *0.2;
			if (n_A_ActiveSkillLV > 5)
				n_Delay[2] = 3;
			else
				n_Delay[2] = 2.8;
			n_Delay[3] = 2;
		}else if(n_A_ActiveSkill==302){
			n_Enekyori=1;
			not_use_card = 1;
			n_A_Weapon_zokusei = 4;
		}else if(n_A_ActiveSkill==303){
			wbairitu += (n_A_ActiveSkillLV -1) * 1;
		}else if(n_A_ActiveSkill==306){
			n_Enekyori=1;
			not_use_card = 1;
			n_A_DMG[1] += Math.floor(14.5 * wCSize);
			n_A_DMG[2] += Math.floor(29 * wCSize);
		}else if(n_A_ActiveSkill==307){
			n_Enekyori=1;
			not_use_card = 1;
			wbairitu += 0.5;
		}else if(n_A_ActiveSkill==308){
			var w;
			w = eval(document.calcForm.SkillSubNum.value);
			wbairitu += w;
			wCast = 0.5 * (w+1);
			if(wCast > 1.5)
				wCast = 1.5;
		}else if(n_A_ActiveSkill==317){
			n_Delay[0] = 1;
			n_Delay[5] = 0.05;
			if(n_B[19]==1)
				n_Delay[5] = 0.1;
			if(Taijin==1){
				str_bSUBname += "<Font size=2>SP damage</Font><BR>";
				str_bSUB += "15<BR>";
			}
		}else if(n_A_ActiveSkill==318){
			n_Delay[5] = 0.05;
			if(n_B[19]==1)
				n_Delay[5] = 0.1;
			if(Taijin==1){
				n_Delay[0] = 1;
				str_bSUBname += "<Font size=2>SP damage</Font><BR>";
				str_bSUB += "15<BR>";
			}
		}else if(n_A_ActiveSkill==326){ // Cart Termination#326
			not_use_card = 1;
			zeny_cost = (5 + n_A_ActiveSkillLV) * 100;
			wbairitu += Math.floor((eval(document.calcForm.SkillSubNum.value) / (16 - n_A_ActiveSkillLV) / 100 -1) * 100) /100;
		}else if(n_A_ActiveSkill==382){
			not_use_card = 1;
			wbairitu += 2;


		}else if(n_A_ActiveSkill==331 || n_A_ActiveSkill==333){
			n_Delay[0] = 1;
			wbairitu += (0.6 + n_A_ActiveSkillLV * 0.2);
		}else if(n_A_ActiveSkill==335 || n_A_ActiveSkill==337){
			n_Delay[0] = 1;
			wbairitu += (0.9 + n_A_ActiveSkillLV * 0.3);
			if(n_A_ActiveSkill==337)
				wActiveHitNum = 3;
		}else if(n_A_ActiveSkill==339){
			n_Delay[0] = 1;
			wbairitu += (-0.7 + n_A_ActiveSkillLV * 0.1);
		}else if(n_A_ActiveSkill==305){
			n_Delay[0] = 1;
			if(SkillSearch(379) && n_A_WeaponType==0)
				wbairitu += (n_A_BaseLV * 0.08 - 1);
			else
				wbairitu += (n_A_BaseLV * 0.04 - 1);
		}else if(n_A_ActiveSkill==398){
			wbairitu += (n_A_ActiveSkillLV * 0.1);
			n_Delay[2] = 3;
		}else if(n_A_ActiveSkill==400){
			n_Delay[0] = 1;
			wbairitu += (n_A_ActiveSkillLV * 0.1);
			n_Delay[2] = 1;
		}else if(n_A_ActiveSkill==419){
			not_use_card = 1;
			wCast = 0.5;
			n_Delay[2] = 1;
			n_Enekyori=1;
			wActiveHitNum = 5;
			if(n_B[2] == 2 || n_B[2] == 7)
				wbairitu += 4;
		}else if(n_A_ActiveSkill==423){
			n_Enekyori=1;
			n_Delay[2] = 0.5;
			n_A_Weapon_zokusei = 8;
			not_use_card = 1;
		}else if(n_A_ActiveSkill==428){
			n_Enekyori=1;
			wActiveHitNum = 5;
			wbairitu += n_A_ActiveSkillLV *0.5 + 4;
			n_Delay[2] = 1;
		}else if(n_A_ActiveSkill==430){ // Tracking#430
			if(n_A_Weapon_ATKplus > 8 && EquipNumSearch(1100)){TCcast = 1.25;}
			else if(EquipNumSearch(926)){TCcast = .75;}
			else{TCcast = 1;}
			wCast = (1 + (0.2 * n_A_ActiveSkillLV))*TCcast;
			//cast_kotei = 1;
			n_Enekyori=1;
			wbairitu += n_A_ActiveSkillLV *1 +1;

			w_HIT = w_HIT * 5 +5;
			if(w_HIT > 100)
				w_HIT = 100;
			w_HIT_HYOUJI = w_HIT;
			
			if (EquipNumSearch(1787)) // RAG203#1787
			{
				n_tok[23] = 1; // Enable bDefRatioAtkClass
				n_Delay[3] = 1; // 1 second irreducible delay
			}
				
		}else if(n_A_ActiveSkill==431){
			wCast = 2;
			n_Delay[2] = 1;
			n_Enekyori=1;
		}else if(n_A_ActiveSkill==432){
			wCast = 1.5;
			n_Enekyori=1;
			wbairitu += n_A_ActiveSkillLV *0.2;
			n_Delay[2] = 0.5;
			w_HIT = 100;
			w_HIT_HYOUJI = 100;
		}else if(n_A_ActiveSkill==434){ // Dust#434
			wCast = 1;
			n_Enekyori=0;
			wbairitu += n_A_ActiveSkillLV *0.5;
			n_Delay[3] = 1;
		}else if(n_A_ActiveSkill==435){
			n_Enekyori=1;
			wbairitu += n_A_ActiveSkillLV * 1 + 2;
			n_Delay[2] = 1 + n_A_ActiveSkillLV *0.2;
		}else if (n_A_ActiveSkill == 436) // Spread Attack#436
		{
			n_Enekyori=1;
			wbairitu += n_A_ActiveSkillLV * 0.2 - 0.2;
		}
		else if(n_A_ActiveSkill==437){
			n_Enekyori=1;
			not_use_card = 1;
			wCast = 1;
			n_Delay[2] = 1;
		}

		ATKbai02(wbairitu,0);

		if(cast_kotei == 0)
			wCast = wCast * n_A_CAST;

		for(var i=0;i<=2;i++){
			w_MagiclBulet = i;
			w_DMG[i] = BattleCalc(n_A_DMG[i],i);
			if(wActiveHitNum > 1)
				w_DMG[i] = Math.floor(w_DMG[i] / wActiveHitNum) * wActiveHitNum;

			Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i] + EDP_DMG(i);
			InnStr[i] += Last_DMG_A[i];
			if(wActiveHitNum > 1)
				InnStr[i] += " ("+ (w_DMG[i] / wActiveHitNum) +" x "+ wActiveHitNum +"Hit)";
		}
		w_MagiclBulet = 1;

		w_DMG[1] = (w_DMG[1] * w_HIT + BattleCalc2(0) *(100-w_HIT))/100;

		EDPplus(1);

		if(cast_kotei == 0)
			CastAndDelay();
		BattleCalc998();
	}else if(n_A_ActiveSkill==275){ // Magic Crasher#275
		n_Enekyori=1;
		wCast = 0.3;
		n_Delay[2] = 0.3;
		wCast = wCast * n_A_CAST;

		for(var i=0;i<=2;i++){
			w_DMG[i] = BattleCalc(BK_n_A_MATK[i],i);
			Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i] + EDP_DMG(i);
			InnStr[i] += Last_DMG_A[i];
		}
		n_PerHIT_DMG = BattleCalc2(0)+n_A_WeaponLV_seirenATK;
		w_DMG[1] = (w_DMG[1] * w_HIT + n_PerHIT_DMG *(100-w_HIT))/100;

		EDPplus(1);

		CastAndDelay();
		BattleCalc998();
	}
	else if (22 == n_A_ActiveSkill) // Throw Stone#22
	{
		n_Enekyori = 1;

		for (i = 0; i <=2; ++i)
		{
			w_DMG[i] = 50;
			InnStr[i] += w_DMG[i];
		}

		CastAndDelay();
		BattleCalc998();
	}
	else if(n_A_ActiveSkill==40||n_A_ActiveSkill==70||n_A_ActiveSkill==111||n_A_ActiveSkill==192||n_A_ActiveSkill==76||n_A_ActiveSkill==418||n_A_ActiveSkill==391||n_A_ActiveSkill==429){
		if(n_A_ActiveSkill==40){
			n_Enekyori=1;
			wbairitu += n_A_ActiveSkillLV *0.1 -0.1;
			wHITsuu = 2;
		}else if(n_A_ActiveSkill==70){
			wbairitu += n_A_ActiveSkillLV *0.1;
			wHITsuu = n_B[4]+1;
		}else if(n_A_ActiveSkill==76){
			wbairitu += n_A_ActiveSkillLV *0.4;
			wCast = 0.7 * n_A_CAST;
			wHITsuu = 2;
			if(n_A_ActiveSkillLV == 1)
				wHITsuu = 1;
			wLAch=1;
			if(n_B_IJYOU[6] == 1){
				wHITsuu = 3;
				if(n_A_ActiveSkillLV == 1)
					wHITsuu = 2;
			}
		}else if(n_A_ActiveSkill==192){
			wbairitu += n_A_ActiveSkillLV *0.5;
			if(n_A_JOB==15||n_A_JOB==29)
				w = SkillSearch(185);
			else
				w = n_A_PassSkill2[10];
			if(w > n_A_ActiveSkillLV){
				w = n_A_ActiveSkillLV;
			}
			wHITsuu = w;
			wCast = (1 + w) * n_A_CAST;
			n_Delay[2] = 0.5;
			n_Enekyori=1;
		}
		else if(n_A_ActiveSkill==418) // Triple Action#427
		{
			wHITsuu = 3;
			n_Enekyori = 1;
			wbairitu += 0.5;
		}
		else if(n_A_ActiveSkill==391){
			n_Delay[0] = 1;
			n_Enekyori=1;
			wbairitu += n_A_STR *0.08 - 0.5;
			wHITsuu = 2;
		}else if(n_A_ActiveSkill==429){
			n_Enekyori=0;
			wbairitu += n_A_ActiveSkillLV *0.5 - 0.5;
			n_Delay[2] = 1;
			var DEATH = [1,1.2,1.6,2,2.4,3,3.6,4,5,6,7,8,9,10];
			wHITsuu = DEATH[eval(document.calcForm.SkillSubNum.value)];
		}
		debug_atk+="\n --- (BattleCalc999) skill calc:40,77,111,192,76,418,391,429 ---";
		debug_atk+="\nb_ATKbai02:"+n_A_DMG[1];
		ATKbai02(wbairitu,0);
		debug_atk+="\na_ATKbai02:"+n_A_DMG[1];
		for(var i=0;i<=2;i++){
			if (i==1) {
				debug_atk+="\nb_BattleCalc (w_DMG[1]):"+w_DMG[i];
			}
			w_DMG[i] = BattleCalc(n_A_DMG[i],i);
			if (i==1) {
				debug_atk+="\na_BattleCalc (w_DMG[1]):"+w_DMG[i];
			}
			if(n_A_ActiveSkill==391 && n_B[2]!=2 && n_B[2]!=4)
				w_DMG[i] = 0;

			w_DMG[i] += EDP_DMG(i);
			Last_DMG_B[i] = w_DMG[i];
			if(n_A_ActiveSkill==76)
				Last_DMG_B[i] = w_DMG[i] * 2;
			Last_DMG_A[i] = w_DMG[i] * wHITsuu;
			if(n_B_IJYOU[6] == 0 || wLAch==0)
				InnStr[i] += Math.floor(w_DMG[i] * wHITsuu) + " ("+ w_DMG[i] + SubName[8] +wHITsuu+"hit)";
			else{
				InnStr[i] += w_DMG[i] * 3 +"("+ w_DMG[i] * 2 +"+"+ w_DMG[i] +")";
				Last_DMG_B[i] = w_DMG[i] * 3;
			}
			w_DMG[i] -= EDP_DMG(i);
			w_DMG[i] *= wHITsuu;
		}
		var wX = BattleCalc2(0);
		w_DMG[1] = (w_DMG[1] * w_HIT + wX * wHITsuu *(100-w_HIT))/100;

		if(wHITsuu == 0 && n_A_ActiveSkill==192){
			if(n_A_JobSearch2() == 15)
				InnStr[0] = "<Font color=Red><B>Please change Summon Spirit<BR>Sphere to a value higher than 0</B></Font>";
			else
				InnStr[0] = "<Font color=Red><B>Please change the number of<BR>Spirit Spheres to a value higher than 0<BR>[At Supportive/Party Skills]</B></Font>";
		}
		EDPplus(wHITsuu);

		n_PerHIT_DMG = wX * wHITsuu;
		str_PerHIT_DMG = wX * wHITsuu +" ("+ wHITsuu + SubName[8] + wX +" Damage)";

		CastAndDelay();
		BattleCalc998();
	}

	else if(n_A_ActiveSkill==118 || n_A_ActiveSkill==271){
		n_PerHIT_DMG = 0;
		n_A_Weapon_zokusei = 0;
		n_Enekyori=1;
		wBT = 80 + Math.floor(n_A_DEX /10)*2 + Math.floor(n_A_INT/2)*2 + SkillSearch(119) *6;
		if(n_A_ActiveSkill==271){
			wBT = Math.floor(wBT * (150 + 70 * n_A_ActiveSkillLV) /100);
			wBT = Math.floor(wBT * zokusei[n_B[3]][0]);
			wBT = tPlusDamCut(wBT);
			wBT *= 5;
			if(n_B[19] == 5)
				wBT = 1;
			wCast = 1 * n_A_CAST;
			n_Delay[2] = 3;
		}else{
			wBT = Math.floor(wBT * zokusei[n_B[3]][0]);
			wBT = tPlusDamCut(wBT);
			wBT *= n_A_ActiveSkillLV;
			wCast = 1.5 * n_A_CAST;
			n_Delay[2] = 1;
		}

		for(var i=0;i<=2;i++){
			Last_DMG_A[i] = Last_DMG_B[i] = wBT;
			InnStr[i] += Last_DMG_A[i];
			if(n_A_ActiveSkill==118){
				Last_DMG_B[i] = wBT / n_A_ActiveSkillLV;
				InnStr[i] += " ("+ Last_DMG_B[i] +" x "+ n_A_ActiveSkillLV +"Hit)";
			}
			w_DMG[i] = wBT;
		}
		w_HIT_HYOUJI = 100;
		CastAndDelay();
		BattleCalc998();
	}

	else if(n_A_ActiveSkill==17 || (n_A_ActiveSkill==86 && (n_B[3] < 50 ||  60 <= n_B[3]))){
		ATKbai02(wbairitu,0);
		n_A_Weapon_zokusei = 5;
		wINV = Math.floor(BattleCalc2(0) * zokusei[n_B[3]][5]);
		n_PerHIT_DMG = wINV;

		for(var i=0;i<=2;i++){
			w_DMG[i] = BattleCalc(n_A_DMG[i],i);
			w_DMG[i] = Math.floor(w_DMG[i] * zokusei[n_B[3]][5]);

			Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i] + EDP_DMG(i);
			InnStr[i] += Last_DMG_A[i];
		}
		w_DMG[1] = (w_DMG[1] * w_HIT + wINV *(100-w_HIT))/100;

		EDPplus(1);
		CastAndDelay();
		BattleCalc998();
	}

	else if (n_A_ActiveSkill == 159 || n_A_ActiveSkill == 384 || n_A_ActiveSkill == 324) // Shield Chain#324 Shield Boomerang#159#384
	{
		nb_hits = 5;
		n_Enekyori = 1;
		n_Delay[2] = 1;
		n_PerHIT_DMG = 0;
		wCast = n_A_CAST;
		n_A_Weapon_zokusei = 0;
		is_piercing_attack = 0; // Ice Pick 
		shield_refine = n_A_LEFT_DEF_PLUS;
		shield_weight  = ItemOBJ[n_A_Equip[5]][6];
		
		if (n_A_ActiveSkill == 159 || n_A_ActiveSkill == 384) // Shield Boomerang#159#384
		{
			wCast = 0;
			nb_hits = 1;
			is_piercing_attack = n_tok[23]; // Ice Pick effect disabled for Shield Chain
			n_Delay[2] = (n_A_ActiveSkill == 384 ? 0.35 : 0.7);
		}

		skill_ratio = (1 + n_A_ActiveSkillLV * 0.3);

		damage = [0,0,0].map(x => Math.floor((n_A_ATK + shield_weight) * skill_ratio));
		
		// Apply skill modifiers
		damage = damage.map(x => ApplySkillAtkBonus(x));
		
		// Apply status modifiers, in that case soul link
		damage = damage.map(x => (n_A_ActiveSkill == 384 ? x * 2 : x));
		
		// Apply defense reduction
		damage = ApplyDefReduction(damage, 0, is_piercing_attack);
		
		// Add refine bonus
		damage = damage.map(x => x + shield_refine * 10);

		// Apply modifiers
		damage = damage.map(x => BaiCI(x));
		
		// Take into consideration monster element
		damage = damage.map(x => Math.floor(x * zokusei[n_B[3]][n_A_Weapon_zokusei]));
		
		total_damage = damage.map(x => Math.floor(x * nb_hits));
		
		for (i = 0; i <= 2; ++i)
		{
			InnStr[i] += total_damage[i] + (nb_hits - 1 ? " ("+ damage[i] + SubName[8] + nb_hits + " hits)" : "");
			w_DMG[i] = total_damage[i] * w_HIT / 100;
		}

		CastAndDelay();
		BattleCalc998();
	}
	else if(n_A_ActiveSkill==259)
	{
		n_Enekyori=1;

		wSPP2 = n_A_WeaponLV_seirenATK * zokusei[n_B[3]][n_A_Weapon_zokusei];
		wSPP2 = BaiCI(wSPP2);
		wSPP2 = tPlusDamCut(wSPP2);
		n_PerHIT_DMG = wSPP2 * 5;

		if(n_A_ActiveSkillLV == 5)
			wCast = 1 * n_A_CAST;
		else
			wCast = (0.1 + 0.2 * n_A_ActiveSkillLV) * n_A_CAST;
		n_Delay[2] = 1+ 0.2 * n_A_ActiveSkillLV;

		wSPP = Math.floor(n_A_STR / 10);
		w_DMG[2] = wSPP * wSPP + ItemOBJ[n_A_Equip[0]][6] * 0.8 * (1 + 0.5 * n_A_ActiveSkillLV);
		wSPP = 1.25 -(n_B[4] * 0.25); // Size modifier
		w_DMG[2] = Math.floor(w_DMG[2] * wSPP + n_A_WeaponLV_seirenATK);
		w_DMG[2] += SkillSearch(69) * (4 + Math.min(1, SkillSearch(78))); // Spear Mastery
		w_DMG[2] = w_DMG[2] * zokusei[n_B[3]][n_A_Weapon_zokusei];
		w_DMG[2] = BaiCI(w_DMG[2]);
		w_DMG[0] = w_DMG[1] = w_DMG[2];
		for(var i=0;i<=2;i++){
			Last_DMG_B[i] = w_DMG[i] + EDP_DMG(i);
			Last_DMG_A[i] = Last_DMG_B[i] * 5;
			InnStr[i] += Last_DMG_A[i] + " ("+ Last_DMG_B[i] + SubName[8] +"5hit)";
			w_DMG[i] = Last_DMG_A[i];
		}
		w_DMG[1] = w_DMG[1] * w_HIT /100 + n_PerHIT_DMG * (100- w_HIT)/100;

		EDPplus(5);
		CastAndDelay();
		BattleCalc998();
	}

	else if(n_A_ActiveSkill==88)
	{
		n_PerHIT_DMG = 0;
		not_use_card = 1;
		n_Delay[0] = 1;
		wCast = 1 * n_A_CAST;

		if(n_B[19] == 0){
			wbairitu += (400 + 50 * n_A_ActiveSkillLV + 20 * eval(document.calcForm.SkillSubNum.value)) /100;
			ATKbai02(wbairitu,0);

			for(var i=0;i<=2;i++){
				w_DMG[i] = BattleCalc(n_A_DMG[i],i);
				w_DMG[i] = Math.floor(w_DMG[i]);
			}
		}else if(n_B[19] == 5){
			w_DMG[0] = w_DMG[1] = w_DMG[2] = 1;
		}else{
			w_DMG[0] = w_DMG[1] = w_DMG[2] = 0;
		}
		for(var i=0;i<=2;i++){
			Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i];
			InnStr[i] += Last_DMG_A[i];
		}
		w_HIT_HYOUJI = 100;
		CastAndDelay();
		BattleCalc998();
	}

	else if(n_A_ActiveSkill==263)
	{
		not_use_card = 1;
		n_Enekyori=1;
		wCast = 0.5 * n_A_CAST;
		n_Delay[2] = 0.8 + 0.2 * n_A_ActiveSkillLV;

		w_SBr = new Array();
		w = n_A_INT * 5 * n_A_ActiveSkillLV;
		w_SBr[2] = w + 1000 - Math.floor((n_B[14] + n_B[15] + n_B_MDEF2 + n_B_DEF2[2])/2);
		w_SBr[1] = w + 750 - Math.floor((n_B[14] + n_B[15] + n_B_MDEF2 + n_B_DEF2[1])/2);
		w_SBr[0] = w + 500 - Math.floor((n_B[14] + n_B[15] + n_B_MDEF2 + n_B_DEF2[0])/2);
		for(var i=0;i<=2;i++)
			w_SBr[i] = tPlusDamCut(w_SBr[i]);

		for(var i=0;i<=2;i++){
			w_DMG[i] = BattleCalc(n_A_DMG[i],i);
			w_DMG[i] *= n_A_ActiveSkillLV;

			Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i] + w_SBr[i];
			InnStr[i] += Last_DMG_A[i] +" ("+ w_DMG[i] +" + "+ w_SBr[i] +")";
			w_DMG[i] = Last_DMG_A[i];
		}
		var wX = BattleCalc2(0) * n_A_ActiveSkillLV;

		n_PerHIT_DMG = wX + w_SBr[1];
		str_PerHIT_DMG = (wX + w_SBr[0]) +"~"+ (wX + w_SBr[2]);
		if(n_B[19] == 5){
			for(var i=0;i<=2;i++){
				Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i] = 1;
				InnStr[i] += Last_DMG_A[i];
			}
		}
		w_DMG[1] = (w_DMG[1] * w_HIT + n_PerHIT_DMG *(100-w_HIT))/100;

		CastAndDelay();
		BattleCalc998();
	}

	else if (162 == n_A_ActiveSkill) // Grand Cross#163
	{
		n_PerHIT_DMG = 0;

		myInnerHtml("CRIATKname",'<Font color="#FF0000">Health Drain</Font>',0);
		myInnerHtml("CRIATK",'<Font color="#FF0000">'+ Math.floor(n_A_MaxHP /5) +"</Font>",0);

		myInnerHtml("CRInumname",'<Font color="#FF0000">Damage Backlash</Font>',0);

		w_DMG = [0,0,0];
		work_A_VITDEF = [0,0,0];
		work_A_VITDEF[0] = n_A_VITDEF[2];
		work_A_VITDEF[1] = n_A_VITDEF[1];
		work_A_VITDEF[2] = n_A_VITDEF[0];
		n_A_INTMDEF = n_A_INT + Math.floor(n_A_VIT /2);


		// #19 - Ignore [Grand Cross] holy self-damage
		if (1376 != n_A_Equip[0] && SQI_Bonus_Effect.findIndex(x => x == 19) == -1 && !CardNumSearch(126))
		{
			for(var i=0;i<=2;i++){
				w_DMG[i] = BK_n_A_DMG[i] * (100 - n_A_DEF) /100 - work_A_VITDEF[i] + n_A_WeaponLV_seirenATK;
				w_DMG[i] = Math.floor(w_DMG[i] * (wbairitu + n_A_ActiveSkillLV * 0.4));

				w = BK_n_A_MATK[i] *(100 - n_A_MDEF)/100 - n_A_INTMDEF;
				w = Math.floor(w * (n_A_ActiveSkillLV * 0.4 +1));

				w_DMG[i] += w;
				w_DMG[i] = Math.floor(w_DMG[i] * (100-n_tok[57]) /100);
				w_DMG[i] = Math.floor(w_DMG[i] * (100-n_tok[66]) /100);
				w_DMG[i] = Math.floor(w_DMG[i] * (100-n_tok[78]) /100);
				if(eval(document.calcForm.A_youshi.checked))
					w_DMG[i] = Math.floor(w_DMG[i] * (100-n_tok[190]) /100);
				else
					w_DMG[i] = Math.floor(w_DMG[i] * (100-n_tok[191]) /100);
				w_DMG[i] = Math.floor(w_DMG[i] * zokusei[n_A_BodyZokusei * 10 +1][6]);

				w_DMG[i] = Math.floor(w_DMG[i] /2);
			}
		}
		myInnerHtml("CRInum",'<Font color="#FF0000">'+3+ SubName[8] + w_DMG[0] +"~"+ w_DMG[2] +" Damage</Font>",0);


		n_Enekyori=2;
		n_A_Weapon_zokusei = 6;
		wCast = 3 * n_A_CAST;
		n_Delay[2] = 1.5;
		wLAch=1;

		for(var i=0;i<=2;i++){
			w_DMG[i] = BK_n_A_DMG[i] * (100 - n_B[14]) /100 - n_B_DEF2[i] + n_A_WeaponLV_seirenATK;
			w_DMG[i] *= wbairitu + n_A_ActiveSkillLV * 0.4;
			w_DMG[i] = Math.floor(w_DMG[i] * zokusei[n_B[3]][6]);
			w = BK_n_A_MATK[i] *(100 - n_B[15])/100 -n_B_MDEF2;
			w *= (n_A_ActiveSkillLV * 0.4 +1);
			w = Math.floor(w * zokusei[n_B[3]][6]);

			//custom TalonRO added bonus damage for Imperial Spear + Imperial Guard Combo
			//works with every gear which has bonus for 5162 (5000+skillID)
			wcustomtromod = 0;
			wcustomtromod += StPlusCalc2(5000+n_A_ActiveSkill)+StPlusCard(5000+n_A_ActiveSkill);
			//end damage calculation needed to be adjusted for above bonus
			w_DMG[i] = tPlusDamCut(Math.floor((w+w_DMG[i])*((100+wcustomtromod) /100)*zokusei[n_B[3]][6]));
			//original end damage calculation:
			//w_DMG[i] = tPlusDamCut(Math.floor((w+w_DMG[i])*zokusei[n_B[3]][6]));

			if(w_DMG[i] < 1)w_DMG[i]=1;
			if(60<=n_B[3]&&n_B[3]<=69)w_DMG[i]=0;
		}

		if(n_B_IJYOU[6] == 0){
			for(var b=0;b<=2;b++){
				Last_DMG_A[b] = Last_DMG_B[b] = w_DMG[b] * 3;
				InnStr[b] += Last_DMG_A[b] + " ("+w_DMG[b]+ SubName[8] +"3hit)";
				w_DMG[b] = Last_DMG_A[b];
			}
		}else{
			for(var b=0;b<=2;b++){
				Last_DMG_A[b] = Last_DMG_B[b] = w_DMG[b] * 4;
				InnStr[b] += Last_DMG_A[b] + " ("+ (w_DMG[b] * 2) +" + " +w_DMG[b]+ SubName[8] +"2hit)";
				w_DMG[b] = Last_DMG_A[b];
			}
		}
		w_HIT_HYOUJI = 100;
		CastAndDelay();
		BattleCalc998();
	}

	else if(n_A_ActiveSkill==66)
	{
		wCR = 100;
		n_PerHIT_DMG = Math.floor(BattleCalc2(0) * 2 * zokusei[n_B[3]][0]);

		if(SkillSearch(327)){
			wCR += 20 * SkillSearch(327);
		}
		else{
			if(SkillSearch(154))
				wCR += SkillSearch(154) * 5;
			if(SkillSearch(154)==0 && n_A_PassSkill2[8])
				wCR += n_A_PassSkill2[8] * 5 / 10;
		}
		CR_n_A_DMG = [0,0,0];

		CRbai = eval(document.calcForm.SkillSubNum.value) / 8000;
		for(b=0;b<=2;b++)
			CR_n_A_DMG[b] = Math.floor(n_A_DMG[b] * wCR / 100);

		wbairitu += 0.5;
		ATKbai02(wbairitu,0);

		for(var b=0;b<=2;b++){
			w_DMG[b] = BattleCalc(n_A_DMG[b],b);
			w_DMG[b] += Math.floor(BattleCalc(CR_n_A_DMG[b],b) * CRbai);
			w_DMG[b] = Math.floor(w_DMG[b] * zokusei[n_B[3]][0]);

			Last_DMG_A[b] = Last_DMG_B[b] = w_DMG[b] + EDP_DMG(b);
			InnStr[b] += Last_DMG_A[b];
		}

		w_DMG[1] = (w_DMG[1] * w_HIT + BattleCalc2(0) * 2 *(100-w_HIT))/100;
		w_DMG[1] = Math.floor(w_DMG[1] * zokusei[n_B[3]][0]);

		EDPplus(1);

		CastAndDelay();
		BattleCalc998();
	}

	else if(n_A_ActiveSkill==283) // Pressure#283
	{
		n_PerHIT_DMG = 0;
		w_DMG[2] = 500 + 300 * n_A_ActiveSkillLV;
		if(n_B[19] == 5)
			w_DMG[2] = 1;
		w_DMG[0] = w_DMG[1] = w_DMG[2];
		for(var i=0;i<=2;i++){
			Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i];
			InnStr[i] += Last_DMG_A[i];
		}
		wCast = (1.5+ 0.5 * n_A_ActiveSkillLV) * n_A_CAST;
		n_Delay[2] = (1.5 + n_A_ActiveSkillLV *0.5)/2;
		w_HIT_HYOUJI = 100;
		CastAndDelay();
		BattleCalc998();
	}

	else if(n_A_ActiveSkill==284) // Sacrifice#284
	{
		n_PerHIT_DMG = 0;
		n_A_Weapon_zokusei = 0;
		w_DMG[2] = Math.floor(n_A_MaxHP * 0.09 * (0.9 + 0.1 * n_A_ActiveSkillLV));
		w_DMG[2] = BaiCI(w_DMG[2]);
		w_DMG[2] = Math.floor(w_DMG[2] * zokusei[n_B[3]][0]);
		w_DMG[0] = w_DMG[1] = w_DMG[2];
		for(var i=0;i<=2;i++){
			Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i];
			InnStr[i] += Last_DMG_A[i];
		}
		w_HIT_HYOUJI = 100;
		CastAndDelay();
		BattleCalc998();
	}

	else if(n_A_ActiveSkill==193)
	{
		n_PerHIT_DMG = 0;
		w_HIT_HYOUJI = 100;
		n_A_Weapon_zokusei = 0;
		ATKbai02(wbairitu,0);
		wbairitu += n_A_ActiveSkillLV *0.75;


		work_B_DEF2 = [0,0,0];
		work_B_DEF2[0] = n_B_DEF2[2];
		work_B_DEF2[1] = n_B_DEF2[1];
		work_B_DEF2[2] = n_B_DEF2[0];

		for(var b=0;b<=2;b++){
			w_DMG[b] = Math.floor(Math.floor(BK_n_A_DMG[b] * wbairitu) * (work_B_DEF2[b]+n_B[14]) /50);
			w_DMG[b] = BaiCI(w_DMG[b]);
			w_DMG[b] = Math.floor(w_DMG[b] * zokusei[n_B[3]][0]);

			Last_DMG_A[b] = Last_DMG_B[b] = w_DMG[b] + EDP_DMG(b);
			InnStr[b] += Last_DMG_A[b];
		}

		EDPplus(1);

		wCast = 1 * n_A_CAST;
		n_Delay[2] = 0.5;
		CastAndDelay();
		BattleCalc998();
	}

	else if(n_A_ActiveSkill==197 || n_A_ActiveSkill==321) // Asura Strike#197#321 (MaxSP - 1)
	{
		n_PerHIT_DMG = 0;
		w_HIT_HYOUJI = 100;
		n_A_Weapon_zokusei = 0;
		ATKbai02(wbairitu,0);
		
		sp_used = (197 == n_A_ActiveSkill ? eval(document.calcForm.SkillSubNum.value) : n_A_MaxSP - 1);
		skill_ratio = 1 + Math.floor(7 + sp_used / 10);
		skill_damage_constant = 250 + n_A_ActiveSkillLV * 150;

		for(var b=0;b<=2;b++){
			w_DMG[b] = Math.floor(BK_n_A_DMG[b] * skill_ratio) + skill_damage_constant;	//Asura calculation (dmg * sp-calc + skilllvl-specific-atk)
			w_DMG[b] = BaiCI(w_DMG[b]);													//weap (i.e. Nemesis) & card modifier
			w_DMG[b] = Math.floor(w_DMG[b] * zokusei[n_B[3]][0]);						//Enemy element reduction for ghost
			w_DMG[b] = ApplySkillAtkBonus(w_DMG[b]);

			//[Custom TalonRO - 2018-07-09 Soft-Cap Asura damage above 200k] [NattWara/Loa]
			//100% accurate for below 200k damage.
			//~1% error for 200k-400k damage.
			//No data available for above 400k damage.
			
			//Lex Aeterna for Asura Strike after soft-cap
			if (n_B_IJYOU[6] && wLAch==0)
				w_DMG[b] *= 2;

			if (w_DMG[b] > 200000)
			{
				overflow_damage = w_DMG[b] - 200000;
				smoothed_damage = 1.323031 + 0.5996693 * overflow_damage - 0.000001183789 * overflow_damage**2 + 2.125968e-12 * overflow_damage ** 3 - 2.736422e-18 * overflow_damage ** 4 + 1.647955e-24 * overflow_damage**5;
				w_DMG[b] = Math.floor(200000 + smoothed_damage);
			}
			
			Last_DMG_A[b] = Last_DMG_B[b] = w_DMG[b]

			InnStr[b] += Last_DMG_A[b];
		}

		EDPplus(1);

		wCast = (4.5 - 0.5 * n_A_ActiveSkillLV) * n_A_CAST;

		n_Delay[3] = 10; // 10 seconds irreducible delay

		CastAndDelay();

		BattleCalc998();
	}

	else if(n_A_ActiveSkill==394){
		n_Enekyori=1;
		not_use_card = 1;
		ATKbai02(wbairitu,0);

		for(var b=0;b<=2;b++){
			w_DMG[b] = BattleCalc(n_A_DMG[b],b);
			w_DMG[b] = Math.floor(w_DMG[b] * zokusei[n_B[3]][0]);

			Last_DMG_A[b] = Last_DMG_B[b] = w_DMG[b];
			InnStr[b] += Last_DMG_A[b];
		}

		w_DMG[1] = (w_DMG[1] * w_HIT + BattleCalc2(0) * zokusei[n_B[3]][0] *(100-w_HIT))/100;

		n_PerHIT_DMG = BattleCalc2(0) * zokusei[n_B[3]][0];

		CastAndDelay();
		BattleCalc998();
	}

	else if(n_A_ActiveSkill==395){
		n_Enekyori=1;
		n_Delay[2] = 1;
		not_use_card = 1;
		ATKbai02(wbairitu,0);

		n_A_Weapon_zokusei = KunaiOBJ[eval(document.calcForm.SkillSubNum.value)][1];

		for(var b=0;b<=2;b++){
			w_DMG[b] = BattleCalc(n_A_DMG[b],b);
			w_DMG[b] = Math.floor(w_DMG[b] * zokusei[n_B[3]][0]);

			Last_DMG_B[b] = w_DMG[b];
			Last_DMG_A[b] = w_DMG[b] * 3;
			InnStr[b] += Last_DMG_A[b] + " ("+ Last_DMG_B[b] + SubName[8] +"3hit)";
			w_DMG[b] = Last_DMG_A[b];
		}
		var wX = Math.floor(BattleCalc2(0) * zokusei[n_B[3]][0]);

		w_DMG[1] = (w_DMG[1] * w_HIT + wX * 3 *(100-w_HIT))/100;
		n_PerHIT_DMG = wX * 3;
		str_PerHIT_DMG = wX * 3 +" (3"+ SubName[8] + wX +" Damage)"

		CastAndDelay();
		BattleCalc998();
	}

	else if (n_A_ActiveSkill == 396) // Throw Huuma Shuriken#396
	{
		n_Enekyori=1;
		n_Delay[2] = 3;
		wCast = 3 * n_A_CAST;
		wbairitu += (n_A_ActiveSkillLV * 1.5 +0.5);
		wActiveHitNum = 2 + Math.round(n_A_ActiveSkillLV / 2);
		
		monsters_targeted_nb = eval(document.calcForm.SkillSubNum.value);
		
		// Huuma Swirling Petal#1770 - Hira Shurikat#112 - [Throw Huuma Shuriken] only splits damage once instead of using mob count.
		if (SQI_Bonus_Effect.findIndex(x => x == 112) > -1 || EquipNumSearch(1770))
			monsters_targeted_nb = Math.min(2, monsters_targeted_nb);

		ATKbai02(wbairitu,0);
		for(var b=0;b<=2;b++){
			w_DMG[b] = BattleCalc(n_A_DMG[b],b);
			w_DMG[b] = Math.floor(w_DMG[b] * zokusei[n_B[3]][0]);
			if(wActiveHitNum > 1)
				w_DMG[b] = Math.floor(w_DMG[b] / wActiveHitNum) * wActiveHitNum;

			Last_DMG_A[b] = Last_DMG_B[b] = Math.floor(w_DMG[b] / monsters_targeted_nb);
			InnStr[b] += Last_DMG_A[b];
			InnStr[b] += " ("+ (Last_DMG_A[b] / wActiveHitNum) +" x "+ wActiveHitNum +"Hit)";
		}

		w_DMG[1] = (w_DMG[1] * w_HIT + BattleCalc2(0)* zokusei[n_B[3]][0] *(100-w_HIT))/100;

		n_PerHIT_DMG = BattleCalc2(0) * zokusei[n_B[3]][0];

		CastAndDelay();
		BattleCalc998();
	}

	else if(n_A_ActiveSkill==405 || n_A_ActiveSkill==438)
	{
		n_PerHIT_DMG = 0;
		n_A_Weapon_zokusei = 0;
		n_Enekyori=1;
		ATKbai02(wbairitu,0);
		if(n_A_ActiveSkill==405)
			w_1senHP = eval(document.calcForm.SkillSubNum.value);
		else
			w_1senHP = n_A_MaxHP;

		w_DMG[0] = Math.floor(n_A_STR * 40 + w_1senHP * 8 * n_A_ActiveSkillLV / 100);
		
		// Apply def reduction
		w_DMG[0] = w_DMG[0] * (100 - n_B[14]) / 100;
		w_DMG[0] -= n_B[7];

		// Add refine bonus
		w_DMG[0] += n_A_WeaponLV_seirenATK;

		w_DMG[0] = BaiCI(w_DMG[0]);
		w_DMG[0] = Math.floor(w_DMG[0] * zokusei[n_B[3]][0]);

		w_DMG[2] = w_DMG[1] = w_DMG[0];
		for(var i=0;i<=2;i++){
			Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i];
			InnStr[i] += Last_DMG_A[i];
		}
		CastAndDelay();

		w_HIT_HYOUJI = 100;
		BattleCalc998();
	}

	else if(n_A_ActiveSkill==244)
	{
		n_PerHIT_DMG = 0;
		not_use_card = 1;
		n_Enekyori=1;
		n_A_Weapon_zokusei = 0;
		wbairitu = (50 + n_A_ActiveSkillLV * 50) /100;

		for(var b=0;b<=2;b++){
			w_DMG[b] = Math.floor((BK_n_A_DMG[b] - n_B_DEF2[b]) * wbairitu);
			w_DMG[b] = Math.floor(w_DMG[b] * zokusei[n_B[3]][0]);
			w_DMG[b] = Math.floor(BaiCI(w_DMG[b]));

			Last_DMG_A[b] = Last_DMG_B[b] = w_DMG[b];
			InnStr[b] += Last_DMG_A[b];
		}

		wCast = 1 * n_A_CAST;
		w_HIT_HYOUJI = 100;
		CastAndDelay();
		BattleCalc998();
	}

	else if(n_A_ActiveSkill==328)
	{
		n_PerHIT_DMG = 0;
		n_Enekyori=1;
		n_A_Weapon_zokusei = 0;
		wHITsuu = n_A_ActiveSkillLV;

		wAD = 0.7 * n_A_INT * n_A_INT * n_B[7] / (n_A_INT + n_B[7]);
		w_DMG[2] = Math.floor(wAD);
		w_DMG[2] = tPlusDamCut(Math.floor(w_DMG[2] * zokusei[n_B[3]][0]));
		if(Taijin==1)
			w_DMG[2] = Math.floor(w_DMG[2] /2);
		w_DMG[0] = w_DMG[1] = w_DMG[2];
		for(var i=0;i<=2;i++){
			Last_DMG_B[i] = w_DMG[i];
			Last_DMG_A[i] = w_DMG[i] * wHITsuu;
			InnStr[i] += Last_DMG_A[i] + " ("+ Last_DMG_B[i] + SubName[8] +wHITsuu+"hit)";
			w_DMG[i] = Last_DMG_A[i];
		}

		wCast = 1 * n_A_CAST;
		n_Delay[2] = 1;
		w_HIT_HYOUJI = 100;
		CastAndDelay();
		BattleCalc998();
	}

	else if(n_A_ActiveSkill==106 || n_A_ActiveSkill==112 || n_A_ActiveSkill==113){
		n_PerHIT_DMG = 0;
		n_Delay[0] = 1;
		if(n_A_ActiveSkill==106){
			n_A_Weapon_zokusei = 2;
			w_DMG[2] = Math.floor((75 + n_A_DEX) * (1+ n_A_INT /100) * n_A_ActiveSkillLV * zokusei[n_B[3]][2]);
		}
		else if(n_A_ActiveSkill==112){
			n_A_Weapon_zokusei = 4;
			w_DMG[2] = Math.floor((50 + n_A_DEX/2) * (1+ n_A_INT /100) * n_A_ActiveSkillLV * zokusei[n_B[3]][4]);

		}
		else if(n_A_ActiveSkill==113){
			n_A_Weapon_zokusei = 3;
			w_DMG[2] = Math.floor((75 + n_A_DEX/2) * (1+ n_A_INT /100) * n_A_ActiveSkillLV * zokusei[n_B[3]][3]);
		}

		w_DMG[2] = ApplySkillAtkBonus(tPlusDamCut(w_DMG[2]));
		
		w_DMG[0] = w_DMG[1] = w_DMG[2];
		for(var i=0;i<=2;i++){
			Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i];
			InnStr[i] += Last_DMG_A[i];
		}
		w_HIT_HYOUJI = 100;
		CastAndDelay();
		BattleCalc998();
	}

	else if(n_A_ActiveSkill==25){
		n_PerHIT_DMG = 0;
		n_A_Weapon_zokusei = 6;
		n_Delay[2] = 1;
		n_Enekyori=2;
		w_DMG[2] = HealCalc(n_A_ActiveSkillLV,0);
		w_DMG[2] = Math.floor(Math.floor(w_DMG[2] / 2) * zokusei[n_B[3]][6]);
		if(n_B[3] < 90){
			w_DMG[2]=0;
		}

		var wX = n_tok[170+n_B[2]];
		w_DMG[2] = Math.floor(w_DMG[2] * (100 + wX) /100);

		w_DMG[2] = tPlusDamCut(w_DMG[2]);
		w_DMG[2] = Math.floor(w_DMG[2] * (1 + (StPlusCalc2(5000 + n_A_ActiveSkill) + StPlusCard(5000 + n_A_ActiveSkill)) / 100));
		w_DMG[0] = w_DMG[1] = w_DMG[2];
		for(var i=0;i<=2;i++){
			Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i];
			InnStr[i] += Last_DMG_A[i];
		}
		w_HIT_HYOUJI = 100;
		CastAndDelay();
		BattleCalc998();
	}
	else if(n_A_ActiveSkill==94){
		n_PerHIT_DMG = 0;
		n_A_Weapon_zokusei = 6;
		wCast = 5 * n_A_CAST;
		n_Delay[0] = 1;
		n_Enekyori=2;
		if(n_A_ActiveSkillLV <= 6)
			w_DMG[2] = 100 * n_A_ActiveSkillLV;
		else
		w_DMG[2] = 777;

		w_HEAL_BAI = 100 + n_tok[94];
		w_DMG[2] = Math.floor(w_DMG[2] * w_HEAL_BAI / 100);

		w_DMG[2] = Math.floor(Math.floor(w_DMG[2] / 2) * zokusei[n_B[3]][6]);
		if(n_B[3] < 90 && n_B[2] != 6)
			w_DMG[2]=0;

		var wX = n_tok[170+n_B[2]];
		w_DMG[2] = Math.floor(w_DMG[2] * (100 + wX) /100);

		w_DMG[2] = tPlusDamCut(w_DMG[2]);
		
		w_DMG[2] = Math.floor(w_DMG[2] * (1 + (StPlusCalc2(5000 + n_A_ActiveSkill) + StPlusCard(5000 + n_A_ActiveSkill)) / 100));
		w_DMG[0] = w_DMG[1] = w_DMG[2];
		for(var i=0;i<=2;i++){
			Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i];
			InnStr[i] += Last_DMG_A[i];
		}
		w_HIT_HYOUJI = 100;
		CastAndDelay();
		BattleCalc998();
	}
	else if(n_A_ActiveSkill==102 || n_A_ActiveSkill==97){
		n_PerHIT_DMG = 0;
		if(n_A_ActiveSkill==102){
			n_A_Weapon_zokusei = 6;
			wCast = 1 * n_A_CAST;
		}else{
			n_A_Weapon_zokusei = 0;
			wCast = 8 - n_A_ActiveSkillLV * 2;
			wCast = wCast * n_A_CAST;
		}
		n_Enekyori=2;
		if(n_B[3] < 90){
			w = 0;
			w_DMG[2] = 0;
			w_DMG[0] = 0;
			w_DMG[1] = 0;
		}else{
			if(n_B[19] != 1){
				w = (20 * n_A_ActiveSkillLV + n_A_BaseLV + n_A_INT +n_A_LUK)/1000;
				w_DMG[2] = n_B[6];
			}
			else{
				w = 0;
				w_DMG[2] = 0;
			}
			w_DMG[0] = n_A_BaseLV + n_A_INT + n_A_ActiveSkillLV *10;
			w_DMG[0] = Math.floor(w_DMG[0] * zokusei[n_B[3]][n_A_Weapon_zokusei]);
			w_DMG[1] = Math.round((n_B[6] * w + w_DMG[0] * (100-w)/100));
		}
		for(var i=0;i<=2;i++)
			Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i];

		InnStr[0] += w_DMG[0] +" (Damage on Failure)";
		InnStr[1] += w_DMG[1] +" (Considering the Success Chance)";
		InnStr[2] += Math.floor(w_DMG[2] * zokusei[n_B[3]][n_A_Weapon_zokusei]) +" (" +Math.floor(w *10000)/100 +"% Success Chance)";

		n_Delay[2] = 3;
		w_HIT_HYOUJI = 100;
		CastAndDelay();
		BattleCalc998();
	}
	else if(n_A_ActiveSkill==325){ // Gravitation Field#325
		n_PerHIT_DMG = 0;
		n_A_Weapon_zokusei = 0;
		n_Delay[6] = 9;
		n_Enekyori=2;
		wHITsuu = 4 + n_A_ActiveSkillLV;
		w_DMG[2] = 200 + 200 * n_A_ActiveSkillLV;

		w_DMG[2] = Math.floor(w_DMG[2]);

		if(n_B[19] == 5)
			w_DMG[2] = 1;
		if(n_B[0] == 44)
			w_DMG[2] = 400;
		w_DMG[0] = w_DMG[1] = w_DMG[2];
		for(var i=0;i<=2;i++){
			Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i] * wHITsuu;
			w_DMG[i] = Last_DMG_A[i]
		}
		var wStrG = Last_DMG_A[0] +" ("+ (w_DMG[0] / wHITsuu) +" x "+ wHITsuu +"hit)"
		for(i=0;i<=2;i++)
			InnStr[i] += wStrG;

		wCast = 5 * n_A_CAST;
		n_Delay[2] = 2;
		w_HIT_HYOUJI = 100;
		CastAndDelay();

		BattleCalc998();
	}
	else{
		n_PerHIT_DMG = 0;
		n_Enekyori=2;
		wbairitu = 1;
		n_bunkatuHIT = 0;
		support_autospell = 0;
		support_double_casting = 0;
		

		if (n_A_ActiveSkill == 51) // Fire Bolt#51
		{
			support_autospell = 1;
			n_A_Weapon_zokusei = 3;
			support_double_casting = 1;
			wHITsuu = n_A_ActiveSkillLV;
			wCast = 0.7 * n_A_ActiveSkillLV;
			n_Delay[2] = 0.8 + n_A_ActiveSkillLV * 0.2;
		}
		else if (n_A_ActiveSkill == 54) // Cold Bolt#54
		{
			support_autospell = 1;
			n_A_Weapon_zokusei = 1;
			support_double_casting = 1;
			wHITsuu = n_A_ActiveSkillLV;
			wCast = 0.7 * n_A_ActiveSkillLV;
			n_Delay[2]= 0.8 + n_A_ActiveSkillLV * 0.2;
		}
		else if (n_A_ActiveSkill == 56) // Lightning Bolt#56
		{
			support_autospell = 1;
			n_A_Weapon_zokusei = 4;
			support_double_casting = 1;
			wHITsuu = n_A_ActiveSkillLV;
			wCast = 0.7 * n_A_ActiveSkillLV;
			n_Delay[2] = 0.8 + n_A_ActiveSkillLV * 0.2;
		}
		//fire ball
		else if(n_A_ActiveSkill==52){
			support_autospell = 1;
			n_A_Weapon_zokusei = 3;
			if(n_A_ActiveSkillLV <=5){
				wCast = 1.5;
				n_Delay[2] = 1.5;
			}else{
				wCast = 1;
				n_Delay[2] = 1;
			}
			wbairitu = 0.7 + n_A_ActiveSkillLV * 0.1;
		}
		else if(n_A_ActiveSkill==53){
			n_A_Weapon_zokusei = 3;
			wHITsuu = 4 + n_A_ActiveSkillLV;
			wCast = 2.15 - (n_A_ActiveSkillLV * 0.15);
			n_Delay[2] = 0.1;
			wbairitu = 0.5;
		}
		//frost diver
		else if(n_A_ActiveSkill==55){
			support_autospell = 1;
			n_A_Weapon_zokusei = 1;
			wCast = 0.8;
			n_Delay[2] = 1.5;
			wbairitu = 1 + n_A_ActiveSkillLV * 0.1;
		}
		else if(n_A_ActiveSkill==57){
			n_A_Weapon_zokusei = 4;
			wHITsuu = n_A_ActiveSkillLV;
			wCast = 1 * n_A_ActiveSkillLV;
			n_Delay[2] = 2;
			wbairitu = 0.8;
		}
		else if(n_A_ActiveSkill==46) // Napalm Beat#46
		{
			support_autospell = 1;
			n_A_Weapon_zokusei = 8;
			wCast = 0.5;
			if(n_A_ActiveSkillLV==10)
				n_Delay[2] = 0.5;
			else if(n_A_ActiveSkillLV==9)
				n_Delay[2] = 0.6;
			else if(n_A_ActiveSkillLV==8)
				n_Delay[2] = 0.7;
			else if(n_A_ActiveSkillLV>=6)
				n_Delay[2] = 0.8;
			else if(n_A_ActiveSkillLV>=4)
				n_Delay[2] = 0.9;
			else
				n_Delay[2] = 1;
			wbairitu = 0.7 + n_A_ActiveSkillLV * 0.1;
		}
		else if(n_A_ActiveSkill==47) // Soul Strike#47
		{
			support_autospell = 1;
			n_A_Weapon_zokusei = 8;
			wHITsuu = Math.round(n_A_ActiveSkillLV / 2);
			wCast = 0.5;
			if(n_A_ActiveSkillLV % 2 == 0)
				n_Delay[2] = 0.8 + n_A_ActiveSkillLV / 2 *0.2;
			else
				n_Delay[2] = 1 + (n_A_ActiveSkillLV+1) / 2 *0.2;
		}
		else if(n_A_ActiveSkill==122){
			n_A_Weapon_zokusei = 3;
			wHITsuu = (n_A_ActiveSkillLV +2);
			wCast = 3.3 - (0.3 * n_A_ActiveSkillLV);
			n_Delay[2] = 1;
			wbairitu = 0.2;
		}
		else if(n_A_ActiveSkill==124){
			n_A_Weapon_zokusei = 3;
			wCast = 0.7;
			n_Delay[2] = 2;
			wbairitu = 1 + n_A_ActiveSkillLV * 0.2;
		}
		else if(n_A_ActiveSkill==125){
			n_A_Weapon_zokusei = 3;
			wHITsuu = Math.round(n_A_ActiveSkillLV / 2) * (Math.floor(n_A_ActiveSkillLV / 2) + 2);
			wCast = 15;
			n_Delay[1] = 0;
			n_Delay[2] = Math.floor(n_A_ActiveSkillLV / 2) * 1 +2;
		}
		else if(n_A_ActiveSkill==126){
			n_A_Weapon_zokusei = 4;
			wHITsuu = n_A_ActiveSkillLV + 2;
			wCast = 2 + n_A_ActiveSkillLV * 0.5;
		}
		else if(n_A_ActiveSkill==127){
			n_A_Weapon_zokusei = 4;
			wHITsuu = 4;
			wCast = 15.5 - n_A_ActiveSkillLV * 0.5;
			n_Delay[2] = 5;
			n_Delay[6] = 4;
			wbairitu = 0.8 + n_A_ActiveSkillLV * 0.2;
		}
		else if(n_A_ActiveSkill==128 || n_A_ActiveSkill==320){ // Water Ball#128#320
			n_A_Weapon_zokusei = 1;
			if(n_A_ActiveSkillLV >= 4)
				wHITsuu = 25
			else if(n_A_ActiveSkillLV >= 2)
				wHITsuu = 9;
			SG_Special_HITnum = wHITsuu;
			wCast = n_A_ActiveSkillLV;
			wbairitu = 1 + n_A_ActiveSkillLV * 0.3;
			n_Delay[3] = 0.1 * wHITsuu;
		}
		else if(n_A_ActiveSkill==130){
			wbairitu = 0.66 + n_A_ActiveSkillLV * 0.066;
			n_A_Weapon_zokusei = 1;
			wCast = 6 - Math.floor((n_A_ActiveSkillLV-1) /2) * 0.5;
			n_Delay[2] = 1;
		}
		else if(n_A_ActiveSkill==131){//storm gust
			n_A_Weapon_zokusei = 1;
			wHITsuu = eval(document.calcForm.SkillSubNum.value);
			SG_Special_HITnum = wHITsuu;
			wCast = 5 + n_A_ActiveSkillLV;
			n_Delay[2] = 5;
			n_Delay[6] = 4.5;
			wbairitu = 1 + n_A_ActiveSkillLV * 0.4;
		}
		else if(n_A_ActiveSkill==132 || n_A_ActiveSkill==133 || n_A_ActiveSkill==319){
			n_A_Weapon_zokusei = 2;
			wHITsuu = n_A_ActiveSkillLV;
			wCast = n_A_ActiveSkillLV;
			n_Delay[2] = 0.7;
		}
		else if(n_A_ActiveSkill==277){
			wHITsuu = n_A_ActiveSkillLV;
			n_A_Weapon_zokusei = 8;
			wCast = 1;
			n_Delay[2] = 1;
			wbairitu = 0.7 + n_A_ActiveSkillLV * 0.1;
		}
		else if(n_A_ActiveSkill==37 || n_A_ActiveSkill==387){
			n_A_Weapon_zokusei = 6;
			wCast = 2;
			wbairitu = 1.25;
			if(n_A_ActiveSkill==387)
				wbairitu *= 5;
		}
		else if(n_A_ActiveSkill==104){
			n_Delay[0] = 1;
			n_A_Weapon_zokusei = 6;
			wHITsuu = n_A_ActiveSkillLV;
			wCast = 15;
			n_Delay[2] = 4;
			if(n_B[2] != 6 && n_B[3] < 90){
				n_A_MATK[2]=0;
				n_A_MATK[0]=0;
				n_A_MATK[1]=0;
			}
		}else if(n_A_ActiveSkill==312){
			n_A_Weapon_zokusei = 7;
			wHITsuu = Math.round(n_A_ActiveSkillLV / 2);
			wCast = 0.5;
			if(n_A_ActiveSkillLV % 2 == 0)
				n_Delay[2] = 0.8 + n_A_ActiveSkillLV / 2 *0.2;
			else
				n_Delay[2] = 1 + (n_A_ActiveSkillLV+1) / 2 *0.2;
		}else if(n_A_ActiveSkill==373){
			n_A_Weapon_zokusei = eval(document.calcForm.A_Weapon_zokusei.value);
			wCast = 0.1;
			n_Delay[2] = 0.5;
			if(n_B[4] == 0)
				wbairitu = n_A_ActiveSkillLV * 0.1;
			else
				wbairitu = 0.01;
			if(Taijin==1)
				wbairitu = 0;
		}
		else if(n_A_ActiveSkill==374){
			n_A_Weapon_zokusei = eval(document.calcForm.A_Weapon_zokusei.value);
			wCast = 0.1;
			n_Delay[2] = 0.5;
			wbairitu = n_A_ActiveSkillLV * 0.05;
			if(Taijin==1)
				wbairitu = 0;
		}
		else if(n_A_ActiveSkill==375){
			n_A_Weapon_zokusei = eval(document.calcForm.A_Weapon_zokusei.value);
			n_Delay[0] = 1;
			wHITsuu = n_A_ActiveSkillLV;
			wCast = 2;
			n_Delay[2] = 0.5;
			wbairitu = 0.4 + n_A_BaseLV / 100;
			if(Taijin==1)
				wbairitu = 0;
		}
		else if(n_A_ActiveSkill==407){
			n_A_Weapon_zokusei = 3;
			wbairitu = 0.9;
			wHITsuu = n_A_ActiveSkillLV;
			wCast = 0.7 * n_A_ActiveSkillLV;
		}
		else if(n_A_ActiveSkill==408){
			n_A_Weapon_zokusei = 3;
			wbairitu = 0.5;
			wHITsuu = Math.round(n_A_ActiveSkillLV / 2) +4 ;
			wCast = 6.5 - 0.5 * n_A_ActiveSkillLV;
			n_Delay[2] = 1;
			n_Delay[0] = 1;
		}
		else if(n_A_ActiveSkill==409){
			n_bunkatuHIT = 1;
			n_A_Weapon_zokusei = 3;
			wbairitu = 1.5 + n_A_ActiveSkillLV * 1.5;
			wHITsuu = 3;
			wCast = 3;
			n_Delay[2] = 3;
		}
		else if(n_A_ActiveSkill==410){
			n_A_Weapon_zokusei = 1;
			wbairitu = 1;
			wHITsuu = n_A_ActiveSkillLV + 2;
			wCast = n_A_ActiveSkillLV * 0.7;
		}
		else if(n_A_ActiveSkill==412){
			n_A_Weapon_zokusei = 1;
			wbairitu = 1.0 + n_A_ActiveSkillLV * 0.5;
			wHITsuu = 1;
			wCast = 3;
			n_Delay[2] = 3;
		}
		else if(n_A_ActiveSkill==413){
			n_A_Weapon_zokusei = 4;
			wbairitu = 1.0;
			wHITsuu = Math.floor(n_A_ActiveSkillLV / 2) +1;
			wCast = Math.floor(n_A_ActiveSkillLV / 2) + 1;
			n_Delay[2] = 1;
		}
		else if(n_A_ActiveSkill==414){
			n_A_Weapon_zokusei = 4;
			wbairitu = 1.6 + 0.4 * n_A_ActiveSkillLV;
			wHITsuu = 1;
			wCast = 4;
		}
		else if(n_A_ActiveSkill==415){
			n_A_Weapon_zokusei = 4;
			wbairitu = 1.0 + n_A_ActiveSkillLV * 1.0;
			wHITsuu = 1;
			wCast = 4;
		}

		wCast *= n_A_CAST;

		if(n_bunkatuHIT == 0){
			for(var b=0;b<=2;b++){//magia normal
				if(b==1){
					debug_dmg_avg=1;
					debug_atk+="\n --- BattleMagicCalc ---";
					debug_atk+="\nb_BattleMagicCalc:"+n_A_MATK[1];
				}
				w_DMG[b] = BattleMagicCalc(n_A_MATK[b] * wbairitu);
				if(b==1){
					debug_dmg_avg=0;
					debug_atk+="\na_BattleMagicCalc:"+w_DMG[1];
				}

				if(SG_Special_HITnum != 0){
					SG_Special_DMG[b] = w_DMG[b];
				}
				Last_DMG_B[b] = w_DMG[b];
				Last_DMG_A[b] = w_DMG[b] * wHITsuu;
				InnStr[b] += Last_DMG_A[b] + " ("+ Last_DMG_B[b] + SubName[8] +wHITsuu+"hit)";
				w_DMG[b] = Last_DMG_A[b];
			}
		}else{
			for(var b=0;b<=2;b++){//magia especial - Dragon Fire Formation, n�o acho mais nenhuma skill que tenha esta formula em uso
				w_DMG[b] = Math.floor(BattleMagicCalc(n_A_MATK[b] * wbairitu) / wHITsuu);

				Last_DMG_A[b] = Last_DMG_B[b] = w_DMG[b] * wHITsuu;
				InnStr[b] += Last_DMG_A[b] + " ("+ w_DMG[b] + SubName[8] + wHITsuu +"hit)";
				w_DMG[b] *= wHITsuu;
			}
		}

		w_HIT_HYOUJI = 100;
		CastAndDelay();
		BattleCalc998();
	}
	if (debug_mode)
		alert(debug_atk);
}

function ATKbai01()
{
	var wA01 = 100;

	if(n_A_ActiveSkill != 193 &&n_A_ActiveSkill != 197 && n_A_ActiveSkill != 321) {
		if (SkillSearch(270)) // True Sight#270
			wA01 += SkillSearch(270) * 2;
		if (n_A_PassSkill6[2])
			wA01 += 10;
		if (StPlusCalc2(87))
			wA01 += StPlusCalc2(87);

		//Note - Issue#252
		//Moved to foot.js
		//custom TalonRO Kris enchant ATK%
		/*
		var KEbonus = [document.calcForm.A_KE11.value,document.calcForm.A_KE12.value,document.calcForm.A_KE21.value,document.calcForm.A_KE22.value];
		for (i=0;i<KEbonus.length;i++){
			var wKE = KEbonus[i];
			if(wKE){
				if(171 <= wKE && wKE <= 179)
					wA01 += parseInt(wKE.substr(-1));
			}
		}*/
		//Note - Issue#252
		//Moved to foot.js
		//custom TalonRO Evil Marching Hat: if refine rate >=9 +5% ATK
		/*
		if(EquipNumSearch(1539) && n_A_HEAD_DEF_PLUS >= 9)
			wA01 += 5;
		*/

		if(n_A_IJYOU[3])
			wA01 -= 25;
	}
	for(var i=0;i<=2;i++){
		n_A_CriATK[i] = n_A_CriATK[i] * wA01 / 100;
		n_A_DMG[i] = n_A_DMG[i] * wA01 / 100;
	}
}


function ATKbai02(wATKbai,ch_A02)
{
	wA02 = wATKbai * 100;
	if(SkillSearch(327)){
		wA02 += 20 * SkillSearch(327);
	}
	else{
		if(SkillSearch(154))
			wA02 += SkillSearch(154) * 5;
		if(SkillSearch(154)==0 && n_A_PassSkill2[8])
			wA02 += n_A_PassSkill2[8] * 5 / 5;
	}
	// Fighting Chant Skill#342
	if(SkillSearch(342)){
		if (SkillSearch(380) <= 1){wA02 += 0;}
		else {wA02 += 2 * SkillSearch(342) * SkillSearch(380);}
	}

	if(ch_A02 == 0){
		n_A_DMG[2] = Math.floor(n_A_DMG[2] * wA02 /100);
		n_A_DMG[0] = Math.floor(n_A_DMG[0] * wA02 /100);
		n_A_DMG[1] = Math.floor(n_A_DMG[1] * wA02 /100);
	}else{
		n_A_CriATK[1] = Math.floor(n_A_CriATK[1] * wA02 /100);
		n_A_CriATK[0] = Math.floor(n_A_CriATK[0] * wA02 /100);
		n_A_CriATK[2] = Math.floor(n_A_CriATK[2] * wA02 /100);
	}
}


function BattleTAKA()
{

	if(n_A_WeaponType==10 && SkillSearch(118) && n_A_ActiveSkill !=272){
		wBTw1 = Math.floor((n_A_JobLV -1) / 10 +1);
		if(wBTw1 > 5)wBTw1=5;
		wBTw2 = SkillSearch(118);
		if(wBTw2 < wBTw1)
			wBTw1 = wBTw2;
		wBT = 80 + Math.floor(n_A_DEX /10)*2 + Math.floor(n_A_INT/2)*2 + SkillSearch(119) *6;
		wBT = Math.floor(wBT * zokusei[n_B[3]][0]);
		wBT = tPlusDamCut(wBT);
		wBTw3 = Math.round((1 + n_A_LUK * 0.3)*100)/100;
		if(n_B[0] == 44)
			wBT = 0;
		str_bSUBname += "Falcon Damage<BR>";
		n_TAKA_DMG = wBT * wBTw1;
		str_bSUB += n_TAKA_DMG +" ("+ wBT +" x "+ wBTw1 +"Hit)";
		str_bSUB += "("+ wBTw3 +"% Chance)<BR>";
		wBT = n_TAKA_DMG * wBTw3 /100;
		wBT = wBT * (w_HIT + ((100 - w_HIT) * w_Cri /100)) /100;
		wBTw1=0;
		return Math.round(wBT *100)/100;
	}else{
		n_TAKA_DMG = 0;
		return 0;
	}
}

function reset_monster_stats()
{
	if (0 == Taijin)
	{
		ClickB_Enemy();
		display_monster_stats();
	}
}

function display_monster_stats()
{
	monster_stats_html =  '<table style="border: 1px solid #999; border-collapse: separate; width: auto;">';
	monster_stats_html += '<TR><TD ColSpan="10" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px; width: 100px;">Monster Stats</div>';
	monster_stats_html += '<div style="float: right; padding-right: 3px;"><input id="monster_stats_check" type="checkbox" name="monster_stats_check" onClick="display_monster_stats()"><label for="monster_stats_check">Show</label></div><div style="clear: both;"></div></TD></TR>';
	
	if (document.calcForm.monster_stats_check.checked)
	{
		element = Math.floor(n_B[3] / 10) * 4 + n_B[3] % 10 - 1;
		
		monster_stats_html += '<tr><td>HP</td><td><input type="text" onChange="calc()" name="monster_hp" value="' + n_B[6] + '" style="width: 100%;"><td>DEF</td><td><input type="text" onChange="calc()" name="monster_def" value="' + n_B[14] + '" size=1></td><td>MDEF</td><td><input type="text" onChange="calc()" name="monster_mdef" value="' + n_B[15] + '" size=1></td></tr>';
		monster_stats_html += '<tr><td>Type</td><td><select style="width: 100%;" name="monster_type" onChange="calc()"></select></td><td>HIT</td><td><input type="text" onChange="calc()" name="monster_hit" value="' + n_B[26] + '" size=1></td></td><td>FLEE</td><td><input type="text" onChange="calc()" name="monster_flee" value="' + n_B[27] + '" size=1></td></tr>';
		monster_stats_html += '<tr><td>Size</td><td><select style="width: 100%;" name="monster_size" onChange="calc()"></select></td><td>VIT</td><td><input type="text" onChange="calc()" name="monster_vit" value="' + n_B[7] + '" size=1></td><td>INT</td><td><input type="text" onChange="calc()" name="monster_int" value="' + n_B[9] + '" size=1></td>';
		monster_stats_html += '<tr><td>Element</td><td><select style="width: 100%;" name="monster_element" onChange="calc()"></td><td>AGI</td><td><input type="text" onChange="calc()" name="monster_agi" value="' + n_B[8] + '" size=1></td><td>LUK</td><td><input type="text" onChange="calc()" name="monster_luk" value="' + n_B[11] + '" size=1></td>';
		monster_stats_html += '<tr><td>Race</td><td><select style="width: 100%;" name="monster_race" onChange="calc()"></select></td></td><td>DEX</td><td><input type="text" onChange="calc()" name="monster_dex" value="' + n_B[10] + '" size=1></td>';
		monster_stats_html += "</table>";
	
		myInnerHtml("monster_stats", monster_stats_html, 0);
	
		for (i = 0; i < ZokuseiOBJ2.length; ++i)
		{
			for (j = 1; j <= 4; ++j)
			{
				index = i * 4 + j - 1;
				document.calcForm.monster_element.options[index] = new Option(ZokuseiOBJ2[i] + j, index);
			}
		}
		for (i = 0; i < SyuzokuOBJ.length; ++i)
			document.calcForm.monster_race.options[i] = new Option(SyuzokuOBJ[i], i);
		for (i = 0; i < SizeOBJ.length; ++i)
			document.calcForm.monster_size.options[i] = new Option(SizeOBJ[i], i);
		for (i = 0; i < BossTypeOBJ.length; ++i)
			document.calcForm.monster_type.options[i] = new Option(BossTypeOBJ[i], i);
	
		document.calcForm.monster_race.value = n_B[2];
		document.calcForm.monster_size.value = n_B[4];
		document.calcForm.monster_type.value = n_B[19];
		document.calcForm.monster_element.value = element;
		document.calcForm.monster_stats_check.checked = 1;
	}
	else
	{
		monster_stats_html += '</table>';
		myInnerHtml("monster_stats", monster_stats_html, 0);
		document.calcForm.monster_stats_check.checked = 0;
	}
}

function Click_EnemySkillsSW(){
with(document.calcForm){
	n_ENSKSW = B_ENSKSW.checked;
	if(Taijin)
		wstr = "Enemy";
	else
		wstr = "Monster";

	if(n_ENSKSW){
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: separate; width: auto;">';
		str += '<TR><TD ColSpan="10" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px; width: 100px;">'+ wstr +' Skills </div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab7" type="checkbox" name="B_ENSKSW"onClick="Click_EnemySkillsSW()"><label for="lab7">Show</label></div><div style="clear: both;"></div></TD></TR>';
		if(Taijin == 0){//SK0 = EQ || SK1 = WF || SK2 = Kaupe
			str += '<TD id="EN_SK3"></TD><TD id="B_SK3"></TD></TR>';
			str += '<TD id="EN_SK2"></TD><TD id="B_SK2"></TD></TR>';
			str += '<TR><TD id="EN_SK0"></TD></TR>';
			str += '<TR><TD id="EN_SK1"></TD><TD id="B_SK1"/>';
			str += '<TD>Players in Range:&nbsp;</TD><TD id="B_SK0"></TD>';

		}
		str += '</TABLE>';
		myInnerHtml("MONSTER_SKILLS",str,0);
		B_ENSKSW.checked = 1;

		var name_SKILL = ["<b>Earthquake:</b>","Level:","Wall of Fog","Kaupe"];
		var html_SKILL = new Array();
		for(i=0;i<=3;i++)
			myInnerHtml("EN_SK"+i,name_SKILL[i],0);

		html_SKILL[0] = '<select name="EQ_PL" onChange="calc()"/>';
		html_SKILL[1] = '<select name="EQ_LV" onChange="calc()"/>';
		html_SKILL[2] = '<input type="checkbox" name="EQ_WF" onClick="calc()">';
		html_SKILL[3] = '<input type="checkbox" name="EQ_KP" onClick="calc()">';

		for(i=0;i<=3;i++)
			myInnerHtml("B_SK"+i,html_SKILL[i],0);

		for(i=0;i<=10;i++)
			document.calcForm.EQ_LV.options[i] = new Option(i,i);
			
		for(i=1;i<=48;i++) // GM Event up to 4 parties x 12 members
			document.calcForm.EQ_PL.options[i-1] = new Option(i,i);

		EQ_PL.value = EQB[0];
		EQ_WF.checked = EQB[1];
		EQ_KP.checked = EQB[2];
		EQ_LV.value = (EQ_MOBS.hasOwnProperty(n_B[0])) ? EQ_MOBS[n_B[0]] : EQB[3];

	}else{
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: separate; width: auto;">';
		str += '<TR><TD ColSpan="6" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px; width: 100px;">'+ wstr +' Skills </div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab7" type="checkbox" name="B_ENSKSW"onClick="Click_EnemySkillsSW()"><label for="lab7">Show</label></div><div style="clear: both;"></div></TD></TR></table>';
		myInnerHtml("MONSTER_SKILLS",str,0);
		B_ENSKSW.checked = 0;
	}
	
	calc();
}}

function HealCalc(HealLv,HealType)
{
	wHeal = Math.floor((n_A_BaseLV + n_A_INT) /8) * (HealLv *8 +4);
	wHealBAI = 100 + SkillSearch(269) *2;
	wHeal = Math.floor(wHeal * wHealBAI /100);
	wHeal = Math.floor(wHeal * (1 + n_tok[91] / 100) * (1 + (HealType ? n_tok[92] : 0) / 100));

	return wHeal;
}

function BattleCalc998()
{
	if(n_PerHIT_DMG > 0 && w_HIT_HYOUJI < 100){
		str_bSUBname += "<Font size=2>Damage When Missing</Font>";
		if(str_PerHIT_DMG == 0)
			str_bSUB += n_PerHIT_DMG;
		else
			str_bSUB += str_PerHIT_DMG;
	}

	myInnerHtml("bSUBname",str_bSUBname,0);
	myInnerHtml("bSUB",str_bSUB,0);
	myInnerHtml("BattleHIT",w_HIT_HYOUJI,0);

	if(n_B[0]==44 && n_A_ActiveSkill != 0 && n_A_ActiveSkill != 325){
		for(i=0;i<=2;i++){
			w_DMG[i] = 0;
			myInnerHtml("ATK_0"+i,0,0);
		}
	}

	tPlusAG();
	var w;
	w = Math.floor(n_B[6] / w_DMG[2]);
	if(n_B[6] % Math.floor(w_DMG[2]) != 0)
		w += 1;
	if(w<10000)
		myInnerHtml("MinATKnum",w,0);
	else
		myInnerHtml("MinATKnum",SubName[5],0);

	if(SG_Special_HITnum != 0){
		if(w==1){
			var wHITnum;
			var x;
			wHITnum = SG_Special_HITnum;
			x = (SG_Special_DMG[2] * wHITsuu - n_B[6]) / (SG_Special_DMG[2] * wHITsuu - SG_Special_DMG[0] * wHITsuu);
			if(x > 1)x=1;
			if(x < 0)x=0;
			if(wHITnum == 2){
				if(x < 0.5)
					x = 2 * x * x;
				else
					x = 1 - 2 * (1-x) * (1-x);
			}
			if(wHITnum == 3){
				if(x < (1/3))
					x = 4.5 * Math.pow(x,3);
				else if((1/3) <= x && x < (2/3))
					x = 4.5 * (Math.pow(x,3) - 3 * Math.pow(x-1/3,3));
				else if((2/3) <= x)
					x = 1 - 4.5 * Math.pow(1-x,3);
			}
			if(wHITnum >= 4){
				var y = Math.sqrt(Math.pow(SG_Special_DMG[2]-SG_Special_DMG[0],2) / 12 * wHITnum);
				x = (SG_Special_DMG[1] * wHITsuu - n_B[6]) / y;
				if(x >= 0)
					x = 0.5+0.5*Math.sqrt(1-Math.exp(-2*Math.pow(x,2)/Math.PI));
				else
					x = 0.5-0.5*Math.sqrt(1-Math.exp(-2*Math.pow(x,2)/Math.PI));
			}
			x = Math.floor(x * 10000) / 100;
			myInnerHtml("MinATKnum","1 ("+ x +"% Chance)",0);
		}
		SG_Special_HITnum = 0;
	}


	if(w_HIT_HYOUJI < 100 && n_PerHIT_DMG == 0){
		myInnerHtml("MaxATKnum","<Font size=2>Infinite (no 100% Hit)</Font>",0);
	}else{
		var wX = w_DMG[0];
		if(w_HIT_HYOUJI < 100)
			wX = n_PerHIT_DMG;
		w = Math.floor(n_B[6] / wX);
		if(n_B[6] % Math.floor(wX) != 0)
			w += 1;
		if(w<10000)
			myInnerHtml("MaxATKnum",w,0);
		else
			myInnerHtml("MaxATKnum",SubName[5],0);
	}

	damage_per_second = 1 / (wCast + wDelay) * w_DMG[1];
	
	if (2 == n_Enekyori)
	{
		if (support_autospell && SkillSearch(229)) // AutoSpell#229
			damage_per_second = 1 / wDelay * (.05 + SkillSearch(229) / 50) * w_DMG[1];
		
		if (support_double_casting && SkillSearch(443)) // Double Casting#443
			damage_per_second *= 1.3 + SkillSearch(443) / 10;
	}
	
	damage_per_second = Math.round(damage_per_second);

	if(n_Delay[0])
		myInnerHtml("AveSecondATK","Special",0);
	else
		myInnerHtml("AveSecondATK", damage_per_second, 0);

	w = Math.floor(n_B[6] / w_DMG[1]);
	if(n_B[6] % w_DMG[1] != 0)
		w += 1;

	if(Taijin==0){
		if(w<10000){
			myInnerHtml("AtkBaseExp",Math.round(n_B[16] / w) +"Exp",0);
			myInnerHtml("AtkJobExp",Math.round(n_B[17] / w) +"Exp",0);
		}else{
			myInnerHtml("AtkBaseExp",SubName[7],0);
			myInnerHtml("AtkJobExp",SubName[7],0);
		}
	}
	
	myInnerHtml("average_zeny_cost","",0);
	myInnerHtml("average_zeny_cost_value","",0);
	
	if(w<10000)
	{
		myInnerHtml("AveATKnum",w,0);
		
		if (zeny_cost)
		{
			// #118 - 75% reduced zeny cost with all Zeny skills
			if (SQI_Bonus_Effect.findIndex(x => x == 118) > -1)
				zeny_cost = Math.ceil(zeny_cost * 0.25);
			
			// Valorous Insane Battle Axe#905 - Glorious Two-handed Axe#1087 - 20% reduced zeny cost with all Zeny skills
			if (EquipNumSearch(905) || EquipNumSearch(1087))
				zeny_cost = Math.ceil(zeny_cost * 0.80);
			// Glorious Cleaver#1088 - 10% reduced zeny cost with all Zeny skills
			if (EquipNumSearch(1088))
				zeny_cost = Math.ceil(zeny_cost * 0.90);
			
			myInnerHtml("average_zeny_cost", "Average Zeny Cost",0);
			myInnerHtml("average_zeny_cost_value", zeny_cost * w,0);
		}
		
		if (n_A_ActiveSkill)
		{
			sp_cost = 0;
			skill_info = SkillOBJ[n_A_ActiveSkill];
			
			if (skill_info.length > 3)
				sp_cost = skill_info[Math.min(2 + n_A_ActiveSkillLV, skill_info.length - 1)];
			
			sp_cost = Math.ceil(sp_cost * (1 + n_tok[72] / 100));
			
			// #117 - Reduce [Cart Termination] and [Mammonite] SP costs by 50%
			if ((65 == n_A_ActiveSkill || 326 == n_A_ActiveSkill) && (SQI_Bonus_Effect.findIndex(x => x == 117) > -1))
				sp_cost = Math.ceil(sp_cost * 0.5);
		
			/*
				Huuma Thunderstorm#1771 	- [Every Refine Level] - 3% less SP cost with [Wind Blade], [Lightning Crash], and [North Wind].",5,4,89,15,20,4,344,10,0]
				Huuma Fluttering Snow#1772 	- [Every Refine Level] - 3% less SP cost with [Lightning Spear of Ice], [Water Escape Technique], and [Falling Ice Pillar].",5
				Huuma Fierce Inferno#1773 	- [Every Refine Level] - 3% less SP cost with [Crimson Fire Blossom], [Crimson Fire Formation] and [Dragon Fire Formation]."
			*/
			if ((EquipNumSearch(1771) && (413 == n_A_ActiveSkill || 414 == n_A_ActiveSkill || 415 == n_A_ActiveSkill)) ||
				(EquipNumSearch(1772) && (410 == n_A_ActiveSkill || 411 == n_A_ActiveSkill || 412 == n_A_ActiveSkill)) ||
				(EquipNumSearch(1773) && (407 == n_A_ActiveSkill || 408 == n_A_ActiveSkill || 409 == n_A_ActiveSkill)))
				sp_cost = Math.ceil(sp_cost * (1 - 0.03 * n_A_Weapon_ATKplus));
				
			// Rolling Thunder#1790 - [Every Refine Level] - 5% more damage with [Spread Attack#436]
			if (436 == n_A_ActiveSkill && EquipNumSearch(1790))
				sp_cost = Math.ceil(sp_cost * (1 - 0.05 * n_A_Weapon_ATKplus));
			
			myInnerHtml("average_sp_cost", "Average SP Cost" ,0);
			myInnerHtml("average_sp_cost_value", sp_cost * w,0);
		}
		else
		{
			myInnerHtml("average_sp_cost", "",0);
			myInnerHtml("average_sp_cost_value", "",0);
		}
		
		average_battle_duration = Math.floor(n_B[6] / damage_per_second * 100) / 100;

		if(n_Delay[0])
			myInnerHtml("BattleTime","Special",0);
		else
			myInnerHtml("BattleTime", average_battle_duration + "s",0);
	}
	else
	{
		myInnerHtml("AveATKnum",SubName[5],0);
		myInnerHtml("BattleTime",SubName[6],0);
	}

	if(Taijin==0){
		w = BattleHiDam();

		w = Math.round(w *(100-n_A_LUCKY))/100;
		w = Math.round(w *(100-w_FLEE))/100;
		if(SkillSearch(157)){
			w = Math.round(w * w_AG[SkillSearch(157)])/100;
		}
		if(n_A_WeaponType==3 && SkillSearch(255)){
			w = Math.round(w * (80- SkillSearch(255) *3))/100;
		}
		if(SkillSearch(287)){
			w = Math.round(w * (100- SkillSearch(287) *7.5))/100;
		}
		myInnerHtml("B_Ave2Atk",w+" Damage",0);
	}

	// Monster Skills
	EQ_POWER = "N/A";
	HJ_POWER = "N/A";
	
	if (0 == Taijin && document.calcForm.B_ENSKSW.checked) // Only applies to PvM
	{
		// Damage reduction

		MS_ASSUMPTIO = 1; // Assumptio
		if (n_A_PassSkill2[5])
			MS_ASSUMPTIO = 0.5;

		MS_ADJ = 1; // Adjustment#421 Skill de Gunslinger
		if (SkillSearch(421))
			MS_ADJ = 0.8;

		MS_WOF = 1; // Wall of Fog
		if (document.calcForm.EQ_WF.checked)
			MS_WOF = 0.75;
		
		MS_EC = 1 - 6 * SkillSearch(58) / 100; // Energy Coat#58

		MS_KAUPE = (document.calcForm.EQ_KP.checked) ? 1 : 0; // Kaupe prevents the first hit;

		MS_BOSS = 1 - n_tok[77] / 100; 				// Boss reduction
		MS_RANGE = 1 - n_tok[78] / 100; 			// Range reduction
		MS_NEUTRAL = 1 - n_tok[60] / 100; 			// Neutral reduction
		MS_RACE = 1 - n_tok[50 + n_B[2]] / 100; 	// Race reduction
		MS_ELEMENT = 1 - n_tok[330 + n_B[3]] / 100;	// Monster element reduction
		MS_MAGIC = 1 - n_tok[101] / 100;			// Magic reduction
		MS_REGION = 1 - (MANUKU_MONSTER() && n_A_PassSkill8[24] ? 0.1 : 0) - (SUPURE_MONSTER() && n_A_PassSkill8[27] ? 0.1 : 0);
		
		// NPC_EARTHQUAKE Skill
		EQ_LV = (EQ_MOBS.hasOwnProperty(n_B[0])) ? EQ_MOBS[n_B[0]] : EQB[3];
		document.calcForm.EQ_LV.value = EQ_LV;
		EQ_TARGETS = eval(document.calcForm.EQ_PL.value)
		
		EQ_ST = Math.min(Math.min(1, EQ_LV), EQ_TARGETS);

		if (EQ_ST)
		{	
			if (CardNumSearch(126)) //Golden Thief Bug Card - reducing earth quack damage to 0
				EQ_POWER = "0~0";
			else
			{
				HITS = 3 - MS_KAUPE;
				EQ_RATIO = 2 + EQ_LV + EQ_LV / 2 + ((EQ_LV > 4) ? 1 : 0);

				MS_REDUCTION = MS_BOSS * MS_ELEMENT * MS_NEUTRAL * MS_RACE * MS_MAGIC * MS_REGION * (blossoming_geographer_cocktail ? 0.9 : 1); // EQ is considered as short ranged attack, no damage reduction from bLongAtkDef

				EQ_MINDMG = Math.floor(Math.floor(Math.floor(Math.floor(n_B[12] * EQ_RATIO * (1 - n_A_MDEF /100) - n_A_INTMDEF) * MS_REDUCTION) * MS_WOF * MS_ASSUMPTIO * MS_EC) / EQ_TARGETS);
				EQ_MAXDMG = Math.floor(Math.floor(Math.floor(Math.floor(n_B[13] * EQ_RATIO * (1 - n_A_MDEF /100) - n_A_INTMDEF) * MS_REDUCTION) * MS_WOF * MS_ASSUMPTIO * MS_EC) / EQ_TARGETS);

				EQ_POWER = Math.floor(EQ_MINDMG * HITS) + "~" + Math.floor(EQ_MAXDMG * HITS) + " (" + EQ_MINDMG + "~" + EQ_MAXDMG + " x " + HITS + " Hits)";
			}
		}

		// NPC_HELLJUDGEMENT Skill
		HJ_LV = (HJ_MOBS.hasOwnProperty(n_B[0])) ? HJ_MOBS[n_B[0]] : 0;
		
		if (HJ_LV)
		{
			HITS = 1 - MS_KAUPE;
			
			HJ_RATIO = HJ_LV;
			MS_REDUCTION = MS_BOSS * MS_RANGE * MS_ELEMENT * MS_NEUTRAL * MS_RACE * (sting_slap_cocktail ? 0.9 : 1);
			
			HJ_MINDMG = Math.floor(Math.floor(Math.floor(n_B[12] * HJ_RATIO * (1 - n_A_DEF /100) - n_A_VITDEF[0]) * MS_REDUCTION) * MS_WOF * MS_ASSUMPTIO * MS_EC);
			HJ_MAXDMG = Math.floor(Math.floor(Math.floor(n_B[13] * HJ_RATIO * (1 - n_A_DEF /100) - n_A_VITDEF[2]) * MS_REDUCTION) * MS_WOF * MS_ASSUMPTIO * MS_EC);

			HJ_POWER = Math.floor(HJ_MINDMG * HITS) + "~" + Math.floor(HJ_MAXDMG * HITS);
		}
	}

	myInnerHtml("B_EQ",EQ_POWER,0);
	myInnerHtml("B_HJ",HJ_POWER,0);
}

function BattleHiDam(){

	w_HiDam = new Array();
	wBHD = n_B[13];
	w_HiDam[0] = n_B[12];
	w_HiDam[1] = (n_B[12] *5 + wBHD) /6;
	w_HiDam[2] = (n_B[12] *4 + wBHD *2) /6;
	w_HiDam[3] = (n_B[12] + wBHD) /2;
	w_HiDam[4] = (n_B[12] *2 + wBHD *4) /6;
	w_HiDam[5] = (n_B[12] + wBHD *5) /6;
	w_HiDam[6] = wBHD;
	if(n_B[12] == n_B[13])
		w_HiDam[6] = wBHD - 1;

	w_HiDam[0] = w_HiDam[0] * (100-n_A_DEF) / 100 - n_A_VITDEF[2];
	w_HiDam[1] = w_HiDam[1] * (100-n_A_DEF) / 100 - n_A_VITDEF[2];
	w_HiDam[2] = w_HiDam[2] * (100-n_A_DEF) / 100 - n_A_VITDEF[2];
	w_HiDam[3] = w_HiDam[3] * (100-n_A_DEF) / 100 - n_A_VITDEF[1];
	w_HiDam[4] = w_HiDam[4] * (100-n_A_DEF) / 100 - n_A_VITDEF[0];
	w_HiDam[5] = w_HiDam[5] * (100-n_A_DEF) / 100 - n_A_VITDEF[0];
	w_HiDam[6] = w_HiDam[6] * (100-n_A_DEF) / 100 - n_A_VITDEF[0];


	if(SkillSearch(23) && (n_B[3]>=90 || n_B[2]==6)){
		wBHD = Math.floor((3 + 4/100 * n_A_BaseLV) * SkillSearch(23));
		for(i=0;i<=6;i++)
			w_HiDam[i] -= wBHD;
	}


	if(SkillSearch(355)){
		wBHD = Math.floor((n_A_BaseLV + n_A_LUK + n_A_DEX) / 2);
		for(i=0;i<=6;i++)
			w_HiDam[i] -= wBHD;
	}


	wBHD = n_tok[60];
	if(wBHD != 0){
		for(i=0;i<=6;i++)
			w_HiDam[i] -= Math.floor(w_HiDam[i] * wBHD /100);
	}

	if(SkillSearch(58)){
		wBHD = 6 * SkillSearch(58);
		for(i=0;i<=6;i++)
			w_HiDam[i] -= Math.floor(w_HiDam[i] * wBHD /100);
	}

	wBHD = n_tok[50+n_B[2]];
	if(wBHD != 0){
		for(i=0;i<=6;i++)
			w_HiDam[i] -= Math.floor(w_HiDam[i] * wBHD /100);
	}

	wBHD = n_tok[190+n_B[4]];
	if(wBHD != 0){
		for(i=0;i<=6;i++)
			w_HiDam[i] -= Math.floor(w_HiDam[i] * wBHD /100);
	}

	if(n_B[19] == 0){
		wBHD = n_tok[79];
		for(i=0;i<=6;i++)
			w_HiDam[i] -= Math.floor(w_HiDam[i] * wBHD /100);
	}


	if(n_B[20]){
		wBHD = n_tok[78];
		for(i=0;i<=6;i++)
			w_HiDam[i] -= Math.floor(w_HiDam[i] * wBHD /100);

		if(SkillSearch(165)){
			wBHD = 5 + 15 * SkillSearch(165);
			for(i=0;i<=6;i++)
				w_HiDam[i] -= Math.floor(w_HiDam[i] * wBHD /100);
		}
	}

	// bNearAtkDef - Apply melee resistance
	if (!n_B[20])
	{
		for(j=0;j<=6;j++)
			w_HiDam[j] -= Math.floor(w_HiDam[j] * n_tok[100] / 100);
	}

	//Port Malaya set damage reduction - [Loa] - 2018-06-29
	portMalayaMob = [596,597,598,599,600,601,602,603,671,672,673,674,676,677]
	if(EquipNumSearch(1017)){
		if(portMalayaMob.includes(n_B[0])){
			for(i=0;i<=6;i++){
				w_HiDam[i] -= Math.floor(w_HiDam[i] * 30 / 100);
			}
		}
	}

	if(n_B[19]==1){
		for(i=0;i<=6;i++)
			w_HiDam[i] -= Math.floor(w_HiDam[i] * n_tok[77] /100);

	}

	if(TimeItemNumSearch(9))
		for(i=0;i<=6;i++)
			w_HiDam[i] -= Math.floor(w_HiDam[i] * 20 /100);


	wBHD = n_tok[330 + Math.floor(n_B[3] / 10)];
	if(wBHD != 0){
		for(i=0;i<=6;i++)
			w_HiDam[i] -= Math.floor(w_HiDam[i] * wBHD /100);
	}


	wBHD = StPlusCard(3000+n_B[0]);
	wBHD += StPlusCalc2(3000+n_B[0]);
	for(i=0;i<=6;i++)
		w_HiDam[i] -= Math.floor(w_HiDam[i] * wBHD /100);

	if(n_A_PassSkill8[24]){
		if(MANUKU_MONSTER())
			for(i=0;i<=6;i++)
				w_HiDam[i] -= Math.floor(w_HiDam[i] * 10 / 100);
	}
	if(n_A_PassSkill8[27]){
		if(SUPURE_MONSTER())
			for(i=0;i<=6;i++)
				w_HiDam[i] -= Math.floor(w_HiDam[i] * 10 / 100);
	}

	// Sting's Slap Cocktail - Resistance to Physical attacks +10%
	if (n_Enekyori < 2 && sting_slap_cocktail) {
		for (i = 0 ; i <= 6; ++i)
				w_HiDam[i] -= Math.floor(w_HiDam[i] * 10 / 100);
	}
	
	// Blossoming Geographer Cocktail - Resistance to Magical attacks +10%
	if (2 == n_Enekyori && blossoming_geographer_cocktail) {
		for (i = 0 ; i <= 6; ++i)
				w_HiDam[i] -= Math.floor(w_HiDam[i] * 10 / 100);
	}

	for(i=0;i<=6;i++){
		if(w_HiDam[i] < 1)
			w_HiDam[i]=1;

	}

	if(n_A_PassSkill2[5]){
		if(n_A_PassSkill8[14] || n_A_PassSkill6[2])
			for(i=0;i<=6;i++)
				w_HiDam[i] = Math.floor(w_HiDam[i] * 2 / 3);
		else
			for(i=0;i<=6;i++)
				w_HiDam[i] = Math.floor(w_HiDam[i] / 2);
	}

	if(n_A_PassSkill5[5])
		for(i=0;i<=6;i++)
			w_HiDam[i] = Math.floor(w_HiDam[i] / 2);

	w_HiDam[0] = Math.floor(w_HiDam[0]);
	w_HiDam[6] = Math.floor(w_HiDam[6]);


	wBHD=0;
	for(i=0;i<=6;i++)
		wBHD += w_HiDam[i];
	wBHD = Math.round(wBHD / 7);


	var name64 = NameCalc[64];
	var wRefStr = "";
	if(Taijin==0){
		var asm=1;
		if(n_A_PassSkill2[5])
			asm = 2;
		if(SkillSearch(160)){
			var wRSnum = (10 + 3 * SkillSearch(160)) * asm;
			var wRef1 = new Array();
			wRef1[0] = Math.floor(wBHD * wRSnum / 100);
			wRef1[1] = Math.floor(w_HiDam[0] * wRSnum / 100);
			wRef1[2] = Math.floor(w_HiDam[6] * wRSnum / 100);
			wRefStr += "<BR><Font color='Blue'><B>"+ wRef1[0] +" ("+ wRef1[1] +"~"+ wRef1[2] +")</B>";
			name64 += "<BR><Font color=Blue><B>Damage Reflected</B></Font>";
		}
		if(n_tok[71]){
			var wRef2 = new Array();
			var w = n_tok[71] * asm;
			wRef2[0] = Math.floor(wBHD * w / 100);
			wRef2[1] = Math.floor(w_HiDam[0] * w / 100);
			wRef2[2] = Math.floor(w_HiDam[6] * w / 100);
			wRefStr += "<BR><Font color='Blue'><B>"+ wRef2[0] +" ("+ wRef2[1] +"~"+ wRef2[2] +")</B>";
			name64 += "<BR><Font color=Blue><B>Damage Reflected</B></Font>";
		}
	}
	myInnerHtml("nm065",name64,0);
	myInnerHtml("B_AveAtk",wBHD +" ("+ w_HiDam[0] +"~"+ w_HiDam[6]+")"+ wRefStr,0);

	return wBHD;
}

function BattleMagicCalc(wBMC)
{
	wBMC_MDEF = n_B[15];
	var MDEF_Musi = 0;
	//custom TalonRO Update 2014-09-24
	//if(n_B[19]==0 && CardNumSearch(424))
	//	MDEF_Musi = 1;
	if(MDEF_Musi != 0){
		//custom TalonRO High Wizard Kathryne
		wBMC_MDEF = wBMC_MDEF/100*80;
		n_B_MDEF2 = n_B_MDEF2/100*80;
		//before customization
		//wBMC_MDEF = 0;
		//n_B_MDEF2 = 0;
	}

	if(n_A_ActiveSkill==122)
		wBMC2 = Math.floor(wBMC + 50);
	else{
		if (debug_dmg_avg) {
			debug_atk+="\n --- MATK-MDEF ---";
			debug_atk+="\nb_wBMC:"+wBMC;
		}
		wBMC2 = Math.floor(wBMC * (100 - wBMC_MDEF) /100 - n_B_MDEF2);
		if (debug_dmg_avg)
			debug_atk+="\na_wBMC2:"+wBMC2;
	}
	if(wBMC2 < 1)wBMC2=1;
	if(n_A_ActiveSkill==104){
		if(n_B[2] != 6 && n_B[3] < 90){
			wBMC2=0;
		}
	}
	if (debug_dmg_avg) {
		debug_atk+="\n --- Element-Modifier ---";
		debug_atk+="\nb_wBMC2:"+wBMC2;
	}
	wBMC2 = Math.floor(wBMC2 * zokusei[n_B[3]][n_A_Weapon_zokusei]); // Apply elemental weakness
	if (debug_dmg_avg)
		debug_atk+="\na_wBMC2:"+wBMC2;
	if(90 <= n_B[3] && n_A_ActiveSkill==47) // Soul Strike on non-undead monsters
		wBMC2 = Math.floor(wBMC2 * (1 + 0.05 * n_A_ActiveSkillLV));

	// >> bMagicAddEle
	// Damage multiplier on magic element
	var wMEleX = n_tok[340 + n_A_Weapon_zokusei]
	
	// Damage multiplier for monster element
	wMEleX += n_tok[350+Math.floor(n_B[3]/10)];
	
	wBMC2 = wBMC2 * (100 + wMEleX) /100;
	// << bMagicAddEle
	
	// >> bMagicAddRace
	// Damage multiplier for race - bMagicAddRace
	var wMRaceX = n_tok[170 + n_B[2]];
	
	// >> bMagicAddRace2
	/*
		Detecting Staff#1735 - Increases magical damage against Kiel Dungeon Monsters (except Alice), Juperos Ruins Monsters, and Guardians by 5%
		[Every Refine Level] Magical damage increased by 1%"
	*/
	if (EquipNumSearch(1735) && (IsAKielDungeonMonster() || IsAJuperosRuinsMonster()))
		wMRaceX += 5 + n_A_Weapon_ATKplus;
	
	wBMC2 = wBMC2 * (100 + wMRaceX) / 100;
	// << bMagicAddRace2 << bMagicAddRace

	// >> bMagicAddClass
	var wMClassX = 0
	if (n_B[19] == 1) { // Increases magical damage against bosstype monsters - bMagicAddClass,Class_Boss
		wMClassX = n_tok[97];
	} else {
		wMClassX = n_tok[96]
	}
	
	wBMC2 = wBMC2 * (100 + wMClassX) /100;
	// << bMagicAddClass
	
	// Dragonology - Increases Attack Power, MATK and DEF against Dragon type monsters by 4% per SkillLV
	// FIXME : Dragonology should increases MATK% instead ?
	var wX = 0
	if(n_B[2]==9  && SkillSearch(234))
		wX += SkillSearch(234) *2;
	wBMC2 = wBMC2 * (100 + wX) /100;
	
	// >> bMagicAddSize
	// << bMagicAddSize
	
	// >> bAddMagicDamageClass
	// << bAddMagicDamageClass
	
	wBMC2 = tPlusDamCut(wBMC2);

	var wX = StPlusCalc2(5000+n_A_ActiveSkill) + StPlusCard(5000+n_A_ActiveSkill);
	if(n_A_ActiveSkill==46 || n_A_ActiveSkill==47 || n_A_ActiveSkill==277)
		if(n_A_JobSearch()==5)
			wX += 20 * CardNumSearch(474);
	if(n_A_ActiveSkill==132 || n_A_ActiveSkill==133)
		if(EquipNumSearch(1146))
			wX += n_A_Weapon_ATKplus;
	if(n_A_ActiveSkill==131)
		if(EquipNumSearch(1169))
			wX += n_A_Weapon_ATKplus;

	//Custom TalonRO - 2018-06-07 - Chilly Spell Book - Storm Gust & Cold Bolt damage +3% per refine [Nattwara]
	if(n_A_ActiveSkill==54 || n_A_ActiveSkill==131)
		if(EquipNumSearch(1653))
			wX += (3 * n_A_Weapon_ATKplus);

	if(n_A_ActiveSkill==37||n_A_ActiveSkill==387){
		if(n_A_JobSearch() == 3 && EquipNumSearch(1247)){
			wX += 5;
			if(n_A_HEAD_DEF_PLUS > 7)
				wX += 5;
		}
	}
		
	// Yellow Lichtern Card#612 - [Ninja Class] - 25% more damage with [Wind Blade]
	if (44 == n_A_JOB)
		wX += 25 * CardNumSearch(612);

	wBMC2 = wBMC2 * (100 + wX) / 100;


	if(n_A_PassSkill8[23]){
		if(MANUKU_MONSTER())
			wBMC2 = wBMC2 * 110 / 100
	}
	if(n_A_PassSkill8[26]){
		if(SUPURE_MONSTER())
			wBMC2 = wBMC2 * 110 / 100
	}

	wBMC2 = Math.floor(wBMC2);

	return wBMC2;
}

function ClickJob(n){
with(document.calcForm){

	myInnerHtml("A_KakutyouSel","",0);
	myInnerHtml("A_KakutyouData","",0);
	A_Kakutyou.value = 0;

	for(var i=0;i<=12;i++)
		n_A_PassSkill2[i] = 0;
	if(n_SkillSW){
		A2_Skill0.value = 0;
		A2_Skill1.value = 0;
		A2_Skill2.value = 0;
		A2_Skill3.checked = 0;
		A2_Skill4.value = 0;
		A2_Skill5.checked = 0;
		A2_Skill6.checked = 0;
		A2_Skill7.checked = 0;
		A2_Skill8.value = 0;
		A2_Skill9.value = 0;
		A2_Skill10.value = 0;
		A2_Skill11.checked = 0;
	}

	n_A_JobSet();
	n = n_A_JOB;

	var len = A_JobLV.length;
	for(i=0;i<len;i++)
		A_JobLV.options[0] = null;
	var w=0;
	if(n == 0)w=10;
	else if(n <= 19 || (41 <= n && n <= 43))w=50;
	else if(n == 20)w=99;
	else w=70;
	for(i=1;i<=w;i++)
		A_JobLV.options[i-1] = new Option(i,i);

	for(var i=2;i<=3;i++)
		A_SpeedPOT.options[2] = null;

	if(n_A_JOB != 3 && n_A_JobSearch2() != 9 && n_A_JobSearch2() != 16)
		A_SpeedPOT.options[2] = new Option(SpeedPotName[2]+"(Lv40)",2);
	else
		A_SpeedPOT.options[2] = new Option("-",0);
	if(n_A_JobSearch()==1 || n_A_JobSearch()==6 || n_A_JobSearch()==41 || n_A_JobSearch2()==14 || n_A_JobSearch2()==11 || n_A_JOB == 5 || n_A_JOB == 45)
		A_SpeedPOT.options[3] = new Option(SpeedPotName[3]+"(Lv85)",3);
	else
		A_SpeedPOT.options[3] = new Option("-Special("+ SkillOBJ[304][2] +")(Lv85)",3);
	if(n_A_JOB == 22)
		A_SpeedPOT.options[4] = new Option("Poison Bottle",4);


	if(n_A_JOB != 20)
		SuperNoviceFullWeaponCHECK = 0;
	if(SuperNoviceFullWeaponCHECK)
		JobASPD[20][7] = 120;
	else
		JobASPD[20][7] = 0;

	for(i=21;i>=0;i--)
		A_WeaponType.options[i] = null;
	j = 0;
	for (i=0; i<=21; i++)
	{
		if(JobASPD[n][i] != 0  || debugMode == 1)
		{
			A_WeaponType.options[j] = new Option(WeaponName[i],i);
			j++;
		}
	}

	//custom TalonRO SQI Bonus interface - reset SQI-Bonus after class-change
	SQI_Bonus_SW.checked=0;
	Click_SQI_Bonus_SW();
	for(var i=0;i < SQI_Bonus_Effect.length;i++)
		SQI_Bonus_Effect[i] = 0;
	Click_SQI_Bonus(0);

	ClickWeaponType(0);


	for(i=0;i<=14;i++){
		if(JobSkillPassOBJ[n][i] != 999){
			myInnerHtml("P_Skill"+i,SkillOBJ[JobSkillPassOBJ[n][i]][2],0);
			myInnerHtml("P_Skill"+i+"s","<select name=A_skill"+i+" id=A_skill"+i+" onChange=StAllCalc()></select>",0);
		}
		else{
			myInnerHtml("P_Skill"+i,"",0);
			myInnerHtml("P_Skill"+i+"s","",0);
		}
	}


	for(var j=0;j<=14;j++){
		var w = JobSkillPassOBJ[n][j];
		var w2 = [12,68,253,258,301,309,310,322,345,364,365,383,385,386,390,392,420,421,422];
		if(NumSearch(w,w2)){
			var wOBJ = document.getElementById("A_skill"+j);
			wOBJ.options[0] = new Option("off",0);
			wOBJ.options[1] = new Option("on",1);
		}
		else if(w != 999){
			var wOBJ = document.getElementById("A_skill"+j);
			for(var i=10;i>=0;i--)
				wOBJ.options[i] = null;
			for(var i=0;i<=SkillOBJ[JobSkillPassOBJ[n][j]][1];i++)
				wOBJ.options[i] = new Option(i,i);
		}
	}

	if(JobSkillPassOBJ[n][0]==58){
		for(i=10;i>=0;i--)
			A_skill0.options[i] = null;
		n_ECname=["0","6% Reduction","12% Reduction","18% Reduction","24% Reduction","30% Reduction"];
		for(i=0;i<=5;i++)
			A_skill0.options[i] = new Option(n_ECname[i],i);
	}

	if(JobSkillPassOBJ[n][5]==78){
		for(i=10;i>=0;i--)
			A_skill5.options[i] = null;
		n_ECname=["No Peco","Cavalier Mastery 0","Cavalier Mastery 1","Cavalier Mastery 2","Cavalier Mastery 3","Cavalier Mastery 4","Cavalier Mastery 5"];
		for(i=0;i<=6;i++)
			A_skill5.options[i] = new Option(n_ECname[i],i);
	}

	if(JobSkillPassOBJ[n][9]==78){
		for(i=10;i>=0;i--)
			A_skill9.options[i] = null;
		n_ECname=["No Peco","Cavalier Mastery 0","Cavalier Mastery 1","Cavalier Mastery 2","Cavalier Mastery 3","Cavalier Mastery 4","Cavalier Mastery 5"];
		for(i=0;i<=6;i++)
			A_skill9.options[i] = new Option(n_ECname[i],i);
	}

	if(JobSkillPassOBJ[n][11]==367){
		for(i=10;i>=0;i--)
			A_skill11.options[i] = null;
		n_ECname=[0,1,2,3,4,5,6,8,10];
		for(i=0;i<=8;i++)
			A_skill11.options[i] = new Option((n_ECname[i] * 10) + "%",n_ECname[i]);
	}

	var len = A_ActiveSkill.length;
	for(var i=0;i<len;i++)
		A_ActiveSkill.options[0] = null;
	for(i=0;JobSkillActiveOBJ[n][i] != 999;i++)
		A_ActiveSkill.options[i] = new Option(SkillOBJ[JobSkillActiveOBJ[n][i]][2],JobSkillActiveOBJ[n][i]);


	for(i=0;i<20;i++)
		w_ASSP9bk[i] = 0;
	ActiveSkillSetPlus();

	ClickActiveSkill();
	WeaponSet2();
	VanillaArmor();
}}

function ClickWeaponType(n){
with(document.calcForm){
	addSharpArrow = 0;
	n_A_JobSet();
	if(n_A_JobSearch()==2 || n_A_JobSearch()==4 || (n_A_JOB==45 && n!=0)){
		A_Arrow.style.visibility = "visible";
		var len = A_Arrow.length;
		for(var i=0;i<len;i++)
			A_Arrow.options[0] = null;
		if(n==10||n==14||n==15){
			j=18;
			for (i=0; i<=4; i++)
				ArrowOBJ[i] = ArrowOBJbackup[i];
		}
		else if (n >= 17 && n <= 20)
		{
			j=8;
			for (i=0; i<=8; i++)
				ArrowOBJ[i] = BulletOBJ[i];
		}
		else if (n==21)
		{
			j=4;
			for (i=0; i<=4; i++)
				ArrowOBJ[i] = GrenadeOBJ[i]
		}
		else
		{
			j=1;
			ArrowOBJ[0] = [0,0,"No Arrows"];
			ArrowOBJ[1] = ArrowOBJ[16];
			//custom TalonRO fix, add Sharp Arrow if no range weapon is equipped, so +5% crit damage still works if equipped with Little Feather Hat
			addSharpArrow = 1
		}
		//custom TalonRO fix, add Sharp Arrow if no range weapon is equipped, so +5% crit damage still works if equipped with Little Feather Hat
		for(i=0; i<=j; i++){
			A_Arrow.options[i] = new Option(ArrowOBJ[i][2],i);
		}
		if (j==1 && addSharpArrow == 1)
			A_Arrow.options[2] = new Option(ArrowOBJ[15][2],15);
		//new
		//before
		for(i=0; i<=j; i++)
			A_Arrow.options[i] = new Option(ArrowOBJ[i][2],i);
	}else{
		A_Arrow.value = 0;
		A_Arrow.style.visibility = "hidden";
	}
	WeaponSet();

	if(n == 0){
		myInnerHtml("A_seirenchi_name","",0);
		A_Weapon_ATKplus.style.visibility = "hidden";
		A_Weapon_ATKplus.value = 0;
	}
	else{
		myInnerHtml("A_seirenchi_name","Refine: ",0);
		A_Weapon_ATKplus.style.visibility = "visible";
	}

	n_A_JobSet();

	if((n_A_JOB == 8 || n_A_JOB == 22) && n != 11){
		if(n_Nitou == 0){
			myInnerHtml("A_SobWeaponName","Left Hand: "+'<select name="A_Weapon2Type" onChange = "ClickWeaponType2(this[this.selectedIndex].value) | StAllCalc()">	<option value="0">Fist or Shield<option value="1">Dagger<option value="2">Sword<option value="6">Axe</select>',0);
		}
	}
	else{
		myInnerHtml("A_SobWeaponName","",0);
		myInnerHtml("spanA_weapon2","",0);
		myInnerHtml("spanA_weapon2seiren","",0);
		myInnerHtml("spanA_weapon2_CardShort","",0);
		myInnerHtml("nA_weapon2_c1","",0);
		myInnerHtml("nA_weapon2_c2","",0);
		myInnerHtml("nA_weapon2_c3","",0);
		myInnerHtml("nA_weapon2_c4","",0);
		n_Nitou = 0;
		A_LEFT_DEF_PLUS.style.visibility = "visible";
		A_left.style.visibility = "visible"
		A_left_card.style.visibility = "visible"
	}

	//hide shield when using two-handed weapons - [Loa] - 2018-06-29
	if(n == 3 || n == 5 || n == 7 || n == 10 || n == 11 || n == 16 || n == 17 || n == 18 || n == 19 || n == 20 || n == 21){
		A_LEFT_DEF_PLUS.style.visibility = "hidden";
		A_LEFT_DEF_PLUS.value = 0;
		A_left.style.visibility = "hidden";
		A_left.value = 305;
		A_left_card.style.visibility = "hidden";
		A_left_card.value = 0;
	}
	//n_Nitou == 0 means no off-hand weapon for assasins equipped
	else if(n_Nitou == 0){
		A_LEFT_DEF_PLUS.style.visibility = "visible";
		A_left.style.visibility = "visible";
		A_left_card.style.visibility = "visible";
	}

	n_A_Equip[0] = eval(A_weapon1.value);
	ActiveSkillSetPlus();
	ClickB_Item(n_A_Equip[0]);
}}

function ClickWeaponType2(n){
with(document.calcForm){

	n_A_JobSet();
	//document.getElementById("T_WDiv2").style.display = ((n != 0) ? "" : "none");
	document.getElementById("T_W2").style.display = ((n != 0) ? "" : "none");
	document.getElementById("T_WC2").style.display = ((n != 0) ? "" : "none");

	if(n != 0){
		if(n_Nitou == 0){
			myInnerHtml("spanA_weapon2",'Left hand: <select name="A_weapon2"onChange="StAllCalc()|ClickB_Item(this[this.selectedIndex].value)"></select>',0);
			myInnerHtml("spanA_weapon2seiren","Refine (Left)"+'<select name="A_Weapon2_ATKplus" onChange = "StAllCalc()"></select>',0);
			for(i=0;i<=10;i++){
				A_Weapon2_ATKplus.options[i] = new Option("+"+i,i);
			}

			myInnerHtml("nA_weapon2_c1",'Left Hand: <select name="A_weapon2_card1"onChange="StAllCalc()|Click_Card(this[this.selectedIndex].value)"></select>',0);
			myInnerHtml("nA_weapon2_c2",'<select name="A_weapon2_card2"onChange="StAllCalc()|Click_Card(this[this.selectedIndex].value)"></select>',0);
			myInnerHtml("nA_weapon2_c3",'<select name="A_weapon2_card3"onChange="StAllCalc()|Click_Card(this[this.selectedIndex].value)"></select>',0);
			myInnerHtml("nA_weapon2_c4",'<select name="A_weapon2_card4"onChange="StAllCalc()|Click_Card(this[this.selectedIndex].value)"></select>',0);

			PopulateCardsLeft();
			VanillaCardLeft();

			A_LEFT_DEF_PLUS.style.visibility = "hidden";
			A_LEFT_DEF_PLUS.value = 0;
			A_left.style.visibility = "hidden";
			A_left.value = 305;
			A_left_card.style.visibility = "hidden";
			A_left_card.value = 0;
		}
		myInnerHtml("spanA_weapon2_CardShort",'<select name="A_cardshortLeft" onChange="SetCardShortLeft()|StAllCalc()|ActiveSkillSetPlus()"></select>',0);
		A_cardshortLeft.options[0] = new Option("Card Shortcuts",0);
		for(i=1;i<=69;i++)
			A_cardshortLeft.options[i] = new Option(CardShort[i][0],i);
		n_Nitou = 1;
		WeaponSetLeft();
	}
	else{
		myInnerHtml("spanA_weapon2","",0);
		myInnerHtml("spanA_weapon2seiren","",0);
		myInnerHtml("spanA_weapon2_CardShort","",0);
		myInnerHtml("nA_weapon2_c1","",0);
		myInnerHtml("nA_weapon2_c2","",0);
		myInnerHtml("nA_weapon2_c3","",0);
		myInnerHtml("nA_weapon2_c4","",0);
		n_Nitou = 0;

		A_LEFT_DEF_PLUS.style.visibility = "visible";
		A_left.style.visibility = "visible"
		A_left_card.style.visibility = "visible"
	}
	if(n_Nitou){
		n_A_Equip[1] = eval(A_weapon2.value);
		ActiveSkillSetPlus();
		ClickB_Item(n_A_Equip[1]);
	}
}}

function ClickActiveSkill(){
with(document.calcForm){
	n_A_ActiveSkill = eval(A_ActiveSkill.value);

	refine_skill_lv_bonus = 0;
				
	// Rolling Thunder#1790 - [Every 2 Refine Level] - Increase [Thunderstorm] level by 1.
	if (EquipNumSearch(1790))
		refine_skill_lv_bonus = Math.floor(n_A_Weapon_ATKplus / 2);
				
	if(n_A_ActiveSkill >= 3000){
		n_A_ActiveSkillLV = InsertSkill[n_A_ActiveSkill -3000][3];
		n_A_ActiveSkill = InsertSkill[n_A_ActiveSkill -3000][2];
	}else if(n_A_ActiveSkill >= 2000){
		n_A_ActiveSkillLV = AutoSpellSkill[n_A_ActiveSkill -2000][3];
		n_A_ActiveSkill = AutoSpellSkill[n_A_ActiveSkill -2000][2];
	}else
		n_A_ActiveSkillLV = SkillOBJ[n_A_ActiveSkill][1];

	var len = A_ActiveSkillLV.length;
	for(i=0;i<len;i++)
		A_ActiveSkillLV.options[0] = null;
	if(n_A_ActiveSkill >= 0)
		for(i=1;i<=n_A_ActiveSkillLV + refine_skill_lv_bonus;i++)
			A_ActiveSkillLV.options[i-1] = new Option(i,i);

	if(SkillOBJ[n_A_ActiveSkill][1] == 1)
		A_ActiveSkillLV.style.visibility = "hidden";
	else{
		A_ActiveSkillLV.style.visibility = "visible";
		A_ActiveSkillLV.value = n_A_ActiveSkillLV;
	}
	ClickActiveSkill2();
}}


function ClickActiveSkill2(){
with(document.calcForm){
	if(n_A_ActiveSkill == 66 || n_A_ActiveSkill == 326){
		myInnerHtml("AASkillName","Cart Weight:",0);
		myInnerHtml("AASkill",'<input type="text" name="SkillSubNum" value="8000" size=8>',0);
	}
	else if(n_A_ActiveSkill == 131){
		myInnerHtml("AASkillName","Hits: ",0);
		myInnerHtml("AASkill",'<select name="SkillSubNum"onChange="calc()"></select>',0);
		for(i=1;i<=15;i++)
			SkillSubNum.options[i-1] = new Option(i,i);
		SkillSubNum.value=3;
	}
	else if(n_A_ActiveSkill==88){
		myInnerHtml("AASkillName","Poison React Lvl:",0);
		myInnerHtml("AASkill",'<select name="SkillSubNum"onChange="calc()"></select>',0);
		for(i=0;i<=10;i++)
			SkillSubNum.options[i] = new Option(i,i);
		SkillSubNum.value=0;
		if(n_A_JobSearch2() == 14)
			SkillSubNum.value=0;
	}
	else if (73 == n_A_ActiveSkill) // Brandish Spear#73
	{
		myInnerHtml("AASkillName","AoE Position:",0);
		myInnerHtml("AASkill",'<select name="SkillSubNum"onChange="calc()"></select>',0);
		for (i = 0; i <= 2; ++i)
			SkillSubNum.options[i] = new Option(i,i);
		SkillSubNum.value = 0;
	}
	else if(n_A_ActiveSkill==197){
		myInnerHtml("AASkillName","Remaining SP:",0);
		myInnerHtml("AASkill",'<input type="text" name="SkillSubNum" size=6>',0);
		SkillSubNum.value = n_A_MaxSP -1;
	}
	else if(n_A_ActiveSkill==394){
		myInnerHtml("AASkillName","",0);
		myInnerHtml("AASkill",'<select name="SkillSubNum"onChange="calc()"></select>',0);
		for(i=0;i<=4;i++)
			SkillSubNum.options[i] = new Option(SyurikenOBJ[i][2],i);
		SkillSubNum.value = 0;
	}
	else if(n_A_ActiveSkill==395){
		myInnerHtml("AASkillName","",0);
		myInnerHtml("AASkill",'<select name="SkillSubNum"onChange="calc()"></select>',0);
		for(i=0;i<=4;i++)
			SkillSubNum.options[i] = new Option(KunaiOBJ[i][2],i);
		SkillSubNum.value = 0;
	}
	else if(n_A_ActiveSkill==405){
		myInnerHtml("AASkillName","Remaining HP:",0);
		myInnerHtml("AASkill",'<input type="text" name="SkillSubNum" size=6>',0);
		SkillSubNum.value = n_A_MaxHP -1;
	}
	else if(n_A_ActiveSkill==429){
		myInnerHtml("AASkillName","Hits (Considering the Success Chance) :",0);
		var DEATH = ["1","1.2","1.6","2","2.4","3","3.6","4","5","6","7","8","9","10"];
		myInnerHtml("AASkill",'<select name="SkillSubNum"onChange="calc()"></select>',0);
		for(i=0;i<=13;i++)
			SkillSubNum.options[i] = new Option(DEATH[i] + "Hit",i);
		SkillSubNum.value = 6;
	}
	else if(n_A_ActiveSkill == 308){
		myInnerHtml("AASkillName","Enemy Distance: ",0);
		myInnerHtml("AASkill",'<select name="SkillSubNum"onChange="calc()"></select>',0);
		var CHATK_NAME = ["0-3 Cells","4-6 Cells","7-9 Cells","10-12 Cells","13+ Cells"];
		for(i=0;i<=4;i++)
			SkillSubNum.options[i] = new Option(CHATK_NAME[i],i);
		SkillSubNum.value=4;
	}
	else if (n_A_ActiveSkill == 396) // Throw Huuma Shuriken#396
	{
		myInnerHtml("AASkillName","Monster(s):",0);
		myInnerHtml("AASkill",'<select name="SkillSubNum"onChange="calc()"></select>',0);
		for (i = 1; i <= 30; ++i)
			SkillSubNum.options[i - 1] = new Option(i,i);
		SkillSubNum.value = 1;
	}
	else{
		myInnerHtml("AASkillName","",0);
		myInnerHtml("AASkill","",0);
	}
}}

function Click_SkillSW(){
with(document.calcForm){
	n_SkillSW = A2_SKILLSW.checked;

	if(n_SkillSW){
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: collapse;">';
		str += '<TR><TD id="A2TD" ColSpan="4" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">Supportive / Party Skills <span id="A2used"></span></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab4" type="checkbox" name="A2_SKILLSW"onClick="Click_SkillSW()"><label for="lab4">Show</label></div></TD></TR>';
		str += '<div style="clear: both;"></div>';
		str += '</TD></TR>';
		str += '<TR><TD id="AS0_1"></TD><TD id="AS0_2"></TD>';
		str += '<TD id="AS1_1"></TD><TD id="AS1_2"></TD></TR>';
		str += '<TR><TD id="AS2_1"></TD><TD id="AS2_2"></TD>';
		str += '<TD id="AS3_1"></TD><TD id="AS3_2"></TD></TR>';
		str += '<TR><TD id="AS4_1"></TD><TD id="AS4_2"></TD>';
		str += '<TD id="AS5_1"></TD><TD id="AS5_2"></TD></TR>';
		str += '<TR><TD id="AS6_1"></TD><TD id="AS6_2"></TD>';
		str += '<TD id="AS7_1"></TD><TD id="AS7_2"></TD></TR>';
		str += '<TR><TD id="AS8_1"></TD><TD id="AS8_2"></TD>';
		str += '<TD id="AS9_1"></TD><TD id="AS9_2"></TD></TR>';
		str += '<TR><TD id="AS10_1"></TD><TD id="AS10_2"></TD>';
		str += '<TD id="AS11_1"></TD><TD id="AS11_2"></TD></TR>';
		str += '<TR><TD id="AS12_1"></TD><TD id="AS12_2"></TD>';
		str += '<TD id="AS13_1"></TD><TD id="AS13_2"></TD></TR>';
		str += '<TR><TD id="AS14_1"></TD><TD id="AS14_2"></TD>';
		str += '<TD ColSpan="2" id="AS15_1"></TD></TR></TABLE>';
		myInnerHtml("SIENSKILL",str,0);
		A2_SKILLSW.checked = 1;

		name_CSSW_SKILL = ["Blessing","Increase AGI","Impositio Manus","Gloria","Angelus","Assumptio","Adrenaline Rush","Weapon Perfection","Power Thrust","Wind Walker","Spirit Spheres (GG Card)","Magnum Break Bonus","Aloevera","Suffragium","Providence","<Font size=2>Additional Buffs Found Below</Font>"];
		html_CSSW_SKILL = new Array();
		for(i=0;i<=15;i++)
			myInnerHtml("AS"+i+"_1",name_CSSW_SKILL[i],0);

		html_CSSW_SKILL[0] = '<select name="A2_Skill0"onChange="StAllCalc()|Click_A2(1)"></select>';
		html_CSSW_SKILL[1] = '<select name="A2_Skill1"onChange="StAllCalc()|Click_A2(1)"></select>';
		html_CSSW_SKILL[2] = '<select name="A2_Skill2"onChange="StAllCalc()|Click_A2(1)"></select>';
		html_CSSW_SKILL[3] = '<input type="checkbox" name="A2_Skill3"onClick="calc()|Click_A2(1)">';
		html_CSSW_SKILL[4] = '<select name="A2_Skill4"onChange="StAllCalc()|Click_A2(1)"></select>';
		html_CSSW_SKILL[5] = '<input type="checkbox" name="A2_Skill5"onClick="calc()|Click_A2(1)">';
		html_CSSW_SKILL[6] = '<select name="A2_Skill6"onChange="StAllCalc()|Click_A2(1)"></select>';
		html_CSSW_SKILL[7] = '<input type="checkbox" name="A2_Skill7"onClick="calc()|Click_A2(1)">';
		html_CSSW_SKILL[8] = '<select name="A2_Skill8"onChange="StAllCalc()|Click_A2(1)"></select>';
		html_CSSW_SKILL[9] = '<select name="A2_Skill9"onChange="StAllCalc()|Click_A2(1)"></select>';
		html_CSSW_SKILL[10] = '<select name="A2_Skill10"onChange="StAllCalc()|Click_A2(1)"></select>';
		html_CSSW_SKILL[11] = '<input type="checkbox" name="A2_Skill11"onClick="calc()|Click_A2(1)">';
		html_CSSW_SKILL[12] = '<input type="checkbox" name="A2_Skill12"onClick="calc()|Click_A2(1)">';
		html_CSSW_SKILL[13] = '<select name="A2_Skill13"onChange="StAllCalc()|Click_A2(1)"></select>';
		html_CSSW_SKILL[14] = '<select name="A2_Skill14"onChange="StAllCalc()|Click_A2(1)"></select>';
		for(i=0;i<=14;i++)
			myInnerHtml("AS"+i+"_2",html_CSSW_SKILL[i],0);


		for(i=0;i<=10;i++){
			A2_Skill0.options[i] = new Option(i,i);
			A2_Skill1.options[i] = new Option(i,i);
			A2_Skill4.options[i] = new Option(i,i);
			A2_Skill9.options[i] = new Option(i,i);
		}
		for(i=0;i<=5;i++){
			A2_Skill2.options[i] = new Option(i,i);
			A2_Skill8.options[i] = new Option(i,i);
			A2_Skill10.options[i] = new Option(i,i);
			A2_Skill14.options[i] = new Option(i,i);
		}
		if(n_A_JOB==15||n_A_JOB==29)
			myInnerHtml("AS10_1","-",0);
		for(i=0;i<=3;i++)
			A2_Skill13.options[i] = new Option(i,i);
		A2_Skill6.options[0] = new Option("OFF",0);
		A2_Skill6.options[1] = new Option("Regular AR",1);
		A2_Skill6.options[2] = new Option("Full AR",2);
		A2_Skill6.options[3] = new Option("AR Scroll",3);

		A2_Skill0.value = n_A_PassSkill2[0];
		A2_Skill1.value = n_A_PassSkill2[1];
		A2_Skill2.value = n_A_PassSkill2[2];
		A2_Skill3.checked = n_A_PassSkill2[3];
		A2_Skill4.value = n_A_PassSkill2[4];
		A2_Skill5.checked = n_A_PassSkill2[5];
		A2_Skill6.value = n_A_PassSkill2[6];
		A2_Skill7.checked = n_A_PassSkill2[7];
		A2_Skill8.value = n_A_PassSkill2[8];
		A2_Skill9.value = n_A_PassSkill2[9];
		A2_Skill10.value = n_A_PassSkill2[10];
		A2_Skill11.checked = n_A_PassSkill2[11];
		A2_Skill12.checked = n_A_PassSkill2[12];
		A2_Skill13.value = n_A_PassSkill2[13];
		A2_Skill14.value = n_A_PassSkill2[14];
	}
	else{
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: collapse;">';
		str += '<TR><TD id="A2TD" ColSpan="4" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">Supportive / Party Skills <span id="A2used"></span></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab4" type="checkbox" name="A2_SKILLSW"onClick="Click_SkillSW()"><label for="lab4">Show</label></div></TD></TR>';
		str += '</TD></TR></table>';
		myInnerHtml("SIENSKILL",str,0);
		A2_SKILLSW.checked = 0;
	}
	Click_A2(0);
}}

function Click_A2(n){
	if(n==1)
		calc();
	var sw=0;
	for(var i=0;i <= 14;i++)
		if(n_A_PassSkill2[i] != 0){
			sw = 1;
			break;
		}
	if(sw == 0){
		document.getElementById('A2TD').style.backgroundImage = "url(images/th.png)";
		myInnerHtml("A2used","",0);
	}else{
		document.getElementById('A2TD').style.backgroundImage = "url(images/th-do.png)";
		myInnerHtml("A2used"," <B>[Active]</B>",0);
	}
}

SWs3sw = [0,0,0,0,0,0,0,0,0,0,0,0];

function Click_Skill3SW(){
with(document.calcForm){
	n_Skill3SW = A3_SKILLSW.checked;

	if(n_Skill3SW){
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: separate; width: auto;">';
		str += '<TR><TD id="A3TD" ColSpan="8" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">Music and Dance Skills <span id="A3used"></span></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab10" type="checkbox" name="A3_SKILLSW"onClick="Click_Skill3SW()"><label for="lab10">Show</label></div>';
		str += '<div style="clear: both;"></div></TD></TR>';
		str += '<TR><TD RowSpan=2 id="EN0_1"></TD><TD RowSpan=2 id="EN0_2"></TD><TD id="EN0_3"></TD><TD id="EN0_4"></TD><TD id="EN0_7"></TD><TD id="EN0_8"></TD><TD id="EN0_9"></TD><TD id="EN0_10"></TD></TR>';
		str += '<TR><TD id="EN0_5"></TD><TD id="EN0_6"></TD><TD></TD><TD></TD><TD id="EN0_11"></TD><TD id="EN0_12"></TD></TR>';
		str += '<TR><TD id="EN1_1"></TD><TD id="EN1_2"></TD><TD id="EN1_3"></TD><TD id="EN1_4"></TD><TD id="EN1_5"></TD><TD id="EN1_6"></TD><TD id="EN1_7"></TD><TD id="EN1_8"></TD></TR>';
		// custom TalonRO Poem of Bragi after cast delay: after cast delay is reduced for PVM but not for PVP/WOE, thus a checkbox is needed to decide which mode is active
		str += '<TR><TD RowSpan=2 id="EN2_1"></TD><TD RowSpan=2 id="EN2_2"></TD><TD id="EN2_3"></TD><TD id="EN2_4"></TD><TD id="EN2_7"></TD><TD id="EN2_8"></TD><TD id="EN2_11"></TD><TD id="EN2_12"></TD></TR>';
		str += '<TR><TD id="EN2_5"></TD><TD id="EN2_6"></TD><TD><TD><TD id="EN2_9"></TD><TD id="EN2_10"></TD></TR>';
		str += '<TR><TD id="EN3_1"></TD><TD id="EN3_2"></TD><TD id="EN3_3"></TD><TD id="EN3_4"></TD><TD id="EN3_5"></TD><TD id="EN3_6"></TD><TD id="EN3_7"></TD><TD id="EN3_8"></TD></TR>';
		str += '<TR><TD id="EN4_1"></TD><TD id="EN4_2"></TD><TD id="EN4_3"></TD><TD id="EN4_4"></TD><TD id="EN4_5"></TD><TD id="EN4_6"></TD></TR>';
		str += '<TR><TD id="EN5_1"></TD><TD id="EN5_2"></TD><TD id="EN5_3"></TD><TD id="EN5_4"></TD><TD id="EN5_5"></TD><TD id="EN5_6"></TD></TD><TD id="EN5_7"></TD><TD id="EN5_8"></TD></TR>';
		str += '<TR><TD id="EN6_1"></TD><TD id="EN6_2"></TD><TD id="EN6_3"></TD><TD id="EN6_4"></TD><TD id="EN6_5"></TD><TD id="EN6_6"></TD><TD id="EN6_7"></TD><TD id="EN6_8"></TD></TR>';
		str += '<TR><TD id="EN7_1"></TD><TD id="EN7_2"></TD><TD id="EN8_1"></TD><TD id="EN8_2"></TD></TR>';
		str += '<TR><TD id="EN9_1"></TD><TD id="EN9_2"></TD><TD id="EN10_1"></TD><TD id="EN10_2"></TD></TR>';
		str += '<TR><TD colspan=4><span id="EN11_1"></span><span id="EN11_2"></span><span id="EN11_1a"></span></TD></TR></TABLE>';
		myInnerHtml("SP_SIEN01",str,0);
		A3_SKILLSW.checked = 1;


		name_CS3SW_SKILL = ["A Whistle","Assassin Cross of Sunset","Poem of Bragi","The Apple of Idun","Humming","Fortune's Kiss","Service for You","Invulnerable Siegfried","Mr. Kim A Rich Man","A Drum on the Battlefield","The Ring of Nibelungen"];
		html_CS3SW_SKILL = new Array();
		for(i=0;i<=10;i++)
			myInnerHtml("EN"+i+"_1",name_CS3SW_SKILL[i],0);

		html_CS3SW_SKILL[0] = '<select name="A3_Skill0_1"onChange="Skill3SW_2()|Click_A3(1)"></select>';
		html_CS3SW_SKILL[1] = '<select name="A3_Skill1_1"onChange="Skill3SW_2()|Click_A3(1)"></select>';
		html_CS3SW_SKILL[2] = '<select name="A3_Skill2_1"onChange="Skill3SW_2()|Click_A3(1)"></select>';
		html_CS3SW_SKILL[3] = '<select name="A3_Skill3_1"onChange="Skill3SW_2()|Click_A3(1)"></select>';
		html_CS3SW_SKILL[4] = '<select name="A3_Skill4_1"onChange="Skill3SW_2()|Click_A3(1)"></select>';
		html_CS3SW_SKILL[5] = '<select name="A3_Skill5_1"onChange="Skill3SW_2()|Click_A3(1)"></select>';
		html_CS3SW_SKILL[6] = '<select name="A3_Skill6_1"onChange="Skill3SW_2()|Click_A3(1)"></select>';
		html_CS3SW_SKILL[7] = '<select name="A3_Skill7"onChange="Click_A3(1)"></select>';
		html_CS3SW_SKILL[8] = '<select name="A3_Skill8"onChange="Click_A3(1)"></select>';
		html_CS3SW_SKILL[9] = '<select name="A3_Skill9"onChange="Click_A3(1)"></select>';
		html_CS3SW_SKILL[10] = '<select name="A3_Skill10"onChange="Click_A3(1)"></select>';
		for(i=0;i<=10;i++)
			myInnerHtml("EN"+i+"_2",html_CS3SW_SKILL[i],0);

		marionette_tooltip = "Adjust your status points and equipment to obtain the expected bonus from Marionette\n";
		marionette_tooltip += "Check the [Fix Marionette Status Point Compensation] option\n";
		marionette_tooltip += "Re-adjust your equipment";
		
		myInnerHtml("EN11_1",'<input type="checkbox" title="' + marionette_tooltip + '" name="A3_Skill11"onClick="Skill3SW_2()|calc()">'+"Marionette Control",0);

		for(i=0;i<=10;i++){
			A3_Skill0_1.options[i] = new Option(i,i);
			A3_Skill1_1.options[i] = new Option(i,i);
			A3_Skill2_1.options[i] = new Option(i,i);
			A3_Skill3_1.options[i] = new Option(i,i);
			A3_Skill4_1.options[i] = new Option(i,i);
			A3_Skill5_1.options[i] = new Option(i,i);
			A3_Skill6_1.options[i] = new Option(i,i);
		}
		for(i=0;i<=5;i++){
			A3_Skill7.options[i] = new Option(i,i);
			A3_Skill8.options[i] = new Option(i,i);
			A3_Skill9.options[i] = new Option(i,i);
			A3_Skill10.options[i] = new Option(i,i);
		}

		A3_Skill0_1.value = n_A_PassSkill3[0];
		A3_Skill1_1.value = n_A_PassSkill3[1];
		A3_Skill2_1.value = n_A_PassSkill3[2];
		A3_Skill3_1.value = n_A_PassSkill3[3];
		A3_Skill4_1.value = n_A_PassSkill3[4];
		A3_Skill5_1.value = n_A_PassSkill3[5];
		A3_Skill6_1.value = n_A_PassSkill3[6];
		A3_Skill7.value = n_A_PassSkill3[7];
		A3_Skill8.value = n_A_PassSkill3[8];
		A3_Skill9.value = n_A_PassSkill3[9];
		A3_Skill10.value = n_A_PassSkill3[10];
		A3_Skill11.checked = n_A_PassSkill3[11];

		Skill3SW_2();
	}
	else{
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: collapse; width: auto;">';
		str += '<TR><TD id="A3TD" ColSpan="6" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">Music and Dance Skills <span id="A3used"></span></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab10" type="checkbox" name="A3_SKILLSW"onClick="Click_Skill3SW()"><label for="lab10">Show</label></div>';
		str += '<div style="clear: both;"></div></TD></TR></TABLE>';
		myInnerHtml("SP_SIEN01",str,0);
		A3_SKILLSW.checked = 0;

		for(i=0;i<=11;i++)
			SWs3sw[i]=0;
	}
	Click_A3(0);
}}

function Skill3SW_2(){
with(document.calcForm){
	n_A_PassSkill3[0] = eval(A3_Skill0_1.value);
	n_A_PassSkill3[1] = eval(A3_Skill1_1.value);
	n_A_PassSkill3[2] = eval(A3_Skill2_1.value);
	n_A_PassSkill3[3] = eval(A3_Skill3_1.value);
	n_A_PassSkill3[4] = eval(A3_Skill4_1.value);
	n_A_PassSkill3[5] = eval(A3_Skill5_1.value);
	n_A_PassSkill3[6] = eval(A3_Skill6_1.value);
	n_A_PassSkill3[11] = eval(A3_Skill11.checked);

	if(n_A_PassSkill3[0] != 0){
		if(SWs3sw[0] == 0){
			if(n_A_PassSkill3[20] == 0){
				n_A_PassSkill3[20] = 100;	// Bard's AGI
				n_A_PassSkill3[30] = 10;	// Musical Lessons Lv
				n_A_PassSkill3[46] = 100;	// Bard's LUK
				whistle_pd_bonus = 0;
				whistle_flee_bonus = 0;
			}
			myInnerHtml("EN0_3","Bard's AGI",0);
			myInnerHtml("EN0_4",'<select name="A3_Skill0_2"onChange="Click_A3(1)"></select>',0);
			myInnerHtml("EN0_5","Bard's LUK",0);
			myInnerHtml("EN0_6",'<select name="A3_Skill0_4"onChange="Click_A3(1)"></select>',0);
			myInnerHtml("EN0_7","Musical Lessons",0);
			myInnerHtml("EN0_8",'<select name="A3_Skill0_3"onChange="Click_A3(1)"></select>',0);
			myInnerHtml("EN0_9","<label for=\"whistle_pd_bonus_select\">Extra PD Bonus</label>",0);
			myInnerHtml("EN0_10",'<select name="whistle_pd_bonus_select" id="whistle_pd_bonus_select" onChange="Click_A3(1)"></select>',0);
			myInnerHtml("EN0_11","<label for=\"whistle_flee_bonus_select\">Extra Flee Bonus</label>",0);
			myInnerHtml("EN0_12",'<select name="whistle_flee_bonus_select" id="whistle_flee_bonus_select" onChange="Click_A3(1)"></select>',0);
			
			for(i=1;i<=200;i++)
				A3_Skill0_2.options[i-1] = new Option(i,i);
			for(i=0;i<=10;i++)
				A3_Skill0_3.options[i] = new Option(i,i);
			for(i=0;i<=230;i++)
				A3_Skill0_4.options[i-1] = new Option(i,i);
			for(i=0;i<=10;i++)
				whistle_flee_bonus_select.options[i] = new Option(i * 5 + "%",i);
			for(i=0;i<=10;i++)
				whistle_pd_bonus_select.options[i] = new Option(i + "%",i);
			SWs3sw[0] = 1;
			A3_Skill0_2.value = n_A_PassSkill3[20];
			A3_Skill0_3.value = n_A_PassSkill3[30];
			A3_Skill0_4.value = n_A_PassSkill3[46];
			whistle_pd_bonus_select.value = whistle_pd_bonus;
			whistle_flee_bonus_select.value = whistle_flee_bonus;
		}
	}else{
		SWs3sw[0] = 0;
		myInnerHtml("EN0_3","-",0);
		myInnerHtml("EN0_4","-",0);
		myInnerHtml("EN0_5","",0);
		myInnerHtml("EN0_6","",0);
		myInnerHtml("EN0_7","",0);
		myInnerHtml("EN0_8","",0);
		myInnerHtml("EN0_9","",0);
		myInnerHtml("EN0_10","",0);
		myInnerHtml("EN0_11","",0);
		myInnerHtml("EN0_12","",0);
	}

	if(n_A_PassSkill3[1] != 0){
		if(SWs3sw[1] == 0){
			if(n_A_PassSkill3[21]==0){
				n_A_PassSkill3[21] = 100;
				n_A_PassSkill3[31] = 10;
			}
			myInnerHtml("EN1_3","Bard's AGI",0);
			myInnerHtml("EN1_4",'<select name="A3_Skill1_2"onChange="Click_A3(1)"></select>',0);
			myInnerHtml("EN1_5","Musical Lessons",0);
			myInnerHtml("EN1_6",'<select name="A3_Skill1_3"onChange="Click_A3(1)"></select>',0);
			for(i=1;i<=150;i++)
				A3_Skill1_2.options[i-1] = new Option(i,i);
			for(i=0;i<=10;i++)
				A3_Skill1_3.options[i] = new Option(i,i);
			SWs3sw[1] = 1;
			A3_Skill1_2.value = n_A_PassSkill3[21];
			A3_Skill1_3.value = n_A_PassSkill3[31];
		}
	}else{
		SWs3sw[1] = 0;
		myInnerHtml("EN1_3","-",0);
		myInnerHtml("EN1_4","-",0);
		myInnerHtml("EN1_5","",0);
		myInnerHtml("EN1_6","",0);
	}

	if(n_A_PassSkill3[2] != 0){
		if(SWs3sw[2] == 0){
			if(n_A_PassSkill3[22]==0){
				n_A_PassSkill3[22] = 100;
				n_A_PassSkill3[29] = 100;
				n_A_PassSkill3[32] = 10;
				n_A_PassSkill3[45] = 0;
				bragi_bonus = 0;
			}
			myInnerHtml("EN2_3","Bard's DEX",0);
			myInnerHtml("EN2_4",'<select name="A3_Skill2_2"onChange="Click_A3(1)"></select>',0);
			myInnerHtml("EN2_5","Bard's INT",0);
			myInnerHtml("EN2_6",'<select name="A3_Skill2_3"onChange="Click_A3(1)"></select>',0);
			myInnerHtml("EN2_7","Musical Lessons",0);
			myInnerHtml("EN2_8",'<select name="A3_Skill2_4"onChange="Click_A3(1)"></select>',0);
			// custom TalonRO Poem of Bragi after cast delay
			myInnerHtml("EN2_9","<label for=\"lab16\">PVP/WOE mode</label>",0);
			myInnerHtml("EN2_10",'<input type="checkbox" name="A3_Skill2_5" id="lab16" onChange="Click_A3(1)"></input>',0);
			myInnerHtml("EN2_11","<label for=\"bragi_bonus_select\">Extra Bonus</label>",0);
			myInnerHtml("EN2_12",'<select name="bragi_bonus_select" id="bragi_bonus_select" onChange="Click_A3(1)"></select>',0);
			for(i=1;i<=200;i++)
				A3_Skill2_2.options[i-1] = new Option(i,i);
			for(i=1;i<=250;i++)
				A3_Skill2_3.options[i-1] = new Option(i,i);
			for(i=0;i<=10;i++)
				A3_Skill2_4.options[i] = new Option(i,i);
			for(i=0;i<=10;i++)
				bragi_bonus_select.options[i] = new Option(i + "%",i);
			SWs3sw[2] = 1;
			A3_Skill2_2.value = n_A_PassSkill3[22];
			A3_Skill2_3.value = n_A_PassSkill3[29];
			A3_Skill2_4.value = n_A_PassSkill3[32];
			// custom TalonRO Poem of Bragi after cast delay
			A3_Skill2_5.checked = n_A_PassSkill3[45];
			bragi_bonus_select.value = bragi_bonus;
		}
	}else{
		SWs3sw[2] = 0;
		myInnerHtml("EN2_3","-",0);
		myInnerHtml("EN2_4","-",0);
		myInnerHtml("EN2_5","",0);
		myInnerHtml("EN2_6","",0);
		myInnerHtml("EN2_7","",0);
		myInnerHtml("EN2_8","",0);
		// custom TalonRO Poem of Bragi after cast delay
		myInnerHtml("EN2_9","",0);
		myInnerHtml("EN2_10","",0);
		myInnerHtml("EN2_11","",0);
		myInnerHtml("EN2_12","",0);
	}

	if(n_A_PassSkill3[3] != 0){
		if(SWs3sw[3] == 0){
			if(n_A_PassSkill3[23]==0){
				n_A_PassSkill3[23] = 100;
				n_A_PassSkill3[33] = 10;
				apple_bonus = 0;
			}
			myInnerHtml("EN3_3","Bard's VIT",0);
			myInnerHtml("EN3_4",'<select name="A3_Skill3_2"onChange="Click_A3(1)"></select>',0);
			myInnerHtml("EN3_5","Musical Lessons",0);
			myInnerHtml("EN3_6",'<select name="A3_Skill3_3"onChange="Click_A3(1)"></select>',0);
			myInnerHtml("EN3_7","<label for=\"apple_bonus_check\">SQI Bonus</label>",0);
			myInnerHtml("EN3_8",'<input type="checkbox" name="apple_bonus_check" id="apple_bonus_check" onChange="Click_A3(1)"></input>',0);
			for(i=1;i<=150;i++)
				A3_Skill3_2.options[i-1] = new Option(i,i);
			for(i=0;i<=10;i++)
				A3_Skill3_3.options[i] = new Option(i,i);
			SWs3sw[3] = 1;
			A3_Skill3_2.value = n_A_PassSkill3[23];
			A3_Skill3_3.value = n_A_PassSkill3[33];
			apple_bonus_check.checked = apple_bonus;
		}
	}else{
		SWs3sw[3] = 0;
		myInnerHtml("EN3_3","-",0);
		myInnerHtml("EN3_4","-",0);
		myInnerHtml("EN3_5","",0);
		myInnerHtml("EN3_6","",0);
		myInnerHtml("EN3_7","",0);
		myInnerHtml("EN3_8","",0);
	}

	if(n_A_PassSkill3[4] != 0){
		if(SWs3sw[4] == 0){
			if(n_A_PassSkill3[24]==0){
				n_A_PassSkill3[24] = 130;
				n_A_PassSkill3[34] = 10;
			}
			myInnerHtml("EN4_3","Dancer's DEX",0);
			myInnerHtml("EN4_4",'<select name="A3_Skill4_2"onChange="Click_A3(1)"></select>',0);
			myInnerHtml("EN4_5","Dancing Lessons",0);
			myInnerHtml("EN4_6",'<select name="A3_Skill4_3"onChange="Click_A3(1)"></select>',0);
			for(i=1;i<=200;i++)
				A3_Skill4_2.options[i-1] = new Option(i,i);
			for(i=0;i<=10;i++)
				A3_Skill4_3.options[i] = new Option(i,i);
			SWs3sw[4] = 1;
			A3_Skill4_2.value = n_A_PassSkill3[24];
			A3_Skill4_3.value = n_A_PassSkill3[34];
		}
	}else{
		SWs3sw[4] = 0;
		myInnerHtml("EN4_3","-",0);
		myInnerHtml("EN4_4","-",0);
		myInnerHtml("EN4_5","",0);
		myInnerHtml("EN4_6","",0);
	}

	if(n_A_PassSkill3[5] != 0){
		if(SWs3sw[5] == 0){
			if(n_A_PassSkill3[25]==0){
				n_A_PassSkill3[25] = 50;
				n_A_PassSkill3[35] = 10;
				fortune_bonus = 0;
			}
			myInnerHtml("EN5_3","Dancer's LUK",0);
			myInnerHtml("EN5_4",'<select name="A3_Skill5_2"onChange="Click_A3(1)"></select>',0);
			myInnerHtml("EN5_5","Dancing Lessons",0);
			myInnerHtml("EN5_6",'<select name="A3_Skill5_3"onChange="Click_A3(1)"></select>',0);
			myInnerHtml("EN5_7","<label for=\"fortune_bonus_select\">Extra Bonus</label>",0);
			myInnerHtml("EN5_8",'<select name="fortune_bonus_select" id="fortune_bonus_select" onChange="Click_A3(1)"></select>',0);
			for(i=1;i<=180;i++)
				A3_Skill5_2.options[i-1] = new Option(i,i);
			for(i=0;i<=10;i++)
				A3_Skill5_3.options[i] = new Option(i,i);
			for(i=0;i<=10;i++)
				fortune_bonus_select.options[i] = new Option(i * 5 + "%",i);
			SWs3sw[5] = 1;
			A3_Skill5_2.value = n_A_PassSkill3[25];
			A3_Skill5_3.value = n_A_PassSkill3[35];
			fortune_bonus_select.value = fortune_bonus;
		}
	}else{
		SWs3sw[5] = 0;
		myInnerHtml("EN5_3","-",0);
		myInnerHtml("EN5_4","-",0);
		myInnerHtml("EN5_5","",0);
		myInnerHtml("EN5_6","",0);
		myInnerHtml("EN5_7","",0);
		myInnerHtml("EN5_8","",0);
	}

	if(n_A_PassSkill3[6] != 0){
		if(SWs3sw[6] == 0){
			if(n_A_PassSkill3[26]==0){
				n_A_PassSkill3[26] = 50;
				n_A_PassSkill3[36] = 10;
				service_bonus = 0;
			}
			myInnerHtml("EN6_3","Dancer's INT",0);
			myInnerHtml("EN6_4",'<select name="A3_Skill6_2"onChange="Click_A3(1)"></select>',0);
			myInnerHtml("EN6_5","Dancing Lessons",0);
			myInnerHtml("EN6_6",'<select name="A3_Skill6_3"onChange="Click_A3(1)"></select>',0);
			myInnerHtml("EN6_7","<label for=\"service_bonus_select\">Extra Bonus</label>",0);
			myInnerHtml("EN6_8",'<select name="service_bonus_select" id="service_bonus_select" onChange="Click_A3(1)"></select>',0);
			for(i=1;i<=200;i++)
				A3_Skill6_2.options[i-1] = new Option(i,i);
			for(i=0;i<=10;i++)
				A3_Skill6_3.options[i] = new Option(i,i);
			for(i=0;i<=10;i++)
				service_bonus_select.options[i] = new Option(i * 5 + "%",i);
			SWs3sw[6] = 1;
			A3_Skill6_2.value = n_A_PassSkill3[26];
			A3_Skill6_3.value = n_A_PassSkill3[36];
			service_bonus_select.value = service_bonus;
		}
	}else{
		SWs3sw[6] = 0;
		myInnerHtml("EN6_3","-",0);
		myInnerHtml("EN6_4","-",0);
		myInnerHtml("EN6_5","",0);
		myInnerHtml("EN6_6","",0);
		myInnerHtml("EN6_7","",0);
		myInnerHtml("EN6_8","",0);
	}

	if(n_A_PassSkill3[11] != 0){
		if(SWs3sw[11] == 0){
			myInnerHtml("EN11_2",
			"<br>Controller's Stats: "+
			'<select name="A3_Skill11_STR"onChange="Click_A3(1)"></select>'+
			'<select name="A3_Skill11_AGI"onChange="Click_A3(1)"></select>'+
			'<select name="A3_Skill11_VIT"onChange="Click_A3(1)"></select>'+
			'<select name="A3_Skill11_INT"onChange="Click_A3(1)"></select>'+
			'<select name="A3_Skill11_DEX"onChange="Click_A3(1)"></select>'+
			'<select name="A3_Skill11_LUK"onChange="Click_A3(1)"></select>'+
			"<BR>"+'<input type="checkbox" name="A3_Skill11a"onClick="Click_A3(1)">'+"<Font size=2>Fix Marionette Status Compensation</Font>",0);
			A3_Skill11_STR.options[0] = new Option("STR",0);
			A3_Skill11_AGI.options[0] = new Option("AGI",0);
			A3_Skill11_VIT.options[0] = new Option("VIT",0);
			A3_Skill11_INT.options[0] = new Option("INT",0);
			A3_Skill11_DEX.options[0] = new Option("DEX",0);
			A3_Skill11_LUK.options[0] = new Option("LUK",0);
			for(i=1;i<=99;i++){
				A3_Skill11_STR.options[i] = new Option(i,i);
				A3_Skill11_AGI.options[i] = new Option(i,i);
				A3_Skill11_VIT.options[i] = new Option(i,i);
				A3_Skill11_INT.options[i] = new Option(i,i);
				A3_Skill11_DEX.options[i] = new Option(i,i);
				A3_Skill11_LUK.options[i] = new Option(i,i);
			}
			SWs3sw[11] = 1;
			A3_Skill11_STR.value = n_A_PassSkill3[12];
			A3_Skill11_AGI.value = n_A_PassSkill3[13];
			A3_Skill11_VIT.value = n_A_PassSkill3[14];
			A3_Skill11_INT.value = n_A_PassSkill3[15];
			A3_Skill11_DEX.value = n_A_PassSkill3[16];
			A3_Skill11_LUK.value = n_A_PassSkill3[17];
			A3_Skill11a.checked = n_A_PassSkill3[18];
		}
	}else{
		SWs3sw[11] = 0;
		myInnerHtml("EN11_2","",0);
	}
}}

function Click_A3(n){
	if(n==1)
		calc();
	var sw=0;
	for(var i=0;i <= 17;i++)
		if(i != 11 && n_A_PassSkill3[i] != 0){
			sw = 1;
			break;
		}
	if(sw == 0){
		document.getElementById('A3TD').style.backgroundImage = "url(images/th.png)"
		myInnerHtml("A3used","",0);
	}else{
		document.getElementById('A3TD').style.backgroundImage = "url(images/th-do.png)"
		myInnerHtml("A3used"," <B>[Active]</B>",0);
	}
}

function Click_Skill4SW(){
with(document.calcForm){
	n_Skill4SW = A4_SKILLSW.checked;

	if(n_Skill4SW){
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: collapse; width: auto;">'
		str += '<TR><TD id="A4TD" ColSpan="4" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">Guild Skills <span id="A4used"></span></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab8" type="checkbox" name="A4_SKILLSW"onClick="Click_Skill4SW()"><label for="lab8">Show</label></div><div style="clear: both;"></div></TD></TR>';
		str += '<TR><TD id="EN40_1"></TD><TD id="EN40_2"></TD><TD ColSpan="2"></TD></TR>';
		str += '<TR><TD id="EN41_1"></TD><TD id="EN41_2"></TD><TD id="EN42_1"></TD><TD id="EN42_2"></TD>';
		str += '<TR><TD id="EN43_1"></TD><TD id="EN43_2"></TD><TD id="EN44_1"></TD><TD id="EN44_2"></TD></TR></TABLE>';
		myInnerHtml("SP_SIEN02",str,0);
		A4_SKILLSW.checked = 1;


		name_CS4SW_SKILL = ["Battle Orders","Great Leadership","Wounds of Glory","Soul of Cold","Sharp Hawk Eyes"];
		html_CS4SW_SKILL = new Array();
		for(i=0;i<=4;i++)
			myInnerHtml("EN4"+i+"_1",name_CS4SW_SKILL[i],0);
		html_CS4SW_SKILL[0] = '<input type="checkbox" name="A3_Skill40"onClick="Click_A4(1)">';
		html_CS4SW_SKILL[1] = '<select name="A3_Skill41"onChange="Click_A4(1)"></select>';
		html_CS4SW_SKILL[2] = '<select name="A3_Skill42"onChange="Click_A4(1)"></select>';
		html_CS4SW_SKILL[3] = '<select name="A3_Skill43"onChange="Click_A4(1)"></select>';
		html_CS4SW_SKILL[4] = '<select name="A3_Skill44"onChange="Click_A4(1)"></select>';
		for(i=0;i<=4;i++)
			myInnerHtml("EN4"+i+"_2",html_CS4SW_SKILL[i],0);

		for(i=0;i<=5;i++){
			A3_Skill41.options[i] = new Option(i,i);
			A3_Skill42.options[i] = new Option(i,i);
			A3_Skill43.options[i] = new Option(i,i);
			A3_Skill44.options[i] = new Option(i,i);
		}
		A3_Skill40.checked = n_A_PassSkill3[40];
		A3_Skill41.value = n_A_PassSkill3[41];
		A3_Skill42.value = n_A_PassSkill3[42];
		A3_Skill43.value = n_A_PassSkill3[43];
		A3_Skill44.value = n_A_PassSkill3[44];
	}
	else{
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: collapse; width: auto;">'
		str += '<TR><TD id="A4TD" ColSpan="4" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">Guild Skills <span id="A4used"></span></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab8" type="checkbox" name="A4_SKILLSW"onClick="Click_Skill4SW()"><label for="lab8">Show</label></div><div style="clear: both;"></div></TD></TR></TABLE>';
		myInnerHtml("SP_SIEN02",str,0);
		A4_SKILLSW.checked = 0;
	}
	Click_A4(0);
}}

function Click_A4(n){
	if(n==1)
		calc();
	var sw=0;
	for(var i=40;i <= 44;i++)
		if(n_A_PassSkill3[i] != 0){
			sw = 1;
			break;
		}
	if(sw == 0){
		document.getElementById('A4TD').style.backgroundImage = "url(images/th.png)"
		myInnerHtml("A4used","",0);
	}else{
		document.getElementById('A4TD').style.backgroundImage = "url(images/th-do.png)"
		myInnerHtml("A4used"," <B>[Active]</B>",0);
	}
}

function Click_Skill5SW(){
with(document.calcForm){
	n_Skill5SW = A5_SKILLSW.checked;

	if(n_Skill5SW){
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: collapse; width: auto;">';
		str += '<TR><TD id="A5TD" ColSpan="4" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">Gospel Effects <span id="A5used"></span></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab9" type="checkbox" name="A5_SKILLSW"onClick="Click_Skill5SW()"><label for="lab9">Show</label></div><div style="clear: both;"></div></TD></TR>';
		str += '<TR><TD id="EN50_1"></TD><TD id="EN50_2"></TD><TD id="EN51_1"></TD><TD id="EN51_2"></TD></TR>';
		str += '<TR><TD id="EN52_1"></TD><TD id="EN52_2"></TD><TD id="EN53_1"></TD><TD id="EN53_2"></TD></TR>';
		str += '<TR><TD id="EN54_1"></TD><TD id="EN54_2"></TD><TD id="EN55_1"></TD><TD id="EN55_2"></TD></TR></TABLE>';
		myInnerHtml("SP_SIEN03",str,0);
		A5_SKILLSW.checked = 1;

		name_CS5SW_SKILL = ["All Stats+20","HP+100%","SP+100%","ATK+100%","HIT+50 &amp; FLEE+50","DEF+25%"];
		html_CS5SW_SKILL = new Array();
		for(i=0;i<=5;i++)
			myInnerHtml("EN5"+i+"_1",name_CS5SW_SKILL[i],0);
		html_CS5SW_SKILL[0] = '<input type="checkbox" name="A5_Skill0"onClick="Click_A5(1)">';
		html_CS5SW_SKILL[1] = '<input type="checkbox" name="A5_Skill1"onClick="Click_A5(1)">';
		html_CS5SW_SKILL[2] = '<input type="checkbox" name="A5_Skill2"onClick="Click_A5(1)">';
		html_CS5SW_SKILL[3] = '<input type="checkbox" name="A5_Skill3"onClick="Click_A5(1)">';
		html_CS5SW_SKILL[4] = '<input type="checkbox" name="A5_Skill4"onClick="Click_A5(1)">';
		html_CS5SW_SKILL[5] = '<input type="checkbox" name="A5_Skill5"onClick="Click_A5(1)">';
		for(i=0;i<=5;i++)
			myInnerHtml("EN5"+i+"_2",html_CS5SW_SKILL[i],0);

		A5_Skill0.checked = n_A_PassSkill5[0];
		A5_Skill1.checked = n_A_PassSkill5[1];
		A5_Skill2.checked = n_A_PassSkill5[2];
		A5_Skill3.checked = n_A_PassSkill5[3];
		A5_Skill4.checked = n_A_PassSkill5[4];
		A5_Skill5.checked = n_A_PassSkill5[5];
	}
	else{
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: collapse; width: auto;">';
		str += '<TR><TD id="A5TD" ColSpan="4" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">Gospel Effects <span id="A5used"></span></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab9" type="checkbox" name="A5_SKILLSW"onClick="Click_Skill5SW()"><label for="lab9">Show</label></div><div style="clear: both;"></div></TD></TR></TABLE>';
		myInnerHtml("SP_SIEN03",str,0);
		A5_SKILLSW.checked = 0;
	}
	Click_A5(0);
}}

function Click_A5(n){
	if(n==1)
		calc();
	var sw=0;
	for(var i=0;i < n_A_PassSkill5.length;i++)
		if(n_A_PassSkill5[i] != 0){
			sw = 1;
			break;
		}
	if(sw == 0){
		document.getElementById('A5TD').style.backgroundImage = "url(images/th.png)"
		myInnerHtml("A5used","",0);
	}else{
		document.getElementById('A5TD').style.backgroundImage = "url(images/th-do.png)"
		myInnerHtml("A5used"," <B>[Active]</B>",0);
	}
}

function Click_Skill6SW(){
with(document.calcForm){
	n_Skill6SW = A6_SKILLSW.checked;

	if(n_Skill6SW){
		var str
		str = '<table style="border: 1px solid #999; border-collapse: collapse; width: auto;">';
		str += '<TR><TD id="A6TD" ColSpan="6" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">Miscellaneous Effects <span id="A6used"></span></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab13" type="checkbox" name="A6_SKILLSW"onClick="Click_Skill6SW()"><label for="lab13">Show</label></div></TD></TR>';
		str += '<TR><TD id="EN60_1"></TD><TD id="EN60_2"></TD>';
		str += '<TD id="EN62_1"></TD>';
		str += '<TD id="EN62_2"></TD>';
		str += '<TD id="EN61_1"></TD><TD id="EN61_2"></TD></TR>';
		str += '<TR><TD id="EN63_1"></TD><TD id="EN63_2"></TD>';
		str += '<TD id="EN64_1"></TD><TD id="EN64_2"></TD>';
		str += '<TD id="EN65_1"></TD><TD id="EN65_2"></TD></TR></TABLE>';
		myInnerHtml("SP_SIEN04",str,0);
		A6_SKILLSW.checked = 1;


		myInnerHtml("EN60_1",'<select name="A6_Skill0"onChange="StAllCalc()"></select>',0);
		myInnerHtml("EN60_2",'<select name="A6_Skill1"onChange="Click_A6(1)"></select>',0);

		A6_Skill0.options[0] = new Option("Volcano",0);
		A6_Skill0.options[1] = new Option("Deluge",1);
		A6_Skill0.options[2] = new Option("Violent Gale",2);
		for(i=0;i<=5;i++)
			A6_Skill1.options[i] = new Option(i,i);

		//myInnerHtml("EN61_1","Murderer Bonus",0);
		myInnerHtml("EN61_1","",0);
		myInnerHtml("EN61_2",'<select style="visibility:hidden" name="A6_Skill2"onChange="Click_A6(1)"></select>',0);
		A6_Skill2.options[0] = new Option("None",0);
		A6_Skill2.options[1] = new Option("ALL+3",1);
		A6_Skill2.options[2] = new Option("ALL+5",2);

		myInnerHtml("EN62_1","Anolian Card/Box of Gloom[AC Lvl 1]",0);
		myInnerHtml("EN62_2",'<select name="A6_Skill3"onChange="Click_A6(1)"></select>',0);
		for(i=0;i<=1;i++)
			A6_Skill3.options[i] = new Option(i,i);

		myInnerHtml("EN63_1","Mindbreaker [self]",0);
		myInnerHtml("EN63_2",'<select name="A6_Skill4"onChange="Click_A6(1)"></select>',0);
		for(i=0;i<=5;i++)
			A6_Skill4.options[i] = new Option(i,i);

		myInnerHtml("EN64_1","Provoke [self]",0);
		myInnerHtml("EN64_2",'<select name="A6_Skill5"onChange="Click_A6(1)"></select>',0);
		for(i=0;i<=10;i++)
			A6_Skill5.options[i] = new Option(i,i);

		myInnerHtml("EN65_1","Holy Armor [B.S.S.]",0);
		myInnerHtml("EN65_2",'<input type="checkbox" name="A6_Skill6"onClick="Click_A6(1)">',0);;

		A6_Skill0.value = n_A_PassSkill6[0];
		A6_Skill1.value = n_A_PassSkill6[1];
		A6_Skill2.value = n_A_PassSkill6[2];
		A6_Skill3.value = n_A_PassSkill6[3];
		A6_Skill4.value = n_A_PassSkill6[4];
		A6_Skill5.value = n_A_PassSkill6[5];
		A6_Skill6.checked = n_A_PassSkill6[6];
	}
	else{
		var str
		str = '<table style="border: 1px solid #999; border-collapse: collapse; width: auto;">';
		str += '<TR><TD id="A6TD" ColSpan="6" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">Miscellaneous Effects <span id="A6used"></span></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab13" type="checkbox" name="A6_SKILLSW"onClick="Click_Skill6SW()"><label for="lab13">Show</label></div></TD></TR></TABLE>';
		myInnerHtml("SP_SIEN04",str,0);
		A6_SKILLSW.checked = 0;
	}
	Click_A6(0);
}}

function Click_A6(n){
	if(n==1)
		calc();
	var sw=0;
	for(var i=0;i < n_A_PassSkill6.length;i++)
		if(i != 0 && n_A_PassSkill6[i] != 0){
			sw = 1;
			break;
		}
	if(sw == 0){
		document.getElementById('A6TD').style.backgroundImage = "url(images/th.png)"
		myInnerHtml("A6used","",0);
	}else{
		document.getElementById('A6TD').style.backgroundImage = "url(images/th-do.png)"
		myInnerHtml("A6used"," <B>[Active]</B>",0);
	}
}

function Click_Skill7SW(){
with(document.calcForm){
	n_Skill7SW = A7_SKILLSW.checked;

	if(n_Skill7SW){
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: collapse; width: auto;">';
		str += '<TR><TD id="A7TD" ColSpan="6" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">Items (Food / Etc.) <span id="A7used"></span></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab11" type="checkbox" name="A7_SKILLSW"onClick="Click_Skill7SW()"><label for="lab11">Show</label></div><div style="clear: both;"></div></TD></TR>';
		str += '<TR><TD  ColSpan="6"><span id="EN73"></span><span id="EN74"></span><span id="EN75"></span><span id="EN76"></span><span id="EN77"></span><span id="EN78"></span></TD></TR>';
		str += '<TR><TD id="EN79_1"></TD><TD id="EN79_2"></TD><TD id="EN710_1"></TD><TD id="EN710_2"></TD><TD id="EN70_1"></TD><TD id="EN70_2"></TD></TR>';
		str += '<TR><TD id="EN711_1"></TD><TD id="EN711_2"></TD><TD id="EN712_1"></TD><TD id="EN712_2"></TD><TD id="EN71_1"></TD><TD id="EN71_2"></TD></TR>';
		str += '<TR><TD id="EN713_1"></TD><TD id="EN713_2"></TD><TD id="EN714_1"></TD><TD id="EN714_2"></TD><TD id="EN72_1"></TD><TD id="EN72_2"></TD></TR>';
		str += '<TR><TD colspan="6" id="EN715"></TD></TR></TABLE>';
		myInnerHtml("SP_SIEN05",str,0);
		A7_SKILLSW.checked = 1;


		myInnerHtml("EN70_1","Sesame Pastry [HIT+30]",0);
		myInnerHtml("EN70_2",'<input type="checkbox" name="A7_Skill0"onClick="Click_A7(1)">',0);

		myInnerHtml("EN71_1","Honey Pastry [FLEE+30]",0);
		myInnerHtml("EN71_2",'<input type="checkbox" name="A7_Skill1"onClick="Click_A7(1)">',0);

		myInnerHtml("EN72_1","Rainbow Cake [ATK/MATK+10]",0);
		myInnerHtml("EN72_2",'<input type="checkbox" name="A7_Skill2"onClick="Click_A7(1)">',0);

		myInnerHtml("EN79_1","Box of Resentment [ATK+20]",0);
		myInnerHtml("EN79_2",'<input type="checkbox" name="A7_Skill9"onClick="Click_A7(1)">',0);

		myInnerHtml("EN710_1","Box of Drowsiness [MATK+20]",0);
		myInnerHtml("EN710_2",'<input type="checkbox" name="A7_Skill10"onClick="Click_A7(1)">',0);

		myInnerHtml("EN711_1","Coldproof Potion",0);
		myInnerHtml("EN711_2",'<input type="checkbox" name="A7_Skill11"onClick="Click_A7(1)">',0);
		myInnerHtml("EN712_1","Earthproof Potion",0);
		myInnerHtml("EN712_2",'<input type="checkbox" name="A7_Skill12"onClick="Click_A7(1)">',0);
		myInnerHtml("EN713_1","Fireproof Potion",0);
		myInnerHtml("EN713_2",'<input type="checkbox" name="A7_Skill13"onClick="Click_A7(1)">',0);
		myInnerHtml("EN714_1","Thunderproof Potion",0);
		myInnerHtml("EN714_2",'<input type="checkbox" name="A7_Skill14"onClick="Click_A7(1)">',0);
		myInnerHtml("EN715","Add Castscrolls etc. to Skill List<input type='checkbox' name='A7_Skill15'onClick='Click_A7(1)|ActiveSkillSetPlus()'>",0);

		myInnerHtml("EN73",'<select name="A7_Skill3"onChange="Click_A7(1)"></select> ',0);
		myInnerHtml("EN74",'<select name="A7_Skill4"onChange="Click_A7(1)"></select> ',0);
		myInnerHtml("EN75",'<select name="A7_Skill5"onChange="Click_A7(1)"></select> ',0);
		myInnerHtml("EN76",'<select name="A7_Skill6"onChange="Click_A7(1)"></select> ',0);
		myInnerHtml("EN77",'<select name="A7_Skill7"onChange="Click_A7(1)"></select> ',0);
		myInnerHtml("EN78",'<select name="A7_Skill8"onChange="Click_A7(1)"></select> ',0);

		A7_Skill3.options[0] = new Option("STR+Food",0);
		A7_Skill4.options[0] = new Option("AGI+Food",0);
		A7_Skill5.options[0] = new Option("VIT+Food",0);
		A7_Skill6.options[0] = new Option("INT+Food",0);
		A7_Skill7.options[0] = new Option("DEX+Food",0);
		A7_Skill8.options[0] = new Option("LUK+Food",0);

		for(i=1;i<=10;i++){
			A7_Skill3.options[i] = new Option("+"+i,i);
			A7_Skill4.options[i] = new Option("+"+i,i);
			A7_Skill5.options[i] = new Option("+"+i,i);
			A7_Skill6.options[i] = new Option("+"+i,i);
			A7_Skill7.options[i] = new Option("+"+i,i);
			A7_Skill8.options[i] = new Option("+"+i,i);
		}

		A7_Skill0.checked = n_A_PassSkill7[0];
		A7_Skill1.checked = n_A_PassSkill7[1];
		A7_Skill2.checked = n_A_PassSkill7[2];
		A7_Skill3.value = n_A_PassSkill7[3];
		A7_Skill4.value = n_A_PassSkill7[4];
		A7_Skill5.value = n_A_PassSkill7[5];
		A7_Skill6.value = n_A_PassSkill7[6];
		A7_Skill7.value = n_A_PassSkill7[7];
		A7_Skill8.value = n_A_PassSkill7[8];
		A7_Skill9.checked = n_A_PassSkill7[9];
		A7_Skill10.checked = n_A_PassSkill7[10];
		A7_Skill11.checked = n_A_PassSkill7[11];
		A7_Skill12.checked = n_A_PassSkill7[12];
		A7_Skill13.checked = n_A_PassSkill7[13];
		A7_Skill14.checked = n_A_PassSkill7[14];
		A7_Skill15.checked = n_A_PassSkill7[15];
	}
	else{
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: collapse; width: auto;">';
		str += '<TR><TD id="A7TD" ColSpan="6" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">Items (Food / Etc.) <span id="A7used"></span></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab11" type="checkbox" name="A7_SKILLSW"onClick="Click_Skill7SW()"><label for="lab11">Show</label></div><div style="clear: both;"></div></TD></TR></TABLE>';
		myInnerHtml("SP_SIEN05",str,0);
		A7_SKILLSW.checked = 0;
	}
	Click_A7(0);
}}

/*function Click_NetCafe3(){
with(document.calcForm){
	if(n_A_PassSkill7[3] < 3)
		A7_Skill3.value = 3;
	if(n_A_PassSkill7[4] < 3)
		A7_Skill4.value = 3;
	if(n_A_PassSkill7[5] < 3)
		A7_Skill5.value = 3;
	if(n_A_PassSkill7[6] < 3)
		A7_Skill6.value = 3;
	if(n_A_PassSkill7[7] < 3)
		A7_Skill7.value = 3;
	if(n_A_PassSkill7[8] < 3)
		A7_Skill8.value = 3;
	Click_A7(1);
}}*/

function Click_A7(n){
	if(n==1)
		calc();
	var sw=0;
	for(var i=0;i < n_A_PassSkill7.length;i++)
		if(n_A_PassSkill7[i] != 0){
			sw = 1;
			break;
		}
	if(sw == 0){
		document.getElementById('A7TD').style.backgroundImage = "url(images/th.png)";
		myInnerHtml("A7used","",0);
	}else{
		document.getElementById('A7TD').style.backgroundImage = "url(images/th-do.png)";
		myInnerHtml("A7used"," <B>[Active]</B>",0);
	}
}

function Click_Skill8SW(){
with(document.calcForm){
	n_Skill8SW = A8_SKILLSW.checked;
	if(n_Skill8SW){
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: collapse; width: auto;">';
		str += '<TR><TD id="A8TD" Colspan="6" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">Additional Effects <SPAN id="A8used"></SPAN></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab14" type="checkbox" name="A8_SKILLSW"onClick="Click_Skill8SW()"><label for="lab14">Show</label></div><div style="clear: both;"></div></TD></TR>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>Pets</B></Font></TD></TR>';
		str += '<TR><TD Colspan="2" id="EN800"></TD></TR>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>EXP Items</B></Font></TD></TR>';
		str += '<TR><TD id="EN801"></TD><TD id="EN802"></TD></TR>';
		str += '<TR><TD id="EN803"></TD><TD id="EN804"></TD></TR>';
		str += '<TR><TD id="EN805"></TD><TD id="EN806"></TD></TR>';
		str += '<TR><TD id="EN808"></TD></TR>';
		str += '<TR><TD colspan="2" id="EN809"></TD></TR>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>Other Stuff</B></Font></TD></TR>';
		str += '<TR><TD id="EN810"></TD><TD id="EN811"></TD></TR>';
		str += '<TR><TD id="EN838"></TD><TD id="EN839"></TD></TR>';
		str += '<TR><TD id="EN840"></TD><TD id="EN841"></TD></TR>';
		str += '<TR><TD id="EN812"></TD><TD id="EN813"></TD></TR>';
		str += '<TR><TD id="EN814"></TD><TD id="EN815"></TD></TR>';
		str += '<TR><TD id="EN807"></TD></TR>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>New World Food</B></Font></TD></TR>';
		str += '<TR><TD id="EN817"></TD></TR>';
		str += '<TR><TD id="EN818"></TD></TR><TR><TD id="EN819"></TD></TR>';
		str += '<TR><TD id="EN820"></TD></TR><TR><TD id="EN821"></TD></TR>';
		str += '<TR><TD id="EN822"></TD></TR><TR><TD id="EN823"></TD></TR>';
		str += '<TR><TD id="EN824"></TD></TR><TR><TD id="EN825"></TD></TR>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>BG Food</B></Font></TD></TR>';
		str += '<TR><TD id="EN834"></TD><TD id="EN835"></TD></TR>';
		str += '<TR><TD id="EN836"></TD><TD id="EN837"></TD></TR>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>Eclage Food</B></Font></TD></TR>';
		str += '<TR><TD colspan="2" id="EN842"></TD></TR>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>Eden Energy Crystal Buff</B></Font></TD></TR>';
		str += '<TR><TD colspan="2" id="EN853"></TD></TR>';
		str += '<TR><TD colspan="2" id="EN854"></TD></TR>';
		str += '<TR><TD colspan="2" id="EN855"></TD></TR>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>Summer Cocktails</B></Font></TD></TR>';
		str += '<TR><TD id="EN843"></TD></TR>';
		str += '<TR><TD id="EN844"></TD></TR><TR><TD id="EN845"></TD></TR>';
		str += '<TR><TD id="EN846"></TD></TR><TR><TD id="EN847"></TD></TR>';
		str += '<TR><TD id="EN848"></TD></TR><TR><TD id="EN849"></TD></TR>';
		str += '<TR><TD id="EN850"></TD></TR><TR><TD id="EN851"></TD></TR>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>Other Food</B></Font></TD></TR>';
		str += '<TR><TD id="EN852"></TD></TR>';
		str += '<TR><TD id="EN816"></TD></TR>';
		str += '<TR><TD id="EN826"></TD></TR>';
		str += '<TR><TD id="EN827"></TD></TR>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>Debuffs</B></Font></TD></TR>';
		str += '<TR><TD id="EN830"></TD><TD id="EN831"></TD></TR>';
		str += '<TR><TD id="EN832"></TD><TD id="EN833"></TD></TR></table>';
		myInnerHtml("ID_ETC",str,0);
		A8_SKILLSW.checked = 1;
		myInnerHtml("EN800",'<select name="A8_Skill0" onChange="Click_A8(1)"></select>',0);

		// Added Eclage Food with a drop down list for selection. Velaryon#8787 4-4-2020
		myInnerHtml("EN842",'<select name="eclage_food_list" onChange="Click_A8(1)"></select>',0);
		eclage_food_list.options[0] = new Option("-",0,true,true);
		eclage_food_list.options[1] = new Option("Snow Flip [Increases all damage against and experience from [Water] property monsters by 5%]",1);
		eclage_food_list.options[2] = new Option("Slapping Herb [Increases all damage against and experience from [Earth] property monsters by 5%]",2);
		eclage_food_list.options[3] = new Option("Peony Mommy [Increases all damage against and experience from [Fire] property monsters by 5%]",3);
		eclage_food_list.options[4] = new Option("Yggdrasil Dust [Increases all damage against and experience from [Wind] property monsters by 5%]",4);
		
		// Added Eden energy crystal buff 
		myInnerHtml("EN853",'<input type="checkbox" name="eden_rough_crystal_buff_check" 	onClick="Click_A8(1)">Rough Energy Crystal [ATK +3, MATK +3]',0);
		myInnerHtml("EN854",'<input type="checkbox" name="eden_purified_crystal_buff_check" onClick="Click_A8(1)">Purified Energy Crystal [ATK +6, MATK +6]',0);
		myInnerHtml("EN855",'<input type="checkbox" name="eden_high_crystal_buff_check"		onClick="Click_A8(1)">High Energy Crystal [ATK +6, MATK +6]',0);
		
		// Added Summer Cocktails under Additional Effects
		myInnerHtml("EN843",'<input type="checkbox" name="venatu_beep_cocktail_check" 			onClick="Click_A8(1)">Venatu\'s Beep [Increase ATK by 5% for 30 minutes]',0);
		myInnerHtml("EN844",'<input type="checkbox" name="old_dracula_mix_cocktail_check" 		onClick="Click_A8(1)">Old Dracula\'s Mix [15% more Job EXP for 30 minutes]',0);
		myInnerHtml("EN845",'<input type="checkbox" name="spammers_heaven_cocktail_check"		onClick="Click_A8(1)">Spammers Heaven [Increase ASPD by 10% for 45 minutes]',0);
		myInnerHtml("EN846",'<input type="checkbox" name="myst_case_suprise_cocktail_check" 	onClick="Click_A8(1)">Myst Case\'s Surprise [Increase MATK by 5% for 30 minutes]',0);
		myInnerHtml("EN847",'<input type="checkbox" name="seductive_bathory_cocktail_check"		onClick="Click_A8(1)">Seductive Bathory [Reduce Cast Time by 10% for 45 minutes]',0);
		myInnerHtml("EN848",'<input type="checkbox" name="sting_slap_cocktail_check"			onClick="Click_A8(1)">Sting\'s Slap [10% resistance to Physical Attacks for 30 minutes]',0);
		myInnerHtml("EN849",'<input type="checkbox" name="blossoming_geographer_cocktail_check"	onClick="Click_A8(1)">Blossoming Geographer [10% resistance to Magic Attacks for 30 minutes]',0);
		myInnerHtml("EN850",'<input type="checkbox" name="drip_of_yggdrasil_cocktail_check"		onClick="Click_A8(1)">Drip of Yggdrasil [10% EXP Boost for 30 minutes + No EXP loss when dying]',0);
		myInnerHtml("EN851",'<input type="checkbox" name="moscow_headless_mule_cocktail_check"	onClick="Click_A8(1)">Moscow Headless Mule [For 10 minutes, FLEE + 30 and you regenerate 3% of your Maximum HP every 10 seconds. Can not be used while in Frenzy]',0);

		var PET_OBJ_copy= new Array();
		PET_OBJ_copy = PET_OBJ_copy.concat(PET_OBJ);

		PET_OBJ_copy.sort(function(a, b){
			if (a[0]!=0 && b[0]!=0) {
				if (a[1] < b[1])
					return -1
				if (a[1] > b[1])
					return 1
			}
			return 0
		});

		for(i=0;i<PET_OBJ_copy.length;i++)
			A8_Skill0.options[i] = new Option(PET_OBJ_copy[i][1],PET_OBJ_copy[i][0]);
		myInnerHtml("EN801",'Battle Manual <select name="A8_Skill1" onChange="Click_A8(1)"></select>',0);
		A8_Skill1.options[0] = new Option("None",0);
		A8_Skill1.options[1] = new Option("25",1);
		A8_Skill1.options[2] = new Option("50",2);
		A8_Skill1.options[3] = new Option("100",4);
		myInnerHtml("EN802",'<input type="checkbox" name="A8_Skill2"onClick="Click_A8(1)">Job Manual 50',0);
		myInnerHtml("EN803",'Server Base Experience Rate <select name="A8_Skill3" onChange="Click_A8(1)"></select>',0);
		A8_Skill3.options[0] = new Option("1x",0);
		for(i=1;i<=199;i++)
			A8_Skill3.options[i] = new Option(1+(1*i)+"x",i);
		myInnerHtml("EN804",'Server Job Experience Rate <select name="A8_Skill7" onChange="Click_A8(1)"></select>',0);
		A8_Skill7.options[0] = new Option("1x",0);
		for(i=1;i<=199;i++)
			A8_Skill7.options[i] = new Option(1+(1*i)+"x",i);



		myInnerHtml("EN805",'Partymember Count <select name="A8_Skill5" onChange="Click_A8(1)"></select>',0);
		A8_Skill5.options[0] = new Option("-",0);
		for(i=1;i<=19;i++)
			A8_Skill5.options[i] = new Option((i+1)+"",i);
		myInnerHtml("EN806",'Exp Tap Bonus <select name="A8_Skill6" onChange="Click_A8(1)"></select>',0);
		A8_Skill6.options[0] = new Option("-",0);
		for(i=1;i<=20;i++)
			A8_Skill6.options[i] = new Option("+"+ (i*25) +"%",i);
		myInnerHtml("EN807",'<input type="checkbox" name="A8_Skill4"onClick="Click_A8(1)">All Stats+1 [Supernovice Marriage Bonus]',0);

		str = '<Font size=2 color=black><b>Temporary Card/Item Effects</b></Font><BR>';
		str += '<Font size=2>Duration and Chance are ignored, choose active Effects manually!</Font><BR>';
		str += '<select name="A8_Skill8" onChange="Click_A8(1)"></select><BR>';
		str += '<select name="A8_Skill9" onChange="Click_A8(1)"></select><BR>';
		str += '<select name="A8_Skill10" onChange="Click_A8(1)"></select><BR>';
		str += '<select name="A8_Skill11" onChange="Click_A8(1)"></select><BR>';
		myInnerHtml("EN809",str,0);
		var ITEM_SP_TIME_OBJ_copy= new Array();
		ITEM_SP_TIME_OBJ_copy = ITEM_SP_TIME_OBJ_copy.concat(ITEM_SP_TIME_OBJ);
		ITEM_SP_TIME_OBJ_copy.sort(function(a, b){
			if (a[0]!=0 && b[0]!=0) {
				if (a[1] < b[1])
					return -1
				if (a[1] > b[1])
					return 1
			}
			return 0
		});
		for(i=0;i<ITEM_SP_TIME_OBJ_copy.length;i++){
			A8_Skill8.options[i] = new Option(ITEM_SP_TIME_OBJ_copy[i][1] +" ["+ ITEM_SP_TIME_OBJ_copy[i][2] +"]",ITEM_SP_TIME_OBJ_copy[i][0]);
			A8_Skill9.options[i] = new Option(ITEM_SP_TIME_OBJ_copy[i][1] +" ["+ ITEM_SP_TIME_OBJ_copy[i][2] +"]",ITEM_SP_TIME_OBJ_copy[i][0]);
			A8_Skill10.options[i] = new Option(ITEM_SP_TIME_OBJ_copy[i][1] +" ["+ ITEM_SP_TIME_OBJ_copy[i][2] +"]",ITEM_SP_TIME_OBJ_copy[i][0]);
			A8_Skill11.options[i] = new Option(ITEM_SP_TIME_OBJ_copy[i][1] +" ["+ ITEM_SP_TIME_OBJ_copy[i][2] +"]",ITEM_SP_TIME_OBJ_copy[i][0]);
		}
		//updated def reduction based on mob number [Loa] 2018-07-24
		myInnerHtml("EN810",'Number of Normal Enemies hitting you <select name="A8_Skill12" onChange="Click_A8(1)"></select>',0);
		for(i=0;i<=34;i++)
			A8_Skill12.options[i] = new Option(i + "",i);
		myInnerHtml("EN838",'Number of Boss Type Enemies hitting you <select name="A8_Skill33" onChange="Click_A8(1)"></select>',0);
		for(i=0;i<=17;i++)
			A8_Skill33.options[i] = new Option(i + "",i);
		myInnerHtml("EN840",'Number of MVP Enemies hitting you <select name="A8_Skill34" onChange="Click_A8(1)"></select>',0);
		for(i=0;i<=12;i++)
			A8_Skill34.options[i] = new Option(i + "",i);


		myInnerHtml("EN812",'Special Environment <select name="A8_Skill14" onChange="Click_A8(1)"></select>',0);
		A8_Skill14.options[0] = new Option("-",0);
		A8_Skill14.options[1] = new Option("WoE Zone",1);
		A8_Skill14.options[2] = new Option("Guild Dungeon",2);
		A8_Skill14.options[3] = new Option("URDR Server",3);
		myInnerHtml("EN813",'Defense Investment <select name="A8_Skill15" onChange="Click_A8(1)"></select><Font size=2> [WoE Zone only]</Font>',0);
		A8_Skill15.options[0] = new Option("-",0);
		for(i=1;i<=20;i++)
			A8_Skill15.options[i] = new Option(i * 5,i);
		myInnerHtml("EN814",'<input type="checkbox" name="A8_Skill16"onClick="Click_A8(1)">Set CRIT% to 0',0);
		myInnerHtml("EN815",'<input type="checkbox" name="A8_Skill17"onClick="Click_A8(1)">Advance 1st Spirit (max stats)',0);
		myInnerHtml("EN816",'<input type="checkbox" name="A8_Skill18"onClick="Click_A8(1)">Buche de Noël[HIT +3, CRIT + 7, Recovery rate of skills and items + 3%]',0);
		myInnerHtml("EN817",'<input type="checkbox" name="A8_Skill19"onClick="Click_A8(1)">Rune Strawberry Cake[ATK, MATK + 5]',0);
		myInnerHtml("EN818",'<input type="checkbox" name="A8_Skill20"onClick="Click_A8(1)">Schwartzwald Pine Jubilee[HIT + 10 , Perfect Dodge + 20]',0);
		myInnerHtml("EN819",'<input type="checkbox" name="A8_Skill21"onClick="Click_A8(1)">Arunafeltz Desert Sandwich[CRIT + 7]',0);
		myInnerHtml("EN852",'<input type="checkbox" name="abrasive_food_check" onClick="Click_A8(1)">Abrasive[CRIT + 30]',0);

		myInnerHtml("EN820",'<input type="checkbox" name="A8_Skill22"onClick="Click_A8(1)">Manuk\'s Sturdiness[Increases physical damage on Manuk maps by 10%]',0);
		myInnerHtml("EN821",'<input type="checkbox" name="A8_Skill23"onClick="Click_A8(1)">Manuk\'s Faith[Increases magical damage on Manuk maps by 10%]',0);
		myInnerHtml("EN822",'<input type="checkbox" name="A8_Skill24"onClick="Click_A8(1)">Manuk\'s Will[Decreases damage on Manuk maps by 10%]',0);
		myInnerHtml("EN823",'<input type="checkbox" name="A8_Skill25"onClick="Click_A8(1)">Pinguicula\'s Fruit Jam[Increases physical damage on Splendide maps by 10%]',0);
		myInnerHtml("EN824",'<input type="checkbox" name="A8_Skill26"onClick="Click_A8(1)">Cornus\' Tear[Increases magical damage on Splendide maps by 10%]',0);
		myInnerHtml("EN825",'<input type="checkbox" name="A8_Skill27"onClick="Click_A8(1)">Luciola\'s Honey Jam[Decreases damage on Splendide maps by 10%]',0);
		myInnerHtml("EN826",'<input type="checkbox" name="A8_Skill28"onClick="Click_A8(1)">Guarana Candy[Increase AGI Level 10]',0);
		myInnerHtml("EN827",'<input type="checkbox" name="A8_Skill35"onClick="Click_A8(1)">Greater Agimat of Ancient Spirit[Increases physical and magical damage to demon monsters by 10%]',0);

		myInnerHtml("EN830",'Quagmire <select name="A_IJYOU0" onChange="Click_A8(1)"></select>',0);
		A_IJYOU0.options[0] = new Option("-",0);
		for(i=1;i<=5;i++)
			A_IJYOU0.options[i] = new Option("Lv"+i,i);
		myInnerHtml("EN831",'AGI Down <select name="A_IJYOU1" onChange="Click_A8(1)"></select>',0);
		A_IJYOU1.options[0] = new Option("-",0);
		for(i=1;i<=10;i++)
			A_IJYOU1.options[i] = new Option("Lv"+i,i);
		A_IJYOU1.options[11] = new Option("Lv46",46);

		myInnerHtml("EN832",'<input type="checkbox" name="A_IJYOU2"onClick="Click_A8(1)">Poisoned',0);
		myInnerHtml("EN833",'<input type="checkbox" name="A_IJYOU3"onClick="Click_A8(1)">Cursed',0);

		myInnerHtml("EN834",'<input type="checkbox" name="A8_Skill29"onClick="Click_A8(1)">Military Ration B[HIT+ 33]',0);
		myInnerHtml("EN835",'<input type="checkbox" name="A8_Skill30"onClick="Click_A8(1)">Military Ration C[FLEE+ 33]',0);
		myInnerHtml("EN836",'<input type="checkbox" name="A8_Skill31"onClick="Click_A8(1)">Tasty Pink Ration[ATK+ 15]',0);
		myInnerHtml("EN837",'<input type="checkbox" name="A8_Skill32"onClick="Click_A8(1)">Tasty White Ration[MATK+ 15]',0);


		A8_Skill0.value = n_A_PassSkill8[0];
		A8_Skill1.value = n_A_PassSkill8[1];
		A8_Skill2.checked = n_A_PassSkill8[2];
		A8_Skill3.value = n_A_PassSkill8[3];
		A8_Skill4.checked = n_A_PassSkill8[4];
		A8_Skill5.value = n_A_PassSkill8[5];
		A8_Skill6.value = n_A_PassSkill8[6];
		A8_Skill7.value = n_A_PassSkill8[7];
		A8_Skill8.value = n_A_PassSkill8[8];
		A8_Skill9.value = n_A_PassSkill8[9];
		A8_Skill10.value = n_A_PassSkill8[10];
		A8_Skill11.value = n_A_PassSkill8[11];
		A8_Skill12.value = n_A_PassSkill8[12];
		A8_Skill33.value = n_A_PassSkill8[33];
		A8_Skill34.value = n_A_PassSkill8[34];

		A8_Skill14.value = n_A_PassSkill8[14];
		A8_Skill15.value = n_A_PassSkill8[15];
		A8_Skill16.checked = n_A_PassSkill8[16];
		A8_Skill17.checked = n_A_PassSkill8[17];
		A8_Skill18.checked = n_A_PassSkill8[18];
		A8_Skill19.checked = n_A_PassSkill8[19];
		A8_Skill20.checked = n_A_PassSkill8[20];
		A8_Skill21.checked = n_A_PassSkill8[21];
		A8_Skill22.checked = n_A_PassSkill8[22];
		A8_Skill23.checked = n_A_PassSkill8[23];
		A8_Skill24.checked = n_A_PassSkill8[24];
		A8_Skill25.checked = n_A_PassSkill8[25];
		A8_Skill26.checked = n_A_PassSkill8[26];
		A8_Skill27.checked = n_A_PassSkill8[27];
		A8_Skill28.checked = n_A_PassSkill8[28];
		A8_Skill29.checked = n_A_PassSkill8[29];
		A8_Skill30.checked = n_A_PassSkill8[30];
		A8_Skill31.checked = n_A_PassSkill8[31];
		A8_Skill32.checked = n_A_PassSkill8[32];
		A8_Skill35.checked = n_A_PassSkill8[35];
		A_IJYOU0.value = n_A_IJYOU[0];
		A_IJYOU1.value = n_A_IJYOU[1];
		A_IJYOU2.checked = n_A_IJYOU[2];
		A_IJYOU3.checked = n_A_IJYOU[3];
		eclage_food_list.value = eclage_food;
		abrasive_food_check.checked = abrasive_food;

		eden_rough_crystal_buff_check.checked = eden_rough_crystal_buff;
		eden_purified_crystal_buff_check.checked = eden_purified_crystal_buff;
		eden_high_crystal_buff_check.checked = eden_high_crystal_buff;
		
		sting_slap_cocktail_check.checked = sting_slap_cocktail
		venatu_beep_cocktail_check.checked = venatu_beep_cocktail
		old_dracula_mix_cocktail_check.checked = old_dracula_mix_cocktail
		spammers_heaven_cocktail_check.checked = spammers_heaven_cocktail
		seductive_bathory_cocktail_check.checked = seductive_bathory_cocktail
		myst_case_suprise_cocktail_check.checked = myst_case_suprise_cocktail
		drip_of_yggdrasil_cocktail_check.checked = drip_of_yggdrasil_cocktail
		moscow_headless_mule_cocktail_check.checked = moscow_headless_mule_cocktail
		blossoming_geographer_cocktail_check.checked = blossoming_geographer_cocktail
	}else{
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: collapse; width: auto;">';
		str += '<TR><TD id="A8TD" Colspan="2" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">Additional Effects <SPAN id="A8used"></SPAN></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab14" type="checkbox" name="A8_SKILLSW"onClick="Click_Skill8SW()"><label for="lab14">Show</label></div><div style="clear: both;"></div></TD></TR></TABLE>';
		myInnerHtml("ID_ETC",str,0);
		A8_SKILLSW.checked = 0;
	}
	Click_A8(0);
}}

function Click_A8(n){
	if(n==1)
		calc();
	var sw=0;
	for(var i=0;i < n_A_PassSkill8.length;i++)
	if(i != 3 && i != 7 && n_A_PassSkill8[i] != 0){ // Disabled activity notification when altering experience bonus
			sw = 1;
			break;
		}
	for(var i=0;i < n_A_IJYOU.length;i++)
		if(n_A_IJYOU[i] != 0){
			sw = 1;
			break;
		}
	if(sw == 0){
		document.getElementById('A8TD').style.backgroundImage = "url(images/th.png)"
		myInnerHtml("A8used","",0);
	}else{
		document.getElementById('A8TD').style.backgroundImage = "url(images/th-do.png)"
		myInnerHtml("A8used"," <B>[Active]</B>",0);
	}
}
//custom TalonRO SQI-Bonus calculation
function Click_SQI_Bonus_SW(){
with(document.calcForm){
	n_SQI_Bonus_SW = SQI_Bonus_SW.checked;
	if(n_SQI_Bonus_SW){
		var str
		str = '<table style="border: 1px solid #999; border-collapse: collapse; width: auto;">';
		str += '<TR><TD id="SQI_Bonus_TD" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">SQI-Bonus<SPAN id="SQI_Bonus_used"></SPAN></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab15" type="checkbox" name="SQI_Bonus_SW" onClick="Click_SQI_Bonus_SW()"><label for="lab15">Show</label></div><div style="clear: both;"></div></TD></TR>';
		str += '<TR><TD><Font size=2 color=black><B>SQI Effects</B></Font></TD></TR>';
		str += '<TR><TD><Font size=2 color=black>Bonuses will be shown only if you equip an SQI!</Font></TD></TR>';
		str += '<TR><TD>';
		str += '<select name="SQI_Bonus_1" id="SQI_Bonus_1" onChange="Click_SQI_Bonus(1)"></select><BR>';
		str += '<select name="SQI_Bonus_2" id="SQI_Bonus_2" onChange="Click_SQI_Bonus(1)"></select><BR>';
		str += '<select name="SQI_Bonus_3" id="SQI_Bonus_3" onChange="Click_SQI_Bonus(1)"></select><BR>';
		str += '<select name="SQI_Bonus_4" id="SQI_Bonus_4" onChange="Click_SQI_Bonus(1)"></select><BR>';
		str += '</TD></TR></table>';
		myInnerHtml("ID_SQI_Bonus",str,0);
		SQI_Bonus_SW.checked=1;
		//[0,0,"SQI-Bonus","none",0,0,0] option for every SQI
		SQI_Bonus_1.options[0] = new Option(SQI_BONUS[0][2] + " [" + SQI_BONUS[0][3] +"]",0);
		SQI_Bonus_2.options[0] = new Option(SQI_BONUS[0][2] + " [" + SQI_BONUS[0][3] +"]",0);
		SQI_Bonus_3.options[0] = new Option(SQI_BONUS[0][2] + " [" + SQI_BONUS[0][3] +"]",0);
		SQI_Bonus_4.options[0] = new Option(SQI_BONUS[0][2] + " [" + SQI_BONUS[0][3] +"]",0);

		for(i=1;i<SQI_BONUS.length;i++){
			if(EquipNumSearch(SQI_BONUS[i][1])) {
				if(SuperNoviceFullWeaponCHECK == 0 || SuperNoviceFullWeaponCHECK == 1 && SQI_BONUS[i][1] == 1379){
					SQI_Bonus_1.options[SQI_Bonus_1.options.length] = new Option(SQI_BONUS[i][2] + " [" + SQI_BONUS[i][3] +"]",i);
					SQI_Bonus_2.options[SQI_Bonus_2.options.length] = new Option(SQI_BONUS[i][2] + " [" + SQI_BONUS[i][3] +"]",i);
					SQI_Bonus_3.options[SQI_Bonus_3.options.length] = new Option(SQI_BONUS[i][2] + " [" + SQI_BONUS[i][3] +"]",i);
					SQI_Bonus_4.options[SQI_Bonus_4.options.length] = new Option(SQI_BONUS[i][2] + " [" + SQI_BONUS[i][3] +"]",i);
					SQI_equipped = SQI_BONUS[i][1];
				}
			}
		}
		SQI_Bonus_1.value=SQI_Bonus_Effect[0];
		SQI_Bonus_2.value=SQI_Bonus_Effect[1];
		SQI_Bonus_3.value=SQI_Bonus_Effect[2];
		SQI_Bonus_4.value=SQI_Bonus_Effect[3];
		
		// Ensure that Bonus are always valid
		for (i = 0; i < SQI_Bonus_Effect.length; ++i)
		{
			current_sqi_bonus_select = document.getElementById("SQI_Bonus_" + (i + 1));
			
			if (current_sqi_bonus_select && current_sqi_bonus_select.value == "")
			{
				SQI_Bonus_Effect[i] = 0;
				current_sqi_bonus_select.value = 0;
			}
		}
	}
	else{
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: collapse; width: auto;">';
		str += '<TR><TD id="SQI_Bonus_TD" Colspan="1" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">SQI-Bonus<SPAN id="SQI_Bonus_used"></SPAN></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab15" type="checkbox" name="SQI_Bonus_SW"onClick="Click_SQI_Bonus_SW()"><label for="lab15">Show</label></div><div style="clear: both;"></div></TD></TR></table>';
		myInnerHtml("ID_SQI_Bonus",str,0);
		SQI_Bonus_SW.checked = 0;
	}
	Click_SQI_Bonus(0);
}}

function Click_SQI_Bonus(n){
	if(n==1) {
		calc();
		ActiveSkillSetPlus();
	}
	var sw=0;
	for(var i=0;i < SQI_Bonus_Effect.length;i++)
		if(SQI_Bonus_Effect[i] != 0){
			sw = 1;
			break;
		}
	if(sw == 0){
		document.getElementById('SQI_Bonus_TD').style.backgroundImage = "url(images/th.png)"
		myInnerHtml("SQI_Bonus_used","",0);
	}else{
		document.getElementById('SQI_Bonus_TD').style.backgroundImage = "url(images/th-do.png)"
		myInnerHtml("SQI_Bonus_used"," <B>[Active]</B>",0);
	}
}

//custom TalonRO add Kris Enchantment
function Click_KrisEnchantment(){
with(document.calcForm){
	if(A_weapon1.value == 1472){
		document.getElementById("T_KE1").style.display = "";
	}
	else{
		document.getElementById("T_KE1").style.display = "none";
		A_KE11.value = 0;
		A_KE12.value = 0;
	}
	if (typeof(A_weapon2) != "undefined"){
		if(A_weapon2.value == 1472){
			document.getElementById("T_KE2").style.display = "";
		}
		else
		{
			document.getElementById("T_KE2").style.display = "none";
			A_KE21.value = 0;
			A_KE22.value = 0;
		}
	}else{
		document.getElementById("T_KE2").style.display = "none";
		A_KE21.value = 0;
		A_KE22.value = 0;
	}
}}
/*[Custom TalonRO - 2018-06-03
Function to populate combos by using definitions from etc.js;
Definitions are: +0 to +10, Kris/HS/Malangdo Enchants, Extended Info and Card Shorcuts] [Kato]
*/
function tRO_PopulateCombos() {
	with(document.calcForm){
		for(var i=0;i< EXTENDED_INFO.length; i++) {
			A_Kakutyou.options[i] = new Option(EXTENDED_INFO[i][1],EXTENDED_INFO[i][0]);
		}
		for(var i=0;i<11;i++){
			A_HEAD_DEF_PLUS.options[i] = new Option("+"+i,i);
			A_Weapon_ATKplus.options[i] = new Option("+"+i,i);
			A_BODY_DEF_PLUS.options[i] = new Option("+"+i,i);
			A_LEFT_DEF_PLUS.options[i] = new Option("+"+i,i);
			A_SHOULDER_DEF_PLUS.options[i] = new Option("+"+i,i);
			A_SHOES_DEF_PLUS.options[i] = new Option("+"+i,i);
		}

		//Cards
		for(i=0; i<CARD_SHORTCUT.length; i++) {
			A_cardshort.options[i] = new Option(CARD_SHORTCUT[i][1],CARD_SHORTCUT[i][0]);
		}

		//Kris
		myInnerHtml("A_KEText11","Kris Enchantment 1",0);
		myInnerHtml("A_KEText12","Kris Enchantment 2",0);
		myInnerHtml("A_KEText21","Kris Enchantment 1",0);
		myInnerHtml("A_KEText22","Kris Enchantment 2",0);

		A_KE11.options[0] = new Option("(Kris Enchantment "+ A_KE11.name.substr(-1) +")",0);
		A_KE12.options[0] = new Option("(Kris Enchantment "+ A_KE12.name.substr(-1) +")",0);
		A_KE21.options[0] = new Option("(Kris Enchantment 2-"+ A_KE21.name.substr(-1) +")",0);
		A_KE22.options[0] = new Option("(Kris Enchantment 2-"+ A_KE22.name.substr(-1) +")",0);

		for(i=0; i<KRIS_ENCHANTMENT.length; i++) {
				A_KE11.options[i+1] = new Option(KRIS_ENCHANTMENT[i][1],KRIS_ENCHANTMENT[i][0]);
				A_KE12.options[i+1] = new Option(KRIS_ENCHANTMENT[i][1],KRIS_ENCHANTMENT[i][0]);
				A_KE21.options[i+1] = new Option(KRIS_ENCHANTMENT[i][1],KRIS_ENCHANTMENT[i][0]);
				A_KE22.options[i+1] = new Option(KRIS_ENCHANTMENT[i][1],KRIS_ENCHANTMENT[i][0]);
		}

		//Malangdo
		myInnerHtml("A_METext11","Malangdo 1: ",0);
		myInnerHtml("A_METext12","Malangdo 2: ",0);
		myInnerHtml("A_METext21","Malangdo 1: ",0);
		myInnerHtml("A_METext22","Malangdo 2: ",0);

		A_ME11.options[0] = new Option("(Malangdo Enchant "+ A_ME11.name.substr(-1) +")",0);
		A_ME12.options[0] = new Option("(Malangdo Enchant "+ A_ME12.name.substr(-1) +")",0);
		A_ME21.options[0] = new Option("(Malangdo Enchant 2-"+ A_ME21.name.substr(-1) +")",0);
		A_ME22.options[0] = new Option("(Malangdo Enchant 2-"+ A_ME22.name.substr(-1) +")",0);

		for(i=0; i<MALANGDO_ENCHANTS.length; i++) {
			A_ME11.options[i+1] = new Option(MALANGDO_ENCHANTS[i][1],MALANGDO_ENCHANTS[i][0]);
			A_ME12.options[i+1] = new Option(MALANGDO_ENCHANTS[i][1],MALANGDO_ENCHANTS[i][0]);
			A_ME21.options[i+1] = new Option(MALANGDO_ENCHANTS[i][1],MALANGDO_ENCHANTS[i][0]);
			A_ME22.options[i+1] = new Option(MALANGDO_ENCHANTS[i][1],MALANGDO_ENCHANTS[i][0]);
		}

		//Biolab (Weapon)
		myInnerHtml("A_BEText11","Biolab 1: ",0);
		myInnerHtml("A_BEText12","Biolab 2: ",0);
		myInnerHtml("A_BEText21","Biolab 1: ",0);
		myInnerHtml("A_BEText22","Biolab 2: ",0);

		A_BE11.options[0] = new Option("(Biolab Enchant "+ A_BE11.name.substr(-1) +")",0);
		A_BE12.options[0] = new Option("(Biolab Enchant "+ A_BE12.name.substr(-1) +")",0);
		A_BE21.options[0] = new Option("(Biolab Enchant 2-"+ A_BE21.name.substr(-1) +")",0);
		A_BE22.options[0] = new Option("(Biolab Enchant 2-"+ A_BE22.name.substr(-1) +")",0);

		for(i=0; i<BIOLAB_ENCHANTS_WEAPON.length; i++) {
			A_BE11.options[i+1] = new Option(BIOLAB_ENCHANTS_WEAPON[i][1],BIOLAB_ENCHANTS_WEAPON[i][0]);
			A_BE12.options[i+1] = new Option(BIOLAB_ENCHANTS_WEAPON[i][1],BIOLAB_ENCHANTS_WEAPON[i][0]);
			A_BE21.options[i+1] = new Option(BIOLAB_ENCHANTS_WEAPON[i][1],BIOLAB_ENCHANTS_WEAPON[i][0]);
			A_BE22.options[i+1] = new Option(BIOLAB_ENCHANTS_WEAPON[i][1],BIOLAB_ENCHANTS_WEAPON[i][0]);
		}

		//Biolab (Headgear)
		myInnerHtml("A_BETextH1","Biolab 1: ",0);
		myInnerHtml("A_BETextH2","Biolab 2: ",0);

		A_BEH1.options[0] = new Option("(Biolab Headgear Enchant "+ A_BEH1.name.substr(-1) +")",0);
		A_BEH2.options[0] = new Option("(Biolab Headgear Enchant "+ A_BEH2.name.substr(-1) +")",0);

		for(i=0; i<BIOLAB_ENCHANTS_ARMOR.length; i++) {
			A_BEH1.options[i+1] = new Option(BIOLAB_ENCHANTS_ARMOR[i][1],BIOLAB_ENCHANTS_ARMOR[i][0]);
			A_BEH2.options[i+1] = new Option(BIOLAB_ENCHANTS_ARMOR[i][1],BIOLAB_ENCHANTS_ARMOR[i][0]);
		}

		//Biolab (Armor)
		myInnerHtml("A_BETextA1","Biolab 1: ",0);
		myInnerHtml("A_BETextA2","Biolab 2: ",0);

		A_BEA1.options[0] = new Option("(Biolab Armor Enchant "+ A_BEA1.name.substr(-1) +")",0);
		A_BEA2.options[0] = new Option("(Biolab Armor Enchant "+ A_BEA2.name.substr(-1) +")",0);

		for(i=0; i<BIOLAB_ENCHANTS_ARMOR.length; i++) {
			A_BEA1.options[i+1] = new Option(BIOLAB_ENCHANTS_ARMOR[i][1],BIOLAB_ENCHANTS_ARMOR[i][0]);
			A_BEA2.options[i+1] = new Option(BIOLAB_ENCHANTS_ARMOR[i][1],BIOLAB_ENCHANTS_ARMOR[i][0]);
		}

		//Biolab (Shield)
		myInnerHtml("A_BETextS1","Biolab 1: ",0);
		myInnerHtml("A_BETextS2","Biolab 2: ",0);

		A_BES1.options[0] = new Option("(Biolab Shield Enchant "+ A_BES1.name.substr(-1) +")",0);
		A_BES2.options[0] = new Option("(Biolab Shield Enchant "+ A_BES2.name.substr(-1) +")",0);

		for(i=0; i<BIOLAB_ENCHANTS_ARMOR.length; i++) {
			A_BES1.options[i+1] = new Option(BIOLAB_ENCHANTS_ARMOR[i][1],BIOLAB_ENCHANTS_ARMOR[i][0]);
			A_BES2.options[i+1] = new Option(BIOLAB_ENCHANTS_ARMOR[i][1],BIOLAB_ENCHANTS_ARMOR[i][0]);
		}

		//Biolab (Garment)
		myInnerHtml("A_BETextG1","Biolab 1: ",0);
		myInnerHtml("A_BETextG2","Biolab 2: ",0);

		A_BEG1.options[0] = new Option("(Biolab Garment Enchant "+ A_BEG1.name.substr(-1) +")",0);
		A_BEG2.options[0] = new Option("(Biolab Garment Enchant "+ A_BEG2.name.substr(-1) +")",0);

		for(i=0; i<BIOLAB_ENCHANTS_ARMOR.length; i++) {
			A_BEG1.options[i+1] = new Option(BIOLAB_ENCHANTS_ARMOR[i][1],BIOLAB_ENCHANTS_ARMOR[i][0]);
			A_BEG2.options[i+1] = new Option(BIOLAB_ENCHANTS_ARMOR[i][1],BIOLAB_ENCHANTS_ARMOR[i][0]);
		}

		//Biolab (Accessory)
		myInnerHtml("A_BETextAC11","Biolab 1: ",0);
		myInnerHtml("A_BETextAC12","Biolab 2: ",0);
		myInnerHtml("A_BETextAC21","Biolab 1: ",0);
		myInnerHtml("A_BETextAC22","Biolab 2: ",0);

		A_BEAC11.options[0] = new Option("(Biolab Accessory Enchant "+ A_BEAC11.name.substr(-1) +")",0);
		A_BEAC12.options[0] = new Option("(Biolab Accessory Enchant "+ A_BEAC12.name.substr(-1) +")",0);
		A_BEAC21.options[0] = new Option("(Biolab Accessory Enchant "+ A_BEAC21.name.substr(-1) +")",0);
		A_BEAC22.options[0] = new Option("(Biolab Accessory Enchant "+ A_BEAC22.name.substr(-1) +")",0);

		for(i=0; i<BIOLAB_ENCHANTS_ARMOR.length; i++) {
			A_BEAC11.options[i+1] = new Option(BIOLAB_ENCHANTS_ARMOR[i][1],BIOLAB_ENCHANTS_ARMOR[i][0]);
			A_BEAC12.options[i+1] = new Option(BIOLAB_ENCHANTS_ARMOR[i][1],BIOLAB_ENCHANTS_ARMOR[i][0]);
			A_BEAC21.options[i+1] = new Option(BIOLAB_ENCHANTS_ARMOR[i][1],BIOLAB_ENCHANTS_ARMOR[i][0]);
			A_BEAC22.options[i+1] = new Option(BIOLAB_ENCHANTS_ARMOR[i][1],BIOLAB_ENCHANTS_ARMOR[i][0]);
		}

		//Eden (Weapon)
		myInnerHtml("A_EEText11","Eden 1: ",0);
		myInnerHtml("A_EEText12","Eden 2: ",0);
		myInnerHtml("A_EEText13","Eden 3: ",0);
		myInnerHtml("A_EEText21","Eden 1: ",0);
		myInnerHtml("A_EEText22","Eden 2: ",0);
		myInnerHtml("A_EEText23","Eden 3: ",0);

		A_EE11.options[0] = new Option("(Eden Enchant "+ A_EE11.name.substr(-1) +")",0);
		A_EE12.options[0] = new Option("(Eden Enchant "+ A_EE12.name.substr(-1) +")",0);
		A_EE13.options[0] = new Option("(Eden Enchant "+ A_EE13.name.substr(-1) +")",0);
		A_EE21.options[0] = new Option("(Eden Enchant 2-"+ A_EE21.name.substr(-1) +")",0);
		A_EE22.options[0] = new Option("(Eden Enchant 2-"+ A_EE22.name.substr(-1) +")",0);
		A_EE23.options[0] = new Option("(Eden Enchant 2-"+ A_EE23.name.substr(-1) +")",0);

		for(i=0; i<EDEN_ENCHANTS_WEAPON_FIRST.length; i++) {
			A_EE11.options[i+1] = new Option(EDEN_ENCHANTS_WEAPON_FIRST[i][1],EDEN_ENCHANTS_WEAPON_FIRST[i][0]);
			A_EE21.options[i+1] = new Option(EDEN_ENCHANTS_WEAPON_FIRST[i][1],EDEN_ENCHANTS_WEAPON_FIRST[i][0]);
		}

		//Eden (Headgear)
		myInnerHtml("A_EETextH","Eden Hat: ",0);
		//myInnerHtml("A_EETextH2","Eden 2: ",0);

		A_EEH.options[0] = new Option("(Eden Hat Enchant "+ A_EEH.name.substr(-1) +")",0);

		for(i=0; i<EDEN_ENCHANTS_HAT.length; i++) {
			A_EEH.options[i+1] = new Option(EDEN_ENCHANTS_HAT[i][1],EDEN_ENCHANTS_HAT[i][0]);
		}

		//Eden (Armor)
		myInnerHtml("A_EETextA1","Eden 1: ",0);
		myInnerHtml("A_EETextA2","Eden 2: ",0);

		A_EEA1.options[0] = new Option("(Eden Uniform Enchant "+ A_EEA1.name.substr(-1) +")",0);
		A_EEA2.options[0] = new Option("(Eden Uniform Enchant "+ A_EEA2.name.substr(-1) +")",0);

		for(i=0; i<EDEN_ENCHANTS_ARMOR_FIRST.length; i++) {
			A_EEA1.options[i+1] = new Option(EDEN_ENCHANTS_ARMOR_FIRST[i][1],EDEN_ENCHANTS_ARMOR_FIRST[i][0]);
		}
		for(i=0; i<EDEN_ENCHANTS_ARMOR_SECOND.length; i++) {
			A_EEA2.options[i+1] = new Option(EDEN_ENCHANTS_ARMOR_SECOND[i][1],EDEN_ENCHANTS_ARMOR_SECOND[i][0]);
		}

		//Eden (Garment)
		myInnerHtml("A_EETextG1","Eden 1: ",0);
		myInnerHtml("A_EETextG2","Eden 2: ",0);

		A_EEG1.options[0] = new Option("(Eden Manteau Enchant "+ A_EEG1.name.substr(-1) +")",0);
		A_EEG2.options[0] = new Option("(Eden Manteau Enchant "+ A_EEG2.name.substr(-1) +")",0);

		for(i=0; i<EDEN_ENCHANTS_ARMOR_FIRST.length; i++) {
			A_EEG1.options[i+1] = new Option(EDEN_ENCHANTS_ARMOR_FIRST[i][1],EDEN_ENCHANTS_ARMOR_FIRST[i][0]);
		}
		for(i=0; i<EDEN_ENCHANTS_ARMOR_SECOND.length; i++) {
			A_EEG2.options[i+1] = new Option(EDEN_ENCHANTS_ARMOR_SECOND[i][1],EDEN_ENCHANTS_ARMOR_SECOND[i][0]);
		}

		//Eden (Footgear)
		myInnerHtml("A_EETextF1","Eden 1: ",0);
		myInnerHtml("A_EETextF2","Eden 2: ",0);

		A_EEF1.options[0] = new Option("(Eden Boots Enchant "+ A_EEF1.name.substr(-1) +")",0);
		A_EEF2.options[0] = new Option("(Eden Boots Enchant "+ A_EEF2.name.substr(-1) +")",0);

		for(i=0; i<EDEN_ENCHANTS_ARMOR_FIRST.length; i++) {
			A_EEF1.options[i+1] = new Option(EDEN_ENCHANTS_ARMOR_FIRST[i][1],EDEN_ENCHANTS_ARMOR_FIRST[i][0]);
		}
		for(i=0; i<EDEN_ENCHANTS_ARMOR_SECOND.length; i++) {
			A_EEF2.options[i+1] = new Option(EDEN_ENCHANTS_ARMOR_SECOND[i][1],EDEN_ENCHANTS_ARMOR_SECOND[i][0]);
		}

		//El Dicaste (Garment)
		myInnerHtml("A_EDTextG1","El Dicaste 1: ",0);
		myInnerHtml("A_EDTextG2","El Dicaste 2: ",0);
		myInnerHtml("A_EDTextG3","El Dicaste 3: ",0);

		A_EDG1.options[0] = new Option("(Feral Tails Enchant "+ A_EDG1.name.substr(-1) +")",0);
		A_EDG2.options[0] = new Option("(Feral Tails Enchant "+ A_EDG2.name.substr(-1) +")",0);
		A_EDG3.options[0] = new Option("(Feral Tails Enchant "+ A_EDG3.name.substr(-1) +")",0);

		for(i=0; i<ED_ENCHANTS_SLOT_ONE.length; i++) {
			A_EDG1.options[i+1] = new Option(ED_ENCHANTS_SLOT_ONE[i][1],ED_ENCHANTS_SLOT_ONE[i][0]);
		}
		for(i=0; i<ED_ENCHANTS_SLOT_TWO.length; i++) {
			A_EDG2.options[i+1] = new Option(ED_ENCHANTS_SLOT_TWO[i][1],ED_ENCHANTS_SLOT_TWO[i][0]);
		}
		for(i=0; i<ED_ENCHANTS_SLOT_THREE.length; i++) {
			A_EDG3.options[i+1] = new Option(ED_ENCHANTS_SLOT_THREE[i][1],ED_ENCHANTS_SLOT_THREE[i][0]);
		}

		//El Dicaste (Footgear)
		myInnerHtml("A_EDTextF1","El Dicaste 1: ",0);
		myInnerHtml("A_EDTextF2","El Dicaste 2: ",0);
		myInnerHtml("A_EDTextF3","El Dicaste 3: ",0);

		A_EDF1.options[0] = new Option("(Feral Boots Enchant "+ A_EDF1.name.substr(-1) +")",0);
		A_EDF2.options[0] = new Option("(Feral Boots Enchant "+ A_EDF2.name.substr(-1) +")",0);
		A_EDF3.options[0] = new Option("(Feral Boots Enchant "+ A_EDF3.name.substr(-1) +")",0);

		for(i=0; i<ED_ENCHANTS_SLOT_ONE.length; i++) {
			A_EDF1.options[i+1] = new Option(ED_ENCHANTS_SLOT_ONE[i][1],ED_ENCHANTS_SLOT_ONE[i][0]);
		}
		for(i=0; i<ED_ENCHANTS_SLOT_TWO.length; i++) {
			A_EDF2.options[i+1] = new Option(ED_ENCHANTS_SLOT_TWO[i][1],ED_ENCHANTS_SLOT_TWO[i][0]);
		}
		for(i=0; i<ED_ENCHANTS_SLOT_THREE.length; i++) {
			A_EDF3.options[i+1] = new Option(ED_ENCHANTS_SLOT_THREE[i][1],ED_ENCHANTS_SLOT_THREE[i][0]);
		}

		//El Dicaste (Accessory)
		myInnerHtml("A_EDTextAC11","El Dicaste 1: ",0);
		myInnerHtml("A_EDTextAC12","El Dicaste 2: ",0);
		myInnerHtml("A_EDTextAC13","El Dicaste 3: ",0);
		myInnerHtml("A_EDTextAC21","El Dicaste 1: ",0);
		myInnerHtml("A_EDTextAC22","El Dicaste 2: ",0);
		myInnerHtml("A_EDTextAC23","El Dicaste 3: ",0);

		A_EDAC11.options[0] = new Option("(Golden Trickle Enchant "+ A_EDAC11.name.substr(-1) +")",0);
		A_EDAC12.options[0] = new Option("(Golden Trickle Enchant "+ A_EDAC12.name.substr(-1) +")",0);
		A_EDAC13.options[0] = new Option("(Golden Trickle Enchant "+ A_EDAC13.name.substr(-1) +")",0);
		A_EDAC21.options[0] = new Option("(Golden Trickle Enchant "+ A_EDAC21.name.substr(-1) +")",0);
		A_EDAC22.options[0] = new Option("(Golden Trickle Enchant "+ A_EDAC22.name.substr(-1) +")",0);
		A_EDAC23.options[0] = new Option("(Golden Trickle Enchant "+ A_EDAC23.name.substr(-1) +")",0);

		for(i=0; i<ED_ENCHANTS_SLOT_ONE.length; i++) {
			A_EDAC11.options[i+1] = new Option(ED_ENCHANTS_SLOT_ONE[i][1],ED_ENCHANTS_SLOT_ONE[i][0]);
			A_EDAC21.options[i+1] = new Option(ED_ENCHANTS_SLOT_ONE[i][1],ED_ENCHANTS_SLOT_ONE[i][0]);
		}
		for(i=0; i<ED_ENCHANTS_SLOT_TWO.length; i++) {
			A_EDAC12.options[i+1] = new Option(ED_ENCHANTS_SLOT_TWO[i][1],ED_ENCHANTS_SLOT_TWO[i][0]);
			A_EDAC22.options[i+1] = new Option(ED_ENCHANTS_SLOT_TWO[i][1],ED_ENCHANTS_SLOT_TWO[i][0]);
		}
		for(i=0; i<ED_ENCHANTS_GT_SLOT_THREE.length; i++) {
			A_EDAC13.options[i+1] = new Option(ED_ENCHANTS_GT_SLOT_THREE[i][1],ED_ENCHANTS_GT_SLOT_THREE[i][0]);
			A_EDAC23.options[i+1] = new Option(ED_ENCHANTS_GT_SLOT_THREE[i][1],ED_ENCHANTS_GT_SLOT_THREE[i][0]);
		}

		//El Dicaste (Light of El Dicaste)
		myInnerHtml("A_EDTextLOED11","El Dicaste 1: ",0);
		myInnerHtml("A_EDTextLOED12","El Dicaste 2: ",0);
		myInnerHtml("A_EDTextLOED13","El Dicaste 3: ",0);
		myInnerHtml("A_EDTextLOED21","El Dicaste 1: ",0);
		myInnerHtml("A_EDTextLOED22","El Dicaste 2: ",0);
		myInnerHtml("A_EDTextLOED23","El Dicaste 3: ",0);

		A_EDLOED11.options[0] = new Option("(Light of El Dicaste Enchant "+ A_EDLOED11.name.substr(-1) +")",0);
		A_EDLOED12.options[0] = new Option("(Light of El Dicaste Enchant "+ A_EDLOED12.name.substr(-1) +")",0);
		A_EDLOED13.options[0] = new Option("(Light of El Dicaste Enchant "+ A_EDLOED13.name.substr(-1) +")",0);
		A_EDLOED21.options[0] = new Option("(Light of El Dicaste Enchant "+ A_EDLOED21.name.substr(-1) +")",0);
		A_EDLOED22.options[0] = new Option("(Light of El Dicaste Enchant "+ A_EDLOED22.name.substr(-1) +")",0);
		A_EDLOED23.options[0] = new Option("(Light of El Dicaste Enchant "+ A_EDLOED23.name.substr(-1) +")",0);

		for(i=0; i<ED_ENCHANTS_SLOT_ONE.length; i++) {
			A_EDLOED11.options[i+1] = new Option(ED_ENCHANTS_SLOT_ONE[i][1],ED_ENCHANTS_SLOT_ONE[i][0]);
			A_EDLOED21.options[i+1] = new Option(ED_ENCHANTS_SLOT_ONE[i][1],ED_ENCHANTS_SLOT_ONE[i][0]);
		}
		for(i=0; i<ED_ENCHANTS_LIGHT_SLOT_TWO_THREE.length; i++) {
			A_EDLOED12.options[i+1] = new Option(ED_ENCHANTS_LIGHT_SLOT_TWO_THREE[i][1],ED_ENCHANTS_LIGHT_SLOT_TWO_THREE[i][0]);
			A_EDLOED22.options[i+1] = new Option(ED_ENCHANTS_LIGHT_SLOT_TWO_THREE[i][1],ED_ENCHANTS_LIGHT_SLOT_TWO_THREE[i][0]);
		}
		for(i=0; i<ED_ENCHANTS_LIGHT_SLOT_TWO_THREE.length; i++) {
			A_EDLOED13.options[i+1] = new Option(ED_ENCHANTS_LIGHT_SLOT_TWO_THREE[i][1],ED_ENCHANTS_LIGHT_SLOT_TWO_THREE[i][0]);
			A_EDLOED23.options[i+1] = new Option(ED_ENCHANTS_LIGHT_SLOT_TWO_THREE[i][1],ED_ENCHANTS_LIGHT_SLOT_TWO_THREE[i][0]);
		}

		//Mora (Armor)
		myInnerHtml("A_MORAETextA1","Mora 1: ",0);
		myInnerHtml("A_MORAETextA2","Mora 2: ",0);
		myInnerHtml("A_MORAETextA3","Mora 3: ",0);

		A_MORAEA1.options[0] = new Option("(Army Padding Enchant "+ A_MORAEA1.name.substr(-1) +")",0);
		A_MORAEA2.options[0] = new Option("(Army Padding Enchant "+ A_MORAEA2.name.substr(-1) +")",0);
		A_MORAEA3.options[0] = new Option("(Army Padding Enchant "+ A_MORAEA3.name.substr(-1) +")",0);

		for(i=0; i<MORA_ENCHANTS_SLOT_ONE.length; i++) {
			A_MORAEA1.options[i+1] = new Option(MORA_ENCHANTS_SLOT_ONE[i][1],MORA_ENCHANTS_SLOT_ONE[i][0]);
		}
		for(i=0; i<MORA_ENCHANTS_SLOT_TWO.length; i++) {
			A_MORAEA2.options[i+1] = new Option(MORA_ENCHANTS_SLOT_TWO[i][1],MORA_ENCHANTS_SLOT_TWO[i][0]);
		}
		for(i=0; i<MORA_ENCHANTS_SLOT_THREE.length; i++) {
			A_MORAEA3.options[i+1] = new Option(MORA_ENCHANTS_SLOT_THREE[i][1],MORA_ENCHANTS_SLOT_THREE[i][0]);
		}

		//Mora (Garment)
		myInnerHtml("A_MORAETextG1","Mora 1: ",0);
		myInnerHtml("A_MORAETextG2","Mora 2: ",0);
		myInnerHtml("A_MORAETextG3","Mora 3: ",0);

		A_MORAEG1.options[0] = new Option("(Loki's Muffler Enchant "+ A_MORAEG1.name.substr(-1) +")",0);
		A_MORAEG2.options[0] = new Option("(Loki's Muffler Enchant "+ A_MORAEG2.name.substr(-1) +")",0);
		A_MORAEG3.options[0] = new Option("(Loki's Muffler Enchant "+ A_MORAEG3.name.substr(-1) +")",0);

		for(i=0; i<MORA_ENCHANTS_SLOT_ONE.length; i++) {
			A_MORAEG1.options[i+1] = new Option(MORA_ENCHANTS_SLOT_ONE[i][1],MORA_ENCHANTS_SLOT_ONE[i][0]);
		}
		for(i=0; i<MORA_ENCHANTS_SLOT_TWO.length; i++) {
			A_MORAEG2.options[i+1] = new Option(MORA_ENCHANTS_SLOT_TWO[i][1],MORA_ENCHANTS_SLOT_TWO[i][0]);
		}
		for(i=0; i<MORA_ENCHANTS_SLOT_THREE.length; i++) {
			A_MORAEG3.options[i+1] = new Option(MORA_ENCHANTS_SLOT_THREE[i][1],MORA_ENCHANTS_SLOT_THREE[i][0]);
		}

		//Mora (Accessory)
		myInnerHtml("A_MORAETextAC11","Mora 1: ",0);
		myInnerHtml("A_MORAETextAC12","Mora 2: ",0);
		myInnerHtml("A_MORAETextAC13","Mora 3: ",0);
		myInnerHtml("A_MORAETextAC21","Mora 1: ",0);
		myInnerHtml("A_MORAETextAC22","Mora 2: ",0);
		myInnerHtml("A_MORAETextAC23","Mora 3: ",0);

		A_MORAEAC11.options[0] = new Option("(Pendant Of Guardian Enchant "+ A_MORAEAC11.name.substr(-1) +")",0);
		A_MORAEAC12.options[0] = new Option("(Pendant Of Guardian Enchant "+ A_MORAEAC12.name.substr(-1) +")",0);
		A_MORAEAC13.options[0] = new Option("(Pendant Of Guardian Enchant "+ A_MORAEAC13.name.substr(-1) +")",0);
		A_MORAEAC21.options[0] = new Option("(Pendant Of Guardian Enchant "+ A_MORAEAC21.name.substr(-1) +")",0);
		A_MORAEAC22.options[0] = new Option("(Pendant Of Guardian Enchant "+ A_MORAEAC22.name.substr(-1) +")",0);
		A_MORAEAC23.options[0] = new Option("(Pendant Of Guardian Enchant "+ A_MORAEAC23.name.substr(-1) +")",0);

		for(i=0; i<MORA_ENCHANTS_SLOT_ONE.length; i++) {
			A_MORAEAC11.options[i+1] = new Option(MORA_ENCHANTS_SLOT_ONE[i][1],MORA_ENCHANTS_SLOT_ONE[i][0]);
			A_MORAEAC21.options[i+1] = new Option(MORA_ENCHANTS_SLOT_ONE[i][1],MORA_ENCHANTS_SLOT_ONE[i][0]);
		}
		for(i=0; i<MORA_ENCHANTS_SLOT_TWO.length; i++) {
			A_MORAEAC12.options[i+1] = new Option(MORA_ENCHANTS_SLOT_TWO[i][1],MORA_ENCHANTS_SLOT_TWO[i][0]);
			A_MORAEAC22.options[i+1] = new Option(MORA_ENCHANTS_SLOT_TWO[i][1],MORA_ENCHANTS_SLOT_TWO[i][0]);
		}
		for(i=0; i<MORA_ENCHANTS_SLOT_THREE.length; i++) {
			A_MORAEAC13.options[i+1] = new Option(MORA_ENCHANTS_SLOT_THREE[i][1],MORA_ENCHANTS_SLOT_THREE[i][0]);
			A_MORAEAC23.options[i+1] = new Option(MORA_ENCHANTS_SLOT_THREE[i][1],MORA_ENCHANTS_SLOT_THREE[i][0]);
		}

		//Hidden Slot Enchant (Armor)
		A_HSE.options[0] = new Option("(Hidden Slot Enchant, Armor)",0);
		for(var i=0; i<HS_ENCHANTS.length; i++) {
			A_HSE.options[i+1] = new Option(HS_ENCHANTS[i][1],HS_ENCHANTS[i][0]);
		}
	}
}

/*
	[Custom TalonRO 2018-06-14 - Function to perform the click changes,
	it's responsible for elements displays changes and enchant removal exceptions
	Requires etc.js->arrays: ME_ENCHANTABLE and MALANGDO_ENCHANTS, index.html->select: A_ME11, A_ME12, A_ME21, A_ME22
	] [Kato]
*/
function tRO_Click_MalangdoEnchantment(w1,w2){

	var bEnchant1 = bEnchant2 = false;
	var kID1 = kID2 = 0;
	if(w1) {
			for(i=0; i<ME_ENCHANTABLE.length; i++) {
				if(ME_ENCHANTABLE[i][0] == w1) {
					bEnchant1 = true;
					kID1 = i;
					break;
				}
			}
	}
	if(w2) {
			for(i=0;i<ME_ENCHANTABLE.length;i++) {
				if(ME_ENCHANTABLE[i][0] == w2) {
					bEnchant2 = true;
					kID2 = i;
					break;
				}
			}
	}

	document.getElementById("T_ME1").style.display = ((bEnchant1) ? "" : "none");
	document.getElementById("T_ME2").style.display = ((bEnchant2) ? "" : "none");

	if(bEnchant1 == false) {
		document.calcForm.A_ME11.value = 0;
		document.calcForm.A_ME12.value = 0;
	}
	if(bEnchant2 == false) {
		document.calcForm.A_ME21.value = 0;
		document.calcForm.A_ME22.value = 0;
	}

	with(document.calcForm){
		if(ME_ENCHANTABLE[kID1][1] != 0) {
				var arEx = [];
				for(i=1; i<ME_ENCHANTABLE[kID1].length; i++){
					if(ME_ENCHANTABLE[kID1][i] != 0) {
						arEx.push(ME_ENCHANTABLE[kID1][i].toString());
					}
					else break;
				}
				if(arEx.length > 0 ) {
					for (j = A_ME11.length - 1; j >= 0; j--) {
						if(parseInt(arEx.indexOf(A_ME11.options[j].value)) != -1) {
								A_ME11.options[j].disabled = true;
								A_ME11.options[j].classList.add('prohibited');
						}
					}
					for(j = A_ME12.length - 1; j >= 0; j--){
							if(parseInt(arEx.indexOf(A_ME12.options[j].value)) != -1) {
								A_ME12.options[j].disabled = true;
								A_ME12.options[j].classList.add('prohibited');
							}
					}
				}
		} else {
			for(j = MALANGDO_ENCHANTS.length - 1; j >= 0; j--){
				A_ME11.options[j].disabled = A_ME12.options[j].disabled = false;
				A_ME11.options[j].classList.remove('prohibited');
				A_ME12.options[j].classList.remove('prohibited');
			}
		}

		if(ME_ENCHANTABLE[kID2][1] != 0) {
			var arEx = [];
			for(i=1;i< ME_ENCHANTABLE[kID2].length;i++){
				if(ME_ENCHANTABLE[kID2][i] != 0)
					arEx.push(ME_ENCHANTABLE[kID2][i].toString());
				else break;
			}

				for (j = A_ME21.length - 1; j >= 0; j--) {
					if(arEx.indexOf(A_ME21.options[j].value) != -1) {
						A_ME21.options[j].disabled = true;
						A_ME21.options[j].classList.add('prohibited');
					}
				}
				for (j = A_ME22.length - 1; j >= 0; j--) {
						if(arEx.indexOf(A_ME22.options[j].value) != -1) {
							A_ME22.options[j].disabled = true;
							A_ME22.options[j].classList.add('prohibited');
						}
				}
		} else {
			for(j = MALANGDO_ENCHANTS.length - 1; j >= 0; j--){
				A_ME21.options[j].disabled = A_ME22.options[j].disabled = false;
				A_ME21.options[j].classList.remove('prohibited');
				A_ME22.options[j].classList.remove('prohibited');
			}
		}
	}
	tRO_MalangdoEnchantment = [document.calcForm.A_ME11.value,document.calcForm.A_ME12.value,document.calcForm.A_ME21.value,document.calcForm.A_ME22.value];
}

//custom TalonRO Biolab Weapon Enchantment
function Click_BiolabWeaponEnchantment(w1, w2){
with(document.calcForm){
	var bEnchant1 = bEnchant2 = false;
	var kID1 = kID2 = 0;
	if(w1) {
			for(i=0; i<BE_ENCHANTABLE_WEAPON.length; i++) {
				if(BE_ENCHANTABLE_WEAPON[i][0] == w1) {
					bEnchant1 = true;
					kID1 = i;
					break;
				}
			}
	}
	if(w2) {
			for(i=0;i<BE_ENCHANTABLE_WEAPON.length;i++) {
				if(BE_ENCHANTABLE_WEAPON[i][0] == w2) {
					bEnchant2 = true;
					kID2 = i;
					break;
				}
			}
	}

	document.getElementById("T_BE1").style.display = ((bEnchant1) ? "" : "none");
	document.getElementById("T_BE2").style.display = ((bEnchant2) ? "" : "none");

	if(bEnchant1 == false) {
		document.calcForm.A_BE11.value = 0;
		document.calcForm.A_BE12.value = 0;
	}
	if(bEnchant2 == false) {
		document.calcForm.A_BE21.value = 0;
		document.calcForm.A_BE22.value = 0;
	}

	tRO_BiolabWeaponEnchantment = [document.calcForm.A_BE11.value,document.calcForm.A_BE12.value,document.calcForm.A_BE21.value,document.calcForm.A_BE22.value];
}}

function Click_EdenWeaponEnchantment(w1,w2){

	var bEnchant1 = bEnchant2 = false;
	if(w1) {
			for(i=0; i<EDEN_ENCHANTABLE_WEAPON.length; i++) {
				if(EDEN_ENCHANTABLE_WEAPON[i][0] == w1) {
					bEnchant1 = true;
					break;
				}
			}
	}
	if(w2) {
			for(i=0;i<EDEN_ENCHANTABLE_WEAPON.length;i++) {
				if(EDEN_ENCHANTABLE_WEAPON[i][0] == w2) {
					bEnchant2 = true;
					break;
				}
			}
	}

	document.getElementById("T_EE1").style.display = ((bEnchant1) ? "" : "none");
	document.getElementById("T_EE2").style.display = ((bEnchant2) ? "" : "none");

	if(bEnchant1 == false) {
		document.calcForm.A_EE11.value = 0;
		document.calcForm.A_EE12.value = 0;
		document.calcForm.A_EE13.value = 0;
	}
	if(bEnchant2 == false) {
		document.calcForm.A_EE21.value = 0;
		document.calcForm.A_EE22.value = 0;
		document.calcForm.A_EE23.value = 0;
	}

	with(document.calcForm){
		//Populate option for slot 2 depending on choice of slot 1
		//Weapon 1
		switch(A_EE11.value) {
		case "172":
			if (!(A_EE12.value >= 2030 && A_EE12.value <= 2039)) {
				//Add Physical Damage 10% vs Race Option for Enchant slot 2.
				removeOptions(A_EE12);
				A_EE12.options[0] = new Option("(Eden Enchant "+ A_EE12.name.substr(-1) +")",0);
				for(i=0; i<EDEN_ENCHANTS_WEAPON_SECOND_PHYSICAL.length; i++) {
					A_EE12.options[i+1] = new Option(EDEN_ENCHANTS_WEAPON_SECOND_PHYSICAL[i][1],EDEN_ENCHANTS_WEAPON_SECOND_PHYSICAL[i][0]);
				}
			}
			break;
		case "892":
			if (!(A_EE12.value >= 2170 && A_EE12.value <= 2179)) {
				//Add Magical Damage 5% vs Race Option for Enchant slot 2.
				removeOptions(A_EE12);
				A_EE12.options[0] = new Option("(Eden Enchant "+ A_EE12.name.substr(-1) +")",0);
				for(i=0; i<EDEN_ENCHANTS_WEAPON_SECOND_MAGICAL.length; i++) {
					A_EE12.options[i+1] = new Option(EDEN_ENCHANTS_WEAPON_SECOND_MAGICAL[i][1],EDEN_ENCHANTS_WEAPON_SECOND_MAGICAL[i][0]);
				}
			}
			break;
		default:
			//Clear weapon 1 slot 2
			removeOptions(A_EE12);
			A_EE12.options[0] = new Option("(Eden Enchant "+ A_EE12.name.substr(-1) +")",0);
		}

		//Weapon 2
		switch(A_EE21.value) {
		case "172":
			if (!(A_EE22.value >= 2030 && A_EE22.value <= 2039)) {
				//Add Physical Damage 10% vs Race Option for Enchant slot 2.
				removeOptions(A_EE22);
				A_EE22.options[0] = new Option("(Eden Enchant 2-"+ A_EE22.name.substr(-1) +")",0);
				for(i=0; i<EDEN_ENCHANTS_WEAPON_SECOND_PHYSICAL.length; i++) {
					A_EE22.options[i+1] = new Option(EDEN_ENCHANTS_WEAPON_SECOND_PHYSICAL[i][1],EDEN_ENCHANTS_WEAPON_SECOND_PHYSICAL[i][0]);
				}
			}
			break;
		case "892":
			if (!(A_EE22.value >= 2170 && A_EE22.value <= 2179)) {
				//Add Magical Damage 5% vs Race Option for Enchant slot 2.
				removeOptions(A_EE22);
				A_EE22.options[0] = new Option("(Eden Enchant 2-"+ A_EE22.name.substr(-1) +")",0);
				for(i=0; i<EDEN_ENCHANTS_WEAPON_SECOND_MAGICAL.length; i++) {
					A_EE22.options[i+1] = new Option(EDEN_ENCHANTS_WEAPON_SECOND_MAGICAL[i][1],EDEN_ENCHANTS_WEAPON_SECOND_MAGICAL[i][0]);
				}
			}
			break;
		default:
			//Clear weapon 2 slot 2
			removeOptions(A_EE22);
			A_EE22.options[0] = new Option("(Eden Enchant "+ A_EE22.name.substr(-1) +")",0);
		}

		//Populate option for slot 3 depending on choice of slot 1 and slot 2
		//Weapon 1
		var EE13_Value = A_EE13.value;

		var option1Text = option2Text = "";

		for (i = EDEN_ENCHANTS_WEAPON_FIRST.length - 1; i >= 0; i--) {
			if (EDEN_ENCHANTS_WEAPON_FIRST[i][0] == A_EE11.value) {
				option1Text = EDEN_ENCHANTS_WEAPON_FIRST[i][1];
				break;
			}
		}

		if (A_EE12.value >= 2030 && A_EE12.value <= 2039) {
			for (i = EDEN_ENCHANTS_WEAPON_SECOND_PHYSICAL.length - 1; i >= 0; i--) {
				if (EDEN_ENCHANTS_WEAPON_SECOND_PHYSICAL[i][0] == A_EE12.value) {
					option2Text = EDEN_ENCHANTS_WEAPON_SECOND_PHYSICAL[i][1];
					break;
				}
			}
		}

		if (A_EE12.value >= 2170 && A_EE12.value <= 2179) {
			for (i = EDEN_ENCHANTS_WEAPON_SECOND_MAGICAL.length - 1; i >= 0; i--) {
				if (EDEN_ENCHANTS_WEAPON_SECOND_MAGICAL[i][0] == A_EE12.value) {
					option2Text = EDEN_ENCHANTS_WEAPON_SECOND_MAGICAL[i][1];
					break;
				}
			}
		}

		//Clear weapon 1 slot 3, populate options based on slot 1 & 2
		removeOptions(A_EE13);
		A_EE13.options[0] = new Option("(Eden Enchant "+ A_EE13.name.substr(-1) +")",0);
		A_EE13.options[1] = new Option(option1Text,A_EE11.value);
		A_EE13.options[2] = new Option(option2Text,A_EE12.value);

		A_EE13.value = 0;
		if (EE13_Value == A_EE11.value) {
			A_EE13.value = A_EE11.value;
		}
		if (EE13_Value == A_EE12.value) {
			A_EE13.value = A_EE12.value;
		}

		//Weapon 2
		var EE23_Value = A_EE23.value;

		var option1Text = option2Text = "";

		for (i = EDEN_ENCHANTS_WEAPON_FIRST.length - 1; i >= 0; i--) {
			if (EDEN_ENCHANTS_WEAPON_FIRST[i][0] == A_EE21.value) {
				option1Text = EDEN_ENCHANTS_WEAPON_FIRST[i][1];
				break;
			}
		}

		if (A_EE22.value >= 2030 && A_EE22.value <= 2039) {
			for (i = EDEN_ENCHANTS_WEAPON_SECOND_PHYSICAL.length - 1; i >= 0; i--) {
				if (EDEN_ENCHANTS_WEAPON_SECOND_PHYSICAL[i][0] == A_EE22.value) {
					option2Text = EDEN_ENCHANTS_WEAPON_SECOND_PHYSICAL[i][1];
					break;
				}
			}
		}

		if (A_EE22.value >= 2170 && A_EE22.value <= 2179) {
			for (i = EDEN_ENCHANTS_WEAPON_SECOND_MAGICAL.length - 1; i >= 0; i--) {
				if (EDEN_ENCHANTS_WEAPON_SECOND_MAGICAL[i][0] == A_EE22.value) {
					option2Text = EDEN_ENCHANTS_WEAPON_SECOND_MAGICAL[i][1];
					break;
				}
			}
		}

		//Clear weapon 2 slot 3, populate options based on slot 1 & 2
		removeOptions(A_EE23);
		A_EE23.options[0] = new Option("(Eden Enchant 2-"+ A_EE23.name.substr(-1) +")",0);
		A_EE23.options[1] = new Option(option1Text,A_EE21.value);
		A_EE23.options[2] = new Option(option2Text,A_EE22.value);

		A_EE23.value = 0;
		if (EE23_Value == A_EE21.value) {
			A_EE23.value = A_EE21.value;
		}
		if (EE23_Value == A_EE22.value) {
			A_EE23.value = A_EE22.value;
		}
	}

	tRO_EdenWeaponEnchantment = [document.calcForm.A_EE11.value,document.calcForm.A_EE12.value,document.calcForm.A_EE13.value,document.calcForm.A_EE21.value,document.calcForm.A_EE22.value,document.calcForm.A_EE23.value];
}

//custom TalonRO Headgear Enchantment (Biolab & Eden)
function Click_HeadgearEnchantment(h){
with(document.calcForm){
	var bEnchant;
	if(h) {
			for(i=0; i<BE_ENCHANTABLE_ARMOR.length; i++) {
				if(BE_ENCHANTABLE_ARMOR[i][0] == h) {
					bEnchant = "biolab";
					break;
				}
			}
	}
	if(h) {
			for(i=0; i<EDEN_ENCHANTABLE_HAT.length; i++) {
				if(EDEN_ENCHANTABLE_HAT[i][0] == h) {
					bEnchant = "eden";
					break;
				}
			}
	}

	//Hide other enchant options
	document.getElementById("T_EEH").style.display = "none";
	document.getElementById("T_BEH1").style.display = "none";
	document.getElementById("T_BEH2").style.display = "none";
	document.getElementById("T_HEAD1_TEMP").style.display = "none";
	document.getElementById("T_HEAD2_TEMP").style.display = "none";

	switch(bEnchant) {
    case "biolab":
		//Show enchant option for Biolab
		document.getElementById("T_BEH1").style.display = "";
		document.getElementById("T_BEH2").style.display = "";
		//Clear other enchant option values
		document.calcForm.A_EEH.value = 0;
        break;
    case "eden":
		//Show enchant option for Eden
		document.getElementById("T_EEH").style.display = "";
		document.getElementById("T_HEAD2_TEMP").style.display = "";
		//Clear other enchant option values
		document.calcForm.A_BEH1.value = 0;
		document.calcForm.A_BEH2.value = 0;
        break;
    default:
		//Show blank placeholder <td>
		document.getElementById("T_HEAD1_TEMP").style.display = "";
		document.getElementById("T_HEAD2_TEMP").style.display = "";
		//Clear all enchant option for headgear
		document.calcForm.A_BEH1.value = 0;
		document.calcForm.A_BEH2.value = 0;
		document.calcForm.A_EEH.value = 0;
	}

	tRO_BiolabArmorEnchantment[0] = document.calcForm.A_BEH1.value;
	tRO_BiolabArmorEnchantment[1] = document.calcForm.A_BEH2.value;
	tRO_EdenArmorEnchantment[0] = document.calcForm.A_EEH.value;
}}

//custom TalonRO Biolab Armor Enchantment
function Click_BiolabArmorBodyEnchantment(a){
with(document.calcForm){
	var bEnchant = false;
	if(a) {
			for(i=0; i<BE_ENCHANTABLE_ARMOR.length; i++) {
				if(BE_ENCHANTABLE_ARMOR[i][0] == a) {
					bEnchant = true;
					break;
				}
			}
	}

	document.getElementById("T_BEA").style.display = ((bEnchant) ? "" : "none");

	if(bEnchant == false) {
		document.calcForm.A_BEA1.value = 0;
		document.calcForm.A_BEA2.value = 0;
	}

	tRO_BiolabArmorEnchantment[2] = document.calcForm.A_BEA1.value;
	tRO_BiolabArmorEnchantment[3] = document.calcForm.A_BEA2.value;
}}

//custom TalonRO Eden Armor Enchantment
function Click_EdenArmorBodyEnchantment(a){
with(document.calcForm){
	var bEnchant = false;
	if(a) {
			for(i=0; i<EDEN_ENCHANTABLE_ARMOR.length; i++) {
				if(EDEN_ENCHANTABLE_ARMOR[i][0] == a) {
					bEnchant = true;
					break;
				}
			}
	}

	document.getElementById("T_EEA").style.display = ((bEnchant) ? "" : "none");

	if(bEnchant == false) {
		document.calcForm.A_EEA1.value = 0;
		document.calcForm.A_EEA2.value = 0;
	}

	tRO_EdenArmorEnchantment[1] = document.calcForm.A_EEA1.value;
	tRO_EdenArmorEnchantment[2] = document.calcForm.A_EEA2.value;
}}

//custom TalonRO Mora Armor Enchantment
function Click_MoraArmorEnchantment(a){
with(document.calcForm){
	var bEnchant = false;
	if(a) {
			for(i=0; i<MORA_ENCHANTABLE.length; i++) {
				if(MORA_ENCHANTABLE[i][0] == a) {
					bEnchant = true;
					break;
				}
			}
	}

	document.getElementById("T_MORAEA").style.display = ((bEnchant) ? "" : "none");

	if(bEnchant == false) {
		document.calcForm.A_MORAEA1.value = 0;
		document.calcForm.A_MORAEA2.value = 0;
		document.calcForm.A_MORAEA3.value = 0;
	}

	tRO_MoraEnchantment[0] = document.calcForm.A_MORAEA1.value;
	tRO_MoraEnchantment[1] = document.calcForm.A_MORAEA2.value;
	tRO_MoraEnchantment[2] = document.calcForm.A_MORAEA3.value;
}}

//custom TalonRO Biolab Shield Enchantment
function Click_BiolabArmorShieldEnchantment(s){
with(document.calcForm){
	var bEnchant = false;
	if(s) {
			for(i=0; i<BE_ENCHANTABLE_ARMOR.length; i++) {
				if(BE_ENCHANTABLE_ARMOR[i][0] == s) {
					bEnchant = true;
					break;
				}
			}
	}

	if (bEnchant) {
		document.getElementById("T_BES1_TEMP").style.display = "none";
		document.getElementById("T_BES2_TEMP").style.display = "none";
		document.getElementById("T_BES1").style.display = "";
		document.getElementById("T_BES2").style.display = "";
	} else {
		document.getElementById("T_BES1").style.display = "none";
		document.getElementById("T_BES2").style.display = "none";
		document.getElementById("T_BES1_TEMP").style.display = "";
		document.getElementById("T_BES2_TEMP").style.display = "";
	}

	if(bEnchant == false) {
		document.calcForm.A_BES1.value = 0;
		document.calcForm.A_BES2.value = 0;
	}

	tRO_BiolabArmorEnchantment[4] = document.calcForm.A_BES1.value;
	tRO_BiolabArmorEnchantment[5] = document.calcForm.A_BES2.value;
}}

//custom TalonRO Garment Enchantment (Biolab & Eden)
function Click_GarmentEnchantment(g){
with(document.calcForm){
	var bEnchant;
	if(g) {
			for(i=0; i<BE_ENCHANTABLE_ARMOR.length; i++) {
				if(BE_ENCHANTABLE_ARMOR[i][0] == g) {
					bEnchant = "biolab";
					break;
				}
			}
	}
	if(g) {
			for(i=0; i<EDEN_ENCHANTABLE_ARMOR.length; i++) {
				if(EDEN_ENCHANTABLE_ARMOR[i][0] == g) {
					bEnchant = "eden";
					break;
				}
			}
	}

	switch(bEnchant) {
    case "biolab":
		//Hide other enchant option for garment
		document.getElementById("T_EEG1").style.display = "none";
		document.getElementById("T_EEG2").style.display = "none";
		document.getElementById("T_GAR1_TEMP").style.display = "none";
		document.getElementById("T_GAR2_TEMP").style.display = "none";
		//Show enchant option for Biolab garment
		document.getElementById("T_BEG1").style.display = "";
		document.getElementById("T_BEG2").style.display = "";
		//Clear other enchant option values
		document.calcForm.A_EEG1.value = 0;
		document.calcForm.A_EEG2.value = 0;
        break;
    case "eden":
		//Hide other enchant option for garment
		document.getElementById("T_BEG1").style.display = "none";
		document.getElementById("T_BEG2").style.display = "none";
		document.getElementById("T_GAR1_TEMP").style.display = "none";
		document.getElementById("T_GAR2_TEMP").style.display = "none";
		//Show enchant option for Eden garment
		document.getElementById("T_EEG1").style.display = "";
		document.getElementById("T_EEG2").style.display = "";
		//Clear other enchant option values
		document.calcForm.A_BEG1.value = 0;
		document.calcForm.A_BEG2.value = 0;
        break;
    default:
		//Hide all enchant option for garment
		document.getElementById("T_BEG1").style.display = "none";
		document.getElementById("T_BEG2").style.display = "none";
		document.getElementById("T_EEG1").style.display = "none";
		document.getElementById("T_EEG2").style.display = "none";
		//Show blank placeholder <td>
		document.getElementById("T_GAR1_TEMP").style.display = "";
		document.getElementById("T_GAR2_TEMP").style.display = "";
		//Clear all enchant option for garment
		document.calcForm.A_BEG1.value = 0;
		document.calcForm.A_BEG2.value = 0;
		document.calcForm.A_EEG1.value = 0;
		document.calcForm.A_EEG2.value = 0;
	}

	tRO_BiolabArmorEnchantment[6] = document.calcForm.A_BEG1.value;
	tRO_BiolabArmorEnchantment[7] = document.calcForm.A_BEG2.value;
	tRO_EdenArmorEnchantment[3] = document.calcForm.A_EEG1.value;
	tRO_EdenArmorEnchantment[4] = document.calcForm.A_EEG2.value;
}}

//custom TalonRO El Dicaste Garment Enchantment
function Click_EDGarmentEnchantment(g){
with(document.calcForm){
	var bEnchant = false;
	if(g) {
			for(i=0; i<ED_ENCHANTABLE.length; i++) {
				if(ED_ENCHANTABLE[i][0] == g) {
					bEnchant = true;
					break;
				}
			}
	}

	document.getElementById("T_EDG").style.display = ((bEnchant) ? "" : "none");

	if(bEnchant == false) {
		document.calcForm.A_EDG1.value = 0;
		document.calcForm.A_EDG2.value = 0;
		document.calcForm.A_EDG3.value = 0;
	}

	tRO_EDEnchantment[0] = document.calcForm.A_EDG1.value;
	tRO_EDEnchantment[1] = document.calcForm.A_EDG2.value;
	tRO_EDEnchantment[2] = document.calcForm.A_EDG3.value;
}}

//custom TalonRO Mora Garment Enchantment
function Click_MoraGarmentEnchantment(g){
with(document.calcForm){
	var bEnchant = false;
	if(g) {
			for(i=0; i<MORA_ENCHANTABLE.length; i++) {
				if(MORA_ENCHANTABLE[i][0] == g) {
					bEnchant = true;
					break;
				}
			}
	}

	document.getElementById("T_MORAEG").style.display = ((bEnchant) ? "" : "none");

	if(bEnchant == false) {
		document.calcForm.A_MORAEG1.value = 0;
		document.calcForm.A_MORAEG2.value = 0;
		document.calcForm.A_MORAEG3.value = 0;
	}

	tRO_MoraEnchantment[3] = document.calcForm.A_MORAEG1.value;
	tRO_MoraEnchantment[4] = document.calcForm.A_MORAEG2.value;
	tRO_MoraEnchantment[5] = document.calcForm.A_MORAEG3.value;
}}

//custom TalonRO Eden Footgear Enchantment
function Click_FootgearEnchantment(f) {
with(document.calcForm){
	var bEnchant = false;
	if(f) {
			for(i=0; i<EDEN_ENCHANTABLE_ARMOR.length; i++) {
				if(EDEN_ENCHANTABLE_ARMOR[i][0] == f) {
					bEnchant = true;
					break;
				}
			}
	}

	if (bEnchant) {
		document.getElementById("T_FOOT1_TEMP").style.display = "none";
		document.getElementById("T_FOOT2_TEMP").style.display = "none";
		document.getElementById("T_EEF1").style.display = "";
		document.getElementById("T_EEF2").style.display = "";
	} else {
		document.getElementById("T_EEF1").style.display = "none";
		document.getElementById("T_EEF2").style.display = "none";
		document.getElementById("T_FOOT1_TEMP").style.display = "";
		document.getElementById("T_FOOT2_TEMP").style.display = "";
	}

	if(bEnchant == false) {
		document.calcForm.A_EEF1.value = 0;
		document.calcForm.A_EEF2.value = 0;
	}

	tRO_EdenArmorEnchantment[5] = document.calcForm.A_EEF1.value;
	tRO_EdenArmorEnchantment[6] = document.calcForm.A_EEF2.value;
}}

//custom TalonRO El Dicaste Footgear Enchantment
function Click_EDFootgearEnchantment(f){
with(document.calcForm){
	var bEnchant = false;
	if(f) {
			for(i=0; i<ED_ENCHANTABLE.length; i++) {
				if(ED_ENCHANTABLE[i][0] == f) {
					bEnchant = true;
					break;
				}
			}
	}

	document.getElementById("T_EDF").style.display = ((bEnchant) ? "" : "none");

	if(bEnchant == false) {
		document.calcForm.A_EDF1.value = 0;
		document.calcForm.A_EDF2.value = 0;
		document.calcForm.A_EDF3.value = 0;
	}

	tRO_EDEnchantment[3] = document.calcForm.A_EDF1.value;
	tRO_EDEnchantment[4] = document.calcForm.A_EDF2.value;
	tRO_EDEnchantment[5] = document.calcForm.A_EDF3.value;
}}

//custom TalonRO Biolab Accessory Enchantment
function Click_AccessoryEnchantment(a1, a2){
with(document.calcForm){
	var bEnchant1 = bEnchant2 = false;
	if(a1) {
			for(i=0; i<BE_ENCHANTABLE_ARMOR.length; i++) {
				if(BE_ENCHANTABLE_ARMOR[i][0] == a1) {
					bEnchant1 = true;
					break;
				}
			}
	}
	if(a2) {
			for(i=0;i<BE_ENCHANTABLE_ARMOR.length;i++) {
				if(BE_ENCHANTABLE_ARMOR[i][0] == a2) {
					bEnchant2 = true;
					break;
				}
			}
	}

	if (bEnchant1) {
		document.getElementById("T_BEAC11").style.display = "";
		document.getElementById("T_BEAC12").style.display = "";
		document.getElementById("T_ACC11_TEMP").style.display = "none";
		document.getElementById("T_ACC12_TEMP").style.display = "none";
	} else {
		document.getElementById("T_BEAC11").style.display = "none";
		document.getElementById("T_BEAC12").style.display = "none";
		document.getElementById("T_ACC11_TEMP").style.display = "";
		document.getElementById("T_ACC12_TEMP").style.display = "";
	}

	if (bEnchant2) {
		document.getElementById("T_BEAC21").style.display = "";
		document.getElementById("T_BEAC22").style.display = "";
		document.getElementById("T_ACC21_TEMP").style.display = "none";
		document.getElementById("T_ACC22_TEMP").style.display = "none";
	} else {
		document.getElementById("T_BEAC21").style.display = "none";
		document.getElementById("T_BEAC22").style.display = "none";
		document.getElementById("T_ACC21_TEMP").style.display = "";
		document.getElementById("T_ACC22_TEMP").style.display = "";
	}

	if(bEnchant1 == false) {
		document.calcForm.A_BEAC11.value = 0;
		document.calcForm.A_BEAC12.value = 0;
	}
	if(bEnchant2 == false) {
		document.calcForm.A_BEAC21.value = 0;
		document.calcForm.A_BEAC22.value = 0;
	}

	tRO_BiolabArmorEnchantment[8] = document.calcForm.A_BEAC11.value;
	tRO_BiolabArmorEnchantment[9] = document.calcForm.A_BEAC12.value;
	tRO_BiolabArmorEnchantment[10] = document.calcForm.A_BEAC21.value;
	tRO_BiolabArmorEnchantment[11] = document.calcForm.A_BEAC22.value;
}}

//custom TalonRO Light of El Dicaste Enchantment
function Click_LOEDEnchantment(ac1, ac2){
with(document.calcForm){
	var bEnchant1 = bEnchant2 = false;
	if(ac1) {
			for(i=0; i<ED_LIGHT_OF_EL_DICASTE.length; i++) {
				if(ED_LIGHT_OF_EL_DICASTE[i][0] == ac1) {
					bEnchant1 = true;
					break;
				}
			}
	}
	if(ac2) {
			for(i=0; i<ED_LIGHT_OF_EL_DICASTE.length; i++) {
				if(ED_LIGHT_OF_EL_DICASTE[i][0] == ac2) {
					bEnchant2 = true;
					break;
				}
			}
	}

	document.getElementById("T_EDLOED1").style.display = ((bEnchant1) ? "" : "none");
	document.getElementById("T_EDLOED2").style.display = ((bEnchant2) ? "" : "none");

	if(bEnchant1 == false) {
		document.calcForm.A_EDLOED11.value = 0;
		document.calcForm.A_EDLOED12.value = 0;
		document.calcForm.A_EDLOED13.value = 0;
	}
	if(bEnchant2 == false) {
		document.calcForm.A_EDLOED21.value = 0;
		document.calcForm.A_EDLOED22.value = 0;
		document.calcForm.A_EDLOED23.value = 0;
	}

	tRO_EDEnchantment[6] = document.calcForm.A_EDLOED11.value;
	tRO_EDEnchantment[7] = document.calcForm.A_EDLOED12.value;
	tRO_EDEnchantment[8] = document.calcForm.A_EDLOED13.value;
	tRO_EDEnchantment[9] = document.calcForm.A_EDLOED21.value;
	tRO_EDEnchantment[10] = document.calcForm.A_EDLOED22.value;
	tRO_EDEnchantment[11] = document.calcForm.A_EDLOED23.value;
}}

//custom TalonRO El Dicaste Accessory Enchantment
function Click_EDAccessoryEnchantment(ac1, ac2){
with(document.calcForm){
	var kID1 = kID2 = 0;
	var bEnchant1 = bEnchant2 = false;
	if(ac1) {
			for(i=0; i<ED_ENCHANTABLE.length; i++) {
				if(ED_ENCHANTABLE[i][0] == ac1) {
					bEnchant1 = true;
					kID1 = i;
					break;
				}
			}
	}
	if(ac2) {
			for(i=0; i<ED_ENCHANTABLE.length; i++) {
				if(ED_ENCHANTABLE[i][0] == ac2) {
					bEnchant2 = true;
					kID2 = i;
					break;
				}
			}
	}

	document.getElementById("T_EDAC1").style.display = ((bEnchant1) ? "" : "none");
	document.getElementById("T_EDAC2").style.display = ((bEnchant2) ? "" : "none");

	if(bEnchant1 == false) {
		document.calcForm.A_EDAC11.value = 0;
		document.calcForm.A_EDAC12.value = 0;
		document.calcForm.A_EDAC13.value = 0;
	}
	if(bEnchant2 == false) {
		document.calcForm.A_EDAC21.value = 0;
		document.calcForm.A_EDAC22.value = 0;
		document.calcForm.A_EDAC23.value = 0;
	}

	// with(document.calcForm){
	// 	if(ED_ENCHANTABLE[kID1][1] != 0) {
	// 			var arEx = [];
	// 			for(i=1; i<ED_ENCHANTABLE[kID1].length; i++){
	// 				if(ED_ENCHANTABLE[kID1][i] != 0) {
	// 					arEx.push(ED_ENCHANTABLE[kID1][i].toString());
	// 				}
	// 				else break;
	// 			}
	// 			if(arEx.length > 0 ) {
	// 				for (j = A_EDAC13.length - 1; j >= 0; j--) {
	// 					if(parseInt(arEx.indexOf(A_EDAC13.options[j].value)) != -1) {
	// 							A_EDAC13.options[j].disabled = true;
	// 							A_EDAC13.options[j].classList.add('prohibited');
	// 					}
	// 				}
	// 			}
	// 	} else {
	// 		for(j = ED_ENCHANTS_SLOT_THREE.length - 1; j >= 0; j--){
	// 			A_EDAC13.options[j].disabled = false;
	// 			A_EDAC13.options[j].classList.remove('prohibited');
	// 		}
	// 	}

	// 	if(ED_ENCHANTABLE[kID2][1] != 0) {
	// 			var arEx = [];
	// 			for(i=1; i<ED_ENCHANTABLE[kID1].length; i++){
	// 				if(ED_ENCHANTABLE[kID1][i] != 0) {
	// 					arEx.push(ED_ENCHANTABLE[kID1][i].toString());
	// 				}
	// 				else break;
	// 			}
	// 			if(arEx.length > 0 ) {
	// 				for (j = A_EDAC23.length - 1; j >= 0; j--) {
	// 					if(parseInt(arEx.indexOf(A_EDAC23.options[j].value)) != -1) {
	// 							A_EDAC23.options[j].disabled = true;
	// 							A_EDAC23.options[j].classList.add('prohibited');
	// 					}
	// 				}
	// 			}
	// 	} else {
	// 		for(j = ED_ENCHANTS_SLOT_THREE.length - 1; j >= 0; j--){
	// 			A_EDAC23.options[j].disabled = false;
	// 			A_EDAC23.options[j].classList.remove('prohibited');
	// 		}
	// 	}
	// }

	tRO_EDEnchantment[12] = document.calcForm.A_EDAC11.value;
	tRO_EDEnchantment[13] = document.calcForm.A_EDAC12.value;
	tRO_EDEnchantment[14] = document.calcForm.A_EDAC13.value;
	tRO_EDEnchantment[15] = document.calcForm.A_EDAC21.value;
	tRO_EDEnchantment[16] = document.calcForm.A_EDAC22.value;
	tRO_EDEnchantment[17] = document.calcForm.A_EDAC23.value;
}}

//custom TalonRO Mora Accessory Enchantment
function Click_MoraAccessoryEnchantment(ac1, ac2){
with(document.calcForm){
	var bEnchant1 = bEnchant2 = false;
	if(ac1) {
			for(i=0; i<MORA_ENCHANTABLE.length; i++) {
				if(MORA_ENCHANTABLE[i][0] == ac1) {
					bEnchant1 = true;
					break;
				}
			}
	}
	if(ac2) {
			for(i=0; i<MORA_ENCHANTABLE.length; i++) {
				if(MORA_ENCHANTABLE[i][0] == ac2) {
					bEnchant2 = true;
					break;
				}
			}
	}

	document.getElementById("T_MORAEAC1").style.display = ((bEnchant1) ? "" : "none");
	document.getElementById("T_MORAEAC2").style.display = ((bEnchant2) ? "" : "none");

	if(bEnchant1 == false) {
		document.calcForm.A_MORAEAC11.value = 0;
		document.calcForm.A_MORAEAC12.value = 0;
		document.calcForm.A_MORAEAC13.value = 0;
	}
	if(bEnchant2 == false) {
		document.calcForm.A_MORAEAC21.value = 0;
		document.calcForm.A_MORAEAC22.value = 0;
		document.calcForm.A_MORAEAC23.value = 0;
	}

	tRO_MoraEnchantment[6] = document.calcForm.A_MORAEAC11.value;
	tRO_MoraEnchantment[7] = document.calcForm.A_MORAEAC12.value;
	tRO_MoraEnchantment[8] = document.calcForm.A_MORAEAC13.value;
	tRO_MoraEnchantment[9] = document.calcForm.A_MORAEAC21.value;
	tRO_MoraEnchantment[10] = document.calcForm.A_MORAEAC22.value;
	tRO_MoraEnchantment[11] = document.calcForm.A_MORAEAC23.value;
}}

function Click_Skill9SW(){
with(document.calcForm){
	n_Skill9SW = A9_SKILLSW.checked;
	if(n_Skill9SW){
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: collapse; width: auto;">';
		str += '<TR><TD id="A9TD" Colspan="18" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">Manual Edits <SPAN id="A9used"></SPAN></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab12" type="checkbox" name="A9_SKILLSW" onClick="Click_Skill9SW()"><label for="lab12">Show</label></div></TD></TR>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>Damage Modifier for:</B></Font></TD></TR>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>- Race</B></Font></TD></TR>';
		str += '<tr><TD Colspan="2" id="EN900"></TD><TD id="EN901"></TD><TD Colspan="2" id="EN902"></TD><TD id="EN903"></TD>';
		str += '<TD Colspan="2" id="EN904"></TD><TD id="EN905"></TD><TD Colspan="2" id="EN906"></TD><TD id="EN907"></TD><td></td></tr>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>- Element</B></Font></TD></TR>';
		str += '<tr><TD Colspan="2" id="EN908"></TD><TD id="EN909"></TD><TD Colspan="2" id="EN910"></TD><TD id="EN911"></TD>';
		str += '<TD Colspan="2" id="EN912"></TD><TD id="EN913"></TD><TD Colspan="2" id="EN914"></TD><TD id="EN915"></TD><td></td></tr>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>- Size</B></Font></TD></TR>';
		str += '<tr><TD Colspan="2" id="EN916"></TD><TD id="EN917"></TD><TD Colspan="2" id="EN918"></TD><TD id="EN919"></TD><TD Colspan="2" id="EN920"></TD><TD id="EN921"></TD></tr>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>- Special "Races"</B></Font></TD></TR>';
		str += '<tr><TD Colspan="2" id="EN922"></TD><TD id="EN923"></TD><TD Colspan="2" id="EN924"></TD><TD id="EN925"></TD>';
		str += '<TD Colspan="2" id="EN926"></TD><TD id="EN927"></TD><TD Colspan="2" id="EN928"></TD><TD id="EN929"></TD><td></td></tr>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>Status</B></Font></TD></TR>';
		str += '<tr><TD Colspan="2" id="EN964"></TD><TD id="EN965"></TD><TD Colspan="2" id="EN966"></TD><TD id="EN967"></TD><TD Colspan="2" id="EN968"></TD><TD id="EN969"></TD><TD Colspan="2" id="EN970"></TD><TD id="EN971"></TD></tr>';
		str += '<tr><td></td><td></td><td></td><TD Colspan="2" id="EN972"></TD><TD id="EN973"></TD><TD Colspan="2" id="EN974"></TD><TD id="EN975"></TD></tr>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>Extra Status</B></Font></TD></TR>';
		str += '<tr><TD Colspan="2" id="EN930"></TD><TD id="EN931"></TD><TD Colspan="2" id="EN932"></TD><TD id="EN933"></TD>';
		str += '<TD Colspan="2" id="EN934"></TD><TD id="EN935"></TD><TD Colspan="2" id="EN936"></TD><TD id="EN937"></TD><td></td></tr>';
		str += '<tr><TD Colspan="2" id="EN938"></TD><TD id="EN939"></TD><TD Colspan="2" id="EN940"></TD><TD id="EN941"></TD><TD Colspan="2" id="EN942"></TD><TD id="EN943"></TD>';
		str += '<TD Colspan="2" id="EN944"></TD><TD id="EN945"></TD><td></td></tr>';
		str += '<tr><TD Colspan="2" id="EN946"></TD><TD id="EN947"></TD><TD Colspan="2" id="EN948"></TD><TD id="EN949"></TD><TD Colspan="2" id="EN950"></TD><TD id="EN951"></TD><TD Colspan="2" id="EN952"></TD><TD id="EN953"></TD></tr>';
		str += '<tr><TD Colspan="2" id="EN954"></TD><TD id="EN955"></TD><TD Colspan="2" id="EN956"></TD><TD id="EN957"></TD><TD Colspan="2" id="EN958"></TD><TD id="EN959"></TD><TD Colspan="2" id="EN976"></TD><TD id="EN977"></TD></tr>';
		str += '<tr><TD Colspan="2" id="EN960"></TD><TD id="EN961"></TD><TD Colspan="2" id="EN962"></TD><TD id="EN963"></TD></tr>';
		str += '</table>';

		myInnerHtml("ID_ARG",str,0);
		A9_SKILLSW.checked = 1;

		myInnerHtml("EN900",'<select name="A9_Skill0" onChange="Click_A9(1)"></select>',0);
		for(i=0;i<SyuzokuOBJ.length;i++){
			document.calcForm.A9_Skill0.options[i] = new Option(SyuzokuOBJ[i],i);
			document.calcForm.A9_Skill0.value=0;}
		myInnerHtml("EN901",'<input type="text" onChange="StAllCalc()" name="ARG_RC0" value="0" size=1>',0);
		myInnerHtml("EN902",'<select name="A9_Skill1" onChange="Click_A9(1)"></select>',0);
		for(i=0;i<SyuzokuOBJ.length;i++){
			document.calcForm.A9_Skill1.options[i] = new Option(SyuzokuOBJ[i],i);
			document.calcForm.A9_Skill1.value=0;}
		myInnerHtml("EN903",'<input type="text" onChange="StAllCalc()" name="ARG_RC1" value="0" size=1>',0);
		myInnerHtml("EN904",'<select name="A9_Skill2" onChange="Click_A9(1)"></select>',0);
		for(i=0;i<SyuzokuOBJ.length;i++){
			document.calcForm.A9_Skill2.options[i] = new Option(SyuzokuOBJ[i],i);
			document.calcForm.A9_Skill2.value=0;}
		myInnerHtml("EN905",'<input type="text" onChange="StAllCalc()" name="ARG_RC2" value="0" size=1>',0);
		myInnerHtml("EN906",'<select name="A9_Skill3" onChange="Click_A9(1)"></select>',0);
		for(i=0;i<SyuzokuOBJ.length;i++){
			document.calcForm.A9_Skill3.options[i] = new Option(SyuzokuOBJ[i],i);
			document.calcForm.A9_Skill3.value=0;}
		myInnerHtml("EN907",'<input type="text" onChange="StAllCalc()" name="ARG_RC3" value="0" size=1>',0);
		myInnerHtml("EN908",'<select name="A9_Skill4" onChange="Click_A9(1)"></select>',0);
		for(i=0;i<ZokuseiOBJ2.length;i++){
			document.calcForm.A9_Skill4.options[i] = new Option(ZokuseiOBJ2[i],i);
			document.calcForm.A9_Skill4.value=0;}
		myInnerHtml("EN909",'<input type="text" onChange="StAllCalc()" name="ARG_RC4" value="0" size=1>',0);
		myInnerHtml("EN910",'<select name="A9_Skill5" onChange="Click_A9(1)"></select>',0);
		for(i=0;i<ZokuseiOBJ2.length;i++){
			document.calcForm.A9_Skill5.options[i] = new Option(ZokuseiOBJ2[i],i);
			document.calcForm.A9_Skill5.value=0;}
		myInnerHtml("EN911",'<input type="text" onChange="StAllCalc()" name="ARG_RC5" value="0" size=1>',0);
		myInnerHtml("EN912",'<select name="A9_Skill6" onChange="Click_A9(1)"></select>',0);
		for(i=0;i<ZokuseiOBJ2.length;i++){
			document.calcForm.A9_Skill6.options[i] = new Option(ZokuseiOBJ2[i],i);
			document.calcForm.A9_Skill6.value=0;}
		myInnerHtml("EN913",'<input type="text" onChange="StAllCalc()" name="ARG_RC6" value="0" size=1>',0);
		myInnerHtml("EN914",'<select name="A9_Skill7" onChange="Click_A9(1)"></select>',0);
		for(i=0;i<ZokuseiOBJ2.length;i++){
			document.calcForm.A9_Skill7.options[i] = new Option(ZokuseiOBJ2[i],i);
			document.calcForm.A9_Skill7.value=0;}
		myInnerHtml("EN915",'<input type="text" onChange="StAllCalc()" name="ARG_RC7" value="0" size=1>',0);
		myInnerHtml("EN916",'<select name="A9_Skill8" onChange="Click_A9(1)"></select>',0);
		for(i=0;i<SizeOBJ.length;i++){
			document.calcForm.A9_Skill8.options[i] = new Option(SizeOBJ[i],i);
			document.calcForm.A9_Skill8.value=0;}
		myInnerHtml("EN917",'<input type="text" onChange="StAllCalc()" name="ARG_RC8" value="0" size=1>',0);
		myInnerHtml("EN918",'<select name="A9_Skill9" onChange="Click_A9(1)"></select>',0);
		for(i=0;i<SizeOBJ.length;i++){
			document.calcForm.A9_Skill9.options[i] = new Option(SizeOBJ[i],i);
			document.calcForm.A9_Skill9.value=0;}
		myInnerHtml("EN919",'<input type="text" onChange="StAllCalc()" name="ARG_RC9" value="0" size=1>',0);
		myInnerHtml("EN920",'<select name="A9_Skill10" onChange="Click_A9(1)"></select>',0);
		for(i=0;i<SizeOBJ.length;i++){
			document.calcForm.A9_Skill10.options[i] = new Option(SizeOBJ[i],i);
			document.calcForm.A9_Skill10.value=0;}
		myInnerHtml("EN921",'<input type="text" onChange="StAllCalc()" name="ARG_RC10" value="0" size=1>',0);
		myInnerHtml("EN922",'<select name="A9_Skill11" onChange="Click_A9(1)"></select>',0);
		SpecialTypeOBJ_c=["Goblin","Kobold","Orc","Golem","Guardian","Satan Morroc"]
		for(i=0;i<SpecialTypeOBJ_c.length;i++){
			document.calcForm.A9_Skill11.options[i] = new Option(SpecialTypeOBJ_c[i],i);
			document.calcForm.A9_Skill11.value=0;}
		myInnerHtml("EN923",'<input type="text" onChange="StAllCalc()" name="ARG_RC11" value="0" size=1>',0);
		myInnerHtml("EN924",'<select name="A9_Skill12" onChange="Click_A9(1)"></select>',0);
		for(i=0;i<SpecialTypeOBJ_c.length;i++){
			document.calcForm.A9_Skill12.options[i] = new Option(SpecialTypeOBJ_c[i],i);
			document.calcForm.A9_Skill12.value=0;}
		myInnerHtml("EN925",'<input type="text" onChange="StAllCalc()" name="ARG_RC12" value="0" size=1>',0);
		myInnerHtml("EN926",'<select name="A9_Skill13" onChange="Click_A9(1)"></select>',0);
		for(i=0;i<SpecialTypeOBJ_c.length;i++){
			document.calcForm.A9_Skill13.options[i] = new Option(SpecialTypeOBJ_c[i],i);
			document.calcForm.A9_Skill13.value=0;}
		myInnerHtml("EN927",'<input type="text" onChange="StAllCalc()" name="ARG_RC13" value="0" size=1>',0);
		myInnerHtml("EN928",'<select name="A9_Skill14" onChange="Click_A9(1)"></select>',0);
		for(i=0;i<SpecialTypeOBJ_c.length;i++){
			document.calcForm.A9_Skill14.options[i] = new Option(SpecialTypeOBJ_c[i],i);
			document.calcForm.A9_Skill14.value=0;}
		myInnerHtml("EN929",'<input type="text" onChange="StAllCalc()" name="ARG_RC14" value="0" size=1>',0);
		myInnerHtml("EN930",'+ MAX HP',0);
		myInnerHtml("EN931",'<input type="text" onChange="StAllCalc()" name="ARG_RC15" value="0" size=1>',0);
		myInnerHtml("EN932",'+% MAX HP',0);
		myInnerHtml("EN933",'<input type="text" onChange="StAllCalc()" name="ARG_RC16" value="0" size=1>',0);
		myInnerHtml("EN934",'+ MAX SP',0);
		myInnerHtml("EN935",'<input type="text" onChange="StAllCalc()" name="ARG_RC17" value="0" size=1>',0);
		myInnerHtml("EN936",'+% MAX SP',0);
		myInnerHtml("EN937",'<input type="text" onChange="StAllCalc()" name="ARG_RC18" value="0" size=1>',0);
		myInnerHtml("EN938",'DEF',0);
		myInnerHtml("EN939",'<input type="text" onChange="StAllCalc()" name="ARG_RC19" value="0" size=1>',0);
		myInnerHtml("EN940",'MDEF',0);
		myInnerHtml("EN941",'<input type="text" onChange="StAllCalc()" name="ARG_RC20" value="0" size=1>',0);
		myInnerHtml("EN942",'HIT',0);
		myInnerHtml("EN943",'<input type="text" onChange="StAllCalc()" name="ARG_RC21" value="0" size=1>',0);
		myInnerHtml("EN944",'FLEE',0);
		myInnerHtml("EN945",'<input type="text" onChange="StAllCalc()" name="ARG_RC22" value="0" size=1>',0);
		myInnerHtml("EN946",'PERFECT DODGE',0);
		myInnerHtml("EN947",'<input type="text" onChange="StAllCalc()" name="ARG_RC23" value="0" size=1>',0);
		myInnerHtml("EN948",'CRITICAL',0);
		myInnerHtml("EN949",'<input type="text" onChange="StAllCalc()" name="ARG_RC24" value="0" size=1>',0);
		myInnerHtml("EN950",'+ ATK',0);
		myInnerHtml("EN951",'<input type="text" onChange="StAllCalc()" name="ARG_RC25" value="0" size=1>',0);
		myInnerHtml("EN952",'+% ATK',0);
		myInnerHtml("EN953",'<input type="text" onChange="StAllCalc()" name="ARG_RC26" value="0" size=1>',0);
		myInnerHtml("EN954",'+ MATK',0);
		myInnerHtml("EN955",'<input type="text" onChange="StAllCalc()" name="ARG_RC27" value="0" size=1>',0);
		myInnerHtml("EN956",'+% MATK',0);
		myInnerHtml("EN957",'<input type="text" onChange="StAllCalc()" name="ARG_RC28" value="0" size=1>',0);
		myInnerHtml("EN958",'ASPD%',0);
		myInnerHtml("EN959",'<input type="text" onChange="StAllCalc()" name="ARG_RC29" value="0" size=1>',0);
		myInnerHtml("EN960",'HP REGEN',0);
		myInnerHtml("EN961",'<input type="text" onChange="StAllCalc()" name="ARG_RC30" value="0" size=1>',0);
		myInnerHtml("EN962",'SP REGEN',0);
		myInnerHtml("EN963",'<input type="text" onChange="StAllCalc()" name="ARG_RC31" value="0" size=1>',0);
		myInnerHtml("EN964",'STR',0);
		myInnerHtml("EN965",'<input type="text" onChange="StAllCalc()" name="ARG_RC32" value="0" size=1>',0);
		myInnerHtml("EN966",'AGI',0);
		myInnerHtml("EN967",'<input type="text" onChange="StAllCalc()" name="ARG_RC33" value="0" size=1>',0);
		myInnerHtml("EN968",'VIT',0);
		myInnerHtml("EN969",'<input type="text" onChange="StAllCalc()" name="ARG_RC34" value="0" size=1>',0);
		myInnerHtml("EN970",'INT',0);
		myInnerHtml("EN971",'<input type="text" onChange="StAllCalc()" name="ARG_RC35" value="0" size=1>',0);
		myInnerHtml("EN972",'DEX',0);
		myInnerHtml("EN973",'<input type="text" onChange="StAllCalc()" name="ARG_RC36" value="0" size=1>',0);
		myInnerHtml("EN974",'LUK',0);
		myInnerHtml("EN975",'<input type="text" onChange="StAllCalc()" name="ARG_RC37" value="0" size=1>',0);
		myInnerHtml("EN976",'ASPD',0);
		myInnerHtml("EN977",'<input type="text" onChange="StAllCalc()" name="ARG_RC38" value="0" size=1>',0);

		A9_Skill0.value = n_A_PassSkill9[0];
		ARG_RC0.value = n_A_PassSkill9[1];
		A9_Skill1.value = n_A_PassSkill9[2];
		ARG_RC1.value = n_A_PassSkill9[3];
		A9_Skill2.value = n_A_PassSkill9[4];
		ARG_RC2.value = n_A_PassSkill9[5];
		A9_Skill3.value = n_A_PassSkill9[6];
		ARG_RC3.value = n_A_PassSkill9[7];
		A9_Skill4.value = n_A_PassSkill9[8];
		ARG_RC4.value = n_A_PassSkill9[9];
		A9_Skill5.value = n_A_PassSkill9[10];
		ARG_RC5.value = n_A_PassSkill9[11];
		A9_Skill6.value = n_A_PassSkill9[12];
		ARG_RC6.value = n_A_PassSkill9[13];
		A9_Skill7.value = n_A_PassSkill9[14];
		ARG_RC7.value = n_A_PassSkill9[15];
		A9_Skill8.value = n_A_PassSkill9[16];
		ARG_RC8.value = n_A_PassSkill9[17];
		A9_Skill9.value = n_A_PassSkill9[18];
		ARG_RC9.value = n_A_PassSkill9[19];
		A9_Skill10.value = n_A_PassSkill9[20];
		ARG_RC10.value = n_A_PassSkill9[21];
		A9_Skill11.value = n_A_PassSkill9[22];
		ARG_RC11.value = n_A_PassSkill9[23];
		A9_Skill12.value = n_A_PassSkill9[24];
		ARG_RC12.value = n_A_PassSkill9[25];
		A9_Skill13.value = n_A_PassSkill9[26];
		ARG_RC13.value = n_A_PassSkill9[27];
		A9_Skill14.value = n_A_PassSkill9[28];
		ARG_RC14.value = n_A_PassSkill9[29];
		ARG_RC15.value = n_A_PassSkill9[30];
		ARG_RC16.value = n_A_PassSkill9[31];
		ARG_RC17.value = n_A_PassSkill9[32];
		ARG_RC18.value = n_A_PassSkill9[33];
		ARG_RC19.value = n_A_PassSkill9[34];
		ARG_RC20.value = n_A_PassSkill9[35];
		ARG_RC21.value = n_A_PassSkill9[36];
		ARG_RC22.value = n_A_PassSkill9[37];
		ARG_RC23.value = n_A_PassSkill9[38];
		ARG_RC24.value = n_A_PassSkill9[39];
		ARG_RC25.value = n_A_PassSkill9[40];
		ARG_RC26.value = n_A_PassSkill9[41];
		ARG_RC27.value = n_A_PassSkill9[42];
		ARG_RC28.value = n_A_PassSkill9[43];
		ARG_RC29.value = n_A_PassSkill9[44];
		ARG_RC30.value = n_A_PassSkill9[45];
		ARG_RC31.value = n_A_PassSkill9[46];
		ARG_RC32.value = n_A_PassSkill9[47];
		ARG_RC33.value = n_A_PassSkill9[48];
		ARG_RC34.value = n_A_PassSkill9[49];
		ARG_RC35.value = n_A_PassSkill9[50];
		ARG_RC36.value = n_A_PassSkill9[51];
		ARG_RC37.value = n_A_PassSkill9[52];
		ARG_RC38.value = n_A_PassSkill9[53];

		//if(n_A_PassSkill9[0] == 0){n_A_zokusei[0] += n_A_PassSkill9[1];}
		//if(n_A_PassSkill9[0] == 1){n_A_zokusei[1] += n_A_PassSkill9[1];}
		//if(n_A_PassSkill9[0] == 2){n_A_zokusei[2] += n_A_PassSkill9[1];}
		//if(n_A_PassSkill9[0] == 3){n_A_zokusei[3] += n_A_PassSkill9[1];}
		//if(n_A_PassSkill9[0] == 4){n_A_zokusei[4] += n_A_PassSkill9[1];}
		//if(n_A_PassSkill9[0] == 5){n_A_zokusei[5] += n_A_PassSkill9[1];}
		//if(n_A_PassSkill9[0] == 6){n_A_zokusei[6] += n_A_PassSkill9[1];}
		//if(n_A_PassSkill9[0] == 7){n_A_zokusei[7] += n_A_PassSkill9[1];}
		//if(n_A_PassSkill9[0] == 8){n_A_zokusei[8] += n_A_PassSkill9[1];}
		//if(n_A_PassSkill9[0] == 9){n_A_zokusei[9] += n_A_PassSkill9[1];}

	}else{
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: collapse; width: auto;">';
		str += '<TR><TD id="A9TD" Colspan="2" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">Manual Edits <SPAN id="A9used"></SPAN></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab12" type="checkbox" name="A9_SKILLSW"onClick="Click_Skill9SW()"><label for="lab12">Show</label></div><div style="clear: both;"></div></TD></TR></TABLE>';
		str += '';
		myInnerHtml("ID_ARG",str,0);
		A9_SKILLSW.checked = 0;
	}
	Click_A9(0);
}}

function Click_A9(n){
	if(n==1)
		calc();
	var sw=0;
	for(var i=0;i<n_A_PassSkill9.length;i++)
		if(n_A_PassSkill9[i] != 0){
			sw = 1;
			break;
		}
	if(sw == 0){
		document.getElementById('A9TD').style.backgroundImage = "url(images/th.png)"
		myInnerHtml("A9used","",0);
	}else{
		document.getElementById('A9TD').style.backgroundImage = "url(images/th-do.png)"
		myInnerHtml("A9used"," <B>[Active]</B>",0);
	}
}

function Click_IjyouSW(){
with(document.calcForm){
	n_IjyouSW = B_IJYOUSW.checked;
	var wstr;
	if(Taijin)
		wstr = "Enemy";
	else
		wstr = "Monster";
	if(n_IjyouSW){
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: separate; width: auto;">';
		str += '<TR><TD id="AITD" ColSpan="6" Bgcolor="#DDDDFF"  class="subheader"><div style="float: left; padding: 3px; width: 100px;">'+ wstr +' Debuffs <span id="AIused"></span></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab6" type="checkbox" name="B_IJYOUSW" onClick="Click_IjyouSW()"><label for="lab6">Show</label></div><div style="clear: both;"></div></TD></TR>';
		str += '<TR><TD id="BI0_1"></TD><TD id="BI0_2"></TD>';
		str += '<TD id="BI1_1"></TD><TD id="BI1_2"></TD></TR>';
		str += '<TR><TD id="BI2_1"></TD><TD id="BI2_2"></TD>';
		str += '<TD id="BI3_1"></TD><TD id="BI3_2"></TD>';
		str += '<TD id="BI4_1"></TD><TD id="BI4_2"></TD></TR>';
		str += '<TR><TD id="BI5_1"></TD><TD id="BI5_2"></TD>';
		str += '<TD id="BI6_1"></TD><TD id="BI6_2"></TD>';
		str += '<TD id="BI7_1"></TD><TD id="BI7_2"></TD></TR>';
		str += '<TR><TD id="BI8_1"></TD><TD id="BI8_2"></TD>';
		str += '<TD id="BI9_1"></TD><TD id="BI9_2"></TD>';
		str += '<TD id="BI10_1"></TD><TD id="BI10_2"></TD></TR>';
		str += '<TR><TD id="BI11_1"></TD><TD id="BI11_2"></TD>';
		str += '<TD id="BI12_1"></TD><TD id="BI12_2"></TD>';
		str += '<TD id="BI13_1"></TD><TD id="BI13_2"></TD></TR>';
		str += '<TR><TD id="BI14_1"></TD><TD id="BI14_2"></TD>';
		str += '<TD id="BI15_1"></TD><TD id="BI15_2"></TD>';
		str += '<TD id="BI16_1"></TD><TD id="BI16_2"></TD></TR>';
		str += '<TR><TD id="BI17_1"></TD><TD id="BI17_2"></TD>';
		str += '<TD id="BI18_1"></TD><TD id="BI18_2"></TD>';
		str += '<TD id="BI19_1"></TD><TD id="BI19_2"></TD></TR>';
		str += '<TR><TD id="BI20_1"></TD><TD id="BI20_2"></TD>';
		if(Taijin==0){
			str += '<TD id="BI21_1"></TD><TD id="BI21_2"></TD>';
			str += '<TD id="BI22_1"></TD><TD id="BI22_2"></TD></TR>';
			str += '<TR><TD id="BI23_1"></TD><TD id="BI23_2"></TD>';
		}
		str += '<TD id="BI24_1"></TD><TD id="BI24_2"></TD></TR></TABLE>';
		myInnerHtml("MONSTER_IJYOU",str,0);
		B_IJYOUSW.checked = 1;
    //Skill Array
		var name_SKILL = ["Provoke (Non Undead)","Quagmire","Poison","Blind","Frozen (Non Undead)","Blessing (Demon/Undead)","Lex Aeterna","Stun","Sleep","Stone","Curse","Agility Down","Signum Crucis","Strip Weapon","Strip Shield","Strip Armor","Strip Helm","Spider Web","Mind Breaker","Slow Grace","Down Tempo","Eska","Eske","Elemental Change (Sage Skill)","Fling"];
		var html_SKILL = new Array();
		for(i=0;i<=20;i++)
			myInnerHtml("BI"+i+"_1",name_SKILL[i],0);
		if(Taijin==0){
			for(i=21;i<=23;i++)
				myInnerHtml("BI"+i+"_1",name_SKILL[i],0);
		}
		myInnerHtml("BI24_1",name_SKILL[24],0);

		html_SKILL[0] = '<select name="B_IJYOU0"onChange="calc()|Click_AI(1)"></select>';
		html_SKILL[1] = '<select name="B_IJYOU1"onChange="calc()|Click_AI(1)"></select>';
		html_SKILL[2] = '<input type="checkbox" name="B_IJYOU2"onClick="calc()|Click_AI(1)">';
		html_SKILL[3] = '<input type="checkbox" name="B_IJYOU3"onClick="calc()|Click_AI(1)">';
		html_SKILL[4] = '<input type="checkbox" name="B_IJYOU4"onClick="calc()|Click_AI(1)">';
		html_SKILL[5] = '<input type="checkbox" name="B_IJYOU5"onClick="calc()|Click_AI(1)">';
		html_SKILL[6] = '<input type="checkbox" name="B_IJYOU6"onClick="calc()|Click_AI(1)">';
		html_SKILL[7] = '<input type="checkbox" name="B_IJYOU7"onClick="calc()|Click_AI(1)">';
		html_SKILL[8] = '<input type="checkbox" name="B_IJYOU8"onClick="calc()|Click_AI(1)">';
		html_SKILL[9] = '<input type="checkbox" name="B_IJYOU9"onClick="calc()|Click_AI(1)">';
		html_SKILL[10] = '<input type="checkbox" name="B_IJYOU10"onClick="calc()|Click_AI(1)">';
		html_SKILL[11] = '<select name="B_IJYOU11"onChange="calc()|Click_AI(1)"></select>';
		html_SKILL[12] = '<select name="B_IJYOU12"onChange="calc()|Click_AI(1)"></select>';
		html_SKILL[13] = '<input type="checkbox" name="B_IJYOU13"onClick="calc()|Click_AI(1)">';
		html_SKILL[14] = '<input type="checkbox" name="B_IJYOU14"onClick="calc()|Click_AI(1)">';
		html_SKILL[15] = '<input type="checkbox" name="B_IJYOU15"onClick="calc()|Click_AI(1)">';
		html_SKILL[16] = '<input type="checkbox" name="B_IJYOU16"onClick="calc()|Click_AI(1)">';
		html_SKILL[17] = '<input type="checkbox" name="B_IJYOU17"onClick="calc()|Click_AI(1)">';
		html_SKILL[18] = '<select name="B_IJYOU18"onChange="calc()|Click_AI(1)"></select>';
		html_SKILL[19] = '<input type="checkbox" name="B_IJYOU19"onClick="calc()|Click_AI(1)">';
		html_SKILL[20] = '<input type="checkbox" name="B_IJYOU20"onClick="calc()|Click_AI(1)">';
		html_SKILL[24] = '<select name="B_IJYOU24"onChange="calc()|Click_AI(1)"></select>';
		for(i=0;i<=20;i++)
			myInnerHtml("BI"+i+"_2",html_SKILL[i],0);
		myInnerHtml("BI24_2",html_SKILL[24],0);

		for(i=0;i<=10;i++){
			B_IJYOU0.options[i] = new Option(i,i);
			B_IJYOU11.options[i] = new Option(i,i);
			B_IJYOU12.options[i] = new Option(i,i);
		}
		for(i=0;i<=5;i++){
			B_IJYOU1.options[i] = new Option(i,i);
			B_IJYOU18.options[i] = new Option(i,i);
			B_IJYOU24.options[i] = new Option(i,i);
		}
		if(Taijin==0){
			myInnerHtml("BI21_2",'<input type="checkbox" name="B_IJYOU21"onClick="calc()|Click_AI(1)">',0);

			myInnerHtml("BI22_2",'<input type="checkbox" name="B_IJYOU22"onClick="calc()|Click_AI(1)">',0);

			var ZoHe2 =["None","Water","Earth","Fire","Wind"];
			myInnerHtml("BI23_2",'<select name="B_IJYOU23"onChange="calc()|Click_AI(1)"></select>',0);
			for(i=0;i<=4;i++)
				B_IJYOU23.options[i] = new Option(ZoHe2[i],i);
		}
		B_IJYOU0.value = n_B_IJYOU[0];
		B_IJYOU1.value = n_B_IJYOU[1];
		B_IJYOU2.checked = n_B_IJYOU[2];
		B_IJYOU3.checked = n_B_IJYOU[3];
		B_IJYOU4.checked = n_B_IJYOU[4];
		B_IJYOU5.checked = n_B_IJYOU[5];
		B_IJYOU6.checked = n_B_IJYOU[6];
		B_IJYOU7.checked = n_B_IJYOU[7];
		B_IJYOU8.checked = n_B_IJYOU[8];
		B_IJYOU9.checked = n_B_IJYOU[9];
		B_IJYOU10.checked = n_B_IJYOU[10];
		B_IJYOU11.value = n_B_IJYOU[11];
		B_IJYOU12.value = n_B_IJYOU[12];
		B_IJYOU13.checked = n_B_IJYOU[13];
		B_IJYOU14.checked = n_B_IJYOU[14];
		B_IJYOU15.checked = n_B_IJYOU[15];
		B_IJYOU16.checked = n_B_IJYOU[16];
		B_IJYOU17.checked = n_B_IJYOU[17];
		B_IJYOU18.value = n_B_IJYOU[18];
		B_IJYOU19.checked = n_B_IJYOU[19];
		B_IJYOU20.checked = n_B_IJYOU[20];
		if(Taijin==0){
			B_IJYOU21.checked = n_B_IJYOU[21];
			B_IJYOU22.checked = n_B_IJYOU[22];
			B_IJYOU23.value = n_B_IJYOU[23];
		}
		B_IJYOU24.value = n_B_IJYOU[24];
	}
	else{
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: separate; width: auto;">';
		str += '<TR><TD id="AITD" ColSpan="2" Bgcolor="#DDDDFF"  class="subheader"><div style="float: left; padding: 3px; width: 100px;">'+ wstr +' Debuffs <span id="AIused"></span></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab6" type="checkbox" name="B_IJYOUSW" onClick="Click_IjyouSW()"><label for="lab6">Show</label></div><div style="clear: both;"></div></TD></TR></TABLE>';
		myInnerHtml("MONSTER_IJYOU",str,0);
		B_IJYOUSW.checked = 0;
	}
	Click_AI(0);
}}

function Click_AI(n){
	if(n==1)
		calc();
	var sw=0;
	for(var i=0;i <= 24;i++)
		if(n_B_IJYOU[i] != 0){
			sw = 1;
			break;
		}
	if(sw == 0){
		document.getElementById('AITD').style.backgroundImage = "url(images/th.png)";
		myInnerHtml("AIused","",0);
	}else{
		document.getElementById('AITD').style.backgroundImage = "url(images/th-do.png)";
		myInnerHtml("AIused"," <B>[Active]</B>",0);
	}
}


function Click_EnemyKyoukaSW(){
with(document.calcForm){
	n_KyoukaSW = B_KYOUKASW.checked;
	if(Taijin)
		wstr = "Enemy";
	else
		wstr = "Monster";

	if(n_KyoukaSW){
		var str;
		str = '<table align="left" style="border: 1px solid #999; border-collapse: separate; width: auto;">';
		str += '<TR><TD id="AKTD" ColSpan="6" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px; width: 100px;">'+ wstr +' Buffs <span id="AKused"></span></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab5" type="checkbox" name="B_KYOUKASW"onClick="Click_EnemyKyoukaSW()"><label for="lab5">Show</label></div></TD></TR>';
		str += '<TR><TD id="ID_K0"></TD><TD id="ID_Kb0"></TD>';
		str += '<TD id="ID_K1"></TD><TD id="ID_Kb1"></TD></TR>';
		if(Taijin==0){
			str += '<TR><TD id="ID_K2"></TD><TD id="ID_Kb2"></TD>';
			str += '<TD id="ID_K3"></TD><TD id="ID_Kb3"></TD></TR>';
			str += '<TR><TD id="ID_K4"></TD><TD id="ID_Kb4"></TD>';
			str += '<TD id="ID_K5"></TD><TD id="ID_Kb5"></TD></TR>';
			str += '<TR><TD id="ID_K8"></TD><TD id="ID_Kb8"></TD>';
			str += '<TD id="ID_K9"></TD><TD id="ID_Kb9"></TD></TR>';
			str += '<TR><TD id="ID_K7"></TD><TD id="ID_Kb7"></TD>';
			str += '<TD id="ID_K6"></TD><TD id="ID_Kb6"></TD></TR>';
			str += '<TR><TD id="ID_K10"></TD><TD id="ID_Kb10"></TD>';
		}
		str += '</TABLE>';
		myInnerHtml("MONSTER_KYOUKA",str,0);
		B_KYOUKASW.checked = 1;


		var name_SKILL = ["Increase AGI","Assumptio","Adrenaline Rush","Maximize Power","Power Up<BR>(ATK*3, HIT*2)","Flee Up","Change element","Stone Skin","Anti Magic","Keeping","Magic Mirror"];
		var html_SKILL = new Array();
		for(i=0;i<=1;i++)
			myInnerHtml("ID_K"+i,name_SKILL[i],0);

		html_SKILL[0] = '<select name="B_KYOUKA0"onChange="calc()|Click_AK(1)"></select>';
		html_SKILL[1] = '<input type="checkbox" name="B_KYOUKA1"onClick="calc()|Click_AK(1)">';
		html_SKILL[2] = '<input type="checkbox" name="B_KYOUKA2"onClick="calc()|Click_AK(1)">';
		html_SKILL[3] = '<input type="checkbox" name="B_KYOUKA3"onClick="calc()|Click_AK(1)">';
		html_SKILL[4] = '<input type="checkbox" name="B_KYOUKA4"onClick="calc()|Click_AK(1)">';
		html_SKILL[5] = '<input type="checkbox" name="B_KYOUKA5"onClick="calc()|Click_AK(1)">';
		html_SKILL[6] = '<select name="B_KYOUKA6"onChange="calc()|Click_AK(1)"></select>';
		html_SKILL[7] = '<select name="B_KYOUKA7"onChange="calc()|Click_AK(1)"></select>';
		html_SKILL[8] = '<select name="B_KYOUKA8"onChange="calc()|Click_AK(1)"></select>';
		html_SKILL[9] = '<input type="checkbox" name="B_KYOUKA9"onClick="calc()|Click_AK(1)">';
		html_SKILL[10] = '<select name="B_KYOUKA10"onChange="calc()|Click_AK(1)"></select>';

		for(i=0;i<=1;i++)
			myInnerHtml("ID_Kb"+i,html_SKILL[i],0);

		for(i=0;i<=10;i++)
			B_KYOUKA0.options[i] = new Option(i,i);
		B_KYOUKA0.value = n_B_KYOUKA[0];
		B_KYOUKA1.checked = n_B_KYOUKA[1];

		if(Taijin==0){
			for(i=2;i<=10;i++)
				myInnerHtml("ID_K"+i,name_SKILL[i],0);
			for(i=2;i<=10;i++)
				myInnerHtml("ID_Kb"+i,html_SKILL[i],0);
			for(i=0;i<=5;i++){
				B_KYOUKA7.options[i] = new Option(i,i);
				B_KYOUKA8.options[i] = new Option(i,i);
				B_KYOUKA10.options[i] = new Option(i,i);
			}
			//Element List ID
			var ZoHe =[["None","Neutral 1","Neutral 2","Neutral 3","Neutral 4","Water 1","Water 2","Water 3","Water 4","Earth 1","Earth 2","Earth 3","Earth 4","Fire 1","Fire 2","Fire 3","Fire 4","Wind 1","Wind 2","Wind 3","Wind 4","Poison 1","Poison 2","Poison 3","Poison 4","Holy 1","Holy 2","Holy 3","Holy 4","Shadow 1","Shadow 2","Shadow 3","Shadow 4","Ghost 1","Ghost 2","Ghost 3","Ghost 4","Undead 1","Undead 2","Undead 3","Undead 4"],
				[0,1,2,3,4,11,12,13,14,21,22,23,24,31,32,33,34,41,42,43,44,51,52,53,54,61,62,63,64,71,72,73,74,81,82,83,84,91,92,93,94]];
			for(i=0;i<=40;i++)
				B_KYOUKA6.options[i] = new Option(ZoHe[0][i],ZoHe[1][i]);
			B_KYOUKA2.checked = n_B_KYOUKA[2];
			B_KYOUKA3.checked = n_B_KYOUKA[3];
			B_KYOUKA4.checked = n_B_KYOUKA[4];
			B_KYOUKA5.checked = (n_B_KYOUKA[5] > 0);
			B_KYOUKA6.value = n_B_KYOUKA[6];
			B_KYOUKA7.value = n_B_KYOUKA[7];
			B_KYOUKA8.value = n_B_KYOUKA[8];
			B_KYOUKA9.checked = n_B_KYOUKA[9];
			B_KYOUKA10.value = n_B_KYOUKA[10];
		}
	}
	else{
		var str;
		str = '<table align="left" style="border: 1px solid #999; border-collapse: separate; width: auto;">';
		str += '<TR><TD id="AKTD" ColSpan="6" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px; width: 100px;">'+ wstr +' Buffs <span id="AKused"></span></div>';
		str += '<input id="lab5" type="checkbox" name="B_KYOUKASW"onClick="Click_EnemyKyoukaSW()"><label for="lab5">Show</label></TD></TR></TABLE>';
		myInnerHtml("MONSTER_KYOUKA",str,0);
		B_KYOUKASW.checked = 0;
	}
	Click_AK(0);
}}

function Click_AK(n){
	if(n==1)
		calc();
	var sw=0;
	for(var i=0;i <= 10;i++)
		if(n_B_KYOUKA[i] != 0){
			sw = 1;
			break;
		}
	if(sw == 0){
		document.getElementById('AKTD').style.backgroundImage = "url(images/th.png)";
		myInnerHtml("AKused","",0);
	}else{
		document.getElementById('AKTD').style.backgroundImage = "url(images/th-do.png)";
		myInnerHtml("AKused"," <B>[Active]</B>",0);
	}
}

function ClickB_Enemy(tweak_stats = false){
with(document.calcForm){
	n_B = new Array();
	n_B2 = new Array();
	for(i=0;i<=22;i++){
		//Oragnizing the boss stats bassed off the
		n_B[i] = MonsterOBJ[B_Enemy.value][i];
		n_B2[i] = n_B[i];
	}
//Boss Stats - zonesoldier
	if(Taijin){
		n_B[3] = eval(B_ZOKUSEI.value);
		n_B[5] = eval(B_LV.value);
		n_B[7] = eval(B_VIT.value);
		n_B[8] = eval(B_AGI.value);
		n_B[9] = eval(B_INT.value);
		n_B[11] = eval(B_LUK.value);
		n_B[14] = eval(B_DEF.value);
		n_B[15] = eval(B_MDEF.value);

		JobHP_A = new Array(0,0.7,0.5,0.4,0.5,0.3,0.4,1.5,1.1,0.75,0.85,0.55,0.9,1.1,0.85,0.9,0.75,0.75,0.75,0.9,0,1.5,1.1,0.75,0.85,0.55,0.9,1.1,0.85,0.9,0.75,0.75,0.75,0.9);
		JobHP_B = new Array(5,  5,  5,  5,  5,  5,  5,  5,  5,   5,   5,   5,  5,  7,   5,6.5,   3,   3,   5,  5,5,  5,  5,   5,   5,   5,  5,  7,   5,6.5,   3,   3,   5,  5);


		w = 0;
		for(i=2;i<=n_B[5];i++)
			w += Math.round(JobHP_A[n_B[1]] * i);
		w = (JobHP_B[n_B[1]] * n_B[5]) + 35 + w;

		if(n_B[1] > 20)
			w = Math.floor(w *125 /100);
		n_B[6] = Math.floor(w * (100 + n_B[7]) / 100);
		n_B[6] += eval(B_TAISEI11.value);
		n_B[6] = Math.floor(n_B[6] * (100 + eval(B_TAISEI12.value)) /100);
		myInnerHtml("B_HP",n_B[6],0);


		n_B[23] = Math.floor(n_B[7] * 0.5) + Math.floor(n_B[7] * 0.3);
		n_B[24] = Math.floor(n_B[7] * 0.5) + Math.floor(n_B[7] * n_B[7] / 150) -1;
		if(n_B[23] > n_B[24])
			n_B[24] = n_B[23];
		w = eval(B_TAISEI4.value);
		if(w){
			n_B[23] *= (1 + 0.05 * w);
			n_B[24] *= (1 + 0.05 * w);
		}
	}
	else{
		if (tweak_stats) // Manage monster stats manually
		{
			element_index = eval(document.calcForm.monster_element.value);
			
			n_B[2]	= eval(document.calcForm.monster_race.value);
			n_B[3]  = Math.floor(element_index / 4) * 10 + element_index % 4 + 1;
			n_B[4]	= eval(document.calcForm.monster_size.value);
			n_B[6]  = eval(document.calcForm.monster_hp.value);		// HP
			n_B[7]  = eval(document.calcForm.monster_vit.value);	// VIT
			n_B[8]  = eval(document.calcForm.monster_agi.value);	// AGI
			n_B[9]  = eval(document.calcForm.monster_int.value);	// INT
			n_B[10] = eval(document.calcForm.monster_dex.value);	// DEX
			n_B[11] = eval(document.calcForm.monster_luk.value);	// LUK
			n_B[14] = eval(document.calcForm.monster_def.value);	// DEF
			n_B[15] = eval(document.calcForm.monster_mdef.value);	// MDEF
			n_B[19] = eval(document.calcForm.monster_type.value);	// Boss type
		}

		n_B2[23] = n_B[7];
		n_B2[24] = n_B[7] + (Math.floor(n_B[7]/20) * Math.floor(n_B[7]/20) -1);
		if(n_B2[23] > n_B2[24])
			n_B2[24] = n_B2[23];
		//custom TalonRO Monster picture!
		//check also monster.js row 686+687 (MonsterOBJ[i][23] = MonsterOBJ[i][21];)
		//[Custom TalonRO = 2016-06-04 - Fixed the database link for Panel][Kato]
		if (MonsterOBJ[B_Enemy.value][23]!=0){
			document.getElementById("B_Enemy_picture").innerHTML="<img src=\"https://panel.talonro.com/images/monster/"+MonsterOBJ[B_Enemy.value][23]+".gif\" alt=\"no picture available =(\">";
			document.getElementById("B_Enemy_mobdb").innerHTML="<a style='color:white;' href=\"https://panel.talonro.com/mobdb/"+MonsterOBJ[B_Enemy.value][23]+"/\" target=\"_blank\">#"+MonsterOBJ[B_Enemy.value][23]+"</a>";
		} else {
			document.getElementById("B_Enemy_picture").innerHTML="<img src=\"\" alt=\"no picture available =(\">";
			document.getElementById("B_Enemy_mobdb").innerHTML="<b>n/a</b>";
		}
		//custom TalonRO show boss/non-boss
		if (n_B[19])
			myInnerHtml("B_26","Boss",0);
		else
			myInnerHtml("B_26","non-Boss",0);
	}

/*Element - n_B[3] = elementID - example n_B[3] = 4, Neutral4(on site)
Neutral - 1 - 4
Water - 11 - 14
Earth - 21 - 24
Fire - 31 - 34
Wind - 41 - 44
Poison - 51 - 54
Holy - 61 - 64
Shadow - 71 - 74
Ghost - 81 - 84
Undead - 91 - 94
*/
/*
Race - n_B[2] = raceID - example n_B[2] = 3, Plant
0 - Formless
1 - Undead
2 - Brute
3 - Plant
4 - Insect
5 - fish
6 - Demon
7 - Demi-Human
8 - Angel
9 - Dragon
*/

	n_B2[25] = Math.floor(n_B[7] / 2) + n_B[9];
	n_B2[26] = n_B[5] + n_B[10];
	n_B2[27] = n_B[5] + n_B[8];

	if(n_IjyouSW){
		n_B_IJYOU[0] = eval(B_IJYOU0.value);
		n_B_IJYOU[1] = eval(B_IJYOU1.value);
		n_B_IJYOU[2] = B_IJYOU2.checked;
		n_B_IJYOU[3] = B_IJYOU3.checked;
		n_B_IJYOU[4] = B_IJYOU4.checked;
		n_B_IJYOU[5] = B_IJYOU5.checked;
		n_B_IJYOU[6] = B_IJYOU6.checked;
		n_B_IJYOU[7] = B_IJYOU7.checked;
		n_B_IJYOU[8] = B_IJYOU8.checked;
		n_B_IJYOU[9] = B_IJYOU9.checked;
		n_B_IJYOU[10] = B_IJYOU10.checked;
		n_B_IJYOU[11] = eval(B_IJYOU11.value);
		n_B_IJYOU[12] = eval(B_IJYOU12.value);
		n_B_IJYOU[13] = B_IJYOU13.checked;
		n_B_IJYOU[14] = B_IJYOU14.checked;
		n_B_IJYOU[15] = B_IJYOU15.checked;
		n_B_IJYOU[16] = B_IJYOU16.checked;
		n_B_IJYOU[17] = B_IJYOU17.checked;
		n_B_IJYOU[18] = eval(B_IJYOU18.value);
		n_B_IJYOU[19] = B_IJYOU19.checked;
		n_B_IJYOU[20] = B_IJYOU20.checked;
		n_B_IJYOU[24] = eval(B_IJYOU24.value);
		if(Taijin==0){
			n_B_IJYOU[21] = B_IJYOU21.checked;
			n_B_IJYOU[22] = B_IJYOU22.checked;
			n_B_IJYOU[23] = eval(B_IJYOU23.value);
		}
	}
	if(n_KyoukaSW){
		n_B_KYOUKA[0] = eval(B_KYOUKA0.value);
		n_B_KYOUKA[1] = B_KYOUKA1.checked;
		if(Taijin==0){
			n_B_KYOUKA[2] = B_KYOUKA2.checked;
			n_B_KYOUKA[3] = B_KYOUKA3.checked;
			n_B_KYOUKA[4] = B_KYOUKA4.checked;
			n_B_KYOUKA[5] = B_KYOUKA5.checked ? 1 : 0;
			n_B_KYOUKA[6] = eval(B_KYOUKA6.value);
			n_B_KYOUKA[7] = eval(B_KYOUKA7.value);
			n_B_KYOUKA[8] = eval(B_KYOUKA8.value);
			n_B_KYOUKA[9] = B_KYOUKA9.checked;
			n_B_KYOUKA[10] = eval(B_KYOUKA10.value);
		}
	}
	if(n_B_KYOUKA[6])
		n_B[3] = n_B_KYOUKA[6];
	if (!n_B[19] && n_B_IJYOU[23]) // SA_ELEMENTCHANGE does not applies on boss type monsters
		n_B[3] = n_B_IJYOU[23] * 10 + Math.floor(Math.random() * 4) + 1;

	if(n_B[19] == 0){
		if(n_B_IJYOU[4] && n_B[2]!=1)
			n_B[3] = 11;
	}
	if(n_B[19] == 0){
		if(n_B_IJYOU[9] && n_B[2]!=1)
			n_B[3] = 21;
	}

	if(n_B_KYOUKA[3])
		n_B[12] = n_B[13];

	if(n_B[19] == 0){
		if(n_B_IJYOU[10]){
			n_B[12] -= Math.floor(n_B[12] * 25 /100);
			n_B[13] -= Math.floor(n_B[13] * 25 /100);
		}
	}

	var wATK=0;
	if(n_B[19] == 0){
		if(n_B_IJYOU[0]!=0 && n_B[3]<90)
			wATK += 2 + n_B_IJYOU[0] * 3;
	}
	if(Taijin==0){
		if(n_B_IJYOU[22])
			wATK += 300;
	}
	if(n_B_KYOUKA[4])
		wATK += 200;

	n_B[12] += Math.floor(n_B[12] * wATK / 100);
	n_B[13] += Math.floor(n_B[13] * wATK / 100);

/*	if(n_B_KYOUKA[4]){
		n_B[12] = n_B[12] * 3;
		n_B[13] = n_B[13] * 3;
	}
*/
	if(n_B_IJYOU[13] && Taijin==0){
		n_B[12] -= Math.floor(n_B[12] * 25 /100);
		n_B[13] -= Math.floor(n_B[13] * 25 /100);
	}


	if(n_B_KYOUKA[0])
		n_B[8] += 2 + n_B_KYOUKA[0];

	// Quagmire agi debuff
	if(n_B_IJYOU[1]){
		var w;
		var w2;
		if(Taijin){
			w2 = n_B_IJYOU[1] * 5;
			w = Math.floor(n_B[8] / 4);
		}else{
			w2 = n_B_IJYOU[1] * 10
			w = Math.floor(n_B[8] / 2);
		}
		if(w > w2)
			n_B[8] -= w2;
		else
			n_B[8] -= w;
	}
	if(n_B[19] == 0){
		if(n_B_IJYOU[11]){
			n_B[8] -= (n_B_IJYOU[11] + 2);
			if(n_B[8] < 0)
				n_B[8]=0;
		}
	}

	if(n_B_IJYOU[1]){
		var w;
		var w2;
		if(Taijin){
			w2 = n_B_IJYOU[1] * 5;
			w = Math.floor(n_B[10] / 4);
		}else{
			w2 = n_B_IJYOU[1] * 10
			w = Math.floor(n_B[10] / 2);
		}
		if(w > w2)
			n_B[10] -= w2;
		else
			n_B[10] -= w;
	}

	if(n_B[19] == 0){
		if(n_B_IJYOU[5] && (n_B[2]==6||n_B[3]>=90)){
			n_B[10] = n_B[10] - Math.floor(n_B[10] /2);
		}
	}

	if(n_B_IJYOU[15] && Taijin==0)
		n_B[7] -= Math.floor(n_B[7] * 40 /100);


	if(n_B[19] == 0){
		if(n_B_IJYOU[5] && (n_B[2]==6||n_B[3]>=90)){
			n_B[9] = n_B[9] - Math.floor(n_B[9] /2);
		}
	}

	if(n_B_IJYOU[16] && Taijin==0)
		n_B[9] -= Math.floor(n_B[9] * 40 /100);

	if(n_B[19] == 0){
		if(n_B_IJYOU[10])
			n_B[11] = 0;
	}

	if (Taijin == 0)
	{
		n_B[23] = n_B[7];
		n_B[24] = n_B[7] + (Math.floor(n_B[7]/20) * Math.floor(n_B[7]/20) -1);
	}
	
	// Manage monster defense reduction

	// Apply Status Change affecting defense
	// Status that only affect hard def
	def_sc_reduction = 1;

	if (!Taijin) // Not applied to players
		def_sc_reduction *= 1 + 0.15 * n_B_IJYOU[14]; // SC_STRIPSHIELD
	
	if (n_B_IJYOU[12] && (n_B[2]==6||n_B[3]>=90)) // SC_SIGNUMCRUCIS
		def_sc_reduction *= 1 + 0.1 + n_B_IJYOU[12] * 0.04;
	
	if (!n_B[19] && n_B[2] != 1)
	{
		def_sc_reduction *= 1 + 0.5 * n_B_IJYOU[2]; // SC_FREEZE
		def_sc_reduction *= 1 + 0.5 * n_B_IJYOU[2]; // SC_STONE
	}
	
	def_sc_reduction -= 1;
	def_sc_reduction = Math.min(1, def_sc_reduction);
	n_B[14] -= Math.floor(n_B[14] * def_sc_reduction);
	
	// Status that affect hard and vit def
	def_sc_reduction = 1;
	
	if (n_B_IJYOU[0] && n_B[19] == 0 && n_B[3] < 90) // SC_PROVOKE
		def_sc_reduction *= (1.05 + n_B_IJYOU[0] * 0.05);
	
	def_sc_reduction *= 1 + 0.50 * n_B_IJYOU[22]; // SC_SKE
	def_sc_reduction *= 1 + 0.05 * n_B_IJYOU[24]; // SC_FLING
	
	if (!n_B[19])
		def_sc_reduction *= 1 + 0.25 * n_B_IJYOU[2]; // SC_POISON
	
	def_sc_reduction -= 1;
	def_sc_reduction = Math.min(1, def_sc_reduction);
	n_B[14] -= Math.floor(n_B[14] * def_sc_reduction);
	n_B[23] -= Math.floor(n_B[23] * def_sc_reduction);
	n_B[24] -= Math.floor(n_B[24] * def_sc_reduction);
	
	if (n_B_KYOUKA[9]) // SC_KEEPING
		n_B[14] = 90;
	
	if (n_B_IJYOU[20]) // SC_ETERNALCHAOS
	{
		n_B[23] = 0;
		n_B[24] = 0;
	}
	
	// Apply item script bonus affecting defense
	def_skill_reduction = 0;
	if (292 == n_A_ActiveSkill)
		def_skill_reduction += 10 * CardNumSearch(627);
	
	def_race_reduction = n_tok[180 + n_B[2]];
	def_class_reduction = (n_B[19] ? n_tok[22] : n_tok[21]);
	def_reduction = Math.min(100, def_race_reduction + def_class_reduction);

	n_B[14] = Math.ceil(n_B[14] * (100 - def_reduction) / 100 * (100 - def_skill_reduction) / 100);
	n_B[23] = Math.ceil(n_B[23] * (100 - def_reduction) / 100 * (100 - def_skill_reduction) / 100);
	n_B[24] = Math.max(n_B[23], Math.ceil(n_B[24] * (100 - def_reduction) / 100 * (100 - def_skill_reduction) / 100));
	
	// Belmont Whip#1378 - Dancer/Gypsy
	// #38 - [Ugly Dance] reduces enemy INT by 20% for 7 seconds
	if (1378 == n_A_Equip[0] && SQI_Bonus_Effect.findIndex(x => x == 38) > -1)
		n_B[9] -= Math.floor(n_B[9] * 0.1);
	
	
	n_B[25] = Math.floor(n_B[7] / 2) + n_B[9];
	n_B[26] = n_B[5] + n_B[10];
	n_B[27] = n_B[5] + n_B[8];
	
	if (0 == Taijin && tweak_stats)
	{
		n_B[26] = eval(document.calcForm.monster_hit.value); 	// HIT
		n_B[27] = eval(document.calcForm.monster_flee.value);	// FLEE
	}

	var w = 0;
	w += n_tok[295];
	w += n_tok[310+n_B[2]];
	w += n_tok[360+Math.floor(n_B[3] / 10)];
	
	if(w){
		if(w < 0)
			w = 0;
		n_B[15] -= Math.floor(n_B[15] * w /100);
	}
	if(n_B[19] == 0){
		if(n_B_IJYOU[4] && n_B[2]!=1)
			n_B[15] += Math.floor(n_B[15] * 25 /100);
	}
	if(n_B[19] == 0){
		if(n_B_IJYOU[9] && n_B[2]!=1)
			n_B[15] += Math.floor(n_B[15] * 25 /100);
	}

	if(n_B[19] == 0){
		if(n_B_IJYOU[18] && n_B[3]<90)
			n_B[25] -= Math.floor(n_B[25] * (n_B_IJYOU[18] * 12) / 100);
	}

	if (Taijin == 0 && n_B_IJYOU[21]) // Eska set INT MDEF to 90
			n_B[25] = 90;

	if(n_B[19] == 0 && n_B_IJYOU[3]) // SC_BLIND - HIT -25%
			n_B[26] = Math.max(1, Math.floor(n_B[26] * 0.75));

	if(n_B_KYOUKA[4])
		n_B[26] = n_B[26] * 2;

	/* Truncate calculation speed enhancement after dark (FLEE * 2) in planning */
	if(n_B[19] == 0){
		if(n_B_IJYOU[3]){
			n_B[27] -= Math.floor(n_B[27] * 25 / 100);
		}
	}

	if(n_B_IJYOU[17]){
		n_B[27] -= 50;
		if(n_B[27] < 0)
			n_B[27] = 0;
	}

	if(n_B[19] == 0){
		if(n_B_IJYOU[4] && n_B[2]!=1)
			n_B[27] = -19;
	}
	if(n_B[19] == 0){
		if(n_B_IJYOU[9] && n_B[2]!=1)
			n_B[27] = -19;
	}
	if(n_B[19] == 0){
		if(n_B_IJYOU[7] || n_B_IJYOU[8])
			n_B[27] = -19;
	}

/* [END] */
	if (Taijin==0){
		job_exp_modifier = 0;
		base_exp_modifier = 0;
		common_exp_modifier = 100;

		common_exp_modifier += n_tok[120+n_B[2]] + n_tok[370 + Math.floor(n_B[3] / 10)];

		if (n_B[19]) // Experience bonus on bosstype monsters
			common_exp_modifier += n_tok[197];
		else // Experience bonus on normal monsters
			common_exp_modifier += n_tok[196];

		if(n_A_JobSearch()==3 && CardNumSearch(452) && (n_B[2]==1 || n_B[2]==6))
			common_exp_modifier += 5;
		if(n_B[2] == 2 && n_A_JobSearch()==4 && CardNumSearch(453))
			common_exp_modifier += 5;
		if(n_A_PassSkill8[1])
			common_exp_modifier += (25 * n_A_PassSkill8[1]);
		if(n_A_PassSkill8[2])
			job_exp_modifier += 50;
		if(n_A_PassSkill6[2])
			common_exp_modifier += 100;
		//custom TalonRO Ultimate Ascended Black Dragon Hat: +5% exp
		if(EquipNumSearch(1493) && n_B[19]==0)
			common_exp_modifier += 5;
		
		// Manage Exp Summer Cocktails
		// Drip of Yggdrasil Cocktail - Base Experience +10%
		if (drip_of_yggdrasil_cocktail)
			base_exp_modifier += 10;
		// Old Dracula's Mix Cocktail - Job Experience +15%
		if (old_dracula_mix_cocktail)
			job_exp_modifier += 15;
		
		if(n_A_PassSkill8[14] == 3 || n_A_PassSkill6[2]){
			common_exp_modifier = common_exp_modifier * 2;
			job_exp_modifier = job_exp_modifier * 2;
		}

		if(common_exp_modifier != 0 || job_exp_modifier != 0){
			n_B[16] = Math.floor(n_B[16] * (common_exp_modifier + base_exp_modifier) / 100);
			n_B[17] = Math.floor(n_B[17] * (common_exp_modifier + job_exp_modifier) / 100);
		}
		if(n_A_PassSkill8[5]){
			n_B[16] = Math.floor(n_B[16] / (1 + n_A_PassSkill8[5]) + 1);
			n_B[17] = Math.floor(n_B[17] / (1 + n_A_PassSkill8[5]) + 1);
		}
		if(n_A_PassSkill8[6]){
			n_B[16] = Math.floor(n_B[16] * (100 + 25 * n_A_PassSkill8[6])/100);
			n_B[17] = Math.floor(n_B[17] * (100 + 25 * n_A_PassSkill8[6])/100);
		}
		if(SkillSearch(367)){
			n_B[16] = Math.floor(n_B[16] * (100 + 10 * SkillSearch(367))/100);
			n_B[17] = Math.floor(n_B[17] * (100 + 10 * SkillSearch(367))/100);
		}
		if(n_A_PassSkill8[7]){
			n_B[17] = Math.floor(n_B[17] * (1+n_A_PassSkill8[7]));
		}
		if(n_A_PassSkill8[3]){
			n_B[16] = Math.floor(n_B[16] * (1+n_A_PassSkill8[3]));
		}


		if(n_B[19]==0){

			if(n_A_PassSkill3[8]){
				n_B[16] = Math.floor(n_B[16] * (125 + 11 * n_A_PassSkill3[8]) /100);
				n_B[17] = Math.floor(n_B[17] * (125 + 11 * n_A_PassSkill3[8]) /100);
			}
		}
	}

	/* [2020-04-18] - FLEE UP [Hatfun]
	   From rAthena code, it seems to just be FLEE +100%, so just 2x
	   Keeping n_B_KYOUKA[5] as an integer value instead of boolean to keep URL compatibility
	*/
	if(n_B_KYOUKA[5] > 0)
		n_B[27] *= 2;

	n_B[21] = n_B[27] + 20;
	n_B[22] = n_B[26] + 75;
	if(Taijin == 0)
	{
		myInnerHtml("B_AA"," + ",0);
		myInnerHtml("B_AB"," + ",0);
		myInnerHtml("B_AC","~",0);
		var wIJ = [6,12,13,21,22,14,15,23,24,25];
		var wIJ2 = [16,17];
		var wFront = "<Font color='BLUE'><B>";
		var wFront2 = "<Font color='RED'><B>";
		var wBack = "</B></Font>";

		for(i=0;i<=9;i++){
			var wIJstr = n_B[wIJ[i]];
			if(n_B[wIJ[i]] < n_B2[wIJ[i]])
				wIJstr =  wFront + n_B[wIJ[i]] + wBack;
			if(n_B[wIJ[i]] > n_B2[wIJ[i]])
				wIJstr =  wFront2 + n_B[wIJ[i]] + wBack;
			myInnerHtml("B_"+wIJ[i],wIJstr,0);
		}
		if(n_B[23] == n_B[24]){
			myInnerHtml("B_AC","",0);
			myInnerHtml("B_24","",0);
		}
		for(i=0;i<=1;i++){
			var wIJstr = n_B[wIJ2[i]];
			if(n_B[wIJ2[i]] < n_B2[wIJ2[i]])
				wIJstr =  wFront2 + n_B[wIJ2[i]] + wBack;
			if(n_B[wIJ2[i]] > n_B2[wIJ2[i]])
				wIJstr =  wFront + n_B[wIJ2[i]] + wBack;
			myInnerHtml("B_"+wIJ2[i],wIJstr,0);
		}

		myInnerHtml("B_2",SyuzokuOBJ[n_B[2]],0);
		w = Math.floor(n_B[3] / 10);
		if(n_B[3] != n_B2[3])
			myInnerHtml("B_3","<b>"+ wFront2 +(ZokuseiOBJ[w] + n_B[3] % 10 )+ wBack + "</b>",0);
		else
			myInnerHtml("B_3","<b>"+ (ZokuseiOBJ[w] + n_B[3] % 10)+ "</b>",0);
		myInnerHtml("B_4",SizeOBJ[n_B[4]],0);
	}
	else{
		n_B[27] += eval(B_TAISEI7.value);
		n_Ses = document.calcForm.B_Ses.checked;
		if(n_Ses){
			n_B[27] = Math.floor(n_B[27] *0.8);
		}
	}

	n_B_DEF2 = [0,0,0];
	n_B_DEF2[2] = n_B[23];
	n_B_DEF2[0] = n_B[24]; //

	n_B_DEF2[1] = Math.floor((n_B_DEF2[2] + n_B_DEF2[0]) /2);
	n_B_MDEF2 = n_B[25];
	n_B_HIT = n_B[26];
	n_B_FLEE = n_B[27];
}}

function calc()
{
	for(var i=0;i<=2;i++)
		InnStr[i] = "";

	StAllCalc();

	wCSize = weaponsize[n_A_WeaponType][n_B[4]];

	if(SkillSearch(78)){
		if((n_A_WeaponType==4 || n_A_WeaponType==5) && n_B[4]==1)
			wCSize = 1;
	}
	//custom TalonRO Asura ignores weapon size (i.e. Fist does 100% dmg on small/mid/large sized monster)
	if(n_A_ActiveSkill==197 || n_A_ActiveSkill==321)
		wCSize = 1;

	if(SkillSearch(153) || n_A_PassSkill2[7])
		wCSize = 1;

	if(cardOBJ[n_A_card[0]][0]==32||cardOBJ[n_A_card[1]][0]==32||cardOBJ[n_A_card[2]][0]==32||cardOBJ[n_A_card[3]][0]==32||cardOBJ[n_A_card[4]][0]==32||cardOBJ[n_A_card[5]][0]==32||cardOBJ[n_A_card[6]][0]==32||cardOBJ[n_A_card[7]][0]==32)
		wCSize = 1;
	if(EquipNumSearch(1177))
		wCSize = 1;


	w_HIT = n_A_HIT + 80 - (n_B_FLEE);
	w_HIT_EDP = w_HIT;
	if(w_HIT_EDP > 100)
		w_HIT_EDP = 100;
	if(w_HIT_EDP < 5)
		w_HIT_EDP = 5;
	if(SkillSearch(148))
		w_HIT = Math.floor(w_HIT * (100 + 2 * SkillSearch(148))/100);
	if(n_A_ActiveSkill==70 || n_A_ActiveSkill==6){
		w_HIT *= 1+n_A_ActiveSkillLV *0.05;
	}
	// Cenere + Naga Combo#608 - [Mist Slash]#400 HIT Rate + 50%
	if (400 == n_A_ActiveSkill && CardNumSearch(608))
		w_HIT *= 1.5;
	if((n_A_ActiveSkill==83 || n_A_ActiveSkill==388)&& SkillSearch(381)){
		w_HIT *= 1.5;
	}
	if(n_A_ActiveSkill==7){
		w_HIT *= 1+n_A_ActiveSkillLV *0.1;
	}
	if(n_A_ActiveSkill==272){
		w_HIT *= (1 + n_A_ActiveSkillLV * 0.1);
	}
	if(n_A_ActiveSkill==337){
		w_HIT = 100;
	}
	if(n_A_ActiveSkill==384){
		w_HIT = 100;
	}
	if(SkillSearch(364)){
		w_HIT = 100;
	}
	if(w_HIT > 100){
		w_HIT = 100;
	}else if(w_HIT < 5){
		w_HIT = 5;
	}
	if(StPlusCalc2(86)+StPlusCard(86))
		w_HIT = w_HIT + (100 - w_HIT) * (StPlusCalc2(86)+StPlusCard(86)) / 100;

	w_HIT = Math.floor(w_HIT *100)/100;
	w_HIT_HYOUJI = w_HIT;
	if(n_A_ActiveSkill==272)
		n_A_CRI += 20;
	if(n_A_ActiveSkill==401)
		n_A_CRI += 25 + n_A_ActiveSkillLV * 5;
	w_Cri = n_A_CRI - n_B[11] * 0.2 + 0.1;
	if(n_B_IJYOU[8])
		w_Cri *= 2;
	if(w_Cri < 0){
		w_Cri = 0;
	}
	else if(w_Cri > 100){
		w_Cri = 100;
	}


	TyouEnkakuSousa3dan = 0;
	wBC3_3danHatudouRitu = 0;
	if(SkillSearch(187))
	{
		wBC3_3danHatudouRitu = 30 - SkillSearch(187);
		
		// Stalker Card#619 - [Rogue Class, Monk Class] - [Triple Attack] Rate + 10%
		wBC3_3danHatudouRitu += 10 * CardNumSearch(619);
	}

	// Manage [Double Attack]
	wDA = 0;
	
	if (1 == n_A_WeaponType) // Only applies to Dagger
		wDA = SkillSearch(13) * 5;
		
	// Sidewinder Card#43 - Enable [Double Attack] Lv 1 on any weapon type
	if (CardNumSearch(43))
		wDA = Math.max(5, SkillSearch(13) * 5);
	
	// Nagan#399, Nagan [Rental]#1348 - Enable [Double Attack] Lv 5
	if (EquipNumSearch(399) || EquipNumSearch(1348))
		wDA = Math.max(25, SkillSearch(13) * 5);

	// Baby Chick#570 - Enable [Double Attack] Lv 2, does not apply on Fist
	if (EquipNumSearch(570) && n_A_WeaponType)
		wDA = Math.max(10, SkillSearch(13) * 5);

	// Snake Head Hat#1495 - Enable [Double Attack] Lv 1, does not apply on Fist
	if (EquipNumSearch(1495) && n_A_WeaponType)
		wDA = Math.max(5, SkillSearch(13) * 5);
	
	// Tempest#1789 - If [Chain Action Learned] enables [Double Attack] according to the level of [Chain Action] learned
	// [Every Refine Level] - Increase [Double Attack] rate further by 3%
	if (EquipNumSearch(1789))
		wDA = SkillSearch(427) * 5 + 3 * n_A_Weapon_ATKplus;
	
	// Sherwood Bow#1388 - Rogue/Stalker
	// #151 - Enable [Double Attack] usage
	if (1388 == n_A_Equip[0] && SQI_Bonus_Effect.findIndex(x => x == 151) > -1)
		wDA = Math.max(wDA, SkillSearch(13) * 5);
	
	// Stalker Card#619 - [Rogue Class, Super Novice] - [Double Attack] Rate + 10%
	if (20 == n_A_JOB || n_A_JobSearch2() == 14)
		wDA += 10 * CardNumSearch(619);
	
	// Chain Action#427 - Similar behaviour as Double Attack
	if (n_A_WeaponType == 17){
		wDA = SkillSearch(427) * 5;
		if(CardNumSearch(43))
			wDA = SkillSearch(427) * 5 + ((100 - SkillSearch(427) * 5) * 5 /100);
		if(EquipNumSearch(570))
			wDA = SkillSearch(427) * 5 + ((100 - SkillSearch(427) * 5) * 10 /100);
	}

	w_HIT_DA = w_HIT;
	if(wDA != 0 && n_A_WeaponType != 17){
		w_HIT_DA = w_HIT_DA * (100 + SkillSearch(13)) /100;
		if(w_HIT_DA >= 100)
			w_HIT_DA=100;
	}

	w998A = 100 - wBC3_3danHatudouRitu;
	w998B = wBC3_3danHatudouRitu * w_HIT /100;
	w998C = wBC3_3danHatudouRitu - w998B;
	w998D = w998A * wDA /100;
	w998E = w998D * w_HIT_DA /100;
	w998F = w998D - w998E;
	w998G = (100-wBC3_3danHatudouRitu-w998D) * w_Cri /100;
	w998H = 100 - wBC3_3danHatudouRitu -w998D -w998G;
	w998I = w998H * w_HIT /100;
	w998J = w998H - w998I;
	w998K = w998B +w998E +w998G +w998I;
	w998L = 100 -w998K;
	if(n_A_ActiveSkill==0 || n_A_ActiveSkill==272 || n_A_ActiveSkill==401 || (n_A_ActiveSkill==86 && (50 <= n_B[3] && n_B[3] < 60))){
		w_HIT_HYOUJI = Math.floor(w998K * 100) /100;
		myInnerHtml("CRInum",(Math.round(w998G * 100) / 100) + SubName[0],0);
	}

	w_FLEE = n_A_FLEE + 20 - (n_B_HIT);
	if(w_FLEE > 95){
		w_FLEE = 95;
	}else if(w_FLEE < 5){
		w_FLEE = 5;
	}
	if(Taijin==0)
		myInnerHtml("BattleFLEE",Math.floor((w_FLEE + (100 - w_FLEE) * n_A_LUCKY / 100) * 100) / 100,0);

	n_A_workDEX = Math.floor(n_A_DEX * (1 + (n_A_WeaponLV - 1) * 0.2));

	n_A_DMG = [0,0,0];

	if(n_A_workDEX>=n_A_Weapon_ATK || SkillSearch(155))
		n_A_DMG[2] = n_A_ATK + n_A_WeaponLV_Maxplus + Math.floor(n_A_Weapon_ATK * wCSize);
	else
		n_A_DMG[2] = n_A_ATK + n_A_WeaponLV_Maxplus + Math.floor((n_A_Weapon_ATK - 1) * wCSize);

	//[Bug Fix 2018-07-16 - Bowling Bash with Bow weapon formula] [NattWara]
	//if(n_A_WeaponType==10||n_A_WeaponType==17||n_A_WeaponType==18||n_A_WeaponType==19||n_A_WeaponType==20||n_A_WeaponType==21)
	if((n_A_WeaponType==10 && n_A_ActiveSkill!=76)||n_A_WeaponType==17||n_A_WeaponType==18||n_A_WeaponType==19||n_A_WeaponType==20||n_A_WeaponType==21)
		n_A_DMG[2] += Math.floor((ArrowOBJ[n_A_Arrow][0]-1) * wCSize);

	//[Bug Fix 2018-07-16 - Bowling Bash with Bow weapon formula] [NattWara]
	//if(n_A_WeaponType==10||n_A_WeaponType==17||n_A_WeaponType==18||n_A_WeaponType==19||n_A_WeaponType==20||n_A_WeaponType==21)
	if((n_A_WeaponType==10 && n_A_ActiveSkill!=76)||n_A_WeaponType==17||n_A_WeaponType==18||n_A_WeaponType==19||n_A_WeaponType==20||n_A_WeaponType==21)
	{
		w1 = n_A_ATK + n_A_WeaponLV_Maxplus + Math.floor(n_A_Weapon_ATK * n_A_Weapon_ATK / 100 * wCSize);
		w2 = n_A_ATK + n_A_WeaponLV_Maxplus + Math.floor(n_A_Weapon_ATK * n_A_workDEX / 100 * wCSize);

		w = Math.floor((ArrowOBJ[n_A_Arrow][0]-1) * wCSize);
		w1 += w;
		w2 += w;
		if(w1 > w2)w1 = w2;
		if(n_A_DMG[2] < w1)n_A_DMG[2] = w1;
	}

	//[Bug Fix 2018-07-16 - Bowling Bash with Bow weapon formula] [NattWara]
	//if(n_A_WeaponType==10||n_A_WeaponType==17||n_A_WeaponType==18||n_A_WeaponType==19||n_A_WeaponType==20||n_A_WeaponType==21)
	if((n_A_WeaponType==10 && n_A_ActiveSkill!=76)||n_A_WeaponType==17||n_A_WeaponType==18||n_A_WeaponType==19||n_A_WeaponType==20||n_A_WeaponType==21)
	{
		n_A_DMG[0] = n_A_ATK + n_A_WeaponLV_Minplus + Math.floor((n_A_Weapon_ATK * n_A_Weapon_ATK / 100) * wCSize);
		w = n_A_ATK + n_A_WeaponLV_Minplus + Math.floor((n_A_Weapon_ATK * n_A_workDEX / 100) * wCSize);
		if(n_A_DMG[0] > w)n_A_DMG[0] = w;
	}
	else{
		if(n_A_workDEX >= n_A_Weapon_ATK)
			n_A_DMG[0] = n_A_ATK + n_A_WeaponLV_Minplus + Math.floor(n_A_Weapon_ATK * wCSize);
		else{

			if(SkillSearch(155))
				n_A_workDEX = n_A_Weapon_ATK;
			n_A_DMG[0] = n_A_ATK + n_A_WeaponLV_Minplus + Math.floor(n_A_workDEX * wCSize);
		}
	}


	n_A_DMG[1] = (n_A_DMG[0] + n_A_DMG[2]) / 2;

	n_Enekyori=0;
	n_A_CriATK = [0,0,0];
	n_A_CriATK[1] = n_A_ATK + (n_A_WeaponLV_Minplus + n_A_WeaponLV_Maxplus) /2 + Math.floor(n_A_Weapon_ATK * wCSize);
	n_A_CriATK[0] = n_A_ATK + n_A_WeaponLV_Minplus + Math.floor(n_A_Weapon_ATK * wCSize);
	n_A_CriATK[2] = n_A_ATK + n_A_WeaponLV_Maxplus + Math.floor(n_A_Weapon_ATK * wCSize);

	if (n_A_WeaponType==10 || 17<=n_A_WeaponType && n_A_WeaponType <= 21)
	{
		n_Enekyori=1;
		
		for(i=0;i<=2;i++)
			n_A_CriATK[i] += Math.floor((ArrowOBJ[n_A_Arrow][0]) * wCSize);
	}


	BK_n_A_DMG = [0,0,0];
	BK_n_A_DMG[2] = n_A_DMG[2];
	BK_n_A_DMG[0] = n_A_DMG[0];
	BK_n_A_DMG[1] = n_A_DMG[1];

	ATKbai01();
	ATKbai02(1,1);

	n_PerHIT_DMG = BattleCalc2(0);

	wCriTyuu=1;
	n_A_CriATK[1] = BattleCalc(n_A_CriATK[1],10);
	n_A_CriATK[0] = BattleCalc(n_A_CriATK[0],10);
	n_A_CriATK[2] = BattleCalc(n_A_CriATK[2],10);
	wCriTyuu=0;


	n_A_EDP_DMG = [0,0,0];
	for(var i=0;i<=2;i++){
		n_A_EDP_DMG[i] = BattleCalcEDP(n_A_DMG[i],i);
		if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
			n_A_EDP_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*n_A_EDP_DMG[i]/200);
	}

	for(var i=0;i<=2;i++)
		n_A_CriATK[i] += EDP_DMG(i);

	var wk = [0,0,0];
	if(n_A_WeaponType == 11){
		for(var i=0;i<=2;i++){
			wk[i] = Math.floor(n_A_CriATK[i] * (0.01 + SkillSearch(13) * 0.02));
			n_A_CriATK[i] += wk[i];
		}
		if(n_A_CriATK[0] == n_A_CriATK[2])
			myInnerHtml("CRIATK",n_A_CriATK[0] +" ("+ (n_A_CriATK[0] - wk[0]) +" + "+ wk[0] +")",0);
		else
			myInnerHtml("CRIATK",n_A_CriATK[0] +"~"+ n_A_CriATK[2] +" ("+ (n_A_CriATK[0] - wk[0]) +"~"+ (n_A_CriATK[2] - wk[2]) +" + "+ wk[0] +"~"+ wk[2] +")",0);
	}else{
		if(n_A_CriATK[0] == n_A_CriATK[2])
			myInnerHtml("CRIATK",n_A_CriATK[1],0);
		else
			myInnerHtml("CRIATK",n_A_CriATK[0] +"~"+ n_A_CriATK[2],0);
	}

	n_Max_DMG = 0;
	n_Min_DMG = 9999999;
	if((n_A_ActiveSkill==0  || (n_A_ActiveSkill==86 && (50 <= n_B[3] && n_B[3] < 60))) && w998G > 0){
		n_Min_DMG = n_A_CriATK[0];
		n_Max_DMG = n_A_CriATK[2];
	}
	debug_atk="\n --- (calc) ---";
	debug_atk+="\nb_BattleCalc999:"+n_A_DMG[1];
	BattleCalc999();
	// Update Extended Info
	KakutyouKansuu();
	debug_atk+="\na_BattleCalc999 (w_DMG[1]):"+w_DMG[1]+"\n\tn_A_DMG[1]:"+n_A_DMG[1];

	if(Taijin==1 && n_Enekyori==0){
		var RS1 = eval(document.calcForm.B_TAISEI14.value);
		var RS2 = eval(document.calcForm.B_TAISEI15.value);
		if(RS1 && n_A_ActiveSkill != 326){
			RS1 = 10 + 3 * RS1;
			var w;
			var w2 = 1;
			if(n_B_KYOUKA[1]==1)
				w2 = 1.5;
			for(var i=0;i<=2;i++){
				w = Math.floor(Last_DMG_A[i] * w2 * RS1 / 100);
				InnStr[i] += "<BR><Font color=Red><B>"+ w +"(Reflection)</B></Font>";
			}
		}
		if(RS2){
			var w;
			var w2 = 1;
			var w3 = 1;
			if(n_B_KYOUKA[1]==1)
				w2 = 1.5;
			if(n_Ses==1){
				if(n_A_ActiveSkill != 0)
					w3 = 100 / 60;
				else
					w3 = 100 / 80;
			}
			for(var i=0;i<=2;i++){
				w = Math.floor(Last_DMG_B[i] * w2 * w3 * RS2 / 100)
				InnStr[i] += "<BR><Font color=Red><B>"+ w +"(Reflection)</B></Font>";
			}
		}
	}

	for(var i=0;i<InnStr.length;i++)
		myInnerHtml("strID_"+i,InnStr[i],0);
	
	KakutyouKansuu();
}


function BattleCalc(w_atk,w_2)
{
	if(debug_dmg_avg) {
		debug_atk+="\n --- (BattleCalc) def-related ---";
		debug_atk+="\nb_BattleCalc4:"+w_atk;
	}
	
	w_atk = ApplySkillAtkBonus(w_atk)

	if(w_2==10)
		w_atk += n_A_WeaponLV_seirenATK;
	else
		w_atk=BattleCalc4(w_atk,w_2,0);

	if(debug_dmg_avg)
		debug_atk+="\na_BattleCalc4:"+w_atk;

	if(debug_dmg_avg)
		debug_atk+="\n --- (if atk<1: atk=1) ---";
	if(w_atk < 1)w_atk = 1;

	if(debug_dmg_avg) {
		debug_atk+="\n --- (BattleCalc) mastery-related ---";
		debug_atk+="\nb_w_atk:"+w_atk;
	}
	if(n_A_WeaponType == 1 || n_A_WeaponType == 2)w_atk += 4 * SkillSearch(3);
	else if(n_A_WeaponType == 3)w_atk += 4 * SkillSearch(4);
	else if(n_A_WeaponType == 4 || n_A_WeaponType == 5)
	{
		if(SkillSearch(78) == 0)
			w_atk += 4 * SkillSearch(69);
		else
			w_atk += 5 * SkillSearch(69);

	}
	else if(n_A_WeaponType == 11)w_atk += 3 * SkillSearch(81);
	else if(n_A_WeaponType == 8)w_atk += 3 * SkillSearch(89);
	else if(n_A_WeaponType == 13 || n_A_WeaponType == 0)w_atk += 3 * SkillSearch(183);
	else if(n_A_WeaponType == 14)w_atk += 3 * SkillSearch(198);
	else if(n_A_WeaponType == 15)w_atk += 3 * SkillSearch(206);
	else if(n_A_WeaponType == 12)w_atk += 3 * SkillSearch(224);
	else if(n_A_WeaponType == 6 || n_A_WeaponType == 7)w_atk += 3 *SkillSearch(241);

	if(n_A_WeaponType == 0 && SkillSearch(329))
		w_atk += 10 * SkillSearch(329);
	if(debug_dmg_avg)
		debug_atk+="\na_w_atk:"+w_atk;

	if(debug_dmg_avg)
		debug_atk+="\nb_DemonBane:"+w_atk;
	if(n_B[2] == 6 || (90 <= n_B[3] && n_B[3] <= 99)){
		if(SkillSearch(24))
			w_atk += Math.floor((3 + 5/100 * n_A_BaseLV) * SkillSearch(24));
	}
	if(debug_dmg_avg)
		debug_atk+="\na_DemonBane:"+w_atk;

	if(n_B[2] == 2 || n_B[2] == 4){
		w_atk += 4 * SkillSearch(116);
		if(SkillSearch(390))
			w_atk += n_A_STR;
	}
	if(debug_dmg_avg){
		debug_atk+="\n --- (BattleCalc)  ---";
		debug_atk+="\na_BattleCalc2:"+w_atk;
	}
	w_atk = BattleCalc2(w_atk);
	if(debug_dmg_avg)
		debug_atk+="\na_BattleCalc2:"+w_atk;

	return Math.floor(w_atk);
}


function BattleCalc2(w999)
{

	w999_AB = 0;
	if(w999 > 0)
		w999_AB = 1;


	w999 += 2 * SkillSearch(148);
	if(debug_dmg_avg) {
		debug_atk+="\n --- (BattleCalc2) atk Element ---";
		debug_atk+="\nb_wBCEDPch:"+w999;
	}
	//watk element calculation
	if(wBCEDPch==0)
		w999 = Math.floor(w999 * zokusei[n_B[3]][n_A_Weapon_zokusei]);
	if(debug_dmg_avg)
		debug_atk+="\na_wBCEDPch:"+w999;

	if(n_A_WeaponType == 0 && SkillSearch(329))
		if(n_A_ActiveSkill==331 || n_A_ActiveSkill==333 || n_A_ActiveSkill==335 || n_A_ActiveSkill==337)
			w999 += 10 * SkillSearch(329);

	if(debug_dmg_avg) {
		debug_atk+="\n --- (BattleCalc2) SSphere/FlipCoin ---";
		debug_atk+="\nb_SSS:"+w999;
	}
	if(n_A_JOB==15||n_A_JOB==29)
		w999 += 3 * SkillSearch(185) * SkillSearch(185);
	else
		w999 += 3 * n_A_PassSkill2[10] * n_A_PassSkill2[10];

	w999 += 3 * SkillSearch(416);
	if(debug_dmg_avg)
		debug_atk+="\na_SSS:"+w999;

	if(n_A_WeaponType != 0 && w999_AB == 1)
		w999 += 20 * SkillSearch(254);
	
	// Blade of Angels#1379 - #50 Enable Aura Blade lv 5
	if (1379 == n_A_Equip[0] && SQI_Bonus_Effect.findIndex(x => x == 50) > -1)
		w999 += 100;

	if(wBCEDPch==0){
		if(n_A_ActiveSkill==17 || n_A_ActiveSkill==307)
			w999 += 15 * n_A_ActiveSkillLV;
		if(n_A_ActiveSkill==86 && (n_B[3] < 50 ||  60 <= n_B[3]))
			w999 += 75;
	}
	if(n_A_ActiveSkill==423)
		w999 += Math.floor(n_A_MATK[w_MagiclBulet] * (100 - n_B[15]) /100 - n_B_MDEF2);
	if(n_A_ActiveSkill==437)
		w999 += n_A_ActiveSkillLV * 50;

	if(cardOBJ[n_A_card[0]][0]==106 && cardOBJ[n_A_card[1]][0]==106 && cardOBJ[n_A_card[2]][0]==106){
		w999 += 40;
	}else{
		for(i=0;i<=2;i++){
			if(cardOBJ[n_A_card[i]][0]==106)
				w999 += 5;
		}
	}
	if(n_A_card[3]==106)
		w999 += 10;


	if(n_A_ActiveSkill == 394){
		w999 += SyurikenOBJ[eval(document.calcForm.SkillSubNum.value)][0];
		w999 += 3 * SkillSearch(393);
		w999 += 4 * n_A_ActiveSkillLV;
	}

	if(n_A_ActiveSkill == 395)
		w999 += KunaiOBJ[eval(document.calcForm.SkillSubNum.value)][0] * 3;

	if(debug_dmg_avg) {
		debug_atk+="\n --- (BattleCalc2) weap/card effect modifier ---";
		debug_atk+="\nb_BaiCI:"+w999;
	}
	w999 = BaiCI(w999);
	if(debug_dmg_avg)
		debug_atk+="\na_BaiCI:"+w999;

	if(n_A_ActiveSkill==169 && n_A_WeaponType==10)
		w999 = Math.floor(w999 / 2);

	if(n_Nitou && n_A_ActiveSkill==0){
		if(n_A_WeaponType != 0)
			w999 = Math.floor(w999 * (50 + SkillSearch(79) *10) /100);
	}

	if(n_A_ActiveSkill==423)
		w999 = w999 * zokusei[n_B[3]][8];
	if(n_A_ActiveSkill==437)
		w999 = w999 * zokusei[n_B[3]][0];
	if(Taijin==1)
		if(n_A_ActiveSkill==317 || n_A_ActiveSkill==318)
			w999 = 0;

	return w999;
}


function BaiCI(wBaiCI)
{

	if(wBCEDPch==0 && not_use_card == 0){

		if(debug_dmg_avg) {
			debug_atk+="\n --- (BaiCI) Weapon/Card Race Modifier ---";
			debug_atk+="\nb_wBaiCI:"+wBaiCI;
		}
		w1=n_tok[30+n_B[2]];
		wBaiCI = Math.floor(wBaiCI * (100+w1) /100);
		if(debug_dmg_avg)
			debug_atk+="\na_wBaiCI:"+wBaiCI;

		if(debug_dmg_avg) {
			debug_atk+="\n --- (BaiCI) Weapon/Card Element Modifier ---";
			debug_atk+="\nb_wBaiCI:"+wBaiCI;
		}
		w1=n_tok[40+Math.floor(n_B[3] / 10)];
		wBaiCI = Math.floor(wBaiCI * (100+w1) /100);
		if(debug_dmg_avg)
			debug_atk+="\na_wBaiCI:"+wBaiCI;
		
		// bShortAtkRate
		if (!n_Enekyori)
			wBaiCI = Math.floor(wBaiCI * (1 + n_tok[300 + Math.floor(n_B[3] / 10)] / 100));

		if(debug_dmg_avg) {
			debug_atk+="\n --- (BaiCI) Weapon/Card Size Modifier ---";
			debug_atk+="\nb_wBaiCI:"+wBaiCI;
		}
		
		w1=n_tok[27 + n_B[4]];
		//custom TalonRO RWC Commemorative Pin +1% atk against small/mid/large size each refine above 4
		if(EquipNumSearch(1468) && n_A_HEAD_DEF_PLUS >= 4)
			w1 += n_A_HEAD_DEF_PLUS-3;
		wBaiCI = Math.floor(wBaiCI * (100+w1) /100);
		if(debug_dmg_avg)
			debug_atk+="\na_wBaiCI:"+wBaiCI;

		if(debug_dmg_avg) {
			debug_atk+="\n --- (BaiCI) range damage Modifier ---";
			debug_atk+="\nb_wBaiCI:"+wBaiCI;
		}
		if(n_Enekyori==1){
			if(TyouEnkakuSousa3dan != -1){
				w1=n_tok[25];
				wBaiCI = Math.floor(wBaiCI * (100+w1) /100);
			}
		}
		if(debug_dmg_avg)
			debug_atk+="\na_wBaiCI:"+wBaiCI;

		if(debug_dmg_avg) {
			debug_atk+="\n --- (BaiCI) damage Modifier ---";
			debug_atk+="\nb_wBaiCI:"+wBaiCI;
		}

		w1=0;
		if(n_B[19] == 1)
			w1 += n_tok[26];

		w1 += n_tok[80];
		wBaiCI = Math.floor(wBaiCI * (100+w1) /100);
		if(debug_dmg_avg)
			debug_atk+="\n\tw1:"+w1+"(%)\na_wBaiCI:"+wBaiCI;

		// Manage critical damage modifier
		if (wCriTyuu)
		{
			// This modifier does not increase Shadow Slash#401 and Sharpshoot#272 damage
			crit_dmg_modifier = (272 == n_A_ActiveSkill || 401 == n_A_ActiveSkill) ? 0 : n_tok[70];
			
			// #24 - 10% more damage with Critical Hits - Artemis bonus also increases Sharpshoot damage
			if (272 == n_A_ActiveSkill && 1377 == n_A_Equip[0] && SQI_Bonus_Effect.findIndex(x => x == 24) > -1) // Sharpshoot#272
				crit_dmg_modifier = 10;

			if (401 == n_A_ActiveSkill) // Shadow Slash#401
			{
				crit_dmg_modifier = 10 * CardNumSearch(607); // Cenere card#607
				// #109 - 20% more damage with Critical Hits - Hira bonus also increases Shadow Slash damage
				if (1385 == n_A_Equip[0] && SQI_Bonus_Effect.findIndex(x => x == 109) > -1)
					crit_dmg_modifier += 20;
			}

			wBaiCI = Math.floor(wBaiCI * (100 + crit_dmg_modifier) /100);
		}

		if(108<=n_B[0] && n_B[0]<=115 || n_B[0]==319 || n_B[0] == 233) 
			wBaiCI = Math.floor(wBaiCI * (100+n_tok[81]) /100);

		if(116<=n_B[0] && n_B[0]<=120)
			wBaiCI = Math.floor(wBaiCI * (100+n_tok[82]) /100);

		if(49<=n_B[0] && n_B[0]<=52 || 55==n_B[0] || 221==n_B[0])
			wBaiCI = Math.floor(wBaiCI * (100+n_tok[83]) /100);

		if(106==n_B[0] || 152==n_B[0] || 308==n_B[0] || 32==n_B[0] || 541==n_B[0])
			wBaiCI = Math.floor(wBaiCI * (100+n_tok[84]) /100);

		if(debug_dmg_avg) {
			debug_atk+="\n --- (BaiCI) specific monster Modifier ---";
			debug_atk+="\nb_wBaiCI:"+wBaiCI;
		}
		wBaiCI = Math.floor(wBaiCI * (100+StPlusCalc2(1000+n_B[0])+StPlusCard(1000+n_B[0])) /100);
		if(debug_dmg_avg)
			debug_atk+="\na_wBaiCI:"+wBaiCI;

		if(SkillSearch(258))
			wBaiCI = wBaiCI * 2;
		if(SkillSearch(266))
			wBaiCI = Math.floor(wBaiCI * (150 + 50 * SkillSearch(266)) /100);
		if(n_A_ActiveSkill==86 && (50 <= n_B[3] && n_B[3] < 60))
			wBaiCI = Math.floor(wBaiCI * (100 + 30 * n_A_ActiveSkillLV) /100);

		if(n_A_WeaponType == 11 && SkillSearch(262))
			wBaiCI = Math.floor(wBaiCI * (110 + 2 * SkillSearch(262))/100);

		w1 = 0;
		if(Taijin == 0){
			if(SkillSearch(354) && SkillSearch(365))
				w1 += (n_A_BaseLV + n_A_STR + n_A_LUK + n_A_DEX) / (12 - SkillSearch(354) *3);
			else if(SkillSearch(354) && n_B[4]==2 && n_B[6] >= 17392)
				w1 += (n_A_BaseLV + n_A_STR + n_A_LUK + n_A_DEX) / (12 - SkillSearch(354) *3);
			else if(SkillSearch(352) && n_B[4]==0)
				w1 += (n_A_BaseLV + n_A_LUK + n_A_DEX) / (12 - SkillSearch(352) *3);
			else if(SkillSearch(353) && n_B[4]==1 && n_B[6] >= 5218)
				w1 += (n_A_BaseLV + n_A_LUK + n_A_DEX) / (12 - SkillSearch(353) *3);
		}else{
			if(SkillSearch(354)){
				w1 += (n_A_BaseLV + n_A_STR + n_A_LUK + n_A_DEX) / (12 - SkillSearch(354) *3);
			}else{
				 if(SkillSearch(352)){
					w1 += (n_A_BaseLV + n_A_LUK + n_A_DEX) / (12 - SkillSearch(352) *3);
				 }else{
					 if(SkillSearch(353))
						w1 += (n_A_BaseLV + n_A_LUK + n_A_DEX) / (12 - SkillSearch(353) *3);
				}
			}
		}
		wBaiCI = Math.floor(wBaiCI * (100+w1) /100);
	}

	if(debug_dmg_avg) {
		debug_atk+="\n --- (BaiCI) tPlusDamCut Modifier ---";
		debug_atk+="\nb_wBaiCI:"+wBaiCI;
	}
	wBaiCI = Math.floor(tPlusDamCut(wBaiCI));
	if(debug_dmg_avg)
		debug_atk+="\na_wBaiCI:"+wBaiCI;

	if(debug_dmg_avg) {
		debug_atk+="\n --- (BaiCI) card-skill Modifier ---";
		debug_atk+="\nb_wBaiCI:"+wBaiCI;
	}

	if(n_A_PassSkill8[22]){
		if(MANUKU_MONSTER())
			wBaiCI = wBaiCI * 110 / 100
	}
	if(n_A_PassSkill8[25]){
		if(SUPURE_MONSTER())
			wBaiCI = wBaiCI * 110 / 100
	}

	return wBaiCI;
}

// Specific skill % damage bonus - pc_skillatk_bonus()
function ApplySkillAtkBonus(dmg)
{
	skill_atk_bonus_ratio = 0;
	if(n_A_ActiveSkill == 6 && n_A_SHOES_DEF_PLUS >= 9 && CardNumSearch(362)) // Bash#6
			skill_atk_bonus_ratio += 10;
	if(n_A_ActiveSkill == 76 && (n_A_WeaponType==2 || n_A_WeaponType==3)) // Bowling Bash#76
			skill_atk_bonus_ratio += 25 * CardNumSearch(464);
	if(n_A_ActiveSkill == 41 && n_A_WeaponType==10) // Arrow Shower#41
			skill_atk_bonus_ratio += 50 * CardNumSearch(465);
	if(n_A_ActiveSkill == 40 && n_A_Weapon_ATKplus >= 9 && EquipNumSearch(1089)) // Double Strafe#40
			skill_atk_bonus_ratio += 20;

	// Sharp Shooting#272
	if (n_A_ActiveSkill == 272 && EquipNumSearch(1045))
		skill_atk_bonus_ratio += n_A_Weapon_ATKplus * 3;

	//custom TalonRO Imperial Guard: Shield Chain damage +2% each refine above 6
	if (n_A_ActiveSkill == 324 && n_A_LEFT_DEF_PLUS > 6 && EquipNumSearch(1459))
		skill_atk_bonus_ratio += 2*(n_A_LEFT_DEF_PLUS-6);
	
	//custom TalonRO Black Wing: Back Stab#169 damage +2% each refine
	if (n_A_ActiveSkill == 169 && EquipNumSearch(1463))
		skill_atk_bonus_ratio += 2*n_A_Weapon_ATKplus;

	// Back Stab#169 - Brave assassin damascus [Loa] 2018-07-24
	if (n_A_ActiveSkill == 169 && n_A_JobSearch2() == 14 && EquipNumSearch(897))
		skill_atk_bonus_ratio += 10;

	// Raid#171 - Brave assassin damascus [Loa] 2018-07-24
	if(n_A_ActiveSkill == 171 && n_A_JobSearch2() == 14 && EquipNumSearch(897))
		skill_atk_bonus_ratio += 10;

	//custom TalonRO Cannon Spear: Head Crush damage +5% each 3rd refine
	if(n_A_ActiveSkill == 260 && EquipNumSearch(1516))
		skill_atk_bonus_ratio += 3 * Math.floor(n_A_Weapon_ATKplus / 3);

	/*
		Assaulter Spear
		[Refine level 8-10]
		Increase damage of Spiral Pierce by 20%.
	*/
	if (n_A_Weapon_ATKplus >= 8 && n_A_ActiveSkill == 259 && EquipNumSearch(903))
		skill_atk_bonus_ratio += 20;

	/*
		Glorious Tablet
		Increase damage with [Flying Side Kick] by 10%.
	*/
	if ((n_A_ActiveSkill == 339 || n_A_ActiveSkill == 305) && EquipNumSearch(1094))
		skill_atk_bonus_ratio += 10;

	/*
		Brave Assassin Damascus
		[Crusader Class]
		Add 5% more damage with [Shield Chain]
	*/
	if (n_A_JobSearch2() == 13 && n_A_ActiveSkill == 324 && EquipNumSearch(897))
		skill_atk_bonus_ratio += 5;

	/*
		Soldier Grenade Launcher
		[Refine level 6-10]
		Increase damage of [Ground Drift] by 25%.
	*/
	if (n_A_Weapon_ATKplus >= 6 && n_A_ActiveSkill == 437 && EquipNumSearch(929))
		skill_atk_bonus_ratio += 25;

	/*
		Brave Gladiator Blade
		[Rogue and Crusader Classes]
	*/
	if ((n_A_JobSearch2() == 13 || n_A_JobSearch2() == 14)
		&& n_A_ActiveSkill == 161 && EquipNumSearch(900))
	{
		// Add 15% more damage with [Holy Cross] skill.
		skill_atk_bonus_ratio += 15;
		// [Refine level 7-10] Add an additional 5% more damage with [Holy Cross] skill.
		if (n_A_Weapon_ATKplus >= 7)
			skill_atk_bonus_ratio += 5;
		// For every refine +8 or higher, add 1% more damage with [Holy Cross] skill.
		if (n_A_Weapon_ATKplus >= 8)
			skill_atk_bonus_ratio += n_A_Weapon_ATKplus - 7;
	}

	/*
		Glorious Holy Avenger
		[Refine Rate 7~10]
		Increases damage with [Holy Cross] by 15%.
	*/
	if (n_A_Weapon_ATKplus >= 7 && n_A_ActiveSkill == 161 && EquipNumSearch(1079))
		skill_atk_bonus_ratio += 15;

	if (n_A_ActiveSkill == 428 && n_A_Weapon_ATKplus >= 9 && EquipNumSearch(1099))
		skill_atk_bonus_ratio += 2 * n_A_Weapon_ATKplus;
	
	if (n_A_ActiveSkill == 430 && n_A_Weapon_ATKplus >= 9 && EquipNumSearch(1100))
		skill_atk_bonus_ratio += 3 * n_A_Weapon_ATKplus;
	
	if (n_A_ActiveSkill == 436 && n_A_Weapon_ATKplus >= 9 && EquipNumSearch(1102))
		skill_atk_bonus_ratio += 2 * n_A_Weapon_ATKplus;
	
	if (n_A_ActiveSkill == 437 && n_A_Weapon_ATKplus >= 9 && EquipNumSearch(1103))
		skill_atk_bonus_ratio += 2 * n_A_Weapon_ATKplus;

	if ((n_A_ActiveSkill == 6 || n_A_ActiveSkill == 76)
		&& n_A_ActiveSkillLV == 10 && EquipNumSearch(1159))
			skill_atk_bonus_ratio += 50;

	if (n_A_ActiveSkill == 65 && (SU_LUK >= 90 || SU_DEX >= 90) && EquipNumSearch(1164))
		skill_atk_bonus_ratio += 15;

	if (n_A_ActiveSkill == 264 && SkillSearch(81) == 10 && EquipNumSearch(1176))
		skill_atk_bonus_ratio += 20;

	if (TyouEnkakuSousa3dan == -1 && EquipNumSearch(639))
		skill_atk_bonus_ratio += 15;

	if ((n_A_ActiveSkill==83 || n_A_ActiveSkill==388) && wBCEDPch == 0 && SkillSearch(381))
		skill_atk_bonus_ratio += 10;
	
	if (n_A_ActiveSkill == 264) {
		// Enforcer Cape#1699 - [Every Refine Level] Increase [Meteor Assault] damage by 1%
		skill_atk_bonus_ratio += n_A_SHOULDER_DEF_PLUS * EquipNumSearch(1699)
		
		// Brave Carnage Katar#909 - [Refine level 7~10] Increase [Meteor Assault] damage by 15%
		if(n_A_Weapon_ATKplus >= 7)
			skill_atk_bonus_ratio += 15 * EquipNumSearch(909);
	}
	
	// Glorious Claw#1096
	if (EquipNumSearch(1096)) {
		// [Every Refine Level] Increase [Triple Attack], [Chain Combo] and [Combo Finish] damage by 5%
		if (n_A_ActiveSkill >= 187 || n_A_ActiveSkill <= 189)
			skill_atk_bonus_ratio += 5 * n_A_Weapon_ATKplus;
		// [Every Refine Level Above +5]  Increase [Tiger Knuckle Fist] and [Chain Crush Combo] damage by 5%
		if (n_A_ActiveSkill == 289 || n_A_ActiveSkill == 290)
			skill_atk_bonus_ratio += 5 * Math.max(0, n_A_Weapon_ATKplus - 5);
	}

	// Glorious Claymore#1080 - [Every Refine Level] Increase [Bowling Bash] and [Charge Attack] damage by 1% [Amor]
	if (n_A_ActiveSkill == 76 || n_A_ActiveSkill == 308)
		skill_atk_bonus_ratio += n_A_Weapon_ATKplus * EquipNumSearch(1080);

	if (n_A_ActiveSkill == 65) {
		// Glorious Two Handed Axe#1087 - [Every Refine Level] Increase [Mammonite] damage by 2% [Amor]
		skill_atk_bonus_ratio += 2 * n_A_Weapon_ATKplus * EquipNumSearch(1087);
		
		// Glorious Cleaver#1088 - [Every Refine Level] Increase [Mammonite] damage by 1% [Amor]
		skill_atk_bonus_ratio += n_A_Weapon_ATKplus * EquipNumSearch(1088);
	}

	// Glorious Flamberge#1077 - [Every Refine Level] Increase [Bash], [Mammonite] and [Back Stab] damage by 2% [Amor]
	if (n_A_ActiveSkill == 65 || n_A_ActiveSkill == 6 || n_A_ActiveSkill == 169)
		skill_atk_bonus_ratio += 2 * n_A_Weapon_ATKplus * EquipNumSearch(1077);

	// Glorious Grenade Launcher#1103 - [Every Refine Level] Increase [Ground Drift] damage by 2% [Amor]
	if (n_A_ActiveSkill == 437)
		skill_atk_bonus_ratio += 2 * n_A_Weapon_ATKplus * EquipNumSearch(1103);

	if (n_A_ActiveSkill == 418) {
		// Glorious Grenade Launcher#1103 - [Every Refine Level] Increase [Triple Action] damage by 1% [Amor]
		skill_atk_bonus_ratio += n_A_Weapon_ATKplus * EquipNumSearch(1103);
		
		// Glorious Grenade Launcher#1103, Glorious Rifle#1100, Glorious Shotgun#1102 - [If Scouter Is Not Equipped] Increase [Triple Action] damage by 30%
		if (!EquipNumSearch(1387))
			skill_atk_bonus_ratio += 30 * (EquipNumSearch(1103) + EquipNumSearch(1100) + EquipNumSearch(1102));
	}

	// Glorious Huuma Shuriken#1098 - [Every Refine Level] Increase [Throw Huuma Shuriken] damage by 3% [Amor]
	if (n_A_ActiveSkill == 396)
		skill_atk_bonus_ratio += 3 * n_A_Weapon_ATKplus * EquipNumSearch(1098);

	// Glorious Revolver#1099 - [Every Refine Level] Increase [Rapid Shower] damage by 1% [Amor]
	if (n_A_ActiveSkill == 428)
		skill_atk_bonus_ratio += n_A_Weapon_ATKplus * EquipNumSearch(1099);

	// Glorious Rifle#1100 - [Every Refine Level] Increase [Tracking] and [Piercing Shot] damage by 3% [Amor]
	if (n_A_ActiveSkill == 430 || n_A_ActiveSkill == 432)
		skill_atk_bonus_ratio += 3 * n_A_Weapon_ATKplus * EquipNumSearch(1100);

	// Glorious Shotgun#1102 - [Every Refine Level] Increase [Spread Attack] damage by 2% [Amor]
	if (n_A_ActiveSkill == 436)
		skill_atk_bonus_ratio += 2 * n_A_Weapon_ATKplus * EquipNumSearch(1102);

	// Valorous Battle CrossBow#913 - [Refine level 8-10] Increase damage with [Sharp Shooting] by 10%] [Gawk]
	if (n_A_ActiveSkill == 272 && n_A_Weapon_ATKplus >= 8)
		skill_atk_bonus_ratio += 10 * EquipNumSearch(913);

	// Glorious Hunter Bow#1089 - [Every Refine] Increases [Double Strafing] damage by 2%] [Gawk]
	if (n_A_ActiveSkill == 40)
		skill_atk_bonus_ratio += 2 * n_A_Weapon_ATKplus * EquipNumSearch(1089);

	/*
		Valorous Carnage Katar#910
		[Refine Level 6~10]
		Increases damage with [Sonic Blow] by 10%.
		[Refine Level 9~10]
		Increases damage with [Sonic Blow] by 20%.
	*/
	if (n_A_Weapon_ATKplus >= 6 && (83 == n_A_ActiveSkill || 388 == n_A_ActiveSkill) && EquipNumSearch(910)) {
		skill_atk_bonus_ratio += 10;
		
		if (n_A_Weapon_ATKplus >= 9)
			skill_atk_bonus_ratio += 20;
	}
	
	// Nibelungen#1386 - Knight/Lord Knight
	// #127 - Increase damage inflicted on Large size monster by 15% when using [Pierce#70] or [Brandish Spear#73]
	if (1386 == n_A_Equip[0] && 2 == n_B[4] && (70 == n_A_ActiveSkill || 73 == n_A_ActiveSkill) && SQI_Bonus_Effect.findIndex(x => x == 127) > -1)
		skill_atk_bonus_ratio += 15;
	
	// Nibelungen#1386 + 1st Commander of Destruction#601 - Brandish damage bonus reduced by 10%
	if (1386 == n_A_Equip[0] && 73 == n_A_ActiveSkill)
		skill_atk_bonus_ratio -= 10 * CardNumSearch(601);

	// [Two-Handed Spear] - 50% more damage with [Holy Cross]#161.
	if (5 == n_A_WeaponType && 161 == n_A_ActiveSkill)
		skill_atk_bonus_ratio += 50 * CardNumSearch(602);
	
	// Amdarais Card#604 - [Cart Termination] damage inflicted on Neutral Element monsters by 10%.
	if (326 == n_A_ActiveSkill && n_B[3] < 5) // Neutral 0-4
		skill_atk_bonus_ratio += 10 * CardNumSearch(604);
	// Amdarais Card#604 - [Cart Termination] damage inflicted on Ghost Element monsters by 25%.
	if (326 == n_A_ActiveSkill && n_B[3] > 80 && [3] < 85) // Ghost 81-84
		skill_atk_bonus_ratio += 25 * CardNumSearch(604);
	
	// Elemental Huuma#1771#1772#1773 - 50% more damage with [Throw Kunai#395] when equipped with elemental kunais.
	if (395 == n_A_ActiveSkill && ((EquipNumSearch(1771) && 2 == document.calcForm.SkillSubNum.value)
		|| (EquipNumSearch(1772) && 1 == document.calcForm.SkillSubNum.value)
		|| (EquipNumSearch(1773) && 0 == document.calcForm.SkillSubNum.value)))
		skill_atk_bonus_ratio += 50;
	
	// Huuma Swirling Petal#1770 - [Every Refine Level] - 5% more damage with [Throw Huuma Shuriken#396]
	if (396 == n_A_ActiveSkill && EquipNumSearch(1770))
		skill_atk_bonus_ratio += 5 * n_A_Weapon_ATKplus;
	
	// Heaven's Feather & Hell's Fire#1785 - [Every Refine Level] - 2% more damage with [Desperado#429]
	if (429 == n_A_ActiveSkill && EquipNumSearch(1785))
		skill_atk_bonus_ratio += 2 * n_A_Weapon_ATKplus;

	// Color Scope#1786 - [Every Refine Level] - 3% more damage with [Piercing Shot#432]
	if (432 == n_A_ActiveSkill && EquipNumSearch(1786))
		skill_atk_bonus_ratio += 3 * n_A_Weapon_ATKplus;
	
	// Rolling Thunder#1790 - [Every Refine Level] - 5% more damage with [Spread Attack#436]
	if (436 == n_A_ActiveSkill && EquipNumSearch(1790))
		skill_atk_bonus_ratio += 5 * n_A_Weapon_ATKplus;
	
	dmg = dmg * (100 + StPlusCalc2 (5000 + n_A_ActiveSkill) + StPlusCard(5000 + n_A_ActiveSkill) + skill_atk_bonus_ratio) / 100;

	return Math.floor(dmg);
}

function BattleCalc3(w998)
{
	wBC3_3dan = w998B * TyouEnkakuSousa3dan;
	wBC3_DA = w998E * w998 * 2;
	wBC3_Cri = w998G * n_A_CriATK[1];
	wBC3_Normal = w998I * w998;
	wBC3_Miss = w998L * BattleCalc2(0);

	wBC3_X = (wBC3_3dan +wBC3_DA +wBC3_Cri +wBC3_Normal +wBC3_Miss) /100;

	return tPlusLucky(wBC3_X);
}


function BattleCalc3left(w998)
{

	wBC3L2 = 0;
	for(i=4;i<=7;i++){
		if(cardOBJ[n_A_card[i]][0]==106)
			wBC3L2 += 5;
	}

	wBC3_Normal = w998 * w_HIT /100;
	wBC3_Miss = wBC3L2 * (100-w_HIT) /100;

	wBC3_X = wBC3_Normal + wBC3_Miss;

	wBC3_X = tPlusDamCut(wBC3_X);

	return tPlusLucky(wBC3_X);
}



function SkillSearch(n)
{
	for(var k=0;k<=14;k++)
	{
		if(JobSkillPassOBJ[n_A_JOB][k] == n)
		{
			return n_A_PassSkill[k];
		}
	}
	return 0;
}

function ApplyDefReduction(damage, ignore_def, pierce_def)
{
	if (!ignore_def)
	{
		vit_def = [0, 0, 0]
		vit_def_bonus = Math.floor(n_B_DEF2[0] / 20) * Math.floor(n_B_DEF2[0] / 20);
		
		if (Taijin == 0 && n_B_IJYOU[21]) // Eska increases the random part of the formula by 100
			vit_def_bonus += 100;
		
		vit_def[0] = n_B_DEF2[2];
		vit_def[1] = n_B_DEF2[1] + Math.floor(vit_def_bonus / 2);
		vit_def[2] = n_B_DEF2[0] + vit_def_bonus;
		
		effective_def = n_B[14];

		for (i = 0; i <= 2; ++i)
		{
			if (pierce_def) // bDefRatioAtkClass, Investigate
			{
				
				effective_def = n_B[14] + vit_def[i];
				damage[i] = Math.floor(damage[i] * effective_def / 100);
			}
			else
			{
				/* Defense reduction managed directly in monster properties
				// bDefIgnoreRace
				effective_def = Math.abs((n_tok[180 + n_B[2]] - 1) * n_B[14]); 
				effective_vitdef = Math.abs((n_tok[180 + n_B[2]] - 1) * n_B_DEF2[i]);
				
				// bDefIgnoreClass
				effective_def *= Math.abs(Math.min((n_B[19] ? Math.floor(n_tok[22] / 10) : n_tok[22]), 1) - 1);
				effective_vitdef *= Math.abs(Math.min((n_B[19] ? Math.floor(n_tok[22] / 10) : n_tok[22]), 1) - 1);*/
			
				effective_vitdef = n_B_DEF2[i];
				damage[i] = Math.floor(damage[i] * (100 - effective_def) / 100 - effective_vitdef);
			}
		}
	}
	
	return damage;
}

function BattleCalc4(wBC4,wBC4_2,wBC4_3){
	if(wBC4_3==0)
		wBC4_3=n_A_WeaponLV_seirenATK;
	else
		wBC4_3=n_A_Weapon2LV_seirenATK;
	
	// Finger Offensive#192 counts refine bonus multiple times
	if (192 == n_A_ActiveSkill)
		wBC4_3 *= SkillSearch(185);
	
	if(n_A_ActiveSkill==275) // Magic Crasher#275
		return Math.floor(wBC4 * (100 - n_B[14]) /100) - n_B_DEF2[wBC4_2] + wBC4_3;
	if(n_A_ActiveSkill==432) // Piercing Shot#432
		return wBC4 + wBC4_3;

	if(SkillSearch(364))
		return wBC4 + wBC4_3;

	eska_vit_bonus = [0, 0, 0];
	if (Taijin == 0 && n_B_IJYOU[21]) // Eska increases the random part of the formula by 100
		eska_vit_bonus = [0, 50, 100];

	if(n_tok[23])
		wBC4 = Math.floor(wBC4 * (n_B_DEF2[2 - wBC4_2] + eska_vit_bonus[wBC4_2] + n_B[14])/100) +wBC4_3;
	else
		wBC4 = Math.floor(wBC4 * (100 - n_B[14]) /100) - n_B_DEF2[wBC4_2] - eska_vit_bonus[2 - wBC4_2] + wBC4_3;

	return wBC4;
}



function BattleCalcEDP(wBCEDP,wBCEDP2){
	if(wBCEDP <= 0)
		return 0;



	if(n_A_ActiveSkill == 19 || n_A_ActiveSkill == 263 || n_A_ActiveSkill == 88 || n_A_ActiveSkill == 264 || n_A_ActiveSkill == 248)
		return 0;
	wBCEDPch=1;
	var x=0;
	var y=0;
	if(SkillSearch(266)){
		x = BattleCalc(wBCEDP,wBCEDP2);
		x = Math.floor((x * zokusei[n_B[3]][5])/4);
	}
	if(n_A_PassSkill2[11]){
		y = BattleCalc(wBCEDP,wBCEDP2);
		y = Math.floor((y * zokusei[n_B[3]][3]) /5);
	}
	wBCEDPch=0;
	return x + y;
}


function EDPplus(HitNum){
	if(SkillSearch(266) || n_A_PassSkill2[11]){
		w_DMG[2] += EDP_DMG(2) * HitNum;
		w_DMG[1] += EDP_DMG(1) * HitNum;
		if(w_HIT_EDP == 100)
			w_DMG[0] += EDP_DMG(0) * HitNum;
		EDPhyouzi(HitNum);
	}
}


function EDPhyouzi(HitNum){
/*	if(SkillSearch(266) || n_A_PassSkill2[11]){
		var wE = 0;
		if(w_HIT_HYOUJI == 100)
			wE = 1;
		if(n_PerHIT_DMG)
			wE = 1;
		str_bSUBname += "MB/EDP Part chase(?)<BR>";
		var w0 = n_A_EDP_DMG[0] * HitNum;
		var w2 = n_A_EDP_DMG[2] * HitNum;
		if(wE)
			str_bSUB += w0 +"~"+ w2 +"(�add invocation rate(?)"+ w_HIT_EDP +"%)<BR>";
		else
			str_bSUB += w0 +"~"+ w2 +"(�add invocation rate(?)"+ (Math.floor(w_HIT * w_HIT_EDP) / 100) +"%)<BR>";
	}*/
}



function EDP_DMG(num){
	if(SkillSearch(266) || n_A_PassSkill2[11]){
		if(n_A_ActiveSkill == 17 && 52 <= n_B[3] && n_B[3] <= 59)
			return 0;
		if((n_A_ActiveSkill == 66 || n_A_ActiveSkill == 193 || n_A_ActiveSkill == 197 || n_A_ActiveSkill == 321) && 83 <= n_B[3] && n_B[3] <= 89)
			return 0;
		if(zokusei[n_B[3]][n_A_Weapon_zokusei] <= 0 && n_PerHIT_DMG == 0)
			return 0;

		if(num == 0){
			if(w_HIT_EDP == 100)
				return n_A_EDP_DMG[0];
			else
				return 0;
		}
		if(num == 1){
			var wE = 0;
			if(w_HIT_HYOUJI == 100)
				wE = 1;
			if(n_PerHIT_DMG)
				wE = 1;
			if(wE)
				return Math.floor(n_A_EDP_DMG[1] * w_HIT_EDP / 100);
			else
				return Math.floor(n_A_EDP_DMG[1] * w_HIT / 100 * w_HIT_EDP / 100);
		}
		if(num == 2)
			return n_A_EDP_DMG[2];
	}
	return 0;
}


function CastAndDelay(){
	if (!SkillSearch(229) && wCast) // Disable cast time if AutoSpell#229 is active
	{
		str_bSUBname += SubName[9] +"<BR>";
		str_bSUB += Math.floor(wCast *100)/100 + SubName[1] +"<BR>";
	}

	var strSUB2name = "";
	var strSUB2 = "";

	wDelay = 0;
	var w = 0;
	if(n_Delay[1] > wDelay){
		wDelay = n_Delay[1];
		w = 1;
	}
	
	// Champion Card#618 - Combo skills delay decreased by 12%
	if (n_A_ActiveSkill == 188 || n_A_ActiveSkill == 189 || n_A_ActiveSkill == 289)
		n_Delay[3] *= 1 - CardNumSearch(618) * 0.12;
	
	if (!(2 == n_Enekyori && support_autospell && SkillSearch(229)))
	{
		/*
			Bragi capped after cast delay reduction to 0.4s
			Skills that have long delays that can't normally achieve our 0.3 second delay cap without Bragi
			can only be reduced up to 0.4 second delay while under Bragi.

			Delay is expressed in ms, flooring operation should take that into consideration
		*/
		if (n_A_PassSkill3[32])
		{
			bragi_acd_reduction = Math.max((n_Delay[2] - 0.4), 0) * n_tok[74];
			n_Delay[2] = Math.floor(n_Delay[2] * 100 - bragi_acd_reduction) / 100;
		}
		else
			n_Delay[2] = Math.floor(n_Delay[2] * (100 - n_tok[74])) / 100;
		
		if(n_Delay[2] > wDelay){
			wDelay = n_Delay[2];
			w = 2;
		}
		if(n_Delay[3] > wDelay){
			wDelay = n_Delay[3];
			w = 3;
		}
	}
	
	if(n_A_ActiveSkill != 0 && n_A_ActiveSkill != 284)
		n_Delay[4] = eval(document.calcForm.minimum_skill_delay.value);

	if(n_Delay[4] > (wDelay + wCast)){
		wDelay = n_Delay[4] - wCast;
		w = 4;
	}
	if(n_Delay[5] != 0){
		wDelay = n_Delay[5];
		w = 5;
	}
	if(n_Delay[6] > (wDelay + wCast)){
		wDelay = n_Delay[6] - wCast;
		w = 6;
	}

	wDelay = Math.floor(wDelay * 100) / 100;

	if(w == 1){
		if(n_A_ActiveSkill == 0){
			if(SkillSearch(187)){
				strSUB2name += "Attack Interval (Normal)<BR>Attack Interval (Raging Trifecta Blow)<BR>";
				strSUB2 += n_Delay[1] +"s<BR>"+ sandanDelay +"s<BR>";
				wDelay = n_Delay[1] * w998A /100 + sandanDelay * wBC3_3danHatudouRitu / 100;
			}
			else{
				strSUB2name += "Time/Hit<BR>";
				strSUB2 += n_Delay[1] +"s<BR>";
			}
		}
		else{
			strSUB2name += "<Font size=2>Motion Delay (ASPD Based)</Font></Font><BR>";
			strSUB2 += n_Delay[1] +"s<BR>";
		}
	}
	if(w == 2){
		strSUB2name += "<Font size=2>Delay (Fixed Skills)</Font><BR>";
		strSUB2 += n_Delay[2] +"s<BR>";
	}
	if(w == 3){
		if(n_A_ActiveSkill == 188 || n_A_ActiveSkill == 189 || n_A_ActiveSkill == 289)
		{
			n_Delay[3] = +n_Delay[3].toFixed(4);
			strSUB2name += "<Font size=2>Delay (Combo Delay)</Font><BR>";
			strSUB2 += n_Delay[3] +"~"+ (n_Delay[3] + 0.3) +"s<BR>";
		}
		else
		{
			if (n_A_ActiveSkill == 83 || n_A_ActiveSkill == 388 || n_A_ActiveSkill == 292 ||
				n_A_ActiveSkill == 434 || n_A_ActiveSkill == 128 || n_A_ActiveSkill == 320)
				strSUB2name += "<Font size=2>Delay (Forced Motion)</Font><BR>";
			else
				strSUB2name += "<Font size=2>Delay (Irreducible)</Font><BR>";
			strSUB2 += n_Delay[3] +"s<BR>";
		}
	}
	if(w == 4){
		strSUB2name += "<Font size=2>Delay (Input Limit)</Font><BR>";
		strSUB2 += wDelay +"s<BR>";
	}
	if(w == 5){
		strSUB2name += "<Font size=2>Damage Interval</Font><BR>";
		strSUB2 += n_Delay[5] +"s<BR>";
	}
	if(w == 6){
		strSUB2name += "<Font size=2>Limited Skill-Duration(?)</Font><BR>";
		strSUB2 += (Math.floor(wDelay * 100) / 100) +"s<BR>";
	}


	myInnerHtml("bSUB2name",strSUB2name,0);
	myInnerHtml("bSUB2",strSUB2,0);
}

function tPlusDamCut(wPDC){
	if(Taijin == 0){

		if(n_A_PassSkill8[14] == 1){
			if(n_A_WeaponType==10||n_A_WeaponType==17||n_A_WeaponType==18||n_A_WeaponType==19||n_A_WeaponType==20||n_A_WeaponType==21)
				wPDC = Math.floor(wPDC *0.6);
			else if(n_A_ActiveSkill != 0)
				wPDC = Math.floor(wPDC *0.6);
			else
				wPDC = Math.floor(wPDC *0.8);

			if(n_A_PassSkill8[15])
				wPDC = Math.floor(wPDC * (10 / (n_A_PassSkill8[15] * 5)));
		}
	}

	if(Taijin){

		if(n_Ses){
		// It's 20% reduction for ranged attacks aswell, not 40% -- Nvm for now!
			if(n_A_WeaponType==10||n_A_WeaponType==17||n_A_WeaponType==18||n_A_WeaponType==19||n_A_WeaponType==20||n_A_WeaponType==21)
				wPDC = Math.floor(wPDC *0.6);
			else if(n_A_ActiveSkill != 0)
			//if(n_A_ActiveSkill != 0)
				wPDC = Math.floor(wPDC *0.6);
			else
				wPDC = Math.floor(wPDC *0.8);
		}


		w = eval(document.calcForm.B_TAISEI0.value);
		wPDC = Math.floor(wPDC * (100-w) / 100);


		if(n_Enekyori || n_A_WeaponType == 10){
			w = eval(document.calcForm.B_TAISEI1.value);
			wPDC = Math.floor(wPDC * (100-w) / 100);
		}


		if(eval(document.calcForm.A_youshi.checked) == 0){
			w = eval(document.calcForm.B_TAISEI13.value);
			wPDC = Math.floor(wPDC * (100-w) / 100);
		}

		w = eval(document.calcForm.B_TAISEI2_1.value);
		if(n_A_Weapon_zokusei == w){
			w = eval(document.calcForm.B_TAISEI2_2.value);
			wPDC = Math.floor(wPDC * (100-w) / 100);
		}
		w = eval(document.calcForm.B_TAISEI3_1.value);
		if(n_A_Weapon_zokusei == w){
			w = eval(document.calcForm.B_TAISEI3_2.value);
			wPDC = Math.floor(wPDC * (100-w) / 100);
		}


		w = eval(document.calcForm.B_TAISEI5.value);
		if(w != 0 && (n_Enekyori==1 || n_A_WeaponType == 10)){
			w = 95 - eval(document.calcForm.B_TAISEI5.value) *15;
			wPDC = Math.floor(wPDC * w / 100);
		}


		w = eval(document.calcForm.B_TAISEI13.value);
		if(w > 0 && n_Enekyori != 2){
			wPDC -= Math.floor(wPDC * w * 6 / 100);
		}

	}

	if(wBTw1==0){

		//If Lex Aeterna DMG x2
		//old:
		/*
		if(n_B_IJYOU[6] && wLAch==0)
			wPDC *= 2;
		*/
		//new:
		//Remove Lex Aeterna Calculation For Asura Strike.
		//Moved Calculation to after Asura Soft-Cap Nerf
		if(n_A_ActiveSkill != 197 && n_A_ActiveSkill != 321) {
			if(n_B_IJYOU[6] && wLAch==0){
				wPDC *= 2;
			}
		}

		if(n_B_IJYOU[17] && n_A_Weapon_zokusei == 3)
			wPDC *= 2;
		baizok = [110,114,117,119,120];
		if(n_A_PassSkill6[0] == 0 && n_A_PassSkill6[1] >= 1 && n_A_Weapon_zokusei == 3)
			wPDC = Math.floor(wPDC * baizok[n_A_PassSkill6[1]-1] /100);
		if(n_A_PassSkill6[0] == 1 && n_A_PassSkill6[1] >= 1 && n_A_Weapon_zokusei == 1)
			wPDC = Math.floor(wPDC * baizok[n_A_PassSkill6[1]-1] /100);
		if(n_A_PassSkill6[0] == 2 && n_A_PassSkill6[1] >= 1 && n_A_Weapon_zokusei == 4)
			wPDC = Math.floor(wPDC * baizok[n_A_PassSkill6[1]-1] /100);
	}
	if(n_B_KYOUKA[1] && Taijin==0)
		wPDC = Math.floor(wPDC / 2);
	if(n_B_KYOUKA[1] && Taijin==1)
		wPDC = Math.floor(wPDC * 2 / 3);
	
	// SC_ARMORCHANGE for Stone Skin and Anti Magic skills
	// It does not change DEF/MDEF but rather increases/decreases the damage
	if(n_Enekyori != 2)
		wPDC += Math.floor(wPDC * 20 * (n_B_KYOUKA[8] - n_B_KYOUKA[7]) / 100);
	else
	{
		wPDC += Math.floor(wPDC * 20 * (n_B_KYOUKA[7] - n_B_KYOUKA[8]) / 100);
		wPDC -= Math.floor(wPDC * 20 * n_B_KYOUKA[10] / 100); // Magic Mirror
	}

	if(n_B[19] == 5){
		wPDC = 1;
		if(n_A_ActiveSkill==122)
			wPDC = 0;
	}

	return wPDC;
}

function tPlusEnemyClick(){
if(Taijin){
	n_B = new Array();
	for(i=0;i<=26;i++)
		n_B[i] = MonsterOBJ[document.calcForm.B_Enemy.value][i];

	document.calcForm.B_LV.value = n_B[5];
	document.calcForm.B_AGI.value = n_B[8];
	document.calcForm.B_VIT.value = n_B[7];
	document.calcForm.B_INT.value = n_B[9];
	document.calcForm.B_LUK.value = n_B[11];
	document.calcForm.B_DEF.value = n_B[14];
	document.calcForm.B_MDEF.value = n_B[15];
}}

function tPlusTaiseiSyokia(){
if(Taijin){

	for (i=1;i<=150;i++){
		document.calcForm.B_AGI.options[i-1] = new Option(i,i);
		document.calcForm.B_VIT.options[i-1] = new Option(i,i);
		document.calcForm.B_INT.options[i-1] = new Option(i,i);
		document.calcForm.B_LUK.options[i-1] = new Option(i,i);
	}

	for (i=0;i<=100;i++){
		document.calcForm.B_DEF.options[i] = new Option(i,i);
		document.calcForm.B_MDEF.options[i] = new Option(i,i);
	}

	for (i=1;i<=99;i++)
		document.calcForm.B_LV.options[i-1] = new Option(i,i);


	for (i=0;i<=9;i++)
		document.calcForm.B_ZOKUSEI.options[i] = new Option(ZokuseiOBJ2[i]+"1",i*10+1);


	for(i=0;i<=9;i++){
		document.calcForm.B_TAISEI2_1.options[i] = new Option(ZokuseiOBJ2[i],i);
		document.calcForm.B_TAISEI3_1.options[i] = new Option(ZokuseiOBJ2[i],i);
	}

	for(i=0;i<=10;i++)
		document.calcForm.B_TAISEI4.options[i] = new Option(i,i);

	for(i=0;i<=5;i++)
		document.calcForm.B_TAISEI5.options[i] = new Option(i,i);

	for(i=0;i<=10;i++)
		document.calcForm.B_TAISEI10.options[i] = new Option(i,i);

	for(i=0;i<=5;i++)
		document.calcForm.B_TAISEI13.options[i] = new Option(EnergyCoatOBJ[i],i);

	for(i=0;i<=10;i++)
		document.calcForm.B_TAISEI14.options[i] = new Option(i,i);

	n_B = new Array();
	for(i=0;i<=26;i++)
		n_B[i] = MonsterOBJ[document.calcForm.B_Enemy.value][i];

	i = eval(document.calcForm.B_Enemy.value);
	document.calcForm.B_LV.value = MonsterOBJ[i][5];
	document.calcForm.B_VIT.value = MonsterOBJ[i][7];
	document.calcForm.B_AGI.value = MonsterOBJ[i][8];
	document.calcForm.B_INT.value = MonsterOBJ[i][9];
	document.calcForm.B_LUK.value = MonsterOBJ[i][11];
	document.calcForm.B_DEF.value = MonsterOBJ[i][14];
	document.calcForm.B_MDEF.value = MonsterOBJ[i][15];
}}

function tPlusLucky(wPL){
if(Taijin){
	w = eval(document.calcForm.B_TAISEI6.value);
	w += (n_B[11] / 10);

	w = wPL * (100-w) / 100;
	return w;
}
else{
	return wPL;
}}

function tPlusAG(){
if(Taijin){
	if(n_Enekyori!=2){
		wPAG = w_AG[eval(document.calcForm.B_TAISEI10.value)];
		w_DMG[0] *= (wPAG /100);
		w_DMG[1] *= (wPAG /100);
		w_DMG[2] *= (wPAG /100);
	}
}}
/*
	vanilla mode - [Loa] - 2018-07-09
		remove non-vanilla select options of equips and cards and store them in arrays below
			add back removed options when vanilla mode is turned off
		list of non-vanilla items in restrictedEquips and restrictedCards arrays in etc.js
		armor and cards functions dependent on armorLoc, cardLoc, and cardLocLeft arrays in foot.js and card.js
		options of select elements for equips/cards are regenerated under different circumstances
			therefore, each vanilla mode function is called in different ways
			arrays below also reset to empty when respective select elements are refilled
				code for this is found at places where options are regenerated
		vanilla mode is turned off before loading and options refilled in LoadCookie()
*/
removedWep1 = [];
removedWep2 = [];
removedArmor = [];
removedCards = [];
removedCardsLeft = [];
//vanilla weapons function; called in StAllCalc(); options generation by WeaponSet() and WeaponSetLeft()
function VanillaWep(){
with(document.calcForm){
	//remove weapons when vanilla mode
	if(vanilla.checked){
		for(i = 0; i < A_weapon1.length; i++){
			if(restrictedEquips.includes(parseInt(A_weapon1[i].value))){
				removedWep1.push([A_weapon1[i], i]);
				A_weapon1.options.remove(i);
				i -= 1;
			}
		}
	}
	//add back weapons when turned off
	else if(!vanilla.checked && removedWep1.length){
		for(i = removedWep1.length - 1; i >= 0; i--){
			removedWep1[i][0].selected = false;
			A_weapon1.add(removedWep1[i][0], removedWep1[i][1]);
			removedWep1.splice(i,1);
		}
	}
	if(n_Nitou){
		//remove left weapons when vanilla mode
		if(vanilla.checked){
			for(i = 0; i < A_weapon2.length; i++){
				if(restrictedEquips.includes(Number(A_weapon2[i].value))){
					removedWep2.push([A_weapon2[i], i]);
					A_weapon2.remove(i);
					i -= 1;
				}
			}
		}
		//add back left weapons when turned off
		else if(!vanilla.checked && removedWep2.length){
			for(i = removedWep2.length - 1; i >= 0; i--){
				removedWep2[i][0].selected = false;
				A_weapon2.add(removedWep2[i][0], removedWep2[i][1]);
				removedWep2.splice(i,1);
			}
		}
	}
}}
//vanilla armors; called in ClickJob(), FirstNovis(), and index.html; options generation by WeaponSet2()
function VanillaArmor(){
	//remove armors when vanilla mode
	if(document.calcForm.vanilla.checked){
		for(i = 0; i < armorLoc.length; i++){
			for(j = 0; j < armorLoc[i].length; j++){
				if(restrictedEquips.includes(parseInt(armorLoc[i][j].value))){
					removedArmor.push([armorLoc[i][j], j, i])
					armorLoc[i].remove(j);
					j -= 1;
				}
			}
		}
	}
	//add back armors when turned off
	else if(!document.calcForm.vanilla.checked && removedArmor.length){
		for(i = removedArmor.length - 1; i >= 0; i--){
			removedArmor[i][0].selected = false;
			armorLoc[removedArmor[i][2]].add(removedArmor[i][0], removedArmor[i][1]);
			removedArmor.splice(i,1);
		}
	}
}
//vanilla cards; called in index.html; options generation by PopulateCards()
function VanillaCard(){
	//remove cards when vanilla mode
	if(document.calcForm.vanilla.checked){
		for(i = 0; i < cardLoc.length; i++){
			for(j = 0; j < cardLoc[i].length; j++){
				if(restrictedCards.includes(parseInt(cardLoc[i][j].value))){
					removedCards.push([cardLoc[i][j], j, i]);
					cardLoc[i].remove(j);
					j -= 1;
				}
			}
		}
	}
	//add back cards when turned off
	else if(!document.calcForm.vanilla.checked && removedCards.length){
		for(i = removedCards.length - 1; i >= 0; i--){
			removedCards[i][0].selected = false;
			cardLoc[removedCards[i][2]].add(removedCards[i][0], removedCards[i][1]);
			removedCards.splice(i,1);
		}
	}
	//trigger filter for left weapon cards when dual wielding
	if(n_Nitou){
		VanillaCardLeft();
	}
}
//vanilla cards left weapon; called in index.html through VanillaCard() and in ClickWeaponType2(); options generation by PopulateCardsLeft()
function VanillaCardLeft(){
	//remove left weapon cards when vanilla mode
	if(document.calcForm.vanilla.checked){
		for(i = 0; i < cardLocLeft.length; i++){
			for(j = 0; j < cardLocLeft[i].length; j++){
				if(restrictedCards.includes(parseInt(cardLocLeft[i][j].value))){
					removedCardsLeft.push([cardLocLeft[i][j], j, i]);
					cardLocLeft[i].remove(j);
					j -= 1;
				}
			}
		}
	}
	//add back left weapon cards when turned off
	else if(!document.calcForm.vanilla.checked && removedCardsLeft.length){
		for(i = removedCardsLeft.length - 1; i >= 0; i--){
			removedCardsLeft[i][0].selected = false;
			cardLocLeft[removedCardsLeft[i][2]].add(removedCardsLeft[i][0], removedCardsLeft[i][1]);
			removedCardsLeft.splice(i,1);
		}
	}
}

//for clearing options from select. (For Eden Weapon Enchant Slot 2 & 3)
function removeOptions(selectbox)
{
    var i;
    for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
    {
        selectbox.remove(i);
    }
}

function manage_left_hand_effect(flag)
{
	if (392 == n_A_Equip[1] || 401 == n_A_Equip[1]) // Weeder Knife#392 and Caesar Sword#401
		n_tok[183] += 100 * flag;
		
	if (394 == n_A_Equip[1]) // Exorciser#394
		n_tok[186] += 100 * flag;
		
	if (393 == n_A_Equip[1] || 1334 == n_A_Equip[1]) // Combat Knife#393 and Refined Combat Knife#1334
		n_tok[187] += 100 * flag;

	if (467 == n_A_Equip[1]) // Dragon Killer#467
		n_tok[189] += 100 * flag;
	
	if (388 == n_A_Equip[1] || 607 == n_A_Equip[1]) // Ice Pick#388#607
		n_tok[23] += 1 * flag;
		
	ClickB_Enemy();
}
