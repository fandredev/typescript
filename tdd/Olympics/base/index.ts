import { I_Olym } from '../interfaces'
export namespace N_Base {
    export abstract class Olym<S, N> implements I_Olym<S, N>{
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