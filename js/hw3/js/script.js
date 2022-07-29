// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
let x = 77;
if(typeof x === 'number'){
    if(x !== 0) {
        console.log('Вірно');
    } else{
        console.log('Невірно');
    }
} else{
    console.log('you have entered string');
}




// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

 let time = 34;
if(time >= 0 && time < 15){
    console.log('Перша чверть');
} else if(time >= 15  && time < 30){
    console.log('Друга чверть');
}else if(time >= 30  && time < 45) {
    console.log('Третя чверть');
}else if(time >= 45  && time < 60){
    console.log('Четверта чверть');
} else{
    console.log('Error');
}



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
let day= 30;
if(day > 0 && day < 10){
    console.log('Перша декада');
} else if(day > 10 && day < 20){
    console.log('Друга декада');
} else if(day > 20 && day <= 31){
    console.log('Третя декада');
} else{
    console.log('error');
}




// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
let num = +prompt("enter a number from 1 to 7");
switch (num){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Error');
}




//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//

let firstNum = +prompt('enter smth number');
let SecondNum = +prompt('enter smth number');
if(firstNum > SecondNum){
    console.log('Перше число більше за друге');
} else if(SecondNum > firstNum){
    console.log('Друге число більше за перше');
} else if(SecondNum === firstNum){
    console.log('числа рівні');
} else{
    console.log('Error');
}


    // - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    //     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let x1;
let message = prompt('enter smth');
if(message === '0'){
    x1 = 'default';
} else{
    x1 = x1 || 'default';
}
console.log(x1);

// Не знаю чи правильно я зрозумів останнє завдання

