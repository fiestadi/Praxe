// OPERATOR = eto element jazika , yadajushij opisanie dejstvij , kotorie nuzhno vypolnit

// *************LOGICHESKIE **********************
'||'  // ili( bolshe podchodit dlia bulevich znachenij)
let a = true;
let b = false;
let resalt = a || b
console.log(resalt);//true 


let hour = 12
let weekend = true
if ( hour < 9 || hour > 18 || weekend){
   console.log('Ne rabochee vremia')
} else {
   console.log('Rabochee vremia')
}
let hour1 = 12
if ( hour1 < 9 || hour1 > 18){
   console.log('Ne rabochee vremia')
} else {
   console.log('Rabochee vremia')
}


'&&'  // i ( esli 2 operatora && i || i && to snachala otrabotaet vse operatory && a potom ||)
let d = true;
let c = true;
let result = d && c; // esli chot odin is operandov false budet vzvodit false, chto bi bilo true nuzhno chtob vse operandi imeli true znachenie
console.log(result);

 let hour2 = 12;
 let minut = 30;
 if (hour2 === 12 && minut === 15){
   console.log('sejchas 12 : 15');
 } else {
   console.log(' sejchas ne 12 :15 ')
 }


' ! '//net ili protivopoloznoe znachenie tekushego , peroritet bolshe chem u || i chem u &&
let x = 1
let result1 = !x // boolean(x)
console.log(result1);




' ?? '// nulevoe slijanie( rabotaet pochti takzhe kak i operator || no est otlichie mi ignoriruem null znachenie i undefind)

//*******************MATEMATICHESKIE OPERATORY*************
let n = 5+2;// slozhenie eli stroka to slijanie 2 strok
let n1 = 5-2;// vichitanie
let n2 = 5*2;// umnoyenie
let n3 = 5/2; //delenie
let n4 = 5%2;// ostatok ot delenia(legko uznat chetnoe ili nechetnoe)
'===' // oprator strogogo ravenstva 
console.log(n,n1,n2,n3,n4)
let s = 2
let r = 4
let m = s ** r // v stepen
let y = s ^ r // bitovoe znachenie
console.log(m, y);

' ++ '// inkriment uvelichivaet peremennuju na 1(c++)
'--' // dekrement umenshaet peremennuju na 1(c--)

// sokrashennie versia matematicheskich operatorov
let u = 10;
u /= 5;
console.log(u);//2
let u1 = 10;
u1 *= 5;
console.log(u1);//50

//******************TERNARNIE OPERATORY****************
// operator if 
let age = 23;
if (age == 30){
   console.log("vas vozrast 30") // mozhno vmesto console.log ispolzovat 'alert'
} else {
   console.log( '30 ne vas vozrast')
}
'?' //bolee sokrashennaja versia operatora if esli ispolyovat ?
// 1
let result2;
if ( a+b <4){
   result2 = 'malo'

}else {
   result2 = 'mnogo'
}
// if perevedennij v ? 
result2 = (a + b < 4 ) ? 'malo' : 'mnogo';
// 2 

let message;
if (login == 'kolega'){
message = "Ahoj";
}else if(login == 'boss'){
message = "dobry den";
} else if(login == ''){
message = "nic";
}else{
   message = '';
}
// if v ?
const message1 = (login == 'kolega') ? 'ahoj' : (login == 'boss') ? 'dobry den' : (login == '') ? 'nic' : '';
