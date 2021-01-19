enum names{
  primary = 'Felipe'
}
const { primary } = names

const users: string = primary

console.log(`Bem vindo ${users}`)
console.log('Bem vindo '.concat(users).toUpperCase())