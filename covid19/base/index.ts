import { Font, Continents } from '../type'
import I_Covid19 from '../interfaces'

export abstract class Base implements I_Covid19 {
    name_disease: string
    localization_map: Continents
    country: string
    uf: string
    font: Font
    confirmed_cases: number
    confirmed_active: number
    confirmed_recover: number
    confirmed_deaths: number
    date: string
    constructor(
        name_disease: string,
        localization_map: Continents,
        country: string,
        uf: string,
        font: Font,
        confirmed_cases: number,
        confirmed_active: number,
        confirmed_recover: number,
        confirmed_deaths: number,
        date: string
    ) {
        this.name_disease = name_disease
        this.localization_map = localization_map
        this.country = country
        this.uf = uf
        this.font = font
        this.confirmed_cases = confirmed_cases
        this.confirmed_active = confirmed_active
        this.confirmed_recover = confirmed_recover
        this.confirmed_deaths = confirmed_deaths
        this.date = date
    }
}