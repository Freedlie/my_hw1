
// /зробити рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let arrayOfClasses = [];
function foo(element) {
    if(element.className){
        for (const elementOfClass of element.className.split(' ')) {
            arrayOfClasses.push(elementOfClass);
        }
    } else{
        for (const children of element.children) {
            foo(children);
        }
    }
}
foo(document.body);
console.log(arrayOfClasses);



