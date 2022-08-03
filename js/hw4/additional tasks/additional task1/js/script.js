// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//

// let arr = [];
// for(let i = 0; i < 15; i++){
//     if(i >= 0 && i <=4){
//         arr[i] = i + 1;
//     } else if(i >= 5 && i <=9){
//         arr[i] = `string${i - 4}`;
//     } else if(i >= 10 && i <= 14){
//         if(i % 2 === 1){
//             arr[i] = true;
//         } else{
//             arr[i] = false;
//         }
//     }
// }
// console.log(arr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
//

// let arr = [];
// arr[0] = true;
// arr[1] = 'string';
// arr[2] = 43;
// console.log(arr);

//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// console.log('TASK1:');// ------------1---------------
// let i = 0;
// while(i < arr.length){
//     console.log(arr[i]);
//     i++;
// }
// console.log('TASK2:')// -------------------- 2 ----------------
// for(let i =0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// console.log('TASK3:')// -------------------- 3 ----------------
// let j=0;
// while(j < arr.length){
//     if(arr[j] % 2 === 1){
//         console.log(arr[j]);
//     }
//     j++;
// }
// console.log('TASK4:')// -------------------- 4 ----------------
// for(let i =0; i < arr.length; i++){
//     if(i % 2 === 1){
//         console.log(arr[i]);
//     }
// }
// console.log('TASK5:')// -------------------- 5 ----------------
// let k = 0;
// while(k < arr.length){
//     if(arr[k] % 2 === 0){
//         console.log(arr[k]);
//     }
//     k++;
// }
// console.log('TASK6:')// -------------------- 6 ----------------
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//         console.log(arr[i]);
//     }
// }
// console.log('TASK7:')// -------------------- 7 ----------------
// for(let i = 0; i< arr.length; i++){
//     if(arr[i] % 3 === 0){
//         arr[i] = 'okten';
//     }
// }
// console.log(arr);
// console.log('TASK8:')// -------------------- 8 ----------------
// for(let i = arr.length - 1; i >= 0; i--){
//     console.log(arr[i]);
// }
// console.log('TASK9:')// -------------------- 9 ----------------
// let a = arr.length - 1;
// while(a >= 0){
//     console.log(arr[a]);
//     a--;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// for(let i = 0; i < 10; i++){
//     arr[i] = i + 1;
//     console.log(arr[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// for(let i = 0; i < 10; i++){
//     arr[i] = i + '';
//     console.log(arr[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// for(let i = 0; i < 10; i++){
//     if(i % 3 === 0){
//         arr[i] = i;
//     } else if(i % 3 === 1){
//         arr[i] = i + '';
//     } else{
//         arr[i] = !!i;
//     }
//     console.log(arr[i]);
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = [];
// for(let i = 0; i < 10; i++){
//     if(i % 3 === 0){
//         arr[i] = i;
//     } else if(i % 3 === 1){
//         arr[i] = i + '';
//     } else{
//         arr[i] = !!i;
//     }
//     if(typeof arr[i] === 'boolean'){
//         console.log(`arr[${i}] = ${arr[i]}`);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = [];
// for(let i = 0; i < 10; i++){
//     if(i % 3 === 0){
//         arr[i] = i;
//     } else if(i % 3 === 1){
//         arr[i] = i + '';
//     } else{
//         arr[i] = !!i;
//     }
//     if(typeof arr[i] === 'number'){
//         console.log(`arr[${i}] = ${arr[i]}`);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = [];
// for(let i = 0; i < 10; i++){
//     if(i % 3 === 0){
//         arr[i] = i;
//     } else if(i % 3 === 1){
//         arr[i] = i + '';
//     } else{
//         arr[i] = !!i;
//     }
//     if(typeof arr[i] === 'string'){
//         console.log(`arr[${i}] = ${arr[i]}`);
//     }
// }

//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr[0] = 1;
// arr[1] = '2';
// arr[2] = 'sfgdterfd';
// arr[3] = 4422;
// arr[4] = {
//     name: 'vasya',
//     age: 44
// }
// arr[5] = true;
// arr[6] = false;
// arr[7] = 222;
// arr[8] = '222';
// arr[9] = true;
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// let arr = [];
// for(let i = 1; i < 11; i++){
//     console.log(`number of step:${i}`);
//     document.write(`<p>number of step:${i}</p>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// let arr = [];
// for(let i = 1; i < 101; i++){
//     console.log(`number of step:${i}`);
//     document.write(`<p>number of step:${i}</p>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// let arr = [];
// for(let i = 2; i < 201; i += 2){
//     console.log(`number of step:${i / 2}`);
//     document.write(`<p>number of step:${i / 2}</p>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// let arr = [];
// for(let i = 1; i < 101; i++){
//     if(i % 2 === 0){
//         console.log(`number of step:${i}`);
//         document.write(`<p>number of step:${i}</p>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// let arr = [];
// for(let i = 1; i < 101; i++){
//     if(i % 2 === 1){
//         console.log(`number of step:${i}`);
//         document.write(`<p>number of step:${i}</p>`);
//     }
// }

//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

// let books = [
//     {
//         title: 'kaydashevs family',
//         pageCount: 90,
//         genre: 'comedy',
//         name: 'Ivan'
//     },
//     {
//         title: 'town',
//         pageCount: 80,
//         genre: 'adventures',
//         name: 'Valerian'
//     },
//     {
//         title: 'divine comedy',
//         pageCount: 140,
//         genre: 'epic',
//         name: 'Dante'
//     }
// ];
// let count = 0;
// for(let book of books){
//     if(count <= book.pageCount){
//         count = book.pageCount;
//     }
// }
// for(let book of books) {
//     if (count === book.pageCount) {
//         console.log(`the biggest book is: ${book.title}`);
//     }
// }
// // не знаю як знайти книжку з найбільшою кількістю жанрів
// let length = 0;
// for(let book of books){
//     if(length <= book.title.length){
//         length = book.title.length;
//     }
// }
// for(let book of books){
//     if(length === book.title.length){
//         console.log(`the longest title of book is: ${book.title}`);
//     }
// }
// // останні два пункта також не знаю як робити (якшо не важко то поясніть)