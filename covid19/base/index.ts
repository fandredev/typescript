import { Font, Continents } from '../type'
import I_Covid19 from '../interfaces'

export abstract class Base<str, num> implements I_Covid19<str, num> {
    name_disease: str
    localization_map: Continents
    country: str
    uf: str
    font: Font
    confirmed_cases: num
    confirmed_active: num
    confirmed_recover: num
    confirmed_deaths: num
    date: str
    constructor(
        name_disease: str,
        localization_map: Continents,
        country: str,
        uf: str,
        font: Font,
        confirmed_cases: num,
        confirmed_active: num,
        confirmed_recover: num,
        confirmed_deaths: num,
        date: str
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