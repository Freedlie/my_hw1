// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
    let arr = [];
    for(let i = 0; i <= 9; i++){
        arr[i] = i * 2;
        console.log(`arr[${i}] = ${arr[i]}`);
    }
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
        title: 'kaydashevs family',
        pageCount: 90,
        genre: 'comedy'
}
let book2 = {
    title: 'town',
    pageCount: 80,
    genre: 'adventures'
}
let book3 = {
    title: 'divine comedy',
    pageCount: 140,
    genre: 'epic'
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
book1.authors = ['Ivan ', 55];
book2.authors = ['Valerian ', 43];
book3.authors = ['Dante ', 49];
console.log(book1);
console.log(book2);
console.log(book3);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let userArr = [
    user1 = {
        name: 'Maksym',
        username: 'gtefds',
        password: 'er53fd'
    },
    user2 = {
        name: 'Vasya',
        username: '6tfdbfgf',
        password: '435465ytg'
    },
    user3 = {
        name: 'Andrew',
        username: 'gfdhty4',
        password: '485utj'
    },
    user4 = {
        name: 'Alex',
        username: 'fdhgdjf8',
        password: 'sdo93'
    },
    user5 = {
        name: 'Anya',
        username: '534rdkw',
        password: 'dlo3i4'
    },
    user6 = {
        name: 'Grisha',
        username: 'ffird9',
        password: 'dkfd21'
    },
    user7 = {
        name: 'Sasha',
        username: 'o9ed1szd',
        password: 'dldo8e1'
    },
    user8 = {
        name: 'Mark',
        username: 'fksiew81',
        password: 'dsl39krfc'
    },
    user9 = {
        name: 'Alina',
        username: 'dsfskljv9',
        password: 'dsleo2w'
    },
    user10 = {
        name: 'Misha',
        username: 're923esd',
        password: 'fdloew92'
    }
]
for(let i = 0; i <= 9; i++){
    console.log(`user${i+1} password: ${userArr[i].password}`);
}