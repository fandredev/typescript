"use strict";
// string
var nome = 'João';
console.log(nome);
// nome = 28
// numbers
var idade = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);
// boolean
var possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explicitos
var minhaIdade;
minhaIdade = 27;
// minhaIdade = 'idade é 27'
console.log(minhaIdade);
// array
var hobbies = [
    'Cozinhar',
    'Praticar esportes'
];
console.log(hobbies);
console.log(typeof hobbies);
hobbies = [100, 'Sum', 200];
console.log(hobbies);
// tuplas
var endereco = ['Av principal', 99, 123];
console.log(endereco);
endereco = ['Rua importante', 1260, 22];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 1] = "Laranja";
    Cor[Cor["Amarelo"] = 2] = "Amarelo"; // 2
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(Cor.Azul, Cor.Laranja, Cor.Amarelo);
// any
var carro = 'BMW';
carro = 1;
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// funcao
function retornaMeuNome() {
    return nome;
    // return idade
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('digaOi');
    // return minhaIdade
}
console.log(digaOi());
function multiplicar(number1, number2) {
    return number1 * number2;
}
// console.log(multiplicar(2,'str'))
console.log(multiplicar(2, 2));
function teste() {
}
// tipo funcao
var calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
var usuario = {
    nome: 'Felipe',
    idade: 18
};
console.log(usuario);
// usuario = {}
// usuario = {
//     name: 'Maria',
//     age: 31
// }
usuario = {
    nome: 'Pedro',
    idade: 29
};
console.log(usuario);
