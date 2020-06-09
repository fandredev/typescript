"use strict";
function saudarComOla(pessoa) {
    console.log('Olá' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
    console.log(pessoa);
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log('OLA MEU NOME é' + this.nome + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
// saudarComOla({ nome: 'Jonas', idade: 27, xyz: true, altura: 1.75 })
pessoa.saudar(' Skywalker');
//
class Cliente {
    constructor() {
        this.nome = 'João';
        this.dataa = new Date;
    }
    saudar(sobrenome) {
        console.log('OLA MEU NOME é' + this.nome + sobrenome);
    }
}
const client = new Cliente();
client.nome = 'Han';
saudarComOla(client);
client.saudar(' Solo');
let potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(Math.pow(3, 10));
class RealA {
    a() { }
}
class RealB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
// function testes(b: B) { }
// testes(new RealABC)
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const aaa = 2;
const bb = 2;
const cc = 2;
aaa.log();
bb.log();
cc.log();
//# sourceMappingURL=interfaces.js.map