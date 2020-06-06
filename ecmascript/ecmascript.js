"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var seraQuePode = '?';
console.log(seraQuePode);
var estaFrio = true;
if (estaFrio) {
    // var acao = 'Colocar casaco'
    var acao = 'Colocar casaco';
    console.log(acao);
}
// console.log(acao)
// const cpf: string = '123.456.789-99'
var cpf = '123.456.789-99';
// cpf = '782.312.321-91'
console.log(cpf);
var segredo = 'externo';
function relevar() {
    var segredo = 'interno';
    console.log(segredo);
}
relevar();
console.log(segredo);
{
    {
        var def = 'def';
        console.log(def);
    }
}
// for(var i = 0; i < 10;i++){
//     console.log(i)
// }
// console.log(i)
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i)
// arrow function
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
// const subtrair = (n1: number, n2: number) : number => n1 - n2
var subtrair = function (n1, n2) {
    return n1 - n2;
};
console.log(subtrair(2, 3));
var saudacao = function () { return console.log('Olá'); };
saudacao();
var falarCom = function (pessoa) { return console.log("Ola " + pessoa); };
falarCom('João');
// this 
//  function normalComThis(): any{
//      console.log(this)
//  }
//  normalComThis()
//  const normalComThisEspecial = normalComThis.bind({ name: 'Ana'})
//  normalComThisEspecial()
// const arrowComThis = (): any => console.log(this)
// arrowComThis()
// parametro padrao
function contagemRegressiva(inicio, fim) {
    if (inicio === void 0) { inicio = 5; }
    if (fim === void 0) { fim = inicio - 5; }
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
}
contagemRegressiva();
contagemRegressiva(2);
// operador rest & spread
var numbers = [1, 10, 99, -5];
console.log(Math.max.apply(Math, numbers));
var turmaA = ['João', 'Maria', 'Fernanda'];
var sala = __spreadArrays(['Fernando', 'Miguel', 'Lorena'], turmaA);
console.log(sala);
// function retornarArray(...args: number[]): number[] {
//     console.log(a)
//     return args
// }
// const number = retornarArray(...numbers)
// console.log(number)
// rest e spread tupla
var tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(a + " " + b + " " + c);
}
tuplaParam1.apply(void 0, tupla);
function tuplaParam2() {
    var param = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param[_i] = arguments[_i];
    }
    console.log(Array.isArray(param));
    console.log("" + param[0] + param[1] + " " + param[2]);
}
tuplaParam2.apply(void 0, tupla);
// destructuring[array]
var caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
var motor = caracteristicas[0], ano = caracteristicas[1];
console.log(motor);
console.log(ano);
// const [w,z] = [2,3]
// destructuring[objeto]
var item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: 'importado'
    }
};
var nomeItem = item.nome;
var precoItem = item.preco;
console.log(nomeItem, precoItem);
var n = item.nome, preco = item.preco, w = item.caracteristicas.w;
console.log(n);
console.log(preco);
console.log(caracteristicas);
// template srtings
var usuarioID = 'SuporteCod3r';
var notificacoes = '9';
var boasVindas = string = 'Boas vindas' + usuarioID + 'notificacoes' + notificacoes;
console.log(boasVindas);
var boasVindas2 = string = "Boas vindas " + usuarioID + " notificacoes: " + (parseInt(notificacoes) > 9 ? '+9' : notificacoes);
console.log(boasVindas);
//# sourceMappingURL=ecmascript.js.map