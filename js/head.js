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
EQB = [0,0,0];
//custom TalonRO fix ignore effects on left/offhand like Ice Pick or Weeder Knife
IgnoreEffectOnLeftHand = 0;

//[Custom TalonRO 2018-06-15 - Global for Malangdo Enchants values] [Kato]
tRO_MalangdoEnchantment = [0,0,0,0];

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

WeaponName = ["Unarmed","Dagger","Sword","Two-handed Sword","Spear","Two-handed Spear","Axe","Two-handed Axe","Mace","Rod","Bow","Katar","Book","Knuckle","Instrument","Whip","Huuma Shuriken","Handgun","Rifle","Shotgun","Gatling Gun","Grenade Launcher"];

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
[0,50,90,100,999], //Novice
[0, 1, 51,101, 70, 71, 72, 74, 75,78,83,84,85,86,87,90,91,999], //Swordman
[0, 1, 52,102, 72, 74, 75,78, 80,83,84,85,90,91,999], //Thief
[0, 1, 53,103, 71, 73, 74, 77,78,85,89,152,999], //Acolyte
[0, 1, 54,104, 75, 76,83,89,999], //Archer
[0, 1, 55,105, 71, 77,89,152,999], //Mage
[0, 1, 56,106, 70, 71, 72, 73, 74, 75,78,83,84,85,86,90,91,999], //Merchant
[0, 1, 51, 61,107, 70, 71, 72, 74, 75,78,79,83,84,85,86,87,90,91,999], //Knight
[0, 1, 52, 62,108, 72, 74, 75,78,79,81,83,84,85,90,91,999], //Assassin
[0, 1, 53, 63,109, 71, 73, 74, 77,78,79,81,85,89,999], //Priest
[0, 1, 54, 64,110, 75, 76,79,80,83,88,89,999], //Hunter
[0, 1, 55, 65,111, 71, 77,79,89,999], //Wizard
[0, 1, 56, 66,112, 70, 71, 72, 73, 74, 75,78,79,83,84,85,86,90,91,999], //Blacksmith
[0, 1, 51, 61,113, 70, 71, 72, 74, 75,78,79,83,84,85,86,87,90,91,999], //Crusader
[0, 1, 52, 62,114, 72, 74, 75, 76,78,79,80,83,84,85,88,91,999], //Rogue
[0, 1, 53, 63,115, 71, 73, 74, 77,78,79,85,89,999], //Monk
[0, 1, 54, 64,116, 74, 75, 76,79,83,89,999], //Bard
[0, 1, 54, 64,117, 74, 75, 76,79,83,89,999], //Dancer
[0, 1, 55, 65,118, 71, 77,79,89,999], //Sage
[0, 1, 56, 66,119, 70, 71, 72, 73, 74, 75,78,79,83,84,85,86,90,91,999], //Alchemist
[0,50,90,120,999], //High Novice
[0, 1, 51, 61,107,121, 70, 71, 72, 74, 75,78,79,82,83,84,85,86,87,90,91,999], //Lord Knight
[0, 1, 52, 62,108,122, 72, 74, 75,78,79,81,82,83,84,85,90,91,999], //Assassin Cross
[0, 1, 53, 63,109,123, 71, 73, 74, 77,78,79,81,82,85,89,151,152,999], //High Priest
[0, 1, 54, 64,110,124, 75, 76,79,80,82,83,88,89,999], //Sniper
[0, 1, 55, 65,111,125, 71, 77,79,82,89,151,152,999], //High Wizard
[0, 1, 56, 66,112,126, 70, 71, 72, 73, 74, 75,78,79,82,83,84,85,86,90,91,999], //Whitesmith
[0, 1, 51, 61,113,127, 70, 71, 72, 74, 75,78,79,82,83,84,85,86,87,90,91,999], //Paladin
[0, 1, 52, 62,114,128, 72, 74, 75, 76,78,79,80,82,83,84,85,88,91,999], //Stalker
[0, 1, 53, 63,115,129, 71, 73, 74,77,78,79,82,85,89,152,999], //Champion
[0, 1, 54, 64,116,130, 74, 75, 76,79,82,83,89,153,999], //Clown
[0, 1, 54, 64,117,131, 74, 75, 76,79,82,83,89,153,999], //Gypsy
[0, 1, 55, 65,118,132, 71,77,79,82,89,152,999], //Professor
[0, 1, 56, 66,119,133, 70, 71, 72, 73, 74, 75,78,79,82,83,84,85,86,90,91,999], //Creator
[0],
[0],
[0],
[0],
[0],
[0],
[0],
[0, 1,141, 83,84,85,86,150,999], //Taekwon Kid //custom
[0, 1,142, 79,83,84,85,86,87,91,150,999], //Star Gladiator
[0, 1,143, 55, 65,111, 71, 77,79,89,999], //Soul Linker
[0, 1,144, 58, 52,91,999], //Ninja
[0, 1,145, 59, 83,145,999], //Gunslinger
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

SyuzokuOBJ = ["Formless","Undead","Brute","Plant","Insect","Fish","Demon","Demi-Human","Angel","Dragon"];
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

	str_PerHIT_DMG = 0;
	SG_Special_ch = 0;
	for(var i=0;i<=2;i++){
		Last_DMG_A[i] = 0;
		Last_DMG_B[i] = 0;
	}

	str_bSUBname = "";
	str_bSUB = "";

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


	if(n_A_ActiveSkill==0 || (n_A_ActiveSkill==86 && (50 <= n_B[3] && n_B[3] < 60))){
		myInnerHtml("CRIATKname",SubName[3],0);
		myInnerHtml("CRInumname",SubName[4],0);

		if(n_A_ActiveSkill==86){
			n_Delay[0] = 1;
		}
		debug_atk+="\n --- (BattleCalc999) skill calc:0,86 ---";
		if(n_Nitou){
			TyouEnkakuSousa3dan = 0;

			n_A_workDEX = Math.floor(n_A_DEX * (1 + (n_A_Weapon2LV - 1) * 0.2));

			if(n_A_workDEX>=n_A_Weapon2_ATK)
				w_left_Maxatk = n_A_ATK + n_A_Weapon2LV_Maxplus + Math.floor((n_A_Weapon2_ATK + wImp)* wCSize);
			else
				w_left_Maxatk = n_A_ATK + n_A_Weapon2LV_Maxplus + Math.floor((n_A_Weapon2_ATK-1 + wImp)* wCSize);

			//custom TalonRO ignore effects on left/offhand like Ice Pick or Weeder Knife
			IgnoreEffectOnLeftHand = 1;
			w_left_Maxatk = BattleCalc4(w_left_Maxatk * wbairitu,2,1);
			IgnoreEffectOnLeftHand = 0;

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
			w_left_Minatk = n_A_ATK + n_A_Weapon2LV_Minplus + Math.floor((n_A_workDEX + wImp) * wCSize);

			//custom TalonRO ignore effects on left/offhand like Ice Pick or Weeder Knife
			IgnoreEffectOnLeftHand = 1;
			w_left_Minatk = BattleCalc4(w_left_Minatk * wbairitu,0,1);
			IgnoreEffectOnLeftHand = 0;

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

			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0) {
				w_left_Minatk = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_left_Minatk/200);
				w_left_Maxatk = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_left_Maxatk/200);
				w_left_Aveatk = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_left_Aveatk/200);
			}

			n_Min_DMG += w_left_Minatk;
			n_Max_DMG += w_left_Maxatk;

			w_DMG[0] = BattleCalc(n_A_DMG[0],0);
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[0] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[0]/200);
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
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[2] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[2]/200);
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
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[1] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[1]/200);
			var wX = w_DMG[1] + EDP_DMG(1);
			Last_DMG_A[1] = Last_DMG_B[1] = wX + w_left_Aveatk;
			InnStr[1] += wX +" ("+ w_left_Aveatk +")";

			w_DMG[1] = BattleCalc3(w_DMG[1]);
			w_DMG[1] += BattleCalc3left(w_left_Aveatk);
			w_DMG[1] += EDP_DMG(1);

			EDPhyouzi(1);

			var wX = BattleCalc2(0);
			var wX2 = Math.floor(w_left_star * (0.3 + SkillSearch(80) /10));
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0){
				wX = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*wX/200);
				wX2 = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*wX2/200);
			}
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
			if(SkillSearch(187)){
				TyouEnkakuSousa3dan = -1;
				wBC3_3danAtkBairitu = SkillSearch(187) * 0.2;
				var san = [0,0,0];
				for(var i=0;i<=2;i++){
					san[i] = BattleCalc(n_A_DMG[i] * (wbairitu + wBC3_3danAtkBairitu),i) + EDP_DMG(i);
					//custom TalonRO Sura's Rampage +10% Triple Attack damage
					if (EquipNumSearch(1512))
						san[i] = san[i] * 1.1;
					san[i] = Math.floor(san[i] /3) *3;
					if(n_B[19] == 5)
						san[i] = 3;
					//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
					if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
						san[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*san[i]/200);
				}
				str_bSUBname += "Raging Trifecta Blow Damage<BR>";
				str_bSUB += san[0] +"~"+ san[2] +" ("+ (30 - SkillSearch(187)) +"% Chance)<BR>";
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
				//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
				if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
					w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);
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
	}else if(n_A_ActiveSkill==272 || n_A_ActiveSkill==401){
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
		for(var i=0;i<=2;i++){
			n_A_CriATK[i] = BattleCalc(n_A_CriATK[i],10);
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				n_A_CriATK[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*n_A_CriATK[i]/200);
		}
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
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);
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
		}else if(n_A_ActiveSkill==65)
			wbairitu += n_A_ActiveSkillLV *0.5;
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
		}else if(n_A_ActiveSkill==73){
			w = (1+n_A_ActiveSkillLV*0.2);
			if(n_A_ActiveSkillLV == 10)wbairitu += 4.625;
			else if(n_A_ActiveSkillLV >= 7)wbairitu += w+w/2+w/4-1;
			else if(n_A_ActiveSkillLV >= 4)wbairitu += w+w/2-1;
			else wbairitu += w-1;
			wCast = 0.7;
		}else if(n_A_ActiveSkill==83 || n_A_ActiveSkill==388){

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
//			if(n_A_ActiveSkill==388 && n_Ses==0)
//				n_Delay[3] = 1;

//			else
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
		}else if(n_A_ActiveSkill==292){
			wActiveHitNum = 9;
			wbairitu += 1 + n_A_ActiveSkillLV;
			n_A_Weapon_zokusei = ArrowOBJ[n_A_Arrow][1];
			if(eval(document.calcForm.A_Weapon_zokusei.value) != 0)
				n_A_Weapon_zokusei = eval(document.calcForm.A_Weapon_zokusei.value);
			n_Enekyori=1;
			wCast = 1.8 + n_A_ActiveSkillLV *0.2;
			if(n_A_ActiveSkillLV>=6) n_Delay[2]=1;
			else n_Delay[2]=0.8;
			n_Delay[3]=3;
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
		}else if(n_A_ActiveSkill==326){
			not_use_card = 1;
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
			//custom TalonRO adjust skill delay to ingame value (1sec)
			//before
			//n_Delay[2] = 1.7;
			//new
			n_Delay[2] = 1.7;
		}else if(n_A_ActiveSkill==430){//tracking
			if(n_A_Weapon_ATKplus > 8 && EquipNumSearch(1100)){TCcast = 1.25;}
			else if(EquipNumSearch(926)){TCcast = .75;}
			else{TCcast = 1;}
			wCast = (1 + (0.2 * n_A_ActiveSkillLV))*TCcast;
			//cast_kotei = 1;
			n_Enekyori=1;
			wbairitu += n_A_ActiveSkillLV *1 +1;
			n_Delay[2] = 1;
			w_HIT = w_HIT * 5 +5;
			if(w_HIT > 100)
				w_HIT = 100;
			w_HIT_HYOUJI = w_HIT;
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
		}else if(n_A_ActiveSkill==434){
			cast_kotei = 1;
			wCast = 1;
			n_Enekyori=0;
			wbairitu += n_A_ActiveSkillLV *0.5;
			n_Delay[3] = 1;
		}else if(n_A_ActiveSkill==435){
			n_Enekyori=1;
			wbairitu += n_A_ActiveSkillLV * 1 + 2;
			n_Delay[2] = 1 + n_A_ActiveSkillLV *0.2;
		}else if(n_A_ActiveSkill==436){
			n_Enekyori=1;
			wbairitu += n_A_ActiveSkillLV * 0.2 - 0.2;
			wCast = 1;
			n_Delay[2] = 1;
		}else if(n_A_ActiveSkill==437){
			n_Enekyori=1;
			not_use_card = 1;
			wCast = 1;
			n_Delay[2] = 1;
		}

		ATKbai02(wbairitu,0);

		if(cast_kotei == 0)
			if(n_A_ActiveSkill==430){wCast = wCast;}else{wCast = wCast * n_A_CAST;}

		for(var i=0;i<=2;i++){
			w_MagiclBulet = i;
			w_DMG[i] = BattleCalc(n_A_DMG[i],i);
			if(wActiveHitNum > 1)
				w_DMG[i] = Math.floor(w_DMG[i] / wActiveHitNum) * wActiveHitNum;
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);

			Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i] + EDP_DMG(i);
			InnStr[i] += Last_DMG_A[i];
			if(wActiveHitNum > 1)
				InnStr[i] += " ("+ (w_DMG[i] / wActiveHitNum) +" x "+ wActiveHitNum +"Hit)";
		}
		w_MagiclBulet = 1;
		//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
		//before
		//w_DMG[1] = (w_DMG[1] * w_HIT + BattleCalc2(0) *(100-w_HIT))/100;
		//after
		wcustomtromod = BattleCalc2(0);
		if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
			wcustomtromod = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*wcustomtromod/200);
		w_DMG[1] = (w_DMG[1] * w_HIT + wcustomtromod *(100-w_HIT))/100;


		EDPplus(1);

		if(cast_kotei == 0)
			CastAndDelay();
		BattleCalc998();
	}else if(n_A_ActiveSkill==275){
		n_Enekyori=1;
		wCast = 0.3;
		n_Delay[2] = 0.3;
		wCast = wCast * n_A_CAST;

		for(var i=0;i<=2;i++){
			w_DMG[i] = BattleCalc(BK_n_A_MATK[i],i);
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);

			Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i] + EDP_DMG(i);
			InnStr[i] += Last_DMG_A[i];
		}
		n_PerHIT_DMG = BattleCalc2(0)+n_A_WeaponLV_seirenATK;
		w_DMG[1] = (w_DMG[1] * w_HIT + n_PerHIT_DMG *(100-w_HIT))/100;

		EDPplus(1);

		CastAndDelay();
		BattleCalc998();
	}else if(n_A_ActiveSkill==40||n_A_ActiveSkill==70||n_A_ActiveSkill==111||n_A_ActiveSkill==192||n_A_ActiveSkill==76||n_A_ActiveSkill==418||n_A_ActiveSkill==391||n_A_ActiveSkill==429){
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
		}else if(n_A_ActiveSkill==418){
			n_Enekyori=1;
			n_Delay[2] = 1;
			wbairitu += 0.5;
			wHITsuu = 3;
		}else if(n_A_ActiveSkill==391){
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
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);

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
		//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				wX = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*wX/200);

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
		//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
		if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
			wBT = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*wBT/200);

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
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);

			Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i] + EDP_DMG(i);
			InnStr[i] += Last_DMG_A[i];
		}
		w_DMG[1] = (w_DMG[1] * w_HIT + wINV *(100-w_HIT))/100;

		EDPplus(1);
		CastAndDelay();
		BattleCalc998();
	}

	else if(n_A_ActiveSkill==159 || n_A_ActiveSkill==384)
	{
		n_PerHIT_DMG = 0;
		n_Enekyori=1;
		n_A_Weapon_zokusei = 0;
		n_Delay[2] = 0.7;
		if(n_A_ActiveSkill==384)
			n_Delay[2] = 0.35;
		wSBr = n_A_LEFT_DEF_PLUS*10;
		debug_atk+="\n --- (BattleCalc999) skill calc:159,384 ---";
		debug_atk+="\n --- (BattleCalc999) %ATK ---";
		debug_atk+="\nb_wbairitu2 (n_A_DMG[1]):not defined(manuell)";
		wbairitu2 = (1 + n_A_ActiveSkillLV *0.3);
		debug_atk+="\na_wbairitu2 (n_A_DMG[1]):"+wbairitu2;
		if(n_A_ActiveSkill==384) {
			wbairitu2 *= 2;
			debug_atk+="\t\n --- (BattleCalc999) %*2 Soul Link ---";
			debug_atk+="\t\n_wbairitu2 (n_A_DMG[1]):"+wbairitu2;
		}
		debug_atk+="\n --- (BattleCalc999) ATK ---";
		debug_atk+="\nb_n_A_ATK:"+n_A_ATK;
		n_A_ATK_w = Math.round(Math.floor(n_A_STR/10) * Math.floor(n_A_STR/10));
		n_A_ATK = n_A_STR + n_A_ATK_w + Math.floor(n_A_DEX / 5) + Math.floor(n_A_LUK / 5);
		debug_atk+="\na_n_A_ATK:"+n_A_ATK;
		for(var i=0;i<=2;i++){
			if(i==1) {
				debug_dmg_avg=1;
				debug_atk+="\n --- (BattleCalc999) dmg overall---";
				debug_atk+="\nb_w_DMG[1]:"+w_DMG[i];
				debug_atk+="\n --- (BattleCalc999) IP effect ---";
				debug_atk+="\nb_n_A_ATK:"+n_A_ATK;
				debug_atk+="\nb_n_A_ATK_IP:"+n_A_ATK_IP;
			}
			//ice pick effect com shield boomerang
			if(EquipNumSearch(388) || EquipNumSearch(607)){
				/*
				//custom TalonRO not even sure if it's custom or supposed to be the regular calculation
				//because the original calc's way is totally off
				IP_1 = Math.round(n_A_ATK +(n_A_ATK*(n_B_DEF2[0]+n_B[14])/100)+n_A_WeaponLV_seirenATK);
				IP_2 = Math.round(n_A_ATK +(n_A_ATK*(n_B_DEF2[1]+n_B[14])/100)+n_A_WeaponLV_seirenATK);
				IP_3 = Math.round((n_A_ATK*(n_B_DEF2[2]+n_B[14])/100)+n_A_WeaponLV_seirenATK);
				n_A_ATK_IP = IP_1 + IP_2 + IP_3;
				*/
				//custom TalonRO IP calculation
				//TEST1
				//old
				/*
				if (i==0)
					n_A_ATK_IP = Math.round(n_A_ATK*(n_B_DEF2[2]+n_B[14])/100);
				else if (i==1)
					n_A_ATK_IP = Math.round(n_A_ATK*(n_B_DEF2[1]+n_B[14])/100);
				else
					n_A_ATK_IP = Math.round(n_A_ATK*(n_B_DEF2[0]+n_B[14])/100);
				*/
				//new
				if (i==0)
					n_A_ATK_IP = Math.round((n_A_ATK+ItemOBJ[n_A_Equip[5]][6])*(n_B_DEF2[2]+n_B[14])/100);
				else if (i==1)
					n_A_ATK_IP = Math.round((n_A_ATK+ItemOBJ[n_A_Equip[5]][6])*(n_B_DEF2[1]+n_B[14])/100);
				else
					n_A_ATK_IP = Math.round((n_A_ATK+ItemOBJ[n_A_Equip[5]][6])*(n_B_DEF2[0]+n_B[14])/100);

				//wBC4 = Math.floor(wBC4 * (n_B_DEF2[1]+n_B[14])/100) +wBC4_3;
			}else{n_A_ATK_IP = 0;}

			if(i==1) {
				debug_atk+="\na_n_A_ATK_IP:"+n_A_ATK_IP;
				debug_atk+="\n --- (BattleCalc999) pierce effect ---";
				debug_atk+="\nb_M_DEF1:"+M_DEF1+"\nb_M_DEF2:"+M_DEF2;
			}
			//pierce def weapons
			if(EquipNumSearch(620) || EquipNumSearch(409) || CardNumSearch(255) || EquipNumSearch(43)){
				M_DEF1 = n_B[14];
				M_DEF2 = n_B_DEF2[0];
			}else if((EquipNumSearch(393) || EquipNumSearch(904)) && n_B[2] == 7){
				M_DEF1 = n_B[14];
				M_DEF2 = n_B_DEF2[0];
			}else if((EquipNumSearch(392) || EquipNumSearch(401)) && n_B[2] == 3){
				M_DEF1 = n_B[14];
				M_DEF2 = n_B_DEF2[0];
			}else if((EquipNumSearch(467) || EquipNumSearch(405) || EquipNumSearch(471)) && n_B[2] == 9){
				M_DEF1 = n_B[14];
				M_DEF2 = n_B_DEF2[0];
			}else if(EquipNumSearch(394) && n_B[2] == 6){
				M_DEF1 = n_B[14];
				M_DEF2 = n_B_DEF2[0];
			}else{
				M_DEF1 = 0;
				M_DEF2 = 0;}
			if(i==1) {
				debug_atk+="\na_M_DEF1:"+M_DEF1+"\na_M_DEF2:"+M_DEF2;
			}
			if(i==1) {
				debug_atk+="\n --- (BattleCalc999) atk calc (IP incl) ---";
				debug_atk+="\nb_w_DMG[1]:"+w_DMG[i];
			}

			//TEST1
			//old
			/*
			if(EquipNumSearch(388) || EquipNumSearch(607))
				w_DMG[i] = n_A_ATK_IP * wbairitu + ItemOBJ[n_A_Equip[5]][6];
			else
				w_DMG[i] = n_A_ATK * wbairitu + ItemOBJ[n_A_Equip[5]][6];
			*/
			//new
			if(EquipNumSearch(388) || EquipNumSearch(607))
				w_DMG[i] = n_A_ATK_IP * wbairitu;
			else
				w_DMG[i] = (n_A_ATK+ItemOBJ[n_A_Equip[5]][6]) * wbairitu;

			if(i==1) {
				debug_atk+="\na_w_DMG[1]:"+w_DMG[i];
				debug_atk+="\n --- (BattleCalc999) atk-def (pierce incl) * %atk ---";
				debug_atk+="\nb_w_DMG[1]:"+w_DMG[i];
			}

			//atk-def calculation without Ice Pick only
			if(!EquipNumSearch(388) && !EquipNumSearch(607))
				w_DMG[i] = Math.floor(w_DMG[i] * (100 - (n_B[14] - M_DEF1)) /100 - (n_B_DEF2[i] - M_DEF2));

			if(i==1) {
				debug_atk+="\na_w_DMG[1]:"+w_DMG[i];
				debug_atk+="\n --- (BattleCalc999) %ATK (wbairitu2) ---";
				debug_atk+="\nb_w_DMG[1]:"+w_DMG[i];
			}

			w_DMG[i] = Math.floor(w_DMG[i] * wbairitu2);

			if(i==1) {
				debug_atk+="\na_w_DMG[1]:"+w_DMG[i];
				debug_atk+="\n --- (BattleCalc999) BaiCI effects + shield upgrade ---";
				debug_atk+="\nb_BaiCI:"+w_DMG[i];
			}
			w_DMG[i] = BaiCI(w_DMG[i])+ wSBr;
			if(i==1) {
				debug_atk+="\na_BaiCI:"+w_DMG[i];
			}
			if(M_DEF1 != 0)
				w_DMG[2] = w_DMG[1] = w_DMG[0];

			if(w_DMG[i] < 1)w_DMG[i] = 1;
			w_DMG[i] = Math.floor(w_DMG[i] * zokusei[n_B[3]][0]);
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);

			Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i];
			InnStr[i] += Last_DMG_A[i];
			if(i==1) {
				debug_dmg_avg=0;
				debug_atk+="\na_w_DMG[1]:"+w_DMG[i];
			}
		}
		w_DMG[1] = (w_DMG[1] * w_HIT)/100;

		CastAndDelay();
		BattleCalc998();
	}else if(n_A_ActiveSkill==324){ //Shield Chain
		n_PerHIT_DMG = 0;
		n_Enekyori=1;
		n_A_Weapon_zokusei = 0;
		wCast = 1 * n_A_CAST;
		n_Delay[2] = 1;
		wSBr = n_A_LEFT_DEF_PLUS;
		wSC  = ItemOBJ[n_A_Equip[5]][6];

		wbairitu2 = (1 + n_A_ActiveSkillLV *0.3);

		n_A_ATK_w = Math.round(Math.floor(n_A_STR/10) * Math.floor(n_A_STR/10));
		n_A_ATK   = n_A_STR + n_A_ATK_w + Math.floor(n_A_DEX / 5) + Math.floor(n_A_LUK / 5);
		n_A_ATK   = n_A_ATK * wbairitu + wSC;
		/*wSC -= 100;
		if(wSC < 0)
			wSC = 0;
		wSC2 = [0,0,0];
		wSC2[2] = 100 + wSC;
		wSC2[1] = 100 + wSC/2;
		wSC2[0] = 100*/
		for(var i=0;i<=2;i++){
			//alert("atk:"+n_A_ATK+"+15"+",wbairitu2:"+wbairitu2+",n_B[14]:"+n_B[14]+",n_B_DEF2[i]:"+n_B_DEF2[i]+",wSBr:"+wSBr);
			//ziemlich gut: (aber nur weil 2.07 fail war, korrekt w�re 2.093
			//w_DMG[i] = Math.floor(((n_A_ATK+15) * 2.07 * wbairitu2 *5) * (100 - n_B[14]) /100 - n_B_DEF2[i]) + (wSBr * 10);
			if (i==1) {
				debug_dmg_avg=1;
				debug_atk+="\nb_BaiCI (w_DMG[1]):"+w_DMG[i]+"\n\tn_A_DMG[1]:"+n_A_DMG[i];
			}
			w_DMG[i] = BaiCI(n_A_ATK+n_tok[17]);
			if (i==1) {
				debug_dmg_avg=0;
				debug_atk+="\na_BaiCI (w_DMG[1]):"+w_DMG[i];
			}
			//alert(w_DMG[i]);
			w_DMG[i] = w_DMG[i] * wbairitu2 * 5;
			w_DMG[i] = w_DMG[i] * (100 - n_B[14]) /100 - n_B_DEF2[i];
			w_DMG[i] = Math.floor(w_DMG[i]) + (wSBr * 10);
			/*w_DMG[i] = (n_A_ATK * (100 - n_B[14]) /100 - n_B_DEF2[i]) * wbairitu2;
			w_DMG[i] += wSC2[i];
			w_DMG[i] = BaiCI(w_DMG[i]);*/
			if(w_DMG[i] < 1)
				w_DMG[i] = 1;
			w_DMG[i] = Math.floor(w_DMG[i] * zokusei[n_B[3]][0]);
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);

			Last_DMG_A[i] = w_DMG[i];
			Last_DMG_B[i] = Math.floor(w_DMG[i]/5);
			InnStr[i] += Last_DMG_A[i] +" ("+ Last_DMG_B[i] + SubName[8] +"5hit)";
			w_DMG[i] = Last_DMG_A[i];
		}
		w_DMG[1] = (w_DMG[1] * w_HIT)/100;

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
		wSPP = 1.25 -(n_B[4] * 0.25);
		w_DMG[2] = Math.floor(w_DMG[2] * wSPP + n_A_WeaponLV_seirenATK);
		w_DMG[2] = w_DMG[2] * zokusei[n_B[3]][n_A_Weapon_zokusei];
		w_DMG[2] = BaiCI(w_DMG[2]);
		w_DMG[0] = w_DMG[1] = w_DMG[2];
		for(var i=0;i<=2;i++){
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);

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
				//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
				if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
					w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);
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
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0){
				w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);
				w_SBr[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_SBr[i]/200);
			}

				Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i] + w_SBr[i];
			InnStr[i] += Last_DMG_A[i] +" ("+ w_DMG[i] +" + "+ w_SBr[i] +")";
			w_DMG[i] = Last_DMG_A[i];
		}
		var wX = BattleCalc2(0) * n_A_ActiveSkillLV;
		//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
		if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
			wX = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*wX/200);

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

	else if(n_A_ActiveSkill==162)
	{
		n_PerHIT_DMG = 0;

		myInnerHtml("CRIATKname",'<Font color="#FF0000">Health Drain</Font>',0);
		myInnerHtml("CRIATK",'<Font color="#FF0000">'+ Math.floor(n_A_MaxHP /5) +"</Font>",0);

		myInnerHtml("CRInumname",'<Font color="#FF0000">Damage Backlash</Font>',0);


		work_A_VITDEF = [0,0,0];
		work_A_VITDEF[0] = n_A_VITDEF[2];
		work_A_VITDEF[1] = n_A_VITDEF[1];
		work_A_VITDEF[2] = n_A_VITDEF[0];
		n_A_INTMDEF = n_A_INT + Math.floor(n_A_VIT /2);

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
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);

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
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);

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
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[b] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[b]/200);

			Last_DMG_A[b] = Last_DMG_B[b] = w_DMG[b] + EDP_DMG(b);
			InnStr[b] += Last_DMG_A[b];
		}
		//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
		//before
		//w_DMG[1] = (w_DMG[1] * w_HIT + BattleCalc2(0) * 2 *(100-w_HIT))/100;
		//after
		wcustomtromod = BattleCalc2(0);
		if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
			wcustomtromod = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*wcustomtromod/200);
		w_DMG[1] = (w_DMG[1] * w_HIT + wcustomtromod * 2 *(100-w_HIT))/100;

		w_DMG[1] = Math.floor(w_DMG[1] * zokusei[n_B[3]][0]);

		EDPplus(1);

		CastAndDelay();
		BattleCalc998();
	}

	else if(n_A_ActiveSkill==283)
	{
		n_PerHIT_DMG = 0;
		w_DMG[2] = 500 + 300 * n_A_ActiveSkillLV;
		if(n_B[19] == 5)
			w_DMG[2] = 1;
		w_DMG[0] = w_DMG[1] = w_DMG[2];
		for(var i=0;i<=2;i++){
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);

			Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i];
			InnStr[i] += Last_DMG_A[i];
		}
		wCast = (1.5+ 0.5 * n_A_ActiveSkillLV) * n_A_CAST;
		n_Delay[2] = (1.5 + n_A_ActiveSkillLV *0.5)/2;
		w_HIT_HYOUJI = 100;
		CastAndDelay();
		BattleCalc998();
	}

	else if(n_A_ActiveSkill==284)
	{
		n_PerHIT_DMG = 0;
		n_A_Weapon_zokusei = 0;
		w_DMG[2] = Math.floor(n_A_MaxHP * 0.09 * (0.9 + 0.1 * n_A_ActiveSkillLV));
		w_DMG[2] = BaiCI(w_DMG[2]);
		w_DMG[2] = Math.floor(w_DMG[2] * zokusei[n_B[3]][0]);
		w_DMG[0] = w_DMG[1] = w_DMG[2];
		for(var i=0;i<=2;i++){
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);

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
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[b] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[b]/200);

			Last_DMG_A[b] = Last_DMG_B[b] = w_DMG[b] + EDP_DMG(b);
			InnStr[b] += Last_DMG_A[b];
		}

		EDPplus(1);

		wCast = 1 * n_A_CAST;
		n_Delay[2] = 0.5;
		CastAndDelay();
		BattleCalc998();
	}

	else if(n_A_ActiveSkill==197 || n_A_ActiveSkill==321) //asura
	{
		n_PerHIT_DMG = 0;
		w_HIT_HYOUJI = 100;
		n_A_Weapon_zokusei = 0;
		ATKbai02(wbairitu,0);
		if(n_A_ActiveSkill==197)
			wbairitu += 8 + eval(document.calcForm.SkillSubNum.value) /10;
		else
			wbairitu += 8 + (n_A_MaxSP-1) /10;

		//custom TalonRO fix (checked rAthena calculation)
		wbairitu += 1;

		wASYU = 250 + n_A_ActiveSkillLV * 150;

		for(var b=0;b<=2;b++){
			w_DMG[b] = Math.floor(BK_n_A_DMG[b] * wbairitu) + wASYU;	//Asura calculation (dmg * sp-calc + skilllvl-specific-atk)
			w_DMG[b] = BaiCI(w_DMG[b]);									//weap (i.e. Nemesis) & card modifier
			w_DMG[b] = Math.floor(w_DMG[b] * zokusei[n_B[3]][0]);		//Enemy element reduction for ghost
			if(n_A_PassSkill6[5]){w_DMG[b] += Math.floor((.02+(.03*n_A_PassSkill6[5]))*w_DMG[b]);}	//Provoke
			if(n_A_PassSkill6[5] && n_A_PassSkill2[12]){
			w_DMG[b] += 0;
			}else{
				if(n_A_PassSkill2[12])
					w_DMG[b] += Math.floor(w_DMG[b]*0.05);
			}
			if(n_A_PassSkill5[3] == 1)
				w_DMG[b] = 2*w_DMG[b];									//Gospel +100% atk
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[b] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[b]/200);

			Last_DMG_A[b] = Last_DMG_B[b] = w_DMG[b] + EDP_DMG(b);
			InnStr[b] += Last_DMG_A[b];
		}

		EDPplus(1);

		wCast = (4.5 - 0.5 * n_A_ActiveSkillLV) * n_A_CAST;

		//original
		//n_Delay[2] = 3.5 - 0.5 * n_A_ActiveSkillLV;
		//custom TalonRO fixed delay for Asura: 15sec
		//n_Delay[2] = 15;
		//custom TalonRO adjusted Asura delay to 10 sec
		n_Delay[2] = 10;

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
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[b] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[b]/200);

			Last_DMG_A[b] = Last_DMG_B[b] = w_DMG[b];
			InnStr[b] += Last_DMG_A[b];
		}
		//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
		//before
		//w_DMG[1] = (w_DMG[1] * w_HIT + BattleCalc2(0) * zokusei[n_B[3]][0] *(100-w_HIT))/100;
		//after
		wcustomtromod = BattleCalc2(0);
		if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
			wcustomtromod = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*wcustomtromod/200);
		w_DMG[1] = (w_DMG[1] * w_HIT + wcustomtromod * zokusei[n_B[3]][0] *(100-w_HIT))/100;

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
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[b] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[b]/200);

			Last_DMG_B[b] = w_DMG[b];
			Last_DMG_A[b] = w_DMG[b] * 3;
			InnStr[b] += Last_DMG_A[b] + " ("+ Last_DMG_B[b] + SubName[8] +"3hit)";
			w_DMG[b] = Last_DMG_A[b];
		}
		var wX = Math.floor(BattleCalc2(0) * zokusei[n_B[3]][0]);
		//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
		if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
			wX = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*wX/200);

		w_DMG[1] = (w_DMG[1] * w_HIT + wX * 3 *(100-w_HIT))/100;
		n_PerHIT_DMG = wX * 3;
		str_PerHIT_DMG = wX * 3 +" (3"+ SubName[8] + wX +" Damage)"

		CastAndDelay();
		BattleCalc998();
	}

	else if(n_A_ActiveSkill==396){
		wbairitu += (n_A_ActiveSkillLV * 1.5 +0.5);
		n_Enekyori=1;
		ATKbai02(wbairitu,0);
		wCast = 3 * n_A_CAST;
		n_Delay[2] = 3;
		wActiveHitNum = 2 + Math.round(n_A_ActiveSkillLV / 2);

		for(var b=0;b<=2;b++){
			w_DMG[b] = BattleCalc(n_A_DMG[b],b);
			w_DMG[b] = Math.floor(w_DMG[b] * zokusei[n_B[3]][0]);
			if(wActiveHitNum > 1)
				w_DMG[b] = Math.floor(w_DMG[b] / wActiveHitNum) * wActiveHitNum;
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[b] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[b]/200);

			Last_DMG_A[b] = Last_DMG_B[b] = w_DMG[b];
			InnStr[b] += Last_DMG_A[b];
			InnStr[b] += " ("+ (Last_DMG_A[b] / wActiveHitNum) +" x "+ wActiveHitNum +"Hit)";
		}
		//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
		//before
		//w_DMG[1] = (w_DMG[1] * w_HIT + BattleCalc2(0)* zokusei[n_B[3]][0] *(100-w_HIT))/100;
		//after
		wcustomtromod = BattleCalc2(0);
		if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
			wcustomtromod = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*wcustomtromod/200);
		w_DMG[1] = (w_DMG[1] * w_HIT + wcustomtromod* zokusei[n_B[3]][0] *(100-w_HIT))/100;

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
			w_1senHP = n_A_MaxHP -1;

		w_DMG[0] = (n_A_STR + n_A_ActiveSkillLV) * 40 + w_1senHP * (n_A_BaseLV / 100) * n_A_ActiveSkillLV / 10;
		w_DMG[0] = w_DMG[0] * (100 - n_B[14]) / 100;
		w_DMG[0] = BaiCI(w_DMG[0]);
		w_DMG[0] = Math.floor(w_DMG[0] * zokusei[n_B[3]][0]);

		w_DMG[2] = w_DMG[1] = w_DMG[0];
		for(var i=0;i<=2;i++){
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);

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
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[b] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[b]/200);

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
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);

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
		//custom TalonRO SQI Bonus Artemis Bow: Claymore Trap and Blast Mine damage +40%
		if(n_A_ActiveSkill == 112 || n_A_ActiveSkill == 113)
			if(EquipNumSearch(1377))
				for(i=0;i<SQI_Bonus_Effect.length;i++)
					if(SQI_Bonus_Effect[i]==21) {
						w_DMG[2] = Math.floor(w_DMG[2]/100*140);
						break;
					}

		w_DMG[2] = tPlusDamCut(w_DMG[2]);
		w_DMG[0] = w_DMG[1] = w_DMG[2];
		for(var i=0;i<=2;i++){
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);

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

		wHealBAI = 100 + n_tok[93];
		w_DMG[2] = Math.floor(w_DMG[2] * wHealBAI /100);

		w_DMG[2] = tPlusDamCut(w_DMG[2]);
		w_DMG[0] = w_DMG[1] = w_DMG[2];
		for(var i=0;i<=2;i++){
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);

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

		w_HEAL_BAI = 100 + n_tok[96];
		w_DMG[2] = Math.floor(w_DMG[2] * w_HEAL_BAI / 100);

		w_DMG[2] = tPlusDamCut(w_DMG[2]);
		w_DMG[0] = w_DMG[1] = w_DMG[2];
		for(var i=0;i<=2;i++){
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);

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
		for(var i=0;i<=2;i++){
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);

			Last_DMG_A[i] = Last_DMG_B[i] = w_DMG[i];
		}
		InnStr[0] += w_DMG[0] +" (Damage on Failure)";
		InnStr[1] += w_DMG[1] +" (Considering the Success Chance)";
		InnStr[2] += Math.floor(w_DMG[2] * zokusei[n_B[3]][n_A_Weapon_zokusei]) +" (" +Math.floor(w *10000)/100 +"% Success Chance)";

		n_Delay[2] = 3;
		w_HIT_HYOUJI = 100;
		CastAndDelay();
		BattleCalc998();
	}
	else if(n_A_ActiveSkill==325){
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
			//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
			if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
				w_DMG[i] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[i]/200);

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
		//fire bolt
		if(n_A_ActiveSkill==51){
			n_A_Weapon_zokusei = 3;
			wHITsuu = n_A_ActiveSkillLV;
			wCast = 0.7 * n_A_ActiveSkillLV;
			n_Delay[2] = 0.8 + n_A_ActiveSkillLV * 0.2;
		}
		//cold bolt
		else if(n_A_ActiveSkill==54){
			n_A_Weapon_zokusei = 1;
			wHITsuu = n_A_ActiveSkillLV;
			wCast = 0.7 * n_A_ActiveSkillLV;
			n_Delay[2]= 0.8 + n_A_ActiveSkillLV * 0.2;
		}
		//lightning bolt
		else if(n_A_ActiveSkill==56){
			n_A_Weapon_zokusei = 4;
			wHITsuu = n_A_ActiveSkillLV;
			wCast = 0.7 * n_A_ActiveSkillLV;
			n_Delay[2] = 0.8 + n_A_ActiveSkillLV * 0.2;
		}
		//fire ball
		else if(n_A_ActiveSkill==52){
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
		else if(n_A_ActiveSkill==46){
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
		//soul strike
		else if(n_A_ActiveSkill==47){
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
		else if(n_A_ActiveSkill==128 || n_A_ActiveSkill==320){
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
			if(n_A_ActiveSkill==132){
				wCast = n_A_ActiveSkillLV *0.7;
				n_Delay[2] = 0.8 + n_A_ActiveSkillLV * 0.2;
			}
			else{
				wCast = n_A_ActiveSkillLV;
				n_Delay[2] = 1;
			}
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
				//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
				//skilllvb = skill level of Bragi
				//skilllvm = skill level of Musical Lesson
				//int = int stat of the character
				//input_damage = damage after everything has been applied (card modifiers, etc.)
				//final_damage = (200-((2*skilllvb+int/5)+2*skilllvm))*input_damage/200;
				if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
					w_DMG[b] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[b]/200);

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
				//custom TalonRO adjustment: Poem of Bragi reduces damage proportional to delay (PVM only)
				//skilllvb = skill level of Bragi
				//skilllvm = skill level of Musical Lesson
				//int = int stat of the character
				//input_damage = damage after everything has been applied (card modifiers, etc.)
				//final_damage = (200-((2*skilllvb+int/5)+2*skilllvm))*input_damage/200;
				if (n_A_PassSkill3[2]>0 && n_A_PassSkill3[45]==0)
					w_DMG[b] = Math.floor((200-((2*n_A_PassSkill3[2]+n_A_PassSkill3[29]/5)+2*n_A_PassSkill3[32]))*w_DMG[b]/200);

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
	if(n_A_ActiveSkill != 193 &&n_A_ActiveSkill != 197 && n_A_ActiveSkill != 321){
		if(SkillSearch(12))
			wA01 += 32;
		else if(n_A_PassSkill6[5])
			wA01 += 2 + 3 * n_A_PassSkill6[5];
		else if(n_A_PassSkill2[12])
			wA01 += 5;
		if(SkillSearch(256))
			wA01 += SkillSearch(256) * 5;
		if(SkillSearch(270))
			wA01 += SkillSearch(270) * 2;
		if(n_A_PassSkill5[3])
			wA01 += 100;
		if(n_A_PassSkill6[2])
			wA01 += 10;
		if(StPlusCalc2(87))
			wA01 += StPlusCalc2(87);
		//custom TalonRO Kris enchant %-ATK
		var KEbonus = [document.calcForm.A_KE11.value,document.calcForm.A_KE12.value,document.calcForm.A_KE21.value,document.calcForm.A_KE22.value];
		for (i=0;i<4;i++){
			var wKE = KEbonus[i];
			if(wKE){
				var w_enchant = wKE % 10;
				if(81 <= wKE && wKE <= 89)
					wA01 += w_enchant*3;
			}
		}
		//custom TalonRO Evil Marching Hat: if refine rate >=9 +5% ATK
		if(EquipNumSearch(1539) && n_A_HEAD_DEF_PLUS >= 9)
			wA01 += 5;

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

function Click_EnemySkillsSW(){
with(document.calcForm){
	n_ENSKSW = B_ENSKSW.checked;
	if(Taijin)
		wstr = "Enemy";
	else
		wstr = "Monster";

	if(n_ENSKSW){
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: collapse; width: auto;">';
		str += '<TR><TD ColSpan="10" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">'+ wstr +' Skills </div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab7" type="checkbox" name="B_ENSKSW"onClick="Click_EnemySkillsSW()"><label for="lab7">Show</label></div><div style="clear: both;"></div></TD></TR>';
		if(Taijin == 0){//SK0 = EQ || SK1 = WF || SK2 = Kaupe
			str += '<TR><TD id="EN_SK0"></TD></TR>';
			str += '<TR><TD></TD><TD>Players in Range:&nbsp;</TD><TD id="B_SK0"></TD>';
			str += '<TD id="EN_SK1"></TD><TD id="B_SK1"></TD>';
			str += '<TD id="EN_SK2"></TD><TD id="B_SK2"></TD></TR>';
		}
		str += '</TABLE>';
		myInnerHtml("MONSTER_SKILLS",str,0);
		B_ENSKSW.checked = 1;

		var name_SKILL = ["<b>Earthquake:</b>","Wall of Fog","Kaupe"];
		var html_SKILL = new Array();
		for(i=0;i<=2;i++)
			myInnerHtml("EN_SK"+i,name_SKILL[i],0);

			//html_SKILL[0] = '<select name="B_ENSK0"onChange="calc()"></select>';
			html_SKILL[0] = '<select name="EQ_PL" onChange="calc()"></select>';
			html_SKILL[1] = '<input type="checkbox" name="EQ_WF" onClick="calc()">';
			html_SKILL[2] = '<input type="checkbox" name="EQ_KP" onClick="calc()">';

		for(i=0;i<=2;i++){myInnerHtml("B_SK"+i,html_SKILL[i],0);}

		for(i=0;i<=30;i++){
			document.calcForm.EQ_PL.options[i] = new Option(i,i);}

			EQ_PL.value = EQB[0];
			EQ_WF.checked = EQB[1];
			EQ_KP.checked = EQB[2];

			//n_B_ENSK[0] = eval(document.calcForm.EQ_PL.value);
			//n_B_ENSK[1] = eval(document.calcForm.EQ_WF.value);
			//n_B_ENSK[2] = eval(document.calcForm.EQ_KP.value);

	}else{
		var str;
		str = '<table style="border: 1px solid #999; border-collapse: collapse; width: auto;">';
		str += '<TR><TD ColSpan="6" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">'+ wstr +' Skills </div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab7" type="checkbox" name="B_ENSKSW"onClick="Click_EnemySkillsSW()"><label for="lab7">Show</label></div><div style="clear: both;"></div></TD></TR></table>';
		myInnerHtml("MONSTER_SKILLS",str,0);
		B_ENSKSW.checked = 0;
	}
}}

function HealCalc(HealLv,HealType)
{
	wHeal = Math.floor((n_A_BaseLV + n_A_INT) /8) * (HealLv *8 +4);
	var wHealBAI = 100 + SkillSearch(269) *2;
	wHeal = Math.floor(wHeal * wHealBAI /100);

	var wX = 100 + n_tok[91];
	if(HealType == 1)
		wX += n_tok[92];
	if(EquipNumSearch(644))
		wX += n_A_Weapon_ATKplus * 1.5;
	//custom TalonRO Recovery Light
	if(EquipNumSearch(1511))
		wX += Math.floor(n_A_Weapon_ATKplus * 3);
	if(EquipNumSearch(1294) || EquipNumSearch(1299))
		wX += 20;
	wHeal = Math.floor(wHeal * wX /100);

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
	if(w<10000)
	{
		myInnerHtml("AveATKnum",w,0);

		n_AveATKnum = w;


		var w2 = (wCast + wDelay) * n_AveATKnum;
		w2 = Math.floor(w2 * 100) / 100;

		if(n_Delay[0])
			myInnerHtml("BattleTime","Special",0);
		else
			myInnerHtml("BattleTime",w2 + "s",0);
	}
	else
	{
		myInnerHtml("AveATKnum",SubName[5],0);
		myInnerHtml("BattleTime",SubName[6],0);
	}

	var w = 1 / (wCast + wDelay) * w_DMG[1];
	w *= 100;
	w = Math.round(w);
	w /= 100;

	if(n_Delay[0])
		myInnerHtml("AveSecondATK","Special",0);
	else
		myInnerHtml("AveSecondATK",w,0);

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
//EARTHQUAKE SKILL DMG Sem reduces de momento
	//EQ LVL 1 - Incarnation of Morroc[Golem] e a sua vers�o de mega hp que � slave do wounded morroc que liberta constants
	//EQ LVL 2 - Hardrock Mammoth
	//EQ LVL 3 - Nidhoggr's Shadow
	//EQ LVL 5 - Bapho/Orc Lord/RSX/Randgris/Ifrit
	//EQ LVL10 - Satan Morroc/Wounded Morroc
	if(n_B[0] == 492){
		LV_EQ = 1;
		EQ_ST = 1;
	}else if(n_B[0] == 534){
		LV_EQ = 2;
		EQ_ST = 1;
	}else if(n_B[0] == 546){
		LV_EQ = 3;
		EQ_ST = 1;
	}else if(n_B[0] == 228 || n_B[0] == 56 || n_B[0] == 356 || n_B[0] == 440 || n_B[0] == 472){
		LV_EQ = 5;
		EQ_ST = 1;
	}else if(n_B[0] == 495 || n_B[0] == 496){
		LV_EQ = 10;
		EQ_ST = 1;

	}else{
		EQ_ST = 0;
	}

	if(EQ_ST == 0){EQ_POWER = "Not Available";}
	if(EQ_ST == 1){
		if(CardNumSearch(126)){EQ_POWER = 0;}
		else{
			if(n_A_PassSkill2[5]){EQ_ASS = 0.5;}else{EQ_ASS = 1;} // assumpt on ou off
			if(SkillSearch(421)){EQ_ADJ = 0.8;}else{EQ_ADJ = 1;} //Adjustment Skill de Gunslinger on ou off
			//P_EQ =  eval(document.calcForm.EQB[0].value);
			//if(EQB[0] == 0){EQ_PP= 1;}
			EQ_PP = 1;
			//if(EQB[1] == 1){EQ_WOF = 0.75;}else{EQ_WOF = 1;}
			//if(EQ_WF.checked){EQ_WOF = 0.75;}else{EQ_WOF = 1;}
			EQ_WOF = 1;

			S_EQ1 = n_B[12];
			S_EQ2 = n_B[13];
			//S_EQ1*(2+LV_EQ+(LV_EQ/2)) = EQ FORMULA

			EQ_POW1 = Math.floor(S_EQ1*(2+LV_EQ+(LV_EQ/2)));
			EQ_POW2 = Math.floor((EQ_POW1*EQ_ASS)*EQ_ADJ);
			EQ_POW3 = Math.floor(EQ_POW2*EQ_WOF);
			EQ_POW4 = Math.floor(EQ_POW3/EQ_PP);

			EQ_POWA = Math.floor(S_EQ2*(2+LV_EQ+(LV_EQ/2)));
			EQ_POWB = Math.floor((EQ_POWA*EQ_ASS)*EQ_ADJ);
			EQ_POWC = Math.floor(EQ_POWB*EQ_WOF);
			EQ_POWD = Math.floor(EQ_POWC/EQ_PP);

			//EQ_POWER = EQB[0];
			EQ_POWER = Math.floor(EQ_POW4*3) + "~" + Math.floor(EQ_POWD*3) + " (" + EQ_POW4 + "~" + EQ_POWD + " x 3 Hits)";
			}
	}
	myInnerHtml("B_EQ",EQ_POWER,0);


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

	w_HiDam[0] = w_HiDam[0] * (100-n_A_totalDEF) / 100 - n_A_VITDEF[2];
	w_HiDam[1] = w_HiDam[1] * (100-n_A_totalDEF) / 100 - n_A_VITDEF[2];
	w_HiDam[2] = w_HiDam[2] * (100-n_A_totalDEF) / 100 - n_A_VITDEF[2];
	w_HiDam[3] = w_HiDam[3] * (100-n_A_totalDEF) / 100 - n_A_VITDEF[1];
	w_HiDam[4] = w_HiDam[4] * (100-n_A_totalDEF) / 100 - n_A_VITDEF[0];
	w_HiDam[5] = w_HiDam[5] * (100-n_A_totalDEF) / 100 - n_A_VITDEF[0];
	w_HiDam[6] = w_HiDam[6] * (100-n_A_totalDEF) / 100 - n_A_VITDEF[0];


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
	//custom TalonRO SQI Bonus Sherwood Bow: 15% Melee resistance
	if(n_B[20]==0){
		if(EquipNumSearch(1388))
			for(i=0;i<SQI_Bonus_Effect.length;i++)
				if(SQI_Bonus_Effect[i]==135) {
					for(j=0;j<=6;j++)
						w_HiDam[j] -= Math.floor(w_HiDam[j] * 15 /100);
					break;
				}
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
	wBMC2 = Math.floor(wBMC2 * zokusei[n_B[3]][n_A_Weapon_zokusei]);
	if (debug_dmg_avg)
		debug_atk+="\na_wBMC2:"+wBMC2;
	if(90 <= n_B[3] && n_A_ActiveSkill==47)
		wBMC2 = Math.floor(wBMC2 * (1 + 0.05 * n_A_ActiveSkillLV));

	var wX = n_tok[170+n_B[2]];
	if(n_B[2]==9  && SkillSearch(234))
		wX += SkillSearch(234) *2;
	wBMC2 = wBMC2 * (100 + wX) /100;

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
	else if(n_A_JOB == 22)
		A_SpeedPOT.options[3] = new Option("-Special("+ SkillOBJ[304][2] +"Lv85)/Poison Bottle",3);
	else
		A_SpeedPOT.options[3] = new Option("-Special("+ SkillOBJ[304][2] +")(Lv85)",3);


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

	//custom TalonRO SQI Bonus interface - reset SQI-Bonus after class-change
	SQI_Bonus_SW.checked=0;
	Click_SQI_Bonus_SW();
	for(var i=0;i < SQI_Bonus_Effect.length;i++)
		SQI_Bonus_Effect[i] = 0;
	Click_SQI_Bonus(0);

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
		}else if(n==17||n==18||n==19||n==20){
			//custom TalonRO elemental bullets
			//before
			//j=2
			//new
			j=7;
			//before
			//for (i=0; i<=2; i++)
			//new
			for (i=0; i<=7; i++)
				ArrowOBJ[i] = BulletOBJ[i];
		}else if(n==21){
			j=4;
			for (i=0; i<=4; i++)
				ArrowOBJ[i] = GrenadeOBJ[i]
		}else{
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
		if(n_Nitou == 0)
			myInnerHtml("A_SobWeaponName","Left Hand: "+'<select name="A_Weapon2Type" onChange = "ClickWeaponType2(this[this.selectedIndex].value) | StAllCalc()">	<option value="0">Fist or Shield<option value="1">Dagger<option value="2">Sword<option value="6">Axe</select>',0);
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
		for(i=1;i<=n_A_ActiveSkillLV;i++)
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

		name_CSSW_SKILL = ["Blessing","Increase AGI","Impositio Manus","Gloria","Angelus","Assumptio","Andrenaline Rush","Weapon Perfection","Power Thrust","Wind Walker","Spirit Spheres (GG Card)","Magnum Break Bonus","Aloevera","<Font size=2>Suffragium</Font>","<Font size=2>Providence</Font>","<Font size=2>Additional Buffs Found Below</Font>"];
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
		str = '<table style="border: 1px solid #999; border-collapse: collapse; width: auto;">';
		str += '<TR><TD id="A3TD" ColSpan="6" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">Music and Dance Skills <span id="A3used"></span></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab10" type="checkbox" name="A3_SKILLSW"onClick="Click_Skill3SW()"><label for="lab10">Show</label></div>';
		str += '<div style="clear: both;"></div></TD></TR>';
		str += '<TR><TD id="EN0_1"></TD><TD id="EN0_2"></TD><TD id="EN0_3"></TD><TD id="EN0_4"></TD><TD id="EN0_5"></TD><TD id="EN0_6"></TD></TR>';
		str += '<TR><TD id="EN1_1"></TD><TD id="EN1_2"></TD><TD id="EN1_3"></TD><TD id="EN1_4"></TD><TD id="EN1_5"></TD><TD id="EN1_6"></TD></TR>';
		// custom TalonRO Poem of Bragi after cast delay: after cast delay is reduced for PVM but not for PVP/WOE, thus a checkbox is needed to decide which mode is active
		//old
		//str += '<TR><TD RowSpan=2 id="EN2_1"></TD><TD RowSpan=2 id="EN2_2"></TD><TD id="EN2_3"></TD><TD id="EN2_4"></TD><TD RowSpan=2 id="EN2_7"></TD><TD RowSpan=2 id="EN2_8"></TD></TR>';
		//str += '<TR><TD id="EN2_5"></TD><TD id="EN2_6"></TD></TR>';
		//new
		str += '<TR><TD RowSpan=2 id="EN2_1"></TD><TD RowSpan=2 id="EN2_2"></TD><TD id="EN2_3"></TD><TD id="EN2_4"></TD><TD id="EN2_7"></TD><TD id="EN2_8"></TD></TR>';
		str += '<TR><TD id="EN2_5"></TD><TD id="EN2_6"></TD><TD id="EN2_9"></TD><TD id="EN2_10"></TD></TR>';
		str += '<TR><TD id="EN3_1"></TD><TD id="EN3_2"></TD><TD id="EN3_3"></TD><TD id="EN3_4"></TD><TD id="EN3_5"></TD><TD id="EN3_6"></TD></TR>';
		str += '<TR><TD id="EN4_1"></TD><TD id="EN4_2"></TD><TD id="EN4_3"></TD><TD id="EN4_4"></TD><TD id="EN4_5"></TD><TD id="EN4_6"></TD></TR>';
		str += '<TR><TD id="EN5_1"></TD><TD id="EN5_2"></TD><TD id="EN5_3"></TD><TD id="EN5_4"></TD><TD id="EN5_5"></TD><TD id="EN5_6"></TD></TR>';
		str += '<TR><TD id="EN6_1"></TD><TD id="EN6_2"></TD><TD id="EN6_3"></TD><TD id="EN6_4"></TD><TD id="EN6_5"></TD><TD id="EN6_6"></TD></TR>';
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

		myInnerHtml("EN11_1",'<input type="checkbox" name="A3_Skill11"onClick="Skill3SW_2()|calc()">'+"Marionette Control",0);

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
				n_A_PassSkill3[20] = 100;
				n_A_PassSkill3[30] = 10;
				//n_A_PassSkill3[100] = 10;
			}
			myInnerHtml("EN0_3","Bard's AGI",0);
			myInnerHtml("EN0_4",'<select name="A3_Skill0_2"onChange="Click_A3(1)"></select>',0);
			myInnerHtml("EN0_5","Musical Lessons",0);
			myInnerHtml("EN0_6",'<select name="A3_Skill0_3"onChange="Click_A3(1)"></select>',0);
			//myInnerHtml("EN0_7","Bard's LUK",0);
			//myInnerHtml("EN0_8",'<select name="A3_Skill0_4"onChange="Click_A3(1)"></select>',0);
			for(i=1;i<=150;i++)
				A3_Skill0_2.options[i-1] = new Option(i,i);
			for(i=0;i<=10;i++)
				A3_Skill0_3.options[i] = new Option(i,i);
			//for(i=0;i<=150;i++)
				//A3_Skill0_4.options[i-1] = new Option(i,i);
			SWs3sw[0] = 1;
			A3_Skill0_2.value = n_A_PassSkill3[20];
			A3_Skill0_3.value = n_A_PassSkill3[30];
			//A3_Skill0_4.value = n_A_PassSkill3[100];
		}
	}else{
		SWs3sw[0] = 0;
		myInnerHtml("EN0_3","-",0);
		myInnerHtml("EN0_4","-",0);
		myInnerHtml("EN0_5","",0);
		myInnerHtml("EN0_6","",0);
		//myInnerHtml("EN0_7","",0);
		//myInnerHtml("EN0_8","",0);
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
			for(i=1;i<=200;i++)
				A3_Skill2_2.options[i-1] = new Option(i,i);
			for(i=1;i<=200;i++)
				A3_Skill2_3.options[i-1] = new Option(i,i);
			for(i=0;i<=10;i++)
				A3_Skill2_4.options[i] = new Option(i,i);
			SWs3sw[2] = 1;
			A3_Skill2_2.value = n_A_PassSkill3[22];
			A3_Skill2_3.value = n_A_PassSkill3[29];
			A3_Skill2_4.value = n_A_PassSkill3[32];
			// custom TalonRO Poem of Bragi after cast delay
			A3_Skill2_5.checked = n_A_PassSkill3[45];
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
	}

	if(n_A_PassSkill3[3] != 0){
		if(SWs3sw[3] == 0){
			if(n_A_PassSkill3[23]==0){
				n_A_PassSkill3[23] = 100;
				n_A_PassSkill3[33] = 10;
			}
			myInnerHtml("EN3_3","Bard's VIT",0);
			myInnerHtml("EN3_4",'<select name="A3_Skill3_2"onChange="Click_A3(1)"></select>',0);
			myInnerHtml("EN3_5","Musical Lessons",0);
			myInnerHtml("EN3_6",'<select name="A3_Skill3_3"onChange="Click_A3(1)"></select>',0);
			for(i=1;i<=150;i++)
				A3_Skill3_2.options[i-1] = new Option(i,i);
			for(i=0;i<=10;i++)
				A3_Skill3_3.options[i] = new Option(i,i);
			SWs3sw[3] = 1;
			A3_Skill3_2.value = n_A_PassSkill3[23];
			A3_Skill3_3.value = n_A_PassSkill3[33];
		}
	}else{
		SWs3sw[3] = 0;
		myInnerHtml("EN3_3","-",0);
		myInnerHtml("EN3_4","-",0);
		myInnerHtml("EN3_5","",0);
		myInnerHtml("EN3_6","",0);
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
			}
			myInnerHtml("EN5_3","Dancer's LUK",0);
			myInnerHtml("EN5_4",'<select name="A3_Skill5_2"onChange="Click_A3(1)"></select>',0);
			myInnerHtml("EN5_5","Dancing Lessons",0);
			myInnerHtml("EN5_6",'<select name="A3_Skill5_3"onChange="Click_A3(1)"></select>',0);
			for(i=1;i<=180;i++)
				A3_Skill5_2.options[i-1] = new Option(i,i);
			for(i=0;i<=10;i++)
				A3_Skill5_3.options[i] = new Option(i,i);
			SWs3sw[5] = 1;
			A3_Skill5_2.value = n_A_PassSkill3[25];
			A3_Skill5_3.value = n_A_PassSkill3[35];
		}
	}else{
		SWs3sw[5] = 0;
		myInnerHtml("EN5_3","-",0);
		myInnerHtml("EN5_4","-",0);
		myInnerHtml("EN5_5","",0);
		myInnerHtml("EN5_6","",0);
	}

	if(n_A_PassSkill3[6] != 0){
		if(SWs3sw[6] == 0){
			if(n_A_PassSkill3[26]==0){
				n_A_PassSkill3[26] = 50;
				n_A_PassSkill3[36] = 10;
			}
			myInnerHtml("EN6_3","Dancer's INT",0);
			myInnerHtml("EN6_4",'<select name="A3_Skill6_2"onChange="Click_A3(1)"></select>',0);
			myInnerHtml("EN6_5","Dancing Lessons",0);
			myInnerHtml("EN6_6",'<select name="A3_Skill6_3"onChange="Click_A3(1)"></select>',0);
			for(i=1;i<=200;i++)
				A3_Skill6_2.options[i-1] = new Option(i,i);
			for(i=0;i<=10;i++)
				A3_Skill6_3.options[i] = new Option(i,i);
			SWs3sw[6] = 1;
			A3_Skill6_2.value = n_A_PassSkill3[26];
			A3_Skill6_3.value = n_A_PassSkill3[36];
		}
	}else{
		SWs3sw[6] = 0;
		myInnerHtml("EN6_3","-",0);
		myInnerHtml("EN6_4","-",0);
		myInnerHtml("EN6_5","",0);
		myInnerHtml("EN6_6","",0);
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
			"<BR>"+'<input type="checkbox" name="A3_Skill11a"onClick="Click_A3(1)">'+"<Font size=2>+ Status compensation [adjustment for equipment/human calculation]</Font>",0);
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
		str += '<TR><TD id="EN812"></TD><TD id="EN813"></TD></TR>';
		str += '<TR><TD id="EN814"></TD><TD id="EN815"></TD></TR>';
		str += '<TR><TD id="EN807"></TD></TR>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>New World Food</B></Font></TD></TR>';
		str += '<TR><TD id="EN817"></TD></TR>';
		str += '<TR><TD id="EN818"></TD></TR><TR><TD id="EN819"></TD></TR>';
		str += '<TR><TD id="EN820"></TD></TR><TR><TD id="EN821"></TD></TR>';
		str += '<TR><TD id="EN822"></TD></TR><TR><TD id="EN823"></TD></TR>';
		str += '<TR><TD id="EN824"></TD></TR><TR><TD id="EN825"></TD></TR>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>Other Food:</B></Font></TD></TR>';
		str += '<TR><TD id="EN816"></TD></TR>';
		str += '<TR><TD id="EN826"></TD><TD id="EN827"></TD></TR>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>BG Food</B></Font></TD></TR>';
		str += '<TR><TD id="EN834"></TD><TD id="EN835"></TD></TR>';
		str += '<TR><TD id="EN836"></TD><TD id="EN837"></TD></TR>';
		str += '<TR><TD colspan="2"><Font size=2 color=black><B>Debuffs</B></Font></TD></TR>';
		str += '<TR><TD id="EN830"></TD><TD id="EN831"></TD></TR>';
		str += '<TR><TD id="EN832"></TD><TD id="EN833"></TD></TR></table>';
		myInnerHtml("ID_ETC",str,0);
		A8_SKILLSW.checked = 1;
		myInnerHtml("EN800",'<select name="A8_Skill0" onChange="Click_A8(1)"></select>',0);

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
		myInnerHtml("EN810",'Number of Enemies hitting you <select name="A8_Skill12" onChange="Click_A8(1)"></select>',0);
		for(i=0;i<=22;i++)
			A8_Skill12.options[i] = new Option(i + "",i);


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
		myInnerHtml("EN816",'<input type="checkbox" name="A8_Skill18"onClick="Click_A8(1)">Buche de Noel[Hit +3, CRIT +7, Recovery rate of skills and items + 3%]',0);
		myInnerHtml("EN817",'<input type="checkbox" name="A8_Skill19"onClick="Click_A8(1)">Rune Strawberry Cake[ATK, MATK + 5]',0);
		myInnerHtml("EN818",'<input type="checkbox" name="A8_Skill20"onClick="Click_A8(1)">Schwartzwald Pine Jubilee[HIT + 10 , Perfect Dodge + 20]',0);
		myInnerHtml("EN819",'<input type="checkbox" name="A8_Skill21"onClick="Click_A8(1)">Arunafeltz Desert Sandwich[CRIT + 7]',0);

		myInnerHtml("EN820",'<input type="checkbox" name="A8_Skill22"onClick="Click_A8(1)">Manuk\'s Sturdiness[Increases physical damage on Manuk maps by 10%]',0);
		myInnerHtml("EN821",'<input type="checkbox" name="A8_Skill23"onClick="Click_A8(1)">Manuk\'s Faith[Increases magical damage on Manuk maps by 10%]',0);
		myInnerHtml("EN822",'<input type="checkbox" name="A8_Skill24"onClick="Click_A8(1)">Manuk\'s Will[Decreases damage on Manuk maps by 10%]',0);
		myInnerHtml("EN823",'<input type="checkbox" name="A8_Skill25"onClick="Click_A8(1)">Pinguicula\'s Fruit Jam[Increases physical damage on Splendide maps by 10%]',0);
		myInnerHtml("EN824",'<input type="checkbox" name="A8_Skill26"onClick="Click_A8(1)">Cornus\' Tear[Increases magical damage on Splendide maps by 10%]',0);
		myInnerHtml("EN825",'<input type="checkbox" name="A8_Skill27"onClick="Click_A8(1)">Luciola\'s Honey Jam[Decreases damage on Splendide maps by 10%]',0);

		//custom TalonRO
		//myInnerHtml("EN826",'<input type="checkbox" name="A8_Skill28"onClick="Click_A8(1)">Guarana Candy[ASPD+ 10%, HIT+ 5]',0);
		myInnerHtml("EN826",'<input type="checkbox" name="A8_Skill28"onClick="Click_A8(1)">Guarana Candy[Increase AGI Level 10]',0);

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
		A_IJYOU0.value = n_A_IJYOU[0];
		A_IJYOU1.value = n_A_IJYOU[1];
		A_IJYOU2.checked = n_A_IJYOU[2];
		A_IJYOU3.checked = n_A_IJYOU[3];

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
		if(n_A_PassSkill8[i] != 0){
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
		str += '<select name="SQI_Bonus_1" onChange="Click_SQI_Bonus(1)"></select><BR>';
		str += '<select name="SQI_Bonus_2" onChange="Click_SQI_Bonus(1)"></select><BR>';
		str += '<select name="SQI_Bonus_3" onChange="Click_SQI_Bonus(1)"></select><BR>';
		str += '<select name="SQI_Bonus_4" onChange="Click_SQI_Bonus(1)"></select><BR>';
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

	}else{
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
		myInnerHtml("A_KEText11","Kris Enchantment 1",0);
		A_KE11.style.visibility = "visible";
		myInnerHtml("A_KEText12","Kris Enchantment 2",0);
		A_KE12.style.visibility = "visible";
	}
	else{
		myInnerHtml("A_KEText11","",0);
		A_KE11.style.visibility = "hidden";
		A_KE11.value = 0;
		myInnerHtml("A_KEText12","",0);
		A_KE12.style.visibility = "hidden";
		A_KE12.value = 0;
	}
	if (typeof(A_weapon2) != "undefined"){
		if(A_weapon2.value == 1472){
			myInnerHtml("A_KEText21","Kris Enchantment 1",0);
			A_KE21.style.visibility = "visible";
			myInnerHtml("A_KEText22","Kris Enchantment 2",0);
			A_KE22.style.visibility = "visible";
		}
	}else{
		myInnerHtml("A_KEText21","",0);
		A_KE21.style.visibility = "hidden";
		A_KE21.value = 0;
		myInnerHtml("A_KEText22","",0);
		A_KE22.style.visibility = "hidden";
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

		for(i=0; i<CARD_SHORTCUT.length; i++) {
			A_cardshort.options[i] = new Option(CARD_SHORTCUT[i][1],CARD_SHORTCUT[i][0]);
		}

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

		for(var i=0; i<HS_ENCHANTS.length; i++) {
			A_HSE.options[i] = new Option(HS_ENCHANTS[i][1],HS_ENCHANTS[i][0]);
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
								A_ME11.options[j].classList.add('prohibted');
						}
					}
					for(j = A_ME12.length - 1; j >= 0; j--){
							if(parseInt(arEx.indexOf(A_ME12.options[j].value)) != -1) {
								A_ME12.options[j].disabled = true;
								A_ME12.options[j].classList.add('prohibted');
							}
					}
				}
		} else {
			for(j = MALANGDO_ENCHANTS.length - 1; j >= 0; j--){
				A_ME11.options[j].disabled = A_ME12.options[j].disabled = false;
				A_ME11.options[j].classList.remove('prohibted');
				A_ME12.options[j].classList.remove('prohibted');
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
						A_ME21.options[j].classList.add('prohibted');
					}
				}
				for (j = A_ME22.length - 1; j >= 0; j--) {
						if(arEx.indexOf(A_ME22.options[j].value) != -1) {
							A_ME22.options[j].disabled = true;
							A_ME22.options[j].classList.add('prohibted');
						}
				}
		} else {
			for(j = MALANGDO_ENCHANTS.length - 1; j >= 0; j--){
				A_ME21.options[j].disabled = A_ME22.options[j].disabled = false;
				A_ME21.options[j].classList.remove('prohibted');
				A_ME22.options[j].classList.remove('prohibted');
			}
		}
	}
	tRO_MalangdoEnchantment = [document.calcForm.A_ME11.value,document.calcForm.A_ME12.value,document.calcForm.A_ME21.value,document.calcForm.A_ME22.value];
}

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
		str += '<tr><TD Colspan="2" id="EN954"></TD><TD id="EN955"></TD><TD Colspan="2" id="EN956"></TD><TD id="EN957"></TD><TD Colspan="2" id="EN958"></TD><TD id="EN959"></TD><TD Colspan="2" id="EN960"></TD><TD id="EN961"></TD></tr>';
		str += '<tr><TD Colspan="2" id="EN962"></TD><TD id="EN963"></TD></tr>';
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
		myInnerHtml("EN958",'ASPD',0);
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
		str = '<table style="border: 1px solid #999; border-collapse: collapse; width: auto;">';
		str += '<TR><TD id="AITD" ColSpan="6" Bgcolor="#DDDDFF"  class="subheader"><div style="float: left; padding: 3px;">'+ wstr +' Debuffs <span id="AIused"></span></div>';
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

		var name_SKILL = ["Provoke (Non Undead)","Quagmire","Poison","Blind","Frozen (Non Undead)","Blessing (Demon/Undead)","Lex Aeterna","Stun","Sleep","Stone","Curse","Agility Down","Signum Crucis","Strip Weapon","Strip Shield","Strip Armor","Strip Helm","Spider Web","Mind Breaker","Slow Grace","Down Tempo","Eska","Eske","Elemental Change (Sage Skill)","Flying"];
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
		str = '<table style="border: 1px solid #999; border-collapse: collapse; width: auto;">';
		str += '<TR><TD id="AITD" ColSpan="2" Bgcolor="#DDDDFF"  class="subheader"><div style="float: left; padding: 3px;">'+ wstr +' Debuffs <span id="AIused"></span></div>';
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
		str = '<table align="left" style="border: 1px solid #999; border-collapse: collapse; width: auto;">';
		str += '<TR><TD id="AKTD" ColSpan="6" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">'+ wstr +' Buffs <span id="AKused"></span></div>';
		str += '<div style="float: right; padding-right: 3px;"><input id="lab5" type="checkbox" name="B_KYOUKASW"onClick="Click_EnemyKyoukaSW()"><label for="lab5">Show</label></div></TD></TR>';
		str += '<TR><TD id="ID_K0"></TD><TD id="ID_Kb0"></TD>';
		str += '<TD id="ID_K1"></TD><TD id="ID_Kb1"></TD></TR>';
		if(Taijin==0){
			str += '<TR><TD id="ID_K2"></TD><TD id="ID_Kb2"></TD>';
			str += '<TD id="ID_K3"></TD><TD id="ID_Kb3"></TD></TR>';
			str += '<TR><TD id="ID_K4"></TD><TD id="ID_Kb4"></TD>';
			str += '<TD id="ID_K5"></TD><TD id="ID_Kb5"></TD></TR>';
			str += '<TR><TD id="ID_K6"></TD><TD id="ID_Kb6"></TD>';
			str += '<TD id="ID_K7"></TD><TD id="ID_Kb7"></TD></TR>';
			str += '<TR><TD id="ID_K8"></TD><TD id="ID_Kb8"></TD>';
			str += '<TD id="ID_K9"></TD><TD id="ID_Kb9"></TD></TR>';
		}
		str += '</TABLE>';
		myInnerHtml("MONSTER_KYOUKA",str,0);
		B_KYOUKASW.checked = 1;


		var name_SKILL = ["Increase AGI","Assumptio","Adrenaline Rush","Maximize Power","<Font size=2>POWER UP<BR>(ATK*3, HIT*2)</Font>","FLEE UP","Change element","Stone Skin","Magic Mirror","Keeping"];
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

		for(i=0;i<=1;i++)
			myInnerHtml("ID_Kb"+i,html_SKILL[i],0);

		for(i=0;i<=10;i++)
			B_KYOUKA0.options[i] = new Option(i,i);
		B_KYOUKA0.value = n_B_KYOUKA[0];
		B_KYOUKA1.checked = n_B_KYOUKA[1];

		if(Taijin==0){
			for(i=2;i<=9;i++)
				myInnerHtml("ID_K"+i,name_SKILL[i],0);
			for(i=2;i<=9;i++)
				myInnerHtml("ID_Kb"+i,html_SKILL[i],0);
			for(i=0;i<=5;i++){
				B_KYOUKA7.options[i] = new Option(i,i);
				B_KYOUKA8.options[i] = new Option(i,i);
			}
			var ZoHe =[["None","Neutral 1","Neutral 2","Neutral 3","Neutral 4","Water 1","Water 2","Water 3","Water 4","Earth 1","Earth 2","Earth 3","Earth 4","Fire 1","Fire 2","Fire 3","Fire 4","Wind 1","Wind 2","Wind 3","Wind 4","Poison 1","Poison 2","Poison 3","Poison 4","Holy 1","Holy 2","Holy 3","Holy 4","Shadow 1","Shadow 2","Shadow 3","Shadow 4","Ghost 1","Ghost 2","Ghost 3","Ghost 4","Undead 1","Undead 2","Undead 3","Undead 4"],
				[0,1,2,3,4,11,12,13,14,21,22,23,24,31,32,33,34,41,42,43,44,51,52,53,54,61,62,63,64,71,72,73,74,81,82,83,84,91,92,93,94]];
			for(i=0;i<=40;i++)
				B_KYOUKA6.options[i] = new Option(ZoHe[0][i],ZoHe[1][i]);
			B_KYOUKA2.checked = n_B_KYOUKA[2];
			B_KYOUKA3.checked = n_B_KYOUKA[3];
			B_KYOUKA4.checked = n_B_KYOUKA[4];
			B_KYOUKA5.checked = n_B_KYOUKA[5];
			B_KYOUKA6.value = n_B_KYOUKA[6];
			B_KYOUKA7.value = n_B_KYOUKA[7];
			B_KYOUKA8.value = n_B_KYOUKA[8];
			B_KYOUKA9.checked = n_B_KYOUKA[9];
		}
	}
	else{
		var str;
		str = '<table align="left" style="border: 1px solid #999; border-collapse: collapse; width: auto;">';
		str += '<TR><TD id="AKTD" ColSpan="6" Bgcolor="#DDDDFF" class="subheader"><div style="float: left; padding: 3px;">'+ wstr +' Buffs <span id="AKused"></span></div>';
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
	for(var i=0;i <= 9;i++)
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

function ClickB_Enemy(){
with(document.calcForm){
	n_B = new Array();
	n_B2 = new Array();
	for(i=0;i<=22;i++){
		n_B[i] = MonsterOBJ[B_Enemy.value][i];
		n_B2[i] = n_B[i];
	}

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
	}else{

		n_B2[23] = n_B[7];
		n_B2[24] = n_B[7] + (Math.floor(n_B[7]/20) * Math.floor(n_B[7]/20) -1);
		if(n_B2[23] > n_B2[24])
			n_B2[24] = n_B2[23];
		//custom TalonRO Monster picture!
		//check also monster.js row 686+687 (MonsterOBJ[i][23] = MonsterOBJ[i][21];)
		//[Custom TalonRO = 2016-06-04 - Fixed the database link for Panel][Kato]
		if (MonsterOBJ[B_Enemy.value][23]!=0){
			document.getElementById("B_Enemy_picture").innerHTML="<img src=\"https://panel.talonro.com/images/monster/"+MonsterOBJ[B_Enemy.value][23]+".gif\" alt=\"no picture available =(\">";
			document.getElementById("B_Enemy_mobdb").innerHTML="<a href=\"https://panel.talonro.com/mobdb/"+MonsterOBJ[B_Enemy.value][23]+"/\" target=\"_blank\"><b>MobDB</b></a>";
		} else {
			document.getElementById("B_Enemy_picture").innerHTML="<img src=\"\" alt=\"no picture available =(\">";
			document.getElementById("B_Enemy_mobdb").innerHTML="<b>n/a</b>";
		}
		//custom TalonRO show boss/non-boss
		if (MonsterOBJ[B_Enemy.value][19]==1)
			myInnerHtml("B_26","Boss",0);
		else
			myInnerHtml("B_26","non-Boss",0);
	}
	//custom TalonRO Thanatos Card
	if(CardNumSearch(166)){
		n_B[14] = Math.round(n_B[14]/100*(100-30*CardNumSearch(166)));
	}
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
			n_B_KYOUKA[5] = B_KYOUKA5.checked;
			n_B_KYOUKA[6] = eval(B_KYOUKA6.value);
			n_B_KYOUKA[7] = eval(B_KYOUKA7.value);
			n_B_KYOUKA[8] = eval(B_KYOUKA8.value);
			n_B_KYOUKA[9] = B_KYOUKA9.checked;
		}
	}
	if(n_B_KYOUKA[6])
		n_B[3] = n_B_KYOUKA[6];
	if(n_B_IJYOU[23])
		n_B[3] = n_B_IJYOU[23] * 10 + (n_B[3] % 10);

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
/* [START] */


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



	if(Taijin==0){
		n_B[23] = n_B[7];
		n_B[24] = n_B[7] + (Math.floor(n_B[7]/20) * Math.floor(n_B[7]/20) -1);
	//custom TalonRO Thanatos Card
	if(CardNumSearch(166)){
		n_B[23] = Math.round(n_B[23]/100*(100-30*CardNumSearch(166)));
		n_B[24] = Math.round(n_B[24]/100*(100-30*CardNumSearch(166)));
	}
		if(n_B[23] > n_B[24])
			n_B[24] = n_B[23];
	}
	n_B[25] = Math.floor(n_B[7] / 2) + n_B[9];
	n_B[26] = n_B[5] + n_B[10];
	n_B[27] = n_B[5] + n_B[8];


	var wDEF = 0;
	if(n_B[19] == 0){
		if(n_B_IJYOU[0]!=0 && n_B[3]<90)
			wDEF += 5 + n_B_IJYOU[0] * 5;
	}
	if(Taijin==0){
		if(n_B_IJYOU[22])
			wDEF += 50;
	}
	if(Taijin==0){
		if(n_B_IJYOU[24])
			wDEF += 5 * n_B_IJYOU[24];
	}
	if(wDEF > 100)
		wDEF=100;
	if(Taijin==0)
		n_B[14] -= Math.floor(n_B[14] * wDEF /100);


	if(n_B[19] == 0){
		if(n_B_IJYOU[2])
			n_B[14] -= Math.floor(n_B[14] * 25 / 100);
	}


	var w = 0;
	w += n_tok[290];
	w += n_tok[300+n_B[2]];
	if(n_A_ActiveSkill==324 || n_A_ActiveSkill==159 || n_A_ActiveSkill==384 || n_A_ActiveSkill==162 || n_A_ActiveSkill==193 || n_A_ActiveSkill==405 || n_A_ActiveSkill==438)
		w = 0;
	if(w){
		if(w < 0)
			w = 0;
		n_B[14] -= Math.floor(n_B[14] * w /100);
	}

	if(n_B_IJYOU[14] && Taijin==0)
		n_B[14] -= Math.floor(n_B[14] * 15 /100);

	if(n_B[19] == 0){
		if(n_B_IJYOU[4] && n_B[2]!=1)
			n_B[14] -= Math.floor(n_B[14] * 50 /100);
	}
	if(n_B[19] == 0){
		if(n_B_IJYOU[9] && n_B[2]!=1)
			n_B[14] -= Math.floor(n_B[14] * 50 /100);
	}
	if(n_B_KYOUKA[9])
		n_B[14] *= 2;

	if(n_B_IJYOU[12] && (n_B[2]==6||n_B[3]>=90))
		n_B[14] -= Math.floor(n_B[14] * (10 + n_B_IJYOU[12] * 4) /100);

	if(n_B_IJYOU[20] && Taijin==0)
		n_B[14] = 0;


	n_B[23] -= Math.floor(n_B[23] * wDEF /100);
	n_B[24] -= Math.floor(n_B[24] * wDEF /100);

	if(n_B[19] == 0){
		if(n_B_IJYOU[2]){
			n_B[23] -= Math.floor(n_B[23] * 25 / 100);
			n_B[24] -= Math.floor(n_B[24] * 25 / 100);
		}
	}
	if(n_B[19] == 0){
		if(n_B_IJYOU[4] && n_B[2]!=1){
			n_B[23] -= Math.floor(n_B[23] * 50 /100);
			n_B[24] -= Math.floor(n_B[24] * 50 /100);
		}
	}
	if(n_B[19] == 0){
		if(n_B_IJYOU[9] && n_B[2]!=1){
			n_B[23] -= Math.floor(n_B[23] * 50 /100);
			n_B[24] -= Math.floor(n_B[24] * 50 /100);
		}
	}

	if(Taijin==0 && n_B_KYOUKA[8]){
		n_B[23] -= Math.floor(n_B[23] * 20 * n_B_KYOUKA[8] /100);
		n_B[24] -= Math.floor(n_B[24] * 20 * n_B_KYOUKA[8] /100);
	}

	if(Taijin==0){
		if(n_B_IJYOU[21])
			n_B[24] += 90;
	}

	if(n_B_IJYOU[20]){
		n_B[23] = 0;
		n_B[24] = 0;
	}



	var w = 0;
	w += n_tok[295];
	w += n_tok[310+n_B[2]];
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
	//custom TalonRO Update 2014-08-30: Stone Skin ignores %-int mdef too
	if(Taijin==0 && n_B_KYOUKA[7])
		n_B[15] -= Math.floor(n_B[15] * 20 * n_B_KYOUKA[7] /100);

	if(n_B[19] == 0){
		if(n_B_IJYOU[18] && n_B[3]<90)
			n_B[25] -= Math.floor(n_B[25] * (n_B_IJYOU[18] * 12) / 100);
	}

	if(Taijin==0 && n_B_KYOUKA[7])
		n_B[25] -= Math.floor(n_B[25] * 20 * n_B_KYOUKA[7] /100);

	if(Taijin==0){
		if(n_B_IJYOU[21])
			n_B[25] = 90;
	}


	if(n_B[19] == 0){
		if(n_B_IJYOU[3]){
			n_B[26] -= 25;
			if(n_B[26] < 1)
				n_B[26] = 1;
		}
	}
	if(n_B_KYOUKA[4])
		n_B[26] = n_B[26] * 2;

	/* Truncate calculation speed enhancement after dark (FLEE * 2) in planning */
	if(n_B[19] == 0){
		if(n_B_IJYOU[3])
			n_B[27] -= Math.floor(n_B[27] * 25 / 100);
	}

	if(n_B_KYOUKA[5])
		n_B[27] = n_B[27] * 2;

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
	if(Taijin==0){
		var w1_Exp = 100;
		w1_Exp += StPlusCard(120+n_B[2]);
		w1_Exp += StPlusCalc2(120+n_B[2]);
		var w2_Exp = 0;
		if(EquipNumSearch(1030))
			w1_Exp += 5 * EquipNumSearch(1030);
		if(n_A_JobSearch()==3 && CardNumSearch(452) && (n_B[2]==1 || n_B[2]==6))
			w1_Exp += 5;
		if(n_B[2] == 2 && n_A_JobSearch()==4 && CardNumSearch(453))
			w1_Exp += 5;
		if(n_A_PassSkill8[1])
			w1_Exp += (25 * n_A_PassSkill8[1]);
		if(n_A_PassSkill8[2])
			w2_Exp += 50;
		if(n_A_PassSkill6[2])
			w1_Exp += 100;
		//custom TalonRO Ultimate Ascended Black Dragon Hat: +5% exp
		if(EquipNumSearch(1493) && n_B[19]==0)
			w1_Exp += 5;
		if(n_A_PassSkill8[14] == 3 || n_A_PassSkill6[2]){
			w1_Exp = w1_Exp * 2;
			w2_Exp = w2_Exp * 2;
		}
		if(w1_Exp != 0 || w2_Exp != 0){
			n_B[16] = Math.floor(n_B[16] * w1_Exp / 100);
			n_B[17] = Math.floor(n_B[17] * (w1_Exp + w2_Exp) / 100);
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
	n_B_DEF2[0] = n_B[24];
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
		wBC3_3danHatudouRitu = 30 - SkillSearch(187);

	wDA = SkillSearch(13) * 5;
	if(n_A_WeaponType != 1)
		wDA = 0;
	if(CardNumSearch(43)){
		if(SkillSearch(13) > 1)
			wDA = SkillSearch(13) * 5;
		else
			wDA = 5;
	}
	if(EquipNumSearch(399) || EquipNumSearch(1348)){ //Nagan/Nagan [Rental] double attack - [Loa] -2018-06-26
			wDA = 25;
	}
	if(EquipNumSearch(570) && n_A_WeaponType != 0){
		if(SkillSearch(13) > 1)
			wDA = SkillSearch(13) * 5;
		else
			wDA = 10;
	}
	// //if(EquipNumSearch(399)){
	// if(EquipNumSearch(399) || EquipNumSearch(1348)){ //custom TalonRO rental: enable Double Attack lv 5 for Nagan R
	// 	if(SkillSearch(13) > 5)
	// 		wDA = SkillSearch(13) * 5;
	// 	else
	// 		wDA = 25;
	// }
	if(EquipNumSearch(1495)){ //custom TalonRO rental: enable Double Attack lv 1 for Snake Head Hat
		if(SkillSearch(13) > 1)
			wDA = SkillSearch(13) * 5;
		else
			wDA = 5;
	}
	if(n_A_WeaponType == 17){
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
		n_A_DMG[2] = n_A_ATK + n_A_WeaponLV_Maxplus + Math.floor((n_A_Weapon_ATK + wImp)* wCSize);
	else
		n_A_DMG[2] = n_A_ATK + n_A_WeaponLV_Maxplus + Math.floor((n_A_Weapon_ATK-1 + wImp)* wCSize);

	if(n_A_WeaponType==10||n_A_WeaponType==17||n_A_WeaponType==18||n_A_WeaponType==19||n_A_WeaponType==20||n_A_WeaponType==21)
		n_A_DMG[2] += Math.floor((ArrowOBJ[n_A_Arrow][0]-1) * wCSize);


	if(n_A_WeaponType==10||n_A_WeaponType==17||n_A_WeaponType==18||n_A_WeaponType==19||n_A_WeaponType==20||n_A_WeaponType==21)
	{
		w1 = n_A_ATK + n_A_WeaponLV_Maxplus + Math.floor(n_A_Weapon_ATK * n_A_Weapon_ATK / 100 * wCSize) + Math.floor(wImp * wCSize);
		w2 = n_A_ATK + n_A_WeaponLV_Maxplus + Math.floor(n_A_Weapon_ATK * n_A_workDEX / 100 * wCSize) + Math.floor(wImp * wCSize);

		w = Math.floor((ArrowOBJ[n_A_Arrow][0]-1) * wCSize);
		w1 += w;
		w2 += w;
		if(w1 > w2)w1 = w2;
		if(n_A_DMG[2] < w1)n_A_DMG[2] = w1;
	}




	if(n_A_WeaponType==10||n_A_WeaponType==17||n_A_WeaponType==18||n_A_WeaponType==19||n_A_WeaponType==20||n_A_WeaponType==21)
	{
		n_A_DMG[0] = n_A_ATK + n_A_WeaponLV_Minplus + Math.floor((n_A_Weapon_ATK * n_A_Weapon_ATK / 100 +wImp) * wCSize);
		w = n_A_ATK + n_A_WeaponLV_Minplus + Math.floor((n_A_Weapon_ATK * n_A_workDEX / 100 + wImp) * wCSize);
		if(n_A_DMG[0] > w)n_A_DMG[0] = w;
	}
	else{
		if(n_A_workDEX >= n_A_Weapon_ATK)
			n_A_DMG[0] = n_A_ATK + n_A_WeaponLV_Minplus + Math.floor((n_A_Weapon_ATK + wImp) * wCSize);
		else{

			if(SkillSearch(155))
				n_A_workDEX = n_A_Weapon_ATK;
			n_A_DMG[0] = n_A_ATK + n_A_WeaponLV_Minplus + Math.floor((n_A_workDEX + wImp) * wCSize);
		}
	}


	n_A_DMG[1] = (n_A_DMG[0] + n_A_DMG[2]) / 2;


	n_Enekyori=0;
	n_A_CriATK = [0,0,0];
	n_A_CriATK[1] = n_A_ATK + (n_A_WeaponLV_Minplus + n_A_WeaponLV_Maxplus) /2 + Math.floor((n_A_Weapon_ATK + wImp)* wCSize);
	n_A_CriATK[0] = n_A_ATK + n_A_WeaponLV_Minplus + Math.floor((n_A_Weapon_ATK + wImp)* wCSize);
	n_A_CriATK[2] = n_A_ATK + n_A_WeaponLV_Maxplus + Math.floor((n_A_Weapon_ATK + wImp)* wCSize);

	if(n_A_WeaponType==10 || 17<=n_A_WeaponType && n_A_WeaponType <= 21){
		n_Enekyori=1;
		if(n_A_WeaponType==10){
			for(i=0;i<=2;i++)
				n_A_CriATK[i] += Math.floor((ArrowOBJ[n_A_Arrow][0]) * wCSize);
		}
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

}


function BattleCalc(w_atk,w_2)
{
	if(debug_dmg_avg) {
		debug_atk+="\n --- (BattleCalc) def-related ---";
		debug_atk+="\nb_BattleCalc4:"+w_atk;
	}

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

	if(debug_dmg_avg) {
		debug_atk+="\n --- (BattleCalc) The Ring of Nibelungen ---";
		debug_atk+="\nb_w_atk:"+w_atk;
	}
	if(n_A_PassSkill3[10] && n_A_WeaponLV == 4)
		w_atk += 50 + 25 * n_A_PassSkill3[10];
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
		w999 += 3 * SkillSearch(185);
	else
		w999 += 3 * n_A_PassSkill2[10];

	w999 += 3 * SkillSearch(416);
	if(debug_dmg_avg)
		debug_atk+="\na_SSS:"+w999;

	if(n_A_WeaponType != 0 && w999_AB == 1)
		w999 += 20 * SkillSearch(254);
	//custom TalonRO SQI Bonus Blade of Angels: activating Aura Blade lv 5
	if(EquipNumSearch(1379))
		for(i=0;i<SQI_Bonus_Effect.length;i++)
			if(SQI_Bonus_Effect[i]==45) {
				w999 += 100;
				break;
			}

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

		if(debug_dmg_avg) {
			debug_atk+="\n --- (BaiCI) Weapon/Card Size Modifier ---";
			debug_atk+="\nb_wBaiCI:"+wBaiCI;
		}
		w1=n_tok[27+n_B[4]];
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

		if(debug_dmg_avg) {
			debug_atk+="\n --- (BaiCI) crit Modifier ---";
			debug_atk+="\nb_wBaiCI:"+wBaiCI;
		}
		//custom TalonRO fix so critical damage bonus increases Sharp Shooting too
		if(wCriTyuu==1 && n_A_ActiveSkill != 401)
		//original
		//if(wCriTyuu==1 && n_A_ActiveSkill != 272 && n_A_ActiveSkill != 401)
			wBaiCI = Math.floor(wBaiCI * (100+ n_tok[70]) /100);
		if(debug_dmg_avg)
			debug_atk+="\na_wBaiCI:"+wBaiCI;

		if(108<=n_B[0] && n_B[0]<=115 || n_B[0]==319)
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
	//specific skill %damage bonus
	w1=0;
	if(n_A_ActiveSkill == 6)
		if(n_A_SHOES_DEF_PLUS >= 9 && CardNumSearch(362))
			w1 += 10;
	if(n_A_ActiveSkill == 76)
		if(n_A_WeaponType==2 || n_A_WeaponType==3)
			w1 += 25 * CardNumSearch(464);
	if(n_A_ActiveSkill == 41)
		if(n_A_WeaponType==10)
			w1 += 50 * CardNumSearch(465);
	if(n_A_ActiveSkill == 40)
		if(n_A_Weapon_ATKplus >= 9 && EquipNumSearch(1089))
			w1 += 20;
	//custom TalonRO rental - Bow of Evil: Double Strafe damage +25%
	if(n_A_ActiveSkill == 40 && EquipNumSearch(1332))
		w1 += 25;
	//custom TalonRO rental - Katar of Speed: Sonic Blow damage +25%
	if(n_A_ActiveSkill == 83 || n_A_ActiveSkill == 388)
		if(EquipNumSearch(1342))
			w1 += 25;
	//custom TalonRO rental - Mace of Madness: Cart Revolution damage +25%
	if(n_A_ActiveSkill == 66)
		if(EquipNumSearch(1343))
			w1 += 25;
	//custom TalonRO rental - Monk Knuckle: Finger Offensive damage +25%
	if(n_A_ActiveSkill == 192)
		if(EquipNumSearch(1346))
			w1 += 25;
	//custom TalonRO rental - Phenomena Whip: Throw Arrow damage +25%
	if(n_A_ActiveSkill == 207)
		if(EquipNumSearch(1349))
			w1 += 25;
	//custom TalonRO rental - Spear of Excellent: Magnum Break damage +25%
	if(n_A_ActiveSkill == 7)
		if(EquipNumSearch(1352))
			w1 += 25;
	//custom TalonRO SQI Bonus Twin Fang: Grimtooth damage +25%
	if(n_A_ActiveSkill == 84)
		if(EquipNumSearch(1375))
			for(i=0;i<SQI_Bonus_Effect.length;i++)
				if(SQI_Bonus_Effect[i]==7) {
					w1 += 25;
					break;
				}
	//custom TalonRO SQI Bonus Aegis Shield: Shield Chain damage +10%
	if(n_A_ActiveSkill == 324)
		if(EquipNumSearch(1376))
			for(i=0;i<SQI_Bonus_Effect.length;i++)
				if(SQI_Bonus_Effect[i]==14) {
					w1 += 10;
					break;
				}
	//custom TalonRO SQI Bonus Artemis Bow: Double Strafe damage +15%
	if(n_A_ActiveSkill == 40)
		if(EquipNumSearch(1377))
			for(i=0;i<SQI_Bonus_Effect.length;i++)
				if(SQI_Bonus_Effect[i]==24) {
					w1 += 15;
					break;
				}
	//custom TalonRO SQI Bonus Belmont Whip: Throw Arrow damage +35%
	if(n_A_ActiveSkill == 207)
		if(EquipNumSearch(1378))
			for(i=0;i<SQI_Bonus_Effect.length;i++)
				if(SQI_Bonus_Effect[i]==36) {
					w1 += 35;
					break;
				}
	if(n_A_ActiveSkill == 272 && EquipNumSearch(1045)){
		w1 += n_A_Weapon_ATKplus * 3;
	}
	//custom TalonRO Imperial Guard: Shield Chain damage +2% each refine above 6
	if(n_A_ActiveSkill == 324)
		if(EquipNumSearch(1459))
			if(n_A_LEFT_DEF_PLUS > 6)
				w1 += 2*(n_A_LEFT_DEF_PLUS-6);
	//custom TalonRO Black Wing: Back Stab damage +2% each refine
	if(n_A_ActiveSkill == 169)
		if(EquipNumSearch(1463))
			w1 += 2*n_A_Weapon_ATKplus;
	//custom TalonRO Cannon Spear: Head Crush damage +5% each 3rd refine
	if(n_A_ActiveSkill == 260)
		if(EquipNumSearch(1516))
			w1 += 3*Math.floor(n_A_Weapon_ATKplus/3);

	if(n_A_ActiveSkill == 428)
		if(n_A_Weapon_ATKplus >= 9 && EquipNumSearch(1099))
			w1 += 2 * n_A_Weapon_ATKplus;
	if(n_A_ActiveSkill == 430)
		if(n_A_Weapon_ATKplus >= 9 && EquipNumSearch(1100))
			w1 += 3 * n_A_Weapon_ATKplus;
	if(n_A_ActiveSkill == 436)
		if(n_A_Weapon_ATKplus >= 9 && EquipNumSearch(1102))
			w1 += 2 * n_A_Weapon_ATKplus;
	if(n_A_ActiveSkill == 437)
		if(n_A_Weapon_ATKplus >= 9 && EquipNumSearch(1103))
			w1 += 2 * n_A_Weapon_ATKplus;
	if(n_A_ActiveSkill == 6 || n_A_ActiveSkill == 76)
		if(n_A_ActiveSkillLV == 10 && EquipNumSearch(1159))
			w1 += 50;
	if(n_A_ActiveSkill == 65)
		if((SU_LUK >= 90 || SU_DEX >= 90) && EquipNumSearch(1164))
			w1 += 15;
	if(n_A_ActiveSkill == 264)
		if(EquipNumSearch(1176) && SkillSearch(81) == 10)
			w1 += 20;

	if(TyouEnkakuSousa3dan == -1 && EquipNumSearch(639))
		w1 += 15;

	if((n_A_ActiveSkill==83 || n_A_ActiveSkill==388) && SkillSearch(381) && wBCEDPch==0)
		w1 += 10;

	wBaiCI = wBaiCI * (100+StPlusCalc2(5000+n_A_ActiveSkill)+StPlusCard(5000+n_A_ActiveSkill) + w1) /100;

	if(debug_dmg_avg)
		debug_atk+="\n\tw1:"+w1+"(%)\na_wBaiCI:"+wBaiCI;

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
	if(n==258 && TimeItemNumSearch(35))
		return 1;

	for(var k=0;k<=14;k++)
	{
		if(JobSkillPassOBJ[n_A_JOB][k] == n)
		{
			return n_A_PassSkill[k];
		}
	}
	return 0;
}


function BattleCalc4(wBC4,wBC4_2,wBC4_3){
	if(wBC4_3==0)
		wBC4_3=n_A_WeaponLV_seirenATK;
	else
		wBC4_3=n_A_Weapon2LV_seirenATK;
	if(n_A_ActiveSkill==275)
		return Math.floor(wBC4 * (100 - n_B[14]) /100) - n_B_DEF2[wBC4_2] + wBC4_3;
	if(n_A_ActiveSkill==432)
		return wBC4 + wBC4_3;
	//custom TalonRO fix ignore effects on left/offhand like Ice Pick or Weeder Knife
	if(n_tok[180+n_B[2]] >= 1 && IgnoreEffectOnLeftHand == 0)
	//original
	//if(n_tok[180+n_B[2]] >= 1)
		return wBC4 + wBC4_3;
	if(n_tok[22] >= 1 && n_B[19] == 0)
		return wBC4 + wBC4_3;
	if(n_tok[22] >= 10)
		return wBC4 + wBC4_3;
	if(SkillSearch(364))
		return wBC4 + wBC4_3;
	//custom TalonRO fix ignore effects on left/offhand like Ice Pick or Weeder Knife
	if(n_tok[23] == 0 || IgnoreEffectOnLeftHand == 1){
	//original
	//if(n_tok[23] == 0)
		if (debug_dmg_avg) {
			debug_atk+="\n --- (BattleCalc4) atk-def ---";
			debug_atk+="\nb_wBC4:"+wBC4+"\n\tn_B_DEF2[wBC4_2]:"+n_B_DEF2[wBC4_2]+"\n\twBC4_3:"+wBC4_3;
		}
		wBC4 = Math.floor(wBC4 * (100 - n_B[14]) /100) - n_B_DEF2[wBC4_2] + wBC4_3;
		if (debug_dmg_avg)
			debug_atk+="\na_wBC4:"+wBC4;
	}else{
		if (debug_dmg_avg) {
			debug_atk+="\n --- (BattleCalc4) atk-def (Ice Pick mode)---";
			debug_atk+="\nb_wBC4:"+wBC4+"\n\tn_B_DEF2[1]:"+n_B_DEF2[1]+"\n\tn_B[14]:"+n_B[14]+"\n\twBC4_3:"+wBC4_3;
		}
		if(wBC4_2==0){
			wBC4 = Math.floor(wBC4 * (n_B_DEF2[2]+n_B[14])/100) +wBC4_3;
		}else if(wBC4_2==1){
			wBC4 = Math.floor(wBC4 * (n_B_DEF2[1]+n_B[14])/100) +wBC4_3;
		}else{
			wBC4 = Math.floor(wBC4 * (n_B_DEF2[0]+n_B[14])/100) +wBC4_3;
		}
		if (debug_dmg_avg)
			debug_atk+="\na_wBC4:"+wBC4;
	}
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
	if(wCast != 0){
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
	n_Delay[2] = Math.floor(n_Delay[2] * (100 - n_tok[74])) / 100;
	if(n_Delay[2] > wDelay){
		wDelay = n_Delay[2];
		w = 2;
	}
	if(n_Delay[3] > wDelay){
		wDelay = n_Delay[3];
		w = 3;
	}
	if(n_A_ActiveSkill != 0 && n_A_ActiveSkill != 284){
		n_Delay[4] = 0.33; // [Custom TalonRO 2016-06-02 - Added fixed TRO's Minimun Delay for Skills] [Kato]


	}
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

	if(w == 1){
		if(n_A_ActiveSkill == 0){
			if(SkillSearch(187)){
				strSUB2name += "Attack interval (normal)<BR>Attack Interval (Raging Trifecta Blow)<BR>";
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
		if(n_A_ActiveSkill == 188 || n_A_ActiveSkill == 189 || n_A_ActiveSkill == 289){
			strSUB2name += "<Font size=2>Delay (+delay reception combo)</Font><BR>";
			strSUB2 += n_Delay[3] +"~"+ (n_Delay[3] + 0.3) +"s<BR>";
		}else{
			strSUB2name += "<Font size=2>Delay (Forced Motion)</Font><BR>";
			strSUB2 += n_Delay[3] +"s<BR>";
		}
	}
	if(w == 4){
		strSUB2name += "<Font size=2>Delay (Input Limit)</Font><BR>";
		strSUB2 += n_Delay[4] +"s<BR>";
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
		if(n_B_IJYOU[6] && wLAch==0)
			wPDC *= 2;
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
	if(n_B_KYOUKA[7] && n_Enekyori != 2)
		wPDC -= Math.floor(wPDC * 20 * n_B_KYOUKA[7] / 100);
	if(n_B_KYOUKA[8] && n_Enekyori == 2)
		wPDC -= Math.floor(wPDC * 20 * n_B_KYOUKA[8] / 100);

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
	vanilla mode switch
		depends on restrictedItems and restrictedCards arrays in etc.js
		works by regenerating all equippable item and card option fields
*/
function Vanilla(){
	ClearCards();
	PopulateCards();
	WeaponSet();
	if(n_Nitou){
		PopulateCardsLeft();
		WeaponSetLeft();
	}
	WeaponSet2();
	StAllCalc();
}