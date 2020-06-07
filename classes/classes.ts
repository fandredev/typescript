class Data {
    // Publico
    public dia: number
    mes: number
    ano: number

    constructor(dia:number = 1, mes:number=1, ano:number=1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}
const aniversario = new Data(3,11,1981)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data
casamento.ano = 2017
console.log(casamento)

class DataEsperta {
    constructor(
        public dia:number = 1, 
        public mes:number=1, 
        public ano:number=1970
    ) {}
}
const aniversarioEsperto = new DataEsperta(3,11,1981)
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)
class Carro {
    private velocidadeAtual: number = 0

    constructor(
        public marca:string,
        public modelo:string,
        private velocidadeMaxima:number= 200
    ) {}
    protected alterarVelocidade(delta:number) : number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

        if(velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        }else{
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
        return this.velocidadeAtual
    }
    public acelerar() : number {
        return this.alterarVelocidade(5)
    }
    public frear():number {
        return this.alterarVelocidade(-5)
    }
}

const carr1 = new Carro('Ford','Ka',185)

class Ferrari extends Carro {
    constructor(modelo: string,velocidadeMaxima: number) {
        super('Ferrari',modelo,velocidadeMaxima)
    }
    public acelerar() : number {
        return this.alterarVelocidade(20)
    }
    public frear():number {
        return this.alterarVelocidade(-15)
    }
}
const f40 = new Ferrari('F40',324)
console.log(`${f40.marca}`)
console.log(`${f40.modelo}`)
console.log(`${f40.acelerar()}`)
console.log(`${f40.frear()}`)

// getters & setters

class Pessoa {
    private _idade:number = 0
    get idade():number {
        return this._idade
    }
    set idade(valor:number){
        if(valor >= 0 && valor <= 120)  {
            this._idade = valor
        }
    }
}
const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1)
console.log(pessoa1.idade)

pessoa1.idade = -3
console.log(pessoa1)

// Atributos e metodos estaticos

class Matematica{
    // PI: number = 3.14
    static PI: number = 3.14

    // areaCirc(raio:number):number {
    //     return this.PI * raio * raio
    // }
    static areaCirc(raio:number):number {
        return Matematica.PI * raio * raio
    }
}

console.log(Matematica.areaCirc(4))

// classe abstrata

// abstract class X {
//     abstract y(a:number):number
//     abstract w(b:number):void 
// }

abstract class Calculo {
    protected resultado : number = 0
    abstract executar(...calculo:number[]):void

    public getResultado() : number {
        return this.resultado
    }
}
class Soma extends Calculo{
    public executar(...calculo:number[]):void {
        this.resultado = calculo.reduce((t,a) => t+a)
    }
}
class Multiplicacao extends Calculo{
    public executar(...calculo:number[]):void {
        this.resultado = calculo.reduce((t,a) => t*a)
    }
}

let c1: Calculo = new Soma()
c1.executar(2,3,4,5)
console.log(c1.getResultado())

let c2 = new Multiplicacao()
c2.executar(2,3,4,5)
console.log(c2.getResultado())

class Unico {
    private static instance: Unico = new Unico
    private constructor(){}
    static getInstance(): Unico{
        return Unico.instance
        return this.instance
    }
    public agora(){
        return new Date
    }
}
// const errado = new Unico
console.log(Unico.getInstance().agora)

// Somente leitura

class Aviao{
    public readonly modelo:string
    constructor(modelo: string, public readonly prefixo:string) {
        this.modelo = modelo
    }
}
const turboHelice = new Aviao('Tu-114','PT-ABC')
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-ABC'

console.log(turboHelice)