import type { FirstApariation, States, LastApariation, PublisingCompany } from '../types'

export interface I_XMem {
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
}