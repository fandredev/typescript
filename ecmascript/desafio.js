"use strict";
// Exercicio 1
var dobro = function (valor) { return valor * 2; };
console.log(dobro(20));
// Exercicio 2
var dizerOla = function (nome) {
    if (nome === void 0) { nome = 'Pessoa'; }
    console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Julia");
// Exercicio 3
var nums = [-3, 33, 38, 5, 10];
console.log(Math.min.apply(Math, nums));
// Exercicio 4
var array = [55, 20];
array.unshift.apply(array, nums);
console.log.apply(console, array);
// Exercicio 5
var notas = [8.5, 6.3, 9.4, 1.2];
var nota1 = notas[0], nota2 = notas[1], nota3 = notas[2];
console.log(nota1, nota2, nota3);
// Exercicio 6
var cientista = { primeiroNome: "Will", experiencia: 12 };
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
var p = cientista.primeiroNome, exp = cientista.experiencia;
console.log(p, exp);
// console.log(primeiroNome, experiencia)
//# sourceMappingURL=desafio.js.map