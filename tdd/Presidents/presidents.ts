import { I_SixPresidentsBrazil } from './interface'
namespace SixthRepublic {
    abstract class SixthRepublic<Str, Bool> implements I_SixPresidentsBrazil<Str, Bool> {
        name: Str
        broken: Str
        term_office: Str
        vice: Str
        current: Bool
        reelection: Bool
        corrupt?: Str
        constructor(name: Str, broken: Str, term_office: Str, vice: Str, current: Bool, reelection: Bool, corrupt?: Str) {
            this.name = name
            this.broken = broken
            this.term_office = term_office
            this.vice = vice
            this.current = current
            this.reelection = reelection
            this.corrupt = corrupt

        }
    }
    export class Presidents<Str, Bool> extends SixthRepublic<Str, Bool> {
        public name: Str
        public broken: Str
        public term_office: Str
        public vice: Str
        public current: Bool
        public reelection: Bool
        public corrupt?: Str

        constructor(name: Str, broken: Str, term_office: Str, vice: Str, current: Bool, reelection: Bool, corrupt?: Str) {
            super(name, broken, term_office, vice, reelection, current, corrupt)
            this.name = name
            this.broken = broken
            this.term_office = term_office
            this.vice = vice
            this.current = current
            this.reelection = reelection
            this.corrupt = corrupt
        }
        get viewPresident() {
            return this.name
        }
    }
    export function viewMyPresidentNow<Str>(name: Str): Str { // poderia user um getter
        return name
    }
}

export const presidents = new SixthRepublic.Presidents<string, boolean>(
    'Deodoro da Fonseca',
    '',
    '2 anos e 8 dias',
    'Floariano Peixoto',
    false,
    false,
    'Não'
)

console.log(SixthRepublic.viewMyPresidentNow<string>('Bolsonaro'))
console.log(presidents)
