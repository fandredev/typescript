import { N_Base } from './base'

namespace Base_Olimpics {
    export class Olympics<S, N> extends N_Base.Olym<S, N> {
        id: N
        name: S
        country: S
        sig: S
        gold: N
        silver: N
        bronze: N
        total: N
        constructor(
            id: N,
            name: S,
            country: S,
            sig: S,
            gold: N,
            silver: N,
            bronze: N,
            total: N
        ) {
            super(id, name, country, sig, gold, silver, bronze, total)
            this.id = id
            this.name = name
            this.country = country
            this.sig = sig
            this.gold = gold
            this.silver = silver
            this.bronze = bronze
            this.total = total
        }
    }
}

const created = new Base_Olimpics.Olympics<string, number>(
    1,
    'Quadro dos Jogos Olímpicos de verão de 2008',
    'China',
    'CHN',
    48,
    22,
    30,
    100
)
console.log(created)