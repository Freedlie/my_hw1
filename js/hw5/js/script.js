// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let foo = (a,b) => a * b;
// console.log(foo(5,10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let foo = (r) => r**2;
// console.log(foo(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let foo = (h, r) =>{
//     let s1 = 2 * 3.14 * h * r;
//     let s2 = 2 * 3.14 * r**2;
//     let s = s1 + s2;
//     return s;
// }
// console.log(foo(4,5));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let foo = (arr) =>{
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// foo([4, 6, 3, 2, 1, 9]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let foo = (word1, word2, word3) =>{
//     document.write(`<p>${word1} ${word2} ${word3}</p>`);
// }
// foo('hello','okten','!!!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function foo(li){
//     document.write(`<ul>
// <li>${li}</li>
// <li>${li}</li>
// <li>${li}</li>
// </ul>`)
// }
// foo('text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let foo = (text, num) =>{
//     document.write(`<ul>`);
//     for(let i = 1; i <= num; i++){
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// foo('text',6);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [true, 'name', 42, false, 32, 'text'];
// function foo(arr){
//     document.write(`<ul>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`);
//     }
//     document.write(`</ul>`);
// }
// foo(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arr = [
//     {
//         id:1,
//         name: 'vasya',
//         age: 98
//     },
//     {
//         id:2,
//         name: 'alex',
//         age: 33
//     },
//     {
//         id:3,
//         name: 'masha',
//         age: 22
//     }
// ];
// let foo = (arr) =>{
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<div>`);
//         for (const arrKey in arr[i]) {
//             document.write(`${arrKey}: `);
//             document.write(`${arr[i][arrKey]}  |  `);
//         }
//         document.write(`</div>`);
//     }
// }
// foo(arr);

// - створити функцію яка повертає найменьше число з масиву

// let arr = [4, 6, 3, 5, 66, 22];
// let foo = (arr) =>{
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(min > arr[i]){
//             min = arr[i];
//         }
//     }
//     return min;
// }
// console.log(foo(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [4, 6, 3, 5, 66, 22];
// let foo = (arr) =>{
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(foo(arr));
