// Tipo função

const testing = (a: number, b: number) : number => {
  return a * b
}

let calc: (a: number, b: number) => number

calc = testing

console.log(calc(3,3));
