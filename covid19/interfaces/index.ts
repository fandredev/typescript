import type { Continents, Font } from '../type'

declare interface I_Covid19<str, num> {
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
}
export default I_Covid19