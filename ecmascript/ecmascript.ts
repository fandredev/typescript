let seraQuePode = '?'
console.log(seraQuePode)

let estaFrio = true
if(estaFrio) {
    // var acao = 'Colocar casaco'
    let acao = 'Colocar casaco'
    console.log(acao)
}
// console.log(acao)

// const cpf: string = '123.456.789-99'
let cpf: string = '123.456.789-99'
// cpf = '782.312.321-91'
console.log(cpf)

var segredo  = 'externo'
function relevar(){
    var segredo = 'interno'
    console.log(segredo)
}
relevar()
console.log(segredo)
{
    {
        const def = 'def'
        console.log(def)
    }
}
// for(var i = 0; i < 10;i++){
//     console.log(i)
// }
// console.log(i)
for(let i = 0; i < 10;i++){
    console.log(i)
}
// console.log(i)


// arrow function

function somar (n1:number, n2: number): number {
        return n1 + n2
}

console.log(somar(2,2))

// const subtrair = (n1: number, n2: number) : number => n1 - n2
const subtrair = (n1: number, n2: number) : number =>{
    return n1 - n2
}
console.log(subtrair(2,3))


const saudacao = () => console.log('Olá')
saudacao()

const falarCom = (pessoa: string) => console.log(`Ola ${pessoa}`)
falarCom('João')


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
function contagemRegressiva(inicio: number = 5, fim:number = inicio -5) : void {
    console.log(inicio)
    while(inicio > fim){
        inicio--
        console.log(inicio)
    }
}
contagemRegressiva()
contagemRegressiva(2)

// operador rest & spread

const numbers = [1,10,99,-5]
console.log(Math.max(...numbers))

const turmaA: string[] = ['João','Maria','Fernanda']
const sala: string[] = ['Fernando','Miguel','Lorena', ...turmaA]

console.log(sala)

// function retornarArray(...args: number[]): number[] {
//     console.log(a)
//     return args
// }

// const number = retornarArray(...numbers)
// console.log(number)

// rest e spread tupla

const tupla: [number,string,boolean] =[1,'abc',false]

function tuplaParam1(a:number,b:string,c:boolean) : void {
    console.log(`${a} ${b} ${c}`)
}
tuplaParam1(...tupla)

function tuplaParam2(...param: [number,string,boolean]): any {
    console.log(Array.isArray(param))
    console.log(`${param[0]}${param[1]} ${param[2]}`)
}
tuplaParam2(...tupla)

// destructuring[array]
const caracteristicas = ['Motor Zetec 1.8',2020] 
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]

const [motor,ano] = caracteristicas
console.log(motor)
console.log(ano)

// const [w,z] = [2,3]

// destructuring[objeto]

const item = {
    nome:'SSD 480GB',
    preco: 200,
    caracteristicas:{
        w: 'importado'
    }
}
const nomeItem = item.nome
const precoItem = item.preco
console.log(nomeItem,precoItem)

const { nome:n, preco, caracteristicas:{w}} = item
console.log(n)
console.log(preco)
console.log(caracteristicas)

// template srtings

const usuarioID: string = 'SuporteCod3r'
const notificacoes: string = '9'
const boasVindas : string = 'Boas vindas' + usuarioID + 'notificacoes' + notificacoes 
console.log(boasVindas)
const boasVindas2 : string = `Boas vindas ${usuarioID} notificacoes: ${parseInt(notificacoes) > 9 ? '+9': notificacoes}`
console.log(boasVindas)


// callback

// function esperar3s(callback:(dado:string) => void) : void{
//     setTimeout(() =>{ 
//         callback(
//             '3s depois'
//         )
//     }, 3000)
// }
// esperar3s(function(resultado:string) : void {
//     console.log(resultado)
// })
function esperar3s(callback:(dado:string) => void) : void{
    setTimeout(() =>{ 
        callback(
            '3s depois'
        )
    }, 3000)
}
esperar3s(function(resultado:string) : void {
    console.log(resultado)
})

function esperar3sPromise() : any {
    return new Promise((resolve: any) => {
        setTimeout(() =>{ 
            resolve(
                '3s depois promise'
            )
        }, 3000)
    })
}
esperar3sPromise().then(dado => console.log(dado))

fetch('https://swapi.dev/api/people/1')
.then(res => res.json())
.then(personagem => personagem.films)
.then(films => fetch(films[0]))
.then(resFilms => resFilms.json()).then(filme => console.log(filme))