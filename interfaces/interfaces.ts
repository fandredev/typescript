interface Humano {
    nome: string,
    idade?: number,
    [prop: string]: any,
    saudar(sobrenome: string): void
}


function saudarComOla(pessoa: Humano): void {
    console.log('Olá' + pessoa.nome)
}

function mudarNome(pessoa: Humano): void {
    pessoa.nome = 'Joana'
    console.log(pessoa)
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string) {
        console.log('OLA MEU NOME é' + this.nome + sobrenome)
    }
}
saudarComOla(pessoa)
mudarNome(pessoa)
// saudarComOla({ nome: 'Jonas', idade: 27, xyz: true, altura: 1.75 })
pessoa.saudar(' Skywalker')


//
class Cliente implements Humano {
    nome: string = 'João'
    dataa: Date = new Date
    saudar(sobrenome: string) {
        console.log('OLA MEU NOME é' + this.nome + sobrenome)
    }
}

const client = new Cliente()
client.nome = 'Han'
saudarComOla(client)
client.saudar(' Solo')

// interface funcao

interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo
potencia = function (base: number, exp: number): number {
    return base ** exp
}

console.log(potencia(3, 10))
console.log(Math.pow(3, 10))
console.log(3 ** 10)


// Herança

interface A {
    a(): void
}

interface B {
    b(): void
}
interface ABC extends A, B {
    c(): void
}
class RealA implements A {
    a(): void { }
}
class RealB implements A, B {
    a(): void { }
    b(): void { }
}

class RealABC implements ABC {
    a(): void { }
    b(): void { }
    c(): void { }
}

// function testes(b: B) { }
// testes(new RealABC)

abstract class AbstrataABD implements A, B {
    a(): void { }
    b(): void { }
    abstract d(): void
}

interface Object {
    log(): void
}
Object.prototype.log = function () {
    console.log(this.toString())
}

const aaa = 2
const bb = 2
const cc = 2

aaa.log()
bb.log()
cc.log()