/**
 * Adicione os elementos de nums em array!
 * 
 * var nums = [-3, 33, 38, 5]
   var array = [55, 20]
   console.log(array)
 */

type Nuns = [number,number,number,number]

const nums: Nuns = [-3, 33, 38, 5]
let array = [55, 20, ...nums]

console.log(array)