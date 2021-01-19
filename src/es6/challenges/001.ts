/**
 * Traduzir para typescript
 * 
 * var dobro = function(valor) {
    return valor * 2
    }
    console.log(dobro(10))

  */

type ValueDouble = (value: number) => number

const double: ValueDouble = (v = 4) => v * 2

console.log(double(3));
