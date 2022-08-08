//
//
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let foo = (num1, num2, num3) =>{
//     let min = num1;
//     if(min > num2){
//         min = num2;
//     }
//     if(min > num3){
//         min = num3;
//     }
//     return min;
// }
// console.log(foo(3,2,1));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let foo = (num1, num2, num3) =>{
//     let max = num1;
//     if(max < num2){
//         max = num2;
//     }
//     if(max < num3){
//         max = num3;
//     }
//     return max;
// }
// console.log(foo(1,2,3));

// - створити функцію яка повертає найбільше число з масиву

// let arr = [1, 3, 53, 66, 2, 7, 22];
// function foo(arr){
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(max < arr[i]){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(foo(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [1, 3, 53, 66, 2, 7, 22];
// function foo(arr){
//     let res = 0;
//     for (let i = 0; i < arr.length; i++) {
//         res += arr[i];
//     }
//     return res;
// }
// console.log(foo(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let arr = [1, 3, 53, 66, 2, 7, 22];
// function foo(arr){
//     let min = arr[0];
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(min > arr[i]){
//             min = arr[i];
//         }
//         if(max < arr[i]){
//             max = arr[i];
//         }
//     }
//     console.log(`max: ${max}`);
//     return min;
// }
// console.log(`min: ${foo(arr)}`);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let foo = (arr, length)=>{
//     for (let i = 0; i < length; i++) {
//         arr[i] = Math.round(Math.random()*100);
//     }
//     return arr;
// }
// console.log(foo([], 8));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let foo = (arr, length, limit)=>{
//     for (let i = 0; i < length; i++) {
//         arr[i] = Math.round(Math.random()*limit);
//     }
//     return arr;
// }
// console.log(foo([], 8,43));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arr = [1, 2 ,3];
// let foo = (arr) =>{
//     let index = 0;
//     let newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr[index] = arr[i];
//         index++;
//     }
//     return newArr;
// }
// console.log(foo(arr));

//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою

// let foo = (item1, item2)=>{
//     if(typeof item2 === 'undefined'){
//         return item1;
//     }else{
//         return item1 + ' ' + item2;
//     }
// }
// console.log(foo('hello'));


//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// let arr1 = [1,2,3,4];
// let arr2 = [2,3,4,5];
// let foo = (arr1, arr2) =>{
//     let newArr = [];
//     if(arr1.length === arr2.length){
//         for (let i = 0; i < arr1.length; i++) {
//             newArr[i] = arr1[i] + arr2[i];
//         }
//         return newArr;
//     } else{
//         return 'Error';
//     }
// }
// console.log(foo(arr1,arr2));


//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function foo(arr){
//     let newArr = [];
//     let index = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (const ArrKey in arr[i]) {
//             newArr[index] = ArrKey;
//             index++;
//         }
//     }
//     return newArr;
// }
// console.log(foo(arr));

//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function foo(arr){
//     let newArr = [];
//     let index = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (const ArrKey in arr[i]) {
//             newArr[index] = arr[i][ArrKey];
//             index++;
//         }
//     }
//     return newArr;
// }
// console.log(foo(arr));

// Дано натуральное число n. Выведите все числа от 1 до n.

// let foo = (n) =>{
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// foo(14);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let foo = (A, B) =>{
//     if(A < B){
//         for (let i = A; i <= B ; i++) {
//             console.log(i);
//         }
//     } else if(A > B){
//         for (let i = A; i >= B ; i--) {
//             console.log(i);
//         }
//     }
// }
// foo(10 , 5);

//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let foo = (arr, i) =>{
//     let num = arr[i];
//     arr[i] = arr [i + 1];
//     arr[i + 1] = num;
//     return arr;
// }
// console.log(foo([9,8,0,4], 1));

//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arr = [1,0,6,0,3];
// function foo(arr){
//     let zeroArr = [];
//     let index = 0;
//     let numArr = [];
//     let numIndex = 0;
//     let res = [];
//     let j = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === 0){
//             zeroArr[index] = arr[i];
//             index++;
//         }
//         if(arr[i] !== 0){
//             numArr[numIndex] = arr[i];
//             numIndex++;
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if(i < numArr.length){
//             res[i] = numArr[i];
//         } else{
//             res[i] = zeroArr[j];
//             j++;
//         }
//
//     }
//     return res;
// }
// console.log(foo(arr));


