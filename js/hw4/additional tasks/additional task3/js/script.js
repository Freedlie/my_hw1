// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let arr = [];
// for(let i = 0; i < 140; i++){
//     if(i < 50){
//         arr[i] = (i + 1) * 2;
//     }
//     else if(i >= 50 && i < 100 ){
//         if(i % 2 === 0){
//             arr[i] = i+1;
//         }else{
//             arr[i] = i + 100;
//         }
//     }
//     else if(i >= 100 && i < 120){
//         arr[i] = Math.floor(Math.random() * 100);
//     }
//     else if(i >= 120 && i < 140){
//         arr[i] = Math.floor(Math.random() * 732) + 8;
//     }
// }

// 2. Вивести за допомогою console.log кожен третій елемен

// for(let i = 2; i < arr.length; i += 3){
//     console.log(arr[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for(let i = 2; i < arr.length; i += 3){
//     if(i % 2 === 0){
//         console.log(arr[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let arr2 = [];
// let j = 0;
// for(let i = 2; i < arr.length; i += 3){
//     if(i % 2 === 0){
//         arr2[j] = arr[i];
//         console.log(arr2[j]);
//         j++;
//     }
// }
// console.log(arr2);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним

// for(let i = 0; i < arr.length; i ++){
//     if(arr[i] % 2 === 0){
//         console.log(arr[i - 1]);
//     }
// }

// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//

// let sum = 0;
// let arr = [100,250,50,168,120,345,188];
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// let result = sum / arr.length;
// console.log(Math.round(result));

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let arr1 = [];
// let arr2 = [];
// for(let i = 0; i < 10; i++){
//     arr1[i] = Math.round(Math.random() * 100) * 5;
//     arr2[i] = arr1[i];
// }
// console.log(arr1);
// console.log(arr2);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let arr = ['hello' , 32, true, 'world', false, 1, 101];
// let arr2 = [];
// let i = 0;
// for(let item of arr){
//     if(typeof item === 'number'){
//         arr2[i] = item;
//         i++;
//     }
// }
// console.log(arr2);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// for (const usersWithIdElement of usersWithId) {
//     for (const citiesWithIdElement of citiesWithId) {
//         if(usersWithIdElement.id === citiesWithIdElement.user_id){
//             usersWithIdElement.adress = citiesWithIdElement;
//         }
//     }
// }
// console.log(usersWithId);

//
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arr = [];
// for(let i = 0; i < 10; i++){
//     arr[i] = i;
//     if(i % 2 === 0){
//         console.log(arr[i]);
//     }
// }

//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arr1= [];
// let arr2 = [];
// for(let i = 0; i < 10; i++){
//     arr1[i] = i;
//     arr2[i] = arr1[i];
// }

//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let arr = [ 'a', 'b', 'c'];
// let word1 = '';
// let word2 = '';
// let word3 = '';
// for(let i = 0; i < arr.length; i++){
//     word1 += arr[i];
// }
// console.log(word1);
// //----------------------------------
// let i = 0;
// while(i < arr.length){
//     word2 += arr[i];
//     i++;
// }
// console.log(word2);
// //----------------------------------
// for (const word3Element of arr) {
//     word3 += word3Element;
// }
// console.log(word3);
