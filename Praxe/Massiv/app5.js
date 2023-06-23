//****************** MASSIV ************************ eto bjek so strokovimi kluchami. v massive chraniatsia elementi luboho tipa . poluchaem elementi po ego idexu
//sintaksis
let arr0 = new Array();
let arr1 = [];// v [ ukayujem znachenia elementov]
//******************metodi massiva********************
'pop' // udaliaet poslednij element is massiva
'push'// dobavliet element v konec massiva 
'shift'// udaliet is massiva pervij element
'unshift'// dobavliet element v nachalo massiva
'splice' // universalnij metod umeet udaliat , dobavliat , zameniat elementi ( syntax arr.splice(start[delteCount,elem1, ....elemN]) )
let arr2 = ['im', 'learn', 'JS'];
arr2.splice(1,1);// nachinaja s index 1 udalit 1 element
alert(arr2);// im JS

let arr3 = ['it','nice','day'];
arr3.splice(0, 1, 'so','beautiful');
alert(arr3);
 'slice' //sintax arr.slice([start],[end]) vozvrashaet novy massiv, v kotorij kopiruet vse elementi
  //chto bi projtis po elementam ispolzuem 
'for(let i = 0; i < arr.length; i++);'
'forEach' // metod pozvoliaet zapuskat funkciju dlia kazhdoho elementa massiva
//syntax arr.forEach(function(item,index,array){
// item(ocherednoj element), index(ego index), arraz(sam massiv) )
//});
let arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach(function(elem) {
   sum += elem;
});
console.log(sum);//15

'map' //mozhno primeniat funkciju dlia kazhdoho elementa massiva
//syntax let arr = massiv.map(function(element massiva){
//kod
//return izmenennij massiv
//})
let arr4 = [1,2,3,];
let res = arr4.map(function(elem){
   return elem * 2;
});
console.log(res);

'filter'// metod pozvoliaet otfiltrovat elementi massiva
let arr5 = [-5, 5, -13, 6, 17, 0]
let res1 = arr5.filter(elem => {
   if (elem <= 0) {
      return true;
   } else {
      return false;
   }
   });
console.log(res1);

'sort'// metod sortiruet massiv menija v nem poriadok elementov
//synax arr.sort([compareFunction])
//sortirovka po vozrastaniju 
function compareFunction(a, b) {
   return a -b;
}
let numbers = [4, 3, 5 , 1, 2];
numbers.sort(function(a, b){
   return a - b;
});
console.log(numbers); //  [1, 2, 3, 4, 5]
// sortirovka massiva po znacheniju odnogo is svojstv
let item = [
      { name: 'Diana', value: 25},
      {name: 'Ron', value: 37},
      { name: 'Lera', value: 21},
      {name: 'Alex', value: 42}
   
];
item.sort(function(a, b){
   if(a.name > b.name){
      return 1;
   }
   if (a.name <b.name) {
      return -1
   }
   if (a.name == b.name){
      return 0;
   }
});
console.log(item);

// strelochnaja funkcia

let item1 = [
   { name: 'Diana', value: 25 },
   { name: 'Ron', value: 37 },
   { name: 'Lera', value: 21 },
   { name: 'Alex', value: 42 }
 ];
 
 item1.sort((a, b) => {
   if (a.name > b.name) {
     return 1;
   }
   if (a.name < b.name) {
     return -1;
   }
   if (a.name === b.name) {
     return 0;
   }
 });
 
 console.log(item1);

 'find' // metod dlia poluchenia objekta is massiva
 
 function isMyFavoriteHobby(element, index, array) {
   let myFavoriteHobby = 'running'
 
   return element === myFavoriteHobby
 }
 
 let currentToDoList = [
   'running',
   'coding',
   'swimming',
   'paiting',
   'dancing',
 ]
 let tomorrowToDoList = [
   'shift list',
   'swimming',
   'coding',
   'reading books',
 ]
 
 console.log(currentToDoList.find(isMyFavoriteHobby))
 // running'
 
 console.log(tomorrowToDoList.find(isMyFavoriteHobby))
 // undefined, 
 

////////////////////////////POP//////////////////////////////
//poluchit poslednij element > umenshit dlinu massiva > vernut poluchennij element
let arr7 = ['Mili', 'Adela', 'Natalie', 'Honza', 'Pepa'];

console.log(arr7);

function pop(arr) {
  if (!arr.length) return undefined;// proverka esli massiv pustoj

  let el = arr[arr.length - 1];
  arr.length = arr.length - 1;// udalenie posledneho

  return el;
}

console.log(pop(arr7));
console.log(arr7);

// eto reshenie s pomoshju funkcii slice
let arr8 = ['Jirko', 'Josef', 'Sofie', 'Mili', 'Maja'];

function pop(arr) {
  const [deleted] = arr.splice(-1);
  return deleted;
}

console.log(pop(arr8));
console.log(arr8);

///////////////////////////////PUSH//////////////////////////
var fruits = ["Apple", "Cherry", "Meloun"];
var exotic_fruits = ["Kiwi", "Mango", "Pineapple"];

 //slivaet 2 massiv s pervim  push.applay
 
 Array.prototype.push.apply(fruits,exotic_fruits);

alert( fruits ); // izmenena dlina massiva

