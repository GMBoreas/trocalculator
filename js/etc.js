JobBOBJ = new Array();
for(i=0;i<=45;i++)
	JobBOBJ[i] = new Array();
JobBOBJ =[
["n"],
[2,0,6,2,10,4,14,0,18,2,22,4,26,5,30,1,33,0,36,4,38,2,40,0,42,2,44,5,46,1,47,0,49,0,50,0,"n"],
[2,1,6,0,10,4,14,2,18,3,22,4,26,5,30,0,33,1,36,1,38,0,40,5,42,4,44,2,46,5,47,0,49,4,50,1,"n"],
[2,5,6,2,10,3,14,4,18,5,22,1,26,0,30,2,33,3,36,4,38,5,40,1,42,0,44,2,46,3,47,4,49,0,50,5,"n"],
[2,4,6,0,10,3,14,4,18,4,22,5,26,1,30,4,33,1,36,4,38,0,40,0,42,4,44,5,46,2,47,3,49,1,50,4,"n"],
[2,3,6,4,10,4,14,3,18,1,22,3,26,1,30,5,33,3,36,4,38,3,40,1,42,5,44,3,46,3,47,1,49,5,50,3,"n"],
[2,2,6,4,10,0,14,4,18,2,22,0,26,3,30,2,33,1,36,5,38,4,40,0,42,4,44,0,46,5,47,2,49,0,50,4,"n"],
[1,2,3,2,4,0,5,5,8,2,10,0,11,4,12,2,13,1,15,0,17,2,18,2,19,4,20,5,21,0,23,2,27,0,28,5,29,2,31,4,33,0,36,2,37,5,38,1,40,4,43,2,46,0,47,0,48,4,49,4,"n"],
[1,1,2,1,3,1,4,3,6,2,8,2,9,4,11,0,14,3,15,1,16,1,17,1,18,1,19,1,20,1,21,1,24,4,25,0,27,0,30,4,31,4,32,0,38,3,40,4,41,4,42,3,45,0,46,4,48,0,50,4,"n"],
[1,5,3,5,4,0,6,1,7,2,8,3,9,3,10,5,11,0,14,2,16,4,17,0,20,4,21,5,22,3,25,4,27,0,29,1,31,5,32,4,34,2,35,0,36,2,37,1,39,5,42,3,43,3,45,2,48,1,50,5,"n"],
[1,4,3,3,4,4,5,0,7,5,8,4,10,0,11,0,12,1,14,4,15,5,17,2,19,1,20,1,21,4,23,2,27,4,29,5,31,1,33,4,34,3,38,4,39,1,41,3,42,5,43,4,44,0,46,3,47,1,49,4,"n"],
[1,3,2,4,4,3,5,4,6,1,9,3,10,1,12,0,13,4,15,5,18,3,22,3,24,1,26,4,29,3,31,3,32,4,33,3,34,1,36,5,38,2,39,4,40,3,41,1,43,1,45,3,46,1,47,1,48,3,50,3,"n"],
[1,4,3,0,4,4,5,4,7,2,8,0,9,4,11,5,12,4,13,2,16,0,19,4,20,2,21,3,23,0,26,4,28,4,29,1,31,0,32,2,34,3,36,4,37,2,38,1,39,4,40,4,44,0,46,5,47,4,49,2,"n"],
[1,5,2,5,3,5,4,5,5,5,7,0,9,3,11,0,12,2,14,4,15,2,17,0,20,3,21,3,22,2,23,0,25,0,28,4,30,1,32,0,34,4,35,3,36,1,38,3,40,2,41,2,44,3,46,2,48,0,50,2,"n"],
[1,1,2,2,3,4,5,0,6,2,7,1,9,2,11,4,14,2,15,2,16,1,18,4,20,4,23,1,25,0,26,2,27,0,29,1,30,0,33,4,34,4,36,0,38,3,39,1,42,0,43,3,45,1,47,3,48,3,50,4,"n"],
[1,0,2,0,4,4,6,1,7,2,10,1,12,0,13,0,14,5,16,3,18,1,20,2,21,1,22,4,23,1,25,2,26,0,27,0,30,4,32,5,33,2,35,1,38,3,40,5,41,2,43,4,44,1,46,2,49,0,50,0,"n"],
[1,4,2,1,3,0,5,3,6,5,7,4,9,5,10,1,11,1,13,3,15,4,16,4,17,2,19,4,20,5,21,3,24,1,28,0,30,1,32,4,33,2,35,1,38,4,40,3,41,5,43,2,46,4,47,3,48,1,50,4,"n"],
[1,5,2,1,3,0,5,3,6,4,7,5,9,4,10,1,11,1,13,3,15,5,16,4,17,2,19,5,20,4,21,3,24,1,28,0,30,1,32,5,33,2,35,1,38,5,40,3,41,4,43,2,46,5,47,3,48,1,50,5,"n"],
[1,3,3,1,4,2,6,1,8,3,11,2,13,1,15,3,17,5,18,2,20,4,22,1,24,3,25,4,27,4,30,3,32,4,33,1,35,5,37,3,38,3,39,4,40,5,42,0,44,0,45,3,46,0,47,0,48,0,50,3,"n"],
[1,3,2,4,3,4,6,0,8,4,9,3,11,1,13,4,14,1,15,0,17,3,19,4,20,2,21,4,23,3,24,3,25,4,26,0,28,4,29,3,31,2,32,4,34,0,36,2,38,3,40,1,43,0,45,1,49,1,50,1,"n"],
[1,0,3,1,5,2,7,3,9,4,11,5,13,0,15,1,17,2,19,3,21,4,23,5,25,0,27,1,29,2,31,3,33,4,35,5,37,0,39,1,41,2,43,3,45,4,47,5,49,0,52,1,56,2,60,3,64,4,68,5,"n"],
[1,0,2,1,2,5,4,4,5,2,6,0,7,0,8,0,10,1,11,4,12,2,13,3,14,1,16,4,17,1,19,0,22,2,25,0,27,5,28,4,29,2,31,4,33,0,36,4,37,1,38,5,40,2,41,0,43,2,44,4,46,0,47,0,49,4,52,0,53,1,56,0,57,0,58,2,60,1,62,4,64,0,65,1,67,3,68,2,70,0,"n"],
[1,1,2,0,3,5,4,1,6,1,7,0,8,5,9,2,10,4,12,0,15,1,16,5,18,5,20,1,21,0,23,4,24,1,25,1,26,5,29,0,31,1,32,1,33,1,34,5,37,4,38,0,39,4,42,1,43,4,46,1,47,2,48,5,50,0,51,1,53,4,54,0,56,1,57,4,61,4,62,1,64,4,65,5,66,0,69,2,70,4,"n"],
[1,3,3,1,4,2,5,0,7,3,8,1,11,3,12,0,13,4,16,4,19,1,20,3,21,0,22,2,23,3,24,3,26,4,28,4,29,1,30,2,31,0,34,3,37,4,38,0,40,5,42,1,43,4,45,0,46,4,47,3,49,5,50,2,51,2,55,1,56,4,57,3,58,2,60,0,61,3,62,4,65,1,66,3,67,2,68,1,70,3,"n"],
[1,4,2,1,3,4,4,4,5,3,6,1,8,0,10,1,11,1,12,2,14,5,16,4,17,4,20,3,21,1,22,4,24,0,25,5,26,4,28,1,30,4,31,5,32,2,33,1,35,4,36,5,38,1,40,4,42,3,43,1,45,0,46,4,48,1,50,5,51,4,54,3,55,2,57,5,58,1,60,4,61,0,62,5,65,3,69,4,70,5,"n"],
[1,3,2,4,3,2,5,3,8,1,9,4,10,3,12,5,14,3,17,4,18,1,19,3,20,0,22,4,23,4,24,3,26,1,28,3,29,2,31,4,32,3,34,1,37,3,38,3,39,3,40,0,41,5,43,4,46,3,47,2,49,3,50,1,53,2,55,3,56,1,57,5,59,3,60,0,61,4,62,3,65,1,66,2,67,4,69,1,70,3,"n"],
[1,4,2,0,3,0,4,3,6,4,7,1,8,5,9,2,12,4,13,2,15,3,16,5,17,0,19,1,20,1,22,3,23,4,26,0,28,5,29,2,31,1,32,4,33,0,34,3,36,1,38,4,39,5,41,4,44,5,45,5,47,4,48,2,50,3,52,0,55,4,56,4,58,1,60,2,61,3,62,4,64,1,65,2,66,5,67,5,70,4,"n"],
[1,2,2,0,3,1,6,4,7,3,8,1,9,2,10,0,12,4,14,3,15,2,16,1,17,4,18,0,21,2,23,4,24,1,26,0,29,3,30,2,33,0,36,4,37,1,39,5,40,0,42,2,43,3,45,4,48,0,49,2,52,1,53,2,54,3,55,0,57,4,59,5,60,1,61,3,63,2,64,0,65,3,67,5,68,4,69,2,70,1,"n"],
[1,0,2,1,4,5,5,3,6,2,9,1,10,4,11,0,12,1,15,2,16,4,17,4,20,5,21,1,22,0,24,5,26,4,27,1,29,4,31,5,32,0,34,1,37,4,38,4,41,1,42,2,43,0,44,3,45,1,47,0,49,4,50,5,52,4,53,0,56,4,57,3,58,1,59,5,60,4,62,0,63,2,64,1,66,4,67,0,70,1,"n"],
[1,0,2,3,3,2,4,1,6,4,9,0,11,3,12,1,13,5,15,2,16,4,17,0,20,1,21,1,22,4,24,2,27,0,29,1,30,4,33,3,34,5,37,0,38,4,39,2,42,2,44,4,45,1,46,5,47,3,48,0,50,4,52,1,53,4,56,3,58,2,59,0,60,4,62,1,64,3,65,0,66,0,67,4,68,2,69,3,70,1,"n"],
[1,1,2,4,4,1,5,0,7,4,8,3,9,1,10,0,11,5,13,1,15,4,16,2,18,5,19,0,21,3,23,4,24,1,26,5,28,3,30,4,32,1,33,0,36,1,39,4,40,4,41,3,43,4,45,0,47,5,49,1,50,4,53,1,54,0,56,4,57,4,58,1,59,2,61,4,62,0,63,4,65,1,66,4,68,1,69,3,70,0,"n"],
[1,4,2,0,4,1,6,0,8,3,9,4,11,1,12,1,13,1,14,4,15,4,17,2,18,4,20,0,22,4,23,4,25,1,26,3,27,5,28,4,31,1,33,4,35,0,38,1,39,3,41,4,43,4,45,4,47,1,49,4,50,0,52,1,53,3,54,2,57,1,58,4,60,3,61,1,62,1,63,5,65,4,66,0,67,1,69,4,70,1,"n"],
[1,3,2,3,3,1,5,0,7,2,8,4,11,3,12,1,14,3,16,4,18,0,20,4,21,5,22,3,23,1,24,2,26,4,27,0,29,4,30,3,32,1,34,4,36,0,37,4,38,3,39,2,41,3,43,1,45,0,46,4,49,3,50,1,52,4,54,1,55,4,56,0,57,3,60,1,62,4,63,2,64,3,66,5,68,3,69,1,70,3,"n"],
[1,4,2,5,5,1,6,0,7,3,8,5,9,2,10,4,13,3,15,4,18,1,20,5,22,3,23,4,25,5,27,1,30,3,31,0,33,2,34,5,35,4,38,1,41,4,42,4,43,4,45,5,46,3,47,4,49,4,51,5,52,5,53,0,54,1,56,4,57,4,59,3,60,5,61,2,63,4,64,5,66,0,67,1,68,3,69,5,70,4,"n"],
[2,5,3,4,5,1,6,2,8,0,9,3,"n"],
["n"],
["n"],
["n"],
["n"],
["n"],
["n"],
[1,0,2,0,3,0,4,0,5,0,6,0,10,4,11,4,12,4,13,4,14,4,15,4,20,1,21,1,22,1,23,1,24,1,25,1,"n"],
[1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,20,4,21,4,22,4,23,4,24,4,25,4,39,1,40,1,41,1,42,1,43,1,44,1,45,1,46,1,47,1,48,1,49,1,50,1,"n"],
[1,3,2,3,3,3,4,3,5,3,6,3,7,3,8,3,9,3,10,3,11,3,12,3,20,2,21,2,22,2,23,2,24,2,25,2,39,4,40,4,41,4,42,4,43,4,44,4,45,4,46,4,47,4,48,4,49,4,50,4,"n"],
[1,1,2,1,10,4,11,1,20,3,21,1,22,4,29,3,30,5,31,1,32,4,40,5,41,1,42,3,43,4,50,3,51,1,52,5,53,4,59,0,60,2,61,1,62,3,63,4,64,5,"n"],
[1,4,2,5,4,5,6,4,11,4,12,5,17,4,21,5,25,4,31,5,32,0,35,4,41,0,45,4,50,0,51,5,52,3,55,4,59,1,60,2,61,3,62,4,63,5,64,0,"n"],
];


zokusei = new Array();

zokusei[1] = new Array(1,1,1,1,1,1,1,1,0.25,1);
zokusei[2] = new Array(1,1,1,1,1,1,1,1,0,1);
zokusei[3] = new Array(1,1,1,1,1,1,1,1,0,1);
zokusei[4] = new Array(1,1,1,1,1,1,1,1,0,1);

zokusei[11] = new Array(1,0.25,1,0.5,1.75,1,1,1,1,1);
zokusei[12] = new Array(1,0,1,0.25,1.75,0.75,1,1,0.75,0.75);
zokusei[13] = new Array(1,-0.25,1,0,2,0.5,1,1,0.5,0.5);
zokusei[14] = new Array(1,-0.5,1,0,2,0.25,0.75,0.75,0.25,0.25);

zokusei[21] = new Array(1,1,1,1.5,0.5,1.25,1,1,1,1);
zokusei[22] = new Array(1,1,0.5,1.75,0.25,1.25,1,1,0.75,0.75);
zokusei[23] = new Array(1,1,0,2,0,1,1,1,0.5,0.5);
zokusei[24] = new Array(1,1,-0.25,2,0,0.75,0.75,0.75,0.25,0.25);

zokusei[31] = new Array(1,1.5,0.5,0.25,1,1.25,1,1,1,1);
zokusei[32] = new Array(1,1.75,0.25,0,1,1.25,1,1,0.75,0.75);
zokusei[33] = new Array(1,2,0,-0.25,1,1,1,1,0.5,0.5);
zokusei[34] = new Array(1,2,0,-0.5,1,0.75,0.75,0.75,0.25,0.25);

zokusei[41] = new Array(1,0.5,1.5,1,0.25,1.25,1,1,1,1);
zokusei[42] = new Array(1,0.25,1.75,1,0,1.25,1,1,0.75,0.75);
zokusei[43] = new Array(1,0,2,1,-0.25,1,1,1,0.5,0.5);
zokusei[44] = new Array(1,0,2,1,-0.5,0.75,0.75,0.75,0.25,0.25);

zokusei[51] = new Array(1,1,1,1,1,0,1,0.5,1,0.5);
zokusei[52] = new Array(1,1,1,1,1,0,1,0.25,0.75,0.25);
zokusei[53] = new Array(1,1,1,1,1,0,1.25,0,0.5,0);
zokusei[54] = new Array(1,0.75,0.75,0.75,0.75,0,1.25,-0.25,0.25,-0.25);

zokusei[61] = new Array(1,0.75,0.75,0.75,0.75,0.75,0,1.25,0.75,1);
zokusei[62] = new Array(1,0.5,0.5,0.5,0.5,0.5,-0.25,1.5,0.5,1.25);
zokusei[63] = new Array(1,0.25,0.25,0.25,0.25,0.25,-0.5,1.75,0.25,1.5);
zokusei[64] = new Array(1,0,0,0,0,0,-1,2,0,1.75);

zokusei[71] = new Array(1,1,1,1,1,0.5,1.25,0,0.75,0);
zokusei[72] = new Array(1,0.75,0.75,0.75,0.75,0.25,1.5,-0.25,0.5,0);
zokusei[73] = new Array(1,0.5,0.5,0.5,0.5,0,1.75,-0.5,0.25,0);
zokusei[74] = new Array(1,0.25,0.25,0.25,0.25,-0.25,2,-1,0,0);

zokusei[81] = new Array(0.25,1,1,1,1,1,1,1,1.25,1);
zokusei[82] = new Array(0.25,1,1,1,1,0.75,1,1,1.50,1);
zokusei[83] = new Array(0,1,1,1,1,0.5,1,1,1.75,1);
zokusei[84] = new Array(0,1,1,1,1,0.25,1,1,2,1);

zokusei[91] = new Array(1,1,1,1.25,1,-0.25,1.5,-0.25,1,0);
zokusei[92] = new Array(1,1,1,1.5,1,-0.5,1.75,-0.5,1.25,0);
zokusei[93] = new Array(1,1.25,0.75,1.75,1,-0.75,2,-0.75,1.5,0);
zokusei[94] = new Array(1,1.5,0.5,2,1,-1,2,-1,1.75,0);

JobASPD = [
	[150,135,130,0,0,0,120,0,130,135,0,0,0,0,0,0,0,0,0,0,0,0],
	[160,150,145,140,135,130,130,125,135,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[160,150,135,0,0,0,120,0,0,0,120,0,0,0,0,0,0,0,0,0,0,0],
	[160,0,0,0,0,0,0,0,140,140,0,0,0,0,0,0,0,0,0,0,0,0],
	[160,140,0,0,0,0,0,0,0,0,130,0,0,0,0,0,0,0,0,0,0,0],
	[150,140,0,0,0,0,0,0,0,130,0,0,0,0,0,0,0,0,0,0,0,0],
	[160,140,130,0,0,0,130,125,130,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[160,150,150,145,140,140,130,130,135,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[160,150,135,0,0,0,120,0,0,0,0,150,0,0,0,0,0,0,0,0,0,0],
	[160,0,0,0,0,0,0,0,140,140,0,0,140,0.01,0,0,0,0,0,0,0,0],
	[160,140,0,0,0,0,0,0,0,0,140,0,0,0,0,0,0,0,0,0,0,0],
	[150,142.5,0,0,0,0,0,0,0,137.5,0,0,0,0,0,0,0,0,0,0,0,0],
	[160,140,135,0,0,0,135,135,132.5,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[160,150,150,145,140,140,130,130,135,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[160,150,145,0,0,0,0.01,0,0,0,135,0,0,0,0,0,0,0,0,0,0,0],
	[160,0,0,0,0,0,0,0,142.5,142.5,0,0,0,152.5,0,0,0,0,0,0,0,0],
	[160,145,0,0,0,0,0,0,0,0,135,0,0,0,142.5,0,0,0,0,0,0,0],
	[160,145,0,0,0,0,0,0,0,0,135,0,0,0,0,142.5,0,0,0,0,0,0],
	[155,147.5,0,0,0,0,0,0,0,137.5,0,0,145,0,0,0,0,0,0,0,0,0],
	[160,145,142.5,0,0,0,132.5,130,135,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[150,135,130,0,0,0,120,0,130,135,0,0,0,0,0,0,0,0,0,0,0,0],
	[160,150,150,145,140,140,130,130,135,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[160,150,135,0,0,0,120,0,0,0,0,150,0,0,0,0,0,0,0,0,0,0],
	[160,0,0,0,0,0,0,0,140,140,0,0,140,0.01,0,0,0,0,0,0,0,0],
	[160,140,0,0,0,0,0,0,0,0,140,0,0,0,0,0,0,0,0,0,0,0],
	[150,142.5,0,0,0,0,0,0,0,137.5,0,0,0,0,0,0,0,0,0,0,0,0],
	[160,140,135,0,0,0,135,135,132.5,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[160,150,150,145,140,140,130,130,135,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[160,150,145,0,0,0,0.01,0,0,0,135,0,0,0,0,0,0,0,0,0,0,0],
	[160,0,0,0,0,0,0,0,142.5,142.5,0,0,0,152.5,0,0,0,0,0,0,0,0],
	[160,145,0,0,0,0,0,0,0,0,135,0,0,0,142.5,0,0,0,0,0,0,0],
	[160,145,0,0,0,0,0,0,0,0,135,0,0,0,0,142.5,0,0,0,0,0,0],
	[155,147.5,0,0,0,0,0,0,0,137.5,0,0,145,0,0,0,0,0,0,0,0,0],
	[160,145,142.5,0,0,0,132.5,130,135,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0],
	[0],
	[0],
	[0],
	[0],
	[0],
	[0],
	[160,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[160,0,0,0,0,0,0,0,0,0,0,0,150,0,0,0,0,0,0,0,0,0],
	[150,142.5,0,0,0,0,0,0,0,137.5,0,0,0,0,0,0,0,0,0,0,0,0],
	[160,150,0,0,0,0,0,0,0,0,0,0,0,0,0,0,125,0,0,0,0,0],
	[150,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,130,125,50,130,50],
];


weaponsize = [
	[1   ,1   ,1   ],
	[1   ,0.75,0.5 ],
	[0.75,1   ,0.75],
	[0.75,0.75,1   ],
	[0.75,0.75,1   ],
	[0.75,0.75,1   ],
	[0.5 ,0.75,1   ],
	[0.5 ,0.75,1   ],
	[0.75,1   ,1   ],
	[1   ,1   ,1   ],
	[1   ,1   ,0.75],
	[0.75,1   ,0.75],
	[1   ,1   ,0.5 ],
	[1   ,0.75,0.5 ],
	[0.75,1   ,0.75],
	[0.75,1   ,0.5 ],
	[0.75,0.75,1   ],
	[1   ,1   ,1   ],
	[1   ,1   ,1   ],
	[1   ,1   ,1   ],
	[1   ,1   ,1   ],
	[1   ,1   ,1   ],
];


PC_BaseExp =[
[0,9,16,25,36,77,112,153,200,253,320,385,490,585,700,830,970,1120,1260,1420,1620,1860,1990,2240,2504,2950,3426,3934,4474,6889,7995,9174,10425,11748,13967,15775,17678,19677,21773,30543,34212,38065,42102,46323,53026,58419,64041,69892,75973,102468,115254,128692,142784,157528,178184,196300,215198,234879,255341,330188,365914,403224,442116,482590,536948,585191,635278,687211,740988,925400,1473746,1594058,1718928,1848355,1982340,2230113,2386162,2547417,2713878,3206160,3681024,4022472,4377024,4744680,5125440,5767272,6204000,6655464,7121664,7602600,9738720,11649960,13643520,18339300,23836800,35658000,48687000,58135000,99999998,0],
[0,10,18,28,40,85,123,168,220,278,400,481,613,731,875,1038,1213,1400,1575,1775,2268,2604,2786,3136,3506,4130,4796,5508,6264,9645,12392,14220,16159,18209,21649,24451,27401,30499,33748,47342,58160,64711,71573,78749,90144,99312,108870,118816,129154,174196,213220,238080,264150,291427,329640,363155,398116,434526,472381,610848,731828,806448,884232,965180,1073896,1170382,1270556,1374422,1481976,1850800,3389616,3666333,3953534,4251217,4559382,5129260,5488173,5859059,6241919,7374168,9570662,10458427,11380262,12336168,13326144,14994907,16130400,17304206,18516326,19766760,29216160,34949880,40930560,55017900,71510400,106974000,146061000,174405000,343210000,0]
];


PC_JobExp =[
[0,10,20,28,40,91,151,205,268,340,0],
[0,11,22,31,44,100,166,226,295,374,0],
[0,30,43,58,76,116,180,220,272,336,520,604,699,802,948,1125,1668,1937,2226,3040,3988,5564,6272,7021,9114,11473,15290,16891,18570,23229,28359,36478,39716,43088,52417,62495,78160,84175,90404,107611,125915,153941,191781,204351,248352,286212,386371,409795,482092,509596,982092,992092,1002092,1012092,1022092,1032092,1042092,1052092,1062092,1072092,1082092,1092092,1102092,1112092,1122092,1132092,1142092,1152092,1162092,1172092,1182092,1192092,1202092,1212092,1222092,1232092,1242092,1252092,1262092,1272092,1282092,1292092,1302092,1312092,1322092,1332092,1342092,1352092,1362092,1372092,1382092,1392092,1402092,1412092,1422092,1432092,1442092,1452092,1462092,0],
[0,60,86,116,152,232,360,440,544,672,1040,1208,1398,1604,1896,2250,3336,3874,4452,6080,7976,11128,12544,14042,18228,28683,38225,42228,46425,58073,70898,91195,99290,107720,131043,156238,195400,210438,226010,269028,314788,384853,479453,510878,620880,715530,965928,1024488,1205230,1273990,0],
[0,144,184,284,348,603,887,1096,1598,2540,3676,4290,4946,6679,9492,12770,14344,16005,20642,27434,35108,38577,42206,52708,66971,82688,89544,96669,117821,144921,174201,186677,199584,238617,286366,337147,358435,380376,447685,526989,610246,644736,793535,921810,1106758,1260955,1487304,1557657,1990632,2083386,0],
[0,288,368,568,696,1206,1774,2192,3196,5080,7352,8580,9892,13358,18984,31925,35860,40013,51605,68585,87770,96443,105515,131770,167428,206720,223860,241673,294553,362303,479053,513362,548856,656197,787507,927154,985696,1046034,1231134,1449220,1678177,1773024,2380605,2765430,3320274,3782865,4461912,4672971,5971896,6250158,6875174,7562652,8318960,9150856,10065942,11877812,14015818,16538655,19515624,23028437,28094693,34275525,41816141,51015692,62239144,79666104,101672614,130524946,167071930,213852071,0],
[0,72,92,142,174,301,443,548,799,1270,1838,2145,2473,3339,4746,6385,7172,8002,10321,13717,17554,19288,21103,26354,33485,41344,44772,48344,58910,72460,87100,93338,99792,119308,143183,231068,257377,274363,314246,371105,431038,476309,588548,665256,801731,916689,1130023,1188623,1377408,1551289,1746582,1845236,1954741,2124555,2345698,2548763,2759555,3021488,3254111,3489547,3695474,4012251,4181112,4302211,4496584,4578951,4869523,5022114,5123654,5395117,0]
];

PC_JobExp[7] = new Array();
for(var i=0;i<=18;i++)
	PC_JobExp[7][i] = 27434;
for(var i=19;i<=50;i++)
	PC_JobExp[7][i] = PC_JobExp[4][i] *2;

PET_OBJ = [[0,"No Pet",0,0]
,[1,"Alice [MDEF+1, Demi-Human Resistance +1%]",0,19,1,57,1,0]
,[2,"Isis [ATK +1%, MATK -1%]",0,80,1,89,-1,0]
,[3,"Incubus [MSP +5%]",0,16,5,0]
,[4,"Fire Imp [Fire Resistance +2%, Physical Damage against Fire Element +2%]",0,63,2,43,2,0]
,[5,"Whisper [FLEE +7,DEF -3]",0,9,7,18,-3,0]
,[6,"Orc Warrior [ATK +10,DEF -3]",0,17,10,18,-3,0]
,[7,"Shinobi [AGI +2]",0,2,2,0]
,[8,"Christmas Goblin [MHP +30, Water Resistance +5%]",0,13,30,61,10,0]
,[9,"Golem [MHP +100, FLEE -5]",0,13,100,9,-5,0]
,[10,"Baby Desert Wolf [INT +1, MSP +20]",0,4,1,14,20,0]
,[11,"Goblin Leader [Physical Damage against Demi-Human Race +3%]",0,37,3,0]
,[12,"Succubus [5% to get 5% of the Physical Damage dealt in each attack]","",0]
,[13,"Savage Babe [VIT +1, MHP +50]",0,3,1,13,50,0]
,[14,"Zherlthsh [MATK +2%, Magical Damage against Demi-Human +2%]",0,89,2,177,2,0]
,[15,"Steel Chonchon [FLEE +6, AGI -1]",0,9,6,2,-1,0]
,[16,"Spore [HIT +5 ,ATK -2]",0,8,5,17,-2,0]
,[17,"Smokie [AGI +1, Perfect Dodge +1]",0,2,1,11,1,0]
,[18,"Sohee [STR +1, DEX +1]",0,1,1,5,1,0]
,[19,"Green-Maiden [DEF +1, Demi-Human Resistance +1%]",0,18,1,57,1,0]
,[20,"Chonchon [AGI +1, FLEE +2]",0,2,1,9,2,0]
,[21,"Deviruchi [ATK +1%, MATK +1%, MHP -3%, MSP -3%]",0,80,1,89,1,15,-3,16,-3,0]
,[22,"Dullahan [CRIT ATK +5%]",0,70,5,0]
,[23,"Evil Nymph [MSP +30, SP Recovery +5%]",0,14,30,76,5,0]
,[24,"Dokebi [MATK +1%, ATK -1%]",0,89,1,80,-1,0]
,[25,"Drops [HIT +3, ATK +3]",0,8,3,17,3,0]
,[26,"Nightmare Terror [Sleep Resistance +100%]",0,155,100,0]
,[27,"Baphomet Jr. [DEF +1, MDEF +1, Stun Resistance -1%]",0,18,1,19,1,151,-1,0]
,[28,"Hunter Fly [Perfect Dodge +2, FLEE -5]",0,11,2,9,-5,0]
,[29,"Picky [STR +1, ATK +5]",0,1,1,17,5,0]
,[30,"Earth Petite [ASPD +1%, DEF -2, MDEF -2]",0,12,1,18,-2,19,-2,0]
,[31,"Stone Shooter [Fire Resistance +3%]",0,63,3,0]
,[32,"Peco Peco [MHP +150, MSP -10]",0,13,150,14,-10,0]
,[33,"Poison Spore [STR +1, INT +1]",0,1,1,4,1,0]
,[34,"Poporing [LUK +2, Poison Resistance +10%]",0,6,2,150,10,0]
,[35,"Poring [LUK +2, CRIT +1]",0,6,2,10,1,0]
,[36,"Bongun [VIT +1, Stun Resistance +1%]",0,3,1,151,1,0]
,[37,"Marionette [SP Recovery +3%]",0,76,3,0]
,[38,"Miyabi Doll [INT +1, Cast Time -3%]",0,4,1,73,-3,0]
,[39,"Mao Guai [MSP +10]",0,14,10,0]
,[40,"Munak [INT +1, DEF +1]",0,4,1,18,1,0]
,[41,"Medusa [VIT +1, Stone Curse Resistance +5%]",0,3,1,159,5,0]
,[42,"Rice Cake [Neutral Resistance +1%]",0,60,1,0]
,[43,"Yoyo [CRIT +3,LUK -1]",0,10,3,6,-1,0]
,[44,"Leaf Cat [Brute Resistance +3%]",0,52,3,0]
,[45,"Lunatic [CRIT +2, ATK +2]",0,10,2,17,2,0]
,[46,"Rocker [HP Recovery +5%, MHP +25]",0,75,5,13,25,0]
,[47,"Loli Ruri [MHP +3%, 5% to cast Heal Lv. 1 on the owner receiving Physical Damage]","When receiving Physical Damage, has a certain chance to use Heal Lv.1",15,3,0]
//custom TalonRO pets
,[48,"Acidus [FLEE +10]",0,9,10,0]
,[49,"Baby Leopard [ASPD +5%]",0,12,5,0]
,[50,"Develing [Shadow Resistance +3%]",0,67,3,0]
,[51,"Garm Baby [Water Resistance +7%]",0,61,7,0]
,[52,"Green Ferus [Increase damage against Dragon by 5% and Demon by 2%]",0,39,5,36,2,0]
,[53,"Headless Mule [DEX+1, Shadow Resistance +3%]",0,5,1,67,3,0]
,[54,"Jakk [Shadow Resistance +3%, Holy Resistance -3%]",0,66,-3,67,3,0]
,[55,"Myst Case [Shadow Resistance -3%, Holy Resistance +3%]",0,66,3,67,-3,0]
,[56,"Orc Baby [Resistance to small monsters +15%",0,190,15,0]
,[57,"Pinguicula [All stats +1 if equipped with Poring Cake Hat]",0,0]
,[58,"Siroma [LUK +2]",0,6,2,0]
,[59,"Taini [DEX +2]",0,5,2,0]
,[60,"Tatacho [STR +2]",0,1,2,0]
,[61,"Thanatos Dolor [FLEE +5, STR +1, INT +1, DEX +1],",0,1,1,4,1,5,1,9,5,0]
,[62,"Xmas Lunatic [AGI +2]",0,2,2,0]
,[63,"Zipper Bear [ATK +10]",0,17,10,0]
,[64,"Zhu Po Long [Increase damage against Plant and Formless by 3%]",0,30,3,33,3,0]
,[65,"Woodie  [VIT +3, Increases effectiveness of your Heal, Sanctuary and Potion Pitcher by 5%]",0,3,3,91,5,94,5,0]
//[Custom TalonRO - 2018-06-04 - Evolved Pets] [Kato]
,[66,"Alicel [DEF +1, Demi-Human Resistance +1%]",0,18,1,57,1,0]
,[67,"Am Mut [MATK +2%]",0,89,2,0]
,[68,"Bradium Golem [MHP +250, FLEE +10]",0,13,250,9,10,0]
,[69,"Choco [ASPD +3%]",0,12,3,0]
,[70,"Condor [STR +3, ATK +6]",0,1,3,17,6,0]
,[71,"Desert Wolf [INT +2, MSP +100]",0,4,2,14,100,0]
,[72,"Draco [VIT +1, MDEF +1, ASPD +2%]",0,3,1,19,1,12,2,0]
,[73,"Evil Marionette [MHP+50, MSP+10, HP & SP Recovery +10%]",0,13,50,14,10,76,-10,75,-10,0]
,[74,"Giant Whisper [FLEE +10, Perfect Dodge +1]",0,9,10,11,1,0]
,[75,"Grand Peco [MHP +500, MSP +25]",0,13,500,14,25,0]
,[76,"High Orc [ATK +2%]",0,80,2,0]
,[77,"Jaguar [ASPD +5%]",0,12,5,0]
,[78,"Savage [MHP +300, VIT +5]",0,13,500,3,5,0]
,[79,"Yao Jun [INT+1, VIT+1, DEF+1, MDEF+1, MHP+150, MSP+10]",0,4,1,3,1,18,1,19,1,13,150,14,10,0]
//[Custom TalonRO - 2018-06-04 - New Pets] [Kato]
,[80,"Mini Ice Titan [ASPD +1%. Chance to Freeze enemy when doing physical attakcs]",0,12,1,0] // Not freeze
,[81,"Aqua Elemental [ASPD +1%, Water Resistance +2%]",0,12,1,61,2,0]
,[82,"Bathory [VIT +1, Shadow Resistance +3%]",0,3,1,67,3,0]
,[83,"Beary Punny Bear [FLEE +5, STR +1, INT +1, DEX +1]",0,9,5,1,1,4,1,5,1,0]
,[84,"Blue Unicorn [INT +1, Holy Resistance +2%]",0,4,1,66,2,0]
,[85,"Chepet [LUK +1, Holy Resistance +2%]",0,6,1,66,2,0]
,[86,"Cornus [ASPD +2%, ATK -1%]",0,12,2,80,-1,0]
,[87,"Domovoi [AGI +2]",0,2,2,0]
,[88,"Dumpling Child [Neutral Resistance +1%]",0,60,1,0]
,[89,"Eggyra [AGI +3]",0,2,3,0]
,[90,"Ferus [Increase damage against Dragon by 5% & Undead by 2%]",0,39,5,31,2,0]
,[91,"Freezer [STR +1, Water Resistance 2%]",0,1,1,61,2,0]
,[92,"Garden Keeper [INT +1, AGI +1, Holy Resistance +2%]",0,4,1,2,1,66,2,0]
,[93,"Galapago [AGI +2, LUK +4 if equipped with Galapago Cap]",0,2,2,0]
,[94,"Gibbet [Perfect Dodge +1, AGI +2, Shadow Resistance +1%]",0,11,1,2,1,67,1,0]
,[95,"Hell Poodle [DEF +1, VIT +2, Shadow Resistance +1%]",0,18,1,67,1,0]
,[96,"Hylozoist [LUK +2, Ghost Resistance +2%]",0,6,2,68,2,0]
,[97,"Little Poring [LUK +2, CRIT +1]",0,6,2,10,1,0]
,[98,"Lude [INT +2, Ghost Resistance +2%]",0,4,2,68,2,0]
,[99,"Mavka [Earth Resistance +2%, Damage against Fire Monsters +1%]",0,62,2,40,1,43,1,0]
,[100,"Mermaid [INT +1, DEX +1]",0,4,1,5,1,0]
,[101,"Pandaring [VIT +2, INT +4 if equipped with Panda Hat]",0,3,2,0]
,[102,"Pouring [STR +2]",0,1,2,0]
,[103,"Sedora [LUK +2]",0,6,2,0]
,[104,"Snow Bunny [ASPD +1%, DEX +1]",0,12,1,5,1,0]
,[105,"Snowier [ASPD +1%, STR +1]",0,12,1,1,1,0]
,[106,"Teddy Bear [VIT +2]",0,3,2,0]
,[107,"Tiyanak [STR +1, LUK +1, Shadow Resistance +2%]",0,1,1,6,1,61,2,0]
,[108,"Chung E [DEF +1, Demi-Human Resistance +1%]",0,18,1,57,1,0]
,[109,"Tiny Agni [Physical/Magical Damage against Fire Monsters +2%]",0,43,2,443,2,0]
,[110,"Tiny Aqua [Physical/Magical Damage against Water Monsters +2%]",0,41,2,441,2,0]
,[111,"Tiny Ventus [Physical/Magical Damage against Wind Monsters +2%]",0,44,2,444,2,0]
,[112,"Agni [Physical/Magical Damage against Fire Monsters +2%, Fire Resistance +2%]",0,43,2,443,2,63,2,0]
,[113,"Ventus [Physical/Magical Damage against Wind Monsters +2%, Wind Resistance +2%]",0,44,2,444,2,64,2,0]
,[114,"Eira [Increases effectiveness of your Heal, Sanctuary and Potion Pitcher by 5%, 2% Chance of gaining 5% of the damage inflicted on an enemy as HP]",0,25,5,94,5,245,5,0]
,[115,"Aqua [Physical/Magical Damage against Water Monsters +2%, Water Resistance +2%]",0,41,2,441,2,61,2,0]
,[116,"Angry Penguin [Increase effectiveness of your Heal, Sanctuary and Potion Pitcher by 3%]",0,25,3,94,3,245,3,0]
,[117,"Baby Skoll [[Swordman, Thief, Merchant class] SP Rege. +20%, [Archer, Acolyte, Magician class] HP Rege. +20%, [Extended Class]HP/SP Rege. +10%, Perfect Dodge +3] (not calced)",0,0] //todo
,[118,"Ballooling [Increases effectiveness of Heal, Sanctuary and Potion Pitcher on yourself by 2%]",0,25,2,94,2,245,2,0] //self?
,[119,"Jejeling [VIT +2, DEX +4 if equipped with Baseball Cap]",0,3,2,0]
,[120,"Elephant [Perfect Dodge +2, VIT +3]",0,11,2,3,2,0]
,[121,"Gorilla [STR +3, VIT +3]",0,1,3,3,2,0]
,[122,"Lion [FLEE +5, VIT +3]",0,9,5,3,2,0]
,[123,"Rhino [ATK +5, VIT +3]",0,17,5,3,3,0]
,[124,"Little Fatum [ASPD +1%, DEX +1]",0,12,1,5,1,0]
,[125,"Lucky Case [[Mage, Archer, Acolyte Class] MHP +175, Perfect Dodge +1, [Swordman, Merchant, Thief Class] MSP +50, VIT +2] (not calced)",0,0] //todo
,[126,"Miming [INT +1, VIT +1, Increases effectiveness of your Heal, Sanctuary and Potion Pitcher by 5%]",0,4,1,3,1,25,5,94,5,245,5,0]
,[127,"Skelion [MHP +250, MDEF +1, ASPD +2%, Ghost Resistance +2%]",0,13,50,19,1,12,2,68,2,0]
,[128,"Tikbalang [Increase damage to Bakonawa, Bangungot and Buwaya by 10%] (not calced)",0,0]
,[129,"Toucan [DEX +1, FLEE +5]",0,5,1,9,5,0]
,[130,"White Goat [+1.5% chance to cast Level 2 Bash when doing a physical attack, Increases the healing value of Carrots by 100%] (not calced)",0,0]
,[131,"Wild Rider [AGI +2, DEX +3, if equipped with Drooping Cat]",0,2,2,0]
];

ITEM_SP_TIME_OBJ =[
[0,"Temporary Card/Item Effects","none",0,0,0]
,[1,"Isilla Card","Cast Time -50%,FLEE+30",2,472,9,30,0]
,[2,"Ice Titan Card","DEF+10",2,484,18,10,0]
,[3,"Atroce Card","ASPD+100%",2,463,12,100,0]
,[4,"Anolian Card","Improve Concentration Lv1",2,224,0]
,[5,"Alchemist Card Set","Adrenaline Rush",2,461,0]
,[6,"Assassin Damascus (Valorous)","Ice Pick Effect",1,898,23,1,0]
,[7,"Ixion Wings","ASPD + 7%",1,821,12,7,0]
,[8,"Vanberk Card","CRIT + 100",2,471,10,100,0]
,[9,"Wolfheiden","Receive -20% Physical Damage, +20% Magical Damage[Stone Skin Lv6]",1,708,0]
,[10,"Angelic Ring","Heal/Sanctuary/Potion Pitcher Effectiveness + 20%",1,1000,91,20,94,20,0]
,[11,"Glorious Grenade Launcher","ASPD + 20%",1,1103,12,20,0]
,[12,"Glorious Jamadhar[+9]","ASPD + 100%",1,1091,12,100,0]
,[13,"Glorious Tablet","ATK + 200",1,1094,17,200,0]
,[14,"Glorious Shuriken","Throw Fuuma Shuriken/Final Strike Damage + 100%",1,1098,5396,100,5405,100,5438,100,0]
,[15,"Glorious Bloody Roar[+9]","ASPD + 100%",1,1090,12,100,0]
,[16,"Naght Sieger Twin-Blade [Red]","Ignore [Non-Boss] Monster Defense",1,933,22,1,0]
,[17,"Her National Treasury","none",0,0,0] //replace me
,[18,"Desert Twilight + Desert Wind","190 ASPD",1,818,12,100,0]
,[19,"Shadow Guard Set [Shadow Walk + Shadow Guard]","FLEE + 20",1,995,9,20,0]
,[20,"Huuma Front Shuriken (Valorous)","Throw Fuuma Shuriken/Final Strike Damage + 100%",1,931,5396,100,5405,100,5438,100,0]
,[21,"Naght Sieger Twin-Blade [Blue]","Ignore [Non-Boss] Monster Defense",1,932,22,1,0]
,[22,"Soldier Gatling Gun","ATK + 80",1,927,17,80,0]
,[23,"Soldier Grenade Launcher","ATK + 300",1,929,17,300,0]
,[24,"Soldier Revolver","ASPD + 100%",1,925,12,100,0]
,[25,"Tae Goo Lyeon [JobLV70]","ATK + 50",1,934,17,50,0]
,[26,"Brave Battle Fist","Asura Strike Cast Time -100%",1,916,7197,100,7321,100,0]
,[27,"Naga Scale Armor","ATK + 20",1,989,17,20,0]
,[28,"Noble Hat","Adrenaline Rush",1,1129,0]
,[29,"Violet Fear","Ignore [Non-Boss] Monster Defense",1,935,22,1,0]
,[30,"Bloody Eater","CRIT + 100, ATK + 50",1,819,10,100,17,50,0]
,[31,"Blue Ribbon","Attention Concentrate Lv2",1,885,0]
,[32,"Hodremlin Card","Perfect Dodge + 30",2,467,11,30,0]
,[33,"Mithril Magic Manteau","Receive -20% Magical Damage,+20% Physical Damage[Anti-Magic Lv6]",1,709,0]
,[34,"Ring of Flame Lord","Critical Explosion Lv1",1,728,0]
,[35,"Lord Knight Card","Berserk",2,178,0]
,[36,"Soldier Shotgun","ATK + 80",1,928,17,80,0]
,[37,"Voina Dagger","Physical Damage + 10%",1,1157,80,10,0]
,[38,"Roubel","Bash / Bowling Bash Damage +20%",1,1158,5006,20,5076,20,0]
,[39,"Chronos","MATK + 12%",1,1172,89,12,0]
,[40,"Nemesis","ATK + 50",1,820,17,50,0]
,[41,"Sorin Doll Hat","ATK + 50",1,892,17,50,0]
,[42,"Sagittarius Diadem","+10 DEX/AGI",1,1288,2,10,5,10,0]
,[43,"Virgo Crown","+20 DEX",1,1294,5,20,0]
,[44,"Vinit Doll Hat","ASPD + 5%",1,1028,12,5,0]
,[45,"Dark Knight Glove[Type A]","ASPD + 2%",1,1052,12,2,0]
,[46,"Dark Knight Glove[Type B]","MHP + 10%",1,1310,15,10,0]
,[47,"Jaguar Hat","Loud Exclamation",1,1317,1,4,0] //custom TalonRO, really?
,[48,"Djinn","40% damage reflection",1,1380,71,40,0] //custom TalonRO
,[49,"Chicken Hat","Loud Exclamation",1,1422,1,4,0] //custom TalonRO
,[50,"Ancient Horns","ATK + 100",1,1538,17,100,0] //custom TalonRO
];
//ITEM_SP_TIME_OBJ_SORT = [0,5,10,4,27,3,44,37,30,31,26,39,49,45,46,18,48,15,11,12,14,13,17,32,1,7,47,35,33,21,16,40,28,34,38,42,19,22,23,24,36,41,25,6,20,8,29,43];

//2nd value is bonus brewing success rate in %
Potion_Type =[
[0,20,"Red Potion"]
,[1,20,"Yellow Potion"]
,[2,20,"White Potion"]
,[3,0,"Blue Potion"]
,[4,0,"Slim Red Potion"]
,[5,0,"Slim Yellow Potion"]
,[6,0,"Slim White Potion"]
,[7,10,"Alcohol"]
,[8,0,"Acid Bottle"]
,[9,0,"Bottle Grenade"]
,[10,0,"Plant Bottle"]
,[11,0,"Marine Sphere Bottle"]
,[12,0,"Glistening Coat"]
,[13,0,"Anodyne"]
,[14,0,"Aloevera"]
,[15,0,"Embryo"]
,[16,0,"Elemental Resist Potions"]
];
Potion_Max = 17;

Anvil_Type =[
[0,0,"Anvil/No Anvil"]
,[1,0,"Oridecon Anvil"]
,[2,5,"Gold Anvil"]
,[3,10,"Emperium Anvil"]
];
Anvil_Max = 4;

Potion_Type_2 =[
[0,45,65,"Red Potion"]
,[1,105,145,"Orange Potion"]
,[2,175,235,"Yellow Potion"]
,[3,325,405,"White Potion"]
,[4,40,60,"Blue Potion"]
];
Potion_Max_2 = 5;

Potion_Type_3 =[
[0,45,65,"Slim Red Potion[+10%]"]
,[1,45,65,"Slim Red Potion[+20%]"]
,[2,45,65,"Slim Red Potion[+30%]"]
,[3,45,65,"Slim Red Potion[+40%]"]
,[4,45,65,"Slim Red Potion[+50%]"]
,[5,175,235,"Slim Yellow Potion[+60%]"]
,[6,175,235,"Slim Yellow Potion[+70%]"]
,[7,175,235,"Slim Yellow Potion[+80%]"]
,[8,175,235,"Slim Yellow Potion[+90%]"]
,[9,325,405,"Slim White Potion[+100%]"]
];
Potion_Max_3 = 10;

Pot_Rank =[
[0,"No"]
,[1,"Yes"]
];
Pot_Rank_Max = 2;

Cook_Kit =[
[0,"Outdoor Cooking Kit"]
,[1,"Home Cooking Kit"]
,[2,"Professional Cooking Kit"]
,[3,"Royal Cooking Kit"]
,[4,"Fantastic Cooking Kit"]
];
Cook_Kit_Max = 5;

Stat_Food =[
[0,"STR"]
,[1,"AGI"]
,[2,"VIT"]
,[3,"INT"]
,[4,"DEX"]
,[5,"LUK"]
];

Stat_Food_Max = 6;

SQI_BONUS =[
[0,0,"SQI-Bonus","none",0,0,0]
,[1,1375,"Twin Fang","+30 Flee",9,30,0]
,[2,1375,"Twin Fang","+15 Crit",10,15,0]
,[3,1375,"Twin Fang","+40 atk",17,40,0]
,[4,1375,"Twin Fang","40% more damage with Meteor Assault",5264,40,0]
,[5,1375,"Twin Fang","15% Cast Time Reduction",73,-15,0]
,[6,1375,"Twin Fang","+10 int",4,10,0]
,[7,1375,"Twin Fang","25% more damage with Grimtooth",0]
,[8,1375,"Twin Fang","2% chance to endow Shadow when attacking (not calced)",0]
,[9,1375,"Twin Fang","+30 Hit",8,30,0]
,[10,1376,"Aegis Shield","Reflect 10% of all melee damage.",71,10,0]
,[11,1376,"Aegis Shield","+8 MDEF",19,8,0]
,[12,1376,"Aegis Shield","10% Aftercast Reduction",74,10,0]
,[13,1376,"Aegis Shield","Full HP/SP when resurrected (not calced)",0]
,[14,1376,"Aegis Shield","10% more damage with Shield Chain",0]
,[15,1376,"Aegis Shield","Increase effectiveness of Heal by 10%",90,10,0]
,[16,1376,"Aegis Shield","Cast can't be interrupted",0]
,[17,1376,"Aegis Shield","20% more damage with Holy Cross and Grand Cross",5161,20,5162,20,0]
,[18,1376,"Aegis Shield","Indestructible",194,1,0]
,[19,1377,"Artemis Bow","+15 LUK",6,15,0]
,[20,1377,"Artemis Bow","20% Magic Resistance (not MDEF) (not calced)",0]
,[21,1377,"Artemis Bow","40% more damage with Claymore Trap and Blast Mine",0]
,[22,1377,"Artemis Bow","+10 INT",4,10,0]
,[23,1377,"Artemis Bow","10% more damage with Critical Hits",70,10,0]
,[24,1377,"Artemis Bow","15% more damage with Double Strafing",0]
,[25,1377,"Artemis Bow","5% chance to use External Bleeding status when attacking",0]
,[26,1377,"Artemis Bow","+15% MaxHP",15,15,0]
,[27,1377,"Artemis Bow","Enable use of Safety Wall Level 4",0]
,[28,1378,"Belmont Whip","+20% MaxHP",15,20,0]
,[29,1378,"Belmont Whip","+10 DEX",5,10,0]
,[30,1378,"Belmont Whip","+10 AGI",2,10,0]
,[31,1378,"Belmont Whip","+10 LUK",6,10,0]
,[32,1378,"Belmont Whip","+15 Crit",10,15,0]
,[33,1378,"Belmont Whip","15% more damage with Critical Hits",70,15,0]
,[34,1378,"Belmont Whip","20% more damage with Long Range attacks",25,20,0]
,[35,1378,"Belmont Whip","7% chance to use Stone Curse or Sleep status when attacking",0]
,[36,1378,"Belmont Whip","35% more damage with Throw Arrow",0]
,[37,1379,"Blade of Angels","+100 ATK",17,100,0]
,[38,1379,"Blade of Angels","+30% MaxHP",15,30,0]
,[39,1379,"Blade of Angels","20% Melee and Ranged Resistance",79,20,0]
,[40,1379,"Blade of Angels","Enables use of Auto Spell Level 10 (not calced)",0]
,[41,1379,"Blade of Angels","+50 MATK",0]
,[42,1379,"Blade of Angels","30% Stone Curse and Freeze Resistance",152,30,159,30,0]
,[43,1379,"Blade of Angels","Enables use of Aspersio Level 5",0]
,[44,1379,"Blade of Angels","1000 SP",14,1000,0]
,[45,1379,"Blade of Angels","Enables use of Aura Blade Level 5 (activates Aura Blade lv 5)",0]
,[46,1380,"Djinn","+100 ATK",17,100,0]
,[47,1380,"Djinn","5% chance to reflect 40% of damage for 8 seconds when attacked",0]
,[48,1380,"Djinn","+50% more damage with Mammonite",5065,50,0]
,[49,1380,"Djinn","+5 DEX",5,5,0]
,[50,1380,"Djinn","+5 DEX",5,5,0]
,[51,1380,"Djinn","+15% MaxHP",15,15,0]
,[52,1380,"Djinn","+20 LUK",6,20,0]
,[53,1380,"Djinn","Enables use of Fire Bolt Level 6 and 5% chance to auto cast Firebolt Level 6 when attacking, +10% MATK",220,48,221,115,89,10,0]
,[54,1380,"Djinn","5% chance to use Stone Curse status on the enemy while receiving damage",0]
,[55,1381,"Electric Guitar","+20% MaxHP",15,20,0]
,[56,1381,"Electric Guitar","+15 Crit",10,15,0]
,[57,1381,"Electric Guitar","Enables use of Jupitel Thunder Level 3",220,49,0]
,[58,1381,"Electric Guitar","+10 INT",4,10,0]
,[59,1381,"Electric Guitar","+10 DEX",5,10,0]
,[60,1381,"Electric Guitar","+10 VIT",3,10,0]
,[61,1381,"Electric Guitar","+15% more damage with Critical Hits",70,15,0]
,[62,1381,"Electric Guitar","+20% more damage with Long Range attacks",25,20,0]
,[63,1381,"Electric Guitar","+35% more damage with Musical Strike",5199,35,0]
,[64,1382,"Evangelist","Increase effectiveness of Sanctuary by 20%",94,20,0]
,[65,1382,"Evangelist","+15 Crit",10,15,0]
,[66,1382,"Evangelist","+100 ATK",17,100,0]
,[67,1382,"Evangelist","30% Freeze and Stone Curse Resistance",152,30,159,30,0]
,[68,1382,"Evangelist","+5 DEX",5,5,0]
,[69,1382,"Evangelist","+5 DEX",5,5,0]
,[70,1382,"Evangelist","+10 INT",4,10,0]
,[71,1382,"Evangelist","Enables use of Frost Nova Level 10",220,51,0]
,[72,1382,"Evangelist","20% chance to cause Sleep status when attacking",135,20,0]
,[73,1383,"Eversong Greaves","[Taekwon] +10% MaxHP; [Taekwon Master] +20% MaxHP",0]
,[74,1383,"Eversong Greaves","[Taekwon] +40 Hit; [Taekwon Master] +15 LUK",0]
,[75,1383,"Eversong Greaves","[Taekwon] +30% ASPD; [Taekwon Master] +10 DEX",0]
,[76,1383,"Eversong Greaves","+130 ATK",17,130,0]
,[77,1383,"Eversong Greaves","+50% more damage with Flying Side Kick",5305,50,5339,50,0]
,[78,1383,"Eversong Greaves","+20% SP",16,20,0]
,[79,1383,"Eversong Greaves","+10 Crit",10,10,0]
,[80,1383,"Eversong Greaves","+15% more damage with Critical Hits",70,15,0]
,[81,1383,"Eversong Greaves","+30 Flee",9,30,0]
,[82,1384,"Ghostdancer Staff","+20% MaxHP & MaxSP",15,20,16,20,0]
,[83,1384,"Ghostdancer Staff","+10 INT",4,10,0]
,[84,1384,"Ghostdancer Staff","Improve Concentration on Wizard Link (not calced)",0]
,[85,1384,"Ghostdancer Staff","Autoguard on Priest Link (not calced)",0]
,[86,1384,"Ghostdancer Staff","Energy Coat on Hunter Link (not calced)",0]
,[87,1384,"Ghostdancer Staff","Reflect Shield on Knight Link (not calced)",0]
,[88,1384,"Ghostdancer Staff","Autocast Acid Terror when attacking (not calced)",0]
,[89,1384,"Ghostdancer Staff","Autocast Holy Cross when attacking (not calced)",0]
,[90,1384,"Ghostdancer Staff","Autocast Frost Joke when attacking (not calced)",0]
,[91,1385,"Hira Shurikat","+50% more damage with Throw Huuma Shuriken and Throw Kunai",5395,50,5396,50,0]
,[92,1385,"Hira Shurikat","20% Cast Time Reduction",73,-20,0]
,[93,1385,"Hira Shurikat","20% Demi-Human Resistance",57,20,0]
,[94,1385,"Hira Shurikat","+10% MaxHP & MaxSP",15,10,16,10,0]
,[95,1385,"Hira Shurikat","+15% MATK",89,15,0]
,[96,1385,"Hira Shurikat","Enables use of Hiding Level 1",220,22,0]
,[97,1385,"Hira Shurikat","+50% more damage with Wind Blade",5413,50,0]
,[98,1385,"Hira Shurikat","+13% ASPD",12,13,0]
,[99,1385,"Hira Shurikat","+15 Crit",10,15,0]
,[100,84,"Mjolnir","Enables use of Throw Tomahawk Level 1; +200% more damage with Throw Tomahawk",220,8,5302,200,0]
,[101,84,"Mjolnir","40% chance to cast Wide Silence Level 1 when using Hammerfall",0]
,[102,84,"Mjolnir","10% Ranged damage reduction",78,10,0]
,[103,84,"Mjolnir","+15 DEX",5,15,0]
,[104,84,"Mjolnir","+15 Crit",10,15,0]
,[105,84,"Mjolnir","+15 LUK",6,15,0]
,[106,84,"Mjolnir","Enables use of Charge Attack Level 1; 30% cast reduction with Charge Attack",220,52,0]
,[107,84,"Mjolnir","Spend 75% less Zeny when using Maximum Over Thrust",0]
,[108,84,"Mjolnir","+15% more damage with Critical Hits",70,15,0]
,[109,1386,"Nibelungen","+40 Hit",8,40,0]
,[110,1386,"Nibelungen","+15 Crit",10,15,0]
,[111,1386,"Nibelungen","10% Aftercast Reduction",74,10,0]
,[112,1386,"Nibelungen","+100% more damage with Joint Beat",5261,100,0]
,[113,1386,"Nibelungen","+10% more damage with Bowling Bash; +30% more damage with Brandish Spear",5076,10,5073,30,0]
,[114,1386,"Nibelungen","Wind Endow for 4 seconds after using Spear Boomerang (not calced)",8,40,0]
,[115,1386,"Nibelungen","+10 STR",1,10,0]
,[116,1386,"Nibelungen","Earth Endow for 4 seconds after using Spear Stab (not calced)",0]
,[117,1386,"Nibelungen","+13% ASPD",12,13,0]
,[118,1387,"Scouter","Autocast Call Spirits Level 5 when using Flip Coin",0]
,[119,1387,"Scouter","+40% more damage with Ground Drift",5437,40,0]
,[120,1387,"Scouter","+40% more damage with Triple Action and Bull's Eye",5418,40,5419,40,0]
,[121,1387,"Scouter","3% chance to auto cast Stone Curse status when attacking",221,116,0]
,[122,1387,"Scouter","+20% MaxHP & MaxSP",15,20,16,20,0]
,[123,1387,"Scouter","15% Non-Boss Resistance",79,15,0]
,[124,1387,"Scouter","+10% ASPD",12,10,0]
,[125,1387,"Scouter","+15 Crit",10,15,0]
,[126,1387,"Scouter","+20% more damage with Critical Hits",70,20,0]
,[127,1388,"Sherwood Bow","+5 DEX",5,5,0]
,[128,1388,"Sherwood Bow","+5 DEX",5,5,0]
,[129,1388,"Sherwood Bow","+15 Crit",10,15,0]
,[130,1388,"Sherwood Bow","+75 ATK",17,75,0]
,[131,1388,"Sherwood Bow","+50 MATK",0]
,[132,1388,"Sherwood Bow","+30 Flee",9,30,0]
,[133,1388,"Sherwood Bow","20% chance to auto cast Strip Armor Level 1",221,117,0]
,[134,1388,"Sherwood Bow","+30% MaxSP",16,30,0]
,[135,1388,"Sherwood Bow","15% Melee Resistance",0]
,[136,1389,"Staff of Magi","+5 DEX",5,5,0]
,[137,1389,"Staff of Magi","+5 DEX",5,5,0]
,[138,1389,"Staff of Magi","+5 DEX",5,5,0]
,[139,1389,"Staff of Magi","20% chance to auto cast Curse status when attacking",133,20,0]
,[140,1389,"Staff of Magi","+30% MaxHP",15,30,0]
,[141,1389,"Staff of Magi","20% ranged damage reduction",78,20,0]
,[142,1389,"Staff of Magi","Ignore Demi-Human defense",187,1,0]
,[143,1389,"Staff of Magi","Amplify Magic Power casts 75% faster",0]
,[144,1389,"Staff of Magi","+100% more damage with Magic Crasher and 10% chance to autocast Ganbantein at no cost of gemstones",5275,100,0]
,[145,1390,"Suiken","50% auto cast Dangerous Soul Collect when using Fury",0]
,[146,1390,"Suiken","+5 DEX",5,5,0]
,[147,1390,"Suiken","+40 Hit",8,40,0]
,[148,1390,"Suiken","+100% more damage with Triple Attack, Chain Combo and Combo Finish",5187,100,5188,100,5189,100,0]
,[149,1390,"Suiken","+50% more damage with Tiger Knuckle and Chain Crush Combo",5289,50,5290,50,0]
,[150,1390,"Suiken","30% Freeze and Stone Curse Resistance",152,30,159,30,0]
,[151,1390,"Suiken","+5 STR",1,5,0]
,[152,1390,"Suiken","+12% ASPD",12,13,0]
,[153,1390,"Suiken","5% chance to Freeze the target when attacking",132,5,0]
,[154,1391,"Tome of Ymir","Enables Strip Shield Level 3",220,53,0]
,[154,1391,"Tome of Ymir","+10% MATK",89,10,0]
,[154,1391,"Tome of Ymir","+15 Crit",10,15,0]
,[154,1391,"Tome of Ymir","+5 DEX",5,5,0]
,[154,1391,"Tome of Ymir","+5 DEX",5,5,0]
,[154,1391,"Tome of Ymir","Ignore Gemstone Requirement",0]
,[154,1391,"Tome of Ymir","+100 ATK",17,100,0]
,[154,1391,"Tome of Ymir","+20% MaxHP",15,20,0]
,[154,1391,"Tome of Ymir","+13% ASPD",12,13,0]
];

EXTENDED_INFO = [
[0,"-"]
 ,[1,"Heal Amount"]
 ,[16,"Sanctuary Healing Amount"]
 ,[2,"Increased HP Recovery"]
 ,[3,"Increased SP Recovery"]
 ,[4,"Spirits Recovery"]
 ,[5,"Weight Limit"]
 ,[6,"Player Resistance"]
 ,[7,"Attack Modifiers"]
 ,[10,"Cast time/delay"]
 ,[11,"Experience"]
 ,[12,"Potion Pitcher HP/SP Power"]
 ,[13,"Forge/Potion/EDP Creation Success Rates"]
 ,[14,"Strip Chance"]
 ,[15,"Cooking Success Rates"]
];

CARD_SHORTCUT = [
  [0,"Card Shortcuts"]
 ,[1,"Remove All Cards"]
 ,[2,"Remove Weapon Cards"]
 ,[3,"+60%[TTT]"]
 ,[4,"+40%, +25% ASPD [DTT]"]
 ,[5,"+20%, +50% ASPD [DDT]"]
 ,[6,"+60%, +25% ASPD [DTTT]"]
 ,[7,"+40%, +50% ASPD [DDTT]"]
 ,[8,"+65 ATK, +50% ASPD [DDBS]"]
 ,[9,"+130 ATK, +25% ASPD [DBSS]"]
 ,[10,"+50% BB dmg [SGSG]"]
 ,[11,"+75% BB dmg [SGSGSG]"]
 ,[12,"+40%[2 Race Card]"]
 ,[13,"+60%[3 Race Card]"]
 ,[14,"+80%[4 Race Card]"]
 ,[15,"+61%[2 Race/1 Size Cards]"]
 ,[16,"+68%[2 Race/1 Element Cards]"]
 ,[17,"+84%[3 Race/1 Size Cards]"]
 ,[18,"+96%[2 Race/2 Element Cards]<"]
 ,[19,"+110%[2 AK/2 Race Cards]"]
 ,[20,"+110%[3 AK/1 Race Cards]"]
 ,[21,"+110%[3 AK/1 Element Cards]"]
 ,[22,"2 Size Cards"]
 ,[23,"3 Size Cards"]
 ,[24,"4 Size Cards<"]
 ,[25,"Elemental + Star Crumb"]
 ,[26,"Elemental + 2 Star Crumbs"]
 ,[27,"3 Star Crumbs"]
 ,[28,"+40 ATK[2 Andre Cards]"]
 ,[29,"+60 ATK[3 Andre Cards]"]
 ,[30,"+80 ATK[4 Andre Cards]"]
 ,[31,"+60 ATK[2 Zipper Bear Cards]"]
 ,[32,"+90 ATK[3 Zipper Bear Cards]"]
 ,[33,"+120 ATK[4 Zipper Bear Cards]"]
 ,[34,"2 Sold. Skeleton Cards"]
 ,[35,"3 Sold. Skeleton Cards"]
 ,[36,"4 Sold. Skeleton Cards"]
 ,[37,"+40 HIT[2 Mummy Cards]"]
 ,[38,"+60 HIT[3 Mummy Cards]"]
 ,[39,"+80 HIT[4 Mummy Cards]"]
 ,[40,"+60%[2 Orc Lady Cards]"]
 ,[41,"+92%[2 Orc Lady/1 Hydra Cards]"]
 ,[42,"+128%[3 Orc Lady/1 Hydra Cards]"]
 ,[43,"+20%[2 Archer Skeleton Cards]"]
 ,[44,"+30%[3 Archer Skeleton Cards]"]
 ,[45,"+40%[4 Archer Skeleton Cards]"]
 ,[46,"2 Fabre Cards"]
 ,[47,"3 Fabre Cards"]
 ,[48,"4 Fabre Cards"]
 ,[49,"2 Drops Cards"]
 ,[50,"3 Drops Cards"]
 ,[51,"4 Drops Cards"]
 ,[52,"+50%[2 Abysmal Knight Cards]"]
 ,[53,"+75%[3 Abysmal Knight Cards]"]
 ,[54,"+100%[4 Abysmal Knight Cards]"]
 ,[55,"2 Crit Dmg+10%,Crit+7 Cards"]
 ,[56,"3 Crit Dmg+10%,Crit+7 Cards"]
 ,[57,"4 Crit Dmg+10%,Crit+7 Cards"]
 ,[58,"Swordsman Set"]
 ,[59,"Thief Set"]
 ,[60,"Aco Set"]
 ,[61,"Archer Set"]
 ,[62,"Mage Set"]
 ,[63,"Merchant Set"]
 ,[64,"Crusader Set"]
 ,[65,"Rogue Set"]
 ,[66,"Monk Set"]
 ,[67,"Bard/Dancer Set"]
 ,[68,"Sage Set"]
 ,[69,"Alchemist Set"]
 ,[70,"+75% ASPD [DDD]"]
 ,[71,"12% All-Size Dmg. Reduc. [3Drac]"]
 ,[72,"16% All-Size Dmg. Reduc. [4Drac]"]
];

KRIS_ENCHANTMENT = [
  [102,"DEF+2"]
 ,[103,"DEF+3"]
 ,[104,"DEF+4"]
 ,[112,"MDEF+2"]
 ,[113,"MDEF+3"]
 ,[114,"MDEF+4"]
 ,[131,"HP+100"]
 ,[132,"HP+200"]
 ,[133,"HP+300"]
 ,[134,"HP+400"]
 ,[141,"SP+50"]
 ,[31,"VIT+1"]
 ,[32,"VIT+2"]
 ,[33,"VIT+3"]
 ,[41,"INT+1"]
 ,[42,"INT+2"]
 ,[43,"INT+3"]
 ,[51,"DEX+1"]
 ,[52,"DEX+2"]
 ,[53,"DEX+3"]
 ,[61,"LUK+1"]
 ,[62,"LUK+2"]
 ,[63,"LUK+3"]
 ,[891,"MATK+1%"]
 ,[892,"MATK+2%"]
 ,[173,"ATK+3%"]
];

HS_ENCHANTS = [
	//[0,"(Hidden Slot Enchant, Armor)"]
  [11,"STR+1"]
 ,[12,"STR+2"]
 ,[13,"STR+3"]
 ,[21,"AGI+1"]
 ,[22,"AGI+2"]
 ,[23,"AGI+3"]
 ,[31,"VIT+1"]
 ,[32,"VIT+2"]
 ,[33,"VIT+3"]
 ,[41,"INT+1"]
 ,[42,"INT+2"]
 ,[43,"INT+3"]
 ,[51,"DEX+1"]
 ,[52,"DEX+2"]
 ,[53,"DEX+3"]
 ,[61,"LUK+1"]
 ,[62,"LUK+2"]
 ,[63,"LUK+3"]
 ,[102,"DEF+2"]
 ,[103,"DEF+3"]
 ,[104,"DEF+4"]
 ,[112,"MDEF+2"]
 ,[113,"MDEF+3"]
 ,[114,"MDEF+4"]
 ,[152,"CRIT+2"]
 ,[153,"CRIT+3"]
 ,[154,"CRIT+4"]
 ,[121,"ASPD+1%"]
 ,[122,"ASPD+2%"]
 ,[123,"ASPD+3%"]
 ,[302,"FLEE+2"]
 ,[304,"FLEE+4"]
 ,[306,"FLEE+6"]
 ,[311,"HIT+4"]
 ,[312,"HIT+8"]
 ,[313,"HIT+12"]
];

MALANGDO_ENCHANTS = [
		[131, "MHP +100"]
		,[132, "MHP +200"]
		//,[133, "MHP +300"]
		,[141, "MSP +50"]
		,[142, "MSP +100"]
		,[11, "STR+1"]
		,[12, "STR+2"]
		,[13, "STR+3"]
		,[21, "AGI+1"]
		,[22, "AGI+2"]
		,[23, "AGI+3"]
		,[31, "VIT+1"]
		,[41, "INT+1"]
		,[42, "INT+2"]
		,[43, "INT+3"]
		,[51, "DEX+1"]
		,[52, "DEX+2"]
		,[53, "DEX+3"]
		,[61, "LUK+1"]
		//,[301, "ASPD+1%"]
		//,[302, "ASPD+2%"]
		,[123, "ASPD+3%"]
		,[171, "ATK 1%"]
		,[891, "MATK 1%"]
		,[892, "MATK 2%"]
		//,[1781,"Fighting Spirit 1"]
		//,[1782,"Fighting Spirit 2"]
		//,[1783,"Fighting Spirit 3"]
		,[1784,"Fighting Spirit 4"]
		,[1785,"Fighting Spirit 5"]
		,[1786,"Fighting Spirit 6"]
		,[1787,"Fighting Spirit 7"]
		,[1788,"Fighting Spirit 8"]
		//,[1789,"Fighting Spirit 9"]
		//,[1790,"Fighting Spirit 10"]
		//,[1081,"Sharp 1"]
		,[1082,"Sharp 2"]
		,[1083,"Sharp 3"]
		,[1084,"Sharp 4"]
		,[1085,"Sharp 5"]
		//,[251,"Expert Archer 1"]
		,[252,"Expert Archer 2"]
		,[253,"Expert Archer 3"]
		,[254,"Expert Archer 4"]
		,[255,"Expert Archer 5"]
		,[256,"Expert Archer 6"]
		,[261,"Spell 1"]
		,[262,"Spell 2"]
		,[263,"Spell 3"]
		,[264,"Spell 4"]
		,[265,"Spell 5"]
		,[266,"Spell 6"]
		,[267,"Spell 7"]
];

ME_ENCHANTABLE = [
/* [Daggers] */
	 [390,0] //Swordbreaker
	,[391,0] //Mailbreaker
	,[392,0] //Weeder Knife
	,[387,0] //Kitchen Knife
	,[12,0] //Fortune Sword
	,[13,0] //Assassin Dagger
	,[394,0] //Exorciser
	,[396,0] //Azoth
	,[14,0] //Sucsamad
	,[15,0] //Grimtooth
	,[389,0] //Princess Knife
	,[397,0] //Cursed Dagger
	,[398,0] //Dagger of Counter
	,[799,0] //Holy Dagger
	,[1156,0] //Krieg
	,[1157,0] //Weihna
	,[1463,0] //Black Wing
	,[12,0] //Fortune Sword
	,[393,53,0] //Combat Knife - Except DEX+3
	,[11,0] //Moonlight Dagger
	,[388,0] //Ice Pick
	,[395,41,42,43,53,0] //Bazerald Except INT enchants or DEX+3
	,[1618,0] //Ancient Dagger
/* [Katars] */
	,[634,0] //Bloody Blades [2]
	,[482,0] //Unholy Touch
	,[633,0] //Drill Katar [1]
	,[1175,0] //Krishna [2]
	,[1176,0] //Chakram [2]
	,[631,0] //Ogre's Toenail [1]
	,[632,0] //Inverse Scare
	,[483,0] //Bloody Roar
	,[113,0] //Infiltrator
/* [One Handed Axes] */
	,[415,0] //Cleaver
	,[1164,0] //Berchel Axe [2]
/* [Two Handed Axes] */
	,[70,0] //Great Axe
	,[416,0] //Sabbath
	,[1166,0] //Bradium Stone Hammer
	,[417,0] //Slaughter
	,[418,0] //Tomahawk
	,[1167,0] //Giant Axe [1]
	,[419,0] //Guillotine
	,[68,0] //Bloody Axe
	,[623,0] //Heart Breaker [1]
	,[624,0] //Hurricane Fury [1]
	,[69,0] //Light Epsilon
	,[621,0] //Doom Slayer
/* [One Handed Swords] */
	,[32,0] //Ice Falchion
	,[33,0] //Fireblend
	,[401,0] //Caesar's Sword
	,[34,0] //Cutlus
	,[31,0] //Solar Sword
	,[35,0] //Mysteltainn
	,[36,0] //Tirfing
	,[403,0] //Byeollungum
	,[404,0] //Immaterial Sword
	,[470,0] //Star Dust Blade [1]
	,[1158,0] //Roubel Sword [1]
	,[1623,0] //Chrome Metal Sword
	,[402,41,42,43,53,0] //Excalibur - Except INT Enchant and DEX+3
	,[399,0] //Nagan
	,[400,0] //Edge
/* [Two Handed Swords] */
	,[44,0] //Muramasa
	,[405,0] //Dragon Slayer
	,[406,0] //Schweizersabel
	,[46,0] //Zweihander
	,[45,0] //Katzbalger
	,[615,0] //Muscle Cutter [2]
	,[934,0] //Tae Goo Lyeon [2]
	,[819,0] //Bloody Eater [2]
	,[1159,0] //Veteran Sword [1]
	,[1160,0] //Krasnaya [3]
	,[1456,0] //Chrome Metal Two-Handed Sword
	,[47,0] //Masamune
	,[43,0] //Executioner
	,[614,0] //Atroce's Blade [1]
	,[935,0] //Violet Fear [2]
	,[940,0] //Death Guidance [2]
/* [One Handed Spears] */
	,[616,0] //Long Horn [1]
	,[52,0] //Gungnir
	,[408,0] //Gelerdria
	,[410,0] //Tjungkuletti
	,[1460,0] //Imperial Spear [1]
	,[409,0] //Brocca
	,[617,0] //Battle Hook [1]
	,[618,0] //Hunting Spear [1]
/* [Two Handed Spears] */
	,[60,0] //Crescent Scythe
	,[411,0] //Bill Guisarme
	,[59,0] //Zephyrus
	,[412,0] //Longinus's Spear
	,[413,0] //Brionac
	,[414,0] //Hellfire
	,[471,0] //Gae Bolg
	,[619,0] //Phantom Spear
	,[620,0] //Ahlspiess
	,[942,0] //Carled [1]
/* [One Handed Staves] - Staves Except DEX+2/+3 */
	,[478,52,53,0] //Wing Staff
	,[1041,52,53,0] //Gentleman Staff
	,[863,52,53,0] //Holy Stick
	,[1168,52,53,0] //Dead Tree Staff
	,[1508,52,53,0] //Mental Stick
	,[936,52,53,0] //Dark Thorn Staff
	,[948,52,53,0] //Eraser
/* [Two Handed Staves] - Staves Except DEX+2/+3 */
	,[92,52,53,0] //Wizardry Staff
	,[1172,52,53,0] //Chronos
	,[1640,52,53,0] //Staff Of Thea [1]
	,[647,52,53,0] //Divine Cross
	,[646,52,53,0] //Staff of Destruction
/* [Maces] */
	,[81,0] //Golden Mace [1]
	,[82,0] //Long Mace
	,[422,0] //Quadrille
	,[820,0] //Nemesis
	,[1162,0] //Erde [2]
	,[1559,0] //Red Square Bag [2]
	,[1458,0] //Red Ether Bag [1]
	,[420,0] //Spike
	,[421,0] //Slash
	,[83,0] //Grand Cross
/* [Books] */
	,[122,0] //Book of the Apocalypse
	,[121,0] //Girl's Diary [1]
	,[486,0] //Legacy of Dragon
	,[485,0] //Hardcover Book [1]
	,[812,0] //Battlefield Textbook [1]
	,[641,0] //Book of the Dead  [2]
/* [Knuckles] */
	,[423,0] //Kaiser Knuckle
	,[424,0] //Berserk
	,[487,0] //Garm Claw [1]
	,[1512,0] //Sura's Rampage
/* [Bows] */
	,[102,0] //Roguemaster's Bow
	,[103,0] //Ballista
	,[479,0] //Dragon Wing
	,[1061,0] //Minstrel Bow [1]
	,[821,0] //Ixion Wings [1]
	,[945,0] //Nepenthes Bow [2]
	,[946,0] //Cursed Lyre [1]
	,[1174,0] //Falken Blitz [2]
	,[1457,0] //Mystic Bow
	,[104,0] //Rudra Bow
/* [Instruments] */
	,[492,0] //Oriental Lute
	,[649,0] //Spirited Guitar
	,[950,0] //Harp of Nepenthes [2]
	,[1462,0] //Green Whistle [1]
/* [Whips] */
	,[425,0] //Lariat Whip
	,[426,0] //Rapture Rose
	,[141,0] //Chemeti Whip
	,[498,0] //Blade Whip
	,[499,0] //Queen's Whip
	,[651,0] //Electric Eel [2]
	,[652,0] //Foot of the Sea Witch [1]
	,[653,0] //Carrot Whip
	,[951,0] //Stem of Nepenthes [2]
	,[1454,0] //Stem Whip [1]
	,[1622,0] //Rosevine
];

BIOLAB_ENCHANTS_WEAPON = [
		 [11, "STR+1"]
		,[12, "STR+2"]
		,[21, "AGI+1"]
		,[22, "AGI+2"]
		,[31, "VIT+1"]
		,[32, "VIT+2"]
		,[41, "INT+1"]
		,[42, "INT+2"]
		,[51, "DEX+1"]
		,[52, "DEX+2"]
		,[61, "LUK+1"]
		,[62, "LUK+2"]
		,[1781,"Fighting Spirit 1"]
		,[1782,"Fighting Spirit 2"]
		,[1783,"Fighting Spirit 3"]
		,[1081,"Sharp 1"]
		,[1082,"Sharp 2"]
		,[1083,"Sharp 3"]
		,[251,"Expert Archer 1"]
		,[252,"Expert Archer 2"]
		,[253,"Expert Archer 3"]
		,[261,"Spell 1"]
		,[262,"Spell 2"]
		,[263,"Spell 3"]
		,[264,"Spell 4"]
		,[123, "ASPD+3%"]
];

BIOLAB_ENCHANTS_ARMOR = [
		 [11, "STR+1"]
		,[12, "STR+2"]
		,[21, "AGI+1"]
		,[22, "AGI+2"]
		,[31, "VIT+1"]
		,[32, "VIT+2"]
		,[41, "INT+1"]
		,[42, "INT+2"]
		,[51, "DEX+1"]
		,[61, "LUK+1"]
		,[62, "LUK+2"]
		,[101,"DEF+1"]
		,[102,"DEF+2"]
		//,[111,"MDEF+1"]
		,[112,"MDEF+2"]
		,[113,"MDEF+3"]
		,[114,"MDEF+4"]
		,[301,"FLEE+1"]
		,[302,"FLEE+2"]
		,[303,"FLEE+3"]
		,[304,"FLEE+4"]
		,[131, "MHP +100"]
		,[132, "MHP +200"]
		,[133, "MHP +300"]
		,[141, "MSP +50"]
];

BE_ENCHANTABLE_WEAPON = [
/* [Daggers] */
	 [1625,0] //Aztoe Nail
	,[1624,0] //Scarletto Nail
/* [Katars] */
	,[1627,0] //Agent Katar
	,[1549,0] //Guillotine Katar
/* [Two Handed Axes] */
	,[1617,0] //Ygnus Stale
	,[1616,0] //End Sektura
/* [One Handed Spears] */
	,[1516,0] //Cannon Spear
/* [Two Handed Spears] */
	,[1315,0] //Gigantic Lance
/* [One Handed Staves] */
	,[1511,0] //Recovery Light
/* [Maces] */
	,[1499,0] //Bloody Cross
/* [Books] */
	,[1653,0] //Chilly Spell Book
/* [Bows] */
	,[1515,0] //Catapult
	,[1045,0] //Giant Crossbow
	,[1506,0] //Creeper Bow
];

BE_ENCHANTABLE_ARMOR = [
/* [Upper Headgear] */
	 [1663,0] //Ancient Gold Ornament
/* [Armors] */
	,[1513,0] //Green Surgical Gown
/* [Shields] */
	,[1500,0] //Giant Shield
	,[1520,0] //Geffenia Water Book
	,[1507,0] //Bible of Promise(2nd Vol.)
/* [Garments] */
	,[1498,0] //Salvage Cape
/* [Accessory] */
	,[1517,0] //Assassin's Glove
];

EDEN_ENCHANTS_HAT = [
		 [11, "STR+1"]
		,[12, "STR+2"]
		,[21, "AGI+1"]
		,[22, "AGI+2"]
		,[31, "VIT+1"]
		,[32, "VIT+2"]
		,[41, "INT+1"]
		,[42, "INT+2"]
		,[51, "DEX+1"]
		,[61, "LUK+1"]
		,[62, "LUK+2"]
];

EDEN_ENCHANTS_ARMOR_FIRST = [
		 [11, "STR+1"]
		,[12, "STR+2"]
		,[21, "AGI+1"]
		,[22, "AGI+2"]
		,[31, "VIT+1"]
		,[32, "VIT+2"]
		,[41, "INT+1"]
		,[42, "INT+2"]
		,[61, "LUK+1"]
		,[62, "LUK+2"]
		,[111,"MDEF+1"]
		,[112,"MDEF+2"]
		,[113,"MDEF+3"]
		,[302,"FLEE+2"]
];

EDEN_ENCHANTS_ARMOR_SECOND = [
		 [11, "STR+1"]
		,[12, "STR+2"]
		,[21, "AGI+1"]
		,[22, "AGI+2"]
		,[31, "VIT+1"]
		,[32, "VIT+2"]
		,[41, "INT+1"]
		,[42, "INT+2"]
		,[51, "DEX+1"]
		,[61, "LUK+1"]
		,[62, "LUK+2"]
		,[111,"MDEF+1"]
		,[112,"MDEF+2"]
		,[113,"MDEF+3"]
		,[114,"MDEF+4"]
		,[303,"FLEE+3"]
		,[304,"FLEE+4"]
		,[151,"CRIT+1"]
		,[152,"CRIT+2"]
		,[153,"CRIT+3"]
		,[154,"CRIT+4"]
];

EDEN_ENCHANTS_WEAPON_FIRST = [
		 [172, "ATK+2%"]
		,[892, "MATK+2%"]
];

EDEN_ENCHANTS_WEAPON_SECOND_PHYSICAL = [
		 [2030, "Physical Damage vs Formless + 10%"]
		,[2031, "Physical Damage vs Undead + 10%"]
		,[2032, "Physical Damage vs Brute + 10%"]
		,[2033, "Physical Damage vs Plant + 10%"]
		,[2034, "Physical Damage vs Insect + 10%"]
		,[2035, "Physical Damage vs Fish + 10%"]
		,[2036, "Physical Damage vs Demon + 10%"]
		,[2037, "Physical Damage vs Demi-Human + 10%"]
		,[2038, "Physical Damage vs Angel + 10%"]
		,[2039, "Physical Damage vs Dragon + 10%"]
];

EDEN_ENCHANTS_WEAPON_SECOND_MAGICAL = [
		 [2170, "Magical Damage vs Formless + 5%"]
		,[2171, "Magical Damage vs Undead + 5%"]
		,[2172, "Magical Damage vs Brute + 5%"]
		,[2173, "Magical Damage vs Plant + 5%"]
		,[2174, "Magical Damage vs Insect + 5%"]
		,[2175, "Magical Damage vs Fish + 5%"]
		,[2176, "Magical Damage vs Demon + 5%"]
		,[2177, "Magical Damage vs Demi-Human + 5%"]
		,[2178, "Magical Damage vs Angel + 5%"]
		,[2179, "Magical Damage vs Dragon + 5%"]
];

//EDEN_ENCHANTS_WEAPON_FIRST = FIRST + SECOND, depends on former choice.

EDEN_ENCHANTABLE_HAT = [
	 [1576,0] //Eden Group Hat
	,[1577,0] //Eden Group Hat II
];

EDEN_ENCHANTABLE_ARMOR = [
	 [1603,0] //Eden Group Uniform IV
	,[1585,0] //Eden Group Manteau II
	,[1567,0] //Eden Group Boots IV
];

EDEN_ENCHANTABLE_WEAPON = [
	 [1570,0] //Eden Group Bow III
	,[1573,0] //Eden Group Dagger III
	,[1574,0] //Eden Group Dictonary I
	,[1575,0] //Eden Group Guitar I
	,[1578,0] //Eden Group Huuma Shuriken I
	,[1579,0] //Eden Group Katar I
	,[1580,0] //Eden Group Knuckle I
	,[1583,0] //Eden Group Mace III
	,[1588,0] //Eden Group Revolver III
	,[1591,0] //Eden Group Saber III
	,[1594,0] //Eden Group Slayer III
	,[1595,0] //Eden Group Spear I
	,[1598,0] //Eden Group Staff III
	,[1599,0] //Eden Group Two Handed Axe I
	,[1604,0] //Eden Group Whip I
];

//El Dicaste Enchants slot 1
ED_ENCHANTS_SLOT_ONE = [
		 [172, "ATK+2%"]
		,[173, "ATK+3%"]
		,[891, "MATK+1%"]
		,[892, "MATK+2%"]
		,[155, "CRIT+5"]
		,[157, "CRIT+7"]
		,[306, "FLEE+6"]
		,[312, "FLEE+12"]
];
//El Dicaste Enchants slot 2 for equipment
ED_ENCHANTS_SLOT_TWO = [
		 [21, "AGI+1"]
		,[22, "AGI+2"]
		,[31, "VIT+1"]
		,[32, "VIT+2"]
		,[41, "INT+1"]
		,[42, "INT+2"]
];
//El Dicaste Enchants slot 2 & 3 for Light of El Dicaste
ED_ENCHANTS_LIGHT_SLOT_TWO_THREE = [
		 [21, "AGI+1"]
		,[22, "AGI+2"]
		,[41, "INT+1"]
		,[42, "INT+2"]
		,[51, "DEX+1"]
		,[52, "DEX+2"]
];
//El Dicaste Enchants slot 3 for equipment
ED_ENCHANTS_SLOT_THREE = [
		 [21, "AGI+1"]
		,[22, "AGI+2"]
		,[23, "AGI+3"]
		,[33, "VIT+3"]
		,[41, "INT+1"]
		,[42, "INT+2"]
		,[43, "INT+3"]
		,[51, "DEX+1"]
		,[52, "DEX+2"]
];

ED_LIGHT_OF_EL_DICASTE = [
	 [1201,0] //Light of El Dicastes
];

ED_ENCHANTABLE = [
	 [446,0] //Feral Tail
	,[448,0] //Feral Boots
	,[449,23,33,43,0] //Golden Trickle ("Golden Bell" in wiki), Exclude AGI+3, VIT+3, and INT+3
];

//Mora Enchants
MORA_ENCHANTS_SLOT_ONE = [
		 [172, "ATK+2%"]
		,[173, "ATK+3%"]
		,[891, "MATK+1%"]
		,[892, "MATK+2%"]
		,[155, "CRIT+5"]
		,[157, "CRIT+7"]
		,[306, "FLEE+6"]
		,[312, "FLEE+12"]
];
MORA_ENCHANTS_SLOT_TWO = [
		 [41, "INT+1"]
		,[42, "INT+2"]
		,[51, "DEX+1"]
		,[52, "DEX+2"]
		,[61, "LUK+1"]
		,[62, "LUK+2"]
];
MORA_ENCHANTS_SLOT_THREE = [
		 [11, "STR+1"]
		,[12, "STR+2"]
		,[21, "AGI+1"]
		,[22, "AGI+2"]
		,[31, "VIT+1"]
		,[32, "VIT+2"]
];

MORA_ENCHANTABLE = [
		 [1664,0] //Army Padding
		,[1605,0] //Loki's Muffler
		,[1665,0] //Pendant Of Guardian
];

//exceptions list for items and cards disabled in vanilla
restrictedEquips = [319,347,348,444,576,603,604,605,606,670,1320,1329,1334,1336,1339,1340,1344,1348,1354,1356,1365,1371,1375,1376,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1393,1491,1492,1493,1522,1526,1548,1560,1607,1608,1609,1610,1615];
restrictedCards = [32,42,44,45,47,52,95,119,120,126,127,134,136,138,140,141,152,161,162,166,178,219,255,256,277,284,310,312,313,320,322,323,332,338,349,357,361,363,374,375,392,394,404,409,420,421,423,424,425,463,475,478,486,492,515,521,526,529,532];