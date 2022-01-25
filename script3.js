Циклы, массивы, структуры данных (простые объекты): 

Цикл:
let i=0;
while (i<3) {
    console.log('hi' + i);
    i++
}
Одна провежка по условию и выполнение цикла - итерация цикла(повторение)

3 цикла - while () {} [сначала проверка, потом выполнение]; do {} while() [сначала выполнение, потом проверка надо ли сделать еще]; 
for (первая итерация без условия, обычно создание переменной[1]; само условие[2]; выражение шага, что сделать после каждой итерации[4]){[3]};
break прерывает цикл
continue завершает итерацию

Массив:
Коллекция зачастую однотипных данных:
Array[1,2,3];
Получаем информацию из массива с помощью индексов, индекс ячеек массива начинается с 0

Обьект - ассоциативный массив - 
const user = {    // в константе лежит ссылка на объект, а не его содержимое, поэтому {}!={} и []!=[]
    name: 'user',
    age: 1,
};
Получаем информацию из объекта user.name (пприоритетно), но можно и как у массива

Перебор массива и объекта:
const arr = [1,2,3];
const user = {
    name: 'user',
    id: 1,
    images: [
        "1.jpg",
        "2.jpg"
    ],
};

for (let i=0; i<3; i++) {
    console.log(arr[val]);
}

for (let i = 0; i < user.images.length; i++) {
    console.log(user.images[i]);
}

for (const i in user.images) {   // перебирает ключи индексов массива
    console.log(user.images[i]);
}

for (const i in user) {  // перебирает ключи индексов объекта
    console.log(user[i]);
}

for (const val of user.images) {   //получаем значения, лежащие в индексах массива (и объекта если задан Symbol.iterator function(){})
    console.log(val);
}

Методов массива много, все описано на MDN,
метод Array.prototype.forEach:

images.forEach(function (image) {    //forEach не цикл, а функция, поэтому break и continue не работает
    console.log(image);
})

images.forEach(image => console.log(image)); //перебор через стрелочную функцию

метод Array.prototype.includes(item, from)  – ищет item, начиная с индекса from, и возвращает true, если поиск успешен ( методы используют строгое сравнение ===)
let arr = [1, 0, false];
alert( arr.includes(1) ); // true

метод Array.prototype.map(function(item, index, array){}); - вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

метод Array.prototype.filter(function(item, index, array){}
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];// возвращает массив, состоящий из двух первых пользователей
  let someUsers = users.filter(item => item.id < 3);
  alert(someUsers.length); // 2

метод Array.prototype.push(...items) - добавляет элементы в конец 

метод Array.prototype.pop() - извлекает элемент из конца

метод Array.prototype.shift() - извлекает элемент из начала

метод Array.prototype.unshift(...items) - добавляет элемент в начало

метод Array.prototype.splice(index[, deleteCount, elem1, ..., elemN])
Начинает с позиции index, удаляет deleteCount элементов и вставляет elem1, ..., elemN на их место. Возвращает массив из удалённых элементов.
let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"]; // удалить 3 первых элемента и заменить их другими
arr.splice(0, 3, "Давай", "танцевать");
alert( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]

метод Array.prototype.slice([start], [end])
возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая end). Оба индекса start и end могут быть отрицательными(будет осуществляться с конца массива)

let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)
alert( arr.slice(-2) ); // s,t (копирует с -2 до конца

метод Array.prototype.sort() - сортирует массив на месте(модифицирует исходный массив), меняя в нём порядок элементов (по умолчанию - как в unicode)
Если функция сравнения compareFunction предоставлена, элементы массива сортируются в соответствии с её возвращаемым значением. Если сравниваются два элемента a и b, то:

Если compareFunction(a, b) меньше 0, сортировка поставит a по меньшему индексу, чем b, то есть, a идёт первым.
Если compareFunction(a, b) вернёт 0, сортировка оставит a и b неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам
Если compareFunction(a, b) больше 0, сортировка поставит b по меньшему индексу, чем a.
Функция compareFunction(a, b) должна всегда возвращать одинаковое значение для определённой пары элементов a и b. 

function compare(a, b) {
    if (a < b ) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }

метод Array.prototype.reduce() - используются для вычисления какого-нибудь единого значения на основе всего массива
let value = arr.reduce(function(previousValue, item, index, array) {}, [initial]);
Функция применяется по очереди ко всем элементам массива и «переносит» свой результат на следующий вызов
Аргументы:

previousValue – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial),
item – очередной элемент массива,
index – его индекс,
array – сам массив.

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15

Прототипы получаем с помощь arr.__proto__ и console.log(Object.getPrototypeOf(arr))
Прототип определяет свойства и методы обьекта