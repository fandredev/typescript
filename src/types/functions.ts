
const animal: string = 'Leão'
const ageAnimal: number = 1

function returnMyName() : string {
  return animal
 // return ageAnimal // Error, o retorno precisa ser string
}
console.log(returnMyName());


/* 
  Tipo void não retorna nada
*/
function talkOi() : void { console.log('Oi') }
talkOi()


/**
 * Parâmetros para funções
 */

export function multiply(a: number, b: number) : number {
  const res = a * b
  return parseInt(res.toFixed(2))
}

console.log(multiply(2.7, 10.555))