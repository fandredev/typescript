let isFrozen: boolean = true
if(isFrozen) {
  var action = 'Colocar casaco'
  let actionWithLet = 'Colocar casaco'
}

console.log(action);
// console.log(actionWithLet); // Não funciona, pois o contexto da variavel só funciona dentro do if


const cpf: string = '123.456.000-99'
// cpf = '112.355.312-22' // Erro, é uma constante