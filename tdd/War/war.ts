import { I_War } from './interfaces/int'
import { data } from './data/data'
import { ID } from './enuns/enum'
import type { ReturnFuncWar } from './types/types'

namespace War {
    export function viewDeaths(field: I_War<string, Array<number>, object, boolean>): ReturnFuncWar {
        const obj = {
            id: ID.primary,
            name: field.name,
            precision: field.number_deaths_precision === false ? 'Não há dados precisos' : field.number_deaths_precision,
            complete_site: field.site.concat(field.ref),
            number_deaths: field.number_deaths.join('-'),
            year: field.year.join('-'),
            site: field.site,
            ref: field.ref,
            others: field.others
        }
        return obj
    }

}

console.log(War.viewDeaths(data))
