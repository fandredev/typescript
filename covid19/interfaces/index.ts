import type { Continents, Font } from '../type'

declare interface I_Covid19 {
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
}
export default I_Covid19