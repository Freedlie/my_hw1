// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString = (str, n) =>{
//    let arr = str.split('');
//    let newArr = [];
//    let k = 0;
//     for (let i = 0; i < 4; i++) {
//         newArr[i] = str.slice(0 + k, n + k);
//         k += 3;
//     }
//
//     return newArr;
// }
// console.log(cutString('насолодження', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) =>{
//     let arr = str.split(' ');
//     for (const arrElement of arr) {
//         if(arrElement.length === 7){
//             return arrElement;
//         }
//     }
// }
// console.log(delete_characters(str, 7));

//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let insert_dash = (str) =>{
//        return str.toUpperCase().replaceAll(' ', '-');
// }
// console.log(insert_dash(str));

//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = 'hello';
// let foo = (str) => {
//     let ch = str[0].toUpperCase();
//     return str.replace(str[0], ch);
// }
// console.log(foo(str));

//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
// let foo = (str) =>{
//     if(str.includes('..')){
//         return str.replace('..', ' ');
//     } else if(str.includes('---')){
//         return str.replace('---', ' ');
//     } else if(str.includes('__')){
//         return str.replace('__', ' ');
//     }
// }
// console.log(foo(n3));


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let arr = [];
// let foo = (arr, n) =>{
//     for (let i = 0; i < n; i++) {
//         arr[i] = Math.round(Math.random()*100);
//     }
//     return arr;
// }
// console.log(foo(arr, 10));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let arr = [];
// let foo = (arr, n) =>{
//     for (let i = 0; i < n; i++) {
//         arr[i] = Math.round(Math.random()*100);
//     }
//     arr.sort((a , b)=>{
//         return a - b;
//     })
//     return arr;
// }
// console.log(foo(arr, 10));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

// let arr = [];
// let foo = (arr, n) =>{
//     for (let i = 0; i < n; i++) {
//         arr[i] = Math.round(Math.random()*100);
//     }
//     return arr;
// }
// console.log(foo(arr, 10));
// console.log(arr.filter((value, index) => {
//     return value % 2 === 0;
// }));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let capitalize = str => str.replace(str[0], str[0].toUpperCase());
// console.log(capitalize('hello'));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// let str = 'someeMAIL@i.ua';
// let foo = (str) =>{
//     let LowerCaseStr = str.toLowerCase();
//     if(LowerCaseStr.indexOf('@') >= 1){
//         console.log('дані до @ присутні');
//     } else{
//         console.log('дані до @ відсутні');
//     }
//     if(LowerCaseStr.includes('@')){
//         console.log('@ присутній');
//     } else{
//         console.log('@ відсутній');
//     }
//     if(LowerCaseStr.indexOf('.') > LowerCaseStr.indexOf('@') + 2){
//         console.log('крапка знаходиться не меньше ніж на 2 символ далі після равлика');
//     } else{
//         console.log('крапка знаходиться меньше ніж на 2 символ далі після равлика');
//     }
// };
// foo(str);

//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масивlet coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//

//  let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// console.log(coursesArray.sort((a, b) => {
//     return b.modules.length - a.modules.length;
// }));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// let symb = "о";
// let str = "Астрономия это наука о небесных объектах";
// let count = (str, stringsearch) =>{
//     let newStr = str.split('');
//     return newStr.filter(value => value === stringsearch).length;
// }
// console.log(count(str, symb));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let str = "Сила тяжести приложена к центру масс тела";
// let cutString = (str, n) =>{
//     let arrStr = str.split(' ');
//     arrStr.length = n;
//     return arrStr;
// }
// console.log(cutString(str, 5));
// //

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

// let books = [
//     {
//         authors : ['ivan'],
//         title: 'kaydashevs family',
//         pageCount: 90,
//         genre: ['comedy' , 'roman']
//     },
//     {
//         authors : ['Valerian'],
//         title: 'town',
//         pageCount: 80,
//         genre: ['adventures']
//     },
//     {
//         authors : ['ivan','Dante'],
//         title: 'divine comedy',
//         pageCount: 140,
//         genre: ['epic']
//     }
// ];

// -знайти наібльшу книжку.

// let foo = (arr)=>{
//     let count = arr[0].pageCount;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].pageCount > count){
//             count = arr[i].pageCount;
//         }
//     }
//     return arr.find(value => value.pageCount === count);
// }
// console.log(foo(books));

// - знайти книжку/ки з найбільшою кількістю жанрів

// let foo = (arr)=>{
//     let count = arr[0].genre.length;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].genre.length > count){
//             count = arr[i].genre.length;
//         }
//     }
//     return arr.find(value => value.genre.length === count);
// }
// console.log(foo(books));

// - знайти книжку/ки з найдовшою назвою

// let foo = (arr) =>{
//     let str = arr[0].title.length;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[0].title.length > str){
//             str = arr[0].title.length;
//         }
//     }
//     return arr.find(value => value.title.length === str);
// }
// console.log(foo(books));

// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

// console.log(books.reduce((accumulator, book) => {
//     switch (book.authors.length) {
//         case 1:
//             accumulator.oneAuthor.push(book);
//             break;
//         case 2:
//             accumulator.twoAuthors.push(book);
//             break;
//     }
//     return accumulator;
// }, {
//     oneAuthor: [],
//     twoAuthors: []
// }));

// - вісортувати книжки по кількості сторінок по зростанню

// console.log(books.sort((a, b) => a.pageCount - b.pageCount));






