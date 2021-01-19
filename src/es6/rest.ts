const numbersFn = [1,0,83,52]

type Values = (...args: number[]) => number[]

const returnArrayNumbers: Values = (...args) => args // Rest


export const numbers = returnArrayNumbers(...numbersFn) // Spread
console.log(numbers);
