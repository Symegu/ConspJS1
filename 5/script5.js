DOM - document object model - программный интерфейс для XMLDocument HTMLDocument, некий api, набор готовых функций, обьектов, классов, с которыми мы можем производить действия
DOM формируется при чтении браузером HTMLDocument, видит каждый тег - создает для него объект

console.log(window) - хранятся все функции DOM (глобальный объект window, отвечающий за страницу браузера)
console.dir(document) - выводит в консоль объект, созданный нашим браузером после чтения документа, можно увидеть разницу между написанным в реальности и тем, что построил браузер для js, чтобы мы могли управлять страницей

Поиск на странице:
//устаревшее, получаем HTMLCollection
document.getElementById() - выводит обьект по ID
document.getElementsByClassName() - выводит псевдомассив элементов по названиб класса
document.getElementsByTagName() - выводит жлементы по названию тэга
//современное, получаем NodeList
document.querySelector() - возвращет первый попавший элемент по названию селектора (надо писать почти как в css, но в кавычках, в виде строки ('.test-class'), можно писать многие селекторы как в css ('.test-class:last-child'), если нужно искать по id  - ('#test-id'))
document.querySelectorAll() - возвращает все элементы заданного селектора (('p:nth-child(2n)') выдаст каждый второй элемент с тегом <p>)

Переборка Nodelist:
const pTags = document.querySelectorAll('p');
for (let i = 0; i < pTags.length; i++){
    console.log(pTags[i]);
}

for (const tag of pTags) {
    console.log(tag);
}

Некоторые объекты документа не обязательно искать через querySelector:
document.body
document.title  //текст в title
document.forms  
document.head
document.images  //все картинки
document.link  //все ссылки
document.documentElement //html


Element - объект, который отвечает за тэг
Node - узел, тэг, текст, перенос строки
Каждый element это node, но не каждый node это element

const divEl = document.querySelector('.test-class:last-child');
console.log(divEl)
const childElements = divEl.children; //смотрим все дочерние элементы - тэги p
const childNodes = divEl.childNodes;
console.log(childElements); //2 <p>
console.log(childNodes); //5 text(перенос строки после дива) <p> text(перенос между тегами) <p> text(перенос до закрытия дива)

querySelectorAll - статическая коллекция
childNodes children - динамические



Взаимодействие с элементами через js

.innerText //покажет то, что видит пользователь, можем ставить текст
.textContent //покажет весь текст, можем ставить текст, не парсит html
.innerHTML //показывает весь текст, но можем с помощью него поставить еще и HTML внутрь тэга

const h2El = document.createElement('h2');  //создаем объект с тэгом <h2>
h2El.textContent = 'Текст в заголовке'; //кладем внутрь тэга текст
divEl.appendChild(h2El); //помещаем объект в конец дива, не копируется а переносится

divEl.insertAdjacentHTML("место","<p></p>"); //вставляет html относительно тэга 
divEl.insertAdjacentElement("место","<p></p>"); //вставляет элемент
<body>
  //beforebegin
    <div>
  //afterbegin
        тест
  //beforeend
    </div>
  //afterend
</body>

append  //стаивт в конец node
prepend  //ставит в начало node
before  //после node
after  //до  node

h2ElClone = h2El.cloneNode();  //скопирует тэг
h2ElClone = h2El.cloneNode(true);  //скопирует и тэг и его содержимое, глубокое клонирование


//устарело
divEl.parentElement.removeChild(divEl) //ищем див, переходим к его родителюи удаляем див
//современно
divEl.remove();

Работа с классами(лучше не менять css напрямую из js, лучше добавлять или кбирать нужные классы, которые будут прописаны в css)

.className - показывает что написано в классе элемента
.classList - объект со списком классов
.classList.add/remove/toggle ('') - добавить, убрать, если есть - удалить, если нету добавить 
.id =  - меняет id
.getAttribute('') - получаем атрибут
.setAttribute('', ) - ставим атрибут
.dataset - объект с атрибутами

События // их ооооочень много, поэтому стоит смотреть на MDN

.addEventListener('click/hover/mouseover/keydown/keyup/keypress и т.д.', () => ); 
.removeEventListener('', ());
event.targer - целевой элемент 
event.currentTarget - элемент на который повешен слушатель события
event.stopPropogation() - останавливает всплытие наследуемых событий //лучше не использовать
event.stopImmediatePropogation() - останавливает все всплытия //лучше не использовать


Валидация формы

button.addEventListener('click', function(){
    if (!/\d/.test(input.value)) {     //  /\d/ - регулярное выражение digital (цифра), test - метод проверки, если не цифра введена в инпут
        div.style.display = 'block';
    }
    else{
        div.style.display = 'none';
    }
});

//в допах много примеров event 