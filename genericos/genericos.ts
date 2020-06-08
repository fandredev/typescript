function echo(object: any): any {
    return object
}

console.log(echo('João').length)
console.log(echo('João'))
console.log(echo(27))
console.log(echo(27).length)
console.log(echo({ nome: 'joao' }))

// usando generics

function echoMelhorado<T>(objeto: T): T {
    return objeto
}

console.log(echoMelhorado(27))
// console.log(echoMelhorado(27).length) // erro
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({ nome: 'joao' }))


// generics disponiveis na api
const avaliacoes: Array<number> = [10, 93.5, 5.7]
avaliacoes.push(8.4)
// avaliacoes.push('58.4')
console.log(avaliacoes)

// array

function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir<string>(['1,2,3,4,Felipe'])
imprimir<{ nome: string, idade: number }>([
    { nome: 'Felipe', idade: 10 }
])
type Aluno = { nome: string, idade: number }

imprimir<Aluno>([
    { nome: 'Julia', idade: 10 }
])

// Tipo genérico
type Echo = <T>(data: T) => T
// const chamarEcho: <T>(data: T) => T = echoMelhorado
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Felipe'))


// Classe com generics

class OperacaoBinaria {
    constructor(public operando1: any, public operando2: any) { }
    executar() {
        this.operando1 + this.operando2
    }
}

console.log(new OperacaoBinaria('Bom', 'dia').executar())
console.log(new OperacaoBinaria(3, 7).executar())
console.log(new OperacaoBinaria(3, 'Opa').executar())