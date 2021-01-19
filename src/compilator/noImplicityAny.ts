// Quando a opção 'noImplicityAny' está marcada como false, o compilador do ts
// não irá gerar um erro nas tipagens do tipo any

function sum(a, b) {
  return a + b
}

let whatever
whatever = 12
whatever = 'abc'