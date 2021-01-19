type SumReturn = (n1: number, n2: number) => number 

const subtract: SumReturn = (n1, n2) => n1 - n2


console.log(subtract(10, 5));
