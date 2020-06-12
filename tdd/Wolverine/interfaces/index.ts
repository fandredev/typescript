import type { FirstApariation, States, LastApariation, PublisingCompany } from '../types'

export interface I_XMem<N, S, arrS> {
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
}