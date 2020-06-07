// Exercicio 1
const dobro = (valor:number) : number => valor * 2
console.log(dobro(20))
 
// Exercicio 2
const dizerOla = (nome: string = 'Pessoa') : void => {
    console.log("Ola, " + nome)
}
dizerOla()
dizerOla("Julia")
 

// Exercicio 3
const nums : number[] = [-3, 33, 38, 5,10]
console.log(Math.min(...nums))
 
// Exercicio 4
const array: number[] = [55, 20]
array.unshift(...nums)
console.log(...array)
 
// Exercicio 5
const notas : number[] = [8.5, 6.3, 9.4,1.2]
const [nota1,nota2,nota3] = notas
console.log(nota1,nota2,nota3)
 
// Exercicio 6
const cientista: any = {primeiroNome: "Will", experiencia: 12}
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia

const { primeiroNome: p, experiencia: exp } = cientista
console.log(p,exp)

// console.log(primeiroNome, experiencia)