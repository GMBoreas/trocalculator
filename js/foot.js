myInnerHtml("PR1","",0);
myInnerHtml("DELHTML",' <Font size=2><A Href="del.html">[delete saved data]</A></Font>',0);

for(var i=1;i<=99;i++){
with(document.calcForm){
	A_BaseLV.options[i-1] = new Option(i,i);
	A_STR.options[i-1] = new Option(i,i);
	A_AGI.options[i-1] = new Option(i,i);
	A_VIT.options[i-1] = new Option(i,i);
	A_INT.options[i-1] = new Option(i,i);
	A_DEX.options[i-1] = new Option(i,i);
	A_LUK.options[i-1] = new Option(i,i);
}}

function StCalc(nSC)
{with(document.calcForm){

	n_A_STR = eval(A_STR.value);
	n_A_AGI = eval(A_AGI.value);
	n_A_VIT = eval(A_VIT.value);
	n_A_DEX = eval(A_DEX.value);
	n_A_INT = eval(A_INT.value);
	n_A_LUK = eval(A_LUK.value);

	StPoint = 0;
	for(i=2;i<=n_A_STR;i++)
		StPoint += StCalc2(i);
	for(i=2;i<=n_A_AGI;i++)
		StPoint += StCalc2(i);
	for(i=2;i<=n_A_VIT;i++)
		StPoint += StCalc2(i);
	for(i=2;i<=n_A_INT;i++)
		StPoint += StCalc2(i);
	for(i=2;i<=n_A_DEX;i++)
		StPoint += StCalc2(i);
	for(i=2;i<=n_A_LUK;i++)
		StPoint += StCalc2(i);

	n_A_BaseLV = eval(A_BaseLV.value);

	n_A_JobSet();
	if(n_Tensei)
		wStPoint = 100;
	else
		wStPoint = 48;

	if(nSC == 1 || BLVauto.checked == 0){
		for(i=1;i<n_A_BaseLV;i++)
			wStPoint += Math.floor((i) / 5) + 3;
	}
	else{
		for(i=1;StPoint > wStPoint && i<99;i++)
			wStPoint += Math.floor((i) / 5) + 3;
	}
	if(i > 99)i=99;
	A_BaseLV.value = i;
	myInnerHtml("A_STPOINT",wStPoint - StPoint,0);
}}

function StCalc2(nSC2)
{
	return Math.floor((nSC2 - 2) /10) + 2;
}

function SuperNoviceFullWeapon(nSNFW)
{
	if(nSNFW == 1){
		SuperNoviceFullWeaponCHECK = 1;
		JobASPD[20][7] = 120;
	}else{
		SuperNoviceFullWeaponCHECK = 0;
		JobASPD[20][7] = 0;
	}

	var len = document.calcForm.A_WeaponType.length;
	for(i=0;i<len;i++)
		document.calcForm.A_WeaponType.options[0] = null;
	j = 0;
	for (i=0; i<=21; i++){
		if(JobASPD[20][i] != 0){
			document.calcForm.A_WeaponType.options[j] = new Option(WeaponName[i],i);
			j++;
		}
	}

	with(document.calcForm){
		if(ItemOBJ[n_A_Equip[0]][2] != 7 && JobEquipItemSearch(ItemOBJ[n_A_Equip[0]][2])){
			var BK_BUKI = n_A_Equip[0];
			A_WeaponType.value = ItemOBJ[BK_BUKI][1];
			ClickWeaponType(ItemOBJ[BK_BUKI][1]);

			WeaponSet2();
			A_weapon1.value = BK_BUKI;
		}else{
			ClickWeaponType(0);

			WeaponSet2();
		}
		if(JobEquipItemSearch(ItemOBJ[n_A_Equip[2]][2]))
			A_head1.value = n_A_Equip[2];
		if(JobEquipItemSearch(ItemOBJ[n_A_Equip[3]][2]))
			A_head2.value = n_A_Equip[3];
		if(JobEquipItemSearch(ItemOBJ[n_A_Equip[4]][2]))
			A_head3.value = n_A_Equip[4];
		A_left.value = n_A_Equip[5];
		A_body.value = n_A_Equip[6];
		A_shoulder.value = n_A_Equip[7];
		A_shoes.value = n_A_Equip[8];
		A_acces1.value = n_A_Equip[9];
		A_acces2.value = n_A_Equip[10];
	}
}

function BabyJobs(){
with(document.calcForm){
	//Remove rebirth classes when adopted is checked - [Loa] - 2018-06-21
	var adopted = eval(A_youshi.checked);
	if(adopted && A_JOB.options.length > 26){
		var jobJump = 0;
		while(A_JOB.options.length > 26){
			if(A_JOB.selectedIndex == 21){
					jobJump = 1;
			}
			A_JOB.options.remove(21);
		}
		if(jobJump == 1){
			ClickJob(0);
		}
	}
	//Add rebirth classes when adopted unchecked
	else if(!adopted && A_JOB.options.length < 47){
		for(i = 21; i < 41; i++){
			option = document.createElement("option");
			option.value = (i);
			option.text = (JobName[i]);
			A_JOB.add(option,i);
		}
	}
	//Cap stats at 80 when adopted is checked - [Loa] - 2018-06-21
	if(adopted && A_STR.options.length > 79){
		for(i = A_STR.options.length - 1; i > 79; i--){
			A_STR.remove(i);
			A_STR.remove(i);
			A_AGI.remove(i);
			A_VIT.remove(i);
			A_INT.remove(i);
			A_DEX.remove(i);
			A_LUK.remove(i);
		}
	}
	//Raise stat cap to 99 if adopted is unchecked
	else if(!adopted && A_STR.options.length < 100){
		for(i = A_STR.options.length + 1; i < 100; i++){
			A_STR.options[i-1] = new Option(i,i);
			A_AGI.options[i-1] = new Option(i,i);
			A_VIT.options[i-1] = new Option(i,i);
			A_INT.options[i-1] = new Option(i,i);
			A_DEX.options[i-1] = new Option(i,i);
			A_LUK.options[i-1] = new Option(i,i);
		}
	}
}
}

function StAllCalc()
{with(document.calcForm){
	BabyJobs();
	n_A_JobSet();
	if(n_A_JOB == 20){
		if(SuperNoviceFullWeaponCHECK == 0 && eval(A_skill9.value) == 1)
			SuperNoviceFullWeapon(1);
		else if(SuperNoviceFullWeaponCHECK == 1 && eval(A_skill9.value) == 0)
			SuperNoviceFullWeapon(0);
	}
	n_A_BaseLV = eval(A_BaseLV.value);
	n_A_JobLV = eval(A_JobLV.value);

	n_A_STR = eval(A_STR.value);
	n_A_AGI = eval(A_AGI.value);
	n_A_VIT = eval(A_VIT.value);
	n_A_DEX = eval(A_DEX.value);
	n_A_INT = eval(A_INT.value);
	n_A_LUK = eval(A_LUK.value);
	SU_STR = n_A_STR;
	SU_AGI = n_A_AGI;
	SU_VIT = n_A_VIT;
	SU_DEX = n_A_DEX;
	SU_INT = n_A_INT;
	SU_LUK = n_A_LUK;

	n_A_WeaponType = eval(A_WeaponType.value);

	n_A_Arrow = eval(A_Arrow.value);

	n_A_HEAD_DEF_PLUS = ((A_HEAD_DEF_PLUS.value != "") ? eval(A_HEAD_DEF_PLUS.value) : 0); // Changed after index revamp, default value to 0 [Kato]
	n_A_BODY_DEF_PLUS = ((A_BODY_DEF_PLUS.value != "") ? eval(A_BODY_DEF_PLUS.value) : 0); // Changed after index revamp, default value to 0 [Kato]
	n_A_LEFT_DEF_PLUS = ((A_LEFT_DEF_PLUS.value != "") ? eval(A_LEFT_DEF_PLUS.value) : 0); // Changed after index revamp, default value to 0 [Kato]
	n_A_SHOULDER_DEF_PLUS = ((A_SHOULDER_DEF_PLUS.value != "") ? eval(A_SHOULDER_DEF_PLUS.value) : 0); // Changed after index revamp, default value to 0 [Kato]
	n_A_SHOES_DEF_PLUS = ((A_SHOES_DEF_PLUS.value != "") ? eval(A_SHOES_DEF_PLUS.value) : 0); // Changed after index revamp, default value to 0 [Kato]
	n_A_DEFplus = n_A_HEAD_DEF_PLUS + n_A_BODY_DEF_PLUS + n_A_LEFT_DEF_PLUS + n_A_SHOULDER_DEF_PLUS + n_A_SHOES_DEF_PLUS;

	n_A_ActiveSkill = eval(A_ActiveSkill.value);
	if(n_A_ActiveSkill >= 3000)
		n_A_ActiveSkill = InsertSkill[n_A_ActiveSkill -3000][2];
	else if(n_A_ActiveSkill >= 2000)
		n_A_ActiveSkill = AutoSpellSkill[n_A_ActiveSkill -2000][2];

	n_A_ActiveSkillLV = eval(A_ActiveSkillLV.value);
	n_A_SpeedPOT = eval(A_SpeedPOT.value);

	n_A_Equip[0] = eval(A_weapon1.value);
	n_A_Equip[1] = 0;
	if(n_Nitou)
		n_A_Equip[1] = eval(A_weapon2.value);
	n_A_Equip[2] = eval(A_head1.value);
	n_A_Equip[3] = eval(A_head2.value);
	n_A_Equip[4] = eval(A_head3.value);
	n_A_Equip[5] = eval(A_left.value);
	n_A_Equip[6] = eval(A_body.value);
	n_A_Equip[7] = eval(A_shoulder.value);
	n_A_Equip[8] = eval(A_shoes.value);
	n_A_Equip[9] = eval(A_acces1.value);
	n_A_Equip[10] = eval(A_acces2.value);

	SetEquip();

	n_A_WeaponLV = ItemOBJ[n_A_Equip[0]][4];
	n_A_Weapon_ATK = ItemOBJ[n_A_Equip[0]][3];
	n_A_Weapon_ATKplus = ((A_Weapon_ATKplus.value != "") ? eval(A_Weapon_ATKplus.value) : 0); // Changed after index revamp, default value to 0 [Kato]

	W_REF = 0;
	n_A_WeaponLV_seirenATK = 0;
	n_A_WeaponLV_Minplus = 0;
	n_A_WeaponLV_Maxplus = 0;
	if(n_A_WeaponLV == 1){
		n_A_WeaponLV_seirenATK = n_A_Weapon_ATKplus * 2;
		if(n_A_Weapon_ATKplus >= 8){
			n_A_WeaponLV_Minplus = 1;
			n_A_WeaponLV_Maxplus = 3 * (n_A_Weapon_ATKplus - 7);
		}
	}else if(n_A_WeaponLV == 2){
		n_A_WeaponLV_seirenATK = n_A_Weapon_ATKplus * 3;
		if(n_A_Weapon_ATKplus >= 7){
			n_A_WeaponLV_Minplus = 1;
			n_A_WeaponLV_Maxplus = 5 * (n_A_Weapon_ATKplus - 6);
		}
	}else if(n_A_WeaponLV == 3){
		n_A_WeaponLV_seirenATK = n_A_Weapon_ATKplus * 5;
		if(n_A_Weapon_ATKplus >= 6){
			n_A_WeaponLV_Minplus = 1;
			n_A_WeaponLV_Maxplus = 8 * (n_A_Weapon_ATKplus - 5);
		}
	}else if(n_A_WeaponLV == 4){
		n_A_WeaponLV_seirenATK = n_A_Weapon_ATKplus * 7;
		if(n_A_Weapon_ATKplus >= 5){
			n_A_WeaponLV_Minplus = 1;
			n_A_WeaponLV_Maxplus = 14 * (n_A_Weapon_ATKplus - 4);
		}
	}

	n_A_Weapon2_ATKplus = 0;

	//custom TalonRO Kris Enchantment
	Click_KrisEnchantment();

	//[Custom TalonRO 2018-06-14 - Malangdo Enchantment] [Kato]
	tRO_Click_MalangdoEnchantment(n_A_Equip[0],n_A_Equip[1]);

	if(n_Nitou){
		W_REF2 = 0;
		n_A_Weapon2LV = ItemOBJ[n_A_Equip[1]][4];
		n_A_Weapon2_ATK = ItemOBJ[n_A_Equip[1]][3];
		n_A_Weapon2_ATKplus = eval(document.calcForm.A_Weapon2_ATKplus.value);

		n_A_Weapon2LV_seirenATK = 0;
		n_A_Weapon2LV_Minplus = 0;
		n_A_Weapon2LV_Maxplus = 0;
		if(n_A_Weapon2LV == 1){
			n_A_Weapon2LV_seirenATK = n_A_Weapon2_ATKplus * 2;
			if(n_A_Weapon2_ATKplus >= 8){
				n_A_Weapon2LV_Minplus = 1;
				n_A_Weapon2LV_Maxplus = 3 * (n_A_Weapon2_ATKplus - 7);
			}
		}else if(n_A_Weapon2LV == 2){
			n_A_Weapon2LV_seirenATK = n_A_Weapon2_ATKplus * 3;
			if(n_A_Weapon2_ATKplus >= 7){
				n_A_Weapon2LV_Minplus = 1;
				n_A_Weapon2LV_Maxplus = 5 * (n_A_Weapon2_ATKplus - 6);
			}
		}else if(n_A_Weapon2LV == 3){
			n_A_Weapon2LV_seirenATK = n_A_Weapon2_ATKplus * 5;
			if(n_A_Weapon2_ATKplus >= 6){
				n_A_Weapon2LV_Minplus = 1;
				n_A_Weapon2LV_Maxplus = 8 * (n_A_Weapon2_ATKplus - 5);
			}
		}else if(n_A_Weapon2LV == 4){
			n_A_Weapon2LV_seirenATK = n_A_Weapon2_ATKplus * 7;
			if(n_A_Weapon2_ATKplus >= 5){
				n_A_Weapon2LV_Minplus = 1;
				n_A_Weapon2LV_Maxplus = 14 * (n_A_Weapon2_ATKplus - 4);
			}
		}
	}

	n_A_card[0] = eval(A_weapon1_card1.value);
	n_A_card[1] = eval(A_weapon1_card2.value);
	n_A_card[2] = eval(A_weapon1_card3.value);
	n_A_card[3] = eval(A_weapon1_card4.value);
	if(n_Nitou){
		n_A_card[4] = eval(A_weapon2_card1.value);
		n_A_card[5] = eval(A_weapon2_card2.value);
		n_A_card[6] = eval(A_weapon2_card3.value);
		n_A_card[7] = eval(A_weapon2_card4.value);
	}else{
		for(var i=4;i<=7;i++)
			n_A_card[i] = 0;
	}
	n_A_card[8] = eval(A_head1_card.value);
	n_A_card[9] = eval(A_head2_card.value);
	n_A_card[10] = eval(A_left_card.value);
	n_A_card[11] = eval(A_body_card.value);
	n_A_card[12] = eval(A_shoulder_card.value);
	n_A_card[13] = eval(A_shoes_card.value);
	n_A_card[14] = eval(A_acces1_card.value);
	n_A_card[15] = eval(A_acces2_card.value);

	SetCard();

	n_A_Weapon_zokusei = eval(A_Weapon_zokusei.value);
	n_A_Weapon2_zokusei = n_A_Weapon_zokusei;


	if(n_A_Weapon_zokusei == 0){
		for(j=0;ItemOBJ[n_A_Equip[0]][j +11] != 0;j += 2){
			if(20 == ItemOBJ[n_A_Equip[0]][j +11])
				n_A_Weapon_zokusei = ItemOBJ[n_A_Equip[0]][j +12];
		}
		for(j=0;ItemOBJ[n_A_Equip[1]][j +11] != 0;j += 2){
			if(20 == ItemOBJ[n_A_Equip[1]][j +11])
				n_A_Weapon2_zokusei = ItemOBJ[n_A_Equip[1]][j +12];
		}

		if(201 <= cardOBJ[n_A_card[0]][0] && cardOBJ[n_A_card[0]][0] <= 204)
			n_A_Weapon_zokusei = cardOBJ[n_A_card[0]][0] -200;
		if(201 <= cardOBJ[n_A_card[4]][0] && cardOBJ[n_A_card[4]][0] <= 204)
			n_A_Weapon2_zokusei = cardOBJ[n_A_card[4]][0] -200;

		if(n_A_WeaponType==10 || (17 <= n_A_WeaponType && n_A_WeaponType <=21))
			n_A_Weapon_zokusei = ArrowOBJ[n_A_Arrow][1];
	}

	n_A_PassSkill = new Array();
	for(var i=0;JobSkillPassOBJ[n_A_JOB][i] != 999;i++){
		var wOBJ = document.getElementById("A_skill"+i);
		n_A_PassSkill[i] = eval(wOBJ.value);
	}

	if(n_SkillSW){
		n_A_PassSkill2[0] = eval(A2_Skill0.value);
		n_A_PassSkill2[1] = eval(A2_Skill1.value);
		n_A_PassSkill2[2] = eval(A2_Skill2.value);
		n_A_PassSkill2[3] = eval(A2_Skill3.checked);
		n_A_PassSkill2[4] = eval(A2_Skill4.value);
		n_A_PassSkill2[5] = eval(A2_Skill5.checked);
		n_A_PassSkill2[6] = eval(A2_Skill6.value);
		n_A_PassSkill2[7] = eval(A2_Skill7.checked);
		n_A_PassSkill2[8] = eval(A2_Skill8.value);
		n_A_PassSkill2[9] = eval(A2_Skill9.value);
		n_A_PassSkill2[10] = eval(A2_Skill10.value);
		n_A_PassSkill2[11] = eval(A2_Skill11.checked);
		n_A_PassSkill2[12] = eval(A2_Skill12.checked);
		n_A_PassSkill2[13] = eval(A2_Skill13.value);
		n_A_PassSkill2[14] = eval(A2_Skill14.value);
	}

	if(n_Skill3SW){
		n_A_PassSkill3[0] = eval(A3_Skill0_1.value);
		n_A_PassSkill3[1] = eval(A3_Skill1_1.value);
		n_A_PassSkill3[2] = eval(A3_Skill2_1.value);
		n_A_PassSkill3[3] = eval(A3_Skill3_1.value);
		n_A_PassSkill3[4] = eval(A3_Skill4_1.value);
		n_A_PassSkill3[5] = eval(A3_Skill5_1.value);
		n_A_PassSkill3[6] = eval(A3_Skill6_1.value);
		n_A_PassSkill3[7] = eval(A3_Skill7.value);
		n_A_PassSkill3[8] = eval(A3_Skill8.value);
		n_A_PassSkill3[9] = eval(A3_Skill9.value);
		n_A_PassSkill3[10] = eval(A3_Skill10.value);
		n_A_PassSkill3[11] = eval(A3_Skill11.checked);
		if(n_A_PassSkill3[11]){
			n_A_PassSkill3[12] = eval(A3_Skill11_STR.value);
			n_A_PassSkill3[13] = eval(A3_Skill11_AGI.value);
			n_A_PassSkill3[14] = eval(A3_Skill11_VIT.value);
			n_A_PassSkill3[15] = eval(A3_Skill11_INT.value);
			n_A_PassSkill3[16] = eval(A3_Skill11_DEX.value);
			n_A_PassSkill3[17] = eval(A3_Skill11_LUK.value);
			n_A_PassSkill3[18] = eval(A3_Skill11a.checked);
		}

		if(n_A_PassSkill3[0]){
			n_A_PassSkill3[20] = eval(A3_Skill0_2.value);
			n_A_PassSkill3[30] = eval(A3_Skill0_3.value);
		}
		if(n_A_PassSkill3[1]){
			n_A_PassSkill3[21] = eval(A3_Skill1_2.value);
			n_A_PassSkill3[31] = eval(A3_Skill1_3.value);
		}
		if(n_A_PassSkill3[2]){
			n_A_PassSkill3[22] = eval(A3_Skill2_2.value);
			n_A_PassSkill3[29] = eval(A3_Skill2_3.value);
			n_A_PassSkill3[32] = eval(A3_Skill2_4.value);
			n_A_PassSkill3[45] = eval(A3_Skill2_5.checked);
		}
		if(n_A_PassSkill3[3]){
			n_A_PassSkill3[23] = eval(A3_Skill3_2.value);
			n_A_PassSkill3[33] = eval(A3_Skill3_3.value);
		}
		if(n_A_PassSkill3[4]){
			n_A_PassSkill3[24] = eval(A3_Skill4_2.value);
			n_A_PassSkill3[34] = eval(A3_Skill4_3.value);
		}
		if(n_A_PassSkill3[5]){
			n_A_PassSkill3[25] = eval(A3_Skill5_2.value);
			n_A_PassSkill3[35] = eval(A3_Skill5_3.value);
		}
		if(n_A_PassSkill3[6]){
			n_A_PassSkill3[26] = eval(A3_Skill6_2.value);
			n_A_PassSkill3[36] = eval(A3_Skill6_3.value);
		}

	}
	if(n_Skill4SW){
		n_A_PassSkill3[40] = eval(A3_Skill40.checked);
		n_A_PassSkill3[41] = eval(A3_Skill41.value);
		n_A_PassSkill3[42] = eval(A3_Skill42.value);
		n_A_PassSkill3[43] = eval(A3_Skill43.value);
		n_A_PassSkill3[44] = eval(A3_Skill44.value);
	}
	if(n_Skill5SW){
		n_A_PassSkill5[0] = eval(A5_Skill0.checked);
		n_A_PassSkill5[1] = eval(A5_Skill1.checked);
		n_A_PassSkill5[2] = eval(A5_Skill2.checked);
		n_A_PassSkill5[3] = eval(A5_Skill3.checked);
		n_A_PassSkill5[4] = eval(A5_Skill4.checked);
		n_A_PassSkill5[5] = eval(A5_Skill5.checked);
	}
	if(n_Skill6SW){
		n_A_PassSkill6[0] = eval(A6_Skill0.value);
		n_A_PassSkill6[1] = eval(A6_Skill1.value);
		n_A_PassSkill6[2] = eval(A6_Skill2.value);
		n_A_PassSkill6[3] = eval(A6_Skill3.value);
		n_A_PassSkill6[4] = eval(A6_Skill4.value);
		n_A_PassSkill6[5] = eval(A6_Skill5.value);
		n_A_PassSkill6[6] = eval(A6_Skill6.checked);
	}
	if(n_Skill7SW){

		n_A_PassSkill7[0] = eval(A7_Skill0.checked);
		n_A_PassSkill7[1] = eval(A7_Skill1.checked);
		n_A_PassSkill7[2] = eval(A7_Skill2.checked);
		n_A_PassSkill7[3] = eval(A7_Skill3.value);
		n_A_PassSkill7[4] = eval(A7_Skill4.value);
		n_A_PassSkill7[5] = eval(A7_Skill5.value);
		n_A_PassSkill7[6] = eval(A7_Skill6.value);
		n_A_PassSkill7[7] = eval(A7_Skill7.value);
		n_A_PassSkill7[8] = eval(A7_Skill8.value);
		n_A_PassSkill7[9] = eval(A7_Skill9.checked);
		n_A_PassSkill7[10] = eval(A7_Skill10.checked);
		n_A_PassSkill7[11] = eval(A7_Skill11.checked);
		n_A_PassSkill7[12] = eval(A7_Skill12.checked);
		n_A_PassSkill7[13] = eval(A7_Skill13.checked);
		n_A_PassSkill7[14] = eval(A7_Skill14.checked);
		n_A_PassSkill7[15] = eval(A7_Skill15.checked);
	}
	if(n_Skill8SW){
		n_A_PassSkill8[0] = eval(A8_Skill0.value);
		n_A_PassSkill8[1] = eval(A8_Skill1.value);
		n_A_PassSkill8[2] = eval(A8_Skill2.checked);
		n_A_PassSkill8[3] = eval(A8_Skill3.value);
		n_A_PassSkill8[4] = eval(A8_Skill4.checked);
		n_A_PassSkill8[5] = eval(A8_Skill5.value);
		n_A_PassSkill8[6] = eval(A8_Skill6.value);
		n_A_PassSkill8[7] = eval(A8_Skill7.value);
		n_A_PassSkill8[8] = eval(A8_Skill8.value);
		n_A_PassSkill8[9] = eval(A8_Skill9.value);
		n_A_PassSkill8[10] = eval(A8_Skill10.value);
		n_A_PassSkill8[11] = eval(A8_Skill11.value);
		n_A_PassSkill8[12] = eval(A8_Skill12.value);

		n_A_PassSkill8[14] = eval(A8_Skill14.value);
		n_A_PassSkill8[15] = eval(A8_Skill15.value);
		n_A_PassSkill8[16] = eval(A8_Skill16.checked);
		n_A_PassSkill8[17] = eval(A8_Skill17.checked);
		n_A_PassSkill8[18] = eval(A8_Skill18.checked);
		n_A_PassSkill8[19] = eval(A8_Skill19.checked);
		n_A_PassSkill8[20] = eval(A8_Skill20.checked);
		n_A_PassSkill8[21] = eval(A8_Skill21.checked);
		n_A_PassSkill8[22] = eval(A8_Skill22.checked);
		n_A_PassSkill8[23] = eval(A8_Skill23.checked);
		n_A_PassSkill8[24] = eval(A8_Skill24.checked);
		n_A_PassSkill8[25] = eval(A8_Skill25.checked);
		n_A_PassSkill8[26] = eval(A8_Skill26.checked);
		n_A_PassSkill8[27] = eval(A8_Skill27.checked);
		n_A_PassSkill8[28] = eval(A8_Skill28.checked);
		n_A_PassSkill8[29] = eval(A8_Skill29.checked);
		n_A_PassSkill8[30] = eval(A8_Skill30.checked);
		n_A_PassSkill8[31] = eval(A8_Skill31.checked);
		n_A_PassSkill8[32] = eval(A8_Skill32.checked);
		n_A_IJYOU[0] = eval(A_IJYOU0.value);
		n_A_IJYOU[1] = eval(A_IJYOU1.value);
		n_A_IJYOU[2] = eval(A_IJYOU2.checked);
		n_A_IJYOU[3] = eval(A_IJYOU3.checked);
	}
	//custom TalonRO SQI
	if(n_SQI_Bonus_SW){
		SQI_Bonus_Effect[0] = eval(SQI_Bonus_1.value);
		SQI_Bonus_Effect[1] = eval(SQI_Bonus_2.value);
		SQI_Bonus_Effect[2] = eval(SQI_Bonus_3.value);
		SQI_Bonus_Effect[3] = eval(SQI_Bonus_4.value);
	}
	//custom TalonRO - Skill9SW deactivated
	if(n_Skill9SW){
		n_A_PassSkill9[0] = eval(A9_Skill0.value);
		n_A_PassSkill9[1] = eval(ARG_RC0.value);
		n_A_PassSkill9[2] = eval(A9_Skill1.value);
		n_A_PassSkill9[3] = eval(ARG_RC1.value);
		n_A_PassSkill9[4] = eval(A9_Skill2.value);
		n_A_PassSkill9[5] = eval(ARG_RC2.value);
		n_A_PassSkill9[6] = eval(A9_Skill3.value);
		n_A_PassSkill9[7] = eval(ARG_RC3.value);
		n_A_PassSkill9[8] = eval(A9_Skill4.value);
		n_A_PassSkill9[9] = eval(ARG_RC4.value);
		n_A_PassSkill9[10] = eval(A9_Skill5.value);
		n_A_PassSkill9[11] = eval(ARG_RC5.value);
		n_A_PassSkill9[12] = eval(A9_Skill6.value);
		n_A_PassSkill9[13] = eval(ARG_RC6.value);
		n_A_PassSkill9[14] = eval(A9_Skill7.value);
		n_A_PassSkill9[15] = eval(ARG_RC7.value);
		n_A_PassSkill9[16] = eval(A9_Skill8.value);
		n_A_PassSkill9[17] = eval(ARG_RC8.value);
		n_A_PassSkill9[18] = eval(A9_Skill9.value);
		n_A_PassSkill9[19] = eval(ARG_RC9.value);
		n_A_PassSkill9[20] = eval(A9_Skill10.value);
		n_A_PassSkill9[21] = eval(ARG_RC10.value);
		n_A_PassSkill9[22] = eval(A9_Skill11.value);
		n_A_PassSkill9[23] = eval(ARG_RC11.value);
		n_A_PassSkill9[24] = eval(A9_Skill12.value);
		n_A_PassSkill9[25] = eval(ARG_RC12.value);
		n_A_PassSkill9[26] = eval(A9_Skill13.value);
		n_A_PassSkill9[27] = eval(ARG_RC13.value);
		n_A_PassSkill9[28] = eval(A9_Skill14.value);
		n_A_PassSkill9[29] = eval(ARG_RC14.value);
		n_A_PassSkill9[30] = eval(ARG_RC15.value);
		n_A_PassSkill9[31] = eval(ARG_RC16.value);
		n_A_PassSkill9[32] = eval(ARG_RC17.value);
		n_A_PassSkill9[33] = eval(ARG_RC18.value);
		n_A_PassSkill9[34] = eval(ARG_RC19.value);
		n_A_PassSkill9[35] = eval(ARG_RC20.value);
		n_A_PassSkill9[36] = eval(ARG_RC21.value);
		n_A_PassSkill9[37] = eval(ARG_RC22.value);
		n_A_PassSkill9[38] = eval(ARG_RC23.value);
		n_A_PassSkill9[39] = eval(ARG_RC24.value);
		n_A_PassSkill9[40] = eval(ARG_RC25.value);
		n_A_PassSkill9[41] = eval(ARG_RC26.value);
		n_A_PassSkill9[42] = eval(ARG_RC27.value);
		n_A_PassSkill9[43] = eval(ARG_RC28.value);
		n_A_PassSkill9[44] = eval(ARG_RC29.value);
		n_A_PassSkill9[45] = eval(ARG_RC30.value);
		n_A_PassSkill9[46] = eval(ARG_RC31.value);
		n_A_PassSkill9[47] = eval(ARG_RC32.value);
		n_A_PassSkill9[48] = eval(ARG_RC33.value);
		n_A_PassSkill9[49] = eval(ARG_RC34.value);
		n_A_PassSkill9[50] = eval(ARG_RC35.value);
		n_A_PassSkill9[51] = eval(ARG_RC36.value);
		n_A_PassSkill9[52] = eval(ARG_RC37.value);
	}

	for(i=0;i<=22;i++)
		n_B[i] = MonsterOBJ[B_Enemy.value][i];

	n_A_BodyZokusei = StPlusCard(198);
	if(n_A_BodyZokusei==0)
		n_A_BodyZokusei = StPlusCalc2(198);
	if((n_A_JOB == 13 || n_A_JOB == 27) && CardNumSearch(456))
		n_A_BodyZokusei = 6;
	if(n_A_PassSkill6[6])
		n_A_BodyZokusei = 6;

	for(var i=0;i<=6;i++)
		n_Delay[i] = 0;

	for(i=1;i<=200;i++){
		n_tok[i] = 0;
		n_tok[i] += StPlusCalc2(i);
		n_tok[i] += StPlusCard(i);
	}
	for(i=290;i<=349;i++){
		n_tok[i] = 0;
		n_tok[i] += StPlusCalc2(i);
		n_tok[i] += StPlusCard(i);
	}
	StPlusCalc();

	if(n_A_WeaponType != 10 && n_A_WeaponType !=14 && n_A_WeaponType !=15 && n_A_WeaponType !=17 && n_A_WeaponType !=18 && n_A_WeaponType !=19 && n_A_WeaponType !=20 && n_A_WeaponType !=21){
		n_A_ATK_w = Math.round(Math.floor(n_A_STR/10) * Math.floor(n_A_STR/10));
		n_A_ATK   = n_A_STR + n_A_ATK_w + Math.floor(n_A_DEX / 5) + Math.floor(n_A_LUK / 5);
	}else{
		n_A_ATK_w = Math.round(Math.floor(n_A_DEX/10) * Math.floor(n_A_DEX/10));
		n_A_ATK   = n_A_DEX + n_A_ATK_w + Math.floor(n_A_STR / 5) + Math.floor(n_A_LUK / 5);
	}
	//Galaxy Circlet - [Loa] - 2018-07-03
	if(EquipNumSearch(1163)){
		n_tok[13] += n_A_HEAD_DEF_PLUS * 10;
		n_tok[14] += n_A_HEAD_DEF_PLUS * 10;
		n_tok[61] += Math.floor(n_A_HEAD_DEF_PLUS/2);
		n_tok[62] += Math.floor(n_A_HEAD_DEF_PLUS/2);
		n_tok[63] += Math.floor(n_A_HEAD_DEF_PLUS/2);
	}
	//Jolly Roger Hat -[Loa] - 2018-07-03
	if(EquipNumSearch(1186)){
		if(n_A_HEAD_DEF_PLUS > 7){
			n_tok[41] += 3;
		}
		if(n_A_HEAD_DEF_PLUS > 8){
			n_tok[61] += 3;
		}
	}
	//White King Tiger Doll Hat - [Loa] - 2018-07-03
	if(EquipNumSearch(1214)){
		n_tok[32] += n_A_HEAD_DEF_PLUS;
	}
	//Jade Rabbit Hat -[Loa] - 2017-07-03
	if(EquipNumSearch(1218) && n_A_HEAD_DEF_PLUS > 4){
		n_tok[17] += n_A_HEAD_DEF_PLUS - 4;
		n_tok[89] += n_A_HEAD_DEF_PLUS - 4;
	}
	//Sakura Coronet + Romantic Flower - [Loa] - 2018-07-04
	if(EquipNumSearch(1236) && n_A_HEAD_DEF_PLUS > 7){
		n_tok[16] += n_A_HEAD_DEF_PLUS;
	}
	//Sakura Coronet + White Petal - [Loa] - 2018-07-04
	if(EquipNumSearch(1237) && n_A_HEAD_DEF_PLUS > 5){
		n_tok[73] -= Math.floor(n_A_HEAD_DEF_PLUS / 2);
	}
	//Sakura Coronet + Romantic Leaf - [Loa] - 2018-07-04
	if(EquipNumSearch(1238) && n_A_HEAD_DEF_PLUS > 3){
		n_tok[14] += n_A_HEAD_DEF_PLUS * 5;
	}
	//White Feather - [Loa] - 2018-07-04
	if(EquipNumSearch(1255) && n_A_HEAD_DEF_PLUS >= 5){
		n_tok[8] -= 10;
		n_tok[15] += 10;
		if(n_A_HEAD_DEF_PLUS >= 7){
			n_tok[8] -= 3;
			n_tok[15] += 3;
			if(n_A_HEAD_DEF_PLUS >= 9){
				n_tok[8] -= 3;
				n_tok[15] += 3;
			}
		}
	}
	//White Feather + Pipe - [Loa] - 2018-07-04
	if(EquipNumSearch(1257) && n_A_HEAD_DEF_PLUS >= 7){
		n_tok[8] += 1;
		n_tok[15] += 2;
		if(n_A_HEAD_DEF_PLUS >= 9){
			n_tok[8] += 1;
			n_tok[15] += 2;
		}
	}
	w=n_tok[17];

	if(SU_STR >= 80 && CardNumSearch(267))
		w += 20;
	if(SU_STR >= 95 && EquipNumSearch(621))
		w += 340;
	if(SU_STR >= 44 && EquipNumSearch(625))
		w += 44;
	if(SU_AGI >= 90 && EquipNumSearch(442))
		w += 10 * EquipNumSearch(442);
	if(SU_STR >= 95 && EquipNumSearch(1160))
		w += 20;
	if(SU_LUK >= 90 && EquipNumSearch(1164))
		w += 20;
	if(CardNumSearch(492))
		w += Math.floor(n_A_JobLV /5) * CardNumSearch(492); //custom TalonRO Ifrit Card +1atk every 5 Joblv
		//w += Math.floor(n_A_JobLV /10) * CardNumSearch(492); //original Ifrit Card +1atk every 10 Joblv

	//[Custom TalonRO 2018-06-25 - Malangdo Enchantment for Fighting Spirit - ATK] [NattWara]
	// Actual damage part.
		for(i=0; i < tRO_MalangdoEnchantment.length; i++) {
			var vME = tRO_MalangdoEnchantment[i];
			if(vME >= 1781 && vME <= 1788) {
					w += (4 + (2 * (parseInt(vME.substr(-1)) - 1)));
			}
		}
		
	//Custom TalonRO - 2018-06-07 - Enhanced Hat of the Sun God [1] - ATK part [Nattwara]
	/*
	[Refine Rate 5+]
	ATK + 4, MATK + 1%
	[Refine Rate 6+]
	ATK + 4, MATK + 1%
	[Refine Rate 7+]
	ATK + 6, MATK + 1%
	[Refine Rate 8+]
	ATK + 6, MATK + 2%
	*/
	if(EquipNumSearch(1654)){
		if(n_A_HEAD_DEF_PLUS>4)
			w += 4;

		if(n_A_HEAD_DEF_PLUS>5)
			w += 4;

		if(n_A_HEAD_DEF_PLUS>6)
			w += 6;

		if(n_A_HEAD_DEF_PLUS>7)
			w += 6;
	}

	if(EquipNumSearch(1120) && n_A_JobSearch()==4)
		w += 10;
	if(EquipNumSearch(1165))
		w += 10 * SkillSearch(311);
	if(n_A_PassSkill6[0] == 0 && n_A_PassSkill6[1] >= 1 && n_A_BodyZokusei==3)
		w += n_A_PassSkill6[1] * 10;

	if(n_A_PassSkill7[2])
		w += 10;
	if(n_A_PassSkill7[9])
		w += 20;
	if(n_A_PassSkill8[19])
		w += 5;

	if(SkillSearch(420))
		w += 100;
	if(SkillSearch(433)){
		if(n_A_WeaponType==20 || n_A_WeaponType==0)
			w += 20 + 10 * SkillSearch(433);
	}

	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1274)){
		w += 15;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1275)){
		w += 15;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1276)){
		w += 15;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1291)){
		w += 5;}
	if(n_A_HEAD_DEF_PLUS == 10 && EquipNumSearch(1290)){
		w += 5;}


	//custom TalonRO Imperial Spear: ATK +2 each 2 refine levels
	if(EquipNumSearch(1460))
		w += 2*Math.floor(n_A_Weapon_ATKplus/2)
	//custom TalonRO Imperial Spear: ATK +2 each Spear Mastery level
	if(SkillSearch(69) && EquipNumSearch(1460))
		w += 2*SkillSearch(69);
	//custom TalonRO Gold Scaraba Card
	if(CardNumSearch(528))
		w += Math.floor(n_A_JobLV /5) * CardNumSearch(528);
	//custom TalonRO Halloween Midas Whisper
	if(SU_STR >= 80 && EquipNumSearch(1526)){
		w += 30;
	}

	//ATK% stuff
	n_A_ATK += w;
	w= 0;

	if(n_A_Equip[9] == 978 || n_A_Equip[9] == 979 || n_A_Equip[9] == 980 || n_A_Equip[9] == 981 || n_A_Equip[9] == 982 || n_A_Equip[9] == 983 || n_A_Equip[9] == 984){
		w += n_A_ATK*.05;}
	if(n_A_Equip[10] == 978 || n_A_Equip[10] == 979 || n_A_Equip[10] == 980 || n_A_Equip[10] == 981 || n_A_Equip[10] == 982 || n_A_Equip[10] == 983 || n_A_Equip[10] == 984){
		w += n_A_ATK*.05;}
	if(EquipNumSearch(1312)){
		w += n_A_ATK*.05;}

	//custom TalonRO Chewing Bubblegum +1% atk
	if(EquipNumSearch(1395))
		w += n_A_ATK*.01;
	//custom TalonRO Choco Stick In Mouth -1% atk
	if(EquipNumSearch(1438))
		w -= n_A_ATK*.01;
	//custom TalonRO Rainbow Poring Hat +1% atk
	if(EquipNumSearch(1447))
		if(n_A_HEAD_DEF_PLUS>=7)
			w += n_A_ATK*.01;
	//custom TalonRO Angeling Fur Hat +1% atk
	if(EquipNumSearch(1469))
		w += n_A_ATK*.01;
	//Yellow/Green/Pink Sheila Hairnet [Refine Rate 9+] Increase ATK by 2% [Refine Rate 10] Increase ATK by 2% - [Loa] - 2016-06-29
	if(EquipNumSearch(1022) || EquipNumSearch(1026) || EquipNumSearch(1073)){
		if(n_A_HEAD_DEF_PLUS >= 9){
			w += n_A_ATK*.02;
		}
		if(n_A_HEAD_DEF_PLUS == 10){
			w += n_A_ATK*.02;
		}
	}

	w = Math.round(w);

	n_A_ATK += w;

	wImp = n_A_PassSkill2[2] *5;

	if(n_A_PassSkill3[9])
		wImp += 25 + 25 * n_A_PassSkill3[9];

	JobHP_A = new Array(0,70,50,40,50,30,40,150,110,75,85,55,90,110,85,90,75,75,75,90,0,150,110,75,85,55,90,110,85,90,75,75,75,90, 0, 0, 0, 0, 0, 0, 0,70,90,75, 75,84);
	JobHP_B = new Array(5, 5, 5, 5, 5, 5, 5,  5,  5, 5, 5, 5, 5,  7, 5,6.5,3, 3, 5, 5,5,  5,  5, 5, 5, 5, 5,  7, 5,6.5,3, 3, 5, 5, 0, 0, 0, 0, 0, 0, 0, 5,6.5, 5, 3, 3.5);


	wHPSL = 0;
	if(n_A_JOB == 43){
		if(n_A_BaseLV >= 70){
			if(n_A_BaseLV <= 79)
				wHPSL = (n_A_BaseLV - 70) *40;
			else if(n_A_BaseLV <= 84)
				wHPSL = (n_A_BaseLV - 80) *50;
			else if(n_A_BaseLV <= 89)
				wHPSL = (n_A_BaseLV - 80) *50 -10;
			else if(n_A_BaseLV <= 92)
				wHPSL = (n_A_BaseLV - 90) *50;
			else if(n_A_BaseLV <= 97)
				wHPSL = (n_A_BaseLV - 90) *50 -10;
			else if(n_A_BaseLV == 98) wHPSL = 375;
			else wHPSL = 4;
		}
	}

	w = 0;
	for(i=2;i<=n_A_BaseLV;i++){
		w += Math.round(JobHP_A[n_A_JOB] * i /100);
	}

	n_A_MaxHP = Math.floor((JobHP_B[n_A_JOB] * n_A_BaseLV) + 35 + w);


	if(n_A_JOB == 44){
		NinHP = new Array(131,137,144,151,159,167,175,184,193,202,212,222,232,243,254,265,277,289,301,316,331,346,364,382,400,420,440,460,482,504,526,548,572,596,620,646,672,698,726,754,784,814,844,876,908,940,975,1010,1100,1140,1180,1220,1260,1300,1340,1385,1430,1475,1520,1565,1615,1665,1715,1765,1815,1880,1935,1990,2045,2100,2160,2200,2280,2340,2400,2460,2520,2580,2640,2705,2770,2835,2900,2965,3030,3100,3170,3240,3310,3380,3455,3530,3605,3680,3760,3840,3920,4000,4080);
		n_A_MaxHP = NinHP[n_A_BaseLV-1];
	}

	if(n_A_JOB == 45 && n_A_BaseLV >= 10){
		GunHP = new Array(202,212,222,232,243,254,265,277,289,301,316,331,346,364,382,400,420,440,460,490,520,550,580,610,650,680,710,740,770,800,830,860,890,920,950,990,1020,1050,1080,1110,1140,1180,1230,1280,1330,1395,1455,1515,1575,1635,1695,1760,1820,1885,1950,2015,2080,2145,2210,2275,2340,2410,2480,2550,2620,2690,2760,2830,2900,2970,3040,3115,3190,3265,3340,3415,3490,3565,3640,3715,3790,3870,3950,4030,4110,4190,4270,4350,4430,4510);
		n_A_MaxHP = GunHP[n_A_BaseLV-10];
	}

	if(n_A_JOB == 20 && n_A_BaseLV == 99)
		n_A_MaxHP += 2000;

	if(n_Tensei)
		n_A_MaxHP = Math.floor(n_A_MaxHP *125 /100);
	if(eval(A_youshi.checked))
		n_A_MaxHP = Math.floor(n_A_MaxHP *70 /100);
	n_A_MaxHP = Math.floor((n_A_MaxHP - wHPSL) * (100 + n_A_VIT) / 100);


	if(n_A_JOB == 41 && n_A_BaseLV >= 70){
		if(n_A_BaseLV <=79)
			n_A_MaxHP = Math.floor((2127 + 10 * (n_A_BaseLV-70)) * (100 + n_A_VIT) / 100);
		else if(n_A_BaseLV <=89)
			n_A_MaxHP = Math.floor((2200 + 50 * (n_A_BaseLV-80)) * (100 + n_A_VIT) / 100);
		else if(n_A_BaseLV <=99){
			n_A_MaxHP = (2700 + 50 * (n_A_BaseLV-90)) * (100 + n_A_VIT) / 100;
			if(SkillSearch(345))
				n_A_MaxHP = n_A_MaxHP * 3;
			n_A_MaxHP = Math.floor(n_A_MaxHP);
		}
	}

	if(n_A_JOB == 42 && n_A_BaseLV >= 70){
		wKenseiHP = [3455,3524,3593,3663,3834,3806,3878,3951,4025,4500];
		if(n_A_BaseLV <=79)
			n_A_MaxHP = Math.floor((2670 + 10 * (n_A_BaseLV-70)) * (100 + n_A_VIT) / 100);
		else if(n_A_BaseLV <=89)
			n_A_MaxHP = Math.floor((3000 + 20 * (n_A_BaseLV-80)) * (100 + n_A_VIT) / 100);
		else if(n_A_BaseLV <=99)
			n_A_MaxHP = Math.floor(wKenseiHP[n_A_BaseLV-90] * (100 + n_A_VIT) / 100);
	}

//[Custom TalonRO 2018-06-02 - Advanced Fin Helm Gives Maximum HP + 6 * Base Level] [Kato]
if(EquipNumSearch(1561)) {
	n_A_MaxHP += 6 * n_A_BaseLV;
}


n_A_MaxHP += SkillSearch(156) * 200;

	w=0;

	w += n_tok[13];
	w += StPlusCalc2(3);
	w += StPlusCalc2(7);

	if(n_A_BODY_DEF_PLUS >= 9 && CardNumSearch(225))
		w += 800;
	if(CardNumSearch(186))
		w -= 40 * n_A_BODY_DEF_PLUS;
	if(EquipNumSearch(836))
		w += n_A_BaseLV *10;
	if(n_A_Equip[8]==536){
		wHPVS = n_A_JobSearch();
		if(wHPVS==3 || wHPVS==4 || wHPVS==5)
			w += 5 * n_A_BaseLV;
	}
	if(n_A_JobSearch()==5)
		w += CardNumSearch(474) * -100;
	if(n_A_JobSearch()==1)
		w += 500 * CardNumSearch(477);
	if(EquipNumSearch(883) && n_A_BaseLV <= 79)
		w += 400 * EquipNumSearch(883);
	if(EquipNumSearch(1116) && n_A_JobSearch()==0)
		w += 60;
	if(EquipNumSearch(986))
		w += 7 * n_A_BaseLV;
	if(n_A_Weapon_ATKplus >= 6 && EquipNumSearch(1168))
		w -= 200;
	//custom TalonRO Chronos fix, +50 HP instead of SP each 2 refine levels
	if(EquipNumSearch(1172))
		w += 50 * Math.floor(n_A_Weapon_ATKplus / 2);
	//custom TalonRO Fancy Phantom Mask, +100 HP instead of SP each refine
	if(EquipNumSearch(1487))
		w += 100 * n_A_HEAD_DEF_PLUS;
	//custom TalonRO Geffenia Water Book, +800 HP if base INT is 99
	if(EquipNumSearch(1520) && SU_INT == 99)
		w += 800;
	//custom TalonRO Kris enchant HP
	var KEbonus = [A_KE11.value,A_KE12.value,A_KE21.value,A_KE22.value];
	for (i=0;i<4;i++){
		var wKE = KEbonus[i];
		if(wKE){
			var w_enchant = wKE % 10;
			if(21 <= wKE && wKE <= 29)
				w += w_enchant*100;
		}
	}

	//tiraya bonnet + 20hp per refine - [Loa] 2018-07-02
	if(EquipNumSearch(1048)){
		w += n_A_HEAD_DEF_PLUS * 20;
	}
	//[Custom TalonRO 2018-06-15 - Malangdo Enchantment for MaxHP] [Kato]
	for(i=0;i<tRO_MalangdoEnchantment.length;i++) {
		var vME = tRO_MalangdoEnchantment[i];
			if(vME >= 131 && vME <= 133) {
					w += parseInt(vME.substr(-1)) * 100;
			}
	}

	n_A_MaxHP += w;

	if(n_A_MaxHP < 1)
		n_A_MaxHP = 1;

	w=0;

	w += n_tok[15];

	if(SU_VIT >= 80 && CardNumSearch(267))
		w += 3;

	if(CardNumSearch(405)){
		if(n_A_JobSearch()==1 || n_A_JobSearch()==2 || n_A_JobSearch()==6)
			w += 5;
	}
	if(n_A_SHOES_DEF_PLUS >= 9 && CardNumSearch(304))
		w += 10;
	if(n_A_SHOES_DEF_PLUS <= 4 && CardNumSearch(407))
		w += 4;
	if(n_A_PassSkill5[1])
		w += 100;
	if(EquipNumSearch(715))
		w -= n_A_SHOES_DEF_PLUS;
	if(n_A_PassSkill3[3])
		w += 5 + n_A_PassSkill3[3] * 2 + n_A_PassSkill3[33] + Math.floor(n_A_PassSkill3[23] /10);

	//Custom TalonRO - 2018-06-07 - Enhanced Corsair [1] - +1% MaxHP for refine 5 to 7 (total +3%), +2% MaxHP if refine 8+ [Nattwara]
	if(EquipNumSearch(1657)){
		if(n_A_HEAD_DEF_PLUS>4)
			w += 1;

		if(n_A_HEAD_DEF_PLUS>5)
			w += 1;

		if(n_A_HEAD_DEF_PLUS>6)
			w += 1;

		if(n_A_HEAD_DEF_PLUS>7)
			w += 2;
	}

	//custom TalonRO SQI Eversong Greaves: [Taekwon] +10% MaxHP; [Taekwon Master] +20% MaxHP (the item itself)
	if(EquipNumSearch(1383))
		//alert(n_A_JOB+","+n_A_JobSearch());
		if(n_A_JOB==41)
			w += 10;
		else if(n_A_JOB==42)
			w += 20;
	//custom TalonRO SQI Bonus Eversong Greaves: [Taekwon] +10% MaxHP; [Taekwon Master] +20% MaxHP (the actual bonus)
	if(EquipNumSearch(1383))
		for(i=0;i<SQI_Bonus_Effect.length;i++)
			if(SQI_Bonus_Effect[i]==73) {
				//alert(n_A_JOB+","+n_A_JobSearch());
				if(n_A_JOB==41)
					w += 10;
				else if(n_A_JOB==42)
					w += 20;
				break;
			}
	//custom TalonRO Lady Tanee Card: +1% HP per 8 base AGI
	if(CardNumSearch(409))
		w += Math.floor(SU_AGI / 8);
	if(SU_VIT >= 80 && EquipNumSearch(1526))
		w += 5;

		//[Custom TalonRO - Deviruchi Headphones (1426) -1% MHP] [Kato]
		if(EquipNumSearch(1426))
			w -= 1;

	n_A_MaxHP = n_A_MaxHP * (100 + w)/100;

	if(n_A_PassSkill6[0] == 1 && n_A_PassSkill6[1] >= 1 && n_A_BodyZokusei==1){
		var dHP = [5,9,12,14,15];
		n_A_MaxHP = n_A_MaxHP * (100 + dHP[n_A_PassSkill6[1]-1]) /100;
	}
	if(SkillSearch(258))
		n_A_MaxHP *= 3;

	n_A_MaxHP = Math.floor(n_A_MaxHP);


	if(n_A_MaxHP>=100){
		if(n_A_MaxHP>=10000)
			myInnerHtml("A_MaxHP"," "+n_A_MaxHP,0);
		else
			myInnerHtml("A_MaxHP",n_A_MaxHP,0);
	}
	else
		myInnerHtml("A_MaxHP"," "+n_A_MaxHP,0);

	JobSP_A = new Array(1,2,2,5,2,6,3,3,4,8,4,9,4,4.7,5,4.7,6,6,7,4,1,3,4,8,4,9,4,4.7,5,4.7,6,6,7,4,0,0,0,0,0,0,0,2,4.7,9,3.75,3.75);


	wSPSL = 0;
	if(n_A_JOB == 43){
		if(n_A_BaseLV >= 70){
			if(n_A_BaseLV < 80)
				wSPSL = (n_A_BaseLV - 70) *4 +5;
			else if(n_A_BaseLV < 90)
				wSPSL = (n_A_BaseLV - 80) *4;
			else if(n_A_BaseLV < 93)
				wSPSL = (n_A_BaseLV - 90) *4;
			else if(n_A_BaseLV < 99)
				wSPSL = (n_A_BaseLV - 90) *4 -10;
			else wSPSL = 1;
		}
	}

	n_A_MaxSP = 10 + n_A_BaseLV * JobSP_A[n_A_JOB] - wSPSL;//tirei math.floor para acertar sp values

	if(n_A_JOB == 44){
		if(n_A_BaseLV <= 20) n_A_MaxSP = 11 + n_A_BaseLV * 3;
		else if(n_A_BaseLV <= 40) n_A_MaxSP = 71 +(n_A_BaseLV-20)*4;
		else if(n_A_BaseLV <= 60) n_A_MaxSP = 151 +(n_A_BaseLV-40)*5;
		else if(n_A_BaseLV <= 80) n_A_MaxSP = 251 +(n_A_BaseLV-60)*6;
		else n_A_MaxSP = 370 +(n_A_BaseLV-80)*8;
	}

	if(n_A_JOB == 45){
		if(n_A_BaseLV <= 25) n_A_MaxSP = 10 + n_A_BaseLV * 3;
		else if(n_A_BaseLV <= 35) n_A_MaxSP = 85 +(n_A_BaseLV-25)*4;
		else if(n_A_BaseLV <= 40) n_A_MaxSP = 126 +(n_A_BaseLV-35)*3;
		else if(n_A_BaseLV <= 50) n_A_MaxSP = 141 +(n_A_BaseLV-40)*4;
		else if(n_A_BaseLV <= 75) n_A_MaxSP = 181 +(n_A_BaseLV-50)*5;
		else if(n_A_BaseLV <= 78) n_A_MaxSP = 306 +(n_A_BaseLV-75)*6;
		else n_A_MaxSP = 330 +(n_A_BaseLV-78)*6;
	}
	if(n_Tensei)
		n_A_MaxSP = Math.floor(n_A_MaxSP * 125 /100);
	if(eval(A_youshi.checked))
		n_A_MaxSP = Math.floor(n_A_MaxSP *70 /100);
	//custom TalonRO Gospel +20 all stats - darf bei % berechnungen nicht mitverwendet werden
	//d.h. auf die sp die man durch die 20 stats bekommt gibts keine % boni wie z.b. GEC shoes +20%
	var n_A_MaxSP_Gospel_Malus = 0;
	var n_A_MaxSP_Bless_Malus = 0;
	var n_A_MaxSP_Malus = 0;
	//n_A_PassSkill2[0]
	if(n_A_PassSkill5[0] || n_A_PassSkill2[0]) {
		if(n_A_PassSkill5[0]) {
			n_A_MaxSP_Malus +=20;
			n_A_MaxSP_Gospel_Malus = n_A_MaxSP * 20 / 100;
		}
		if(n_A_PassSkill2[0]) {
			n_A_MaxSP_Malus += n_A_PassSkill2[0];
			n_A_MaxSP_Bless_Malus = n_A_MaxSP * n_A_PassSkill2[0] / 100;
		}
		n_A_MaxSP = n_A_MaxSP * (100 + n_A_INT-n_A_MaxSP_Malus) / 100;
	} else
		n_A_MaxSP = Math.floor(n_A_MaxSP * (100 + n_A_INT) / 100);
	//alert("MaxSP="+n_A_MaxSP+"\nINT="+n_A_INT);

	if(n_A_JOB == 41 && n_A_BaseLV >= 70){
		if(n_A_BaseLV <=79)
			n_A_MaxSP = Math.floor((150 + 1 * (n_A_BaseLV-70)) * (100 + n_A_INT) / 100);
		else if(n_A_BaseLV <=89)
			n_A_MaxSP = Math.floor((160 + 1 * (n_A_BaseLV-70)) * (100 + n_A_INT) / 100);
		else if(n_A_BaseLV <=99){
			n_A_MaxSP = 190 * (100 + n_A_INT) / 100;
			if(SkillSearch(345))
				n_A_MaxSP = n_A_MaxSP * 3;
			n_A_MaxSP = Math.floor(n_A_MaxSP);
		}
	}

	if(n_A_JOB == 42 && n_A_BaseLV >= 70){
		if(n_A_BaseLV <=79)
			n_A_MaxSP = Math.floor((339 + 2 * (n_A_BaseLV-70)) * (100 + n_A_INT) / 100);
		else if(n_A_BaseLV <=89)
			n_A_MaxSP = Math.floor((386 + 2 * (n_A_BaseLV-80)) * (100 + n_A_INT) / 100);
		else if(n_A_BaseLV <=99)
			n_A_MaxSP = Math.floor((430 + 3 * (n_A_BaseLV-90)) * (100 + n_A_INT) / 100);
	}

	w=0;

	w += n_tok[14];
	//w += StPlusCalc2(4); adds +1 sp for every equip based int - which is wrong
	//w += StPlusCalc2(7); adds +1 sp for every equip based int - which is wrong (7=all stats, so 7,3=all stats +3)
	if(n_A_HEAD_DEF_PLUS >= 9 && n_A_card[8] == 298)
		w += 150;
	if(n_A_HEAD_DEF_PLUS <= 4 && n_A_card[8]==179)
		w += 40;
	if(n_A_card[9]==179)
		w += 40;
	if(n_A_card[16]==179)
		w += 40;
	if(n_A_card[17]==179)
		w += 40;
	if(n_A_card[18]==179)
		w += 40;
	if(n_A_JobSearch()==5)
		w += 100 * CardNumSearch(474);
	if(n_A_JobSearch()==5)
		w += 100 * CardNumSearch(476);

	if(SkillSearch(372))
		w += 30 * SkillSearch(372);
	if(n_A_Equip[8]==536){
		wSPVS = n_A_JobSearch();
		if(wSPVS==1 || wSPVS==2 || wSPVS==6)
			w += 2 * n_A_JobLV;
	}
	if(n_A_Weapon_ATKplus >= 9 && EquipNumSearch(642))
		w += 300;
	if(EquipNumSearch(883) && n_A_BaseLV <= 79)
		w += 200 * EquipNumSearch(883);
	if(EquipNumSearch(1118) && n_A_JobSearch()==3)
		w += 50;
	if(EquipNumSearch(986))
		w += Math.floor(0.5 * n_A_BaseLV);
	if(n_A_Weapon_ATKplus >= 6 && EquipNumSearch(1168))
		w -= 100;
	if(EquipNumSearch(1193))
		w += Math.floor(n_A_BaseLV / 3) + n_A_SHOULDER_DEF_PLUS * 10;
	//custom Talonro Improved Magician Hat: Every refine level adds Maximum SP + 5 - [Loa] - 2018-06-07
	if(EquipNumSearch(1646)){
		w += n_A_HEAD_DEF_PLUS * 5;
	}
	//Red Minstrel Hat [For Every Refine > 5] MDEF + 1, MSP + 10 - [Loa] - 2018-07-03
	if(EquipNumSearch(1139) && n_A_HEAD_DEF_PLUS > 5){
		w += (n_A_HEAD_DEF_PLUS - 5) * 10;
		n_tok[19] += n_A_HEAD_DEF_PLUS - 5;
	}
	//custom TalonRO Kris enchant SP
	var KEbonus = [A_KE11.value,A_KE12.value,A_KE21.value,A_KE22.value];
	for (i=0;i<4;i++){
		var wKE = KEbonus[i];
		if(wKE){
			var w_enchant = wKE % 10;
			if(31 <= wKE && wKE <= 39)
				w += w_enchant*50;
		}
	}
	//[Custom TalonRO 2018-06-15 - Malangdo Enchantment for MaxSP] [Kato]
	for(i=0;i<tRO_MalangdoEnchantment.length;i++) {
		var vME = tRO_MalangdoEnchantment[i];
			if(vME == 141 || vME == 142) {
					w += parseInt(vME.substr(-1)) * 50;
			}
	}
	n_A_MaxSP += w;

	if(n_A_MaxSP < 0)
		n_A_MaxSP = 0;

	w=0;

	w += n_tok[16];
	if(n_A_SHOES_DEF_PLUS >= 9 && CardNumSearch(304))
		w += 10;
	if(n_A_SHOES_DEF_PLUS <= 4 && CardNumSearch(407))
		w += 4;

	if(CardNumSearch(405)){
		if(n_A_JobSearch()==3 || n_A_JobSearch()==4 || n_A_JobSearch()==5)
			w += 5;
	}
	w += SkillSearch(269);

	w += SkillSearch(274) *2;

	if(n_A_PassSkill5[2]){
		w += (100+n_tok[16]);
		n_A_MaxSP_Gospel_Malus *= 2;
		n_A_MaxSP_Bless_Malus *=2;
	}

	if(EquipNumSearch(715))
		w -= n_A_SHOES_DEF_PLUS;
	//custom TalonRO + n_A_MaxSP_Gospel_Malus + n_A_MaxSP_Bless_Malus (not sure if here or after Service for you calculation)
	n_A_MaxSP = Math.floor(n_A_MaxSP * (100 + w)/100) + n_A_MaxSP_Gospel_Malus + n_A_MaxSP_Bless_Malus;

	//custom TalonRO update - Service for you (n_A_PassSkill3[6]) wird erst nach der normalen +% SP dazugerechnet
	//z.b. GEC shoes +20%, Service for you +40%: MaxSP*1,2*1,4, statt MaxSP*1,6
	if(n_A_PassSkill3[6])
		n_A_MaxSP = n_A_MaxSP * (100 + (15 + n_A_PassSkill3[6] + n_A_PassSkill3[36] + Math.floor(n_A_PassSkill3[26] /10)))/100;

	n_A_MaxSP = Math.floor(n_A_MaxSP);
	//end - custom TalonRO update - Service for you

	if(n_A_MaxSP >= 100)
		myInnerHtml("A_MaxSP",n_A_MaxSP,0);
	else
		myInnerHtml("A_MaxSP"," "+n_A_MaxSP,0);



	n_A_DEF = n_tok[18];

	for(i=2;i<=10;i++)
	{
		n_A_DEF += ItemOBJ[n_A_Equip[i]][3];
	}
	if(EquipNumSearch(1026))
		n_A_DEF -= 5;
	if(n_A_LEFT_DEF_PLUS <= 5 && CardNumSearch(222))
		n_A_DEF += 2;
	if(n_A_BODY_DEF_PLUS <= 5 && CardNumSearch(283))
		n_A_DEF += 2;
	if(n_A_Equip[0]==521){
		if(n_A_Weapon_ATKplus <= 5)
			n_A_DEF += 2;
		else if(n_A_Weapon_ATKplus >= 9)
			n_A_DEF += 7;
		else
			n_A_DEF += 5;
	}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1272)){n_A_DEF += 1;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1273)){n_A_DEF += 1;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1274)){n_A_DEF += 1;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1275)){n_A_DEF += 1;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1276)){n_A_DEF += 1;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1280)){n_A_DEF += 1;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1282)){n_A_DEF += 1;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1286)){n_A_DEF += 1;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1287)){n_A_DEF += 1;}
	if(EquipNumSearch(658))
		n_A_DEF += n_A_Weapon_ATKplus;
	if(EquipNumSearch(715))
		n_A_DEF += Math.floor(n_A_SHOES_DEF_PLUS /2);
	if(EquipNumSearch(742) && n_A_JobSearch()==1)
		n_A_DEF += 6;
	if(EquipNumSearch(942))
		n_A_DEF += Math.floor(n_A_Weapon_ATKplus / 2);;
	if(EquipNumSearch(986) && (n_A_JobSearch()==1 || n_A_JobSearch()==2 || n_A_JobSearch()==6))
		n_A_DEF += 3;
	if(EquipNumSearch(987) && (EquipNumSearch(616) || EquipNumSearch(617) || EquipNumSearch(618)))
		n_A_DEF += 2;
	if(EquipNumSearch(1117) && n_A_JobSearch()==1)

		n_A_DEF += 2;

	if(n_A_PassSkill3[9])
		n_A_DEF += 2 + 2 * n_A_PassSkill3[9];

	if(EquipNumSearch(764))
		n_A_DEF -= (n_A_HEAD_DEF_PLUS + n_A_LEFT_DEF_PLUS);
	if(EquipNumSearch(809))
		n_A_DEFplus -= n_A_HEAD_DEF_PLUS;

	//custom Talonro Advanced Safety Ring: Every 30 VIT reduces DEF by 1 - [Loa] - 2016-06-07
	if(EquipNumSearch(1641)){
		n_A_DEF -= EquipNumSearch(1641) * Math.floor(SU_VIT / 30);
	}

	//Custom TalonRO - 2018-06-07 - Enhanced Bone Helm [1] - +1 DEF each refine past +4 until +8 [Nattwara/Loa]
	if(EquipNumSearch(1656) && n_A_HEAD_DEF_PLUS > 4)
		n_A_DEFplus -= Math.min(n_A_HEAD_DEF_PLUS-4,4);

	//custom TalonRO Armor enchant DEF
	var wHSE = eval(A_HSE.value);
	if(wHSE){
		var w_enchant = wHSE % 10;
		if(61 <= wHSE && wHSE <= 69)
			n_A_DEF += w_enchant+1;
	}
	//custom TalonRO Kris enchant DEF
	var KEbonus = [document.calcForm.A_KE11.value,document.calcForm.A_KE12.value,document.calcForm.A_KE21.value,document.calcForm.A_KE22.value];
	for (i=0;i<4;i++){
		var wKE = KEbonus[i];
		if(wKE){
			var w_enchant = wKE % 10;
			if(1 <= wKE && wKE <= 9)
				n_A_DEF += w_enchant+1;
		}
	}

	n_A_totalDEF = n_A_DEF + Math.round(n_A_DEFplus * 7 / 10);

	if(n_tok[24])
		n_A_totalDEF = Math.floor(n_A_totalDEF / n_tok[24]);
	if(n_tok[85])
		n_A_totalDEF -= Math.floor(n_A_totalDEF * n_tok[85] /100);

	if(SkillSearch(256))
			n_A_totalDEF = Math.floor(n_A_totalDEF * (1 - 0.05 * SkillSearch(256)));

	if(n_A_IJYOU[2])
		n_A_totalDEF -= Math.floor(n_A_totalDEF * 25 / 100);

	if(n_A_PassSkill8[12] >= 3)
		n_A_totalDEF -= Math.floor(n_A_totalDEF * (n_A_PassSkill8[12] - 2) * 5 / 100);

	if(SkillSearch(196))
		n_A_totalDEF = 90;

	/*if(n_A_totalDEF >= 100)
		n_A_totalDEF = 99;*/
	//angelus
	for(i=0;i<11;i++){
		if(n_A_PassSkill2[4] == i){P_VIT1 = n_A_VIT*(0.05*i);}
	}
	//auto berserk
	if(SkillSearch(12)){P_VIT2 = parseInt(n_A_VIT*0.55);}
		else{P_VIT2 = 0;}

	//concentration
	/*if(SkillSearch(256)){
		P_VIT3 = n_A_VIT*(0.05*SkillSearch(256)));
	}*/

	//T_VIT =(((n_A_VIT*(n_A_PassSkill2[4]*0.05))*(SkillSearch(12)*0.55));

	//*(0.05*SkillSearch(256)) => parte do concentration
	//T_VIT = (((vit total* (lvl de magni*0.05))*0.55)0.05*lvl de concentration)


	//if(SkillSearch(256)){var P_VIT3 = P_VIT * (1 - 0.05 * SkillSearch(256));}
	//else{P_VIT3 = 0;}
	//treta da concentration, falta ela tirar vit def
	//P_VIT4 = parseInt(n_A_VIT - P_VIT + P_VIT2 - P_VIT3;);

	n_A_DEFVIT = parseInt(n_A_VIT + P_VIT1);

	//aloevera
	if(n_A_PassSkill2[12]){n_A_DEFVIT -= Math.floor(n_A_DEFVIT*0.1);}

	//provoke
	if(n_A_PassSkill6[5]){n_A_DEFVIT -= Math.floor((.05+(.05*n_A_PassSkill6[5]))*n_A_DEFVIT);}

	if(n_A_PassSkill5[5])
		n_A_totalDEF += Math.floor(n_A_totalDEF*.25);

	//berserk
	if(SkillSearch(258)){
		n_A_totalDEF = 0;
		n_A_DEFVIT = 0;}

		//[Grimtooth also reduces Vit Def by 1/2] [Kato]
		if(EquipNumSearch(15)){
			n_A_DEFVIT -= Math.floor(n_A_DEFVIT*.50);
		}
		//[Masamune also reduces Vit Def by 1/3] [Kato]
		if(EquipNumSearch(47)){
			n_A_DEFVIT -= Math.floor(n_A_DEFVIT*.67);
		}
	//[Spike 0/2 also reduces Vit Def by 1/3] [Kato]
		if(EquipNumSearch(420)){
			n_A_DEFVIT -= Math.floor(n_A_DEFVIT*.67);
		}

	myInnerHtml("A_totalDEF",n_A_totalDEF + "+" + n_A_DEFVIT,0);

	n_A_VITDEF = new Array();
	n_A_VITDEF[0] = Math.floor(n_A_VIT * 0.5) + Math.floor(n_A_VIT * 0.3);
	n_A_VITDEF[2] = Math.floor(n_A_VIT * 0.5) + Math.floor(n_A_VIT * n_A_VIT / 150) -1;
	if(n_A_VITDEF[2] > n_A_VITDEF[0]){
		n_A_VITDEF[1] = (n_A_VITDEF[0] + n_A_VITDEF[2]) / 2;
	}
	else{
		n_A_VITDEF[1] = n_A_VITDEF[0];
		n_A_VITDEF[2] = n_A_VITDEF[0];
	}
	if(SkillSearch(12)){
		for(i=0;i<=2;i++)
			n_A_VITDEF[i] = Math.floor(n_A_VITDEF[i] * 0.45);
	}
	else if(n_A_PassSkill6[5]){
			for(i=0;i<=2;i++)
				n_A_VITDEF[i] = Math.floor(n_A_VITDEF[i] * (0.95 - 0.05 * n_A_PassSkill6[5]));
	}
	else{
		if(n_A_PassSkill2[12]){
			for(i=0;i<=2;i++)
				n_A_VITDEF[i] = Math.floor(n_A_VITDEF[i] * 0.9);
		}
	}
	if(n_tok[24]){
		for(i=0;i<=2;i++)
			n_A_VITDEF[i] = Math.floor(n_A_VITDEF[i] / n_tok[24]);
	}
	if(SkillSearch(256)){
		for(i=0;i<=2;i++)
			n_A_VITDEF[i] = Math.floor(n_A_VITDEF[i] * (1 - 0.05 * SkillSearch(256)));
	}
	if(n_A_PassSkill2[4]){
		for(i=0;i<=2;i++)
			n_A_VITDEF[i] = Math.floor(n_A_VITDEF[i] * (1 + 0.05 * n_A_PassSkill2[4]));
	}
	if(TimeItemNumSearch(33))
		for(i=0;i<=2;i++)
			n_A_VITDEF[i] -= Math.floor(n_A_VITDEF[i] * 20 / 100);
	if(n_A_IJYOU[2])
		for(i=0;i<=2;i++)
			n_A_VITDEF[i] -= Math.floor(n_A_VITDEF[i] * 25 / 100);

	if(SkillSearch(258)){
		for(i=0;i<=2;i++)
			n_A_VITDEF[i] = 0;
	}

	if(n_A_PassSkill8[12] >= 3){
		for(i=0;i<=2;i++)
			n_A_VITDEF[i] -= Math.floor(n_A_VITDEF[i] * (n_A_PassSkill8[12] - 2) * 5 / 100);
	}

	n_A_MDEF = n_tok[19];

	if(EquipNumSearch(986) && (n_A_JobSearch()==3 || n_A_JobSearch()==4 || n_A_JobSearch()==5))
		n_A_MDEF += 5;

	if(n_A_JobSearch()==3)
		n_A_MDEF += CardNumSearch(383);
	if(n_A_LEFT_DEF_PLUS >= 9 && CardNumSearch(310))
		n_A_MDEF += 5;
	if(n_A_HEAD_DEF_PLUS <= 5 && n_A_card[8] == 213)
		n_A_MDEF += 5;
	if(n_A_card[9] == 213)
		n_A_MDEF += 5;
	if(n_A_card[16] == 213)
		n_A_MDEF += 5;
	if(n_A_card[17] == 213)
		n_A_MDEF += 5;
	if(n_A_card[18] == 213)
		n_A_MDEF += 5;
	if(n_A_LEFT_DEF_PLUS <= 5 && CardNumSearch(222))
		n_A_MDEF += 3;
	if(n_A_BODY_DEF_PLUS <= 5 && CardNumSearch(283))
		n_A_MDEF += 5;
	if(n_A_SHOES_DEF_PLUS <= 5 && CardNumSearch(381))
		n_A_MDEF += 7;
	if(n_A_SHOULDER_DEF_PLUS <= 5 && CardNumSearch(258))
		n_A_MDEF += 8;
	if(EquipNumSearch(764))
		n_A_MDEF += (n_A_HEAD_DEF_PLUS + n_A_LEFT_DEF_PLUS);

	//Custom TalonRO - 2018-06-07 - Enhanced Helm of Angel [1] - MDEF Part [Nattwara]
	/*
	[Refine Rate 5+]
	AGI + 1, LUK + 1, MDEF + 1
	[Refine Rate 6+]
	AGI + 1, LUK + 1, MDEF + 1
	*/
	if(EquipNumSearch(1655)){
		if(n_A_HEAD_DEF_PLUS>4){
			n_A_MDEF += 1;
		}
		if(n_A_HEAD_DEF_PLUS>5){
			n_A_MDEF += 1;
		}
	}

	if(EquipNumSearch(809))
		n_A_MDEF += n_A_HEAD_DEF_PLUS;
	if(CardNumSearch(199) && n_A_JobSearch()==5)
		n_A_MDEF += 3;
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1277)){n_A_MDEF += 1;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1281)){n_A_MDEF += 7;}

	if(SkillSearch(9)){
		n_A_MDEF += SkillSearch(9);
	}else if(SkillSearch(256)){
		n_A_MDEF += 1;
	}

	//custom TalonRO Armor enchant MDEF
	var wHSE = eval(document.calcForm.A_HSE.value);
	if(wHSE){
		var w_enchant = wHSE % 10;
		if(71 <= wHSE && wHSE <= 79)
			n_A_MDEF += w_enchant+1;
	}
	//custom TalonRO Kris enchant MDEF
	var KEbonus = [document.calcForm.A_KE11.value,document.calcForm.A_KE12.value,document.calcForm.A_KE21.value,document.calcForm.A_KE22.value];
	for (i=0;i<4;i++){
		var wKE = KEbonus[i];
		if(wKE){
			var w_enchant = wKE % 10;
			if(11 <= wKE && wKE <= 19)
				n_A_MDEF += w_enchant+1;
		}
	}

	//custom TalonRO Nightmare Bangungot Boots
	if(EquipNumSearch(1544) || EquipNumSearch(1014)){
		n_A_MDEF += n_A_SHOES_DEF_PLUS;
	}

	//custom TalonRO Alnoldi Card: +5 MDEF if refined above +9
	if(n_A_LEFT_DEF_PLUS >= 9 && CardNumSearch(518))
		n_A_MDEF += 5;

	if(SkillSearch(196))
		n_A_MDEF = 90;

	if((n_A_JOB != 1 && n_A_JOB != 7 && n_A_JOB != 13 && n_A_JOB != 21 && n_A_JOB != 27 && n_A_JOB != 35) && n_A_MDEF >= 99){
		n_A_MDEF = 99;}

	if(SkillSearch(258)){
		myInnerHtml("A_MDEF",0 + "+" + 0 + "<br><b>WOE: </b>" + 0 + "+" + 0,0);
	}else{
		myInnerHtml("A_MDEF",n_A_MDEF + "+" + n_A_INT + "<br><b>WOE: </b>" + n_A_MDEF + "+" + Math.floor((n_A_VIT/2)+n_A_INT),0);}

	n_A_INTMDEF = n_A_INT + Math.floor(n_A_VIT / 2);
	if(TimeItemNumSearch(9))
		n_A_INTMDEF -= Math.floor(n_A_INTMDEF * 20 / 100);

	n_A_HIT = n_A_BaseLV + n_A_DEX;

	n_A_HIT += n_tok[8];

	// //negative hit correction- [Loa] - 2018-06-18
	// if(n_A_HIT < 0){
	// 	n_A_HIT -= n_A_HIT;
	// }

	if(EquipNumSearch(656))
		n_A_HIT -= Math.floor(SU_DEX / 3);
	if(n_A_WeaponType==3 || n_A_WeaponType==2)
		n_A_HIT += CardNumSearch(464) * 5;
	if(n_A_WeaponType==10)
		n_A_HIT += CardNumSearch(465) * 5;
	if(CardNumSearch(492))
		n_A_HIT += Math.floor(n_A_JobLV /5) * CardNumSearch(492); //custom TalonRO Ifrit Card +1hit every 5 Joblv
		//n_A_HIT += Math.floor(n_A_JobLV /10) * CardNumSearch(492); //custom TalonRO Ifrit Card +1hit every 5 Joblv

	//custom TalonRO SQI Bonus Eversong Greaves: [Taekwon] HIT + 25 (the item itself)
	if(EquipNumSearch(1383))
		//alert(n_A_JOB+","+n_A_JobSearch());
		if(n_A_JOB==41)
			n_A_HIT += 25;

	//custom TalonRO SQI Bonus Eversong Greaves: [Taekwon] +40 Hit (the actual bonus)
	if(EquipNumSearch(1383))
		for(i=0;i<SQI_Bonus_Effect.length;i++)
			if(SQI_Bonus_Effect[i]==74) {
				//alert(n_A_JOB+","+n_A_JobSearch());
				if(n_A_JOB==41)
					n_A_HIT += 40;
				break;
			}

	if(SU_STR >= 90 && EquipNumSearch(442))
		n_A_HIT += 10 * EquipNumSearch(442);
	if(SU_STR >= 95 && EquipNumSearch(1167))
		n_A_HIT += 10;
	if(EquipNumSearch(1176) && SkillSearch(81) == 10)
		n_A_HIT += 10;
	if(EquipNumSearch(1005)& EquipNumSearch(442))
		n_A_HIT += (n_A_Weapon_ATKplus/2);

	n_A_HIT += 1 * SkillSearch(39);
	n_A_HIT += 2 * SkillSearch(148);
	n_A_HIT += 3 * SkillSearch(270);

	n_A_HIT += 10 * SkillSearch(256);
	n_A_HIT += 1 * SkillSearch(426);
	if(SkillSearch(421))
		n_A_HIT -= 30;
	if(SkillSearch(422))
		n_A_HIT += 20;
	n_A_HIT += 2 * SkillSearch(425);

	if(EquipNumSearch(654))
		n_A_HIT += Math.floor(SU_AGI / 10);

	/*
		ZoneSoldier - 2018-06-06
		Add 1 HIT for every 2 LUK.
	*/
	if(EquipNumSearch(1627)){
		n_A_HIT += Math.floor(SU_LUK / 2);
	}

	if(n_A_ActiveSkill==324)
		n_A_HIT += 20;

	if(n_A_PassSkill5[4])
		n_A_HIT += 50;

	if(n_A_PassSkill7[0])
		n_A_HIT += 30;
	if(n_A_PassSkill8[18])
		n_A_HIT += 3;
	if(n_A_PassSkill8[20])
		n_A_HIT += 10;
	//custom TalonRO Guarana Candy Hit bonus deactivated
	//if(n_A_PassSkill8[28])
	//	n_A_HIT += 5;

	//BGFOOD DE HIT
	if(n_A_PassSkill8[29]){
		n_A_HIT += 33;}

	if(n_A_PassSkill3[4])
		n_A_HIT += 10 + n_A_PassSkill3[4] * 2 + n_A_PassSkill3[34] + Math.floor(n_A_PassSkill3[24] /10);

	//custom TalonRO Armor enchant HIT
	var wHSE = eval(document.calcForm.A_HSE.value);
	if(wHSE){
		var w_enchant = wHSE % 10;
		if(111 <= wHSE && wHSE <= 119)
			n_A_HIT += w_enchant*4;
	}

	//[Custom TalonRO 2018-06-15 - Malangdo Enchantment for Fighting Spirit/Sharp - HIT] [Kato]
		for(i=0; i < tRO_MalangdoEnchantment.length; i++) {
			var vME = tRO_MalangdoEnchantment[i];
			if(vME >= 1781 && vME <= 1788) { //FS
				if(vME.substr(-1) <= 4)
					n_A_HIT += 1 + parseInt(vME.substr(-1));
				 else
					n_A_HIT += 5;
			}

			if(vME >= 1081 && vME <= 1085) { //Sharp
				n_A_HIT += 1 + parseInt(vME.substr(-1));
			}
		}


	myInnerHtml("A_HIT",n_A_HIT,0);

	n_A_FLEE = n_A_BaseLV + n_A_AGI;

	n_A_FLEE += n_tok[9];

	if(n_A_JobSearch()==2 && CardNumSearch(295))
		n_A_FLEE += 20;
	if(n_A_SHOULDER_DEF_PLUS >= 9 && CardNumSearch(271))
		n_A_FLEE += 20;
	if(n_A_SHOULDER_DEF_PLUS <= 4 && CardNumSearch(401))
		n_A_FLEE += 10;
	if(n_A_SHOULDER_DEF_PLUS >= 9 && CardNumSearch(403))
		n_A_FLEE += 5;
	if(SU_STR >= 90 && EquipNumSearch(442))
		n_A_FLEE += 10 * EquipNumSearch(442);
	if(n_A_PassSkill6[0] == 2 && n_A_PassSkill6[1] >= 1 && n_A_BodyZokusei==4)
		n_A_FLEE += n_A_PassSkill6[1] *3;

	//Bloody Roar FLEE -160 - [Loa] - 2018-06-11
	if(EquipNumSearch(483)){
		// if(n_A_FLEE < 160){
		// 	n_A_FLEE -= n_A_FLEE;
		// }
		// else{
			n_A_FLEE -= 160;
		// }
	}

	if(n_A_JOB==8||n_A_JOB==14||n_A_JOB==22||n_A_JOB==28)
		n_A_FLEE += 4 * SkillSearch(14);
	else
		n_A_FLEE += 3 * SkillSearch(14);

	if(SkillSearch(421))
		n_A_FLEE += 30;
	if(SkillSearch(433)){
		if(n_A_WeaponType==20 || n_A_WeaponType==0)
			n_A_FLEE -= 5 * SkillSearch(433);
	}
	Mikiri = new Array(0,1,3,4,6,7,9,10,12,13,15);
	n_A_FLEE += Mikiri[SkillSearch(191)];


	if(n_A_JOB == 24)
		n_A_FLEE += Math.round(SkillSearch(273) /2);
	if(n_A_PassSkill2[9] && SkillSearch(273)==0)
		n_A_FLEE += Math.round(n_A_PassSkill2[9] /2);


	if(SkillSearch(383))
		n_A_FLEE += 10;


	if(SkillSearch(356))
		n_A_FLEE += Math.floor((n_A_BaseLV + n_A_LUK + n_A_DEX) / 10);

	if(n_A_PassSkill5[4])
		n_A_FLEE += 50;

	if(n_A_PassSkill7[1])
		n_A_FLEE += 30;

	if(n_A_PassSkill8[30]){
		n_A_FLEE += 33;}//BGFOOD DE FLEE

	if(n_A_PassSkill3[0])
		n_A_FLEE += n_A_PassSkill3[0] + Math.floor(n_A_PassSkill3[30] /2) + Math.floor(n_A_PassSkill3[20] /10);

	if(SkillSearch(258))
		n_A_FLEE /= 2;

	if(n_A_PassSkill8[12] >= 3){
		var w = n_A_PassSkill8[12] - 2;
		if(w > 10)
			w = 10;
		n_A_FLEE -= Math.floor(n_A_FLEE * w * 10 / 100);
	}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1276)){
		n_A_FLEE += 10;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1280)){
		n_A_FLEE += 10;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1282)){
		n_A_FLEE += 10;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1283)){
		n_A_FLEE += 10;}
	if(n_A_HEAD_DEF_PLUS >= 9 && EquipNumSearch(1285)){
		w += 5;}

	//custom TalonRO Armor enchant FLEE
	var wHSE = eval(document.calcForm.A_HSE.value);
	if(wHSE){
		var w_enchant = wHSE % 10;
		if(101 <= wHSE && wHSE <= 109)
			n_A_FLEE += w_enchant*2;
	}
	//custom TalonRO Sedora Card (fixed (2015-12-21),(fixed (2016-11-02))
	if(n_A_JobSearch()==2 && CardNumSearch(524))
		n_A_FLEE += 4*CardNumSearch(524);

	myInnerHtml("A_FLEE",n_A_FLEE + "<br><b>WOE: </b>" + Math.floor(n_A_FLEE*.8),0);

	n_A_LUCKY = 1 + n_A_LUK * 0.1;


	n_A_LUCKY += n_tok[11];

	//A Whistle Skill - bugado, falta ver que variavel usar em vez de n_A_PassSkill3[20]
	//if(n_A_PassSkill3[0])
		//n_A_LUCKY += Math.floor(n_A_PassSkill3[0]/2) + Math.floor(n_A_PassSkill3[30]/2) + Math.floor(n_A_PassSkill3[20] /10);

	if(n_A_JobSearch()==2)
		n_A_LUCKY += 5 * CardNumSearch(391);

	if(n_A_JobSearch()==1)
		n_A_LUCKY += 3 * CardNumSearch(354);
	if(n_A_SHOULDER_DEF_PLUS <= 4 && CardNumSearch(401))
		n_A_LUCKY += 1;
	if(n_A_Equip[7]==535){
		var wHPVS = n_A_JobSearch();
		if(wHPVS==3 || wHPVS==4 || wHPVS==5){
			n_A_LUCKY += 5;
			n_A_LUCKY += n_A_SHOULDER_DEF_PLUS * 2;
		}
	}

	if(n_A_JobSearch()==41 && EquipNumSearch(678))
		n_A_LUCKY += 2;

	//custom TalonRO Lady Tanee Card: +1 Perfect Dodge per 8 base LUK
	if(CardNumSearch(409))
		n_A_LUCKY += Math.floor(SU_LUK / 8);
	//custom TalonRO Schwartzwald Pine Jubilee fix: +20 Perfect Dodge instead of +20 Flee
	if(n_A_PassSkill8[20])
		n_A_LUCKY += 20;

	//custom Talonro Improved Kitsune Mask: If refine > 6 Perfect Dodge + 4 - [Loa] - 2016-06-07
	if(EquipNumSearch(1652) && n_A_HEAD_DEF_PLUS > 6){
		n_A_LUCKY += 4;
	}

	//Bloody Roar Perfect Dodge -160 - [Loa] - 2018-06-11
	if(EquipNumSearch(483)){
		if(n_A_LUCKY < 160){
			n_A_LUCKY -= n_A_LUCKY;
		}
		else{
			n_A_LUCKY -= 160;
		}
	}

	n_A_LUCKY = Math.round(n_A_LUCKY *10)/10;

	myInnerHtml("A_LUCKY",n_A_LUCKY,0);

	n_A_CRI = 1 + n_A_LUK * 0.3;
	w=0;
	w += n_tok[10];

	w += n_tok[110+n_B[2]];

	if(CardNumSearch(402))
		w += n_A_SHOULDER_DEF_PLUS;
	if(n_A_JobSearch()==2)
		w += 4 * CardNumSearch(328);
	if(n_A_JobSearch()==3){
		if(n_B[2]==1 || n_B[2]==6)
			w += 9 * CardNumSearch(253);
	}
	if(SU_LUK >= 80 && CardNumSearch(267))
		w += 3;
	if(n_A_WeaponType==3 || n_A_WeaponType==2)
		w += CardNumSearch(464) * 5;
	if(n_A_WeaponType==10)
		w += CardNumSearch(465) * 5;
	if(CardNumSearch(492))
		w += Math.floor(n_A_JobLV /10) * CardNumSearch(492);
	if(n_A_HEAD_DEF_PLUS >= 6 && EquipNumSearch(785))
		w += (n_A_HEAD_DEF_PLUS -5);
	if(EquipNumSearch(640))
		w += Math.floor(SU_LUK / 5);

	//custom TalonRO rental Giant Encyclopedia +1crit each 5luk
	if(EquipNumSearch(1324))
		w += Math.floor(SU_LUK / 5);

	//custom Talonro Improved Bunny Band: If refine > 6 CRIT + 5
	if(EquipNumSearch(1648) && n_A_HEAD_DEF_PLUS > 6){
		w += 5;
	}

	if(EquipNumSearch(689))
		w += Math.floor(SU_LUK / 10);
	if(SU_AGI >= 90 && EquipNumSearch(442))
		w += 10 * EquipNumSearch(442);

	if(n_A_JobSearch()==41 && EquipNumSearch(675))
		w += 5;
	if(EquipNumSearch(623))
		w += n_A_Weapon_ATKplus;
	if(EquipNumSearch(1122) && n_A_JobSearch()==6)
		w += 5;
	if(n_A_Weapon_ATKplus >= 6 && n_B[2]==7 && EquipNumSearch(1091))
		w += 5;
	if(EquipNumSearch(1161))
		w += (2 * SkillSearch(89));
	if(SU_DEX >= 90 && EquipNumSearch(1164))
		w += 5;
	//custom TalonRO fix so crit rate is increased for Sharp Shooting too by Drosera/Sharp Arrow
	if(n_A_WeaponType == 10 && n_A_Arrow == 15)
		w += 20;
	if(n_A_WeaponType==10 || 17<=n_A_WeaponType && n_A_WeaponType<=21)
		w += CardNumSearch(462) * 15;
	//original
	/*if(n_A_ActiveSkill != 272){
		if(n_A_WeaponType == 10 && n_A_Arrow == 15)
			w += 20;
		if(n_A_WeaponType==10 || 17<=n_A_WeaponType && n_A_WeaponType<=21)
			w += CardNumSearch(462) * 15;
	}*/

	if(SkillSearch(195))
		w += 7.5 + SkillSearch(195) * 2.5;
	else if(TimeItemNumSearch(34))
		w += 10;
	if(SkillSearch(253))
			w += 50;
	if(n_A_JOB == 24)
			w += SkillSearch(270);
	if(n_A_PassSkill8[18])
		w += 7;
	if(n_A_PassSkill8[21])
		w += 7;

	//custom TalonRO Armor enchant CRIT
	var wHSE = eval(document.calcForm.A_HSE.value);
	if(wHSE){
		var w_enchant = wHSE % 10;
		if(81 <= wHSE && wHSE <= 89)
			w += w_enchant+1;
	}
	//custom TalonRO Halloween Midas Whisper
	if(SU_LUK >= 80 && EquipNumSearch(1526))
		w += 5;


	//[Custom TalonRO - 2018-06-02 - Aegir shoes + helm combo(CRIT + 1% * refinement for Fish type monsters)] [Kato/Nattwara]
	if(n_B[2] == 5 && EquipNumSearch(1554)){ // Race = 5 (Fish)
		w += n_A_SHOES_DEF_PLUS * EquipNumSearch(1554);
	}

	n_A_CRI += w;

	if(n_A_PassSkill3[5])
		n_A_CRI += 10 + n_A_PassSkill3[5] + Math.floor(n_A_PassSkill3[35] /2) + Math.floor(n_A_PassSkill3[25] /10);

	//custom TalonRO Gryphon Card
	if(CardNumSearch(277)) {n_A_CRI -= Math.floor(SU_STR /11)*2*CardNumSearch(277);}

	if(n_A_WeaponType == 11)
		n_A_CRI *= 2;

	n_A_CRI = Math.round(n_A_CRI * 10) / 10;

	if(n_A_PassSkill8[16])
		n_A_CRI = 0;

		//[Custom TalonRO 2018-06-15 - Malangdo Enchantment for Sharp - CRIT [Kato]
			for(i=0; i < tRO_MalangdoEnchantment.length; i++) {
				var vME = tRO_MalangdoEnchantment[i];
				if(vME >= 1081 && vME <= 1085) {
					if(vME.substr(-1) == 1)
						n_A_CRI += 3;
					 else
						n_A_CRI += 3 + parseInt(vME.substr(-1));
				}
			}

	myInnerHtml("A_CRI",n_A_CRI,0);

	//atk da calc

	C_ATK = 0;
	H_ATK = 0;
	//cartas de armas que dão atk
	//For que verifica cartas de n_A_card[0 a 7] aka cartas nas armas
	for(var i=0;i<=7;i++){
		if(n_A_card[i] == 6){C_ATK += 3;}
		if(n_A_card[i] == 356 || n_A_card[i] == 163 || n_A_card[i] == 259 || n_A_card[i] == 28 || n_A_card[i] == 110 || n_A_card[i] == 39 || n_A_card[i] == 483 || n_A_card[i] == 37 || n_A_card[i] == 35 || n_A_card[i] == 36 || n_A_card[i] == 30 || n_A_card[i] == 33 || n_A_card[i] == 68 || n_A_card[i] == 254 || n_A_card[i] == 29 || n_A_card[i] == 34 || n_A_card[i] ==165 || n_A_card[i] == 181){C_ATK += 5;}
		if(n_A_card[i] == 190 || n_A_card[i] ==65 || n_A_card[i] == 9 || n_A_card[i] == 366 || n_A_card[i] == 38){C_ATK += 10;}
		if(n_A_card[i] == 477 || n_A_card[i] == 380 || n_A_card[i] == 10){C_ATK += 15;}
		if(n_A_card[i] == 11){C_ATK += 20;}
		if(n_A_card[i] == 463){C_ATK += 25;}
		if(n_A_card[i] == 326){C_ATK += 30;}
		if(n_A_card[i] == 498){C_ATK += 25;}

	}

	//não são cartas de armas
	if(CardNumSearch(235) && CardNumSearch(306)){C_ATK += 20;}
	if(SU_STR >= 80 && CardNumSearch(267)){C_ATK += 20;}
	if(CardNumSearch(184)){C_ATK += -25;}
	if(CardNumSearch(183)){C_ATK += 25;}
	if(CardNumSearch(492)){
		C_ATK += Math.floor(n_A_JobLV /5) * CardNumSearch(492);		//custom TalonRO Ifrit Card +1atk every 5 Joblv			works with x cards also
		//C_ATK += (n_A_JobLV/10);									//original Ifrit Card +1atk every 10 Joblv				works with 1 ifrit card only
	}
	if(CardNumSearch(477)){C_ATK += 15;}
	for(var i=8;i<=9;i++){
		if(n_A_card[i] == 510 || n_A_card[i] == 511){C_ATK += 10;}
	}

	//Custom TalonRO - 2018-06-07 - Enhanced Hat of the Sun God [1] - ATK part [Nattwara]
	/*
	[Refine Rate 5+]
	ATK + 4, MATK + 1%
	[Refine Rate 6+]
	ATK + 4, MATK + 1%
	[Refine Rate 7+]
	ATK + 6, MATK + 1%
	[Refine Rate 8+]
	ATK + 6, MATK + 2%
	*/
	if(EquipNumSearch(1654)){
		if(n_A_HEAD_DEF_PLUS>4)
			C_ATK += 4;

		if(n_A_HEAD_DEF_PLUS>5)
			C_ATK += 4;

		if(n_A_HEAD_DEF_PLUS>6)
			C_ATK += 6;

		if(n_A_HEAD_DEF_PLUS>7)
			C_ATK += 6;
	}
	//vesper core 02 [rental] atk display
	if(EquipNumSearch(1359)){
		C_ATK += 5;
	}
	//bloodied shackle ball [rental] atk display
	if(EquipNumSearch(1366)){
		C_ATK += 30;
	}
	if(SU_STR >= 80 && EquipNumSearch(1526)){
		C_ATK += 30;
	}
	if(EquipNumSearch(1120) && n_A_JobSearch()==4)
		C_ATK += 10;
	//custom TalonRO Incanation Samurai Card
	if(CardNumSearch(255)){C_ATK += CardNumSearch(255)*65;}
	//custom TalonRO Bloody Knight Card
	if(CardNumSearch(361)){C_ATK += CardNumSearch(361)*30;}
	//custom TalonRO SQI Sherwood Bow Bonus
	if(EquipNumSearch(1388))
		for(i=0;i<SQI_Bonus_Effect.length;i++)
			if(SQI_Bonus_Effect[i]==130) {
				C_ATK += 75;
				break;
			}
	//custom TalonRO Mysteltainn Card
	if(CardNumSearch(375)){C_ATK += 30;}
	//custom TalonRO Pirate Dagger
	if(EquipNumSearch(1250))
		C_ATK += 5;

	//[Custom TalonRO 2018-06-23 - Krishina and Assassin's Glove combo not working, added here] [Kato]
	if(EquipNumSearch(1518)){
		C_ATK += 25;
	}

	C_ATK += n_A_PassSkill9[40];

	//armas+gears que estão nos effects especiais
	if(SU_STR >= 95 && EquipNumSearch(621)){C_ATK += 340;}

	for(var i=8;i<12;i++){
		if(n_A_PassSkill8[i] == 30 && EquipNumSearch(819)){C_ATK += 50;}
		if(n_A_PassSkill8[i] == 13 && EquipNumSearch(1094)){C_ATK += 200;}
		if(n_A_PassSkill8[i] == 40 && EquipNumSearch(820)){	C_ATK += 50;}
		if(n_A_PassSkill8[i] == 22 && EquipNumSearch(927)){C_ATK += 80;}
		if(n_A_PassSkill8[i] == 36 && EquipNumSearch(928)){C_ATK += 80;}
		if(n_A_PassSkill8[i] == 23 && EquipNumSearch(929)){C_ATK += 300;}
		if(n_A_PassSkill8[i] == 25 && EquipNumSearch(934)){C_ATK += 50;}
		if(n_A_PassSkill8[i] == 41 && EquipNumSearch(892)){C_ATK += 50;}
		if(n_A_PassSkill8[i] == 27 && EquipNumSearch(989)){C_ATK += 20;}
		//custom TalonRO Ancient Horns +100 ATK (ATK field)
		if(n_A_PassSkill8[i] == 50 && EquipNumSearch(1538)){C_ATK += 100;}
	}

	//ATK bonus display portion
	if(EquipNumSearch(953)){C_ATK += ((n_A_JobLV*2)/7);}
	if(EquipNumSearch(666) && EquipNumSearch(721) && EquipNumSearch(701) && EquipNumSearch(722)){C_ATK += 18;}
	if(EquipNumSearch(666)){C_ATK += 3;}
	if(EquipNumSearch(721)){C_ATK += 5 * EquipNumSearch(721);}
	if(EquipNumSearch(806)){C_ATK += 5;}
	if(EquipNumSearch(1651)){C_ATK += 5;}
	if(EquipNumSearch(1654)){C_ATK += 10;}
	if(EquipNumSearch(676)){C_ATK += n_A_HEAD_DEF_PLUS*2;}
	if(EquipNumSearch(323) && EquipNumSearch(725)){C_ATK += 50;}
	if(EquipNumSearch(442) && SU_AGI > 89){C_ATK += 10 * EquipNumSearch(442);}
	if(EquipNumSearch(1165)){C_ATK += 10 * SkillSearch(311);}
	if(EquipNumSearch(1164) && SU_LUK >=90){C_ATK += 20;}
	if(EquipNumSearch(1160) && SU_STR >=95){C_ATK += 20;}
	if(EquipNumSearch(1496)){C_ATK += 10};
	if(A_acces1.value == 728){C_ATK += 15;}
	if(A_acces2.value == 728){C_ATK += 15;}
	if(A_acces1.value == 525){C_ATK += 10;}
	if(A_acces2.value == 525){C_ATK += 10;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1274)){C_ATK += 15;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1275)){C_ATK += 15;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1276)){C_ATK += 15;}
	if(EquipNumSearch(1282)){C_ATK += 15;}
	if(EquipNumSearch(1283)){C_ATK += 5;}
	if(EquipNumSearch(1285)){C_ATK += 7;}
	if(n_A_HEAD_DEF_PLUS == 10 && EquipNumSearch(1290)){C_ATK += 5;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1291)){C_ATK += 5;}
	if(EquipNumSearch(1150)){C_ATK += 15};
	if(EquipNumSearch(1218)){C_ATK += 5};
	//Jade Rabbit Hat -[Loa] - 2017-07-03
	if(EquipNumSearch(1218) && n_A_HEAD_DEF_PLUS > 4){C_ATK += n_A_HEAD_DEF_PLUS - 4;}
	//skils que dão atk[parte 1]
	if (SkillSearch(146)){C_ATK +=3;}
	if(n_A_PassSkill3[9]){C_ATK += 50+(25*(n_A_PassSkill3[9]-1));}
	if(n_A_PassSkill6[0] == 0 && n_A_PassSkill6[1] >= 1 && n_A_BodyZokusei==3){C_ATK += n_A_PassSkill6[1] *10;}

	//[Custom TalonRO 2018-06-15 - Malangdo Enchantment for Fighting Spirit - ATK] [Kato]
	// ATK status part.
		for(i=0; i < tRO_MalangdoEnchantment.length; i++) {
			var vME = tRO_MalangdoEnchantment[i];
			if(vME >= 1781 && vME <= 1788) {
					C_ATK += (4 + (2 * (parseInt(vME.substr(-1)) - 1)));
			}
		}

	//refines das armas
	if(n_A_WeaponLV == 1){W_REF = n_A_Weapon_ATKplus * 2;}
	else if(n_A_WeaponLV == 2){W_REF = n_A_Weapon_ATKplus * 3;}
	else if(n_A_WeaponLV == 3){W_REF = n_A_Weapon_ATKplus * 5;}
	else if(n_A_WeaponLV == 4){W_REF = n_A_Weapon_ATKplus * 7;}
	else{W_REF = 0;}

	if(n_Nitou){
		if(n_A_WeaponLV == 1){W_REF2 = n_A_Weapon2_ATKplus * 2;}
		else if(n_A_WeaponLV == 2){W_REF2 = n_A_Weapon2_ATKplus * 3;}
		else if(n_A_WeaponLV == 3){W_REF2 = n_A_Weapon2_ATKplus * 5;}
		else if(n_A_WeaponLV == 4){W_REF2 = n_A_Weapon2_ATKplus * 7;}
	W_ATKD = n_A_Weapon_ATK + n_A_Weapon2_ATK;}
	else{W_ATKD = n_A_Weapon_ATK;
		 W_REF2 = 0;}

	if(n_A_PassSkill2[2] == 1){I_ATK = 5;}
	else if(n_A_PassSkill2[2] == 2){I_ATK = 10;}
	else if(n_A_PassSkill2[2] == 3){I_ATK = 15;}
	else if(n_A_PassSkill2[2] == 4){I_ATK = 20;}
	else if(n_A_PassSkill2[2] == 5){I_ATK = 25;}
	else{I_ATK = 0;}
	//	if(n_A_WeaponType != 10 && n_A_WeaponType !=14 && n_A_WeaponType !=15 && n_A_WeaponType !=17 && n_A_WeaponType !=18 && n_A_WeaponType !=19 && n_A_WeaponType !=20 && n_A_WeaponType !=21){
	if(n_A_WeaponType == 10 || n_A_WeaponType == 14 || n_A_WeaponType == 15 || n_A_WeaponType == 16 || n_A_WeaponType == 17 || n_A_WeaponType == 18 || n_A_WeaponType == 19 || n_A_WeaponType == 20 || n_A_WeaponType == 21){
		S1_A_ATK = Math.floor(n_A_DEX/10) * Math.floor(n_A_DEX/10);
		S2_A_ATK = n_A_DEX + Math.floor(S1_A_ATK) + Math.floor(n_A_STR/5) + Math.floor(n_A_LUK/5);
		P_ATK = Math.floor(I_ATK + C_ATK + W_ATKD + S2_A_ATK);
	}else{
		S1_A_ATK = Math.floor(n_A_STR/10) * Math.floor(n_A_STR/10);
		S2_A_ATK = n_A_STR + Math.floor(S1_A_ATK) + Math.floor(n_A_DEX/5) + Math.floor(n_A_LUK/5);
		P_ATK = Math.floor(I_ATK + C_ATK + W_ATKD + S2_A_ATK);
	}

	//skills de atk[parte 2]

	if(SkillSearch(256)){
		P_ATK2 = P_ATK+(P_ATK*(0.05*SkillSearch(256)));
		P_ATK = P_ATK2;}
	if(SkillSearch(12)){
		P_ATK2 = P_ATK+(P_ATK*0.32);
		P_ATK = P_ATK2;}

	//items que dão atk
	if(n_A_PassSkill7[9]){P_ATK += 20;}
	if(n_A_PassSkill8[31]){P_ATK += 15;}//BGFOOD DE ATK
	if(n_A_PassSkill6[5]){P_ATK += Math.floor((.02+(.03*n_A_PassSkill6[5]))*P_ATK);}
	if(n_A_PassSkill6[5] && n_A_PassSkill2[12]){P_ATK += 0;}
		else{
			if(n_A_PassSkill2[12]){P_ATK += Math.floor(P_ATK*0.05);}
		}
		//Maiden Hat - ZoneSoldier - 6/6/2018
		//Increase ATK + 1% per upgrade past 6.
	if(n_A_HEAD_DEF_PLUS > 6 && EquipNumSearch(1628)){
		P_ATK += 1 * (n_A_HEAD_DEF_PLUS - 6);
	}

	//custom TalonRO Chewing Bubblegum +1% atk
	if(EquipNumSearch(1395))
		P_ATK += P_ATK*.01;
	//custom TalonRO Choco Stick In Mouth -1% atk
	if(EquipNumSearch(1438))
		P_ATK -= P_ATK*.01;
	//custom TalonRO Rainbow Poring Hat +1% atk
	if(EquipNumSearch(1447))
		if(n_A_HEAD_DEF_PLUS>=7)
			P_ATK += P_ATK*.01;

	//[Custom TalonRO 2018-06-16 - Malangdo Enchantment for ATK%] [Kato]
	for(i=0; i < tRO_MalangdoEnchantment.length; i++) {
		var vME = tRO_MalangdoEnchantment[i];

		if(vME == 171) P_ATK += P_ATK * parseInt(vME.substr(-1))/100;
	}


	if (P_ATK < 0){P_ATK = 0;}

	H_ATK = P_ATK;

	if(n_A_Equip[9] == 978 || n_A_Equip[9] == 979 || n_A_Equip[9] == 980 || n_A_Equip[9] == 981 || n_A_Equip[9] == 982 || n_A_Equip[9] == 983 || n_A_Equip[9] == 984){
		H_ATK += H_ATK*.05;}
	if(n_A_Equip[10] == 978 || n_A_Equip[10] == 979 || n_A_Equip[10] == 980 || n_A_Equip[10] == 981 || n_A_Equip[10] == 982 || n_A_Equip[10] == 983 || n_A_Equip[10] == 984){
		H_ATK += H_ATK*.05;}
	if(EquipNumSearch(1312)){
		H_ATK += H_ATK*.05;}

	if(SkillSearch(342)){
		if (SkillSearch(380) <= 1){H_ATK += 0;}
		else {H_ATK += Math.floor(H_ATK*((2 * SkillSearch(342) * SkillSearch(380))/100));}
	}
	/*if(CardNumSearch(479) && (n_A_JOB==14 || n_A_JOB==28)){
		H_ATK += H_ATK*.1;}*/

	//gospel effect
	if(n_A_PassSkill5[3] == 1){
		H_ATK = 2*H_ATK;
		P_ATK = 2*P_ATK;}

	myInnerHtml("A_ATK2", Math.round(P_ATK) +"+"+ (W_REF+W_REF2) + "<br><b>WOE: </b>" + Math.round(H_ATK) +"+" + (W_REF+W_REF2),0);

	n_A_MATK = [0,0,0];

	var w = Math.floor(n_A_INT / 7);
	n_A_MATK[0] = n_A_INT + w * w;


	w = Math.floor(n_A_INT / 5);
	n_A_MATK[2] = n_A_INT + w * w;

	//MATK% stuff
	w = 100;

	w += n_tok[89];

	if(n_A_Weapon_ATKplus >= 9 && EquipNumSearch(642))
		w += 3;
	if(EquipNumSearch(646))
		w += Math.floor(n_A_Weapon_ATKplus / 2);
	if(EquipNumSearch(737))
		w += n_A_Weapon_ATKplus;
	if(EquipNumSearch(1042))
		w += n_A_Weapon_ATKplus;
	if(EquipNumSearch(1029) && n_A_HEAD_DEF_PLUS >= 6)
		w += n_A_HEAD_DEF_PLUS - 5;
	if(n_A_PassSkill6[2])
		w += 10;
	if(EquipNumSearch(897) && (n_A_JobSearch2() == 14 || n_A_JOB == 44))
		w += 15 * EquipNumSearch(897);
	if(EquipNumSearch(898) && (n_A_JobSearch2() == 14 || n_A_JOB == 44))
		w += 15 * EquipNumSearch(898);
	if(EquipNumSearch(1083))
		w += n_A_Weapon_ATKplus;
	if(n_A_Weapon_ATKplus >= 9 && EquipNumSearch(1084))
		w += 5;
	if(n_A_Weapon_ATKplus >= 9 && EquipNumSearch(1095))
		w += 5;
	if(n_A_JobSearch()==5 && CardNumSearch(454))
		w +=3;
	if(n_A_HEAD_DEF_PLUS >= 9 && n_A_card[8]==177)
		w += 2;
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1284)){
		w += 3;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1286)){
		w += 2;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1287)){
		w += 2;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1292)){
		w += 1;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1293)){
		w += 1;}
	if(EquipNumSearch(1520) && SU_INT == 99)
		w += 1;
	if(n_A_Equip[0]==484 && SU_INT >= 70)
		w += 5;
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1277)){
		w += 2;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1281)){
		w += 8;}
	//sag diadem
	if(n_A_HEAD_DEF_PLUS == 10 && EquipNumSearch(1289)){
		w += 4;}
	//Entweihen Hairband - zonesoldier - 6/2/2018
	//Increase MATK + 1% per upgrade past 5th upgrade
	if(n_A_HEAD_DEF_PLUS > 4 && EquipNumSearch(1620))
	{
		w += 1 * (n_A_HEAD_DEF_PLUS - 4);
	}
	//Maiden Hat - ZoneSoldier - 6/6/2018
	//Increase MATK + 1% per upgrade past 6.
	if(n_A_HEAD_DEF_PLUS > 6 && EquipNumSearch(1628)){
		w += 1 * (n_A_HEAD_DEF_PLUS - 6);
	}
	//custom TalonRO Staff of Thea: Increase MATK by 1% for every 2 upgrades - [Loa] - 2016-06-07
	if(EquipNumSearch(1640)){
		w += Math.floor(n_A_Weapon_ATKplus / 2);
	}
	//custom TalonRO Improved Mage Hat: Increase MATK by 1% for every 2 upgrades - [Loa] - 2016-06-07
	if(EquipNumSearch(1645)){
		w += Math.floor(n_A_HEAD_DEF_PLUS / 2);
	}
	//Yellow/Green/Pink Sheila Hairnet [Refine Rate 9+] Increase MATK by 2% [Refine Rate 10] Increase MATK by 2% - [Loa] - 2016-06-29
	if(EquipNumSearch(1022) || EquipNumSearch(1026) || EquipNumSearch(1073)){
		if(n_A_HEAD_DEF_PLUS >= 9){
			w += 2;
		}
		if(n_A_HEAD_DEF_PLUS == 10){
			w += 2;
		}
	}
	//Silver/Violet/Orange/Blue Sheila Hairnet [Refine Rate 9+] Increase Physical Damage and MATK by 2% [Refine Rate 10] Cast Time - 10% - [Loa] - 2016-06-29
	if(EquipNumSearch(1024) || EquipNumSearch(1025) || EquipNumSearch(1062) || EquipNumSearch(1074)){
		if(n_A_HEAD_DEF_PLUS >= 9){
			n_tok[80] += 2;
			w += 2;
		}
		if(n_A_HEAD_DEF_PLUS == 10){
			n_tok[73] -= 10;
		}
	}
	//Red Wing Hat [Refine Rate > 6] Physical Damge + 2%, MATK + 2% [Refine Rate > 8] Physical Damge + 2%, MATK + 2% - [Loa] - 2018-07-03
	if(EquipNumSearch(1135)){
		if(n_A_HEAD_DEF_PLUS > 6){
			n_tok[80] += 2;
			w += 2;
		}
		if(n_A_HEAD_DEF_PLUS > 8){
			n_tok[80] += 2;
			w += 2;
		}
	}
	//Custom TalonRO - 2018-06-07 - Enhanced Hat of the Sun God [1] - MATK part [Nattwara]
	/*
	[Refine Rate 5+]
	ATK + 4, MATK + 1%
	[Refine Rate 6+]
	ATK + 4, MATK + 1%
	[Refine Rate 7+]
	ATK + 6, MATK + 1%
	[Refine Rate 8+]
	ATK + 6, MATK + 2%
	*/
	if(EquipNumSearch(1654)){
		if(n_A_HEAD_DEF_PLUS>4)
			w += 1;

		if(n_A_HEAD_DEF_PLUS>5)
			w += 1;

		if(n_A_HEAD_DEF_PLUS>6)
			w += 1;

		if(n_A_HEAD_DEF_PLUS>7)
			w += 2;
	}

	if(EquipNumSearch(1173))
		w += Math.floor(n_A_Weapon_ATKplus);
	if(n_A_JOB==14 || n_A_JOB==28){
		w += 10 * CardNumSearch(479);}

	//custom TalonRO Lady Tanee Card: +1% MATK  per 8 base VIT
	if (CardNumSearch(409))
		w += Math.floor(SU_VIT / 8);
	//custom TalonRO Rainbow Poring Hat +1% matk
	if(EquipNumSearch(1447))
		if(n_A_HEAD_DEF_PLUS>=7)
			w += 1;
	//custom TalonRO Black Wing +3% matk each refine
	if(EquipNumSearch(1463))
		w += 3*n_A_Weapon_ATKplus;
	//custom TalonRO RWC Commemorative Pin +1% matk each refine above 4
	if(EquipNumSearch(1468) && n_A_HEAD_DEF_PLUS >= 4)
		w += n_A_HEAD_DEF_PLUS-3;
	//custom TalonRO Halloween Midas Whisper
	if(SU_INT >= 80 && EquipNumSearch(1526))
		w += 3;
	//custom TalonRO Kris enchant %-MATK
	var KEbonus = [document.calcForm.A_KE11.value,document.calcForm.A_KE12.value,document.calcForm.A_KE21.value,document.calcForm.A_KE22.value];
	for (i=0;i<4;i++){
		var wKE = KEbonus[i];
		if(wKE){
			var w_enchant = wKE % 10;
			if(81 <= wKE && wKE <= 89)
				w += w_enchant;
		}
	}
	// [Custom TalonRO 2018-06-16 - Malangdo Enchantment for MATK%] [Kato]
	for(i=0; i < tRO_MalangdoEnchantment.length; i++) {
		var vME = tRO_MalangdoEnchantment[i];

		if(vME >= 891 && vME <= 892) w += parseInt(vME.substr(-1));
	}

	n_A_MATK[0] = Math.floor(n_A_MATK[0] * w / 100);
	n_A_MATK[2] = Math.floor(n_A_MATK[2] * w / 100);
	//Gemini Crown - [Loa] - 2018-07-04
	if(EquipNumSearch(1280) && n_A_HEAD_DEF_PLUS >= 7){
		n_A_MATK[0] += 15;
		n_A_MATK[2] += 15;
	}
	//Balloon Hat Matk Bonus
	if(EquipNumSearch(849)){
		n_A_MATK[0] += Math.floor(n_A_MATK[0]*(n_A_HEAD_DEF_PLUS/2)/100);
		n_A_MATK[2] += Math.floor(n_A_MATK[2]*(n_A_HEAD_DEF_PLUS/2)/100);
	}
	//custom TalonRO SQI Bonus Angel of Blades: +50 MATK
	if(EquipNumSearch(1379))
		for(i=0;i<SQI_Bonus_Effect.length;i++)
			if(SQI_Bonus_Effect[i]==41) {
				n_A_MATK[0] += 50;
				n_A_MATK[2] += 50;
				break;
			}
	//custom TalonRO Magical Booster & Staff of Piercing Combo
	if(EquipNumSearch(1430)& EquipNumSearch(645)){
		n_A_MATK[0] += 3*n_A_Weapon_ATKplus;
		n_A_MATK[2] += 3*n_A_Weapon_ATKplus;
		if(n_A_Weapon_ATKplus==10){
			n_A_MATK[0] += 25;
			n_A_MATK[2] += 25;
		}
	}
	//custom TalonRO Magical Booster & Hypnotist's Staff
	if(EquipNumSearch(1430)& EquipNumSearch(473)){
		n_A_MATK[0] += 4*n_A_Weapon_ATKplus;
		n_A_MATK[2] += 4*n_A_Weapon_ATKplus;
		if(n_A_Weapon_ATKplus==10){
			n_A_MATK[0] += 25;
			n_A_MATK[2] += 25;
		}
	}
	//custom TalonRO SQI Bonus Sherwood Bow: +50 MATK
	if(EquipNumSearch(1388))
		for(i=0;i<SQI_Bonus_Effect.length;i++)
			if(SQI_Bonus_Effect[i]==131) {
				n_A_MATK[0] += 50;
				n_A_MATK[2] += 50;
				break;
			}
	//custom TalonRO ID_ARG + MATK
	n_A_MATK[0] += n_A_PassSkill9[42];
	n_A_MATK[2] += n_A_PassSkill9[42];
	//custom TalonRO Stem Whip: +50 MATK
	if(EquipNumSearch(1454)){
		n_A_MATK[0] += 50;
		n_A_MATK[2] += 50;
	}
	//custom TalonRO Red Ether Bag: +90 MATK
	if(EquipNumSearch(1458)){
		n_A_MATK[0] += 90;
		n_A_MATK[2] += 90;
	}
	//custom TalonRO Imperial Spear: +40 MATK
	if(EquipNumSearch(1460)){
		n_A_MATK[0] += 40;
		n_A_MATK[2] += 40;
	}
	//custom TalonRO Green Whistle: +50 MATK
	if(EquipNumSearch(1462)){
		n_A_MATK[0] += 50;
		n_A_MATK[2] += 50;
	}
	//custom TalonRO Black Cat & Black Wing combo: +5 MATK
	if(EquipNumSearch(1464)){
		n_A_MATK[0] += 5;
		n_A_MATK[2] += 5;
	}
	/*
		Custom =[Entweihen Hairband]+[Dark Thorn Staff] combo
		[Refine Rate 5~10 Dark Thorn Staff]
  	For every 2 refines on the Dark Thorn Staff, add +10 MATK
		[ZoneSoldier] - 2018/05/06
	*/
	if(n_A_Weapon_ATKplus >= 5 && EquipNumSearch(1621)) {
			n_A_MATK[0] += 10 * Math.floor((n_A_Weapon_ATKplus - 4)/2);
			n_A_MATK[2] += 10 * Math.floor((n_A_Weapon_ATKplus - 4)/2);
	}
	if(n_A_PassSkill7[2]){
		n_A_MATK[0] += 10;
		n_A_MATK[2] += 10;
	}
	if(n_A_PassSkill7[10]){
		n_A_MATK[0] += 20;
		n_A_MATK[2] += 20;
	}
	if(n_A_PassSkill8[19]){
		n_A_MATK[0] += 5;
		n_A_MATK[2] += 5;
	}
	//MATK BGFOOD
	if(n_A_PassSkill8[32]){
		n_A_MATK[0] += 15;
		n_A_MATK[2] += 15;
	}

	w = 100 + n_tok[88];

	n_A_MATK[0] = Math.floor(n_A_MATK[0] * w / 100);
	n_A_MATK[2] = Math.floor(n_A_MATK[2] * w / 100);

	BK_n_A_MATK = [0,0,0];
	BK_n_A_MATK[0] = n_A_MATK[0];
	BK_n_A_MATK[2] = n_A_MATK[2];
	if(BK_n_A_MATK[0] != BK_n_A_MATK[2])
		BK_n_A_MATK[2] -= 1;
	BK_n_A_MATK[1] = (BK_n_A_MATK[2] + BK_n_A_MATK[0]) / 2;

	//Mindbreaker [self]
	if(n_A_PassSkill6[4]){
		w = 100 + 20 * n_A_PassSkill6[4];
		n_A_MATK[0] = Math.floor(n_A_MATK[0] * w / 100);
		n_A_MATK[2] = Math.floor(n_A_MATK[2] * w / 100);
	}
	if(SkillSearch(276)){
		n_A_MATK[0] = Math.floor(n_A_MATK[0] * (1+ 0.05 * SkillSearch(276)));
		n_A_MATK[2] = Math.floor(n_A_MATK[2] * (1+ 0.05 * SkillSearch(276)));
	}

	myInnerHtml("A_MATK",n_A_MATK[0] +"~"+ n_A_MATK[2],0);


	if(n_A_MATK[0] != n_A_MATK[2])
		n_A_MATK[2] -= 1;

	n_A_MATK[1] = (n_A_MATK[2] + n_A_MATK[0]) / 2;

	if(n_Nitou == 1)
		wASPD = (200 - (JobASPD[n_A_JOB][n_A_WeaponType] + JobASPD[n_A_JOB][n_A_Weapon2Type]) /2) *1.4;
	else
		wASPD = 200 - JobASPD[n_A_JOB][n_A_WeaponType];

	if(n_Nitou == 1 && n_A_WeaponType == 0 && n_A_Weapon2Type != 0)
		wASPD = 200 - JobASPD[n_A_JOB][n_A_Weapon2Type];

	n_A_ASPD = 200 - wASPD + (Math.round(wASPD * n_A_AGI *4 /100) +Math.round(wASPD * n_A_DEX /100)) /10;
	//alert("agi:"+n_A_AGI+"dex:"+n_A_DEX+"n_A_ASPD:"+n_A_ASPD);
	if(n_A_Equip[0]==47)
		n_A_ASPD += 2;

	if(SkillSearch(78) && (n_A_ActiveSkill == 0 || n_A_ActiveSkill == 284))
		n_A_ASPD -= (6 - SkillSearch(78)) *10;

	n_A_ASPD += Math.round(SkillSearch(425) /2);
	if(n_A_WeaponType == 12 && SkillSearch(224)){

		n_A_ASPD += (200 - n_A_ASPD) * (SkillSearch(224) /2 / 100);
		n_A_ASPD = Math.floor(n_A_ASPD * 10) / 10;
	}

	w=0;
	ASPDch = 0;
	if(n_A_IJYOU[0] == 0 && n_A_IJYOU[1] == 0){
		if(n_A_WeaponType == 3 && SkillSearch(74)){
			w += 30;
			ASPDch = 1;
		}
		if(n_A_WeaponType == 2 && SkillSearch(386)){
			w += 30;
			ASPDch = 1;
		}
		if(6 <= n_A_WeaponType && n_A_WeaponType<=8 && SkillSearch(152)){
			w += 30;
			ASPDch = 1;
		}
		if(ASPDch == 0 && SkillSearch(389)){
			w += 30;
			ASPDch = 1;
		}
		if(ASPDch == 0 && (TimeItemNumSearch(5) || TimeItemNumSearch(28))){//rush de alch set e noble hat
			if(n_A_WeaponType > 5 && n_A_WeaponType < 9){
				w += 30;
				ASPDch = 1;}
		}
		if(n_A_WeaponType==5 && SkillSearch(166)){
			w += SkillSearch(166) + 20;
			ASPDch = 1;
		}
	}
	if(EquipNumSearch(654))
		w += Math.floor(SU_AGI / 14);
	if(n_A_Equip[0]==484 && SU_STR >= 50)
		w += 5;
	if(EquipNumSearch(624))
		w += (n_A_Weapon_ATKplus);
	if(EquipNumSearch(641))
		w += n_A_Weapon_ATKplus;
	if(EquipNumSearch(903) && n_A_JobSearch2() == 13)
		w += 20;
	if(SU_STR >= 77 && EquipNumSearch(944))
		w += 4;
	if(n_A_Weapon_ATKplus >= 7 && n_A_Equip[0] == 1077){
		w += 5;
		if(n_A_Weapon_ATKplus >= 9)
			w += 5;
	}
	if(n_A_Weapon2_ATKplus >= 7 && n_A_Equip[1] == 1077){
		w += 5;
		if(n_A_Weapon2_ATKplus >= 9)
			w += 5;
	}
	if(n_A_Weapon_ATKplus >= 6 && EquipNumSearch(1081))
		w += 10;
	if(n_A_Weapon_ATKplus >= 6 && EquipNumSearch(1086)){
		w += 5;
		if(n_A_Weapon_ATKplus >= 9)
			w += 5;
	}
	if(n_A_Weapon_ATKplus >= 6 && EquipNumSearch(1088)){
		w += 5;
		if(n_A_Weapon_ATKplus >= 9)
			w += 5;
	}
	if(n_A_JOB == 21 && EquipNumSearch(855))
		w -= 5;
	if(EquipNumSearch(1121) && n_A_JobSearch()==2)
		w += 3;
	if(SU_STR >= 95 && EquipNumSearch(1167))
		w += 3;

	//custom TalonRO SQI Bonus Eversong Greaves: [Taekwon] +30% ASPD
	if(EquipNumSearch(1383))
		for(i=0;i<SQI_Bonus_Effect.length;i++)
			if(SQI_Bonus_Effect[i]==75) {
				//alert(n_A_JOB+","+n_A_JobSearch());
				if(n_A_JOB==41)
					w += 30;
				break;
			}
	//custom TalonRO Alca Bringer: +3% ASPD every 2 refines
	if(EquipNumSearch(1455))
		w += 3*Math.floor(n_A_Weapon_ATKplus/2);

	//custom TalonRO Gigantic Lance: For every refine above +4, increase ASPD by 1% - [Loa] - 2016-06-07
	if(EquipNumSearch(1315) && n_A_Weapon_ATKplus>4){
			w += n_A_Weapon_ATKplus - 4;
	}

	if(SkillSearch(258))
		w += 30;
	if(SkillSearch(420))
		w += 20;
	if(SkillSearch(433)){
		if(n_A_WeaponType==20 || n_A_WeaponType==0)
			w += 2 * SkillSearch(433);
	}

	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1288)){
		w += 2;}
	if(n_A_HEAD_DEF_PLUS >= 8 && EquipNumSearch(1290)){
		w += 2;}
	if(n_A_HEAD_DEF_PLUS == 10 && EquipNumSearch(1290)){
		w += 2;}

	if(SkillSearch(357)){
		ASPDch = 1;
		w += Math.floor((n_A_BaseLV + n_A_LUK + n_A_DEX) / 10);
	}

	if(SkillSearch(361) && n_A_JobLV >= 50){
		ASPDch = 1;
		w += 3 * SkillSearch(361);
	}
	if(n_A_IJYOU[0] == 0 && n_A_IJYOU[1] == 0){
		if(ASPDch == 0 && n_A_PassSkill2[6] == 2){
			if(n_A_WeaponType != 10 && !(17 <= n_A_WeaponType && n_A_WeaponType <= 21)){
				w += 25;
				ASPDch = 1;
			}
		}
		else if(ASPDch == 0 && 6 <= n_A_WeaponType && n_A_WeaponType<=8 && n_A_PassSkill2[6] == 1){
			w += 25;
			ASPDch = 1;
		}else if(ASPDch == 0 && 6 <= n_A_WeaponType && n_A_WeaponType<=8 && n_A_PassSkill2[6] == 3){
			w += 30;
			ASPDch = 1;
		}
	}
	if(n_A_PassSkill3[1] && ASPDch == 0){
		if(n_A_WeaponType != 10 && !(17 <= n_A_WeaponType && n_A_WeaponType <= 21))
			//custom TalonRO Assassin Cross of Sunset bugfix, higher ASPD boost than before
			//before
			//w += 5 + n_A_PassSkill3[1] + Math.floor(n_A_PassSkill3[31] /2) + Math.floor(n_A_PassSkill3[21] /20);
			//after
			w += 10 + n_A_PassSkill3[1] + Math.floor(n_A_PassSkill3[31] /2) + Math.floor(n_A_PassSkill3[21] /10);
	}

	w += n_tok[12];

	if(SkillSearch(196))
		w -= 25;
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1283)){
		w += 3;}

	//custom TalonRO deactivate Guarana Candy ASPD boost
	//if(n_A_SpeedPOT){
		if(n_A_SpeedPOT == 1)
			w += 10;
		else if(n_A_SpeedPOT == 2)
			w += 15;
		else if(n_A_SpeedPOT == 3)
			w += 20;

	//}else{
	//	if(n_A_PassSkill8[28])
	//		w += 10;
	//}

	//custom TalonRO Armor enchant ASPD
	var wHSE = eval(document.calcForm.A_HSE.value);
	if(wHSE){
		var w_enchant = wHSE % 10;
		if(91 <= wHSE && wHSE <= 99)
			w += w_enchant;
	}
	//Thief Ring & Cold Heart aspd boost fix
	if(EquipNumSearch(1003)& EquipNumSearch(442)){
		w += (n_A_Weapon_ATKplus/2);}

	//custom TalonRO Imperial Feather
	if(SU_AGI >= 90 && EquipNumSearch(1475))
		w += 1;

	//custom TalonRO Tasty Strawberry Hat
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1503)){
		w += 4;}
	//custom TalonRO Halloween Midas Whisper
	if(SU_AGI >= 80 && EquipNumSearch(1526))
		w += 5;

	//[Custom TalonRO 2018-06-15 - Malangdo Enchantment for ASPD] [Kato]
	for(i=0; i < tRO_MalangdoEnchantment.length; i++) {
		var vME = tRO_MalangdoEnchantment[i];

		if(vME == 123) w += parseInt(vME.substr(-1));
	}

	if(EquipNumSearch(1045) && SU_AGI >= 90){
		w += 2;
	}

	n_A_ASPD += (200 - n_A_ASPD) * (w / 100);

	if(SkillSearch(165))
		n_A_ASPD -= (25 -SkillSearch(165) *5);

	if (EquipNumSearch(1524))
		n_A_ASPD += 1;
	if (EquipNumSearch(1525))
		n_A_ASPD += 1;

	//Custom TalonRO - 2018-06-07 - Enhanced Helm of Angel [1] - If refine 7+, ASPD + 1 [Nattwara]
	if (EquipNumSearch(1655) && (n_A_HEAD_DEF_PLUS > 6))
		n_A_ASPD += 1;

	//alert("agi:"+n_A_AGI+"dex:"+n_A_DEX+"n_A_ASPD:"+n_A_ASPD);

	if(n_A_ASPD > 190)
		n_A_ASPD = 190;

	//custom TalonRO Dual Wielding ASPD fix, if aspd decimal > .91 then round up, ie 189.91 => 190
	//not always correct, but probably better than before...
	if(n_Nitou==1){
		n_A_ASPD_dec=(n_A_ASPD * 100).toString();
		//alert("n_A_ASPD:"+n_A_ASPD+",n_A_ASPD_dec:"+n_A_ASPD_dec+",n_A_ASPD_dec.substring(3,n_A_ASPD_dec.length):"+n_A_ASPD_dec.substring(3,n_A_ASPD_dec.length));
		if (n_A_ASPD_dec.substring(3,n_A_ASPD_dec.length)>=91){
			n_A_ASPD=Math.ceil(n_A_ASPD);
		}
	}
	//Duel Wielding ASPD fix -end-

	n_A_ASPD = Math.floor(n_A_ASPD * 10) / 10;

	myInnerHtml("A_ASPD",n_A_ASPD,0);

	n_A_ASPD = Math.floor(n_A_ASPD);

	n_A_ASPD = (200 - n_A_ASPD) / 50;


	n_Delay[1] = Math.floor(n_A_ASPD * 1000)/1000;
	if(n_A_ActiveSkill==17)
		n_Delay[1] = Math.floor(n_A_ASPD *75)/100;

	sandanDelay = 0;
	if(SkillSearch(187) && n_A_ActiveSkill == 0){
		sandanDelay = (1000 - n_A_AGI *4 - n_A_DEX *2) /1000;
		if(SkillSearch(301))
			sandanDelay += 0.3;
	}

	n_A_CAST = 1 - n_A_DEX / 150;
	if(n_A_CAST < 0)
		n_A_CAST = 0;

	var w=100;
	w += n_tok[73];
	if(n_A_HEAD_DEF_PLUS >= 8 && EquipNumSearch(1279)){w -= 3;}//Capricorn Diadem
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1289)){w -= 3;}//Sagittarius Diadem
	if(n_A_HEAD_DEF_PLUS >= 9 && EquipNumSearch(1289)){w -= 2;}//Sagittarius Diadem
	if(n_A_JobSearch()==5 && CardNumSearch(454))
		w -= 15;
	if((n_A_JOB==18 || n_A_JOB==32) && CardNumSearch(460))
		w -= 15;
	if(EquipNumSearch(750))
		w -= n_A_Weapon_ATKplus;
	if(n_A_card[8]==177)
		w -= n_A_HEAD_DEF_PLUS;
	if(n_A_Weapon_ATKplus >= 9 &&EquipNumSearch(1084))
		w -= 5;
	if(n_A_Weapon_ATKplus >= 9 &&EquipNumSearch(1095))
		w -= 5;
	if(n_A_PassSkill3[2] != 0)
		w -= ((w/100)*((n_A_PassSkill3[2] * 3 + n_A_PassSkill3[32] + Math.floor(n_A_PassSkill3[22] /10))/100))*100;//eathena formula
		//w -= n_A_PassSkill3[2] * 3 + n_A_PassSkill3[32] + Math.floor(n_A_PassSkill3[22] /10);//aegis formula
	if(TimeItemNumSearch(1))
		w -= 50;
	if(EquipNumSearch(1005)& EquipNumSearch(442)){
		w -= (n_A_Weapon_ATKplus/2);}
	//parade hat [refine >= 6] -5 cast time - [Loa] 2018-07-02
	if(EquipNumSearch(1036) && n_A_HEAD_DEF_PLUS >= 6){
		w -= 5;
	}
	//custom TalonRO SQI Bonus Mjolnir: 30% cast reduction with Charge Attack
	if(n_A_ActiveSkill == 308)
		if(EquipNumSearch(84))
			for(i=0;i<SQI_Bonus_Effect.length;i++)
				if(SQI_Bonus_Effect[i]==106) {
					w -= 30;
					break;
				}
	//custom TalonRO Magical Booster & Staff of Piercing Combo
	if(EquipNumSearch(1430)& EquipNumSearch(645))
		if(n_A_Weapon_ATKplus==10)
			w -= 10;
	//custom TalonRO Lapine Staff
	if(EquipNumSearch(1486))
			w -= n_A_Weapon_ATKplus;
	//custom TalonRO Little Feather Hat & Falken Blitz combo: -15% cast time for Sharp Shooting
	if(EquipNumSearch(1489) && n_A_ActiveSkill == 272)
		w -= 15;
	//custom TalonRO Lacrima Stick: 8% cast reduction with Storm Gust
	if(n_A_ActiveSkill == 131 && EquipNumSearch(1169) && n_A_Weapon_ATKplus == 10)
		w -= 8;
	//custom TalonRO Geffenia Water Book & Lacrima Stick combo: 2% cast reduction each shield refine
	if(n_A_ActiveSkill == 131 && EquipNumSearch(1521)){
		w -= n_A_LEFT_DEF_PLUS*2;
	}
	//custom TalonRO Halloween Midas Whisper
	if(SU_DEX >= 80 && EquipNumSearch(1526))
		w -= 5;

	if(w < 0){w = 0;}

	n_B_Cast = w;
	n_A_CAST *= w /100;

	w = 100;
	if(StPlusCalc2(7000+n_A_ActiveSkill) != 0)
		w -= StPlusCalc2(7000+n_A_ActiveSkill);
	if(StPlusCard(7000+n_A_ActiveSkill) != 0)
		w -= StPlusCard(7000+n_A_ActiveSkill);
	if(n_A_ActiveSkill==321 || n_A_ActiveSkill==197)
		if(SkillSearch(195) && n_A_Weapon_ATKplus >= 9 && EquipNumSearch(1097))
			w -= 100;
	if(w < 0)
		w = 0;
	n_A_CAST *= w /100;

	if(n_A_PassSkill2[13])
		n_A_CAST *= (100 - 15 * n_A_PassSkill2[13]) /100;
	if(SkillSearch(322))
		n_A_CAST = n_A_CAST /2;

	if(n_A_Weapon_ATKplus >= 9 && EquipNumSearch(934))
		n_tok[74] += 20;
	if(n_A_Weapon_ATKplus >= 9 &&EquipNumSearch(1084))
		n_tok[74] += 5;
	if(n_A_Weapon_ATKplus >= 9 &&EquipNumSearch(1095))
		n_tok[74] += 5;
	if(EquipNumSearch(936))
		n_tok[74] += (n_A_Weapon_ATKplus * 3 / 2);
	//custom TalonRO Magical Booster & Staff of Piercing Combo
	if(EquipNumSearch(1430)& EquipNumSearch(473)){
		if(n_A_Weapon_ATKplus==10){
			n_tok[74] += 10;
		}
	}
	var w = n_A_PassSkill3[2];
	if(w){
		// custom TalonRO Poem of Bragi after cast delay
		//before
		//{
		//custom TalonRO Poem of Bragi 3% delay reduction per skilllv on lv 10 instead of 5% (https://forum.talonro.com/index.php?topic=63445.0)
		//before
		//if(w==10)
			//n_tok[74] += w * 5 + n_A_PassSkill3[32] *2 + Math.floor(n_A_PassSkill3[29] /5);
		//else
			//n_tok[74] += w * 3 + n_A_PassSkill3[32] *2 + Math.floor(n_A_PassSkill3[29] /5);
		//after
		//n_tok[74] += w * 3 + n_A_PassSkill3[32] *2 + Math.floor(n_A_PassSkill3[29] /5);
		//}
		//after
		if (n_A_PassSkill3[45]==1 && w==10)
			n_tok[74] += w * 5 + n_A_PassSkill3[32] *2 + Math.floor(n_A_PassSkill3[29] /5);
		else
			n_tok[74] += w * 3 + n_A_PassSkill3[32] *2 + Math.floor(n_A_PassSkill3[29] /5);

	}
	if(n_tok[74] > 100)
		n_tok[74] = 100;

	n_A_HPR = Math.floor(n_A_VIT /5) + Math.floor(n_A_MaxHP /200);
	if(n_A_HPR < 1)
		n_A_HPR = 1;
	w = 100;
	w += n_tok[75];
	if(SU_LUK >= 77)
		w += 100 * CardNumSearch(221);
	if(n_A_JobSearch()==41 && EquipNumSearch(672))
		w += 3;
	if(n_A_SHOES_DEF_PLUS <= 4 && CardNumSearch(407))
		w += 5;
	if(n_A_PassSkill8[18])
		w += 3;
	//custom TalonRO Knit Rabbit Ear Hat
	if(EquipNumSearch(1429) && SU_LUK > 55)
		w += 10;

	//[Custom TalonRO - 2018-06-02 - Aegir Helm + Cloak - Increases natural HP recovery by 5% per refinement rate of Aegir Cloak.] [Kato/Nattwara]
	if(EquipNumSearch(1555))
		w += 5 * n_A_SHOULDER_DEF_PLUS;

	n_A_HPR = Math.floor(n_A_HPR * w /100);

	if(n_A_IJYOU[2])
		n_A_HPR = 0;

	myInnerHtml("A_HPR",n_A_HPR,0);

	n_A_SPR = Math.floor(n_A_INT /6) + Math.floor(n_A_MaxSP /100) +1;

	w=100;

	w += SkillSearch(269) *3;

	w += n_tok[76];

	if(SU_LUK >= 77)
		w += 100 * CardNumSearch(221);
	if(n_A_JobSearch()==41 && EquipNumSearch(673))
		w += 3;
	if(n_A_HEAD_DEF_PLUS <= 4 && n_A_card[8]==179)
		w += 5;
	if(n_A_card[9]==179)
		w += 5;
	if(n_A_card[16]==179)
		w += 5;
	if(n_A_card[17]==179)
		w += 5;
	if(n_A_card[18]==179)
		w += 5;
	if(n_A_SHOES_DEF_PLUS <= 4 && CardNumSearch(407))
		w += 5;
	if(EquipNumSearch(1119) && n_A_JobSearch()==5)
		w += 5;
	if(n_A_PassSkill8[18])
		w += 3;
	//custom TalonRO Knit Rabbit Ear Hat
	if(EquipNumSearch(1429) && SU_LUK > 55)
		w += 10;

	n_A_SPR = Math.floor(n_A_SPR * w /100);

	if(n_A_INT>=120)
		n_A_SPR += Math.floor((n_A_INT-120)/2) +4;

	if(n_A_IJYOU[2])
		n_A_SPR = 0;

	myInnerHtml("A_SPR",n_A_SPR,0);

	if(ArrowOBJ[n_A_Arrow][2]=="Holy Arrow")
		n_tok[36] += 5;
	if(SkillSearch(234))
		n_tok[39] += SkillSearch(234) *4;

	if(n_A_Weapon_ATKplus >= 6){
		if(n_A_Equip[0] == 1076 || n_A_Equip[0] == 1077 || n_A_Equip[0] == 1081 || n_A_Equip[0] == 1082 || n_A_Equip[0] == 1086 || (1088 <= n_A_Equip[0] && n_A_Equip[0] <= 1094) || n_A_Equip[0] == 1096 || n_A_Equip[0] == 1097 || (1099 <= n_A_Equip[0] && n_A_Equip[0] <= 1103)){
			if(n_A_Weapon_ATKplus == 6)
				n_tok[37] += 4;
			if(n_A_Weapon_ATKplus == 7)
				n_tok[37] += 9;
			if(n_A_Weapon_ATKplus == 8)
				n_tok[37] += 16;
			if(n_A_Weapon_ATKplus == 9)
				n_tok[37] += 25;
			if(n_A_Weapon_ATKplus >= 10)
				n_tok[37] += 36;
		}

		if(n_A_Equip[0] == 1080 || n_A_Equip[0] == 1087 || n_A_Equip[0] == 1098){
			if(n_A_Weapon_ATKplus == 6)
				n_tok[37] += 9;
			if(n_A_Weapon_ATKplus == 7)
				n_tok[37] += 16;
			if(n_A_Weapon_ATKplus == 8)
				n_tok[37] += 25;
			if(n_A_Weapon_ATKplus == 9)
				n_tok[37] += 36;
			if(n_A_Weapon_ATKplus >= 10)
				n_tok[37] += 49;
		}

	}
	if(EquipNumSearch(1428) && n_A_HEAD_DEF_PLUS > 5)
		n_tok[37] += 2*(n_A_HEAD_DEF_PLUS-5);

	//custom Talonro Imrpoved Munak Hat: If refine > 6 increase damage against Undead monster by 10% - [Loa] - 2018-06-07
	if(EquipNumSearch(1649) && n_A_HEAD_DEF_PLUS > 6){
		n_tok[31] += 10;
	}

	//custom Talonro Imrpoved Bongun Hat: If refine > 6 increase damage against Demon monster by 10% - [Loa] - 2018-06-07
	if(EquipNumSearch(1650) && n_A_HEAD_DEF_PLUS > 6){
		n_tok[36] += 10;
	}

	if(EquipNumSearch(628) && n_A_Arrow == 4)
		n_tok[25] += 25;
	if(EquipNumSearch(626) && n_A_Arrow == 2)
		n_tok[25] += 25;
	if(EquipNumSearch(627) && n_A_Arrow == 5)
		n_tok[25] += 25;
	if(EquipNumSearch(629) && n_A_Arrow == 6)
		n_tok[25] += 25;
	if(EquipNumSearch(630) && n_A_Arrow == 10)
		n_tok[25] += 50;
	if(EquipNumSearch(101) && n_A_Arrow == 17)
		n_tok[25] += 50;
	//custom TalnRO Elven Bow + Elven Arrow: +50% dmg
	if(EquipNumSearch(1477) && n_A_Arrow == 18)
		n_tok[25] += 50;
	if(n_A_HEAD_DEF_PLUS >= 9 &&EquipNumSearch(1288)){
		n_tok[25] += 5;}//sagittarius crown

	//custom TalonRO Evil Marching Hat: if refine rate >=9 +5% ranged damage
	if(n_A_HEAD_DEF_PLUS >= 9 &&EquipNumSearch(1539)){
		n_tok[25] += 5;}

	//[Custom TalonRO - 2018-06-01 - Palace Guard if refine rate >=7 add -1% ranged reduction] [Kato]
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1545)){
		n_tok[25] -= (n_A_HEAD_DEF_PLUS - 5);
	}

	//[Custom TalonRO 2018-06-15 - Malandgo Enchantment for Expert Archer] [Kato]
	for(i=0; i < tRO_MalangdoEnchantment.length; i++) {
		var vME = tRO_MalangdoEnchantment[i];
		if(vME >= 251 && vME <= 256) {
				n_tok[25] += 2 * parseInt(vME.substr(-1));
		}
	}

	//Custom TalonRO - 2018-06-07 - Lord of the Dead Helm [1] + Abysmal Knight Card - +5% damage on boss monsters  [Nattwara]
	if(EquipNumSearch(1658) && CardNumSearch(31))
		n_tok[26] += 5;

	//Custom TalonRO - 2018-06-07 - Lord of the Dead Helm [1] - Refine 5+ +1% more damage on boss monsters for every refine.  [Nattwara]
	if(EquipNumSearch(1658) && n_A_HEAD_DEF_PLUS > 4)
		n_tok[26] += n_A_HEAD_DEF_PLUS;

	if(n_A_HEAD_DEF_PLUS >= 9 && EquipNumSearch(1285)){
		n_tok[80] += 3;}//libra diadem
	if(n_A_JOB==14 || n_A_JOB==28)
		n_tok[80] += 10 * CardNumSearch(479);
	if(n_A_Weapon_ATKplus >= 9 && EquipNumSearch(1101))
		n_tok[80] += n_A_Weapon_ATKplus;

	//custom TalonRO Lady Tanee Card: +1% ATK per 8 base VIT
	if(CardNumSearch(409))
		n_tok[80] += Math.floor(SU_VIT / 8);

	if(EquipNumSearch(1089))
		n_tok[70] += (2 * n_A_Weapon_ATKplus);
	//custom TalonRO Little Feather Hat: if combined with Sharp Arrow +5% critical damage
	if(EquipNumSearch(1488) && n_A_Arrow==15)
		n_tok[70] += 5;
	//custom TalonRO Little Feather Hat: if refine rate >=7 additional +5% critical damage
	if(EquipNumSearch(1488) && n_A_HEAD_DEF_PLUS >= 7)
		n_tok[70] += 5;
	//custom TalonRO Evil Marching Hat: if refine rate >=7 +10% critical damage
	if(EquipNumSearch(1539) && n_A_HEAD_DEF_PLUS >= 7)
		n_tok[70] += 10;

	//custom TalonRO Improved Joker Jester: If refine rate >6 +5% critical damage - [Loa] - 2018-06-07
	if(EquipNumSearch(1647) && n_A_HEAD_DEF_PLUS > 6){
		n_tok[70] += 5;
	}

	if(EquipNumSearch(1083)){
		if(n_A_Weapon_ATKplus >= 6)
			n_tok[177] += 2 * (n_A_Weapon_ATKplus - 5);
		}
	if(CardNumSearch(452) && n_A_JobSearch()==3){
		n_tok[51] += 30;
		n_tok[56] += 30;
	}
	if(EquipNumSearch(1428) && n_A_HEAD_DEF_PLUS > 5)
		n_tok[57] += 2*(n_A_HEAD_DEF_PLUS-5);
	if(n_A_PassSkill2[14] && n_A_JOB != 13 && n_A_JOB != 27)
		n_tok[56] += n_A_PassSkill2[14] * 5;
	if(SkillSearch(234))
		n_tok[59] += SkillSearch(234) *4;
	for(var i=971;i<=977;i++){
		if(EquipNumSearch(i)){
			n_tok[50] -= 200;
			n_tok[51] -= 200;
			n_tok[52] -= 200;
			n_tok[53] -= 200;
			n_tok[54] -= 200;
			n_tok[55] -= 200;
			n_tok[56] -= 200;
			n_tok[58] -= 200;
			n_tok[59] -= 200;
		}
	}
	//Orc Hero Headdress [For Every Refine > 5] Physical Damage against Demi-Human monsters + 1%, Damage from Demi-Human monster - 2% - [Loa] - 2018-07-03
	if(EquipNumSearch(1142) && n_A_HEAD_DEF_PLUS > 5){
		n_tok[37] += n_A_HEAD_DEF_PLUS - 5;
		n_tok[57] += (n_A_HEAD_DEF_PLUS - 5) * 2;
	}
	//[Custom TalonRO - 2018-06-02 - Aegir Helm + Armor Combo - 1% less damage from Fish race monster for each refine] [Kato/Nattwara]
	if(EquipNumSearch(1556))
		n_tok[55] += n_A_BODY_DEF_PLUS;

	//Custom TalonRO - 2018-06-07 - Enhanced Bone Helm [1] - 1% less damage Neutral element attack for each refine past +4 until +8 [Nattwara/Loa]
	if(EquipNumSearch(1656) && n_A_HEAD_DEF_PLUS > 4)
		n_tok[60] += Math.min(n_A_HEAD_DEF_PLUS-4,4);

	//Custom TalonRO - 2018-06-07 - Enhanced Corsair [1] - 1% less damage Neutral element attack if refine +8 or above [Nattwara]
	if(EquipNumSearch(1657) && (n_A_HEAD_DEF_PLUS > 7))
		n_tok[60] += 1;

	//Custom TalonRO - 2018-06-07 - Lord of the Dead Helm [1] + Abysmal Knight Card - Refine 6+ Receive 1% more damage from all monsters for every refine.  [Nattwara]
	if(EquipNumSearch(1658) && CardNumSearch(31) && n_A_HEAD_DEF_PLUS > 5) {
		n_tok[77] -= n_A_HEAD_DEF_PLUS;
		n_tok[79] -= n_A_HEAD_DEF_PLUS;
	}

	if(EquipNumSearch(737))
		n_tok[60] += n_A_SHOULDER_DEF_PLUS * 3;
	if(n_A_SHOULDER_DEF_PLUS >= 9 && CardNumSearch(403))
		n_tok[60] += 5;
	if(SkillSearch(150)){
		n_tok[60] += SkillSearch(150);
		n_tok[63] += 4 * SkillSearch(150);
	}
	if(SkillSearch(156))
		n_tok[66] += 5 * SkillSearch(156);
	if(n_A_PassSkill2[14] && n_A_JOB != 13 && n_A_JOB != 27)
		n_tok[66] += 5 * n_A_PassSkill2[14];
	if(n_A_PassSkill3[7]){
		for(i=61;i<=69;i++)
			n_tok[i] += 55 + 5 * n_A_PassSkill3[7];
		for(i=150;i<=159;i++)
			n_tok[i] += 10 * n_A_PassSkill3[7];
	}
	if(n_A_PassSkill7[11]){
		n_tok[61] += 20;
		n_tok[64] -= 15;
	}
	if(n_A_PassSkill7[12]){
		n_tok[62] += 20;
		n_tok[63] -= 15;
	}
	if(n_A_PassSkill7[13]){
		n_tok[63] += 20;
		n_tok[61] -= 15;
	}
	if(n_A_PassSkill7[14]){
		n_tok[64] += 20;
		n_tok[62] -= 15;
	}

	if(EquipNumSearch(624))
		n_tok[191] += n_A_Weapon_ATKplus;

	//custom TalonRO Magical Booster
	if(EquipNumSearch(1430) && EquipNumSearch(1228)){
		if(n_A_HEAD_DEF_PLUS >= 5)
			n_tok[79] -= 5;
	}

	if(SkillSearch(421))
		n_tok[78] += 20;

	//maiden hat +1% heal per refine > 6 - [Loa] - 2018-06-25
	if(n_A_HEAD_DEF_PLUS > 6 && EquipNumSearch(1628)){
		n_tok[91] += n_A_HEAD_DEF_PLUS - 6;
		n_tok[94] += n_A_HEAD_DEF_PLUS - 6;
	}

	if(EquipNumSearch(1085)){
		if(n_A_Weapon_ATKplus >= 6){
				n_tok[91] += 5 + (2 * (n_A_Weapon_ATKplus - 5));
				n_tok[94] += 5 + (2 * (n_A_Weapon_ATKplus - 5));
		}
		if(n_A_Weapon_ATKplus >= 10){
			n_tok[91] += 10;
			n_tok[94] += 10;
		}
	}
	if(EquipNumSearch(1161))
		n_tok[91] += SkillSearch(23);
		n_tok[94] += SkillSearch(23);

	if(EquipNumSearch(534)){
		wSPVS = n_A_JobSearch();
		if(wSPVS==1 || wSPVS==2 || wSPVS==6)
			n_tok[151] += 50;
		if(wSPVS==3 || wSPVS==4 || wSPVS==5)
			n_tok[156] += 50;
	}
	//custom TalonRO Recovery Light bHealPower refine * 3
	if(EquipNumSearch(1511)){
		n_tok[91] += Math.floor(n_A_Weapon_ATKplus * 3);
		n_tok[94] += Math.floor(n_A_Weapon_ATKplus * 3);
	}

	//custom Talonro Chameleon Armor: [Swordsman, Merchant, Thief] DEF + 3 [Magician, Archer, Acolyte] MDEF + 5
	if(EquipNumSearch(986)){
		wSPVS = n_A_JobSearch();
		if(wSPVS==1 || wSPVS==2 || wSPVS==6)
			n_tok[18] += 3;
		if(wSPVS==3 || wSPVS==4 || wSPVS==5)
			n_tok[19] += 5;
	}

	if(EquipNumSearch(828)){
		n_tok[151] += 2 * n_A_HEAD_DEF_PLUS;
		n_tok[152] += 2 * n_A_HEAD_DEF_PLUS;
		n_tok[159] += 2 * n_A_HEAD_DEF_PLUS;
	}
	if(CardNumSearch(176)){
		if(SU_AGI >= 90){
			n_tok[151] += 30 * CardNumSearch(176);
			n_tok[156] += 30 * CardNumSearch(176);
		}
		if(SU_VIT >= 80){
			n_tok[155] += 50 * CardNumSearch(176);
			n_tok[159] += 50 * CardNumSearch(176);
		}
	}

	n_A_zokusei = new Array();
	for(i=0;i<=9;i++){
		n_A_zokusei[i] = zokusei[n_A_BodyZokusei * 10 +1][i] * 100;
		n_A_zokusei[i] = n_A_zokusei[i] - Math.floor(n_A_zokusei[i] * n_tok[60+i]) / 100;
	}

	if(n_A_Equip[1] == 1076 || n_A_Equip[1] == 1077){
		if(n_A_Weapon2_ATKplus >= 6)
			n_tok[307] += 5;
	}
	if(n_A_Equip[0] == 1076 || n_A_Equip[0] == 1077 || n_A_Equip[0] == 1080 || n_A_Equip[0] == 1081 || n_A_Equip[0] == 1086 || (1088 <= n_A_Equip[0] && n_A_Equip[0] <= 1090) || n_A_Equip[0] == 1092 || n_A_Equip[0] == 1093 || (1097 <= n_A_Equip[0]  && n_A_Equip[0] <= 1103)){
		if(n_A_Weapon_ATKplus >= 6)
			n_tok[307] += 5;
	}
	if(n_A_Equip[0] == 1082 || n_A_Equip[0] == 1087 || n_A_Equip[0] == 1094 || n_A_Equip[0] == 1096){
		if(n_A_Weapon_ATKplus >= 6)
			n_tok[307] += 5;
	}
	if(EquipNumSearch(645))
		n_tok[295] += 10 + n_A_Weapon_ATKplus;
	if(n_A_WeaponType==9)
		n_tok[295] += 2 * CardNumSearch(466);
	//custom TalonRO Gold Queen Scaraba Card, 1% mdef bypass with rod-type weapon
	if(n_A_WeaponType==9)
		n_tok[295] += 1 * CardNumSearch(529);
	if(n_B[19]==1 && CardNumSearch(425))
		n_tok[297] += 20 * CardNumSearch(425); //custom TalonRO Vesper Card ignore 20% MDEF on boss type monsters
		//n_tok[297] += 30 * CardNumSearch(425); // original Vesper Cardp ignore 30% Mdef on boss type monsters
	//custom TalonRO High Wizard Card, 20% MDEF bypass on non-boss monster
	if(n_B[19]==0 && CardNumSearch(424))
		n_tok[296] += 20 * CardNumSearch(424);
	if(EquipNumSearch(936))
		n_tok[295] += (n_A_Weapon_ATKplus * 1);
	if(n_B[19]==1 && EquipNumSearch(1228)){
		if(n_A_HEAD_DEF_PLUS >= 6)
			n_tok[297] += n_A_HEAD_DEF_PLUS;
	}
	//custom TalonRO Magical Booster & Southern Cross Combo
	if(n_B[19]==1 && EquipNumSearch(1430) && EquipNumSearch(1228)){
		if(n_A_HEAD_DEF_PLUS >= 5)
			n_tok[297] += 1;
		if(n_A_HEAD_DEF_PLUS >= 7)
			n_tok[297] += 1;
	}
	if(n_B[19] == 0)
		n_tok[295] += n_tok[296];
	if(n_B[19] == 1)
		n_tok[295] += n_tok[297];

	if(EquipNumSearch(1084) || EquipNumSearch(1095)){
		if(n_A_Weapon_ATKplus >= 6)
			n_tok[317] += 5;
	}
	if(EquipNumSearch(1085)){
		if(n_A_Weapon_ATKplus >= 6)
			n_tok[317] += 5;
	}
	// //Maiden Hat - ZoneSoldier - 6/6/2018
	// //Additional Heal effectiveness + 1% per upgrade past 7.
	// if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1628)){
	// 	n_tok[317] =+ 1 * (n_A_HEAD_DEF_PLUS - 7);
	// }

	if(EquipNumSearch(1083)){
		if(n_A_Weapon_ATKplus >= 6)
			n_tok[317] += 5 + (2 * (n_A_Weapon_ATKplus - 5));
	}


	n_tok[70] += n_tok[320+n_B[2]];

	if(EquipNumSearch(535)){
		var wVM = n_A_JobSearch();
		if(wHPVS==1 || wHPVS==2 || wHPVS==6){
			n_tok[71] += 5;
			n_tok[71] += n_A_SHOULDER_DEF_PLUS * 2;
		}
	}

	//[Custom TalonRO - 2018-06-05 - Detale + Aegir Set (all of them) combo, immunity to Freeze [Kato.]
	if(CardNumSearch(532) && EquipNumSearch(1557)) {
			n_tok[152] = 100;
	}

	//[Custom TalonRO = 2018-06-05 - Parus Card adds 2% for Acolyte-based jobs] [Kato]
	if(CardNumSearch(536) && (n_A_JOB == 3 || n_A_JOB == 9 || n_A_JOB == 23 || n_A_JOB == 15 || n_A_JOB == 33)) {
		n_tok[91] += 1 * Math.floor(n_A_HEAD_DEF_PLUS/2);
	}


	/*[Custom TalonRO 2018-06-15 - Malangdo Enchantment for Spell Element] [Kato]
		Well I couldn't find a n_tok for magical damage based on element.
		Since we don't have it, I will separate the skills by element (skills.js) and apply the magical damage for all races [170-179]
		*** Snap, the math was bugus, the only way I found here was to keep the modifier that was here and add the new one
	*/
	var eTypes = [0,0,0,0,0]; // 0 Neural, 1 Water, 2 Earth, 3 Fire, 4 Wind
	var aMSnoEle = [373,374,375]; // Magical skills without proper element (will change depending on n_A_Weapon_zokusei)
	for(i=0; i < tRO_MalangdoEnchantment.length; i++) {
		var vME = tRO_MalangdoEnchantment[i];
		if(vME >= 261 && vME <= 267) {
			switch(vME.substr(-1)){
				case '1' : eTypes[3] += 2; break;
				case '2' : eTypes[1] += 2; break;
				case '3' : eTypes[4] += 2; break;
				case '4' : eTypes[2] += 2; break;
				case '5' : eTypes[3] += 4; break;
				case '6' : eTypes[1] += 5; break;
				case '7' : eTypes[4] += 6; break;
			}

			for(k=1; k<5; k++) {
				if(TRO_MAGICALSKILL_ELEMENTS[k].indexOf(n_A_ActiveSkill) != -1){
					for(j=0; j<10; j++) {
						n_tok[170 + j] = ((n_tok[170 + j] + 100) * (100 + eTypes[k]) / 100) - 100; // ***
					}
				}
			}
			if(aMSnoEle.indexOf(n_A_ActiveSkill) != -1 && n_A_Weapon_zokusei <= 5){
				for(j=0; j<10; j++) {
					n_tok[170 + j] = ((n_tok[170 + j] + 100) * (100 + eTypes[n_A_Weapon_zokusei]) / 100) - 100; // ***
				}
			}
		}
	}
	//increase damage of skills based on element for n_tok[340-349] - [Loa]
	for(i=0;i<TRO_MAGICALSKILL_ELEMENTS.length;i++){
		if(TRO_MAGICALSKILL_ELEMENTS[i].indexOf(n_A_ActiveSkill) != -1){
			for(j=0; j<10; j++) {
				n_tok[170 + j] = ((n_tok[170 + j] + 100) * (100 + n_tok[340 + i]) / 100) - 100;
			}
		}
	}

	ClickB_Enemy();
	KakutyouKansuu();
}}

function StPlusCalc()
{
	n_A_JobSet();
	n_A_JobLV = eval(document.calcForm.A_JobLV.value);

	var w2 = [0,0,0,0,0,0];
	for(var i=0;JobBOBJ[n_A_JOB][i] <= n_A_JobLV && JobBOBJ[n_A_JOB][i] != "n";i+=2)
			w2[JobBOBJ[n_A_JOB][i+1]] += 1;
	if(n_A_JOB == 0 && n_Tensei){
		for(var i=0;JobBOBJ[34][i] <= n_A_JobLV && JobBOBJ[34][i] != "n";i+=2)
				w2[JobBOBJ[34][i+1]] += 1;
	}
	if(n_A_JobLV >= 70 && SkillSearch(309)){
		for(var i=0;i<6;i++)
			w2[i] += 10;
	}
	var wSPC_STR = w2[0];
	var wSPC_AGI = w2[1];
	var wSPC_VIT = w2[2];
	var wSPC_INT = w2[3];
	var wSPC_DEX = w2[4];
	var wSPC_LUK = w2[5];


	wSPCall = StPlusCalc2(7);
	wSPC_STR += StPlusCalc2(1) + wSPCall;
	wSPC_AGI += StPlusCalc2(2) + wSPCall;
	wSPC_VIT += StPlusCalc2(3) + wSPCall;
	wSPC_VIT += StPlusCalc2(213);
	wSPC_INT += StPlusCalc2(4) + wSPCall;
	wSPC_INT += StPlusCalc2(214);
	wSPC_DEX += StPlusCalc2(5) + wSPCall;
	wSPC_LUK += StPlusCalc2(6) + wSPCall;

	wSPC_DEX += SkillSearch(38);
	if(SkillSearch(68))
		wSPC_STR += 4;
	wSPC_STR += SkillSearch(146);
	wSPC_STR += SkillSearch(404);
	wSPC_INT += SkillSearch(404);
	if(SkillSearch(234))
		wSPC_INT += Math.round(SkillSearch(234) /2);
	if(SkillSearch(286)){
		if(SkillSearch(286)==5)wSPC_STR +=16;
		if(SkillSearch(286)==4)wSPC_STR +=8;
		if(SkillSearch(286)==3)wSPC_STR +=4;
		if(SkillSearch(286)==2)wSPC_STR +=2;
		if(SkillSearch(286)==1)wSPC_STR +=1;
	}

	var w = SkillSearch(42);
	if(w){
		w += 102;
		wSPC_DEX = Math.floor((n_A_DEX + wSPC_DEX) * w / 100) - n_A_DEX;
		wSPC_AGI = Math.floor((n_A_AGI + wSPC_AGI) * w / 100) - n_A_AGI;
	}else if(n_A_PassSkill6[3]){
		wSPC_DEX = Math.floor((n_A_DEX + wSPC_DEX) * (102 + n_A_PassSkill6[3]) / 100) - n_A_DEX;
		wSPC_AGI = Math.floor((n_A_AGI + wSPC_AGI) * (102 + n_A_PassSkill6[3]) / 100) - n_A_AGI;
	}else if(TimeItemNumSearch(31)){
		wSPC_DEX = Math.floor((n_A_DEX + wSPC_DEX) * 104 / 100) - n_A_DEX;
		wSPC_AGI = Math.floor((n_A_AGI + wSPC_AGI) * 104 / 100) - n_A_AGI;
	}else if(TimeItemNumSearch(4)){
		wSPC_DEX = Math.floor((n_A_DEX + wSPC_DEX) * 103 / 100) - n_A_DEX;
		wSPC_AGI = Math.floor((n_A_AGI + wSPC_AGI) * 103 / 100) - n_A_AGI;
	}
	if(SkillSearch(422)){

		wSPC_DEX += 4;
		wSPC_AGI += 4;
	}

	wSPC_AGI += StPlusCalc2(212);
	wSPC_DEX += StPlusCalc2(215);
	if(n_A_JobSearch()==41 && EquipNumSearch(672))
		wSPC_AGI += 1;
	if(n_A_JobSearch()==41 && EquipNumSearch(673))
		wSPC_INT += 1;
	if(n_A_JobSearch()==41 && EquipNumSearch(675))
		wSPC_LUK += 2;
	if(n_A_JobSearch()==41 && EquipNumSearch(676))
		wSPC_DEX += 2;
	if(n_A_JobSearch()==41 && EquipNumSearch(678))
		wSPC_LUK += 1;
	if(n_A_SHOES_DEF_PLUS >= 9 && EquipNumSearch(717))
		wSPC_AGI += 2;
	if(n_A_HEAD_DEF_PLUS >= 5 && EquipNumSearch(1069))
		wSPC_LUK += (n_A_HEAD_DEF_PLUS - 4);
	if(n_A_Weapon_ATKplus >= 6 && EquipNumSearch(1168))
		wSPC_INT += (n_A_Weapon_ATKplus - 5);
	if(EquipNumSearch(1171) && SkillSearch(234) == 5)
		wSPC_INT += 3;
	if(EquipNumSearch(1172))
		wSPC_INT += Math.floor(n_A_Weapon_ATKplus / 2);
	if(n_A_Equip[0]==1078 || n_A_Equip[0]==1079){
		wSPC_INT += (n_A_Weapon_ATKplus -5);
		if(n_A_Equip[0]==1078)
			if(n_A_Weapon_ATKplus >= 9)
				wSPC_INT += 5;
		if(n_A_Equip[0]==1079)
			if(n_A_Weapon_ATKplus >= 10)
				wSPC_INT += 5;
	}
	if(n_A_Equip[1]==1078 || n_A_Equip[1]==1079){
		wSPC_INT += (n_A_Weapon2_ATKplus -5);
		if(n_A_Equip[1]==1078)
			if(n_A_Weapon2_ATKplus >= 9)
				wSPC_INT += 5;
		if(n_A_Equip[1]==1079)
			if(n_A_Weapon2_ATKplus >= 10)
				wSPC_INT += 3;
	}
	if(EquipNumSearch(649))
		wSPC_DEX -= SU_DEX;

	if(n_A_WeaponType==9)
		wSPC_INT += CardNumSearch(466);

	wSPCall = StPlusCard(7);
	//custom TalonRO pet Pinguicula + Poring Cake Hat combo
	if(n_A_PassSkill8[0]==57 && EquipNumSearch(1059))
		wSPCall += 1;

	//[Custom TalonRO - 6/4/2018 - Pet Pandaring + Panda Hat combo] [Kato]
	if(n_A_PassSkill8[0]==101 && EquipNumSearch(202))
		wSPC_INT += 4;

	//[Custom TalonRO - 6/4/2018 - Pet Galapago + Galapago Hat combo] [Kato]
	if(n_A_PassSkill8[0]==93 && EquipNumSearch(502))
		wSPC_LUK += 4;

	//[Custom TalonRO - 6/4/2018 - Pet Jejeling + Baseball Cap combo] [Kato]
	if(n_A_PassSkill8[0]==119 && EquipNumSearch(787))
		wSPC_DEX += 4;

	//[Custom TalonRO - 6/4/2018 - Pet Wild Rider  + Drooping Cat combo] [Kato]
	if(n_A_PassSkill8[0]==131 && EquipNumSearch(355))
		wSPC_DEX += 3;

	//custom TalonRO Gentlemen Fez, Refine Rate 8-10 +1dex, Refine Rate 10 +1dex
	if (EquipNumSearch(1531)){
		if (n_A_HEAD_DEF_PLUS >= 8)
			wSPC_DEX += 1;
		if (n_A_HEAD_DEF_PLUS == 10)
			wSPC_DEX += 1;
	}

	//custom TalonRo Improved Mage Hat: Every Refine level 7 or higher adds INT + 1 - [Loa] - 2018-06-07
	if(EquipNumSearch(1645) && n_A_HEAD_DEF_PLUS > 6){
		wSPC_INT += n_A_HEAD_DEF_PLUS - 6;
	}

	//custom TalonRo Improved Magician Hat: Every Refine level 7 or higher adds DEX + 1 - [Loa] - 2018-06-07
	if(EquipNumSearch(1646) && n_A_HEAD_DEF_PLUS > 6){
		wSPC_DEX += n_A_HEAD_DEF_PLUS - 6;
	}

	//Custom TalonRO - 2018-06-07 - Enhanced Helm of Angel [1] - AGI & LUK Part [Nattwara]
	/*
	[Refine Rate 5+]
	AGI + 1, LUK + 1, MDEF + 1
	[Refine Rate 6+]
	AGI + 1, LUK + 1, MDEF + 1
	*/
	if(EquipNumSearch(1655)){
		if(n_A_HEAD_DEF_PLUS>4){
			wSPC_AGI += 1;
			wSPC_LUK += 1;
		}
		if(n_A_HEAD_DEF_PLUS>5){
			wSPC_AGI += 1;
			wSPC_LUK += 1;
		}
	}

	wSPC_STR += StPlusCard(1) + wSPCall;
	wSPC_AGI += StPlusCard(2) + wSPCall;
	wSPC_VIT += StPlusCard(3) + wSPCall;
	wSPC_INT += StPlusCard(4) + wSPCall;
	wSPC_DEX += StPlusCard(5) + wSPCall;
	wSPC_LUK += StPlusCard(6) + wSPCall;

	if(n_A_JobSearch()==3)
		wSPC_INT += CardNumSearch(383);
	if(CardNumSearch(173))wSPC_INT += n_A_LEFT_DEF_PLUS;
	if(CardNumSearch(402))wSPC_LUK += n_A_SHOULDER_DEF_PLUS;
	if(CardNumSearch(406))wSPC_AGI += n_A_SHOES_DEF_PLUS;
	if(CardNumSearch(198))wSPC_VIT += n_A_BODY_DEF_PLUS;
	if(n_A_card[8] == 180)wSPC_STR += n_A_HEAD_DEF_PLUS;
	//zodiac hats
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1272)){wSPC_VIT += 1;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1273)){wSPC_VIT += 1;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1277)){n_tok[91] += 3;n_tok[94] += 3;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1279)){wSPC_INT += 2;}
	if(n_A_HEAD_DEF_PLUS >= 9 && EquipNumSearch(1279)){n_tok[91] += 4;n_tok[94] += 4;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1280)){n_tok[64] += 5;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1281)){n_tok[64] += 5;}
	if(n_A_HEAD_DEF_PLUS >= 8 && EquipNumSearch(1288)){wSPC_AGI += 2;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1291)){wSPC_DEX += 1;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1292)){wSPC_DEX += 1;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1293)){wSPC_DEX += 1;}
	if(n_A_HEAD_DEF_PLUS >= 7 && EquipNumSearch(1294)){n_tok[62] += 5;}

	//custom TalonRO Giant Shield +5% resistance against Large sized monster if refined +9-10
	if(n_A_LEFT_DEF_PLUS >= 9 && EquipNumSearch(1500))
		n_tok[192] +=5;

	if(CardNumSearch(185))wSPC_VIT += Math.floor(SU_DEX /18);
	if(CardNumSearch(187))wSPC_STR += Math.floor(SU_INT /18);
	if(CardNumSearch(189))wSPC_LUK += Math.floor(SU_AGI /18);
	if(CardNumSearch(191))wSPC_AGI += Math.floor(SU_LUK /18);
	if(CardNumSearch(196))wSPC_INT += Math.floor(SU_STR /18);
	if(CardNumSearch(197))wSPC_DEX += Math.floor(SU_VIT /18);

	//custom TalonRO Gryphon Card
	if(CardNumSearch(277))wSPC_LUK += Math.floor(SU_STR /11)*2*CardNumSearch(277);

	//custom TalonRO SQI Bonus Eversong Greaves: [Taekwon Master] +15 LUK
	if(EquipNumSearch(1383))
		for(i=0;i<SQI_Bonus_Effect.length;i++)
			if(SQI_Bonus_Effect[i]==74) {
				//alert(n_A_JOB+","+n_A_JobSearch());
				if(n_A_JOB==42)
					wSPC_LUK += 15;
				break;
			}
	//custom TalonRO SQI Bonus Eversong Greaves: [Taekwon Master] +10 DEX
	if(EquipNumSearch(1383))
		for(i=0;i<SQI_Bonus_Effect.length;i++)
			if(SQI_Bonus_Effect[i]==75) {
				//alert(n_A_JOB+","+n_A_JobSearch());
				if(n_A_JOB==42)
					wSPC_DEX += 10;
				break;
			}
	//custom King Poring Hat
	if(EquipNumSearch(1444)){
		wSPC_DEX += Math.floor(n_A_HEAD_DEF_PLUS/3);
		wSPC_LUK += Math.floor(n_A_HEAD_DEF_PLUS/3);
	}
	//custom TalonRO Meginjard
	if(EquipNumSearch(348))
		if((n_A_JOB!=8) && (n_A_JOB!=22))wSPC_STR +=30*EquipNumSearch(348);;
	//alert(n_A_JOB+","+n_A_JobSearch());
	//custom TalonRO Dolomedes Card
	if(CardNumSearch(514))
		if(n_A_JobSearch()==4)
			wSPC_DEX += Math.floor(n_A_HEAD_DEF_PLUS /3);
		else
			wSPC_INT += Math.floor(n_A_HEAD_DEF_PLUS /3);
	//custom TalonRO Cendrawasih Card
	if(CardNumSearch(517))
		if(n_A_JobSearch()==5)
			wSPC_INT += Math.floor(n_A_HEAD_DEF_PLUS /3);
	//custom TalonRO King Dramoh
	if(CardNumSearch(527))
		if(n_A_JobSearch()==1)
			wSPC_STR += Math.floor(n_A_HEAD_DEF_PLUS /3);

	//Tarou+Cramp Combo
	if(n_A_card[14] == 98 && CardNumSearch(273)){wSPC_STR += 3;}
	if(n_A_card[15] == 98 && CardNumSearch(273)){wSPC_STR += 3;}
	if(n_A_card[14] == 98 && n_A_card[15] == 98 && CardNumSearch(273) == 1){wSPC_STR -= 3;}
	//Orc Hero Headdress [For Every 4 Refines] STR + 1 - [Loa] - 2018-07-03
	if(EquipNumSearch(1142)){
		wSPC_STR += Math.floor(n_A_HEAD_DEF_PLUS/4);
	}
	//Phoenix Crown
	if(EquipNumSearch(872)){
		n_tok[77] += n_A_HEAD_DEF_PLUS;}
	//custom TalonRO Bakonawa Scale Armor
	if(EquipNumSearch(1541) || EquipNumSearch(1015)){
		n_tok[77] += Math.floor(n_A_BODY_DEF_PLUS /2);
	}
	//custom TalonRO Kalasag
	if(EquipNumSearch(1543) || EquipNumSearch(1013)){
		n_tok[77] += Math.floor(n_A_LEFT_DEF_PLUS /3);
	}
	if(EquipNumSearch(1268))wSPC_INT += Math.floor(SU_INT/24);

	if(CardNumSearch(405)){
		if(n_A_JobSearch()==1 || n_A_JobSearch()==2 || n_A_JobSearch()==6)
			wSPC_STR += 2;
		if(n_A_JobSearch()==3 || n_A_JobSearch()==4 || n_A_JobSearch()==5)
			wSPC_INT += 2;
	}

	wSPC_STR += n_A_PassSkill2[0];
	wSPC_INT += n_A_PassSkill2[0];
	wSPC_DEX += n_A_PassSkill2[0];
	//custom TalonRO Guarana Candy Agi Increase Level 10 (n_A_IJYOU[0]=Quagmire, n_A_IJYOU[1]=Agi Decrease)
	//if(n_A_PassSkill2[1] > 0 && n_A_IJYOU[0] == 0 && n_A_IJYOU[1] == 0)
	if(n_A_PassSkill2[1] > 0 || n_A_PassSkill8[28] && n_A_IJYOU[0] == 0 && n_A_IJYOU[1] == 0)
		if(n_A_PassSkill8[28])
			wSPC_AGI += 12;
		else
			wSPC_AGI += n_A_PassSkill2[1] +2;

	wSPC_LUK += (n_A_PassSkill2[3] * 30);
	if(n_A_JOB == 24 && SkillSearch(270))
	{
		wSPC_STR += 5;
		wSPC_AGI += 5;
		wSPC_VIT += 5;
		wSPC_DEX += 5;
		wSPC_INT += 5;
		wSPC_LUK += 5;
	}

	if(SkillSearch(379) && n_A_WeaponType==0)
		wSPC_STR += 10;

	if(n_A_PassSkill3[40]){
		wSPC_STR += 5;
		wSPC_DEX += 5;
		wSPC_INT += 5;
	}
	wSPC_STR += n_A_PassSkill3[41];
	wSPC_VIT += n_A_PassSkill3[42];
	wSPC_AGI += n_A_PassSkill3[43];
	wSPC_DEX += n_A_PassSkill3[44];

	if(n_A_PassSkill5[0]){
		wSPC_STR += 20;
		wSPC_AGI += 20;
		wSPC_VIT += 20;
		wSPC_DEX += 20;
		wSPC_INT += 20;
		wSPC_LUK += 20;
	}

	if(n_A_PassSkill6[2] == 1){
		wSPC_STR += 3;
		wSPC_AGI += 3;
		wSPC_VIT += 3;
		wSPC_DEX += 3;
		wSPC_INT += 3;
		wSPC_LUK += 3;
	}
	if(n_A_PassSkill6[2] == 2){
		wSPC_STR += 5;
		wSPC_AGI += 5;
		wSPC_VIT += 5;
		wSPC_DEX += 5;
		wSPC_INT += 5;
		wSPC_LUK += 5;
	}
	if(n_A_PassSkill8[4]){
		wSPC_STR += 1;
		wSPC_AGI += 1;
		wSPC_VIT += 1;
		wSPC_DEX += 1;
		wSPC_INT += 1;
		wSPC_LUK += 1;
	}
	if(SkillSearch(310)){
		wSPC_STR -= 1;
		wSPC_AGI -= 1;
		wSPC_VIT -= 1;
		wSPC_DEX -= 1;
		wSPC_INT -= 1;
		wSPC_LUK -= 1;
	}

	if(n_A_PassSkill7[3])
		wSPC_STR += n_A_PassSkill7[3];
	if(n_A_PassSkill7[4])
		wSPC_AGI += n_A_PassSkill7[4];
	if(n_A_PassSkill7[5])
		wSPC_VIT += n_A_PassSkill7[5];
	if(n_A_PassSkill7[6])
		wSPC_INT += n_A_PassSkill7[6];
	if(n_A_PassSkill7[7])
		wSPC_DEX += n_A_PassSkill7[7];
	if(n_A_PassSkill7[8])
		wSPC_LUK += n_A_PassSkill7[8];

	var wHSE = eval(document.calcForm.A_HSE.value);
	if(wHSE){
		var w = wHSE % 10;
		if(1 <= wHSE && wHSE <= 9)
			wSPC_STR += w;
		if(11 <= wHSE && wHSE <= 19)
			wSPC_AGI += w;
		if(21 <= wHSE && wHSE <= 29)
			wSPC_VIT += w;
		if(31 <= wHSE && wHSE <= 39)
			wSPC_INT += w;
		if(41 <= wHSE && wHSE <= 49)
			wSPC_DEX += w;
		if(51 <= wHSE && wHSE <= 59)
			wSPC_LUK += w;
	}
	//custom TalonRO Kris enchant stats
	var KEbonus = [document.calcForm.A_KE11.value,document.calcForm.A_KE12.value,document.calcForm.A_KE21.value,document.calcForm.A_KE22.value];
	for (i=0;i<4;i++){
		var wKE = KEbonus[i];
		if(wKE){
			var w = wKE % 10;
			if(41 <= wKE && wKE <= 49)
				wSPC_VIT += w;
			if(51 <= wKE && wKE <= 59)
				wSPC_INT += w;
			if(61 <= wKE && wKE <= 69)
				wSPC_DEX += w;
			if(71 <= wKE && wKE <= 79)
				wSPC_LUK += w;
		}
	}
	//[Custom TalonRO 2018-06-15 - Malangdo Enchantment for STR/AGI/VIT/INT/DEX/LUK] [Kato]
	for(i=0; i < tRO_MalangdoEnchantment.length; i++) {
		var vME = tRO_MalangdoEnchantment[i];

		if(vME == 0 || vME.length > 2) continue;

		var op = vME.substr(0,1);
		var val = parseInt(vME.substr(-1));

		switch(op) {
				case '1': wSPC_STR += val; break;
				case '2': wSPC_AGI += val; break;
				case '3': wSPC_VIT += val; break;
				case '4': wSPC_INT += val; break;
				case '5': wSPC_DEX += val; break;
				case '6': wSPC_LUK += val; break;
		}
	}


	/*var wHSE2 = eval(document.calcForm.A_HSE_HEAD1.value);
	if(wHSE2){
		var w = wHSE2 % 10;
		if(1 <= wHSE2 && wHSE2 <= 9)
			wSPC_STR += w;
		if(11 <= wHSE2 && wHSE2 <= 19)
			wSPC_AGI += w;
		if(21 <= wHSE2 && wHSE2 <= 29)
			wSPC_VIT += w;
		if(31 <= wHSE2 && wHSE2 <= 39)
			wSPC_INT += w;
		if(41 <= wHSE2 && wHSE2 <= 49)
			wSPC_DEX += w;
		if(51 <= wHSE2 && wHSE2 <= 59)
			wSPC_LUK += w;
	}
	if(Math.floor(wHSE / 10) == Math.floor(wHSE2 / 10)){
		var w1 = wHSE % 10;
		var w2 = wHSE2 % 10;
		if(w1 > w2)
			w1 = w2;
		if(1 <= wHSE && wHSE <= 9)
			wSPC_STR -= w1;
		if(11 <= wHSE && wHSE <= 19)
			wSPC_AGI -= w1;
		if(21 <= wHSE && wHSE <= 29)
			wSPC_VIT -= w1;
		if(31 <= wHSE && wHSE <= 39)
			wSPC_INT -= w1;
		if(41 <= wHSE && wHSE <= 49)
			wSPC_DEX -= w1;
		if(51 <= wHSE && wHSE <= 59)
			wSPC_LUK -= w1;
	}*/
	//E lá se foi todo o headgear calc e etc...
	if(n_A_PassSkill8[17]){
		 if(n_Tensei && 1<= n_A_JOB && n_A_JOB <= 6 && n_A_BaseLV < 70){
			if(n_A_STR + wSPC_STR <= 50)
					wSPC_STR = 50 - n_A_STR;
			if(n_A_AGI + wSPC_AGI <= 50)
					wSPC_AGI = 50 - n_A_AGI;
			if(n_A_VIT + wSPC_VIT <= 50)
					wSPC_VIT = 50 - n_A_VIT;
			if(n_A_INT + wSPC_INT <= 50)
					wSPC_INT = 50 - n_A_INT;
			if(n_A_DEX + wSPC_DEX <= 50)
					wSPC_DEX = 50 - n_A_DEX;
			if(n_A_LUK + wSPC_LUK <= 50)
					wSPC_LUK = 50 - n_A_LUK;
		}
	}

	if(n_A_PassSkill3[11] && n_A_PassSkill3[18]==0){
		if(n_A_STR + wSPC_STR < 99){
			if(n_A_STR + wSPC_STR + Math.floor(n_A_PassSkill3[12]/2) < 99)
				wSPC_STR += Math.floor(n_A_PassSkill3[12]/2);
			else
				wSPC_STR = (99 - n_A_STR);
		}
		if(n_A_AGI + wSPC_AGI < 99){
			if(n_A_AGI + wSPC_AGI + Math.floor(n_A_PassSkill3[13]/2) < 99)
				wSPC_AGI += Math.floor(n_A_PassSkill3[13]/2);
			else
				wSPC_AGI = (99 - n_A_AGI);
		}
		if(n_A_VIT + wSPC_VIT < 99){
			if(n_A_VIT + wSPC_VIT + Math.floor(n_A_PassSkill3[14]/2) < 99)
				wSPC_VIT += Math.floor(n_A_PassSkill3[14]/2);
			else
				wSPC_VIT = (99 - n_A_VIT);
		}
		if(n_A_INT + wSPC_INT < 99){
			if(n_A_INT + wSPC_INT + Math.floor(n_A_PassSkill3[15]/2) < 99)
				wSPC_INT += Math.floor(n_A_PassSkill3[15]/2);
			else
				wSPC_INT = (99 - n_A_INT);
		}
		if(n_A_DEX + wSPC_DEX < 99){
			if(n_A_DEX + wSPC_DEX + Math.floor(n_A_PassSkill3[16]/2) < 99)
				wSPC_DEX += Math.floor(n_A_PassSkill3[16]/2);
			else
				wSPC_DEX = (99 - n_A_DEX);
		}
		if(n_A_LUK + wSPC_LUK < 99){
			if(n_A_LUK + wSPC_LUK + Math.floor(n_A_PassSkill3[17]/2) < 99)
				wSPC_LUK += Math.floor(n_A_PassSkill3[17]/2);
			else
				wSPC_LUK = (99 - n_A_LUK);
		}

	//Marionette stat compensation rework - [Loa] - 2018-06-17
	}else if(n_A_PassSkill3[11] && n_A_PassSkill3[18]){
			if(n_A_STR + w2[0] + Math.floor(n_A_PassSkill3[12]/2) < 99){
				wSPC_STR += Math.floor(n_A_PassSkill3[12]/2);
			}
			else{
				wSPC_STR += Math.max((99 - n_A_STR - w2[0]), 0);
			}
			if(n_A_AGI + w2[1] + Math.floor(n_A_PassSkill3[13]/2) < 99){
				wSPC_AGI += Math.floor(n_A_PassSkill3[13]/2);
			}
			else{
				wSPC_AGI += Math.max((99 - n_A_AGI - w2[1]), 0);
			}
			if(n_A_VIT + w2[2] + Math.floor(n_A_PassSkill3[14]/2) < 99){
				wSPC_VIT += Math.floor(n_A_PassSkill3[14]/2);
			}
			else{
				wSPC_VIT += Math.max((99 - n_A_VIT - w2[2]), 0);
			}
			if(n_A_INT + w2[3] + Math.floor(n_A_PassSkill3[15]/2) < 99){
				wSPC_INT += Math.floor(n_A_PassSkill3[15]/2);
			}
			else{
				wSPC_INT += Math.max((99 - n_A_INT - w2[3]), 0);
			}
			if(n_A_DEX + w2[4] + Math.floor(n_A_PassSkill3[16]/2) < 99){
				wSPC_DEX += Math.floor(n_A_PassSkill3[16]/2);
			}
			else{
				wSPC_DEX += Math.max((99 - n_A_DEX - w2[4]), 0);
			}
			if(n_A_LUK + w2[5] + Math.floor(n_A_PassSkill3[17]/2) < 99){
				wSPC_LUK += Math.floor(n_A_PassSkill3[17]/2);
			}
			else{
				wSPC_LUK += Math.max((99 - n_A_LUK - w2[5]), 0);
			}
	}

	//CUSTOM (1st Transcendent Spirit)
	if(SkillSearch(392) && (n_Tensei == 1) && (n_A_BaseLV > 10) && (n_A_BaseLV < 70)){
	//alert("wSPC_STR:"+wSPC_STR+"\nn_A_STR:"+n_A_STR+"\nSU_STR:"+SU_STR);
		var linkboni = n_A_BaseLV - 10;
		//custom TALONRO fix
		//new:
		if (n_A_STR+wSPC_STR < 51 && n_A_STR+wSPC_STR < linkboni && linkboni < 51)
			wSPC_STR +=linkboni-(n_A_STR+wSPC_STR);
		else if (n_A_STR+wSPC_STR < 51 && linkboni > 50)
			wSPC_STR += 50 - (n_A_STR+wSPC_STR);
		if (n_A_AGI+wSPC_AGI < 51 && n_A_AGI+wSPC_AGI < linkboni && linkboni < 51)
			wSPC_AGI +=linkboni-(n_A_AGI+wSPC_AGI);
		else if (n_A_AGI+wSPC_AGI < 51 && linkboni > 50)
			wSPC_AGI += 50 - (n_A_AGI+wSPC_AGI);
		if (n_A_VIT+wSPC_VIT < 51 && n_A_VIT+wSPC_VIT < linkboni && linkboni < 51)
			wSPC_VIT +=linkboni-(n_A_VIT+wSPC_VIT);
		else if (n_A_VIT+wSPC_VIT < 51 && linkboni > 50)
			wSPC_VIT += 50 - (n_A_VIT+wSPC_VIT);
		if (n_A_INT+wSPC_INT < 51 && n_A_INT+wSPC_INT < linkboni && linkboni < 51)
			wSPC_INT +=linkboni-(n_A_INT+wSPC_INT);
		else if (n_A_INT+wSPC_INT < 51 && linkboni > 50)
			wSPC_INT += 50 - (n_A_INT+wSPC_INT);
		if (n_A_DEX+wSPC_DEX < 51 && n_A_DEX+wSPC_DEX < linkboni && linkboni < 51)
			wSPC_DEX +=linkboni-(n_A_DEX+wSPC_DEX);
		else if (n_A_DEX+wSPC_DEX < 51 && linkboni > 50)
			wSPC_DEX += 50 - (n_A_DEX+wSPC_DEX);
		if (n_A_LUK+wSPC_LUK < 51 && n_A_LUK+wSPC_LUK < linkboni && linkboni < 51)
			wSPC_LUK +=linkboni-(n_A_LUK+wSPC_LUK);
		else if (n_A_LUK+wSPC_LUK < 51 && linkboni > 50)
			wSPC_LUK += 50 - (n_A_LUK+wSPC_LUK);
		//old:
		/*if(wSPC_STR > 50);
		else if((wSPC_STR + linkboni) > 50)
			wSPC_STR = 50;
		else
			wSPC_STR += linkboni;
		if(wSPC_AGI > 50);
		else if((wSPC_AGI + linkboni) > 50)
			wSPC_AGI = 50;
		else
			wSPC_AGI += linkboni;
		if(wSPC_VIT > 50);
		else if((wSPC_VIT + linkboni) > 50)
			wSPC_VIT = 50;
		else
			wSPC_VIT += linkboni;
		if(wSPC_INT > 50);
		else if((wSPC_INT + linkboni) > 50)
			wSPC_INT = 50;
		else
			wSPC_INT += linkboni;
		if(wSPC_DEX > 50);
		else if((wSPC_DEX + linkboni) > 50)
			wSPC_DEX = 50;
		else
			wSPC_DEX += linkboni;
		if(wSPC_LUK > 50);
		else if((wSPC_LUK + linkboni) > 50)
			wSPC_LUK = 50;
		else
			wSPC_LUK += linkboni;*/
		//end fix
	}
	//END CUSTOM

	if(n_A_IJYOU[0]){
		var w1 = Math.floor((n_A_AGI + wSPC_AGI) / 2);
		var w2;
		if(Taijin)
			w2 = 5 * n_A_IJYOU[0];
		else
			w2 = 10 * n_A_IJYOU[0];
		if(w1 > w2)
			wSPC_AGI -= w2;
		else
			wSPC_AGI -= w1;
		w1 = Math.floor((n_A_DEX + wSPC_DEX) / 2);
		if(w1 > w2)
			wSPC_DEX -= w2;
		else
			wSPC_DEX -= w1;
	}
	if(n_A_IJYOU[1])
		wSPC_AGI -= (n_A_IJYOU[1] + 2);
	if(n_A_IJYOU[3])
		wSPC_LUK = -1 * n_A_LUK;

		//[Custom TalonRO - 2018-06-05 - Siorava gives LUK+3 * refine for Merchant and Above Classes] [Kato]
		if(CardNumSearch(535) && n_A_HEAD_DEF_PLUS > 3 && (n_A_JobSearch() == 6 || n_A_JobSearch() == 12 || n_A_JobSearch() == 26 || n_A_JobSearch() == 19 || n_A_JobSearch() == 33)) {
			wSPC_LUK += Math.floor(n_A_HEAD_DEF_PLUS/3) * 1;
		}

	n_A_STR += wSPC_STR;
	n_A_AGI += wSPC_AGI;
	n_A_VIT += wSPC_VIT;
	n_A_INT += wSPC_INT;
	n_A_DEX += wSPC_DEX;
	n_A_LUK += wSPC_LUK;

	if(wSPC_STR >= 0)
		myInnerHtml("A_STRp","+"+wSPC_STR,0);
	else
		myInnerHtml("A_STRp",wSPC_STR,0);
	if(wSPC_AGI >= 0)
		myInnerHtml("A_AGIp","+"+wSPC_AGI,0);
	else
		myInnerHtml("A_AGIp",wSPC_AGI,0);
	if(wSPC_VIT >= 0)
		myInnerHtml("A_VITp","+"+wSPC_VIT,0);
	else
		myInnerHtml("A_VITp",wSPC_VIT,0);
	if(wSPC_INT >= 0)
		myInnerHtml("A_INTp","+"+wSPC_INT,0);
	else
		myInnerHtml("A_INTp",wSPC_INT,0);
	if(wSPC_DEX >= 0)
		myInnerHtml("A_DEXp","+"+wSPC_DEX,0);
	else
		myInnerHtml("A_DEXp",wSPC_DEX,0);
	if(wSPC_LUK >= 0)
		myInnerHtml("A_LUKp","+"+wSPC_LUK,0);
	else
		myInnerHtml("A_LUKp",wSPC_LUK,0);
}

function StPlusCalc2(nSTP2)
{
	var w=0;
	for(var i=0;i<=20;i++)
	{
		for(var j=0;ItemOBJ[n_A_Equip[i]][j +11] != 0;j += 2)
		{
			if(nSTP2 == ItemOBJ[n_A_Equip[i]][j +11])
				w += ItemOBJ[n_A_Equip[i]][j +12];
		}
	}
	return w;
}

function StPlusCard(nSTP2)
{
	var w=0;
	for(var i=0;i<=25;i++)
	{
		for(var j=0;cardOBJ[n_A_card[i]][j +4] != 0;j += 2)
		{
			if(nSTP2 == cardOBJ[n_A_card[i]][j +4])
				w += cardOBJ[n_A_card[i]][j +5];
		}
	}


	for(var j=0;PET_OBJ[n_A_PassSkill8[0]][j +3] != 0;j += 2)
	{
		if(nSTP2 == PET_OBJ[n_A_PassSkill8[0]][j +3])
			w += PET_OBJ[n_A_PassSkill8[0]][j +4];
	}

	var w_num = [0,0,0,0];
	for(i=0;i<=3;i++)
		w_num[i] = n_A_PassSkill8[8+i];
	for(i=0;i<=2;i++)
		for(j=i+1;j<=3;j++)
			if(w_num[i] == w_num[j])
				w_num[j] = 0;
	for(i=0;i<=3;i++)
	{
		for(var j=0;ITEM_SP_TIME_OBJ[w_num[i]][5 + j] != 0;j += 2)
		{
			if(nSTP2 == ITEM_SP_TIME_OBJ[w_num[i]][5 + j])
				w += ITEM_SP_TIME_OBJ[w_num[i]][6 + j];
		}
	}

	//custom TalonRO SQI-Bonus calculation
	var w_sqi_num = [0,0,0,0,0,0,0,0];
	for(i=0;i<SQI_Bonus_Effect.length;i++)
		w_sqi_num[i] = SQI_Bonus_Effect[i];
	for(i=0;i<SQI_Bonus_Effect.length-1;i++)
		for(j=i+1;j<SQI_Bonus_Effect.length;j++)
			if(w_sqi_num[i] == w_sqi_num[j])
				w_sqi_num[j] = 0;
	for(i=0;i<SQI_Bonus_Effect.length;i++)
	{
		for(var j=0;SQI_BONUS[w_sqi_num[i]][4 + j] != 0;j += 2)
		{
			if(EquipNumSearch(SQI_BONUS[w_sqi_num[i]][1]))
				if(nSTP2 == SQI_BONUS[w_sqi_num[i]][4 + j])
						w += SQI_BONUS[w_sqi_num[i]][5 + j];
		}
	}
	//end custom TalonRO SQI-Bonus calculation

	//custom TalonRO Skill9 calcs
	for(i=0;i<8;i+=2)
		if(nSTP2==n_A_PassSkill9[i]+30)
			w += n_A_PassSkill9[i+1];
	for(i=8;i<16;i+=2)
		if(nSTP2==n_A_PassSkill9[i]+40)
			w += n_A_PassSkill9[i+1];
	for(i=16;i<22;i+=2)
		if(nSTP2==n_A_PassSkill9[i]+27)
			w += n_A_PassSkill9[i+1];
	for(i=22;i<30;i+=2)
		if(nSTP2==n_A_PassSkill9[i]+81 && n_A_PassSkill9[i]<=3)
			w += n_A_PassSkill9[i+1];
		else if((nSTP2==1063 || nSTP2==1064 || nSTP2==1065 || nSTP2==1575 || nSTP2==1576) && n_A_PassSkill9[i]==4)
			w += n_A_PassSkill9[i+1];
		else if((nSTP2==1495 || nSTP2==1496) && n_A_PassSkill9[i]==5)
			w += n_A_PassSkill9[i+1];
	for(i=47;i<53;i++)
		if(nSTP2 == i-46)
			w += n_A_PassSkill9[i];
	if(nSTP2 == 13)
		w += n_A_PassSkill9[30];
	if(nSTP2 == 15)
		w += n_A_PassSkill9[31];
	if(nSTP2 == 14)
		w += n_A_PassSkill9[32];
	if(nSTP2 == 16)
		w += n_A_PassSkill9[33];
	if(nSTP2 == 18)
		w += n_A_PassSkill9[34];
	if(nSTP2 == 19)
		w += n_A_PassSkill9[35];
	if(nSTP2 == 8)
		w += n_A_PassSkill9[36];
	if(nSTP2 == 9)
		w += n_A_PassSkill9[37];
	if(nSTP2 == 11)
		w += n_A_PassSkill9[38];
	if(nSTP2 == 10)
		w += n_A_PassSkill9[39];
	if(nSTP2 == 17)
		w += n_A_PassSkill9[40];
	if(nSTP2 == 80)
		w += n_A_PassSkill9[41];
	if(nSTP2 == 89)
		w += n_A_PassSkill9[43];
	if(nSTP2 == 12)
		w += n_A_PassSkill9[44];
	if(nSTP2 == 75)
		w += n_A_PassSkill9[45];
	if(nSTP2 == 76)
		w += n_A_PassSkill9[46];
	//end custom TalonRO Skill9 calcs
	return w;
}

function sort(work)
{
	for(var i=1;work[i]!="EOF";i++){
		for(var k=i;k>0;k--){
			if(ItemOBJ[work[k-1]][8] > ItemOBJ[work[k]][8]){
				var work_backup = work[k-1];
				work[k-1] = work[k];
				work[k] = work_backup;
			}
		}
	}
	return work;
}

function WeaponSet()
{
	n_A_JobSet();
	n_A_WeaponType = eval(document.calcForm.A_WeaponType.value);
	var len = document.calcForm.A_weapon1.length;
	for(var i=0;i<len;i++)
		document.calcForm.A_weapon1.options[0] = null;

	work = new Array();
	j = 0;
	for (i=0;i<=ItemMax; i++){
		//check for vanilla mode
		if(eval(document.calcForm.vanilla.checked) && restrictedItems.includes(i)){
			continue;
		}
		else if(ItemOBJ[i][1] == n_A_WeaponType && (JobEquipItemSearch(ItemOBJ[i][2]) == 1 || debugMode == 1)){
			work[j] = i;
			j++;
		}
		//custom TalonRO fix showing lv 4 weapon on active Super Novice Link
		//old stuff showed much more than lv 4 weaps only, like Stunner (lv 3)
		else if(ItemOBJ[i][1] == n_A_WeaponType && JobEquipItemSearch(ItemOBJ[i][2]) == 0 && SuperNoviceFullWeaponCHECK && ItemOBJ[i][4] == 4){
			work[j] = i;
			j++;
		}
		//original:
		/*
		}else if(ItemOBJ[i][4] >= 1 && ItemOBJ[i][1] == n_A_WeaponType && SuperNoviceFullWeaponCHECK){
			if(ItemOBJ[i][1] == 1 && ItemOBJ[i][4] == 4){
				work[j] = i;
				j++;
			}
			if(ItemOBJ[i][1] == 2 || ItemOBJ[i][1] > 3){
				work[j] = i;
				j++;
			}
		}*/
	}
	work[j] = "EOF";

	work = sort(work);
	for (i=0;i<j; i++)
		document.calcForm.A_weapon1.options[i] = new Option(ItemOBJ[work[i]][8],ItemOBJ[work[i]][0]);

}

function WeaponSetLeft()
{
	n_A_JobSet();
	n_A_Weapon2Type = eval(document.calcForm.A_Weapon2Type.value);
	var len = document.calcForm.A_weapon2.length;
	for(var i=0;i<len;i++)
		document.calcForm.A_weapon2.options[0] = null;
	work = new Array();
	j = 0;
	for (i=0;i<=ItemMax; i++){
		//check for vanilla mode
		if(eval(document.calcForm.vanilla.checked) && restrictedItems.includes(i)){
			continue;
		}
		if(ItemOBJ[i][1] == n_A_Weapon2Type && JobEquipItemSearch(ItemOBJ[i][2]) == 1)
		{
			work[j] = i;
			j++;
		}
	}
	work[j] = "EOF";
	work = sort(work);
	for (i=0;i<j; i++)
		document.calcForm.A_weapon2.options[i] = new Option(ItemOBJ[work[i]][8],ItemOBJ[work[i]][0]);
}

function WeaponSet2(){
with(document.calcForm){
	n_A_JobSet();
	var len = A_head1.length;
	for(var i=0;i<len;i++)
		A_head1.options[0] = null;
	var len = A_head2.length;
	for(i=0;i<len;i++)
		A_head2.options[0] = null;
	var len = A_head3.length;
	for(i=0;i<len;i++)
		A_head3.options[0] = null;
	var len = A_left.length;
	for(i=0;i<len;i++)
		A_left.options[0] = null;
	var len = A_body.length;
	for(i=0;i<len;i++)
		A_body.options[0] = null;
	var len = A_shoulder.length;
	for(i=0;i<len;i++)
		A_shoulder.options[0] = null;
	var len = A_shoes.length;
	for(i=0;i<len;i++)
		A_shoes.options[0] = null;
	var len = A_acces1.length;
	for(i=0;i<len;i++){
		A_acces1.options[0] = null;
		A_acces2.options[0] = null;
	}
	if(first_check == 0){
		first_check = 1;
		A_head1.options[0] = new Option(ItemOBJ[142][8],ItemOBJ[142][0]);
		A_head2.options[0] = new Option(ItemOBJ[243][8],ItemOBJ[243][0]);
		A_head3.options[0] = new Option(ItemOBJ[268][8],ItemOBJ[268][0]);
		A_left.options[0] = new Option(ItemOBJ[305][8],ItemOBJ[305][0]);
		A_body.options[0] = new Option(ItemOBJ[279][8],ItemOBJ[279][0]);
		A_shoulder.options[0] = new Option(ItemOBJ[311][8],ItemOBJ[311][0]);
		A_shoes.options[0] = new Option(ItemOBJ[317][8],ItemOBJ[317][0]);
		A_acces1.options[0] = new Option(ItemOBJ[326][8],ItemOBJ[326][0]);
		A_acces2.options[0] = new Option(ItemOBJ[326][8],ItemOBJ[326][0]);
		return;
	}
	first_check = 2;

	var workB = new Array();
	for(i=0;i<=7;i++)
		workB[i] = new Array();
	var wsj = new Array();
	for(i=0;i<=7;i++)
		wsj[i]=0;
	for(i=0;i<=ItemMax; i++){
		//check for vanilla mode
		if(eval(document.calcForm.vanilla.checked) && restrictedItems.includes(i)){
			continue;
		}
		else if(ItemOBJ[i][1] == 50 && (JobEquipItemSearch(ItemOBJ[i][2]) == 1 || SuperNoviceFullWeaponCHECK || debugMode == 1)){
			workB[0][wsj[0]] = i;
			wsj[0]++;
		}
		else if(ItemOBJ[i][1] == 51 && (JobEquipItemSearch(ItemOBJ[i][2]) == 1 || SuperNoviceFullWeaponCHECK || debugMode == 1)){
			workB[1][wsj[1]] = i;
			wsj[1]++;
		}
		else if(ItemOBJ[i][1] == 52 && (JobEquipItemSearch(ItemOBJ[i][2]) == 1 || SuperNoviceFullWeaponCHECK || debugMode == 1)){
			workB[2][wsj[2]] = i;
			wsj[2]++;
		}
		else if(ItemOBJ[i][1] == 61 && (JobEquipItemSearch(ItemOBJ[i][2]) == 1 || debugMode == 1)){
			workB[3][wsj[3]] = i;
			wsj[3]++;
		}
		else if(ItemOBJ[i][1] == 60 && (JobEquipItemSearch(ItemOBJ[i][2]) == 1 || debugMode == 1)){
			workB[4][wsj[4]] = i;
			wsj[4]++;
		}
		else if(ItemOBJ[i][1] == 62 && (JobEquipItemSearch(ItemOBJ[i][2]) == 1 || debugMode == 1)){
			workB[5][wsj[5]] = i;
			wsj[5]++;
		}
		else if(ItemOBJ[i][1] == 63 && (JobEquipItemSearch(ItemOBJ[i][2]) == 1 || debugMode == 1)){
			workB[6][wsj[6]] = i;
			wsj[6]++;
		}
		else if(ItemOBJ[i][1] == 64 && (JobEquipItemSearch(ItemOBJ[i][2]) == 1 || debugMode == 1)){
			workB[7][wsj[7]] = i;
			wsj[7]++;
		}
	}
	for(i=0;i<=7;i++)
		workB[i][wsj[i]] = "EOF";

	for(var m=0;m<=7;m++)
		workB[m] = sort(workB[m]);

	var z = 0;
	//custom TalonRO so LKH appears as the first option on the Headgear list
	//old:
	for(i=0;i<wsj[0];i++){
		z = workB[0][i];
		A_head1.options[i] = new Option(ItemOBJ[z][8],ItemOBJ[z][0]);
	}
	//new:
	/*A_head1.options[0] = new Option(ItemOBJ[workB[0][0]][8],ItemOBJ[workB[0][0]][0]);
	A_head1.options[1] = new Option(ItemOBJ[444][8],ItemOBJ[444][0]);
	for(i=2;i<wsj[0];i++){
		z = workB[0][i-1];
		A_head1.options[i] = new Option(ItemOBJ[z][8],ItemOBJ[z][0]);
	}
	//last headgear, because the last one is ignored due to the changes above
	A_head1.options[wsj[0]] = new Option(ItemOBJ[workB[0][wsj[0]-1]][8],ItemOBJ[workB[0][wsj[0]-1]][0]);*/
	//end custom TalonRO LKH appearance
	for(i=0;i<wsj[1];i++){
		z = workB[1][i];
		A_head2.options[i] = new Option(ItemOBJ[z][8],ItemOBJ[z][0]);
	}
	for(i=0;i<wsj[2];i++){
		z = workB[2][i];
		A_head3.options[i] = new Option(ItemOBJ[z][8],ItemOBJ[z][0]);
	}
	for(i=0;i<wsj[3];i++){
		z = workB[3][i];
		A_left.options[i] = new Option(ItemOBJ[z][8],ItemOBJ[z][0]);
	}
	for(i=0;i<wsj[4];i++){
		z = workB[4][i];
		A_body.options[i] = new Option(ItemOBJ[z][8],ItemOBJ[z][0]);
	}
	for(i=0;i<wsj[5];i++){
		z = workB[5][i];
		A_shoulder.options[i] = new Option(ItemOBJ[z][8],ItemOBJ[z][0]);
	}
	for(i=0;i<wsj[6];i++){
		z = workB[6][i];
		A_shoes.options[i] = new Option(ItemOBJ[z][8],ItemOBJ[z][0]);
	}
	for(i=0;i<wsj[7];i++){
		z = workB[7][i];
		A_acces1.options[i] = new Option(ItemOBJ[z][8],ItemOBJ[z][0]);
		A_acces2.options[i] = new Option(ItemOBJ[z][8],ItemOBJ[z][0]);
	}
}}

function FirstNovis(){
	if(first_check == 1){
		first_check = 2;
		WeaponSet2();
	}
}

function JobEquipItemSearch(nJEIS)
{
	if(nJEIS >= 1000){
		if(n_Tensei == 1)
			nJEIS -= 1000;
		else
			return 0;
	}
	for(var j=0;JobEquipItemOBJ[n_A_JOB][j] != 999;j++)
	{
		if(JobEquipItemOBJ[n_A_JOB][j] == nJEIS)
			return 1;
	}
	return 0;
}

function n_A_JobSet()
{
	n_A_JOB = eval(document.calcForm.A_JOB.value);
	if(21 <= n_A_JOB && n_A_JOB <= 40){
		n_Tensei = 1;
		if(34 <= n_A_JOB && n_A_JOB <= 40)
			n_A_JOB -= 34;
	}else
		n_Tensei = 0;
}

function n_A_JobSearch(){
	if(n_A_JOB <= 6)
		return n_A_JOB;
	if(n_A_JOB == 20)
		return 0;
	if(n_A_JOB == 7 || n_A_JOB == 13 || n_A_JOB == 21 || n_A_JOB == 27)
		return 1;
	if(n_A_JOB == 8 || n_A_JOB == 14 || n_A_JOB == 22 || n_A_JOB == 28)
		return 2;
	if(n_A_JOB == 9 || n_A_JOB == 15 || n_A_JOB == 23 || n_A_JOB == 29)
		return 3;
	if(n_A_JOB == 10 || n_A_JOB == 16 || n_A_JOB == 17 || n_A_JOB == 24 || n_A_JOB == 30 || n_A_JOB == 31)
		return 4;
	if(n_A_JOB == 11 || n_A_JOB == 18 || n_A_JOB == 25 || n_A_JOB == 32)
		return 5;
	if(n_A_JOB == 12 || n_A_JOB == 19 || n_A_JOB == 26 || n_A_JOB == 33)
		return 6;
	if(n_A_JOB == 41 || n_A_JOB == 42 || n_A_JOB == 43)
		return 41;
	return 7;
}

function n_A_JobSearch2()
{
	if(n_A_JOB == 7 || n_A_JOB == 21)
		return 7;
	if(n_A_JOB == 8 || n_A_JOB == 22)
		return 8;
	if(n_A_JOB == 9 || n_A_JOB == 23)
		return 9;
	if(n_A_JOB == 10 || n_A_JOB == 24)
		return 10;
	if(n_A_JOB == 11 || n_A_JOB == 25)
		return 11;
	if(n_A_JOB == 12 || n_A_JOB == 26)
		return 12;
	if(n_A_JOB == 13 || n_A_JOB == 27)
		return 13;
	if(n_A_JOB == 14 || n_A_JOB == 28)
		return 14;
	if(n_A_JOB == 15 || n_A_JOB == 29)
		return 15;
	if(n_A_JOB == 16 || n_A_JOB == 30)
		return 16;
	if(n_A_JOB == 17 || n_A_JOB == 31)
		return 16;
	if(n_A_JOB == 18 || n_A_JOB == 32)
		return 18;
	if(n_A_JOB == 19 || n_A_JOB == 33)
		return 19;
	return 0;
}

function EquipNumSearch(nENS)
{
	var wENS=0;
	for(var ENSi=0;ENSi<=20;ENSi++)
	{
		if(nENS == n_A_Equip[ENSi])
			wENS += 1;
	}
	return wENS;
}

function CardNumSearch(nCNS)
{
	var wCNS=0;
	for(var CNSi=0;CNSi<=25;CNSi++)
	{
		if(nCNS == n_A_card[CNSi])
			wCNS += 1;
	}
	return wCNS;
}

function TimeItemNumSearch(n)
{
	var w=0;
	for(var i=0;i<=3;i++)
	{
		if(n == n_A_PassSkill8[8+i])
			w += 1;
	}
	return w;
}

function NumSearch(NS1,NS2){
	var end = NS2.length-1;
	for(var i=0;i<=end;i++){
		if(NS1 == NS2[i])
			return 1;
	}
	return 0;
}

w_ASSP9bk=new Array();
for(i=0;i<20;i++)
	w_ASSP9bk[i]=0;
function ActiveSkillSetPlus()
{
	w_ASSP0=new Array();
	w_ASSP9=new Array();
	for(i=0;i<20;i++){
		w_ASSP0[i]=999;
		w_ASSP9[i]=0;
	}

	j=0;
	for(i=0;i<=20;i++){
		for(j2=0;ItemOBJ[n_A_Equip[i]][11+j2] != 0;j2 += 2){
			if(ItemOBJ[n_A_Equip[i]][11+j2] == 220){
				if(InsertSkill[ItemOBJ[n_A_Equip[i]][12+j2]][1] == 1){
					w_ASSP0[j] = InsertSkill[ItemOBJ[n_A_Equip[i]][12+j2]][2];
					w_ASSP9[j] = InsertSkill[ItemOBJ[n_A_Equip[i]][12+j2]][0] + 3000;
					j++;
				}
			}else if(ItemOBJ[n_A_Equip[i]][11+j2] == 221){
				if(AutoSpellSkill[ItemOBJ[n_A_Equip[i]][12+j2]][1] == 1){
					w_ASSP0[j] = AutoSpellSkill[ItemOBJ[n_A_Equip[i]][12+j2]][2];
					w_ASSP9[j] = AutoSpellSkill[ItemOBJ[n_A_Equip[i]][12+j2]][0] + 2000;
					j++;
				}
			}
		}
	}

	for(i=0;i<=25;i++){
		for(j2=0;cardOBJ[n_A_card[i]][4+j2] != 0;j2 += 2){
			if(cardOBJ[n_A_card[i]][4+j2] == 220){
				if(InsertSkill[cardOBJ[n_A_card[i]][5+j2]][1] == 1){
					w_ASSP0[j] = InsertSkill[cardOBJ[n_A_card[i]][5+j2]][2];
					w_ASSP9[j] = cardOBJ[n_A_card[i]][5+j2] + 3000;
					j++;
				}
			}else if(cardOBJ[n_A_card[i]][4+j2] == 221){
				if(AutoSpellSkill[cardOBJ[n_A_card[i]][5+j2]][1] == 1){
					w_ASSP0[j] = AutoSpellSkill[cardOBJ[n_A_card[i]][5+j2]][2];
					w_ASSP9[j] = cardOBJ[n_A_card[i]][5+j2] + 2000;
					j++;
				}
			}
		}
	}
	//custom TalonRO SQI-Bonus - Djinn: insert Firebolt lv6, autocast Firebolt lv6
	for(i=0;i<SQI_Bonus_Effect.length;i++){
		for(j2=0;SQI_BONUS[SQI_Bonus_Effect[i]][4+j2] != 0;j2 += 2){
			if(EquipNumSearch(SQI_BONUS[SQI_Bonus_Effect[i]][1]))
				if(SQI_BONUS[SQI_Bonus_Effect[i]][4+j2] == 220){
					if(InsertSkill[SQI_BONUS[SQI_Bonus_Effect[i]][5+j2]][1] == 1){
						w_ASSP0[j] = InsertSkill[SQI_BONUS[SQI_Bonus_Effect[i]][5+j2]][2];
						w_ASSP9[j] = SQI_BONUS[SQI_Bonus_Effect[i]][5+j2] + 3000;
						j++;
					}
				}else if(SQI_BONUS[SQI_Bonus_Effect[i]][4+j2] == 221){
					if(AutoSpellSkill[SQI_BONUS[SQI_Bonus_Effect[i]][5+j2]][1] == 1){
						w_ASSP0[j] = AutoSpellSkill[SQI_BONUS[SQI_Bonus_Effect[i]][5+j2]][2];
						w_ASSP9[j] = SQI_BONUS[SQI_Bonus_Effect[i]][5+j2] + 2000;
						j++;
					}
				}
		}
	}

	if(CardNumSearch(164) && (n_A_JOB == 9 || n_A_JOB == 23)){
		w_ASSP0[j] = 162;
		w_ASSP9[j] = 2095;
		j++;
	}
	if(CardNumSearch(277) && n_A_JobSearch()==1){
		w_ASSP0[j] = 76;
		w_ASSP9[j] = 2096;
		j++;
	}
	if(EquipNumSearch(1096) && n_A_JobSearch2() != 9){
		w_ASSP0[j] = 193;
		w_ASSP9[j] = 2108;
		j++;
	}
	if(n_A_PassSkill7[15]){
		var wSC = [33,34,35,36,13,37,38,39,7];
		for(var i=0;i<=8;i++){
			w_ASSP0[j] = InsertSkill[wSC[i]][2];
			w_ASSP9[j] = wSC[i] + 3000;
			j++;
		}
		w_ASSP0[j] = InsertSkill[40][2];

		w_ASSP9[j] = 3040;
		j++;
	}

	w_ASSPch=0;
	for(i=0;i<20;i++){
		if(w_ASSP9bk[i] != w_ASSP9[i])
			w_ASSPch = 1
	}
	if(w_ASSPch){
		for(k=0;JobSkillActiveOBJ[n_A_JOB][k]!=999;k++);
		for(i=k+20;i>=k;i--)
			document.calcForm.A_ActiveSkill.options[i] = null;
		j=0;
		for(i=k;w_ASSP0[j] != 999;i++,j++){
			if(w_ASSP9[j] >= 3000)
				document.calcForm.A_ActiveSkill.options[i] = new Option(SkillOBJ[w_ASSP0[j]][2]+"[Aquired Skill]",w_ASSP9[j]);
			else
				document.calcForm.A_ActiveSkill.options[i] = new Option(SkillOBJ[w_ASSP0[j]][2]+"[Auto-Casted Skill]",w_ASSP9[j]);
		}
	}
	for(i=0;i<20;i++)
		w_ASSP9bk[i] = w_ASSP9[i];

	if(eval(document.calcForm.A_ActiveSkill.value) == 0)
		document.calcForm.A_ActiveSkillLV.style.visibility = "hidden";
}

function KakutyouKansuu(){
	wKK = eval(document.calcForm.A_Kakutyou.value);
	if(wKK == 0){
		myInnerHtml("A_KakutyouData","",0);
		return;
	}
	Heal = new Array();
	if(wKK == 1){
		w = "";
	 	for(i=0;i<=10;i++)
			Heal[i] = HealCalc(i,1);
		if(n_A_JOB==3||n_A_JOB==9||n_A_JOB==13||n_A_JOB==14||n_A_JOB==15||n_A_JOB==20||n_A_JOB==23||n_A_JOB==27||n_A_JOB==28||n_A_JOB==29){
			w += "<table border=0><tr><td><b>Heal Level 1</td><td></b> "+ Heal[1] +"</td></tr>";
			w += "<tr><td><b>Heal Level 2</td><td></b> "+ Heal[2] +"</td></tr>";
			w += "<tr><td><b>Heal Level 3</td><td></b> "+ Heal[3] +"</td></tr>";
			w += "<tr><td><b>Heal Level 4</td><td></b> "+ Heal[4] +"</td></tr>";
			w += "<tr><td><b>Heal Level 5</td><td></b> "+ Heal[5] +"</td></tr>";
			w += "<tr><td><b>Heal Level 6</td><td></b> "+ Heal[6] +"</td></tr>";
			w += "<tr><td><b>Heal Level 7</td><td></b> "+ Heal[7] +"</td></tr>";
			w += "<tr><td><b>Heal Level 8</td><td></b> "+ Heal[8] +"</td></tr>";
			w += "<tr><td><b>Heal Level 9</td><td></b> "+ Heal[9] +"</td></tr>";
			w += "<tr><td><b>Heal Level 10 </td><td></b>"+ Heal[10] +"</td></tr></table>";
		}
		else{
			w += "<table border=0><tr><td><b>Heal Level 1 [Vitata Card/Dress Hat]</td><td></b>"+ Heal[1] +"</td></tr>";
			w += "<tr><td><b>Heal Level 2</td><td></b>"+ Heal[2] +"</td></tr>";
			w += "<tr><td><b>Heal Level 3</td><td></b>"+ Heal[3] +"</td></tr>";
			w += "<tr><td><b>Heal Level 4</td><td></b>"+ Heal[4] +"</td></tr>";
			w += "<tr><td><b>Heal Level 5 [Scroll]</td><td></b>"+ Heal[5] +"</td></tr></table>";
		}
		w += "<Font size=2><br><b>Required Int/Lv for next bonus: </b></Font>+"+ (8 -(n_A_BaseLV + n_A_INT) %8) + " [Heal Boost: " + n_tok[91] + "%]";
		myInnerHtml("A_KakutyouData",w,0);
	}
	else if(wKK == 2){
		if(n_A_JOB==1||n_A_JOB==7||n_A_JOB==13||n_A_JOB==20||n_A_JOB==21||n_A_JOB==27){
			HPRLV = eval(document.calcForm.A_KakutyouSelNum.value);
			w = Math.floor((5 + n_A_MaxHP / 500) * HPRLV);
			myInnerHtml("A_KakutyouData","<br>Regen: "+w,0);
		}
		//Beer Hat - [Loa] - 2018-07-04
		else if(EquipNumSearch(1240)){
			w = Math.floor((5 + n_A_MaxHP / 500) * 3);
			myInnerHtml("A_KakutyouData","<br>Regen: "+w,0);
		}else
			myInnerHtml("A_KakutyouData","",0);
	}
	else if(wKK == 3){
		if(n_A_JOB==5||n_A_JOB==9||n_A_JOB==11||n_A_JOB==18||n_A_JOB==20||n_A_JOB==23||n_A_JOB==25||n_A_JOB==32||n_A_JOB==39||n_A_JOB==44){
			SPRLV = eval(document.calcForm.A_KakutyouSelNum.value);
			w = Math.floor((3 + n_A_MaxSP / 500) * SPRLV);
			myInnerHtml("A_KakutyouData","<br>Regen: "+w,0);
		}
		//Beer Hat - [Loa] - 2018-07-04
		else if(EquipNumSearch(1240)){
			w = Math.floor((3 + n_A_MaxSP / 500) * 3);
			myInnerHtml("A_KakutyouData","<br>Regen: "+w,0);
		}else
			myInnerHtml("A_KakutyouData","",0);
	}
	else if(wKK == 4){
		if(n_A_JOB==15||n_A_JOB==29){
			SPRLV = eval(document.calcForm.A_KakutyouSelNum.value);
			w1 = Math.floor((4 + n_A_MaxHP / 500) * SPRLV);
			w2 = Math.floor((2 + n_A_MaxSP / 500) * SPRLV);
			myInnerHtml("A_KakutyouData","<br>HP Regen: "+w1+"<br>SP Regen: "+w2,0);
		}else
			myInnerHtml("A_KakutyouData","",0);
	}
	else if(wKK == 5){
			syozijob =[0,800,400,400,600,200,800,800,400,600,700,400,1000,800,400,600,700,700,400,1000,0,800,400,600,700,400,1000,800,400,600,700,700,400,1000,0,0,0,0,0,0,0,800,800,400,600,800];
			syoziryou = 2000 + syozijob[n_A_JOB];
			// syoziryou += eval(document.calcForm.A_KakutyouSelNum2.value) * 200;
			if(eval(document.calcForm.A_youshi.checked))
				syoziryou = 2000;
			syoziryou += eval(document.calcForm.A_STR.value) * 30;
			if(SkillSearch(78))
				syoziryou += 1000;
			if(n_A_JOB==6||n_A_JOB==12||n_A_JOB==19||n_A_JOB==20||n_A_JOB==26||n_A_JOB==33)
				syoziryou += eval(document.calcForm.A_KakutyouSelNum.value) * 200;
			EquipKG = 0;
			for(i=0;i<=10;i++)
				EquipKG += ItemOBJ[n_A_Equip[i]][6];

			w = "<table border=0>";
			//w += "<tr><td><b><font color=grey>White Slim Potion: </font></b>" + '<td><select name="A_WPS" onChange="StAllCalc()"></select>' + "</td>";
			//w += "<td><b><font color=blue>Blue Potion: </font></b>" + '<td><select name="A_BP" onChange="StAllCalc()"></select>' + "</td></tr>";
			w += "<tr><td><b><font color=red>Weight Limit: </font></b>" + syoziryou + "</td></tr><tr><td><b>Total Weight of Items: </b>"+EquipKG;
			w += "</td></tr></table>";

			/*for(i=0;i<1000;i++)
						document.calcForm.A_WPS.options[i] = new Option(i,i);
						document.calcForm.A_WPS.value=0;}
			for(i=0;i<1000;i++)
						document.calcForm.A_BP.options[i] = new Option(i,i);
						document.calcForm.A_BP.value=0;}*/

			myInnerHtml("A_KakutyouData",w,0);

			//myInnerHtml("A_KakutyouData","Weight Limit: "+syoziryou+"<BR>Total Weight of Equipment: "+EquipKG,0);
	}
	else if(wKK == 6){
		var JyoutaiTaisei = new Array();
		var GensanTaisei = (n_A_BaseLV + n_A_LUK) / 10;
		JyoutaiTaisei[0] = Math.floor(((3 + n_A_VIT) * 100) / 100);
		JyoutaiTaisei[1] = JyoutaiTaisei[0];
		JyoutaiTaisei[2] = Math.floor(((3 + n_A_MDEF) * 100) / 100);
		JyoutaiTaisei[3] = Math.floor(((3 + n_A_LUK) * 100) / 100);
		JyoutaiTaisei[4] = Math.floor((n_A_INT * 100) / 180);
		JyoutaiTaisei[5] = Math.floor(((3 + n_A_INT) * 100) / 100);
		JyoutaiTaisei[6] = JyoutaiTaisei[0];
		JyoutaiTaisei[7] = Math.floor(((3 + ((n_A_STR + n_A_INT)/2)) * 100) / 100);
		JyoutaiTaisei[8] = JyoutaiTaisei[0];
		JyoutaiTaisei[9] = JyoutaiTaisei[2];
		for(var i=0;i<=9;i++){
			if (JyoutaiTaisei[i] > 100){JyoutaiTaisei[i] = 100;}
			if (JyoutaiTaisei[i] < 0){JyoutaiTaisei[i] = 0;}
			}
		if(n_A_LUK == 0)
			JyoutaiTaisei[3] = 100;
		if(n_A_VIT >= 100)
			JyoutaiTaisei[3] = 100;
		if(n_A_BodyZokusei == 9){
			JyoutaiTaisei[2] = 100;
			JyoutaiTaisei[8] = 100;
			JyoutaiTaisei[9] = 100;
		}
		for(var i=0;i<=9;i++){
			JyoutaiTaisei[i] += Math.floor((100 - JyoutaiTaisei[i]) *  n_tok[150+i]) /100;
			JyoutaiTaisei[i] = Math.floor(JyoutaiTaisei[i] * 100) / 100;
			if (JyoutaiTaisei[i] > 100){JyoutaiTaisei[i] = 100;}
		}
		wkk9w = ["Boss","Long-range","Normal"];

		CBIstr = "<table border=0>";
		CBIstr += "<tr><td><b>" + ZokuseiOBJ[0] +"</b></td><td><b>"+n_A_zokusei[0] +" %" + "</b></td>";
		CBIstr += "<td><b>" + ZokuseiOBJ[1] +"</b></td><td><b>"+n_A_zokusei[1] +" %" + "</b></td>";
		CBIstr += "<td><b>" + ZokuseiOBJ[2] +"</b></td><td><b>"+n_A_zokusei[2] +" %" + "</b></td></tr>";
		CBIstr += "<tr><td><b>" + ZokuseiOBJ[3] +"</b></td><td><b>"+n_A_zokusei[3] +" %" + "</b></td>";
		CBIstr += "<td><b>" + ZokuseiOBJ[4] +"</b></td><td><b>"+n_A_zokusei[4] +" %" + "</b></td>";
		CBIstr += "<td><b>" + ZokuseiOBJ[5] +"</b></td><td><b>"+n_A_zokusei[5] +" %" + "</b></td></tr>";
		CBIstr += "<tr><td><b>" + ZokuseiOBJ[6] +"</b></td><td><b>"+n_A_zokusei[6] +" %" + "</b></td>";
		CBIstr += "<td><b>" + ZokuseiOBJ[7] +"</b></td><td><b>"+n_A_zokusei[7] +" %" + "</b></td>";
		CBIstr += "<td><b>" + ZokuseiOBJ[8] +"</b></td><td><b>"+n_A_zokusei[8] +" %" + "</b></td></tr>";
		CBIstr += "<tr><td></td><td></td><td><b>" + ZokuseiOBJ[9] +"</b></td><td><b>"+n_A_zokusei[9] +" %" + "</b></td></tr>";
		CBIstr += "</table><center>----//----</center>";

		CBIstr += "<table border=0>";
		CBIstr += "<tr><td><b>" + SyuzokuOBJ[0] +"</b></td><td><b>"+ n_tok[50] +" %" + "</b></td>";
		CBIstr += "<td><b>" + SyuzokuOBJ[1] +"</b></td><td><b>"+ n_tok[51] +" %" + "</b></td>";
		CBIstr += "<td><b>" + SyuzokuOBJ[2] +"</b></td><td><b>"+ n_tok[52] +" %" + "</b></td></tr>";
		CBIstr += "<tr><td><b>" + SyuzokuOBJ[3] +"</b></td><td><b>"+ n_tok[53] +" %" + "</b></td>";
		CBIstr += "<td><b>" + SyuzokuOBJ[4] +"</b></td><td><b>"+ n_tok[54] +" %" + "</b></td>";
		CBIstr += "<td><b>" + SyuzokuOBJ[5] +"</b></td><td><b>"+ n_tok[55] +" %" + "</b></td></tr>";
		CBIstr += "<tr><td><b>" + SyuzokuOBJ[6] +"</b></td><td><b>"+ n_tok[56] +" %" + "</b></td>";
		CBIstr += "<td><b>" + SyuzokuOBJ[7] +"</b></td><td><b>"+ n_tok[57] +" %" + "</b></td>";
		CBIstr += "<td><b>" + SyuzokuOBJ[8] +"</b></td><td><b>"+ n_tok[58] +" %" + "</b></td></tr>";
		CBIstr += "<tr><td></td><td></td><td><b>" + SyuzokuOBJ[9] +"</b></td><td><b>"+ n_tok[59] +" %" + "</b></td></tr>";
		CBIstr += "</table><center>----//----</center>";

		CBIstr += "<table border=0>";
		CBIstr += "<tr><td><b>" + wkk9w[0] +" Resistance</b></td><td><b>"+ n_tok[77] +" %" + "</b></td>";
		CBIstr += "<td><b>" + wkk9w[2] +" Resistance</b></td><td><b>"+ n_tok[79] +" %" + "</b></td>";
		CBIstr += "<td><b>" + wkk9w[1] +" Resistance</b></td><td><b>"+ n_tok[78] +" %" + "</b></td></tr>";
		CBIstr += "<tr><td><b>" + "Small Resistance</b></td><td><b>"+ n_tok[190] +" %" + "</b></td>";
		CBIstr += "<td><b>" + "Medium Resistance</b></td><td><b>"+ n_tok[191] +" %" + "</b></td>";
		CBIstr += "<td><b>" + "Large Resistance</b></td><td><b>"+ n_tok[192] +" %" + "</b></td></tr>";
		CBIstr += "</table><center>----//----</center>";

		CBIstr += "<table border=0>";
		CBIstr += "<tr><td><b>" + IjyouOBJ[0] +"</b></td><td><b>"+ JyoutaiTaisei[0] +" %" + "</b></td>";
		CBIstr += "<td><b>" + IjyouOBJ[1] +"</b></td><td><b>"+ JyoutaiTaisei[1] +" %" + "</b></td>";
		CBIstr += "<td><b>" + IjyouOBJ[2] +"</b></td><td><b>"+ JyoutaiTaisei[2] +" %" + "</b></td>";
		CBIstr += "<td><b>" + IjyouOBJ[3] +"</b></td><td><b>"+ JyoutaiTaisei[3] +" %" + "</b></td></tr>";
		CBIstr += "<tr><td><b>" + IjyouOBJ[4] +"</b></td><td><b>"+ JyoutaiTaisei[4] +" %" + "</b></td>";
		CBIstr += "<td><b>" + IjyouOBJ[5] +"</b></td><td><b>"+ JyoutaiTaisei[5] +" %" + "</b></td>";
		CBIstr += "<td><b>" + IjyouOBJ[6] +"</b></td><td><b>"+ JyoutaiTaisei[6] +" %" + "</b></td>";
		CBIstr += "<td><b>" + IjyouOBJ[7] +"</b></td><td><b>"+ JyoutaiTaisei[7] +" %" + "</b></td></tr>";
		CBIstr += "<tr><td></td><td></td><td><b>" + IjyouOBJ[8] +"</b></td><td><b>"+ JyoutaiTaisei[8] +" %" + "</b>";
		CBIstr += "<td><b>" + IjyouOBJ[9] +"</b></td><td><b>"+ JyoutaiTaisei[9] +" %" + "</b></td></tr>";
		CBIstr += "</table>";

		var w = Math.floor((GensanTaisei -9.9) * 100) / 100;
		if(w < 0)
			w = 0;

		myInnerHtml("A_KakutyouData",CBIstr,0);
	}
	else if(wKK == 7){
		var CBIstr;
		F_MOD = 0;
		G_MOD = 0;
		B_MOD = 0;
		SM_MOD = 0;
		TU_MOD = 0; //[Custom TalonRO - 2018-06-02 - New Attack Modifier for Turtles] [Kato]

		B_MOD += n_tok[80];

		for(var i=0;i<=7;i++){
			if(n_A_card[i] == 244){G_MOD += 40;}
			if(n_A_card[i] == 31){B_MOD += 25;}
		}
		if(EquipNumSearch(835)){SM_MOD += 10;}//Diabolus Manteau
		if(n_A_Equip[9] == 844){SM_MOD += 10;}//1º Diabolus Ring
		if(n_A_Equip[10] == 844){SM_MOD += 10;}//2º Diabolus Ring

		//custom TalonRO ID_ARG - Satan Morroc damage modifier
		for(i=22;i<30;i+=2)
			if(n_A_PassSkill9[i]==5)
				SM_MOD += n_A_PassSkill9[i+1];
		//custom TalonRO ID_ARG - Guardian damage modifier
		for(i=22;i<30;i+=2)
			if(n_A_PassSkill9[i]==4)
				G_MOD += n_A_PassSkill9[i+1];

		if(EquipNumSearch(1547)){TU_MOD += 20;}  //[Custom TalonRO - 2018-06-02 - New Attack Modifier for Turtles - Item Droping Permeter] [Kato]

		F_M1 = eval(document.calcForm.R_OBJ.value);
		F_M2 = eval(document.calcForm.S_OBJ.value);
		F_M3 = eval(document.calcForm.E_OBJ.value);
		F_M4 = eval(document.calcForm.B_OBJ.value);
		F_M5 = eval(document.calcForm.SP_OBJ.value);

		if(F_M1 == 0){F_M1 = n_tok[30];}
		else if(F_M1 == 1){F_M1 = n_tok[31];}
		else if(F_M1 == 2){F_M1 = n_tok[32];}
		else if(F_M1 == 3){F_M1 = n_tok[33];}
		else if(F_M1 == 4){F_M1 = n_tok[34];}
		else if(F_M1 == 5){F_M1 = n_tok[35];}
		else if(F_M1 == 6){F_M1 = n_tok[36];}
		else if(F_M1 == 7){F_M1 = n_tok[37];}
		else if(F_M1 == 8){F_M1 = n_tok[38];}
		else if(F_M1 == 9){F_M1 = n_tok[39];}

		if(F_M2 == 0){F_M2 = n_tok[27];}
		else if(F_M2 == 1){F_M2 = n_tok[28];}
		else if(F_M2 == 2){F_M2 = n_tok[29];}

		if(F_M3 == 0){F_M3 = n_tok[40];}
		else if(F_M3 == 1){F_M3 = n_tok[41];}
		else if(F_M3 == 2){F_M3 = n_tok[42];}
		else if(F_M3 == 3){F_M3 = n_tok[43];}
		else if(F_M3 == 4){F_M3 = n_tok[44];}
		else if(F_M3 == 5){F_M3 = n_tok[45];}
		else if(F_M3 == 6){F_M3 = n_tok[46];}
		else if(F_M3 == 7){F_M3 = n_tok[47];}
		else if(F_M3 == 8){F_M3 = n_tok[48];}
		else if(F_M3 == 9){F_M3 = n_tok[49];}

		if(F_M4 == 0){F_M4 = n_tok[80];}
		else if(F_M4 == 1){F_M4 = B_MOD;}

		if(F_M5 == 0){F_M5 = 0;}
		else if(F_M5 == 1){F_M5 = n_tok[81];}
		else if(F_M5 == 2){F_M5 = n_tok[84];}
		else if(F_M5 == 3){F_M5 = G_MOD;}
		else if(F_M5 == 4){F_M5 = n_tok[82];}
		else if(F_M5 == 5){F_M5 = n_tok[83];}
		else if(F_M5 == 6){F_M5 = SM_MOD;}

		F_M1 = 1+(F_M1/100);
		F_M2 = 1+(F_M2/100);
		F_M3 = 1+(F_M3/100);
		F_M4 = 1+(F_M4/100);
		F_M5 = 1+(F_M5/100);
		F_MOD = Math.round((F_M1*F_M2*F_M3*F_M4*F_M5)*100);

		CBIstr = "<table border=0>";
		CBIstr += "<tr><td><b>" + SyuzokuOBJ[0] +"</b></td><td><b>"+ n_tok[30] +" %" + "</b></td>";
		CBIstr += "<td><b>" + SyuzokuOBJ[1] +"</b></td><td><b>"+ n_tok[31] +" %" + "</b></td>";
		CBIstr += "<td><b>" + SyuzokuOBJ[2] +"</b></td><td><b>"+ n_tok[32] +" %" + "</b></td></tr>";
		CBIstr += "<tr><td><b>" + SyuzokuOBJ[3] +"</b></td><td><b>"+ n_tok[33] +" %" + "</b></td>";
		CBIstr += "<td><b>" + SyuzokuOBJ[4] +"</b></td><td><b>"+ n_tok[34] +" %" + "</b></td>";
		CBIstr += "<td><b>" + SyuzokuOBJ[5] +"</b></td><td><b>"+ n_tok[35] +" %" + "</b></td></tr>";
		CBIstr += "<tr><td><b>" + SyuzokuOBJ[6] +"</b></td><td><b>"+ n_tok[36] +" %" + "</b></td>";
		CBIstr += "<td><b>" + SyuzokuOBJ[7] +"</b></td><td><b>"+ n_tok[37] +" %" + "</b></td>";
		CBIstr += "<td><b>" + SyuzokuOBJ[8] +"</b></td><td><b>"+ n_tok[38] +" %" + "</b></td></tr>";
		CBIstr += "<tr><td></td><td></td><td><b>" + SyuzokuOBJ[9] +"</b></td><td><b>"+ n_tok[39] +" %" + "</b></td></tr>";
		CBIstr += "</table><center>----//----</center>";

		CBIstr += "<table border=0>";
		CBIstr += "<tr><td><b>" + ZokuseiOBJ[0] +"</b></td><td><b>"+ n_tok[40] +" %" + "</b></td>";
		CBIstr += "<td><b>" + ZokuseiOBJ[1] +"</b></td><td><b>"+ n_tok[41] +" %" + "</b></td>";
		CBIstr += "<td><b>" + ZokuseiOBJ[2] +"</b></td><td><b>"+ n_tok[42] +" %" + "</b></td></tr>";
		CBIstr += "<tr><td><b>" + ZokuseiOBJ[3] +"</b></td><td><b>"+ n_tok[43] +" %" + "</b></td>";
		CBIstr += "<td><b>" + ZokuseiOBJ[4] +"</b></td><td><b>"+ n_tok[44] +" %" + "</b></td>";
		CBIstr += "<td><b>" + ZokuseiOBJ[5] +"</b></td><td><b>"+ n_tok[45] +" %" + "</b></td></tr>";
		CBIstr += "<tr><td><b>" + ZokuseiOBJ[6] +"</b></td><td><b>"+ n_tok[46] +" %" + "</b></td>";
		CBIstr += "<td><b>" + ZokuseiOBJ[7] +"</b></td><td><b>"+ n_tok[47] +" %" + "</b></td>";
		CBIstr += "<td><b>" + ZokuseiOBJ[8] +"</b></td><td><b>"+ n_tok[48] +" %" + "</b></td></tr>";
		CBIstr += "<tr><td></td><td></td><td><b>" + ZokuseiOBJ[9] +"</b></td><td><b>"+ n_tok[49] +" %" + "</b></td></tr>";
		CBIstr += "</table><center>----//----</center>";

		CBIstr += "<table border=0>";
		CBIstr += "<tr><td><b>" + "Goblin</b></td><td><b>"+ n_tok[81] +" %" + "</b></td>";
		CBIstr += "<td><b>" + "Golem</b></td><td><b>"+ n_tok[84] +" %" + "</b></td>";
		CBIstr += "<td><b>" + "Kobold</b></td><td><b>"+ n_tok[82] +" %" + "</b></td>";
		CBIstr += "<td><b>" + "Orc</b></td><td><b>"+ n_tok[83] +" %" + "</b></td>";
		CBIstr += "<td><b>" + "Turtle</b></td><td><b>"+ TU_MOD +" %" + "</b></td></tr>"; //[Custom TalonRO - 2018-06-02 - New Attack Modifier for Turtles] [Kato]
		CBIstr += "<tr><td><b>" + "Guardian</b></td><td><b>"+ G_MOD +" %" + "</b></td>";
		CBIstr += "<td><b>" + "Satan Morroc</b></td><td><b>"+ SM_MOD +" %" + "</b></td>";
		CBIstr += "<td><b>" + "Boss</b></td><td><b>"+ B_MOD +" %" + "</b></td>";
		CBIstr += "<td><b>" + "Normal</b></td><td><b>"+ n_tok[80] +" %" + "</b></td></tr>";
		CBIstr += "</table><center>----//----</center>";

		CBIstr += "<table border=0>";
		CBIstr += "<tr><td><b>" + "Small</b></td><td><b>"+ n_tok[27] +" %" + "</b></td>";
		CBIstr += "<td><b>" + "Medium</b></td><td><b>"+ n_tok[28] +" %" + "</b></td>";
		CBIstr += "<td><b>" + "Large</b></td><td><b>"+ n_tok[29] +" %" + "</b></td></tr>";
		CBIstr += "</table>";

		CBIstr += "<hr><table border=0>";
		CBIstr += "<td><b>Final Damage Modifier: </b>"+ F_MOD +" %</td>";
		CBIstr += "</table>";

		myInnerHtml("A_KakutyouSel",CBIstr,0);
	}
	else if(wKK == 8){//create your enemy
		n_B[6] = CYE[0];

		myInnerHtml("A_KakutyouData",CBIstr,0);
	}
	else if(wKK == 9){
		CBIstr = "<Font size=2><B>";
		wkk9w = ["Bosstype","Long-range","Normal-monster"];
		for(i=77;i <= 79;i++){
			if(n_tok[i]==0){
				wkk6a = "";
				wkk6b = "";
			}
			if(n_tok[i]>0){
				wkk6a = "<Font color=blue>";
				wkk6b = "</Font>";
			}
			if(n_tok[i]<0){
				wkk6a = "<Font color=red>";
				wkk6b = "</Font>";
			}
			CBIstr += wkk6a + wkk9w[i-77] +" Resistance: "+ n_tok[i] +"%" + wkk6b +"<BR>";
		}
		for(i=190;i <= 192;i++){
			if(n_tok[i]==0){
				wkk6a = "";
				wkk6b = "";
			}
			if(n_tok[i]>0){
				wkk6a = "<Font color=blue>";
				wkk6b = "</Font>";
			}
			if(n_tok[i]<0){
				wkk6a = "<Font color=red>";
				wkk6b = "</Font>";
			}
			CBIstr += wkk6a + SizeOBJ[i-190] +" Resistance: "+ n_tok[i] +"%" + wkk6b +"<BR>";
		}
		CBIstr += "</B></Font>";
		myInnerHtml("A_KakutyouData",CBIstr,0);
	}else if(wKK == 10){
		var wkk10;
		wkk10 = "<b>Cast Time: </b>"+ Math.round(n_A_CAST *10000)/100+" % [ "+(100 - n_B_Cast)+" % and "+n_A_DEX+" DEX ]<BR>";
		wkk10 += "<b>Cast Delay: </b>"+ Math.round((100 - n_tok[74]) *100)/100 +" %";
		myInnerHtml("A_KakutyouData",wkk10,0);
	}else if(wKK == 11){
		var NowBaseExp = eval(document.calcForm.A_KakutyouSelNum.value);
		var NowJobExp = eval(document.calcForm.A_KakutyouSelNum2.value);
		if(!(0 <= NowBaseExp && NowBaseExp <= 100)){
			NowBaseExp = 0;
			document.calcForm.A_KakutyouSelNum.value = 0;
		}
		if(!(0 <= NowJobExp && NowJobExp <= 100)){
			NowJobExp = 0;
			document.calcForm.A_KakutyouSelNum2.value = 0;
		}
		var JobType=0;
		if(n_A_JOB == 0 && n_Tensei)
			JobType = 1;
		if((1 <= n_A_JOB && n_A_JOB <= 6) || n_A_JOB == 41 || n_A_JOB == 20){
			JobType = 2;
			if(n_Tensei)
				JobType = 3;
		}
		if((7 <= n_A_JOB && n_A_JOB <= 19) || n_A_JOB == 43)
			JobType = 4;
		if(21 <= n_A_JOB && n_A_JOB<=33)
			JobType = 5;
		if(n_A_JOB == 42)
			JobType = 7;
		if(n_A_JOB == 44 || n_A_JOB == 45)
			JobType = 6;

		NowBaseExp = Math.floor(PC_BaseExp[n_Tensei][n_A_BaseLV] * NowBaseExp / 100);


		var wkk11;
		wkk11 = "<Font size=2>Required BaseExp for Base Up: <B>"+ Kanma(PC_BaseExp[n_Tensei][n_A_BaseLV] - NowBaseExp) +" </B>exp<BR>";

		var MonsterNum=0;
		var OneCheck = 0;
		if(n_B[16] != 0){
			for(i=n_A_BaseLV;i<99;i++){
				var LvUpExp = PC_BaseExp[n_Tensei][i];

				var w1 = Math.floor((LvUpExp - NowBaseExp) / n_B[16]);
				MonsterNum += w1;
				NowBaseExp += w1 * n_B[16];

				while(NowBaseExp < LvUpExp){
					NowBaseExp += n_B[16];
					MonsterNum += 1
				}
				if(OneCheck==0){
					OneCheck = 1;
					wkk11 += "(Equals <B>"+ Kanma(MonsterNum) +"</B> "+ n_B[1] +" kill"+(Kanma(MonsterNum)!=1?"s":"")+")<BR>";
				}
				NowBaseExp -= LvUpExp;
				if(NowBaseExp > LvUpExp -1)
					NowBaseExp = LvUpExp -1;
			}
			wkk11 += "Until BaseLv99: <B>"+ Kanma(MonsterNum) +"</B> more "+ n_B[1] +" kill"+(Kanma(MonsterNum)!=1?"s":"")+"<BR><BR>";
		}


		NowJobExp = Math.floor(PC_JobExp[JobType][n_A_JobLV] * NowJobExp / 100);
		if(((1 <= n_A_JOB && n_A_JOB <= 6) || n_A_JOB == 41) && n_A_JobLV == 50)
			NowJobExp = 0;
		wkk11 += "Required JobExp for Job Up: <B>"+ Kanma(PC_JobExp[JobType][n_A_JobLV] - NowJobExp) +"</B> exp<BR>";

		MonsterNum=0;
		OneCheck = 0;
		if(n_B[17] != 0){
			for(i=1;PC_JobExp[JobType][i]!=0;i++);
			var MaxJobLV = i;
			if((1 <= n_A_JOB && n_A_JOB <= 6) || n_A_JOB == 41)
				MaxJobLV = 50;
			for(i=n_A_JobLV;i<MaxJobLV;i++){
				var LvUpExp = PC_JobExp[JobType][i];

				var w1 = Math.floor((LvUpExp - NowJobExp) / n_B[17]);
				MonsterNum += w1;
				NowJobExp += w1 * n_B[17];

				while(NowJobExp < LvUpExp){
					NowJobExp += n_B[17];
					MonsterNum += 1
				}
				if(OneCheck==0){
					OneCheck = 1;
					wkk11 += "(Equals <B>"+ Kanma(MonsterNum) +"</B> "+ n_B[1] +" kill"+(Kanma(MonsterNum)!=1?"s":"")+")<BR>";
				}
				NowJobExp -= LvUpExp;
				if(NowJobExp > LvUpExp -1)
					NowJobExp = LvUpExp -1;
			}
			wkk11 += "Until JobLv"+ MaxJobLV +": <B>"+ Kanma(MonsterNum) +"</B> more "+ n_B[1] +" kill"+(Kanma(MonsterNum)!=1?"s":"")+"<BR><BR>";
		}
		wkk11 += "</Font>";

		myInnerHtml("A_KakutyouData",wkk11,0);
	}
	else if(wKK == 12){
		H_Bonus = 1;
		H_Bonus2 = 1;
		H_Bonus3 = 1;
		if(n_A_JOB == 19 || n_A_JOB == 33 ){
		slv = eval(document.calcForm.SL_LV.value);
		evit = eval(document.calcForm.E_VIT.value);
		eint = eval(document.calcForm.E_INT.value);
		potr = eval(document.calcForm.POT_RLevel.value);
		isp = eval(document.calcForm.ISP.value);
		irp = eval(document.calcForm.IRP.value);
		rank_bonus = eval(document.calcForm.RNK_BNS.value);
		pot1 = eval(document.calcForm.PP.value);
		prate1 = Potion_Type_2[pot1][1];
		prate2 = Potion_Type_2[pot1][2];

		if(rank_bonus == 1){prate1 = prate1*1.5;}
		if(rank_bonus == 1){prate2 = prate2*1.5;}

		if(n_A_JOB == 33){
			pot2 = eval(document.calcForm.SPP.value);
			prate3 = Potion_Type_3[pot2][1];
			prate4 = Potion_Type_3[pot2][2];}

		//inserir aqui gears de boost de potion power
		//insert here gears of potion power boost
		if(EquipNumSearch(1610)){H_Bonus2 += 0.05;}//Xmas Rudolph Santa Hat - ZoneSoldier
		if(EquipNumSearch(712)){H_Bonus2 += 0.2;}//Fricco's Shoes
		if(EquipNumSearch(1194)){H_Bonus3 += 0.05;}//life tree wooden shoes
		//inserir aqui gears de heal bonus
		for(var i=8;i<12;i++){
			if(n_A_PassSkill8[i] == 10 && EquipNumSearch(1000)){H_Bonus += 0.2;}//Angelic ring effect+item on[20%]
		}
		for(var i=8;i<=9;i++){
			if(n_A_card[i] == 332){H_Bonus += 0.3;}//Bacsojin Card[30%]
			if(n_A_card[i] == 513){H_Bonus += 0.03;}//Rhyncho Card[30%]
		}
		if(EquipNumSearch(1162)){H_Bonus += 0.1;}//Erde
		if(n_A_Equip[9] == 844){H_Bonus += 0.05;}//1º Diabolus Ring
		if(n_A_Equip[10] == 844){H_Bonus += 0.05;}//2º Diabolus Ring
		if(n_A_Equip[9] == 1111){H_Bonus += 0.05;}//1º Glorious Ring
		if(n_A_Equip[10] == 1111){H_Bonus += 0.05;}//2º Glorious Ring
		if(EquipNumSearch(1258)){H_Bonus += 0.1;}//anubis hat
		if(EquipNumSearch(1194)){H_Bonus += 0.05;}//life tree wooden shoes
		if(n_A_Equip[9] == 1111 && n_A_Equip[10] == 983){H_Bonus += 0.05;}//Glorious Ring Set[5% ]
		if(EquipNumSearch(1104) && EquipNumSearch(1107) && EquipNumSearch(1110)){H_Bonus += 0.03;}//kvm set[3%]
		if(EquipNumSearch(959) && EquipNumSearch(965) && EquipNumSearch(968)){H_Bonus += 0.1;}//merc bg set gear[10%]
		if(EquipNumSearch(1484)){H_Bonus += 0.03;}
		/*if(EquipNumSearch(958) && EquipNumSearch(965) && EquipNumSearch(968)){H_Bonus += 0.1;}//sword bg set gear[10%][Impossivel usar lawl] mas devia adicionar uma key de on/off disto*/
		//slims não são afectadas por rank bonus em pitch nem heal stuff como bacso card

		H_HEALS = 1+irp*.1;//Increase Recuperative Power (10%xlv da skill que se tem, max 10)
		S_HEALS = 1+isp*.1;//Increase Spiritual Power(2%xlv da skill que se tem, max 10)

		if(pot1 == 4){
			potheal1 = Math.floor((prate1*(1+potr*.1+pot1*.05))*(1+slv/100)*(1+eint*.02)*S_HEALS);
			potheal2 = Math.floor((prate2*(1+potr*.1+pot1*.05))*(1+slv/100)*(1+eint*.02)*S_HEALS);
		}else{
			potheal1 = Math.floor(((prate1*(1+potr*.1+pot1*.05))*(1+slv/100)*(1+evit*.02)*H_HEALS)*H_Bonus*H_Bonus2*H_Bonus3);
			potheal2 = Math.floor(((prate2*(1+potr*.1+pot1*.05))*(1+slv/100)*(1+evit*.02)*H_HEALS)*H_Bonus*H_Bonus2*H_Bonus3);
		}

		if(n_A_JOB == 33){
			potheal3 = Math.floor((prate3*(1+potr*.1+pot2*.1))*(1+evit*.02)*H_HEALS*H_Bonus3);//wtf evit*.023 para dar bem em low vit mas mal em high??
			potheal4 = Math.floor((prate4*(1+potr*.1+pot2*.1))*(1+evit*.02)*H_HEALS*H_Bonus3);}

		Heal_POT = "<table border = 0><tr><td><b>Potion Pitcher heals for: </b>" + potheal1 + " ~ " + potheal2 + "</td>";
		if(n_A_JOB == 33){
			Heal_POT += "<td><b>Slim Potion Pitch heals for: </b>" + potheal3 + " ~ " + potheal4;}
			Heal_POT += "</td></tr></table>";

		myInnerHtml("A_KakutyouData",Heal_POT,0);

		}else{myInnerHtml("A_KakutyouData","Not Available for this Class",0);}
	}
	else if(wKK == 13){
		if(n_A_JOB==12||n_A_JOB==26){
			smithing = eval(document.calcForm.A_SmithT.value);
			orideconres = eval(document.calcForm.A_OriR.value);
			weaponres = eval(document.calcForm.A_WepR.value);
			starcrumb = eval(document.calcForm.A_StarC.value);
			elemstone = eval(document.calcForm.A_ElemS.value);
			anvil = eval(document.calcForm.A_KakutyouSelNum.value);
			iron = eval(document.calcForm.A_Iron.value);
			steel = eval(document.calcForm.A_Steel.value);
			stone = eval(document.calcForm.A_StoneC.value);
			anvil2 = Anvil_Type[anvil][1];

			adopted = eval(document.calcForm.A_youshi.checked);

			srate1 = Math.floor((50 + smithing*5 + weaponres + anvil2 + n_A_JobLV * 0.2 + (n_A_DEX +n_A_LUK)* 0.1 - starcrumb*15 - elemstone*20)*100)/100;
			srate2 = Math.floor((50 + smithing*5 + weaponres + anvil2 + n_A_JobLV * 0.2 + (n_A_DEX +n_A_LUK)* 0.1 - starcrumb*15 - elemstone*20 - 20)*100)/100;
			srate3 = Math.floor((50 + smithing*5 + orideconres + weaponres + anvil2 + n_A_JobLV * 0.2 + (n_A_DEX +n_A_LUK)* 0.1 - starcrumb*15 - elemstone*20 - 30)*100)/100;
			srate4 = Math.floor((40 + n_A_JobLV * 0.2 + (n_A_DEX +n_A_LUK)* 0.1 + iron*5)*100)/100;
			srate5 = Math.floor((30 + n_A_JobLV * 0.2 + (n_A_DEX +n_A_LUK)* 0.1 + steel*5)*100)/100;
			srate6 = Math.floor((10 + n_A_JobLV * 0.2 + (n_A_DEX +n_A_LUK)* 0.1 + stone*5)*100)/100;

			if(srate1 < 0){srate1 = 0;}
			if(srate2 < 0){srate2 = 0;}
			if(srate3 < 0){srate3 = 0;}
			if(srate4 < 0){srate4 = 0;}
			if(srate5 < 0){srate5 = 0;}
			if(srate6 < 0){srate6 = 0;}

			if(adopted){
				srate1 = Math.floor((srate1 * 0.7)*100)/100;
				srate2 = Math.floor((srate2 * 0.7)*100)/100;
				srate3 = Math.floor((srate3 * 0.7)*100)/100;}

			weaponforge = "<table border = 0><tr><td><b>Weapon Lvl 1: </b>" + srate1 + " %</td>&nbsp;&nbsp;";
			weaponforge += "<td><b>Weapon Lvl 2: </b>" + srate2 + " %</td>&nbsp;";
			weaponforge += "<td><b>Weapon Lvl 3: </b>" + srate3 + " %</td></tr>";
			weaponforge += "<tr><td><b>Iron: </b>" + srate4 + " %</td>&nbsp;";
			weaponforge += "<td><b>Steel: </b>" + srate5 + " %</td>&nbsp;";
			weaponforge += "<td><b>Elemental Stone: </b>" + srate6 + " %</td></tr></table>";
			myInnerHtml("A_KakutyouData",weaponforge,0);
		}
		else if(n_A_JOB==19||n_A_JOB==33){
			potionr = eval(document.calcForm.A_PotionRLevel.value);
			//custom TalonRO Update 2014-09-29
			//before
			//vani = eval(document.calcForm.A_Van.value);
			preparep = eval(document.calcForm.A_PreparePLevel.value);
			selpot = eval(document.calcForm.A_KakutyouSelNum.value);
			//custom TalonRO Update 2014-09-29
			//after:
			homunlevel = eval(document.calcForm.A_HomunLevel.value);
			homunevolved = eval(document.calcForm.A_HomunEvolved.value);
			//end
			potrate = Potion_Type[selpot][1];
			//custom TalonRO Update 2014-09-29
			pharmacyboost = homunlevel * 0.025;
			if (homunevolved)
				pharmacyboost *= 2;
			adopted = eval(document.calcForm.A_youshi.checked);
			//Brewing rework - [Loa] - 2018-06-17
			srate = potionr * 50 + preparep * 300 + n_A_JobLV * 20 + (n_A_DEX + n_A_LUK + (n_A_INT/2)) * 10 + potrate * 100 + pharmacyboost * 100;
			//selpot values in etc.js
			if(selpot == 3 //blue pot
				|| selpot == 4 //slim red
				|| selpot == 13 //anodyne
				|| selpot == 14 //aloevera
				|| selpot == 15 //embryo
				|| selpot == 16) //elemental
			{
				brate = 0;
			}
			else if(selpot == 5) //slim yellow
			{
				brate = -500;
			}
			else if(selpot == 0 //red pot
				|| selpot == 1 //yellow pot
				|| selpot == 2 //white pot
				|| selpot == 7 //alcohol
				|| selpot == 8 //acid
				|| selpot == 9 //grenade
				|| selpot == 10 //plant
				|| selpot == 11) //marine
			{
				brate = 1000;
			}
			else if(selpot == 6 //slim white
				|| selpot == 12) //glisten
			{
				brate = -1000;
			}
			//add brewing variance
			if(brate < 0){srate1 = srate - 10;}
			else if(brate > 0){srate1 = srate + 10;}
			else{srate1 = srate;}
			srate2 = srate + (brate/2);
			srate3 = srate + brate;
			//baby alchemist penalty
			if(adopted){
				srate1 = Math.floor(srate1 * 70) / 100;
				srate2 = Math.floor(srate2 * 70) / 100;
				srate3 = Math.floor(srate3 * 70) / 100;
			}
			//limit success range to 0-100%
			if(srate1 > 10000){srate1 = 10000;}
			if(srate1 < 0){srate1 = 0;}
			if(srate2 > 10000){srate2 = 10000;}
			if(srate2 < 0){srate2 = 0;}
			if(srate3 > 10000){srate3 = 10000;}
			if(srate3 < 0){srate3 = 0;}
			srate_avg = Math.floor((srate1 + srate2 + srate3)/3)/100;
			srate_min = Math.floor(Math.min(srate1, srate2, srate3))/100;
			srate_med = Math.floor(srate2)/100;
			srate_max = Math.floor(Math.max(srate1, srate2, srate3))/100;
			myInnerHtml("A_KakutyouData","<b><br>Success rate range (Minimum ~ Median ~ Maximum):</b> " + srate_min + " % ~ " + srate_med + " % ~ " + srate_max + " %" + "<br><b>Success rate averge:</b> " + srate_avg + " %",0);
		}
		else if(n_A_JOB==22){
			myInnerHtml("A_KakutyouSel","Potion to Create: " + '<select name="A_KakutyouSelNum" onChange="StAllCalc()"></select><BR>',0);
			document.calcForm.A_KakutyouSelNum.options[0] = new Option("Poison Bottle",0);
			document.calcForm.A_KakutyouSelNum.value=0;

			srate = Math.floor((0.2 + (0.4*n_A_DEX) + (0.2*n_A_LUK))*100)/100;

			myInnerHtml("A_KakutyouData","<b><br>Success rate: </b>" + srate + " %",0);

		}else{myInnerHtml("A_KakutyouData","Not Available for this Class",0);}
	}
	/*else if(wKK == 1 4){
		var wkk14;
		if(n_A_JOB == 19 || n_A_JOB == 33 ){
			Amistr = n_A_STR + n_A_AGI + n_A_VIT;
			Filir = n_A_STR + n_A_AGI + n_A_LUK;
			Vanilmirth = n_A_INT + n_A_DEX + n_A_LUK;
			Lif = n_A_VIT + n_A_INT + n_A_DEX;

			homontotal = Amistr + Filir + Vanilmirth + Lif;
			Amistr = Amistr / homontotal * 100;
			Filir = Filir / homontotal * 100;
			Vanilmirth = Vanilmirth / homontotal * 100;
			Lif = Lif / homontotal * 100;

			wkk14 = "<table border=0><tr><td>Chance to get Amistr: </td><td>" + Math.floor(Amistr*10)/10 + " %</td></tr>";
			wkk14 += "<tr><td>Chance to get Filir: </td><td>" + Math.floor(Filir*10)/10 + " %</td></tr>";
			wkk14 += "<tr><td>Chance to get Vanilmirth: </td><td>" + Math.floor(Vanilmirth*10)/10 + " %</td></tr>";
			wkk14 += "<tr><td>Chance to get Lif: </td><td>" + Math.floor(Lif*10)/10 + " %</td></tr></table>";

		}else{wkk14 = "Not Available for this Class";}
		myInnerHtml("A_KakutyouData",wkk14,0);
	}*/
	else if(wKK == 14){//banana
		var wkk14;
		if(n_A_JOB == 14 || n_A_JOB == 28){
			if(n_A_JOB == 14 || n_A_JOB == 28){
				S_LV1 = eval(document.calcForm.S_LV.value);
				E_DEX1 = eval(document.calcForm.E_DEX.value);
				Strip = 5 + (5*S_LV1) + ((n_A_DEX - E_DEX1)/5);
				S_Time = 60 + (15* S_LV1) + ((n_A_DEX - E_DEX1)/2);
				if (Strip < 5+5*S_LV1){Strip = 5+5*S_LV1;}
				if (S_Time < 60){S_Time = 60;}

			if(n_A_JOB == 28){
				FS_LV1 = eval(document.calcForm.FS_LV.value);
				FStrip = 5 + (2*FS_LV1) + ((n_A_DEX - E_DEX1)/5);
				FS_Time = 135 + ((n_A_DEX - E_DEX1)/2);
				if (FStrip < 5+2*FS_LV1){FStrip = 5+2*FS_LV1;}
				if (FS_Time < 135){FS_Time = 135;}
			}

			if(n_A_JOB == 14){
				wkk14 = "<table border=0><tr><td><b>Chance to Strip [Helm], [Armor], [Weapon] or [Shield]: </b></td><td>" + Math.floor(Strip*10)/10 + " %</td></tr>";
				wkk14 += "<tr><td><font color=red><b>Duration Time: </b></font></td><td>" + Math.floor(S_Time*10)/10 + " Seconds</td></tr></table>";}
			else if(n_A_JOB == 28){
				wkk14 = "<table border = 0><tr><td><b>Chance to Strip [Helm], [Armor], [Weapon] or [Shield]: </b></td><td>" + Math.floor(Strip*10)/10 + " %</td></tr>";
				wkk14 += "<tr><td><font color=red><b>Duration Time: </b></font></td><td>" + Math.floor(S_Time*10)/10 + " Seconds</td></tr>";
				wkk14 += "<tr><td><b>Chance to Full Strip: </b></td><td>" + Math.floor(FStrip*10)/10 + " %</td></tr>";
				wkk14 += "<tr><td><font color=red><b>Duration Time: </b></font></td><td>" + Math.floor(FS_Time*10)/10 + " Seconds</td></tr></table>";}
			}
		}
		else if(CardNumSearch(157) || CardNumSearch(413)){
			// S_LV1 = eval(document.calcForm.S2_LV.value);
			S_LV1 = 1;
			E_DEX1 = eval(document.calcForm.E2_DEX.value);
			Strip = 5 + (5*S_LV1) + ((n_A_DEX - E_DEX1)/5);
			S_Time = 60 + (15* S_LV1) + ((n_A_DEX - E_DEX1)/2);
			if (Strip < 5+5*S_LV1){Strip = 5+5*S_LV1;}
			if (S_Time < 60){S_Time = 60;}

			if(CardNumSearch(157) && CardNumSearch(413)){
				strip_type = "[Weapon], [Armor]";
			}
			else if(CardNumSearch(157)){
				strip_type = "[Weapon]";
			}
			else if(CardNumSearch(413)){
				strip_type = "[Armor]";
			}
			wkk14 = "<table border=0><tr><td><b>Chance to Strip " + strip_type + ": </b></td><td>" + Math.floor(Strip*10)/10 + " %</td></tr>";
			wkk14 += "<tr><td><font color=red><b>Duration Time: </b></font></td><td>" + Math.floor(S_Time*10)/10 + " Seconds</td></tr></table>";}
		// else if(CardNumSearch(413)){
		// 	// S_LV1 = eval(document.calcForm.S3_LV.value);
		// 	S_LV1 = 1;
		// 	E_DEX1 = eval(document.calcForm.E2_DEX.value);
		// 	Strip = 5 + (5*S_LV1) + ((n_A_DEX - E_DEX1)/5);
		// 	S_Time = 60 + (15* S_LV1) + ((n_A_DEX - E_DEX1)/2);
		// 	if (Strip < 5+5*S_LV1){Strip = 5+5*S_LV1;}
		// 	if (S_Time < 60){S_Time = 60;}

		// 	wkk14 = "<table border=0><tr><td><b>Chance to Strip [Armor]: </b></td><td>" + Math.floor(Strip*10)/10 + " %</td></tr>";
		// 	wkk14 += "<tr><td><font color=red><b>Duration Time: </b></font></td><td>" + Math.floor(S_Time*10)/10 + " Seconds</td></tr></table>";}
		// else if(CardNumSearch(157)){
		// 	// S_LV1 = eval(document.calcForm.S2_LV.value);
		// 	S_LV1 = 1;
		// 	E_DEX1 = eval(document.calcForm.E2_DEX.value);
		// 	Strip = 5 + (5*S_LV1) + ((n_A_DEX - E_DEX1)/5);
		// 	S_Time = 60 + (15* S_LV1) + ((n_A_DEX - E_DEX1)/2);
		// 	if (Strip < 5+5*S_LV1){Strip = 5+5*S_LV1;}
		// 	if (S_Time < 60){S_Time = 60;}

		// 	wkk14 = "<table border=0><tr><td><b>Chance to Strip [Weapon]: </b></td><td>" + Math.floor(Strip*10)/10 + " %</td></tr>";
		// 	wkk14 += "<tr><td><font color=red><b>Duration Time: </b></font></td><td>" + Math.floor(S_Time*10)/10 + " Seconds</td></tr></table>";
		// }
		else {wkk14 = "Not Available for this Class";}
		myInnerHtml("A_KakutyouData",wkk14,0);
	}
	else if(wKK == 15){
		var wkk15;

		Flv1 = eval(document.calcForm.Flv.value);
		FStat1 = eval(document.calcForm.FStat.value);
		CKit1 = eval(document.calcForm.CKit.value);
		CExp1 = eval(document.calcForm.CExp.value);
		adopted = eval(document.calcForm.A_youshi.checked);

		if(CExp1 > 2000){CExp1 = 2000;}

		if(adopted){adp = 0.7;}else{adp = 1;}

		if(Flv1 == 1 && FStat1 == 4){ItemN = 2;}
		if((Flv1 == 1 && FStat1 != 4) || (Flv1 == 2 && FStat1 == 4) || (Flv1 == 3 && FStat1 == 4)){ItemN = 3;}
		if((Flv1 == 2 && FStat1 != 4) || (Flv1 == 3 && (FStat1 == 2 || FStat1 == 3 || FStat1 == 6)) || (Flv1 == 6 && FStat1 == 2)){ItemN = 4;}
		if((Flv1 == 3 && (FStat1 == 1 || FStat1 == 5)) || (Flv1 == 4 && (FStat1 != 1 || FStat1 != 5)) || (Flv1 == 5 && FStat1 != 5) || (Flv1 == 6 && (FStat1 != 2 || FStat1 != 5)) || (Flv1 == 7 && FStat1 == 4)){ItemN = 5;}
		if((Flv1 == 4 && (FStat1 == 4 || FStat1 == 5)) || (Flv1 == 5 && FStat1 == 5) || (Flv1 == 6 && FStat1 == 5) || (Flv1 == 7 && FStat1 != 4) || (Flv1 == 8 && FStat1 != 5 )){ItemN = 6;}
		if((Flv1 == 8 && FStat1 == 5) || Flv1 == 9){ItemN = 7;}
		if(Flv1 == 10){ItemN = 8;}

		Food_Powa = (1200 * (CKit1+1)) + (20*(n_A_BaseLV+1)) + (20*(n_A_DEX)) - (Flv1*400) - (10*(100-(n_A_LUK + 1))) - (500*(ItemN-1));

		Food_MIN = Math.round(Food_Powa + (100*(0 + (6 + CExp1/80)))*adp)/100;
		Food_AVG = Math.round(Food_Powa + (100*(12 + (6 + CExp1/80)))*adp)/100;
		Food_MAX = Math.round(Food_Powa + (100*(24 + (6 + CExp1/80)))*adp)/100;
		FDA1 = Math.round((Food_MIN - 5)*100)/100;
		FDA2 = Math.round((Food_MIN - 1)*100)/100;
		FDB1 = Math.round((Food_AVG - 5)*100)/100;
		FDB2 = Math.round((Food_AVG - 1)*100)/100;
		FDC1 = Math.round((Food_MAX - 5)*100)/100;
		FDC2 = Math.round((Food_MAX - 1)*100)/100;

		if(Food_MIN <= 0){Food_MIN = 0;FDA1 = 0;FDA2 = 0;}
		if(FDA1 <= 0){FDA1 = 0;}
		if(FDA2 <= 0){FDA1 = 0;FDA2 = 0;}
		if(Food_AVG <= 0){Food_AVG = 0;FDB1 = 0;FDB2 = 0;}
		if(FDB1 <= 0){FDB1 = 0;}
		if(FDB2 <= 0){FDB1 = 0;FDB2 = 0;}
		if(Food_MAX <= 0){Food_MAX = 0;FDC1 = 0;FDC2 = 0;}
		if(FDC1 <= 0){FDC1 = 0;}
		if(FDC2 <= 0){FDC1 = 0;FDC2 = 0;}

		if(Food_MIN > 100){Food_MIN = 100;}
		if(FDA1 > 100){FDA1 = 100;}
		if(FDA2 > 100){FDA2 = 100;}
		if(Food_AVG > 100){Food_AVG = 100;}
		if(FDB1 > 100){FDB1 = 100;}
		if(FDB2 > 100){FDB2 = 100;}
		if(Food_MAX > 100){Food_MAX = 100;}
		if(FDC1 > 100){FDC1 = 100;}
		if(FDC2 > 100){FDC2 = 100;}

		if(CKit1 == 4){
			wkk15 = "<table border=0><tr><td><b>Success Rate: </b>100%</td>";
			wkk15 += "</tr></table>";
		}else{
			wkk15 = "<table border=0><tr><td><b>Success Rate: </b><br></td>";
			wkk15 += "<td>Minimum: " + Food_MIN + "% [" + FDA1 + "% ~ " + FDA2 + "%]</td>";
			wkk15 += "<td>Average: " + Food_AVG + "% [" + FDB1 + "% ~ " + FDB2 + "%]</td>";
			wkk15 += "<td>Maximum: " + Food_MAX + "% [" + FDC1 + "% ~ " + FDC2 + "%]</td>";
			wkk15 += "</tr></table>";
		}

		myInnerHtml("A_KakutyouData",wkk15,0);
	}
	else if(wKK == 16){
		var wkk16="";
		if(n_A_JOB==9 || n_A_JOB==23){
			var wX = 100+n_tok[94];
			if(EquipNumSearch(644))
				wX += n_A_Weapon_ATKplus * 1.5;
			wkk16+="<table border=0>";
			wkk16+="<tr><td><b>Sanctuary Level 1</b></td><td>"+Math.floor(100 * wX /100)+"</td></tr>";
			wkk16+="<tr><td><b>Sanctuary Level 2</b></td><td>"+Math.floor(200 * wX /100)+"</td></tr>";
			wkk16+="<tr><td><b>Sanctuary Level 3</b></td><td>"+Math.floor(300 * wX /100)+"</td></tr>";
			wkk16+="<tr><td><b>Sanctuary Level 4</b></td><td>"+Math.floor(400 * wX /100)+"</td></tr>";
			wkk16+="<tr><td><b>Sanctuary Level 5</b></td><td>"+Math.floor(500 * wX /100)+"</td></tr>";
			wkk16+="<tr><td><b>Sanctuary Level 6</b></td><td>"+Math.floor(600 * wX /100)+"</td></tr>";
			wkk16+="<tr><td><b>Sanctuary Level 7</b></td><td>"+Math.floor(777 * wX /100)+"</td></tr>";
			wkk16+="<tr><td><b>Sanctuary Level 8</b></td><td>"+Math.floor(777 * wX /100)+"</td></tr>";
			wkk16+="<tr><td><b>Sanctuary Level 9</b></td><td>"+Math.floor(777 * wX /100)+"</td></tr>";
			wkk16+="<tr><td><b>Sanctuary Level 10</b></td><td>"+Math.floor(777 * wX /100)+"</td></tr>";
			wkk16+="</table>";
			myInnerHtml("A_KakutyouData",wkk16,0);
		}else
			myInnerHtml("A_KakutyouData","Not Available for this Class",0);
	}
}

function Kanma(num){
	var str = "";
	var x = new Array();
	if(num < 0){
		num = num * -1;
		str += "-";
	}
	for(var i=0;Math.floor(num / 1000) != 0;i++){
		var w = (num % 1000);
		if(w == 0){
			x[i] = ",000";
		}else if(w < 10){
			x[i] = ",00" + w;
		}else if(w < 100){
			x[i] = ",0" + w;
		}else{
			x[i] = "," + w;
		}
		num = Math.floor(num / 1000);
	}
	x[i] = num;
	while(i>=0){
		str += x[i];
		i--;
	}
	return str;
}

function KakutyouKansuu2(){
	wKK = eval(document.calcForm.A_Kakutyou.value);
	if(wKK == 2){
		if(n_A_JOB==1||n_A_JOB==7||n_A_JOB==13||n_A_JOB==20||n_A_JOB==21||n_A_JOB==27){
			myInnerHtml("A_KakutyouSel","Increased HP Recovery Level: " + '<select name="A_KakutyouSelNum"onChange="StAllCalc()"></select>',0);
			for(i=0;i<=10;i++)
				document.calcForm.A_KakutyouSelNum.options[i] = new Option(i,i);
			document.calcForm.A_KakutyouSelNum.value=10;
			return;
		}
		//Beer Hat - [Loa] - 2018-07-04
		else if(EquipNumSearch(1240)){
			myInnerHtml("A_KakutyouSel","Increased HP Recovery Level: 3",0);
			return;
		}else{
			myInnerHtml("A_KakutyouSel","Not Available for this Class",0);
			return;
		}
	}
	if(wKK == 3){
		if(n_A_JOB==5||n_A_JOB==9||n_A_JOB==11||n_A_JOB==18||n_A_JOB==20||n_A_JOB==23||n_A_JOB==25||n_A_JOB==32||n_A_JOB==39||n_A_JOB==44){
			SPRname = "Increased SP Recovery Level: ";
			if(n_A_JOB==44)
				SPRname = "Ninja Mastery Level: ";
			myInnerHtml("A_KakutyouSel",SPRname + '<select name="A_KakutyouSelNum"onChange="StAllCalc()"></select>',0);
			for(i=0;i<=10;i++)
				document.calcForm.A_KakutyouSelNum.options[i] = new Option(i,i);
			document.calcForm.A_KakutyouSelNum.value=10;
			return;
		}
		//Beer Hat - [Loa] - 2018-07-04
		else if(EquipNumSearch(1240)){
			myInnerHtml("A_KakutyouSel","Increased SP Recovery Level: 3",0);
			return;
		}else{
			myInnerHtml("A_KakutyouSel","Not Available for this Class",0);
			return;
		}
	}
	if(wKK == 4){
		if(n_A_JOB==15||n_A_JOB==29){
			myInnerHtml("A_KakutyouSel","Spiritual Cadence Lv: " + '<select name="A_KakutyouSelNum"onChange="StAllCalc()"></select>',0);
			for(i=0;i<=5;i++)
				document.calcForm.A_KakutyouSelNum.options[i] = new Option(i,i);
			document.calcForm.A_KakutyouSelNum.value=5;
			return;
		}else{
			myInnerHtml("A_KakutyouSel","Not Available for this Class",0);
			return;
		}
	}
	if(wKK == 5){
		if(n_A_JOB==6||n_A_JOB==12||n_A_JOB==19||n_A_JOB==20||n_A_JOB==26||n_A_JOB==33){
			// myInnerHtml("A_KakutyouSel","Enlarge Weight Limit Lv: " + '<select name="A_KakutyouSelNum"onChange="StAllCalc()"></select><BR>'
			// +"Enlarge Weight Limit R Lv: " + '<select name="A_KakutyouSelNum2"onChange="StAllCalc()"></select><BR>',0);
			myInnerHtml("A_KakutyouSel","Enlarge Weight Limit Lv: " + '<select name="A_KakutyouSelNum"onChange="StAllCalc()"></select><BR>',0);
			// for(i=0;i<=10;i++)
			// 	document.calcForm.A_KakutyouSelNum2.options[i] = new Option(i,i);
			for(i=0;i<=10;i++)
				document.calcForm.A_KakutyouSelNum.options[i] = new Option(i,i);
			// if(n_A_JOB==20)
			// 	document.calcForm.A_KakutyouSelNum.value=0;
			// else
				document.calcForm.A_KakutyouSelNum.value=10;
		}else{
			// myInnerHtml("A_KakutyouSel","Enlarge Weight Limit R Lv: " + '<select name="A_KakutyouSelNum2"onChange="StAllCalc()"></select><BR>',0);
			// for(i=0;i<=10;i++)
			// 	document.calcForm.A_KakutyouSelNum2.options[i] = new Option(i,i);
			myInnerHtml("A_KakutyouSel","",0);
		}
		return;
	}
	if(wKK == 7){
		CBIstr = "<table border=0>";
		CBIstr += '<tr><td>Your Target: <select name="R_OBJ" onChange = "StAllCalc()"></select><select name="S_OBJ" onChange = "StAllCalc()"></select><select name="E_OBJ" onChange = "calc()"></select><select name="B_OBJ" onChange = "calc()"></select><select name="SP_OBJ" onChange = "calc()"></select></td></tr>';
		CBIstr += "</table>";

		myInnerHtml("A_KakutyouData",CBIstr,0);

		for(i=0;i<SyuzokuOBJ.length;i++){
			document.calcForm.R_OBJ.options[i] = new Option(SyuzokuOBJ[i],i);
			document.calcForm.R_OBJ.value=0;}
		for(i=0;i<SizeOBJ.length;i++){
			document.calcForm.S_OBJ.options[i] = new Option(SizeOBJ[i],i);
			document.calcForm.S_OBJ.value=0;}
		for(i=0;i<ZokuseiOBJ2.length;i++){
			document.calcForm.E_OBJ.options[i] = new Option(ZokuseiOBJ2[i],i);
			document.calcForm.E_OBJ.value=0;}
		for(i=0;i<BossTypeOBJ.length;i++){
			document.calcForm.B_OBJ.options[i] = new Option(BossTypeOBJ[i],i);
			document.calcForm.B_OBJ.value=0;}
		for(i=0;i<SpecialTypeOBJ.length;i++){
			document.calcForm.SP_OBJ.options[i] = new Option(SpecialTypeOBJ[i],i);
			document.calcForm.SP_OBJ.value=0;}
		return;
	}
	if(wKK == 8){
		CBIstr = "<table>";
		CBIstr += '<tr><td>HP</td><td><input type="text" onChange="StAllCalc()" name="EN_HP" value="1" size=7></td><td>STR</td><td><input type="text" onChange="StAllCalc()" name="EN_STR" value="1" size=1></td>';
		CBIstr += '<td>Element</td><td><select name="EN_ELEM" onChange = "StAllCalc()"></select><select name="EN_ELEM2" onChange = "StAllCalc()"></select></td><td>Flee</td><td><input type="text" onChange="StAllCalc()" name="EN_FLEE" value="1" size=1></td></tr>';
		CBIstr += '<tr><td>VIT</td><td><input type="text" onChange="StAllCalc()" name="EN_VIT" value="1" size=1></td><td>INT</td><td><input type="text" onChange="StAllCalc()" name="EN_INT" value="1" size=1></td>';
		CBIstr += '<td>Race</td><td><select name="EN_RACE" onChange = "StAllCalc()"></select></td><td>Perfect Dodge</td><td><input type="text" onChange="StAllCalc()" name="EN_PD" value="1" size=1></td></tr>';
		CBIstr += '<tr><td>DEF</td><td><select name="EN_DEF" onChange = "StAllCalc()"></select></td><td>AGI</td><td><input type="text" onChange="StAllCalc()" name="EN_AGI" value="1" size=1></td>';
		CBIstr += '<td>Size</td><td><select name="EN_SIZE" onChange = "StAllCalc()"></select></td><td>Demi-Human Resistance</td><td><select name="EN_DHR" onChange = "StAllCalc()"></select> %</td></tr>';
		CBIstr += '<tr><td>MDEF</td><td><select name="EN_MDEF" onChange = "cStAllCalc()"></select></td><td>LUK</td><td><input type="text" onChange="StAllCalc()" name="EN_LUK" value="1" size=1></td>';
		CBIstr += '<td>Type</td><td><select name="EN_TYPE" onChange = "StAllCalc()"></select></td><td>Long Range Resistance</td><td><select name="EN_RR" onChange = "StAllCalc()"></select> %</td></tr>';
		CBIstr += '<tr><td>+ HP Gear</td><td><input type="text" onChange="StAllCalc()" name="EN_HP1" value="1" size=1></td><td>+% HP Gear</td><td><input type="text" onChange="StAllCalc()" name="EN_HP2" value="1" size=1></td>';
		CBIstr += '<td>Energy Coat</td><td><select name="EN_EC" onChange = "StAllCalc()"></select></td><td>Element Resistance</td><td><select name="EN_ELR1" onChange = "StAllCalc()"></select><input type="text" onChange="StAllCalc()" name="EN_ELR11" value="1" size=1></tr>';
		CBIstr += '<tr><td>Angelus</td><td><select name="EN_ANG" onChange = "StAllCalc()"></select></td><td>Auto-Guard</td><td><select name="EN_AG" onChange = "StAllCalc()"></select></td><td>Defender</td><td><select name="EN_DF" onChange = "StAllCalc()"></select></td><td>Element Resistance</td><td><select name="EN_ELR2" onChange = "StAllCalc()"></select><input type="text" onChange="StAllCalc()" name="EN_ELR21" value="1" size=1></tr>';
		CBIstr += "</table>";
		myInnerHtml("A_KakutyouSel",CBIstr,0);

		for(i=0;i<=99;i++){
				document.calcForm.EN_DEF.options[i] = new Option(i,i);
				document.calcForm.EN_DEF.value=0;}
		for(i=0;i<=99;i++){
				document.calcForm.EN_MDEF.options[i] = new Option(i,i);
				document.calcForm.EN_MDEF.value=0;}
		for(i=0;i<SyuzokuOBJ.length;i++){
			document.calcForm.EN_RACE.options[i] = new Option(SyuzokuOBJ[i],i);
			document.calcForm.EN_RACE.value=0;}
		for(i=0;i<ZokuseiOBJ2.length;i++){
			document.calcForm.EN_ELEM.options[i] = new Option(ZokuseiOBJ2[i],i);
			document.calcForm.EN_ELEM.value=0;}
		for(i=0;i<4;i++){
			document.calcForm.EN_ELEM2.options[i] = new Option(i+1,i);
			document.calcForm.EN_ELEM2.value=0;}
		for(i=0;i<SizeOBJ.length;i++){
			document.calcForm.EN_SIZE.options[i] = new Option(SizeOBJ[i],i);
			document.calcForm.EN_SIZE.value=0;}
		for(i=0;i<=100;i++){
				document.calcForm.EN_DHR.options[i] = new Option(i,i);
				document.calcForm.EN_DHR.value=0;}
		for(i=0;i<BossTypeOBJ.length;i++){
			document.calcForm.EN_TYPE.options[i] = new Option(BossTypeOBJ[i],i);
			document.calcForm.EN_TYPE.value=0;}
		for(i=0;i<=100;i++){
				document.calcForm.EN_RR.options[i] = new Option(i,i);
				document.calcForm.EN_RR.value=0;}
		for(i=0;i<EnergyCoatOBJ.length;i++){
			document.calcForm.EN_EC.options[i] = new Option(EnergyCoatOBJ[i],i);
			document.calcForm.EN_EC.value=0;}
		for(i=0;i<ZokuseiOBJ2.length;i++){
			document.calcForm.EN_ELR1.options[i] = new Option(ZokuseiOBJ2[i],i);
			document.calcForm.EN_ELR1.value=0;}
		for(i=0;i<ZokuseiOBJ2.length;i++){
			document.calcForm.EN_ELR2.options[i] = new Option(ZokuseiOBJ2[i],i);
			document.calcForm.EN_ELR2.value=0;}
		for(i=0;i<=10;i++){
				document.calcForm.EN_ANG.options[i] = new Option(i,i);
				document.calcForm.EN_ANG.value=0;}
		for(i=0;i<=10;i++){
				document.calcForm.EN_AG.options[i] = new Option(i,i);
				document.calcForm.EN_AG.value=0;}
		for(i=0;i<=5;i++){
				document.calcForm.EN_DF.options[i] = new Option(i,i);
				document.calcForm.EN_DF.value=0;}
		for(i=0;i<=99;i++){
				document.calcForm.EN_MDEF.options[i] = new Option(i,i);
				document.calcForm.EN_MDEF.value=0;}

		EN_HP.value = CYE[0];
		return;
	}
	if(wKK == 11){
		var w;
		w = '<Font size="2">Current Base Exp<input type="text" name="A_KakutyouSelNum" value="0" size=4 onChange="StAllCalc()" style="text-align : right;">%<BR>';
		w += 'Current Job Exp<input type="text" name="A_KakutyouSelNum2" value="0" size=4 onChange="StAllCalc()" style="text-align : right;">%<BR></Font>';
		myInnerHtml("A_KakutyouSel",w,0);
		return;
	}
	if(wKK == 12){
		if(n_A_JOB == 19 || n_A_JOB == 33 ){
			pitpotion = "<table border=0>";
			pitpotion += "<tr><td>Soul Linker Lv:</td>" + '<td><select name="SL_LV" onChange="StAllCalc()"></select>';
			pitpotion += "<td>Target's VIT:</td>" + '<td><select name="E_VIT" onChange="StAllCalc()"></select></td>';
			pitpotion += "<td>Target's INT:</td>" + '<td><select name="E_INT" onChange="StAllCalc()"></select></td></tr>';
			pitpotion += "<tr><td>Potion Pitcher:</td>" + '<td><select name="PP" onChange="StAllCalc()"></select></td>';
			pitpotion += "<td>Learning Potion:</td>" + '<td><select name="POT_RLevel" onChange="StAllCalc()"></select></td>';
			pitpotion += "<td>Ranked:</td>" + '<td><select name="RNK_BNS" onChange="StAllCalc()"></select></td>';
			pitpotion += "</tr>";
			if(n_A_JOB == 33){
				pitpotion += "<td>Slim Potion Pitcher:</td>" + '<td><select name="SPP" onChange="StAllCalc()"></select></td>';}
			pitpotion += "<td>Increase Spiritual Power: " + '<td><select name="ISP" onChange="StAllCalc()"></select></td>';
			pitpotion += "<td>Increase Recuperative Power: " + '<td><select name="IRP" onChange="StAllCalc()"></select></td>';
			pitpotion += "</tr></table>";
			myInnerHtml("A_KakutyouSel",pitpotion + "<br>",0);
			for(i=0;i<Potion_Max_2;i++)
					document.calcForm.PP.options[i] = new Option(Potion_Type_2[i][3],i);
					document.calcForm.PP.value=0;
			if(n_A_JOB == 33){
				for(i=0;i<Potion_Max_3;i++)
					document.calcForm.SPP.options[i] = new Option(Potion_Type_3[i][3],i);
					document.calcForm.SPP.value=0;}
			for(i=0;i<=10;i++)
					document.calcForm.POT_RLevel.options[i] = new Option(i,i);
					document.calcForm.POT_RLevel.value=0;
			for(i=0;i<=1;i++)
					document.calcForm.RNK_BNS.options[i] = new Option(Pot_Rank[i][1],i);
					document.calcForm.RNK_BNS.value=0;
			for(i=0;i<=200;i++)
				document.calcForm.E_VIT.options[i] = new Option(i,i);
				document.calcForm.E_VIT.value=0;
			for(i=0;i<=200;i++)
				document.calcForm.E_INT.options[i] = new Option(i,i);
				document.calcForm.E_INT.value=0;
			for(i=0;i<=99;i++)
				document.calcForm.SL_LV.options[i] = new Option(i,i);
				document.calcForm.SL_LV.value=0;
			for(i=0;i<=10;i++)
					document.calcForm.ISP.options[i] = new Option(i,i);
					document.calcForm.ISP.value=0;
			for(i=0;i<=10;i++)
					document.calcForm.IRP.options[i] = new Option(i,i);
					document.calcForm.IRP.value=0;
		}else{myInnerHtml("A_KakutyouSel","",0);}
		return;
	}
	if(wKK == 13){
		if(n_A_JOB==12||n_A_JOB==26){
			forgetext = "<table border = 0><tr><td>Oridecon Research:</td>" + '<td><select name="A_OriR" onChange="StAllCalc()"></select></td>';
			forgetext += "<td>Weapon Research:</td>" + '<td><select name="A_WepR" onChange="StAllCalc()"></select></td>';
			forgetext +=  "<td>Smith Lvl:</td>" + '<td><select name="A_SmithT" onChange="StAllCalc()"></select></td></tr>';
			forgetext +=  "<tr><td>Star Crumb:</td>" + '<td><select name="A_StarC" onChange="StAllCalc()"></select></td>';
			forgetext +=  "<td>Elemental Stone:</td>" + '<td><select name="A_ElemS" onChange="StAllCalc()"></select></td>';
			forgetext +=  "<td>Anvil:</td>" + '<td><select name="A_KakutyouSelNum" onChange="StAllCalc()"></select></td></tr>';
			forgetext += "<tr><td>Iron Tempering</td>" + '<td><select name="A_Iron" onChange="StAllCalc()"></select></td>';
			forgetext += "<td>Steel Tempering :</td>" + '<td><select name="A_Steel" onChange="StAllCalc()"></select></td>';
			forgetext += "<td>Enchanted Stone Craft:</td>" + '<td><select name="A_StoneC" onChange="StAllCalc()"></select></td></tr></table>';
			myInnerHtml("A_KakutyouSel",forgetext + "<br>",0);
			for(i=0;i<Anvil_Max;i++)
				document.calcForm.A_KakutyouSelNum.options[i] = new Option(Anvil_Type[i][2],i);
				document.calcForm.A_KakutyouSelNum.value=0;
			for(i=0;i<=5;i++)
				document.calcForm.A_OriR.options[i] = new Option(i,i);
				document.calcForm.A_OriR.value=0;
			for(i=0;i<=10;i++)
				document.calcForm.A_WepR.options[i] = new Option(i,i);
				document.calcForm.A_WepR.value=0;
			for(i=0;i<=3;i++)
				document.calcForm.A_StarC.options[i] = new Option(i,i);
				document.calcForm.A_StarC.value=0;
			for(i=0;i<=1;i++)
				document.calcForm.A_ElemS.options[i] = new Option(i,i);
				document.calcForm.A_ElemS.value=0;
			for(i=0;i<=3;i++)
				document.calcForm.A_SmithT.options[i] = new Option(i,i);
				document.calcForm.A_SmithT.value=0;
			for(i=0;i<=5;i++)
				document.calcForm.A_Iron.options[i] = new Option(i,i);
				document.calcForm.A_Iron.value=0;
			for(i=0;i<=5;i++)
				document.calcForm.A_Steel.options[i] = new Option(i,i);
				document.calcForm.A_Steel.value=0;
			for(i=0;i<=5;i++)
				document.calcForm.A_StoneC.options[i] = new Option(i,i);
				document.calcForm.A_StoneC.value=0;

		}else if(n_A_JOB==19||n_A_JOB==33){
			//custom TalonRO Update 2014-09-29
			potiontext = "<table border=0><tr><td>Potion to Create:</td>" + '<td><select name="A_KakutyouSelNum" onChange="StAllCalc()"></select></td>';
			potiontext += "<td>Learning Potion:</td>" + '<td><select name="A_PotionRLevel" onChange="StAllCalc()"></select></td></tr>';
			potiontext += "<tr><td>Pharmacy:</td>" + '<td><select name="A_PreparePLevel" onChange="StAllCalc()"></select></td></tr>';
			potiontext +=  "<tr><td>Homunculi Level:</td>" + '<td><select name="A_HomunLevel" onChange="StAllCalc()"></select></td>';
			potiontext +=  "<td>Homunculi Evolved:</td>" + '<td><select name="A_HomunEvolved" onChange="StAllCalc()"></select></td></tr></table>';

			myInnerHtml("A_KakutyouSel",potiontext + "<br>",0);
			for(i=0;i<Potion_Max;i++)
				document.calcForm.A_KakutyouSelNum.options[i] = new Option(Potion_Type[i][2],i);
				document.calcForm.A_KakutyouSelNum.value=0;
			for(i=0;i<=10;i++)
				document.calcForm.A_PotionRLevel.options[i] = new Option(i,i);
				document.calcForm.A_PotionRLevel.value=0;
			//custom TalonRO Update 2014-09-29
			//before
			//for(i=0;i<=5;i++)
			//	document.calcForm.A_Van.options[i] = new Option(i,i);
			//	document.calcForm.A_Van.value=0;
			for(i=0;i<=10;i++)
				document.calcForm.A_PreparePLevel.options[i] = new Option(i,i);
				document.calcForm.A_PreparePLevel.value=0;
			//custom TalonRO Update 2014-09-29
			//after
			for(i=0;i<=99;i++)
				document.calcForm.A_HomunLevel.options[i] = new Option(i,i);
				document.calcForm.A_HomunLevel.value=0;
			HomunEvolvedOption = ["no","yes"];
			for(i=0;i<=1;i++)
				document.calcForm.A_HomunEvolved.options[i] = new Option(HomunEvolvedOption[i],i);
				document.calcForm.A_HomunEvolved.value=0;
			//end
		}else{myInnerHtml("A_KakutyouSel","",0);}
		return;
	}
	if(wKK == 14){
		striptext = "";
		if(n_A_JOB == 14 || n_A_JOB == 28){
			striptext += "<table border=0><tr><td>Strip [Helm], [Armor], [Weapon] or [Shield] Level:</td>" + '<td><select name="S_LV" onChange="StAllCalc()"></select></td>';
			striptext += "<td>Enemy DEX:</td>" + '<td><select name="E_DEX" onChange="StAllCalc()"></select>';
			if(n_A_JOB == 28){
				striptext += "<tr><td>Full Strip Level:</td>" + '<td><select name="FS_LV" onChange="StAllCalc()"></select>';}
			striptext += "</td></tr></table>";
		}
		else if((CardNumSearch(157) || CardNumSearch(413)) && (n_A_JOB != 14 && n_A_JOB != 28)){
			striptext += "<table border=0><tr><td>Enemy DEX:</td>" + '<td><select name="E2_DEX" onChange="StAllCalc()"></select></td></tr>';
			if(CardNumSearch(157)){
				striptext += "<td>Strip [Weapon] Level: 1</td>";}
			if(CardNumSearch(413)){
			striptext += "<td>Strip [Armor] Level: 1</td>";}
		}
		myInnerHtml("A_KakutyouSel",striptext,0);
		if(n_A_JOB == 14 || n_A_JOB == 28){
			for(i=1;i<=5;i++){
				document.calcForm.S_LV.options[i-1] = new Option(i,i);
				document.calcForm.S_LV.value=1;}
			for(i=0;i<=200;i++){
				document.calcForm.E_DEX.options[i] = new Option(i,i);
				document.calcForm.E_DEX.value=0;}
			if(n_A_JOB == 28){
				for(i=1;i<=5;i++){
					document.calcForm.FS_LV.options[i-1] = new Option(i,i);
					document.calcForm.FS_LV.value=1;}
			}
		}
		else if(CardNumSearch(157) || CardNumSearch(413)){
			for(i=0;i<=200;i++){
				document.calcForm.E2_DEX.options[i] = new Option(i,i);
				document.calcForm.E2_DEX.value=0;}
			// if(CardNumSearch(157)){
			// 	document.calcForm.S2_LV.options[0] = new Option("1",0);
			// 	document.calcForm.S2_LV.value=0;}
			// else if(CardNumSearch(413)){
			// 	document.calcForm.S3_LV.options[0] = new Option("1",0);
			// 	document.calcForm.S3_LV.value=0;}
			// else{
			// 	document.calcForm.S2_LV.options[0] = new Option("1",0);
			// 	document.calcForm.S2_LV.value=0;
			// 	document.calcForm.S3_LV.options[0] = new Option("1",0);
			// 	document.calcForm.S3_LV.value=0;
			// }
		}
		return;
	}
	if(wKK == 15){
		cooktext = "<table border=0><tr><td>Level of the Food:</td>" + '<td><select name="Flv" onChange="StAllCalc()"></select></td>';
		cooktext += "<td>Stat of the Food:</td>" + '<td><select name="FStat" onChange="StAllCalc()"></select><td></tr>';
		cooktext += "<tr><td>Cooking Kit Used:</td>" + '<td><select name="CKit" onChange="StAllCalc()"></select></td>';
		cooktext +=  "<td>Cooking Experience:</td>" + '<td><input type="text" onChange="StAllCalc()" name="CExp" value="0" size=2></td></tr></table>';
		myInnerHtml("A_KakutyouSel",cooktext + "<br>",0);
		for(i=1;i<=10;i++){
			document.calcForm.Flv.options[i-1] = new Option(i,i);
			document.calcForm.Flv.value=1;}
		for(i=0;i<=5;i++){
			document.calcForm.FStat.options[i] = new Option(Stat_Food[i][1],i);
			document.calcForm.FStat.value=0;}
		for(i=0;i<Cook_Kit_Max;i++){
			document.calcForm.CKit.options[i] = new Option(Cook_Kit[i][1],i);
			document.calcForm.CKit.value=0;}

		return;
	}
	myInnerHtml("A_KakutyouSel","",0);
}

function SetCardShort(){
with(document.calcForm){
	w = eval(A_cardshort.value);
if(w > 0) {
	if(CardShort[w][1] < 10000){
		A_weapon1_card1.value = CardShort[w][1];
		A_weapon1_card2.value = CardShort[w][2];
		A_weapon1_card3.value = CardShort[w][3];
		A_weapon1_card4.value = CardShort[w][4];

		if(w == 9 || w == 10){
			w = MonsterOBJ[eval(B_Enemy.value)][3];

			if(10 <= w && w <= 14)
				A_weapon1_card1.value = 204;
			if((20 <= w && w <= 24) || (80 <= w && w <= 94))
				A_weapon1_card1.value = 203;
			if(30 <= w && w <= 34)
				A_weapon1_card1.value = 201;
			if(40 <= w && w <= 44)
				A_weapon1_card1.value = 202;
		}
	}else if(CardShort[w][0] != "Remove All Cards") { //Job Card Set
		if(CardShort[w][2] != 0)
			A_weapon1_card1.value = CardShort[w][2];
		if(CardShort[w][3] != 0)
			A_head1_card.value = CardShort[w][3];
		if(CardShort[w][4] != 0)
			A_left_card.value = CardShort[w][4];
		if(CardShort[w][5] != 0)
			A_body_card.value = CardShort[w][5];
		if(CardShort[w][6] != 0)
			A_shoulder_card.value = CardShort[w][6];
		if(CardShort[w][7] != 0)
			A_shoes_card.value = CardShort[w][7];
		if(CardShort[w][8] != 0)
			A_acces1_card.value = CardShort[w][8];
		if(CardShort[w][9] != 0)
			A_acces2_card.value = CardShort[w][9];
		if(CardShort[w][10] != 0)
			A_head2_card.value = CardShort[w][10];
	} else { //remove all cards
		A_weapon1_card1.value = 0;
		A_weapon1_card2.value = 0;
		A_weapon1_card3.value = 0;
		A_weapon1_card4.value = 0;

		if(typeof A_weapon2_card1 != "undefined") {
			A_weapon2_card1.value = 0;
			A_weapon2_card2.value = 0;
			A_weapon2_card3.value = 0;
			A_weapon2_card4.value = 0;
		}

		A_head1_card.value = 0;
		A_head2_card.value = 0;
		A_left_card.value = 0;
		A_body_card.value = 0;
		A_shoulder_card.value = 0;
		A_shoes_card.value = 0;
		A_acces1_card.value = 0;
		A_acces2_card.value = 0;
	}
	ActiveSkillSetPlus();
}
}}

function SetCardShortLeft(){
with(document.calcForm){
	w = eval(A_cardshortLeft.value);

	A_weapon2_card1.value = CardShort[w][1];
	A_weapon2_card2.value = CardShort[w][2];
	A_weapon2_card3.value = CardShort[w][3];
	A_weapon2_card4.value = CardShort[w][4];


	if(w == 9 || w == 10){
		w = MonsterOBJ[eval(B_Enemy.value)][3];

		if(10 <= w && w <= 14)
			A_weapon2_card1.value = 204;
		if((20 <= w && w <= 24) || (80 <= w && w <= 94))
			A_weapon2_card1.value = 203;
		if(30 <= w && w <= 34)
			A_weapon2_card1.value = 201;
		if(40 <= w && w <= 44)
			A_weapon2_card1.value = 202;
	}
}}

wESx = new Array();
for(i=0;i<=EnemyNum;i++)
	wESx[i]=new Array();

function EnemySort(){
	var len = document.calcForm.B_Enemy.length;
	for(var i=0;i<len;i++)
		document.calcForm.B_Enemy.options[0] = null;

	ESNum= [1,3,2,21,22,16,17,13,100];

	var wES2 = eval(document.calcForm.ENEMY_SORT.value);

	if(wES2==0){
		var x = new Array();

		for(var i=0;i<=EnemyNum;i++)
			x[i] = MonsterABC[i];
		x = SZ(x);
		var j=0;
		for(var i=0;i<=EnemyNum;i++){
			if(x[i] != -1){
				document.calcForm.B_Enemy.options[j] = new Option(MonsterOBJ[x[i]][1],x[i]);
				j++;
			}
		}
		return;
	}

	wES = ESNum[eval(document.calcForm.ENEMY_SORT.value)];
	wESx[0][0] = "S";
	wESx[0][1] = "E";
	STERTw = 0;
	ENDw = 0;
	for(i=1;i<=EnemyNum;i++){
		j=ENDw;
		if(MonsterOBJ[i][wES] >= MonsterOBJ[j][wES]){
			wESx[j][1] = i;
			wESx[i][0] = j;
			wESx[i][1] = "E";
			ENDw=i;
		}else{
			j=STERTw;
			if(MonsterOBJ[i][wES] <= MonsterOBJ[j][wES]){
				wESx[j][0] = i;
				wESx[i][0] = "S";
				wESx[i][1] = j;
				STERTw=i;
			}else{
				j=STERTw;
				jbk=STERTw;
				while(MonsterOBJ[i][wES] > MonsterOBJ[j][wES]){
					jbk=j;
					j = wESx[j][1];
				}
				wESx[jbk][1] = i;
				wESx[i][0] = jbk;
				wESx[i][1] = j;
				wESx[j][0] = i;
			}
		}
	}

	var x = new Array();
	var i;
	x[0] = i = STERTw;
	for(var j=1;wESx[i][1]!="E";j++){
		x[j] = wESx[i][1];
		i = wESx[i][1];
	}
	x = SZ(x);

	ESwork2 = new Array();
	if(wES==21||wES==22){
		for(i=0;i<=EnemyNum;i++)
			ESwork2[i] = MonsterOBJ[i][wES] +")";
	}
	else if(wES==2){
		for(i=0;i<=EnemyNum;i++)
			ESwork2[i] = SyuzokuOBJ[MonsterOBJ[i][2]] +")";
	}
	else if(wES==3){
		for(i=0;i<=EnemyNum;i++)
			ESwork2[i] = "["+ZokuseiOBJ2[Math.floor(MonsterOBJ[i][3] /10)] + MonsterOBJ[i][3] % 10 +"] ";
	}
	else{
		for(i=0;i<=EnemyNum;i++)
			ESwork2[i] = "";
	}

	var j=0;
	for(i=0;i<=EnemyNum;i++){
		if(x[i] != -1){
			document.calcForm.B_Enemy.options[j] = new Option(ESwork2[x[i]] + MonsterOBJ[x[i]][1],x[i]);
			j++;
		}
	}
}

function SZ(wSTR){
	var w = document.calcForm.ENEMY_SORT2.value;
	if(w != 0){
		for(var i=0;i<=EnemyNum;i++){
			if(wSTR[i] != -1){
				for(var j=0;MonMap[w][j] != "N";j++){
					if(wSTR[i] == MonMap[w][j])
						break;
				}
				if(MonMap[w][j] == "N")
					wSTR[i] = -1;
			}
		}
	}
	return wSTR;
}

var nMANUKU = [524,527,528,530,531,534,541];
function MANUKU_MONSTER(){
	for(var i=0;i < nMANUKU.length;i++){
		if(n_B[0] == nMANUKU[i])
			return 1;
	}
	return 0;
}

var nSUPURE = [525,526,529,532,533,537];
function SUPURE_MONSTER(){
	for(var i=0;i < nSUPURE.length;i++){
		if(n_B[0] == nSUPURE[i])
			return 1;
	}
	return 0;
}

n_NtoS =["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
n_NtoS2 =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];
function NtoS(n,keta){
	var strX = "";
	if(keta == 3){
		strX += n_NtoS[Math.floor(n / 100)];
		var w = n % 100;
		if(w >= 10)
			strX += w;
		else
			strX += "0" + w;
	}else if(keta == 2){
		strX += n_NtoS[Math.floor(n / 10)];
		strX += n % 10;
	}else{
		strX += n_NtoS[n];
	}
	return strX;
}

function StoN(n){
	n += "";
	for(var i=0;i<=61;i++)
		if(n == n_NtoS[i])
			return i;
}

SaveStr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14, 15,16, 17, 18, 19, 20, 21,22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
SaveStr1 = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1,  3, 1,  3,  3,  3,  3,  3, 1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3];

function SaveCookie(){
with(document.calcForm){
	SaveData = new Array();

	for(i=0;i<=100;i++)
		SaveData[i]=0;

	SaveData[0] = eval(A_JOB.value);
	SaveData[1] = eval(A_BaseLV.value);
	SaveData[2] = eval(A_JobLV.value);
	SaveData[3] = eval(A_STR.value);
	SaveData[4] = eval(A_AGI.value);
	SaveData[5] = eval(A_VIT.value);
	SaveData[6] = eval(A_DEX.value);
	SaveData[7] = eval(A_INT.value);
	SaveData[8] = eval(A_LUK.value);

	SaveData[9] = eval(A_HSE.value);

	SaveData[10] = eval(A_WeaponType.value);
	if(n_Nitou)
		SaveData[11] = eval(A_Weapon2Type.value);

	if(n_A_JobSearch()==2 || n_A_JobSearch()==4 || (n_A_JOB==45 && n_A_WeaponType!=0))
		SaveData[12] = eval(A_Arrow.value);

	SaveData[13] = eval(A_SpeedPOT.value);
	SaveData[14] = 4;
	SaveData[15] = eval(A_weapon1.value);
	SaveData[16] = eval(A_Weapon_ATKplus.value);
	SaveData[17] = eval(A_weapon1_card1.value);
	SaveData[18] = eval(A_weapon1_card2.value);
	SaveData[19] = eval(A_weapon1_card3.value);
	SaveData[20] = eval(A_weapon1_card4.value);
	if(n_Nitou){
		SaveData[21] = eval(A_weapon2.value);
		SaveData[22] = eval(A_Weapon2_ATKplus.value);
		SaveData[23] = eval(A_weapon2_card1.value);
		SaveData[24] = eval(A_weapon2_card2.value);
		SaveData[25] = eval(A_weapon2_card3.value);
		SaveData[26] = eval(A_weapon2_card4.value);
	}else{
		SaveData[21] = 0;
		SaveData[22] = 0;
		SaveData[23] = 0;
		SaveData[24] = 0;
		SaveData[25] = 0;
		SaveData[26] = 0;
	}
	SaveData[27] = eval(A_head1.value);
	SaveData[28] = eval(A_head1_card.value);
	SaveData[29] = eval(A_head2.value);
	SaveData[30] = eval(A_head2_card.value);
	SaveData[31] = eval(A_head3.value);
	SaveData[32] = eval(A_HSE_HEAD1.value);
	SaveData[33] = eval(A_left.value);
	SaveData[34] = eval(A_left_card.value);
	SaveData[35] = eval(A_body.value);
	SaveData[36] = eval(A_body_card.value);
	SaveData[37] = eval(A_shoulder.value);
	SaveData[38] = eval(A_shoulder_card.value);
	SaveData[39] = eval(A_shoes.value);
	SaveData[40] = eval(A_shoes_card.value);
	SaveData[41] = eval(A_acces1.value);
	SaveData[42] = eval(A_acces1_card.value);
	SaveData[43] = eval(A_acces2.value);
	SaveData[44] = eval(A_acces2_card.value);

	n_A_JobSet();
	w = n_A_JOB;


	var ch = 0;
	for(var i=0;i<=14 && ch==0;i++){
		if(JobSkillPassOBJ[w][i]!=999){
			var wOBJ = document.getElementById("A_skill"+i);
			SaveData[45+i] = eval(wOBJ.value);
		}else
			ch = 1;
	}

	SaveData[63] = eval(A_youshi.checked);
	if(SaveData[63] == true)
		SaveData[63] = 1;
	else if(SaveData[63] == false)
		SaveData[63] = 0;
	SaveData[64] = eval(A_Weapon_zokusei.value);

	for(i=0;i<=12;i++){
		SaveData[65+i] = n_A_PassSkill2[i];
		if(SaveData[65+i] == true)
			SaveData[65+i] = 1;
		else if(SaveData[65+i] == false)
			SaveData[65+i] = 0;
	}
	SaveData[78] = 0;
	SaveData[79] = 0;
	SaveData[80] = 0;
	SaveData[81] = 0;
	SaveData[82] = 0;
	SaveData[83] = 0;
	SaveData[84] = eval(A_HEAD_DEF_PLUS.value);
	SaveData[85] = eval(A_BODY_DEF_PLUS.value);
	SaveData[86] = eval(A_LEFT_DEF_PLUS.value);
	SaveData[87] = eval(A_SHOULDER_DEF_PLUS.value);
	SaveData[88] = eval(A_SHOES_DEF_PLUS.value);
	//custom TalonRO Kris Enchantment Save Cookie
	if(A_weapon1.value == 1472){
		SaveData[89] = eval(A_KE11.value);
		SaveData[90] = eval(A_KE12.value);
	}else{
		SaveData[89] = 0;
		SaveData[90] = 0;
	}
	if (typeof(A_weapon2) != "undefined"){
		if(A_weapon2.value == 1472){
			SaveData[91] = eval(A_KE21.value);
			SaveData[92] = eval(A_KE22.value);
		}else{
			SaveData[91] = 0;
			SaveData[92] = 0;
		}
	}else{
		SaveData[91] = 0;
		SaveData[92] = 0;
	}
	//custom TalonRO SQI interface Save Cookie
	x_sqibonus=0;
	for(i=0;i<=3 && SQI_Bonus_Effect[i]==0;i++);
	if(i!=4)
		x_sqibonus = 1;
	if (x_sqibonus){
		SaveData[93] = SQI_Bonus_Effect[0];
		SaveData[94] = SQI_Bonus_Effect[1];
		SaveData[95] = SQI_Bonus_Effect[2];
		SaveData[96] = SQI_Bonus_Effect[3];
	}else{
		SaveData[93] = 0;
		SaveData[94] = 0;
		SaveData[95] = 0;
		SaveData[96] = 0;
	}

	//[Custom TalonRO 2018-06-14 - Save Cookie for Malangdo] [Kato]
	SaveData[97] = ((A_ME11.value) ? eval(A_ME11.value) : 0);
	SaveData[98] = ((A_ME12.value) ? eval(A_ME12.value) : 0);


	if (typeof(A_weapon2) != "undefined"){
			SaveData[99] = ((A_ME21.value) ? eval(A_ME21.value) : 0);
			SaveData[100] = ((A_ME22.value) ? eval(A_ME22.value) : 0);
	}else{
			SaveData[99] = 0;
			SaveData[100] = 0;
	}

	//wak1="";
	//for(i=0;i<=96;i++)
	//	wak1+=i+": "+SaveData[i]+"\n";
	for(i=0;i<=100;i++)
		SaveData[i] = NtoS(SaveData[i],SaveStr1[i]);
	//for(i=0;i<=96;i++)
	//	wak1+=i+": "+SaveData[i]+"\n";
	//alert(wak1);

	cookieNum = A_SaveSlot.value;

	wDay = 99000;

	wCookie = new Date();
	wCookie.setTime(wCookie.getTime()+(wDay*1000*60*60*24));
	expDay = wCookie.toGMTString();

	wStr = "" +SaveData[0];

	for(i=1;i<=100;i++){
		wStr += ""+SaveData[i];
	}
	document.cookie = cookieNum +"="+ wStr +"; expires="+ expDay;

	bkcN = cookieNum;
	LoadCookie3();
	A_SaveSlot.value = bkcN;
}}

function LoadCookie(){
with(document.calcForm){
	SaveData = new Array();
	cookieNum = A_SaveSlot.value;
	SaveData = document.cookie.split("; ");
	wStr = "";
	//clear baby job status before load - [Loa] - 2018-06-22
	if(A_youshi.checked){
		A_youshi.checked = false;
		BabyJobs();
	}
	//clear vanilla modes before load - [Loa] - 2018-07-07
	if(vanilla.checked){
		vanilla.checked = false;
		Vanilla();
	}

	for(i=0;SaveData[i];i++){
		if (SaveData[i].substr(0,6) == cookieNum +"="){
			wStr = SaveData[i].substr(6,SaveData[i].length);
			break;
		}
	}

	for(i=0;i<=100;i++)
		SaveData[i] = 0;

	j=0;
	for(i=0;i<=100;i++){
		if(SaveStr1[i] == 1){
			SaveData[i] = wStr.substr(j,1);
			j++;
		}else if(SaveStr1[i] == 2){
			SaveData[i] = wStr.substr(j,2)
			j+=2;
		}else{
			SaveData[i] = wStr.substr(j,3);
			j+=3;
		}
	}

	for(i=0;i<=100;i++){
		if(SaveStr1[i] == 1)
			SaveData[i] = StoN(SaveData[i]);
		if(SaveStr1[i] == 2)
			SaveData[i] = StoN(SaveData[i].substr(0,1)) + SaveData[i].substr(1,1);
		if(SaveStr1[i] == 3)
			SaveData[i] = StoN(SaveData[i].substr(0,1)) + SaveData[i].substr(1,2);
	}

	for(i=0;i<=100;i++){
		if(SaveStr1[i] == 3 && SaveData[i].substr(0,2) == "00")
			SaveData[i] = SaveData[i].substr(2,1);
		else if(SaveStr1[i] == 3 && SaveData[i].substr(0,1) == "0")
			SaveData[i] = SaveData[i].substr(1,2);
		else if(SaveStr1[i] == 2 && SaveData[i].substr(0,1) == "0")
			SaveData[i] = SaveData[i].substr(1,1);
	}
	if(SaveData[88] == "u" || SaveData[88] == "und")
		SaveData[88] = 0;

	//custom TalonRO
	//to make sure cookies created before kris/sqi save feature can be loaded
	for(i=89;i<=96;i++){
		if (typeof(SaveData[i]) == "undefined"){
			SaveData[i] = 0;
		}
	}

	for(i=97;i<=100;i++){
		if (typeof(SaveData[i]) == "undefined"){
			SaveData[i] = 0;
		}
	}

	for(i=0;i<=100;i++)
			SaveData[i] = eval(SaveData[i]);

	if(eval(SaveData[0]) == 20 && eval(SaveData[54]) == 1)
		SuperNoviceFullWeaponCHECK = 1;
	else
		SuperNoviceFullWeaponCHECK = 0;

	A_JOB.value = SaveData[0];
	ClickJob(SaveData[0]);
	A_BaseLV.value = SaveData[1];
	A_JobLV.value = SaveData[2];
	A_STR.value = SaveData[3];
	A_AGI.value = SaveData[4];
	A_VIT.value = SaveData[5];
	A_DEX.value = SaveData[6];
	A_INT.value = SaveData[7];
	A_LUK.value = SaveData[8];

	A_HSE.value = SaveData[9];

	A_WeaponType.value = SaveData[10];
	ClickWeaponType(SaveData[10]);
	if((SaveData[0] == 8 || SaveData[0] == 22) && SaveData[10] != 11){
		A_Weapon2Type.value = SaveData[11];
		ClickWeaponType2(SaveData[11]);
	}
	n_A_JobSet();

	if(n_A_JobSearch()==2 || n_A_JobSearch()==4 || (n_A_JOB==45 && SaveData[10]!=0))
		A_Arrow.value = SaveData[12];

	A_SpeedPOT.value = SaveData[13];
	A_weapon1.value = SaveData[15];
	A_Weapon_ATKplus.value = SaveData[16];
	A_weapon1_card1.value = SaveData[17];
	A_weapon1_card2.value = SaveData[18];
	A_weapon1_card3.value = SaveData[19];
	A_weapon1_card4.value = SaveData[20];
	if(n_Nitou){
		A_weapon2.value = SaveData[21];
		A_Weapon2_ATKplus.value = SaveData[22];
		A_weapon2_card1.value = SaveData[23];
		A_weapon2_card2.value = SaveData[24];
		A_weapon2_card3.value = SaveData[25];
		A_weapon2_card4.value = SaveData[26];
	}

	if(SaveData[14] < 4){
		if(SaveData[28] == 299)SaveData[28] = 298;
		if(SaveData[28] == 400)SaveData[28] = 298;
		if(SaveData[30] == 299)SaveData[30] = 298;
		if(SaveData[30] == 400)SaveData[30] = 298;
		if(SaveData[34] == 311)SaveData[34] = 310;
		if(SaveData[36] == 226)SaveData[36] = 225;
		if(SaveData[38] == 272)SaveData[38] = 271;
		if(SaveData[40] == 305)SaveData[40] = 304;
		if(SaveData[40] == 363)SaveData[40] = 362;
	}

	A_head1.value = SaveData[27];
	A_head1_card.value = SaveData[28];
	A_head2.value = SaveData[29];
	A_head2_card.value = SaveData[30];
	A_head3.value = SaveData[31];
	A_HSE_HEAD1.value = SaveData[32];
	A_left.value = SaveData[33];
	A_left_card.value = SaveData[34];
	A_body.value = SaveData[35];
	A_body_card.value = SaveData[36];
	A_shoulder.value = SaveData[37];
	A_shoulder_card.value = SaveData[38];
	A_shoes.value = SaveData[39];
	A_shoes_card.value = SaveData[40];
	A_acces1.value = SaveData[41];
	A_acces1_card.value = SaveData[42];
	A_acces2.value = SaveData[43];
	A_acces2_card.value = SaveData[44];

	w = n_A_JOB;

	var ch = 0;
	for(var i=0;i<=14 && ch==0;i++){
		if(JobSkillPassOBJ[w][i]!=999){
			var wOBJ = document.getElementById("A_skill"+i);
			wOBJ.value = SaveData[45+i];
		}else
			ch = 1;
	}

	A_youshi.checked = SaveData[63];
	A_Weapon_zokusei.value = SaveData[64];
	for(i=0;i<=12;i++)
		n_A_PassSkill2[i] = SaveData[65+i];
	for(i=0;i<=12;i++)
		n_A_PassSkill2[i] = eval(n_A_PassSkill2[i]);
	if(n_SkillSW){
		A2_Skill0.value = n_A_PassSkill2[0];
		A2_Skill1.value = n_A_PassSkill2[1];
		A2_Skill2.value = n_A_PassSkill2[2];
		A2_Skill3.checked = n_A_PassSkill2[3];
		A2_Skill4.value = n_A_PassSkill2[4];
		A2_Skill5.checked = n_A_PassSkill2[5];
		A2_Skill6.checked = n_A_PassSkill2[6];
		A2_Skill7.checked = n_A_PassSkill2[7];
		A2_Skill8.value = n_A_PassSkill2[8];
		A2_Skill9.value = n_A_PassSkill2[9];
		A2_Skill10.value = n_A_PassSkill2[10];
		A2_Skill11.checked = n_A_PassSkill2[11];
		A2_Skill12.checked = n_A_PassSkill2[12];
	}
	if(SaveData[14] >= 3){
		A_HEAD_DEF_PLUS.value = SaveData[84];
		A_BODY_DEF_PLUS.value = SaveData[85];
		A_LEFT_DEF_PLUS.value = SaveData[86];
		A_SHOULDER_DEF_PLUS.value = SaveData[87];
		A_SHOES_DEF_PLUS.value = SaveData[88];
	}else{
		A_HEAD_DEF_PLUS.value = 0;
		A_BODY_DEF_PLUS.value = 0;
		A_LEFT_DEF_PLUS.value = 0;
		A_SHOULDER_DEF_PLUS.value = 0;
		A_SHOES_DEF_PLUS.value = 0;
	}
	//custom TalonRO Kris Enchantment Load Cookie
	if(A_weapon1.value == 1472){
		A_KE11.value = SaveData[89];
		A_KE12.value = SaveData[90];
	}
	if (typeof(A_weapon2) != "undefined"){
		if(A_weapon2.value == 1472){
			A_KE21.value = SaveData[91];
			A_KE22.value = SaveData[92];
		}
	}
	for(var i=0;i < SQI_Bonus_Effect.length;i++)
			SQI_Bonus_Effect[i] = 0;
	//custom TalonRO Kris Enchantment Load Cookie
	if (typeof(SaveData[93]) == "undefined"){		//to make sure cookies created before sqi save feature can be loaded
		SaveData[93] = 0;
		SaveData[94] = 0;
		SaveData[95] = 0;
		SaveData[96] = 0;
	}
	SQI_Bonus_Effect[0] = SaveData[93];
	SQI_Bonus_Effect[1] = SaveData[94];
	SQI_Bonus_Effect[2] = SaveData[95];
	SQI_Bonus_Effect[3] = SaveData[96];

	// [Custom TalonRO - 2018-06-15 - Load Cookie for Malangdo Enchants] [Kato]
	A_ME11.value = SaveData[97];
	A_ME12.value = SaveData[98];
	A_ME21.value = SaveData[99];
	A_ME22.value = SaveData[100];

	Click_SQI_Bonus(0);

	StCalc(1);
	StAllCalc();
	ActiveSkillSetPlus();
}}

function LoadCookieSP(){
with(document.calcForm){
	var wStr = "";
	//custom TalonRO adding char saves
	//old
	//for(var k=0;k<=18;k++){
	//new
	for(var k=0;k<=49;k++){
		var SaveData = new Array();
		if(k <= 7)
			var	cookieNum = "num0"+k;
		if(k == 8)
			var	cookieNum = "num09";
		if(k == 9)
			var	cookieNum = "num10";
		if(k > 10)
			var cookieNum = "num"+k;
		SaveData = document.cookie.split("; ");
		var ch=0;
		for(i=0;SaveData[i];i++){
			if (SaveData[i].substr(0,6) == cookieNum +"="){
				wStr += SaveData[i].substr(6,SaveData[i].length);
				ch = 1;
				var x=0;
				for(var i=0;i<=88;i++)
					x += SaveStr1[i];
				for(i=x;i<=159;i++)
					wStr += 0;
				wStr += "<BR>";
			}
		}
		if(ch==0){
			for(var i=0;i<=159;i++)
				wStr += 0;
			wStr += "<BR>";
		}
	}
	myInnerHtml("PR1",wStr,0);
}}

function LoadCookie3(){

	SaveData = new Array();
	//custom TalonRO adding char saves
	//old
	//for(k=1;k<=19;k++){
	//new
	for(k=1;k<=50;k++){
		cookieNum = "num0"+ (k-1);
		if(k == 9)
			cookieNum = "num0"+ k;
		if(k >= 10)
			cookieNum = "num"+ k;
		SaveData = document.cookie.split("; ");
		wStr = "";

		for(i=0;SaveData[i];i++){
			if(SaveData[i].substr(0,6) == cookieNum +"="){
				wStr = SaveData[i].substr(6,SaveData[i].length);
				break;
			}
		}

		if(wStr.substr(27,1) >= 1){
			SaveData[0] = wStr.substr(0,2);
			SaveData[0] = eval(SaveData[0]);
		}else{
			SaveData[0] = 998;
		}
		SaveData[63] = wStr.substr(132,1);

		if(1<= SaveData[0] && SaveData[0] <=45){
			if(SaveData[63]==0)
				document.calcForm.A_SaveSlot.options[k-1] = new Option("Save "+k +": " + JobName[SaveData[0]],cookieNum);
			else
				document.calcForm.A_SaveSlot.options[k-1] = new Option("Save"+k +": Baby "+JobName[SaveData[0]],cookieNum);
		}
		else if(SaveData[0] == 999 || SaveData[0] == 0){
			document.calcForm.A_SaveSlot.options[k-1] = new Option("Save"+k +": Novice",cookieNum);
		}
		else
			document.calcForm.A_SaveSlot.options[k-1] = new Option("Save "+k +": No Data",cookieNum);
	}
}

function SaveCookieConf(){
	SaveData = new Array();

	wDay = 99000;

	wCookie = new Date();
	wCookie.setTime(wCookie.getTime()+(wDay*1000*60*60*24));
	expDay = wCookie.toGMTString();


	wStr = "a" + NtoS2(eval(document.calcForm.Conf01.value),2) + "00000";

	document.cookie = "ConfData" +"="+ wStr +"; expires="+ expDay;
}

function LoadCookieConf(){

	SaveData = new Array();
	SaveData = document.cookie.split("; ");
	wStr = "";

	wLCF = 0;
	for(i=0;SaveData[i];i++){
		if(SaveData[i].substr(0,9) == "ConfData" +"="){
			wStr = SaveData[i].substr(9,SaveData[i].length);
			wLCF = 1;
			break;
		}
	}

	/*if(wLCF == 1){
		if(wStr.substr(0,1) == "0"){
			document.calcForm.Conf01.value = wStr.substr(1,2);
			SaveCookieConf();
		}else
			document.calcForm.Conf01.value = StoN2(wStr.substr(1,2));
	}else{
		document.calcForm.Conf01.value = 33;
	}*/
}

function SaveCookieChangelogDisplay(){
	var disp;
	if (document.getElementById('ChangelogDisplay').style.display=='inline'){
		document.getElementById('ChangelogDisplay').style.display='none';
		disp=0;
	}else if (document.getElementById('ChangelogDisplay').style.display=='none'){
		document.getElementById('ChangelogDisplay').style.display='inline';
		disp=1;
	}
	wDay = 99000;

	wCookie = new Date();
	wCookie.setTime(wCookie.getTime()+(wDay*1000*60*60*24));
	expDay = wCookie.toGMTString();

	//wStr = "a" + NtoS2(eval(document.calcForm.Conf01.value),2) + "00000";

	document.cookie = "ChangelogDisplay" +"="+ disp +"; expires="+ expDay;
}

function LoadCookieChangelogDisplay(){

	SaveData = new Array();
	SaveData = document.cookie.split("; ");
	wStr = "";
	wLCF = 0;
	for(i=0;SaveData[i];i++){
		if(SaveData[i].substr(0,17) == "ChangelogDisplay" +"="){
			wStr = SaveData[i].substr(17,SaveData[i].length);
			wLCF = 1;
			break;
		}
	}
	if(wLCF == 1){
		if (wStr.substr(0,1) == "0"){
			document.getElementById('ChangelogDisplay').style.display='none';
		}else if (wStr.substr(0,1) == "1"){
			document.getElementById('ChangelogDisplay').style.display='inline';
		}
	}
}

function NtoS2(n,keta){
	var strX = "";
	if(keta == 3){
		strX += n_NtoS2[Math.floor(n / 3844)];
		strX += n_NtoS2[Math.floor(n % 3844 / 62)];
		strX += n_NtoS2[n % 62];
	}else if(keta == 2){
		strX += n_NtoS2[Math.floor(n / 62)];
		strX += n_NtoS2[n % 62];
	}else{
		strX += n_NtoS2[n];
	}
	return strX;
}

function NtoS01(wb,wc,wd,we,wf){

	var n = 0;
	if(wb == true)
		n += 16;
	if(wc == true)
		n += 8;
	if(wd == true)
		n += 4;
	if(we == true)
		n += 2;
	if(wf == true)
		n += 1;
	return NtoS2(n,1);
}


function NtoS05(wa,wb){
	var n;
	n = wa * 6;
	n += wb;
	return NtoS2(n,1);
}


function URLOUT(){
with(document.calcForm){
	calc();
	SaveData = new Array();
	for(var i=0;i<=88;i++)
		SaveData[i]="a";

	SaveData[0] = NtoS2(2,1);
	SaveData[1] = NtoS2(eval(A_JOB.value),2);
	SaveData[2] = NtoS2(eval(A_BaseLV.value),2);
	SaveData[3] = NtoS2(eval(A_JobLV.value),2);
	SaveData[4] = NtoS2(eval(A_STR.value),2);
	SaveData[5] = NtoS2(eval(A_AGI.value),2);
	SaveData[6] = NtoS2(eval(A_VIT.value),2);
	SaveData[7] = NtoS2(eval(A_DEX.value),2);
	SaveData[8] = NtoS2(eval(A_INT.value),2);
	SaveData[9] = NtoS2(eval(A_LUK.value),2);
	SaveData[10] = NtoS2(eval(A_SpeedPOT.value) * 10 + eval(A_Weapon_zokusei.value),1);

	SaveData[11] = NtoS2(eval(A_WeaponType.value),1);
	if(n_Nitou)
		SaveData[12] = NtoS2(eval(A_Weapon2Type.value),1);

	if(n_A_JobSearch()==2 || n_A_JobSearch()==4 || (n_A_JOB==45 && n_A_WeaponType!=0))
		SaveData[13] = NtoS2(eval(A_Arrow.value),1);

	SaveData[14] = NtoS2(eval(A_weapon1.value),2);
	SaveData[15] = NtoS2(eval(A_Weapon_ATKplus.value),1);
	SaveData[16] = NtoS2(eval(A_weapon1_card1.value),2);
	SaveData[17] = NtoS2(eval(A_weapon1_card2.value),2);
	SaveData[18] = NtoS2(eval(A_weapon1_card3.value),2);
	SaveData[19] = NtoS2(eval(A_weapon1_card4.value),2);
	if(n_Nitou){
		SaveData[20] = NtoS2(eval(A_weapon2.value),2);
		SaveData[21] = NtoS2(eval(A_Weapon2_ATKplus.value),1);
		SaveData[22] = NtoS2(eval(A_weapon2_card1.value),2);
		SaveData[23] = NtoS2(eval(A_weapon2_card2.value),2);
		SaveData[24] = NtoS2(eval(A_weapon2_card3.value),2);
		SaveData[25] = NtoS2(eval(A_weapon2_card4.value),2);
	}else{
		SaveData[20] = NtoS2(eval(A_left.value),2);
		SaveData[21] = NtoS2(eval(A_LEFT_DEF_PLUS.value),1);
		SaveData[22] = NtoS2(eval(A_left_card.value),2);
		SaveData[24] = SaveData[25] = SaveData[23] = NtoS2(0,2);;
	}
	SaveData[26] = NtoS2(eval(A_head1.value),2);
	SaveData[27] = NtoS2(eval(A_head1_card.value),2);
	SaveData[28] = NtoS2(eval(A_head2.value),2);
	SaveData[29] = NtoS2(eval(A_head2_card.value),2);
	SaveData[30] = NtoS2(eval(A_head3.value),2);
	SaveData[31] = NtoS2(eval(A_body.value),2);
	SaveData[32] = NtoS2(eval(A_body_card.value),2);
	SaveData[33] = NtoS2(eval(A_shoulder.value),2);
	SaveData[34] = NtoS2(eval(A_shoulder_card.value),2);
	SaveData[35] = NtoS2(eval(A_shoes.value),2);
	SaveData[36] = NtoS2(eval(A_shoes_card.value),2);
	SaveData[37] = NtoS2(eval(A_acces1.value),2);
	SaveData[38] = NtoS2(eval(A_acces1_card.value),2);
	SaveData[39] = NtoS2(eval(A_acces2.value),2);
	SaveData[40] = NtoS2(eval(A_acces2_card.value),2);
	SaveData[41] = NtoS2(eval(A_HEAD_DEF_PLUS.value),1);
	SaveData[42] = NtoS2(eval(A_BODY_DEF_PLUS.value),1);
	SaveData[43] = NtoS2(eval(A_SHOULDER_DEF_PLUS.value),1);
	SaveData[44] = NtoS2(eval(A_SHOES_DEF_PLUS.value),1);
	SaveData[45] = NtoS01(A_youshi.checked,0,0,0,0);

	n_A_JobSet();
	var w = n_A_JOB;

	var ch = 0;
	for(var i=0;i<=19 && ch==0;i++){
		if(JobSkillPassOBJ[w][i]!=999){
			var wOBJ = document.getElementById("A_skill"+i);
			SaveData[47+i] = NtoS2(eval(wOBJ.value),1);
		}else{
			SaveData[46] = NtoS2(i,1);
			ch = 1;
		}
	}

	var x = 47 + i - 1;
	for(var i=0;i<=14 && n_A_PassSkill2[i]==0;i++);
	if(i==15){
		SaveData[x] = NtoS2(0,1);
	}else{
		SaveData[x] = NtoS2(1,1);
		SaveData[x+1] = NtoS2(n_A_PassSkill2[0],1);
		SaveData[x+2] = NtoS2(n_A_PassSkill2[1],1);
		SaveData[x+3] = NtoS2(n_A_PassSkill2[4],1);
		SaveData[x+4] = NtoS2(n_A_PassSkill2[9],1);
		SaveData[x+5] = NtoS05(n_A_PassSkill2[2],n_A_PassSkill2[6]);
		SaveData[x+6] = NtoS05(n_A_PassSkill2[8],n_A_PassSkill2[10]);
		SaveData[x+7] = NtoS05(n_A_PassSkill2[13],n_A_PassSkill2[14]);
		SaveData[x+8] = NtoS01(n_A_PassSkill2[3],n_A_PassSkill2[5],n_A_PassSkill2[7],n_A_PassSkill2[11],n_A_PassSkill2[12]);
		x += 8;
	}

	SaveData[x+1] = NtoS2(A_ActiveSkill.value,2);


		SaveData[x+2] = NtoS2(eval(A_ActiveSkillLV.value),1);
	SaveData[x+3] = NtoS2(0,3);
	if(n_A_ActiveSkill==66 || n_A_ActiveSkill==326 || n_A_ActiveSkill==131 || n_A_ActiveSkill==88 || n_A_ActiveSkill==197 || n_A_ActiveSkill==394 || n_A_ActiveSkill==395 || n_A_ActiveSkill==405 || n_A_ActiveSkill==429)
		SaveData[x+3] = NtoS2(eval(SkillSubNum.value),3);
	SaveData[x+4] = NtoS2(n_B[0],2);
	x+=4;

	x+=1;
	for(var i=0;i<=24 && n_B_IJYOU[i]==0;i++);
	if(i==25){
		SaveData[x] = NtoS2(0,1);
	}else{
		SaveData[x] = NtoS2(1,1);
		SaveData[x+1] = NtoS2(n_B_IJYOU[0],1);
		SaveData[x+2] = NtoS05(n_B_IJYOU[1],n_B_IJYOU[18]);
		SaveData[x+3] = NtoS01(n_B_IJYOU[2],n_B_IJYOU[3],n_B_IJYOU[4],n_B_IJYOU[5],n_B_IJYOU[6]);
		SaveData[x+4] = NtoS01(n_B_IJYOU[7],n_B_IJYOU[8],n_B_IJYOU[9],n_B_IJYOU[10],n_B_IJYOU[19]);
		SaveData[x+5] = NtoS2(n_B_IJYOU[11],1);
		SaveData[x+6] = NtoS2(n_B_IJYOU[12],1);
		SaveData[x+7] = NtoS01(n_B_IJYOU[13],n_B_IJYOU[14],n_B_IJYOU[15],n_B_IJYOU[16],n_B_IJYOU[17]);
		SaveData[x+8] = NtoS01(n_B_IJYOU[20],n_B_IJYOU[21],n_B_IJYOU[22],0,0);
		SaveData[x+9] = NtoS05(n_B_IJYOU[23],n_B_IJYOU[24]);
		x+=9;
	}

	x+=1;
	for(var i=0;i<=9 && n_B_KYOUKA[i]==0;i++);
	if(i==10){
		SaveData[x] = NtoS2(0,1);
	}else{
		SaveData[x] = NtoS2(1,1);
		SaveData[x+1] = NtoS2(n_B_KYOUKA[0],1);
		SaveData[x+2] = NtoS01(n_B_KYOUKA[1],n_B_KYOUKA[2],n_B_KYOUKA[3],n_B_KYOUKA[4],n_B_KYOUKA[5]);
		SaveData[x+3] = NtoS2(n_B_KYOUKA[6],2);
		SaveData[x+4] = NtoS05(n_B_KYOUKA[7],n_B_KYOUKA[8]);
		SaveData[x+5] = NtoS01(n_B_KYOUKA[9],0,0,0,0);
		x+=5;
	}

	x+=1;

	checkHIT = [0,0,0,0,0];

	for(var i=0;i<=36 && n_A_PassSkill3[i]==0;i++);
	if(i!=37)
		checkHIT[0] = 1;
	for(i=0;i<=4 && n_A_PassSkill3[40+i]==0;i++);
	if(i!=5)
		checkHIT[1] = 1;
	for(i=0;i<=5 && n_A_PassSkill5[i]==0;i++);
	if(i!=6)
		checkHIT[2] = 1;
	for(i=0;i<=6 && n_A_PassSkill6[i]==0;i++);
	if(i!=7)
		checkHIT[3] = 1;
	for(i=0;i<=15 && n_A_PassSkill7[i]==0;i++);
	if(i!=16)
		checkHIT[4] = 1;

	SaveData[x] = NtoS01(checkHIT[0],checkHIT[1],checkHIT[2],checkHIT[3],checkHIT[4]);

	if(checkHIT[0]){
		SaveData[x+1] = NtoS2(n_A_PassSkill3[0],1);
		SaveData[x+2] = NtoS2(n_A_PassSkill3[1],1);
		SaveData[x+3] = NtoS2(n_A_PassSkill3[2],1);
		SaveData[x+4] = NtoS2(n_A_PassSkill3[3],1);
		SaveData[x+5] = NtoS2(n_A_PassSkill3[4],1);
		SaveData[x+6] = NtoS2(n_A_PassSkill3[5],1);
		SaveData[x+7] = NtoS2(n_A_PassSkill3[6],1);
		SaveData[x+8] = NtoS05(n_A_PassSkill3[7],n_A_PassSkill3[8]);
		SaveData[x+9] = NtoS05(n_A_PassSkill3[9],n_A_PassSkill3[10]);
		SaveData[x+10] = NtoS01(n_A_PassSkill3[11],n_A_PassSkill3[18],0,0,0);
		SaveData[x+11] = NtoS2(n_A_PassSkill3[12],2);
		SaveData[x+12] = NtoS2(n_A_PassSkill3[13],2);
		SaveData[x+13] = NtoS2(n_A_PassSkill3[14],2);
		SaveData[x+14] = NtoS2(n_A_PassSkill3[15],2);
		SaveData[x+15] = NtoS2(n_A_PassSkill3[16],2);
		SaveData[x+16] = NtoS2(n_A_PassSkill3[17],2);
		SaveData[x+17] = NtoS2(n_A_PassSkill3[20],2);
		SaveData[x+18] = NtoS2(n_A_PassSkill3[30],1);
		SaveData[x+19] = NtoS2(n_A_PassSkill3[21],2);
		SaveData[x+20] = NtoS2(n_A_PassSkill3[31],1);
		SaveData[x+21] = NtoS2(n_A_PassSkill3[22],2);
		SaveData[x+22] = NtoS2(n_A_PassSkill3[29],2);
		SaveData[x+23] = NtoS2(n_A_PassSkill3[32],1);
		SaveData[x+24] = NtoS2(n_A_PassSkill3[23],2);
		SaveData[x+25] = NtoS2(n_A_PassSkill3[33],1);
		SaveData[x+26] = NtoS2(n_A_PassSkill3[24],2);
		SaveData[x+27] = NtoS2(n_A_PassSkill3[34],1);
		SaveData[x+28] = NtoS2(n_A_PassSkill3[25],2);
		SaveData[x+29] = NtoS2(n_A_PassSkill3[35],1);
		SaveData[x+30] = NtoS2(n_A_PassSkill3[26],2);
		SaveData[x+31] = NtoS2(n_A_PassSkill3[36],1);
		x+=31;
	}

	if(checkHIT[1]){
		SaveData[x+1] = NtoS01(n_A_PassSkill3[40],0,0,0,0);
		SaveData[x+2] = NtoS05(n_A_PassSkill3[41],n_A_PassSkill3[42]);
		SaveData[x+3] = NtoS05(n_A_PassSkill3[43],n_A_PassSkill3[44]);
		x+=3;
	}

	if(checkHIT[2]){
		SaveData[x+1] = NtoS01(n_A_PassSkill5[0],n_A_PassSkill5[1],n_A_PassSkill5[2],n_A_PassSkill5[3],n_A_PassSkill5[4]);
		SaveData[x+2] = NtoS01(n_A_PassSkill5[5],0,0,0,0);
		x+=2;
	}

	if(checkHIT[3]){
		SaveData[x+1] = NtoS05(n_A_PassSkill6[0],n_A_PassSkill6[1]);
		SaveData[x+2] = NtoS05(n_A_PassSkill6[2],n_A_PassSkill6[4]);
		SaveData[x+3] = NtoS05(n_A_PassSkill6[5],0);
		SaveData[x+4] = NtoS2(n_A_PassSkill6[3],1);
		SaveData[x+5] = NtoS01(n_A_PassSkill6[6],0,0,0,0);
		x+=5;
	}

	if(checkHIT[4]){
		SaveData[x+1] = NtoS2(n_A_PassSkill7[3],2);
		SaveData[x+2] = NtoS2(n_A_PassSkill7[4],2);
		SaveData[x+3] = NtoS2(n_A_PassSkill7[5],2);
		SaveData[x+4] = NtoS2(n_A_PassSkill7[6],2);
		SaveData[x+5] = NtoS2(n_A_PassSkill7[7],2);
		SaveData[x+6] = NtoS2(n_A_PassSkill7[8],2);
		SaveData[x+7] = NtoS01(n_A_PassSkill7[0],n_A_PassSkill7[1],n_A_PassSkill7[2],n_A_PassSkill7[9],n_A_PassSkill7[10]);
		SaveData[x+8] = NtoS01(n_A_PassSkill7[11],n_A_PassSkill7[12],n_A_PassSkill7[13],n_A_PassSkill7[14],n_A_PassSkill7[15]);
		x+=8;
	}

	//SaveData[x+1] = NtoS2(parseInt(document.calcForm.Conf01.value),2);
	SaveData[x+1] = NtoS2(33,2);
	x+=1;

	SaveData[x+1] = NtoS2(parseInt(document.calcForm.A_HSE.value),2);
	x+=1;
	SaveData[x+1] = NtoS2(parseInt(document.calcForm.A_HSE_HEAD1.value),2);
	x+=1;

	//custom TalonRO Kris Enchantment SAVE URL
	if(A_weapon1.value == 1472){
		SaveData[x+1] = NtoS2(parseInt(document.calcForm.A_KE11.value),2);
		SaveData[x+2] = NtoS2(parseInt(document.calcForm.A_KE12.value),2);
		x+=2;
	}
	if (typeof(A_weapon2) != "undefined"){
		if(A_weapon2.value == 1472){
			SaveData[x+1] = NtoS2(parseInt(document.calcForm.A_KE21.value),2);
			SaveData[x+2] = NtoS2(parseInt(document.calcForm.A_KE22.value),2);
			x+=2;
		}
	}
	//custom TalonRO SQI interface
	x_sqibonus=0;
	SaveData[x+1] = NtoS2(0,1);
	for(i=0;i<=3 && SQI_Bonus_Effect[i]==0;i++);
	if(i!=4){
		x_sqibonus = 1;
		SaveData[x+1] = NtoS2(1,1);					//if any sqi bonus was activated set 1, else 0
	}
	x+=1;

	//custom TalonRO SQI interface SAVE URL
	if (x_sqibonus){
		SaveData[x+1] = NtoS2(SQI_Bonus_Effect[0],2);
		SaveData[x+2] = NtoS2(SQI_Bonus_Effect[1],2);
		SaveData[x+3] = NtoS2(SQI_Bonus_Effect[2],2);
		SaveData[x+4] = NtoS2(SQI_Bonus_Effect[3],2);
		x+=4;
	}

	//[Custom TalonRO 2018-06-15 - SAVE URL] [Kato]
		SaveData[x+1] = NtoS2(parseInt(document.calcForm.A_ME11.value),2);
		SaveData[x+2] = NtoS2(parseInt(document.calcForm.A_ME12.value),2);
		x+=2;
	if (typeof(A_weapon2) != "undefined"){
			SaveData[x+1] = NtoS2(parseInt(document.calcForm.A_ME21.value),2);
			SaveData[x+2] = NtoS2(parseInt(document.calcForm.A_ME22.value),2);
			x+=2;
	}

	wStr = "" +SaveData[0];
	for(i=1;i<=x;i++){
		wStr += ""+SaveData[i];
	}
	var w = location.href.split("?");
	URL_TEXT.value = w[0] +"?"+ wStr;
	URL_TEXT.select();
}}

function StoNx(n){
	n += "";
	for(var i=0;i<=61;i++)
		if(n == n_NtoS2[i])
			return i;
}

function StoN2(n){
	n += "";
	var keta = n.length;
	if(keta == 3){
		var w = n.charAt(0);
		var x = StoNx(w) * 62 * 62;
		w = n.charAt(1);
		x += StoNx(w) * 62;
		w = n.charAt(2);
		x += StoNx(w);
	}else if(keta == 2){
		var w = n.charAt(0);
		var x = StoNx(w) * 62;
		w = n.charAt(1);
		x += StoNx(w);
	}else{
		var w = n.charAt(0);
		var x = StoNx(w);
	}
	return x;
}

function URLIN(){
with(document.calcForm){

	var r = /\?/;
	var w = location.href.match(r);
	if(w){
		var SaveData = new Array();
		SaveData = location.href.split("?");
		var w = SaveData[1];

		if(StoN2(w.substr(1,2)) == 20 && StoN2(w.substr(90,1)))
			SuperNoviceFullWeaponCHECK = 1;
		else
			SuperNoviceFullWeaponCHECK = 0;
		var w_Version = StoN2(w.substr(0,1));
		A_JOB.value = StoN2(w.substr(1,2));
		ClickJob(StoN2(w.substr(1,2)),2);
		A_BaseLV.value = StoN2(w.substr(3,2));
		A_JobLV.value = StoN2(w.substr(5,2));
		A_STR.value = StoN2(w.substr(7,2));
		A_AGI.value = StoN2(w.substr(9,2));
		A_VIT.value = StoN2(w.substr(11,2));
		A_DEX.value = StoN2(w.substr(13,2));
		A_INT.value = StoN2(w.substr(15,2));
		A_LUK.value = StoN2(w.substr(17,2));
		A_SpeedPOT.value = Math.floor(StoN2(w.substr(19,1)) / 10);
		A_Weapon_zokusei.value = StoN2(w.substr(19,1)) % 10;
		A_WeaponType.value = StoN2(w.substr(20,1));

		ClickWeaponType(A_WeaponType.value);
		if((A_JOB.value == 8 || A_JOB.value == 22) && A_WeaponType.value != 11){
			A_Weapon2Type.value = StoN2(w.substr(21,1));
			ClickWeaponType2(A_Weapon2Type.value);
		}
		n_A_JobSet();

		if(n_A_JobSearch()==2 || n_A_JobSearch()==4 || (n_A_JOB==45 && n_A_WeaponType!=0))
			A_Arrow.value = StoN2(w.substr(22,1));
		A_weapon1.value = StoN2(w.substr(23,2));
		A_Weapon_ATKplus.value = StoN2(w.substr(25,1));
		A_weapon1_card1.value = StoN2(w.substr(26,2));
		A_weapon1_card2.value = StoN2(w.substr(28,2));
		A_weapon1_card3.value = StoN2(w.substr(30,2));
		A_weapon1_card4.value = StoN2(w.substr(32,2));
		if(n_Nitou){
			A_weapon2.value = StoN2(w.substr(34,2));
			A_Weapon2_ATKplus.value = StoN2(w.substr(36,1));
			A_weapon2_card1.value = StoN2(w.substr(37,2));
			A_weapon2_card2.value = StoN2(w.substr(39,2));
			A_weapon2_card3.value = StoN2(w.substr(41,2));
			A_weapon2_card4.value = StoN2(w.substr(43,2));
		}else{
			A_left.value = StoN2(w.substr(34,2));
			A_LEFT_DEF_PLUS.value = StoN2(w.substr(36,1));
			A_left_card.value = StoN2(w.substr(37,2));
		}
		A_head1.value = StoN2(w.substr(45,2));
		A_head1_card.value = StoN2(w.substr(47,2));
		A_head2.value = StoN2(w.substr(49,2));
		A_head2_card.value = StoN2(w.substr(51,2));
		A_head3.value = StoN2(w.substr(53,2));
		A_body.value = StoN2(w.substr(55,2));
		A_body_card.value = StoN2(w.substr(57,2));
		A_shoulder.value = StoN2(w.substr(59,2));
		A_shoulder_card.value = StoN2(w.substr(61,2));
		A_shoes.value = StoN2(w.substr(63,2));
		A_shoes_card.value = StoN2(w.substr(65,2));
		A_acces1.value = StoN2(w.substr(67,2));
		A_acces1_card.value = StoN2(w.substr(69,2));
		A_acces2.value = StoN2(w.substr(71,2));
		A_acces2_card.value = StoN2(w.substr(73,2));
		A_HEAD_DEF_PLUS.value = StoN2(w.substr(75,1));
		A_BODY_DEF_PLUS.value = StoN2(w.substr(76,1));
		A_SHOULDER_DEF_PLUS.value = StoN2(w.substr(77,1));
		A_SHOES_DEF_PLUS.value = StoN2(w.substr(78,1));
		var wn = StoN2(w.substr(79,1));
		A_youshi.checked = Math.floor(wn / 16);

		var max = StoN2(w.substr(80,1));
		for(var i=0;i<max;i++){
			var wOBJ = document.getElementById("A_skill"+i);
			wOBJ.value = StoN2(w.substr(81+i,1));
		}

		var x = 81 + i;
		if(StoN2(w.substr(x,1)) == 1){
			n_A_PassSkill2[0] = StoN2(w.substr(x+1,1));
			n_A_PassSkill2[1] = StoN2(w.substr(x+2,1));
			n_A_PassSkill2[4] = StoN2(w.substr(x+3,1));
			n_A_PassSkill2[9] = StoN2(w.substr(x+4,1));
			n_A_PassSkill2[2] = Math.floor(StoN2(w.substr(x+5,1)) / 6);
			n_A_PassSkill2[6] = StoN2(w.substr(x+5,1)) % 6;
			n_A_PassSkill2[8] = Math.floor(StoN2(w.substr(x+6,1)) / 6);
			n_A_PassSkill2[10] = StoN2(w.substr(x+6,1)) % 6;
			n_A_PassSkill2[13] = Math.floor(StoN2(w.substr(x+7,1)) / 6);
			n_A_PassSkill2[14] = StoN2(w.substr(x+7,1)) % 6;
			var wn = StoN2(w.substr(x+8,1));
			n_A_PassSkill2[3] = Math.floor(wn / 16);
			n_A_PassSkill2[5] = Math.floor(wn % 16 / 8);
			n_A_PassSkill2[7] = Math.floor(wn % 8 / 4);
			n_A_PassSkill2[11] = Math.floor(wn % 4 / 2);
			n_A_PassSkill2[12] = Math.floor(wn % 2 / 1);
			x+=8;
		}


		var BackupX = x;
/*		A_ActiveSkill.value = StoN2(w.substr(x+1,2));

		ClickActiveSkill();
		A_ActiveSkillLV.value = StoN2(w.substr(x+3,1));

		if(n_A_ActiveSkill==66 || n_A_ActiveSkill==326 || n_A_ActiveSkill==131 || n_A_ActiveSkill==88 || n_A_ActiveSkill==197 || n_A_ActiveSkill==394 || n_A_ActiveSkill==395 || n_A_ActiveSkill==405)
			SkillSubNum.value = StoN2(w.substr(x+4,3));

		B_Enemy.value = StoN2(w.substr(x+7,2));

*/		x+=8;

		x+=1;
		if(StoN2(w.substr(x,1)) == 1){
			n_B_IJYOU[0] = StoN2(w.substr(x+1,1));
			n_B_IJYOU[1] = Math.floor(StoN2(w.substr(x+2,1)) / 6);
			n_B_IJYOU[18] = StoN2(w.substr(x+2,1)) % 6;
			var wn = StoN2(w.substr(x+3,1));
			n_B_IJYOU[2] = Math.floor(wn / 16);
			n_B_IJYOU[3] = Math.floor(wn % 16 / 8);
			n_B_IJYOU[4] = Math.floor(wn % 8 / 4);
			n_B_IJYOU[5] = Math.floor(wn % 4 / 2);
			n_B_IJYOU[6] = Math.floor(wn % 2 / 1);
			wn = StoN2(w.substr(x+4,1));
			n_B_IJYOU[7] = Math.floor(wn / 16);
			n_B_IJYOU[8] = Math.floor(wn % 16 / 8);
			n_B_IJYOU[9] = Math.floor(wn % 8 / 4);
			n_B_IJYOU[10] = Math.floor(wn % 4 / 2);
			n_B_IJYOU[19] = Math.floor(wn % 2 / 1);
			n_B_IJYOU[11] = StoN2(w.substr(x+5,1));
			n_B_IJYOU[12] = StoN2(w.substr(x+6,1));
			wn = StoN2(w.substr(x+7,1));
			n_B_IJYOU[13] = Math.floor(wn / 16);
			n_B_IJYOU[14] = Math.floor(wn % 16 / 8);
			n_B_IJYOU[15] = Math.floor(wn % 8 / 4);
			n_B_IJYOU[16] = Math.floor(wn % 4 / 2);
			n_B_IJYOU[17] = Math.floor(wn % 2 / 1);
			wn = StoN2(w.substr(x+8,1));
			n_B_IJYOU[20] = Math.floor(wn / 16);
			n_B_IJYOU[21] = Math.floor(wn % 16 / 8);
			n_B_IJYOU[22] = Math.floor(wn % 8 / 4);
			n_B_IJYOU[23] = Math.floor(StoN2(w.substr(x+9,1)) / 6);
			n_B_IJYOU[24] = StoN2(w.substr(x+9,1)) % 6;
			x+=9;
		}

		x+=1;
		if(StoN2(w.substr(x,1)) == 1){
			n_B_KYOUKA[0] = StoN2(w.substr(x+1,1));
			var wn = StoN2(w.substr(x+2,1));
			n_B_KYOUKA[1] = Math.floor(wn / 16);
			n_B_KYOUKA[2] = Math.floor(wn % 16 / 8);
			n_B_KYOUKA[3] = Math.floor(wn % 8 / 4);
			n_B_KYOUKA[4] = Math.floor(wn % 4 / 2);
			n_B_KYOUKA[5] = Math.floor(wn % 2 / 1);
			n_B_KYOUKA[6] = StoN2(w.substr(x+3,2));
			n_B_KYOUKA[7] = Math.floor(StoN2(w.substr(x+5,1)) / 6);
			n_B_KYOUKA[8] = StoN2(w.substr(x+5,1)) % 6;
			wn = StoN2(w.substr(x+6,1));
			n_B_KYOUKA[9] = Math.floor(wn / 16);
			x += 6;
		}

		var checkHIT = [0,0,0,0,0];
		wn = StoN2(w.substr(x+1,1));
		checkHIT[0] = Math.floor(wn / 16);
		checkHIT[1] = Math.floor(wn % 16 / 8);
		checkHIT[2] = Math.floor(wn % 8 / 4);
		checkHIT[3] = Math.floor(wn % 4 / 2);
		checkHIT[4] = Math.floor(wn % 2 / 1);
		x+=1;

		if(checkHIT[0]){
			n_A_PassSkill3[0] = StoN2(w.substr(x+1,1));
			n_A_PassSkill3[1] = StoN2(w.substr(x+2,1));
			n_A_PassSkill3[2] = StoN2(w.substr(x+3,1));
			n_A_PassSkill3[3] = StoN2(w.substr(x+4,1));
			n_A_PassSkill3[4] = StoN2(w.substr(x+5,1));
			n_A_PassSkill3[5] = StoN2(w.substr(x+6,1));
			n_A_PassSkill3[6] = StoN2(w.substr(x+7,1));
			n_A_PassSkill3[7] = Math.floor(StoN2(w.substr(x+8,1)) / 6);
			n_A_PassSkill3[8] = StoN2(w.substr(x+8,1)) % 6;
			n_A_PassSkill3[9] = Math.floor(StoN2(w.substr(x+9,1)) / 6);
			n_A_PassSkill3[10] = StoN2(w.substr(x+9,1)) % 6;
			n_A_PassSkill3[11] = Math.floor(StoN2(w.substr(x+10,1)) / 16);
			n_A_PassSkill3[18] = Math.floor(StoN2(w.substr(x+10,1)) % 16 / 8);
			n_A_PassSkill3[12] = StoN2(w.substr(x+11,2));
			n_A_PassSkill3[13] = StoN2(w.substr(x+13,2));
			n_A_PassSkill3[14] = StoN2(w.substr(x+15,2));
			n_A_PassSkill3[15] = StoN2(w.substr(x+17,2));
			n_A_PassSkill3[16] = StoN2(w.substr(x+19,2));
			n_A_PassSkill3[17] = StoN2(w.substr(x+21,2));
			n_A_PassSkill3[20] = StoN2(w.substr(x+23,2));
			n_A_PassSkill3[30] = StoN2(w.substr(x+25,1));
			n_A_PassSkill3[21] = StoN2(w.substr(x+26,2));
			n_A_PassSkill3[31] = StoN2(w.substr(x+28,1));
			n_A_PassSkill3[22] = StoN2(w.substr(x+29,2));
			n_A_PassSkill3[29] = StoN2(w.substr(x+31,2));
			n_A_PassSkill3[32] = StoN2(w.substr(x+33,1));
			n_A_PassSkill3[23] = StoN2(w.substr(x+34,2));
			n_A_PassSkill3[33] = StoN2(w.substr(x+36,1));
			n_A_PassSkill3[24] = StoN2(w.substr(x+37,2));
			n_A_PassSkill3[34] = StoN2(w.substr(x+39,1));
			n_A_PassSkill3[25] = StoN2(w.substr(x+40,2));
			n_A_PassSkill3[35] = StoN2(w.substr(x+42,1));
			n_A_PassSkill3[26] = StoN2(w.substr(x+43,2));
			n_A_PassSkill3[36] = StoN2(w.substr(x+45,1));
			x+=45;
		}

		if(checkHIT[1]){
			var wn = StoN2(w.substr(x+1,1));
			n_A_PassSkill3[40] = Math.floor(wn / 16);
			n_A_PassSkill3[41] = Math.floor(StoN2(w.substr(x+2,1)) / 6);
			n_A_PassSkill3[42] = StoN2(w.substr(x+2,1)) % 6;
			n_A_PassSkill3[43] = Math.floor(StoN2(w.substr(x+3,1)) / 6);
			n_A_PassSkill3[44] = StoN2(w.substr(x+3,1)) % 6;
			x+=3;
		}

		if(checkHIT[2]){
			wn = StoN2(w.substr(x+1,1));
			n_A_PassSkill5[0] = Math.floor(wn / 16);
			n_A_PassSkill5[1] = Math.floor(wn % 16 / 8);
			n_A_PassSkill5[2] = Math.floor(wn % 8 / 4);
			n_A_PassSkill5[3] = Math.floor(wn % 4 / 2);
			n_A_PassSkill5[4] = Math.floor(wn % 2 / 1);
			wn = StoN2(w.substr(x+2,1));
			n_A_PassSkill5[5] = Math.floor(wn / 16);
			x+=2;
		}

		if(checkHIT[3]){
			n_A_PassSkill6[0] = Math.floor(StoN2(w.substr(x+1,1)) / 6);
			n_A_PassSkill6[1] = StoN2(w.substr(x+1,1)) % 6;
			n_A_PassSkill6[2] = Math.floor(StoN2(w.substr(x+2,1)) / 6);
			n_A_PassSkill6[4] = StoN2(w.substr(x+2,1)) % 6;
			n_A_PassSkill6[5] = Math.floor(StoN2(w.substr(x+3,1)) / 6);
			n_A_PassSkill6[3] = StoN2(w.substr(x+4,1));
			wn = StoN2(w.substr(x+5,1));
			n_A_PassSkill6[6] = Math.floor(wn / 16);
			x+=5;
		}

		if(checkHIT[4]){
			n_A_PassSkill7[3] = StoN2(w.substr(x+1,2));
			n_A_PassSkill7[4] = StoN2(w.substr(x+3,2));
			n_A_PassSkill7[5] = StoN2(w.substr(x+5,2));
			n_A_PassSkill7[6] = StoN2(w.substr(x+7,2));
			n_A_PassSkill7[7] = StoN2(w.substr(x+9,2));
			n_A_PassSkill7[8] = StoN2(w.substr(x+11,2));
			wn = StoN2(w.substr(x+13,1));
			n_A_PassSkill7[0] = Math.floor(wn / 16);
			n_A_PassSkill7[1] = Math.floor(wn % 16 / 8);
			n_A_PassSkill7[2] = Math.floor(wn % 8 / 4);
			n_A_PassSkill7[9] = Math.floor(wn % 4 / 2);
			n_A_PassSkill7[10] = Math.floor(wn % 2 / 1);
			wn = StoN2(w.substr(x+14,1));
			n_A_PassSkill7[11] = Math.floor(wn / 16);
			n_A_PassSkill7[12] = Math.floor(wn % 16 / 8);
			n_A_PassSkill7[13] = Math.floor(wn % 8 / 4);
			n_A_PassSkill7[14] = Math.floor(wn % 4 / 2);
			n_A_PassSkill7[15] = Math.floor(wn % 2 / 1);
			x+=14;
		}

		//document.calcForm.Conf01.value = StoN2(w.substr(x+1,2));
		x+=2;
		if(w_Version >= 1){
			document.calcForm.A_HSE.value = StoN2(w.substr(x+1,2));
			x+=2;
		}
		if(w_Version >= 2){
			document.calcForm.A_HSE_HEAD1.value = StoN2(w.substr(x+1,2));
			x+=2;
		}
		//custom TalonRO Kris Enchantment LOAD URL
		if(A_weapon1.value == 1472){
			A_KE11.value = StoN2(w.substr(x+1,2));
			A_KE12.value = StoN2(w.substr(x+3,2));
			x+=4
		}
		if (typeof(A_weapon2) != "undefined"){
			if(A_weapon2.value == 1472){
				A_KE21.value = StoN2(w.substr(x+1,2));
				A_KE22.value = StoN2(w.substr(x+3,2));
				x+=4
			}
		}
		//custom TalonRO SQI interface SAVE URL
		x_sqibonus=StoN2(w.substr(x+1,1));					//check if any sqi bonus was activated (0=none;1=activated)
		x+=1;
		if (x_sqibonus){
			SQI_Bonus_Effect[0] = StoN2(w.substr(x+1,2));
			SQI_Bonus_Effect[1] = StoN2(w.substr(x+3,2));
			SQI_Bonus_Effect[2] = StoN2(w.substr(x+5,2));
			SQI_Bonus_Effect[3] = StoN2(w.substr(x+7,2));
			x+=8;
		}

		//[Custom TalonRO 2018-06-15 - LOAD URL] [Kato]
		if((StoN2(w.substr(x+1,2)) != "undefined"))
			A_ME11.value = StoN2(w.substr(x+1,2));
		else
			A_ME11.value = 0;

		if((StoN2(w.substr(x+3,2)) != "undefined"))
			A_ME12.value = StoN2(w.substr(x+3,2));
		else
			A_ME12.value = 0;

		x+=4;

		if((StoN2(w.substr(x+1,2)) != "undefined"))
			A_ME21.value = StoN2(w.substr(x+1,2));
		else
			A_ME21.value = 0;

		if((StoN2(w.substr(x+3,2)) != "undefined"))
			A_ME22.value = StoN2(w.substr(x+3,2));
		else
			A_ME22.value = 0;

		x+=4;

		calc();

		StCalc(1);

		ActiveSkillSetPlus();
		x = BackupX;
		A_ActiveSkill.value = StoN2(w.substr(x+1,2));

		ClickActiveSkill();
		A_ActiveSkillLV.value = StoN2(w.substr(x+3,1));

		if(n_A_ActiveSkill==66 || n_A_ActiveSkill==326 || n_A_ActiveSkill==131 || n_A_ActiveSkill==88 || n_A_ActiveSkill==197 || n_A_ActiveSkill==394 || n_A_ActiveSkill==395 || n_A_ActiveSkill==405 || n_A_ActiveSkill==429)
			SkillSubNum.value = StoN2(w.substr(x+4,3));

		B_Enemy.value = StoN2(w.substr(x+7,2));


		calc();
	}
}}

JobName =
["Novice","Swordsman","Thief","Acolyte","Archer","Magician","Merchant","Knight","Assassin","Priest","Hunter","Wizard","Blacksmith","Crusader","Rogue","Monk","Bard","Dancer","Sage","Alchemist",
"Super Novice","Lord Knight","Assassin Cross","High Priest","Sniper","High Wizard","Whitesmith","Paladin","Stalker","Champion","Clown","Gypsy","Professor","Creator",
"High Novice","High Swordsman","High Thief","High Acolyte","High Archer","High Magician","High Merchant","Taekwon Kid","Star Gladiator","Soul Linker","Ninja","Gunslinger"];

for (i=0;i<=45;i++)
	document.calcForm.A_JOB.options[i] = new Option(JobName[i],i);

SpeedPotName = ["None","Concentration Potion","Awakening Potion","Berserk Potion"];

document.calcForm.A_SpeedPOT.options[0] = new Option(SpeedPotName[0],0);
document.calcForm.A_SpeedPOT.options[1] = new Option(SpeedPotName[1],1);

for (i=0;i<=16;i++)
	document.calcForm.A_Arrow.options[i] = new Option(ArrowOBJ[i][2],i);

EnName =["Neutral","Water","Earth","Fire","Wind","Poison","Holy","Shadow","Ghost","Undead"];
for (i=0;i<=9;i++)
	document.calcForm.A_Weapon_zokusei.options[i] = new Option(EnName[i],i);

CardShort =[
["Card Shortcuts",0,0,0,0], // # 0
["Remove All Cards",10000,0], // # 1
["Remove Weapon Cards",0,0,0,0], // # 2
["+60%[TTT]",323,323,323,0], // # 3
["+40%, +25% ASPD [DTT]",42,323,323,0], // # 4
["+20%, +50% ASPD [DDT]",42,42,323,0], // # 5
["+60%, +25% ASPD [DTTT]",42,323,323,323], // # 6
["+40%, +50% ASPD [DDTT]",42,42,323,323], // # 7
["+65 ATK, +50% ASPD [DDBS]",42,42,45,255], // # 8
["+130 ATK, +25% ASPD [DBSS]",42,45,255,255], // # 9
["+50% BB dmg [SGSG]",464,464,0,0], // # 10
["+75% BB dmg [SGSGSG]",464,464,464,0], // # 11
["+40%[2 Race Card]",1,1,0,0], // # 12
["+60%[3 Race Card]",1,1,1,0], // # 13
["+80%[4 Race Card]",1,1,1,1], // # 14
["+61%[2 Race/1 Size Cards]",1,1,3,0], // # 15
["+68%[2 Race/1 Element Cards]",1,1,2,0], // # 16
["+84%[3 Race/1 Size Cards]",1,1,1,3], // # 17
["+96%[2 Race/2 Element Cards]",1,1,2,2], // # 18
["+110%[2 AK/2 Race Cards]",31,31,1,1], // # 19
["+110%[3 AK/1 Race Cards]",31,31,31,1], // # 20
["+110%[3 AK/1 Element Cards]",31,31,31,2], // # 21
["2 Size Cards",3,3,0,0], // # 22
["3 Size Cards",3,3,3,0], // # 23
["4 Size Cards",3,3,3,3], // # 24
["Elemental + Star Crumb",0,106,0,0], // # 25
["Elemental + 2 Star Crumbs",0,106,106,0], // # 26
["3 Star Crumbs",106,106,106,0], // # 27
["+40 ATK[2 Andre Cards]",11,11,0,0], // # 28
["+60 ATK[3 Andre Cards]",11,11,11,0], // # 29
["+80 ATK[4 Andre Cards]",11,11,11,11], // # 30
["+60 ATK[2 Zipper Bear Cards]",326,326,0,0], // # 31
["+90 ATK[3 Zipper Bear Cards]",326,326,326,0], // # 32
["+120 ATK[4 Zipper Bear Cards]",326,326,326,326], // # 33
["2 Sold. Skeleton Cards",41,41,0,0], // # 34
["3 Sold. Skeleton Cards",41,41,41,0], // # 35
["4 Sold. Skeleton Cards",41,41,41,41], // # 36
["+40 HIT[2 Mummy Cards]",40,40,0,0], // # 37
["+60 HIT[3 Mummy Cards]",40,40,40,0], // # 38
["+80 HIT[4 Mummy Cards]",40,40,40,40], // # 39
["+60%[2 Orc Lady Cards]",252,252,0,0], // # 40
["+92%[2 Orc Lady/1 Hydra Cards]",252,252,13,0], // # 41
["+128%[3 Orc Lady/1 Hydra Cards]",252,252,252,13], // # 42
["+20%[2 Archer Skeleton Cards]",107,107,0,0], // # 43
["+30%[3 Archer Skeleton Cards]",107,107,107,0], // # 44
["+40%[4 Archer Skeleton Cards]",107,107,107,107], // # 45
["2 Fabre Cards",4,4,0,0], // # 46
["3 Fabre Cards",4,4,4,0], // # 47
["4 Fabre Cards",4,4,4,4], // # 48
["2 Drops Cards",5,5,0,0], // # 49
["3 Drops Cards",5,5,5,0], // # 50
["4 Drops Cards",5,5,5,5], // # 51
["+50%[2 Abysmal Knight Cards]",31,31,0,0], // # 52
["+75%[3 Abysmal Knight Cards]",31,31,31,0], // # 53
["+100%[4 Abysmal Knight Cards]",31,31,31,31], // # 54
["2 Crit Dmg+10%,Crit+7 Cards",156,156,0,0], // # 55
["3 Crit Dmg+10%,Crit+7 Cards",156,156,156,0], // # 56
["4 Crit Dmg+10%,Crit+7 Cards",156,156,156,156], // # 57
["Swordsman Set",10000,223,347,0,317,0,362,354,0,0], // # 58
["Thief Set",10000,233,0,0,0,295,391,395,260,0], // # 59
["Aco Set",10000,253,383,307,301,0,0,270,0,0], // # 60
["Archer Set",10000,279,0,0,224,340,351,531,0,0], // # 61
["Mage Set",10000,0,337,358,220,346,379,350,0,0], // # 62
["Merchant Set",10000,326,376,0,281,0,388,216,0,0], // # 63
["Crusader Set",10000,0,347,0,190,0,362,354,0,0], // # 64
["Rogue Set",10000,0,113,0,0,295,391,260,413,0], // # 65
["Monk Set",10000,253,383,0,181,0,0,270,0,0], // # 66
["Bard/Dancer Set",10000,279,0,0,224,340,408,230,0,0], // # 67
["Sage Set",10000,0,337,0,193,346,379,350,0,0], // # 68
["Alchemist Set",10000,326,175,0,281,0,388,104,0,0], // # 69
["+75% ASPD [DDD]",42,42,42,0], // # 70
["12% All-Size Dmg. Reduc. [3Drac]",47,47,47,0], // # 71
["16% All-Size Dmg. Reduc. [4Drac]",47,47,47,47], // # 72
["Test (for now)",0,0,0,0], // # 73
];
for(i=0;i<=72;i++)
	document.calcForm.A_cardshort.options[i] = new Option(CardShort[i][0],i);

//custom TalonRO extra enchants
//original
//var HSEname = ["STR","AGI","VIT","INT","DEX","LUK"];
//new:
var HSEname = ["STR","AGI","VIT","INT","DEX","LUK","DEF","MDEF","CRIT","ASPD","FLEE","HIT"];
document.calcForm.A_HSE.options[0] = new Option("(Hidden Slot Enchant, Armor)",0);
var iHSE=1;
for(i=0;i<=5;i++){
	for(var j=1;j<=3;j++){
		document.calcForm.A_HSE.options[iHSE] = new Option(HSEname[i] + "+"+ j,(i * 10) + j);
		iHSE++;
	}
}
//custom TalonRO extra enchants
//DEF,MDEF,CRIT
for(i=6;i<=8;i++){
	for(var j=1;j<=3;j++){
		document.calcForm.A_HSE.options[iHSE] = new Option(HSEname[i] + "+"+ (j+1),(i * 10) + j);
		iHSE++;
	}
}
//ASPD
for(var j=1;j<=3;j++){
	document.calcForm.A_HSE.options[iHSE] = new Option(HSEname[9] + "+"+ j +"%",(9 * 10) + j);
	iHSE++;
}
//FLEE
for(var j=1;j<=3;j++){
	document.calcForm.A_HSE.options[iHSE] = new Option(HSEname[10] + "+"+ j*2,(10 * 10) + j);
	iHSE++;
}
//HIT
for(var j=1;j<=3;j++){
	document.calcForm.A_HSE.options[iHSE] = new Option(HSEname[11] + "+"+ j*4,(11 * 10) + j);
	iHSE++;
}
//end - custom TalonRO extra enchants
//Enchant Headgear thing
document.calcForm.A_HSE_HEAD1.options[0] = new Option("(Hidden Slot Enchant, Headgear)",0);
var iHSE=1;
for(i=0;i<=5;i++){
	for(var j=1;j<=3;j++){
		document.calcForm.A_HSE_HEAD1.options[iHSE] = new Option(HSEname[i] + "+"+ j,(i * 10) + j);
		iHSE++;
	}
}

n_A_PassSkill2 = new Array();
for(i=0;i<=15;i++)
	n_A_PassSkill2[i] = 0;

n_A_PassSkill3 = new Array();
for(i=0;i<=45;i++)
	n_A_PassSkill3[i] = 0;
/*n_A_PassSkill3[20] = 100;
n_A_PassSkill3[21] = 100;
n_A_PassSkill3[22] = 130;
n_A_PassSkill3[29] = 80;
n_A_PassSkill3[23] = 100;
n_A_PassSkill3[24] = 130;
n_A_PassSkill3[25] = 50;
n_A_PassSkill3[26] = 50;
n_A_PassSkill3[30] = 10;
n_A_PassSkill3[31] = 10;
n_A_PassSkill3[32] = 10;
n_A_PassSkill3[33] = 10;
n_A_PassSkill3[34] = 10;
n_A_PassSkill3[35] = 10;
n_A_PassSkill3[36] = 10;
*/
n_A_PassSkill5 = new Array();
for(i=0;i<=5;i++)
	n_A_PassSkill5[i] = 0;

n_A_PassSkill6 = new Array();
for(i=0;i<=6;i++)
	n_A_PassSkill6[i] = 0;

n_A_PassSkill7 = new Array();
for(i=0;i<=15;i++)
	n_A_PassSkill7[i] = 0;

n_A_PassSkill8 = new Array();
for(i=0;i<=27;i++)
	n_A_PassSkill8[i] = 0;

	n_A_PassSkill8[3] = 7; //[Custom TalonRO - 6/4/2018 - Fixed the default value for BaseEXP to 8x] [Kato]
	n_A_PassSkill8[7] = 7; //[Custom TalonRO - 6/4/2018 - Fixed the default value for JobEXP to 8x] [Kato]

n_A_PassSkill9 = new Array();
for(i=0;i<=52;i++)
	n_A_PassSkill9[i] = 0;
//custom TalonRO SQI-Bonus calculation
SQI_Bonus_Effect = new Array();
for(i=0;i<4;i++){
	SQI_Bonus_Effect[i] = 0;
}
n_A_IJYOU = new Array();
for(i=0;i<=3;i++)
	n_A_IJYOU[i] = 0;

n_B_IJYOU = new Array();
for(i=0;i<=24;i++)
	n_B_IJYOU[i] = 0;

n_B_KYOUKA = new Array();
for(i=0;i<=9;i++)
	n_B_KYOUKA[i] = 0;

n_A_Equip = new Array();
for(i=0;i<=20;i++)
	n_A_Equip[i] = 0;
n_A_card = new Array();
for(i=0;i<=25;i++)
	n_A_card[i] = 0;

tPlusTaiseiSyokia();

for(i=0;i<ITEM_SP_TIME_OBJ.length;i++){
	if(ITEM_SP_TIME_OBJ[i][3] == 1){
		var str = "<Font size='2'><B>[Special Effect: [" + ITEM_SP_TIME_OBJ[i][2] +"] can be activated under 'Additional Effects' at the bottom of the page!]</B></Font>";
		if(ItemOBJ[ITEM_SP_TIME_OBJ[i][4]][10] == 0)
			ItemOBJ[ITEM_SP_TIME_OBJ[i][4]][10] = str;
		else
			ItemOBJ[ITEM_SP_TIME_OBJ[i][4]][10] += "<BR>"+ str;
	}
}

for(i=0;i<ITEM_SP_TIME_OBJ.length;i++){
	if(ITEM_SP_TIME_OBJ[i][3] == 2){
		var str = "<Font size='2'><B>[Special Effect: [" + ITEM_SP_TIME_OBJ[i][2] +"] can be activated under 'Additional Effects' at the bottom of the page!]</B></Font>";
		if(cardOBJ[ITEM_SP_TIME_OBJ[i][4]][3] == 0)
			cardOBJ[ITEM_SP_TIME_OBJ[i][4]][3] = str;
		else
			cardOBJ[ITEM_SP_TIME_OBJ[i][4]][3] += "<BR>"+ str;
	}
}

//[Custom TalonRO - 2018-06-03 - Populate combos in index] [Kato]
tRO_PopulateCombos();

document.calcForm.A_JOB.value = 0;
ClickJob(0);
if(Taijin==0)
	EnemySort();
StCalc();
calc();

LoadCookie3();
LoadCookieConf();
LoadCookieChangelogDisplay();
URLIN();

Click_Skill3SW();
Click_Skill4SW();
Click_Skill5SW();
Click_Skill6SW();
Click_Skill7SW();
Click_Skill8SW();
Click_EnemyKyoukaSW();
Click_IjyouSW();
Click_A2();
//custom TalonRO - Skill9SW deactivated
Click_Skill9SW();
//custom TalonRO SQI-Bonus calculation
Click_SQI_Bonus_SW();