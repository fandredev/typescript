"use strict";
function sum(number1, number2) {
    return number1 * number2;
}
console.log(sum(1, 2));
let string = 'ABCD';
function generateRandomText(text, length) {
    return text.substring(0, length);
}
console.log(generateRandomText(string, 2));
function textToUpperCase(string) {
    return string.toUpperCase();
}
console.log(textToUpperCase('adrian'));
function transacaoFunction(pessoa, number, number2) {
    console.log(`Pessoa ${pessoa} - Transação: Valor 1 = ${number} | Valor 2 = ${number2}`);
}
transacaoFunction('Felipe', 11, 3);
function unionTypes(value) {
    return value;
}
console.log(unionTypes({
    name: 'Felipe',
    idade: 15,
    funcao: () => console.log('funcao')
}));
function objects(objeto) {
    return objeto;
}
const objeto = {
    name: '1'
};
console.log(objects(objeto));
//# sourceMappingURL=teste.js.map