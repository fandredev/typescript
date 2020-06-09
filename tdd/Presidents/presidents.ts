namespace SixthRepublic {
    interface I_SixPresidentsBrazil {
        name: string,
        broken: string
        term_office: string
        vice: string
        current: boolean
        reelection: boolean
    }
    abstract class SixthRepublic implements I_SixPresidentsBrazil {
        name: string
        broken: string
        term_office: string
        vice: string
        current: boolean
        reelection: boolean
        corrupt?: string
        constructor(name: string, broken: string, term_office: string, vice: string, current: boolean, reelection: boolean, corrupt?: string) {
            this.name = name
            this.broken = broken
            this.term_office = term_office
            this.vice = vice
            this.current = current
            this.reelection = reelection
            this.corrupt = corrupt
        }
    }
    export class Presidents extends SixthRepublic {
        public name: string
        public broken: string
        public term_office: string
        public vice: string
        public current: boolean
        public reelection: boolean
        public corrupt?: string

        constructor(name: string, broken: string, term_office: string, vice: string, current: boolean, reelection: boolean, corrupt?: string) {
            super(name, broken, term_office, vice, reelection, current, corrupt)
            this.name = name
            this.broken = broken
            this.term_office = term_office
            this.vice = vice
            this.current = current
            this.reelection = reelection
            this.corrupt = corrupt
        }
    }
    export function viewMyPresidentNow(name: string): string {
        return name
    }
}

const presidents = new SixthRepublic.Presidents(
    'Deodoro da Fonseca',
    '',
    '2 anos e 8 dias',
    'Floariano Peixoto',
    false,
    false,
    'Não'
)

console.log(SixthRepublic.viewMyPresidentNow('Bolsonaro'))
console.log(presidents)
