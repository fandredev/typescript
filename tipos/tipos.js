"use strict";
// string
let nome = 'João';
console.log(nome);
// nome = 28
// numbers
let idade = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explicitos
let minhaIdade;
minhaIdade = 27;
// minhaIdade = 'idade é 27'
console.log(minhaIdade);
// array
let hobbies = [
    'Cozinhar',
    'Praticar esportes'
];
console.log(hobbies);
console.log(typeof hobbies);
hobbies = [100, 'Sum', 200];
console.log(hobbies);
// tuplas
let endereco = ['Av principal', 99, 123];
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
let minhaCor = Cor.Verde;
console.log(Cor.Azul, Cor.Laranja, Cor.Amarelo);
// any
let carro = 'BMW';
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
// tipo funcao
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
let usuario = {
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
// bool
let legal = false;
console.log(legal);
// number
let meuNumero = 15;
console.log(meuNumero);
// string
let inimigo = 'Ricardo';
console.log(`Não gosto de ${inimigo}`);
//array
let frutas = ['Maça', 'Banana'];
let verduras = ['Alface', 'Beterraba'];
let all = [...frutas, ...verduras];
console.log(all);
// tupla
let nomesEIdades = ['Fernando', 17];
console.log(nomesEIdades);
// enums
var Motos;
(function (Motos) {
    Motos["MotoBonita"] = "Fazer 250";
    Motos["MotoLegal"] = "XT";
})(Motos || (Motos = {}));
let m = Motos.MotoBonita;
console.log(m);
// fetch
// fetch('https://swapi.dev/api/planets/3').then(res => console.log(res.json()))
// any
let naoSeiOTipo = '12d2boolfalse';
console.log(naoSeiOTipo);
// object
let obj = {
    name: 'James'
};
Object.freeze(obj);
console.log(obj);
// void - funcao nao retorna nada
function handleConsoleLog(param) {
    console.log(`${param} realizado`);
}
handleConsoleLog('Teste');
// null
let _n = null;
console.log(_n);
// undefined
let u = undefined;
console.log(u);
// union types
let _nameAPI = 'Marte';
console.log(_nameAPI);
//# sourceMappingURL=tipos.js.map