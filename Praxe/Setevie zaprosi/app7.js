//********************* SETEVIE ZAPROSI***************

// AJAX
// Fetch
//*********************AJAX****************************
//sposob sozdania assinchronnich HTTP zaprosov cherez METOD 
XMLHttpRequest(); // objekt barauzera a javascript ,HTML i DOM dlia otobrazhenia ili ispolzovania dannich
function getXmlHttp(){
       try {
           return new ActiveXObject("Msxml2.XMLHTTP");
       } catch (e) {
           try {
               return new ActiveXObject("Microsoft.XMLHTTP");
           } catch (ee) {
           }
       }
       if (typeof XMLHttpRequest!='undefined') {
           return new XMLHttpRequest();
       }
   }
  //Ajax schitivaet dannie s veb  servera, obnovit stranicu ber pereyahruski stranici, i otpravka dannich na veb server
  //1.
  //Метода GET в HTTP используется для получения информации от сервера по заданному URI (URI в HTTP).
//2.
//метод HEAD работает точно так же, как GET, но в ответ сервер посылает только заголовки и статусную строку без тела HTTP сообщения.( bez tela )
//3.
//метод POST используется для отправки данных на сервер
//4. метод PUT используется для загрузки содержимого запроса на указанный в этом же запросе URI.
//5.
//метод DELETE удаляет указанный в URI ресурс.
//6.
//
// FETCH 
let p1 = new Promise((resolve,reject) =>{
   fetch('https://jsonplaceholder.typicode.com/users')//zapros
   .then(response => { //poluchenie otveta s url
      console.log(response);
      if(response.ok) resolve(response.json());
      // esli otvet ok perevesti ego v json format
      else reject(response); // pishetsia esli vzdaet oshibku
   })
});
console.log(p1);
p1.then(f1, f2);
function f1(data) { // fulfilled vipolneno
   console.log(p1);
   console.log('success');
   console.log(data);
}
function f2(data){
   console.log(p1);
   console.log('error');
   console.log(data);

}
console.log(p1);
function f1(data) {
   console.log('success');
   console.log(data);

   // izvlekaem vse imena
   const names = data.map(user => user.name);
   console.log(names.sort()); // sortiruem
}

function f2(error) {
   console.log('error');
   console.log(error);
}

p1.then(f1).catch(f2);

function f1(data) {
   console.log('success');
   console.log(data);

   // izvlekaem vse emaily
   const emails = data.map(user => user.email);
   console.log(emails.sort());
}

function f2(error) {
   console.log('error');
   console.log(error);
}

p1.then(f1).catch(f2);

// -----------------------------------------
// Пример fetch запроса с применением DOM - методов

let url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then(res => res.json())
    .then(data => createUsers(data))


function createUsers(data){
    let root_div = document.querySelector('#root')
    for (let elem of data){
        let user_elem = document.createElement('p')
        user_elem.innerText = `${elem.name} ${elem.company.name}`

        root_div.append(user_elem)
    }
}