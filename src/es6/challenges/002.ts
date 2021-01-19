/**
 * Verifique se há espaço para melhorias nesse trecho de código!
 * 
 * var dizerOla = function (nome) {
    if (nome === undefined) { nome = "Pessoa" }
    console.log("Ola, " + nome)
    }
    dizerOla()
    dizerOla("Anna")
 */

type SayHelloFn = (name?: string) => void
enum SayHelloEnum {
  primary = 'People',
}

const sayHello: SayHelloFn = (name = 'Júlia') => {
  const { primary:p } = SayHelloEnum
  if(name === undefined) {
    name = p
    console.log(`Olá ${name}`)
  }

  console.log(`Hello ${name}`)
}

sayHello()
sayHello('Ana')