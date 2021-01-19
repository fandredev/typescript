/**
 * Dado esse array, imprima o menor valor!
 */

type Min = [number,number,number,number]

const min: Min = [-3, 33, 38, 5]

function returnValueMin(...values: Min) : number {
 return Math.min(...values)
}

console.log(returnValueMin(...min));