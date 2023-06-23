//****peremennie v js****
//dajut vozmozhnost povtornogo dostupa k znacheniju
// imena peremennich 
//PascalCase // ispolzujutsia k tipam i klassam v js 
///DI_NICK// ispulzujutsia kogda izvestni do zapuska prilozhenia i ne meniayutsia na protiazhenia vsej raboti(const)
//CamelCase// vse ostalnie peremennie
'let ' // mozhem pereprisvaivaet  new znachenie ( vidimost {})              
'const' // prisvaivat new znachenie etoj peremennoj zapresheno
'var' // ne ispolzujetsia( esli sozdana vnutri funkcii to i budet dostupna tolko vnutri etoj funkcii - eto lokalnaja i  globalnaja -dostupni vne cikla)
//***************Funkcia -eto blok koda,kotorij mozhno vipolniat mnogoktatno(peredavat kak argument, i voyvrashat v kachestve rezultata, pozvoliaet obrabativat dannie) */
 function name(params) {
//  //1. imia funkcii 2.() spisok parametrov prinimaemich funkciej 3. {} instrukcii , kotorie budut priniati posle vizova funkcii
 }
// function myFunc(theObject) {
//    theObject.make = 'Tayota'
// }
// console.log(myFunc);
// rekursivnaja funcia = funkcia , kotoraja vizivaet samu sebia
//rabotaet rekurcia s faktorialom 
function factorial(x) {
   if (x < 0) return;// uslovie zavershenia
   if (x === 0) return 1; // 
   return x * factorial(x - 1);// funkcia viyivaet sebia snova
}
factorial(4); //24

function revStr(str) {
   if(str === '') return '';
   return revStr(str.substr(1)) + str[0];
    // return revStr ('at ) + 'c' > return revStr ('t') + 'a' > returnrevStr (' ') + 't'
   // metod 'substr' stavit nachalo stroki v opredelennoe mesto
}
revStr('tab');

