"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
console.log.apply(console, nums);
// Exercicio 4
var array = [55, 20];
console.log.apply(console, array);
// Exercicio 5
var notas = [8.5, 6.3, 9.4, 1.2];
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2] 
var res = __spreadArrays(notas);
console.log(res);
// console.log(nota1, nota2, nota3)
// Exercicio 6
var cientista = { primeiroNome: "Will", experiencia: 12 };
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
var p = cientista.primeiroNome, exp = cientista.experiencia;
console.log(p, exp);
// console.log(primeiroNome, experiencia)
//# sourceMappingURL=desafio.js.map