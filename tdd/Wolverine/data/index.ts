import { I_XMem } from '../interfaces'
import { ID } from '../enum'

const created: Readonly<I_XMem> = {
    id: ID.Primary,
    name: 'James Howlett/Logan',
    codenames: ['Logan', 'Arma X', 'Caolho', 'Morte', 'Jimmy', 'Jim Logan'],
    specie: 'Humano Mutante',
    ocupation: [
        'Mestre Samurai',
        'ex-Marinheiro',
        'ex-mercenário',
        'Instrutor',
        'ex-barman'
    ],
    affiliations: [
        'Arma X',
        'X-Men',
        'Novos Vingadores',
        'Exército Canadense',
        'Clã Yashida',
        'Departamento H',
        'Cavaleiros do Apocalipse',
        'X-Force',
        'Instituto Jean Grey',
        'Tropa Alfa',
    ],
    family: [
        'John Howlett Sr', 'Elizabeth Howlett', 'Ophelia Sarkissian'
    ],
    country: 'Canadá',
    state_now: 'Ativo',
    created: [
        'Len Wein',
        'John Romita',
        'Herb Trimpe'
    ],
    firstApariation: 'The Incredible Hulk #180 (Novembro de 1974)',
    lastAparation: 'Nos filmes: cena pós créditos do filme Deadpool 2 (2018)',
    publising_company: 'Marvel Comics',
    operations: [
        'Mansão X',
        'Condado de Wetchester',
        'Nova York',
        'Torre dos Vingadores'
    ]
}
const created2: Required<I_XMem> | NonNullable<I_XMem | ID.Primary | undefined> = {
    id: ID.Primary,
    name: 'James Howlett/Logan',
    codenames: ['Logan', 'Arma X', 'Caolho', 'Morte', 'Jimmy', 'Jim Logan'],
    specie: 'Humano Mutante',
    ocupation: [
        'Mestre Samurai',
        'ex-Marinheiro',
        'ex-mercenário',
        'Instrutor',
        'ex-barman'
    ],
    affiliations: [
        'Arma X',
        'X-Men',
        'Novos Vingadores',
        'Exército Canadense',
        'Clã Yashida',
        'Departamento H',
        'Cavaleiros do Apocalipse',
        'X-Force',
        'Instituto Jean Grey',
        'Tropa Alfa',
    ],
    family: [
        'John Howlett Sr', 'Elizabeth Howlett', 'Ophelia Sarkissian'
    ],
    country: 'Canadá',
    state_now: 'Ativo',
    created: [
        'Len Wein',
        'John Romita',
        'Herb Trimpe'
    ],
    firstApariation: 'The Incredible Hulk #180 (Novembro de 1974)',
    lastAparation: 'Nos filmes: cena pós créditos do filme Deadpool 2 (2018)',
    publising_company: 'Marvel Comics',
    operations: [
        'Mansão X',
        'Condado de Wetchester',
        'Nova York',
        'Torre dos Vingadores'
    ]
}

const objsMen: object = { created, created2 }
Object.seal(objsMen)
console.log(objsMen)