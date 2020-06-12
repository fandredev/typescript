import { I_XMem } from '../interfaces'
import type { States, FirstApariation, LastApariation, PublisingCompany } from '../types'
export namespace Wol {
    export abstract class baseWolverine<N, S, arrS> implements I_XMem<N, S, arrS> {
        id: N
        name: S
        codenames: arrS
        specie: S
        ocupation: arrS
        affiliations: arrS
        family: arrS
        country: S
        state_now: States
        created: arrS
        firstApariation: FirstApariation
        lastAparation: LastApariation
        publising_company: PublisingCompany
        operations: arrS
        constructor(
            id: N,
            name: S,
            codenames: arrS,
            specie: S,
            ocupation: arrS,
            affiliations: arrS,
            family: arrS,
            country: S,
            state_now: States,
            created: arrS,
            firstApariation: FirstApariation,
            lastAparation: LastApariation,
            publising_company: PublisingCompany,
            operations: arrS,
        ) {
            this.id = id
            this.name = name
            this.codenames = codenames
            this.specie = specie
            this.affiliations = affiliations
            this.ocupation = ocupation
            this.family = family
            this.country = country
            this.state_now = state_now
            this.created = created
            this.firstApariation = firstApariation
            this.lastAparation = lastAparation
            this.publising_company = publising_company
            this.publising_company = publising_company
            this.operations = operations
        }
    }
}
