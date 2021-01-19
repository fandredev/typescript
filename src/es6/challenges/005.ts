/**
 * Simplifique os trechos de código abaixo utilizando o operador Destructuring!
 * 
 * 
 * var notas = [8.5, 6.3, 9.4]
   var notas1 = notas[0]
   var notas2 = notas[1]
   var notas3 = notas[2]

   var cientista = {primeiroNome: "Will", experiencia: 12}
   var primeiroNome = cientista.primeiroNome
   var experiencia = cientista.experiencia
 */

const grades: [number,number,number] = [8.5, 6.3, 9.4]

const [one, two, three] = grades

console.log(one)
console.log(two);
console.log(three);

type Scientist = {
  first_name: string,
  exp: number
}


const scientist: Scientist = Object.freeze({
  first_name: 'Juliana',
  exp: 12
})

const { first_name: fn, exp: e } = scientist

console.log(`${fn}-${e}`)