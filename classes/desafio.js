"use strict";
var Produto = /** @class */ (function () {
    function Produto(nome, preco, desconto) {
        if (desconto === void 0) { desconto = 0; }
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    // precoComDesconto(preco: number = this.preco, desconto: number = this.desconto): number {
    //     let res = desconto * 100
    //     preco = res
    //     return preco
    // }
    Produto.prototype.precoComDesconto = function () {
        return this.preco * (1 - this.desconto);
    };
    Produto.prototype.resumo = function () {
        return this.nome + " custa " + this.precoComDesconto() + " (" + this.desconto * 100 + "% off)";
    };
    return Produto;
}());
var product = new Produto('Maquina de lavar', 600);
var product2 = new Produto('Nootbook', 1000, 0.20);
console.log(product2.resumo());
// console.log(product2.precoComDesconto(1000,0.2))
// desafio 2
// Exercício 1 - Classe
// function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0
//     this.buzinar = function() {
//         console.log('Toooooooooot!')
//     }
//     this.acelerar= function(delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }
// var moto = new Moto('Ducati')
// moto.buzinar()
// console.log(moto.velocidade)
// moto.acelerar(30)
// console.log(moto.velocidade)
var Moto = /** @class */ (function () {
    function Moto(name, velocidade) {
        var _this = this;
        if (name === void 0) { name = 'Felipe'; }
        if (velocidade === void 0) { velocidade = 0; }
        this.name = name;
        this.velocidade = velocidade;
        this.buzinar = function () {
            console.log('Toooooooooot!');
        };
        this.acelerar = function (delta) {
            _this.velocidade = _this.velocidade + delta;
        };
    }
    return Moto;
}());
var moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade, 'Velocidade do metodo public velocidade');
moto.acelerar(30);
console.log(moto.velocidade, 'Velocidade 30');
// Exercício 2 - Herança
var objeto2D = {
    base: 0,
    altura: 0
};
var retangulo = Object.create(objeto2D);
retangulo.base = 5;
retangulo.altura = 7;
retangulo.area = function () {
    return this.base * this.altura;
};
console.log(retangulo.area());
// Exercício 3 - Getters & Setters
var estagiario = {
    _primeiroNome: ''
};
Object.defineProperty(estagiario, 'primeiroNome', {
    get: function () {
        return this._primeiroNome;
    },
    set: function (valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    },
    enumerable: true,
    configurable: true
});
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Le'
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Leonardo'
// console.log(estagiario.primeiroNome)
//# sourceMappingURL=desafio.js.map