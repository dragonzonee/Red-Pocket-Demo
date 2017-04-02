var path = document.getElementsByTagName("path");
var length = path.length;


function onloadjs(){
  for(var i=0;i<length;i++){
    path[i].style.opacity= 0;
  }
  var svg = document.getElementsByTagName("svg")[0];
  svg.style.opacity=1;
}


var num = 31;//字符总个数b
var volume = Math.floor(length/num);
var left = length%num;
//alert(left)
var ET = new Array(left);
//alert(length);
var SP1 = new Array(volume);
var SP2 = new Array(volume);
var SP3 = new Array(volume);
var SP4 = new Array(volume);

var L1 = new Array(volume);
var L2 = new Array(volume);
var L3 = new Array(volume);

var O1 = new Array(volume);
var O2 = new Array(volume);
var O3 = new Array(volume);

var A1 = new Array(volume);
var A2 = new Array(volume);

var C1 = new Array(volume);
var C2 = new Array(volume);

var E1 = new Array(volume);
var E2 = new Array(volume);

var T1 = new Array(volume);
var T2 = new Array(volume);

var U1 = new Array(volume);
var U2 = new Array(volume);

var B = new Array(volume);
var F = new Array(volume);
var G = new Array(volume);
var H = new Array(volume);
var I = new Array(volume);
var M = new Array(volume);
var N = new Array(volume);
var P = new Array(volume);
var S = new Array(volume);
var W = new Array(volume);
var Y = new Array(volume);

var ET = new Array(volume);

var times1=0
for(var m=length-left;m<length;m++){
  ET[times1]=path[m];
  times1++;
}

var times = 0;
for(var n=0;times<volume;n=num*times){
  SP1[times] = path[n];
  SP2[times] = path[n+1];
  SP3[times] = path[n+2];
  SP4[times] = path[n+3];
  
  L1[times] = path[n+4];
  L2[times] = path[n+5];
  L3[times] = path[n+6];
  
  O1[times] = path[n+7];
  O2[times] = path[n+8];
  O3[times] = path[n+9];
  
  A1[times] = path[n+10];
  A2[times] = path[n+11];
  
  E1[times] = path[n+12];
  E2[times] = path[n+13];
  
  T1[times] = path[n+14];
  T2[times] = path[n+15];
  
  U1[times] = path[n+16];
  U2[times] = path[n+17];
  
  B[times] = path[n+18];
  C1[times] = path[n+19];
  C2[times] = path[n+30];
  F[times] = path[n+20];
  G[times] = path[n+21];
  H[times] = path[n+22];
  I[times] = path[n+23];
  M[times] = path[n+24];
  N[times] = path[n+25];
  P[times] = path[n+26];
  S[times] = path[n+27];
  W[times] = path[n+28];
  Y[times] = path[n+29];

  times++;
}

var last;
var former;
SP1.b=true;SP2.b=true;SP3.b=true;SP4.b=true;
L1.b=true;L2.b=true;L3.b=true; O1.b=true;O2.b=true;O3.b=true;
A1.b=true;A2.b=true; E1.b=true;E2.b=true; T1.b=true;T2.b=true; U1.b=true;U2.b=true; C1.b=true; C2.b=true;
B.b=true; F.b=true; G.b=true; H.b=true; I.b=true; M.b=true; N.b=true; P.b=true; S.b=true; W.b=true; Y.b=true; ET.b=true;

document.onkeydown=function(event){
  var e = event || window.event || arguments.callee.caller.arguments[0];
  if(B.b&&e && e.keyCode==66){ 
    regone(B);
   }else if(F.b&&e && e.keyCode==70){
    regone(F);
   }else if(G.b&&e && e.keyCode==71){
    regone(G);
   }else if(H.b&&e && e.keyCode==72){ 
    regone(H);
   }else if(I.b&&e && e.keyCode==73){ 
    regone(I);
   }else if(M.b&&e && e.keyCode==77){ 
    regone(M);
   }else if(N.b&&e && e.keyCode==78){ 
    regone(N);
   }else if(P.b&&e && e.keyCode==80){ 
    regone(P);
   }else if(S.b&&e && e.keyCode==83){
    regone(S);
   }else if(W.b&&e && e.keyCode==87){ 
    regone(W);
   }else if(Y.b&&e && e.keyCode==89){ 
    regone(Y);
   }else if(ET.b&&e && e.keyCode==13){
    regone(ET);
   }else if(e && e.keyCode==65){ 
    if(A1.b){
      regone(A1);
    }else if(A2.b){
      regone(A2);
    }else{
      retrival();
    }
   }else if(e && e.keyCode==67){ 
    if(C1.b){
      regone(C1);
    }else if(C2.b){
      regone(C2);
    }else{
      retrival();
    }
   }else if(e && e.keyCode==69){ 
    if(E1.b){
      regone(E1);
    }else if(E2.b){
      regone(E2);
    }else{
      retrival();
    }
   }else if(e && e.keyCode==84){ 
    if(T1.b){
      regone(T1);
    }else if(T2.b){
      regone(T2);
    }else{
      retrival();
    }
   }else if(e && e.keyCode==85){ 
    if(U1.b){
      regone(U1);
    }else if(U2.b){
      regone(U2);
    }else{
      retrival();
    }
   }else if(e && e.keyCode==76){ 
    if(L1.b){
      regone(L1);
    }else if(L2.b){
      regone(L2);
    }else if(L3.b){
      regone(L3);
    }else{
      retrival();
    }
   }else if(e && e.keyCode==79){ 
    if(O1.b){
      regone(O1);
    }else if(O2.b){
      regone(O2);
    }else if(O3.b){
      regone(O3);
    }else{
      retrival();
    }
   }else if(e && e.keyCode==32){ 
    if(SP1.b){
      regone(SP1);
    }else if(SP2.b){
      regone(SP2);
    }else if(SP3.b){
      regone(SP3);
    }else if(SP4.b){
      regone(SP4);
    }else{
      retrival();
    }
   }
  else {
    retrival();
  }
}; 

function regone(KEY){
  for(var n=0;n<KEY.length;n++){
      KEY[n].style.opacity=1;
    }
    KEY.b=false;
    former=last;
    last=KEY;
}

function retrival(){
    if(former==[]){
     for(var n=0;n<last.length;n++){
      last[n].style.opacity=0;
     }
     last.b=true;
   }else{
     for(var n=0;n<last.length;n++){
      last[n].style.opacity=0;
     }
     last.b=true;
     last=former;
     former=[];
   }
}