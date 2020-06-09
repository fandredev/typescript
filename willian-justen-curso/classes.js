"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
    logDetails() {
        console.log(`${this.name} | age ${this.age}`);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.nickname = nickname;
        this.level = level;
    }
    get getLevel() {
        console.log('get');
        return this.level;
    }
    set setLevel(level) {
        this.level = level;
    }
    logCharDetails() {
        console.log(`the pplayer is ${this.name} has the ${this.age} at level ${this.level} ${this.nickname}`);
    }
}
// const will = new UserAccount('Nome', 29)
// console.log(will)
// // console.log(will.age) // erro pq nao posso referenciar algo protected fora da classe
// console.log(will.name)
// will.logDetails()
const john = new CharAccount('John', 45, 'jonhnnn', 10);
// john.nickname = 'willjusten'
console.log(john.name);
// john.level = 99
console.log(john);
john.logDetails();
john.logCharDetails();
john.setLevel = 290;
// uso do get
console.log(john.getLevel);
//# sourceMappingURL=classes.js.map