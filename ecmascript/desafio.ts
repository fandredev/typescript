// Exercicio 1
var dobro = (valor:number) : number => valor * 2
console.log(dobro(20))
 
// Exercicio 2
var dizerOla = (nome: string = 'Pessoa') : void => {
    console.log("Ola, " + nome)
}
dizerOla()
dizerOla("Julia")
 

// Exercicio 3
var nums : number[] = [-3, 33, 38, 5,10]
console.log(...nums)
 
// Exercicio 4
var array: number[] = [55, 20]
 
console.log(...array)
 
// Exercicio 5
var notas : number[] = [8.5, 6.3, 9.4,1.2]
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2] 
const res = [...notas]
console.log(res)

// console.log(nota1, nota2, nota3)
 
// Exercicio 6
var cientista: any = {primeiroNome: "Will", experiencia: 12}
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia

const { primeiroNome: p, experiencia: exp } = cientista
console.log(p,exp)

// console.log(primeiroNome, experiencia)