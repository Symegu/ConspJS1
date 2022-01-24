2.1 - https://youtu.be/7oFxqoDQ-Tw
2.2 - https://youtu.be/KgffVAdLSoo
2.3 - https://youtu.be/JRF2zbyDotE
2.4 - https://youtu.be/IwWdRhh93CA
2.5 - https://youtu.be/cRTBa4G58Mc
2.6 - https://youtu.be/Hj5eBubSank

Основные операторы JS: 

Унарные (!)
Бинарные (+)
Тернарные (?:)
Логические (&&(и) ||(или, возвращает последнее правдивое значение))

Тернарный всегда можно заменить обычным if{} else{}
Не стоит вкладывать много if в else, просто использовать else if {}

== нестрогое сравнение, приведение типов
=== строгое сравнение, без приведения типов, предпочтительно

При большом количестве else if {}, используют switch (сравнивает значения через ===)

const good = ''
switch (good) {
    case '':
        console.log(''); // return .. ;
        break;           //
    default:
        console.log('');
}

Если нет break, будет выполять все остальные case и default;


Функции:

Когда обьявляем функцию function abc() {}, она создается до выполнения скрипта
Вызов функции - abc(), то есть когда вызываем функцию - переходим в нее, выполняем и возвращаемся (можно вызывать функцию до ее объявления)
Функции могут возвращать 1 значение сами(prompt) или с помощью return, завершающее функцию(после него ничего не выполняется)

JS ищет переменные сначала в самой функции, затем в скрипте и в глобальном, поэтому не очень хорошо использовать внешние переменные (за редким исключением)
Переменнные, существующие внутри функции, существуют только там
function abc(параметр функции), abc (аргумент) => аргумент передаем в параметр функции
Мы передаем не переменную(аргумент), а ее значение (делаем копию значения и кладем в параметр функции)

Функции стараемся называть с глаголов, а переменные с существительных

function a() {} //function declaration (можно вызвать в любом месте)
const a = function() {}; //function expression (можно вызвать только после использования/объявления)

Стрелочные функции (появились в ES6)
const a = () => {}

Значения по умолчанию(ES6):
function a(num = 123) {} // используются если не передаем значения при вызове
function sayNum(num) {
    num = num || 100;    //в старом коде
}


Встроенная документация пример: 
/** 
 * Функция складывает 2 числа
 * @param {number} num1 пояснение для параметра num1
 * @param {number} num2 пояснение для параметра num2
 * @returns {number} пояснение для возвращаемого значения
*/
function sum(num1, num2) {
    return num1 + num2;
}

let result = sum (2,4);
alert(result)

... Доп материал -Настраиваемые свойства объектов.

Свойства объектам можно устанавливать напрямую, например:

const obj = {};
obj.myProp = 5; // установили свойство
console.log(obj.myProp); // вывели 5 из свойства.


Можно менять свойство и его поведение/детали используя метод у глобального объекта Object - метод Object.defineProperty(),
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
Определяет новое или изменяет существующее свойство непосредственно на объекте, возвращая этот объект

Также свойство в можно настроить:

value - установка значения свойства (число, объект, функция и т.д), значение по умолчанию установлено в undefined
configurable - Контролирует, может ли свойство быть удалено из объекта и могут ли быть измененыего атрибуты (кроме контроля изменения атрибута writable).

const obj = {};

Object.defineProperty(obj, 'myProp', {
value: "Привет",
configurable: false
});

Object.defineProperty(obj, 'myProp', { configurable: true });
Object.defineProperty(obj, 'myProp', { enumerable: true });

console.log(obj.myProp);
delete obj.myProp;
console.log(obj.myProp);


Если мы свойству поставили бы writable:true, то мы могли бы поменять это свойство.
enumerable - Можно ли увидеть через перечисление (for...in, Object.keys()).

const obj = {};
Object.defineProperty(obj, 'myProp1', {
value: 1,
enumerable: true,
});

Object.defineProperty(obj, 'myProp2', {
value: 2,
enumerable: false,
});

for (const prop in obj) {
console.log(prop);
}


writable - можно ли менять значение, записать новое.


const obj = {};
Object.defineProperty(obj, 'myProp', {
value: "Привет",
writable: false,
});

console.log(obj.myProp);
obj.myProp = "Пока";


get - геттер, т.е. функция, которая вернет значение, когда мы это свойство спросим
set - сеттер, т.е. функция, которая поставит значение свойству.

const obj = {};
let values = ["Привет"];
let getCount = 0;

Object.defineProperty(obj, 'myProp', {
get() {
console.log(`Количество запросов включая этот: ${++getCount}`);
return values[values.length - 1];
},

set(newValue) {
values.push(newValue);
console.log(`Все значения которые были установлены включая новое: ${values.join(', ')}`);
}
});

На практике очень редко применяется


также объекты иногда необходимо бывает сделать так, чтобы в них невозможно было записать новые свойства или изменить/удалить значения, которые уже есть
3 метода у глобального объекта Object:

Создание Чтение Редактирование Удаление

Object.freeze ✗ ✓ ✗ ✗
Object.seal ✗ ✓ ✓ ✗
Object.preventExtensions ✗ ✓ ✓ ✓

Обратных действий, например разморозить объект нет.
https://github.com/piecioshka/test-freeze-vs-seal-vs-preventExtensions

