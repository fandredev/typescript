type MyFuncionario = {
    supervisores: string[],
    baterPonto: (hora:number) => string
}

let funcionario: MyFuncionario = {
    supervisores: ['Pedro','José'],
    baterPonto: (hora: number) : string => hora <= 8 ? 'Ponto normal' : 'Fora do Horário'
}

let funcionario2: {
    supervisores: string[],
    baterPonto: (horas:number) => string
} = {
    supervisores: ['Ana','Pedro'],
    baterPonto(horario: number): string {
        if(horario <=8){
            return 'Ponto normal'
        } 
         else return 'Fora ho horário'
    }
}

// funcionario = {}
// funcionario2 = {}

console.log(funcionario.baterPonto(9))
console.log(funcionario.supervisores)
console.log(funcionario2.supervisores)
console.log(funcionario.baterPonto(10))


type Funcionario = {
    supervisores: string[],
    baterPonto: (horas:number) => string 
}
let funcionario3: Funcionario = {
    supervisores: ['Ana','Pedro'],
    baterPonto(horario: number): string {
        if(horario <=8){
            return 'Ponto normal'
        } 
         else return 'Fora ho horário'
    }
}

console.log(funcionario3.supervisores)
console.log(funcionario3.baterPonto(10))


// union types

let nota: number | string = 10
console.log(`Nota = ${nota}`)
nota = '10'
console.log(`Nota = ${nota}`)


// Checagem manual

let valor = 30
if(typeof valor === "number")
    console.log('number')
else
    console.log('outro')

function falha(msg: string) : never{
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 1,
    validarProduto(){
        if(!this.nome || this.nome.trim().length === 0) {
            falha('Precisa ter nome')
        }
        if(this.preco <= 0) {
            falha('Preço invalido')
        }
    }
}

console.log(produto.validarProduto())

let altura = 12
// altura = null

let alturaOpcional: null | number = null
console.log(alturaOpcional)

type Contato = {
    nome: string,
    tel1: string | null,
    tel2: null,
}

const contato1: Contato = {
    nome: 'Felipe',
    tel1: '2932932',
    tel2: null
}
console.log(contato1)

let podeSerNulo: null = null
// podeSerNulo = 123
// podeSerNulo = '123'
console.log(podeSerNulo)
