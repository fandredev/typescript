"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
// bool
var legal = false;
console.log(legal);
// number
var meuNumero = 15;
console.log(meuNumero);
// string
var inimigo = 'Ricardo';
console.log("N\u00E3o gosto de " + inimigo);
//array
var frutas = ['Maça', 'Banana'];
var verduras = ['Alface', 'Beterraba'];
var all = __spreadArrays(frutas, verduras);
console.log(all);
// tupla
var nomesEIdades = ['Fernando', 17];
console.log(nomesEIdades);
// enums
var Motos;
(function (Motos) {
    Motos["MotoBonita"] = "Fazer 250";
    Motos["MotoLegal"] = "XT";
})(Motos || (Motos = {}));
var m = Motos.MotoBonita;
console.log(m);
// fetch
// fetch('https://swapi.dev/api/planets/3').then(res => console.log(res.json()))
// any
var naoSeiOTipo = '12d2boolfalse';
console.log(naoSeiOTipo);
// object
var obj = {
    name: 'James'
};
Object.freeze(obj);
console.log(obj);
// void - funcao nao retorna nada
function handleConsoleLog(param) {
    console.log(param + " realizado");
}
handleConsoleLog('Teste');
// null
var _n = null;
console.log(_n);
// undefined
var u = undefined;
console.log(u);
// union types
var _nameAPI = 'Marte';
console.log(_nameAPI);
//# sourceMappingURL=tipos.js.map