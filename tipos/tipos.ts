// string
let nome : string = 'João'
console.log(nome)
// nome = 28

// numbers
let idade : number = 27
// idade = 'Ana'
idade = 27.5
console.log(idade)

// boolean

let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)


// tipos explicitos

let minhaIdade: number
minhaIdade = 27
// minhaIdade = 'idade é 27'
console.log(minhaIdade)


// array

let hobbies: any[] = [
    'Cozinhar',
    'Praticar esportes'
]
console.log(hobbies)
console.log(typeof hobbies)

hobbies = [100, 'Sum', 200]
console.log(hobbies)

// tuplas

let endereco: [string,number,number] = ['Av principal', 99,123]
console.log(endereco)
endereco = ['Rua importante',1260,22]
console.log(endereco)

// enums

enum Cor {
    Cinza, //0
    Verde = 100, //100
    Azul = 10,   
    Laranja= 1,
    Amarelo // 2
}
let minhaCor:Cor = Cor.Verde
console.log(Cor.Azul, Cor.Laranja, Cor.Amarelo)

// any
let carro: any = 'BMW'
carro = 1
carro = {marca:'BMW', ano: 2019}
console.log(carro)


// funcao

function retornaMeuNome() : string {
    return nome
    // return idade
}
console.log(retornaMeuNome())

function digaOi() : void { // Não retorna nada
    console.log('digaOi')
    // return minhaIdade
}
console.log(digaOi())

function multiplicar(number1: number, number2: number) : number { 
    return number1 * number2
}
// console.log(multiplicar(2,'str'))
console.log(multiplicar(2,2))

function teste(){

}

// tipo funcao
let calculo: (num1: number, num2: number) => number
calculo = multiplicar

console.log(calculo(5,6))

// objetos

let usuario: {nome: string, idade: number} = {
    nome:'Felipe',
    idade: 18
}
console.log(usuario)
// usuario = {}
// usuario = {
//     name: 'Maria',
//     age: 31
// }

usuario = {
    nome:'Pedro',
    idade: 29
}
console.log(usuario)