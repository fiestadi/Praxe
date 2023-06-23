//*********************PROMISY********************** */
//eto objekt kotorij  daet rezultat uspeshmogo ili neudachnogo zavershenia operacii( t.e cod kotoromu nuzhno sdelat chto to assinchrono = sozdaet objekt promis i voyvrashaet ego) sozdaetsia eshe dlia blokirovania hlavnogo potoka( naprimer kotorij rabotaet s failami,vizovi API, zaprosi k bazam dannich)
/////////////////PROMIS obvertka dlia assinchronnich vychislenij ili kakich to otlozhennich .
// Мини введение в promise

// let promise = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         let a = [1,2,3]
//         console.log('Test 1', a)
//         resolve(a)
//     }, 50)
// })

// promise.then((data) => {
//     data.push(4)
//     console.log('Test 2', data)
// })

// ---------------

// setTimeout(()=> {
//     console.log('Test 1')
// }, 2000)


// console.log('Test 2')



let promis = new Promise((resolve,reject) =>{
// funkcia s 2 argumentami (resolve, reject)
});
// sostojanie promisa
//1. pending( nachalnoe)neispolnen i neotklone
//2. fullfiled( operacia yavershena uspeshno)
//3. rejected())


let myPromise = new Promise(function(resolve){
   resolve ('Ahoj JS');
 });

 // poluchit dannie is promisa mozhno s pomoshju funkcii then()
 myPromise.then(function(value){
console.log(`Poluchennie dannie: ${value}`);
 });
 //**********************THROW  a TRY .. CATCH****************/
 //metod throw vybrasivaet iskluchenie a try catch lovit i obrabativaet
// funkcia FETCH  = posilaet zapros na server

//*********************** METOD FINALLY() **********/
// ispolzujetsia  chtobi vzpolnit kod pri zavershenii asinchronoj operacii
//**************************try catch******** */
try{
//kod //telo instrukcia dlia vypolnenia}
} catch( error){
// propisivajutsia instrukcia chto delat eslim proizoshla osibka)
}

try {
  throw new Error("Custom message");
 } catch(err) {
  console.log("Name: ", err.name);
  console.log("Message: ", err.message);
  console.log("Stack: ", err.stack);
 
 
  // Можем также просто вывести ошибку целиком
  console.log("Err: ", err);
 }



