"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1981);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data;
casamento.ano = 2017;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1981);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta;
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carr1 = new Carro('Ford', 'Ka', 185);
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca}`);
console.log(`${f40.modelo}`);
console.log(`${f40.acelerar()}`);
console.log(`${f40.frear()}`);
// getters & setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1);
console.log(pessoa1.idade);
pessoa1.idade = -3;
console.log(pessoa1);
// Atributos e metodos estaticos
class Matematica {
    // areaCirc(raio:number):number {
    //     return this.PI * raio * raio
    // }
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
}
// PI: number = 3.14
Matematica.PI = 3.14;
console.log(Matematica.areaCirc(4));
// classe abstrata
// abstract class X {
//     abstract y(a:number):number
//     abstract w(b:number):void 
// }
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...calculo) {
        this.resultado = calculo.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...calculo) {
        this.resultado = calculo.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
let c2 = new Multiplicacao();
c2.executar(2, 3, 4, 5);
console.log(c2.getResultado());
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
        return this.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
// const errado = new Unico
console.log(Unico.getInstance().agora);
// Somente leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-ABC'
console.log(turboHelice);
//# sourceMappingURL=classes.js.map