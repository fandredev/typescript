// import { areaRetangulo } from './retangulo'
import retangulo from './retangulo'
// import { areaCircuferencia } from './circuferencia'
import { areaCircuferencia as circ } from './circuferencia'

console.log('Modulo carregado')
console.log(retangulo(7,8))
console.log(circ(7))

const { digaOi } = require('./novo')
console.log(digaOi('Felps'))