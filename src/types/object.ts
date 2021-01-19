let user: { name: string, age: number } = {
  name: 'João',
  age: 27
}
console.log(user);

// user = {} Erro porque não tem os atributos name e age

/**
 * Erro por que não tem os atributos name e age
 */
// user = {
//   nome: 'Felipe',
//   idade: 14
// }

user = {
  age: 20,
  name: 'Maria'
}
console.log(user);
