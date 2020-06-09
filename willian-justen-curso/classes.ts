abstract class UserAccount { // abstract só sao modelos pra outras classes q irao extender
    name: string
    protected age: number // Só pode chamar dentro da class ou das q estendem, mas fora não

    constructor(name: string, age: number) {
        this.name = name,
            this.age = age
    }
    logDetails(): void {
        console.log(`${this.name} | age ${this.age}`)
    }
}
class CharAccount extends UserAccount {
    private nickname: string // Só pode ser chamado dentro da sua propria classe | CharAccount 
    level: number

    constructor(public name: string, public age: number, nickname: string, level: number) {
        super(name, age)
        this.nickname = nickname
        this.level = level
    }

    get getLevel() {
        console.log('get')
        return this.level
    }

    set setLevel(level: number) {
        this.level = level
    }

    logCharDetails(): void {
        console.log(`the pplayer is ${this.name} has the ${this.age} at level ${this.level} ${this.nickname}`)
    }
}

// const will = new UserAccount('Nome', 29)
// console.log(will)
// // console.log(will.age) // erro pq nao posso referenciar algo protected fora da classe
// console.log(will.name)
// will.logDetails()

const john = new CharAccount('John', 45, 'jonhnnn', 10)
// john.nickname = 'willjusten'
console.log(john.name)
// john.level = 99
console.log(john)
john.logDetails()
john.logCharDetails()

john.setLevel = 290
// uso do get
console.log(john.getLevel)
