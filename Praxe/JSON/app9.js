//********************JSON *********** */ - eto tekstovij format dlia obmena dannimi, v kachestve znachenij mohut ispolyovatisa
// 1. objekt(eto para kluch- znachenie zakluchennie v fihurnie skobki, kluch eto stroka i obiazatelno brat v ""){ 'name' : "Miki"}
// 2. massiv[ v nutri kvadratnich skobok est nabor znachenij t.k obrashiaemsia k nim po nomeru elementa]
// 3.Stroka, booleani null
// const user = require('./data.json')
// console.log(typeof user)

// let obj = {
//     name: 'Diana',
//     salary: 1000
// }

// JSON.stringify()     --  Преобразование JS объекта в JSON
// JSON.parse()         --  Обратное преобразование JSON'a в JS объект

// { name: 'Diana', salary: 10 }           -- JS (object)
// {"name":"Diana","salary":1000}          -- JSON (string)

// let json = JSON.stringify(obj)
// console.log(JSON.parse(json))


// ----------------------------------
// Тернарный оператор
// (condition) ? value1 : value2
// if(...){
//     console.log('YES')
// } else {
//     console.log('NO')
// }


// (condition) ? console.log('YES') : value2

// let a = (condition) ? value1 : value2

// {
//     name: (condition) ? value1 : value2
// }
// console.log((10 < 100) ? 'YES' : 'NO')


// if (10 < 100){
//     console.log('YES')
// } else {
//     console.log('NO')
// }

// && ищет первый попавшийся false (или последний TRUE)
// || ищет первый попавшйися true (или последний false)
//          false   true
// console.log(0 || 10 || 1 || -10 || '.')    --    ответ 10
