import type { T_War } from '../types/types'

export const secondWar: T_War<string, number[], boolean, object> = {
    name: 'Outra guerra',
    number_deaths: [40000000, 70000000],
    year: [1206, 1324],
    localization: 'Leste Europeu e Sibéria',
    number_deaths_precision: false,
    site: 'https://pt.m.wikipedia.org/wiki/',
    ref: 'Lista_de_guerras_por_n%C3%BAmero_de_mortos',
}
export const data: T_War<string, number[], boolean, object> = {
    name: 'Segunda Guerra Mundial',
    number_deaths: [60000000, 85000000],
    year: [1939, 1945],
    localization: 'Global, majoritariamente Europa Ocidental',
    number_deaths_precision: false,
    site: 'https://pt.m.wikipedia.org/wiki/',
    ref: 'Lista_de_guerras_por_n%C3%BAmero_de_mortos',
    others: {
        secondWar
    }
}
