const numbers: Array<number> = [1, 10, 15, 20]

function whatIsMaxNumber(num: Array<number>) : number { // Spread
  return Math.max(...num)
}

console.log(whatIsMaxNumber(numbers));


const students = ['Juliana', 'Maria', 'Mateus']
const approve = ['Marcos', ...students]

console.log(approve);
