
function sum(number1: number, number2: number) : number { 
    return number1 * number2
}

console.log(sum(1,2))

let string: string | number = 'ABCD'

function generateRandomText(text: string, length: number) : any {
    return text.substring(0, length)
}

console.log(
    generateRandomText(string, 2)
)

function textToUpperCase(string : string) : string{
    return string.toUpperCase()
}

console.log(textToUpperCase('adrian'))

type Transacao = {
    pessoa: string,
    number: number,
    number2: number
}

function transacaoFunction(pessoa: string, number: number, number2 : number): any {
    console.log(
        `Pessoa ${pessoa} - Transação: Valor 1 = ${number} | Valor 2 = ${number2}`
    )
}

transacaoFunction('Felipe',11,3)


function unionTypes(value : string | number | object) : string | number | object {
    return value
}
console.log(
    unionTypes(
        {
            name: 'Felipe',
            idade: 15,
            funcao: () => console.log('funcao')
        }
))

function objects(objeto: object): object{
    return objeto
}

type Pessoas = {
    name: string 
}
const objeto: Pessoas = {
    name: '1'
}

console.log(objects(objeto))