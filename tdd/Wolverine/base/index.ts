import { I_XMem } from '../interfaces'
import type { States, FirstApariation, LastApariation, PublisingCompany } from '../types'
export namespace Wol {
    export abstract class baseWolverine implements I_XMem {
        id: number
        name: string
        codenames: Array<string>
        specie: string
        ocupation: Array<string>
        affiliations: Array<string>
        family: Array<string>
        country: string
        state_now: States
        created: Array<string>
        firstApariation: FirstApariation
        lastAparation: LastApariation
        publising_company: PublisingCompany
        operations: Array<string>
        constructor(
            id: number,
            name: string,
            codenames: Array<string>,
            specie: string,
            ocupation: Array<string>,
            affiliations: Array<string>,
            family: Array<string>,
            country: string,
            state_now: States,
            created: Array<string>,
            firstApariation: FirstApariation,
            lastAparation: LastApariation,
            publising_company: PublisingCompany,
            operations: Array<string>,
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
