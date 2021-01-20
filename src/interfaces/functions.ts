// Interface Função

interface Calc {
  (a: number, b: number) : number
}

let power: Calc

power = (base: number, exp: number) : number => base ** exp


console.log(power(3, 10));
