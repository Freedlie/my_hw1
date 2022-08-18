// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }

// class User{
//     constructor(name, username, email,phone,website,street, suite, city, zipcode,lng, lat,nameOfCompany,catchPhrase,bs) {
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.phone = phone;
//         this.website = website;
//         this.address = {
//             street,
//             suite,
//             city,
//             zipcode,
//         }
//         this.address.geo =  {
//             lng,
//             lat
//         }
//         this.company ={
//             nameOfCompany,
//             catchPhrase,
//             bs
//         }
//     }
// }
//
// let user =  new User('Leanne Graham','Bret','Sincere@april.biz','1-770-736-8031 x56442', 'hildegard.org',
//     'Kulas Light','Apt. 556','Gwenborough', '92998-3874','-37.3159','81.1496',
//     'Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets');
// console.log(user);

//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


// let Tegs = function (titleOfTag, action , a1, b1, a2 , b2){
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs =[
//         {
//             titleOfAttr : a1,
//             actionOfAttr : b1
//         },
//         {
//             titleOfAttr: a2,
//             actionOfAttr: b2
//         },
//     ];
// }
//
// let arr = [
//     new Tegs('a' , 'використовується для вставки силок', 'href',
//         'указывает ссылку на веб-страницу либо определяет место на той же веб-странице, куда пользователь перейдет после нажатия на ссылку',
//         'target', 'Атрибут target указывает браузеру, в каком окне открывать документ'),
//     new Tegs('div' , ' является универсальным контейнером для потокового контента',
//         'align', 'Визначає вирівнювання вмісту всередині div елемента.',
//         'class', 'дозволяє стилізувати div через назву класа'),
//     new Tegs('span' , ' является основным строковым контейнером для фразового контента',
//         'contenteditable', 'указывает нужно ли предоставить пользователю возможность редактировать элемент',
//         'class', 'дозволяє стилізувати div через назву класа')
// ];
// console.log(arr);