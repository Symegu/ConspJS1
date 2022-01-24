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

метод Array.prototype.includes:

метод Array.prototype.map:

метод Array.prototype.push:

метод Array.prototype.pop:

метод Array.prototype.shift:

метод Array.prototype.unshift:

метод Array.prototype.splice:

метод Array.prototype.slice:

метод Array.prototype.sort:

метод Array.prototype.reduce: