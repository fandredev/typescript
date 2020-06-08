"use strict";
function echo(object) {
    return object;
}
console.log(echo('João').length);
console.log(echo('João'));
console.log(echo(27));
console.log(echo(27).length);
console.log(echo({ nome: 'joao' }));
// usando generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado(27));
// console.log(echoMelhorado(27).length) // erro
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'joao' }));
// generics disponiveis na api
var avaliacoes = [10, 93.5, 5.7];
avaliacoes.push(8.4);
// avaliacoes.push('58.4')
console.log(avaliacoes);
// array
function imprimir(args) {
    args.forEach(function (elemento) { return console.log(elemento); });
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['1,2,3,4,Felipe']);
imprimir([
    { nome: 'Felipe', idade: 10 }
]);
imprimir([
    { nome: 'Julia', idade: 10 }
]);
// const chamarEcho: <T>(data: T) => T = echoMelhorado
var chamarEcho = echoMelhorado;
console.log(chamarEcho('Felipe'));
// Classe com generics
var OperacaoBinaria = /** @class */ (function () {
    function OperacaoBinaria(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    return OperacaoBinaria;
}());
//# sourceMappingURL=genericos.js.map