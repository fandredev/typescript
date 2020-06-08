"use strict";
function saudarComOla(pessoa) {
    console.log('Olá' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
    console.log(pessoa);
}
var pessoa = {
    nome: 'João',
    idade: 27,
    saudar: function (sobrenome) {
        console.log('OLA MEU NOME é' + this.nome + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
// saudarComOla({ nome: 'Jonas', idade: 27, xyz: true, altura: 1.75 })
pessoa.saudar(' Skywalker');
//
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.nome = 'João';
        this.dataa = new Date;
    }
    Cliente.prototype.saudar = function (sobrenome) {
        console.log('OLA MEU NOME é' + this.nome + sobrenome);
    };
    return Cliente;
}());
var client = new Cliente();
client.nome = 'Han';
saudarComOla(client);
client.saudar(' Solo');
var potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(Math.pow(3, 10));
var RealA = /** @class */ (function () {
    function RealA() {
    }
    RealA.prototype.a = function () { };
    return RealA;
}());
var RealB = /** @class */ (function () {
    function RealB() {
    }
    RealB.prototype.a = function () { };
    RealB.prototype.b = function () { };
    return RealB;
}());
var RealABC = /** @class */ (function () {
    function RealABC() {
    }
    RealABC.prototype.a = function () { };
    RealABC.prototype.b = function () { };
    RealABC.prototype.c = function () { };
    return RealABC;
}());
// function testes(b: B) { }
// testes(new RealABC)
var AbstrataABD = /** @class */ (function () {
    function AbstrataABD() {
    }
    AbstrataABD.prototype.a = function () { };
    AbstrataABD.prototype.b = function () { };
    return AbstrataABD;
}());
Object.prototype.log = function () {
    console.log(this.toString());
};
var aaa = 2;
var bb = 2;
var cc = 2;
aaa.log();
bb.log();
cc.log();
//# sourceMappingURL=interfaces.js.map