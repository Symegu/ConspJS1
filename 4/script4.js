Объекты и прототипы: 

В js наследование свойств и методов прототипное
У объектов в js могут быть прототипы, прототипом является или объект или null
Прототипы нужны чтобы расширять объект, свойства могут хранить все что угодно

const obj = {
    a: 1,
    __proto__: {
        b: 2,
        c: 3,
        __proto__: {
            z: 4,
            __proto__: null
        }
    }
}

obj.a //1
obj.b //2
obj.z //4
obj.asd //undefined

Object, Number, {}, Array, new Object() - функции конструкторы, создающие объект по прототипу, задавая ему свойсва и методы прототипа

Прототип получаем с помощью  ({}).__proto__ , Object.getPrototypeOf({})

Можно создать объектчсо своими свойствами прототипа/конструктора или без них
Object.create(null) //no properties


const myCar= {
    model: 'BMW',
    beep: function(){     // является методом объекта(старая запись)    
        console.log('Машина подает сигнал')
    },
    beeeep(){
        console.log('Машина подает 2 сигнал')  //новая запись
    },
};

myCar.beep(); 

this - объект, в котором находится метод, контекст

Функции конструкторы - создают объекты по заданным свойствам
function beep(){
    console.log(`${this.model} подает сигнал`)
}

function Car(model){
    //this = {};
    //this.__proto__ = Car.prototype;
    this.model = model;
    //this.beep = beep;  //скобки не ставим, нужна сама функция а не ее результат(но стоит засовывать прототип)
    //return this;
}

Car.constructor = Car; //true, можно не прописывать
Car.prototype.wheels = 4;
Car.prototype.beep = function(){
    console.log(`${this.model} подает сигнал`);
}
/*Car.prototype = {
    wheels: 4,
    beeeep(){
        console.log(`${this.model} подает сигнал`);  //новая запись, но можно сделать короче
    },
}**/

const car1 = new Car('BMW') //создается объект Car со свойством model = 'BMW'
console.log(car1.__proto__ === Car.prototype); // true

console.log(new car1.constructor('Mercedes'));

В прототип кладутся все общие методы объектов, а так же общие свойства, чтобы не создавать одно и то же свойство для каждого нового объекта и не засорять оперативку

Заимствование функций:

function superBeep(num){
    console.log(`${this.model} подает громкий сигнал ${num} раз`);
}

superBeep.call(car1, 5); //подменяет this внутри функции, сначала передает контекст, затем аргументы





function Person(name,  gender) {
    this.name = name;
    this.gender = gender;
}

Person.prototype.sayName = function(){
    console.log(`Меня зовут ${this.name}`)
}

const person1 = new Person('Alla', f)




function Employee(name, gender, position){
    this.name = name;
    this.gender = gender;
    this.position = position;
}

Employee.prototype.sayName = function(){
    console.log(`Меня зовут ${this.name}`);
}

Employee.prototype.sayPosition = function(){
    console.log(`Я ${this.position}`);
}

const employee1 = new Employee('John', m, 'director')

Плохо, что дублируется код для человека и для рабочего -->>







function Person(name,  gender) {
    this.name = name;
    this.gender = gender;
}

Person.prototype.sayName = function(){
    console.log(`Меня зовут ${this.name}`)
}

const person1 = new Person('Alla', f)

function Employee(name, gender, position){
    //this.__proto__ = Employee.prototypr;
    Person.call(this, name, gender);  //вызывает функцию Person, чтобы она заполнила name gender, но с this, относящимся к employee(в Person this(person) меняется на this(employee))
    this.position = position;
}

Employee.prototype.sayName = function(){
    console.log(`Меня зовут ${this.name}`);
}

Employee.prototype.sayPosition = function(){
    console.log(`Я ${this.position}`);
}



Если Employee.prototype = Person.prototype;
То мы создаем объект Employee у которого будет прототип Person, то у Person тоже будет метод sayPosition, потому что 
Cначала прототип Person имеет только sayName, затем этот прототип становится прототипом Employee, где добавляется sayPosition и принимает его в себя
Получается структура 

name,
gender,
position,
__proro__: {
    sayPosition();
    sayName()
    __proto__: {
    }
}

В строке Employee.prototype = Person.prototype   нужно создать новый объект, который будет прототипом Employee, но у этого объекта будет прототип Person ->
Employee.prototype = Object.create(Person.prototype) //Создает объект с прототипом Person

name,
gender,
position,
__proro__: { //Object.create(Person.prototype)
    sayPosition()
    __proto__: {  //Person.prototype
        sayName()
    }
}

