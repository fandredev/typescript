"use strict";
var funcionario = {
    supervisores: ['Pedro', 'José'],
    baterPonto: function (hora) { return hora <= 8 ? 'Ponto normal' : 'Fora do Horário'; }
};
var funcionario2 = {
    supervisores: ['Ana', 'Pedro'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else
            return 'Fora ho horário';
    }
};
// funcionario = {}
// funcionario2 = {}
console.log(funcionario.baterPonto(9));
console.log(funcionario.supervisores);
console.log(funcionario2.supervisores);
console.log(funcionario.baterPonto(10));
var funcionario3 = {
    supervisores: ['Ana', 'Pedro'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else
            return 'Fora ho horário';
    }
};
console.log(funcionario3.supervisores);
console.log(funcionario3.baterPonto(10));
// union types
var nota = 10;
console.log("Nota = " + nota);
nota = '10';
console.log("Nota = " + nota);
// Checagem manual
var valor = 30;
if (typeof valor === "number")
    console.log('number');
else
    console.log('outro');
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 1,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length === 0) {
            falha('Precisa ter nome');
        }
        if (this.preco <= 0) {
            falha('Preço invalido');
        }
    }
};
console.log(produto.validarProduto());
var altura = 12;
// altura = null
var alturaOpcional = null;
console.log(alturaOpcional);
var contato1 = {
    nome: 'Felipe',
    tel1: '2932932',
    tel2: null
};
console.log(contato1);
var podeSerNulo = null;
// podeSerNulo = 123
// podeSerNulo = '123'
console.log(podeSerNulo);
