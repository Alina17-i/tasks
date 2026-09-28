class PiggyBank{
    #balance = 0;
     put(amount){
        if(amount <= 0){
            console.log('Некорректная сумма');
            return;
        }
        this.#balance += amount;
     }
     take(amount){
        if(amount > this.#balance){
            console.log('Недостаточно средств');
            return;
        }
        this.#balance -= amount;
     }
     getBalance(){
       return this.#balance
     }
}

const myPiggyBank = new PiggyBank;
myPiggyBank.put(100);
myPiggyBank.put(50);
myPiggyBank.take(30);
console.log(myPiggyBank.getBalance());
myPiggyBank.put(1000);
myPiggyBank.take(-5);
console.log(myPiggyBank.getBalance());

class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(this.name + ' издаёт звук');
    }
}

class Cat extends Animal{
    speak(){
        console.log(this.name + ' говорит:мяу');
    }
}

class Dog extends Animal{
    speak(){
        console.log(this.name + ' говорит:гав');
    }
    fetch(){
        console.log(this.name + ' принёс палку')
    }
}

const myAnimal = new Animal('Лев');
const cat1 = new Cat('Барсик');
const cat2 = new Cat('Мурзик');
const dog1 = new Dog('Шарик');
const animals = [myAnimal, cat1, cat2, dog1];

for (const animal of animals) {
  animal.speak();
}
dog1.fetch();


class Task{
    constructor(title,done){
         this.title = title
         this.done = false
    }
    complete(){
        this.done = true
    }
     toString(){
        let st = ' ';
        if(this.done){
            st = 'x';
        }
        return '[' + st + ']' + this.title
     }
}

class TodoList{
    constructor(tasks){
        this.tasks = []
    }
    add(title){
        this.tasks.push(new Task(title));
    }
    complete(index){
        if(this.tasks[index] !== undefined){
            this.tasks[index].complete()
        }
    }
     print() {
        for (let i = 0; i < this.tasks.length; i++) {
            console.log(this.tasks[i].toString());
        }
    }
    countDone() {
        let count = 0;
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].done) {
                count++;
            }
        }
        return count;
    }
}

const list = new TodoList();
list.add("Купить хлеб");
list.add("Помыть посуду");
list.add("Сделать зарядку");
list.complete(0);
list.print();
console.log("Выполнено задач:", list.countDone());
