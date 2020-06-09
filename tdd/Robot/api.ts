namespace Robot {
    interface I_Robot {
        readonly name: string,
        color: string,
        weight: number,
        think?: boolean,
        talk?: boolean,
        readonly creators: Array<string> | undefined,
        readonly country: Array<string> | undefined,
        price: number

    }
    abstract class Resources implements I_Robot {
        name: string
        color: string
        weight: number
        think: boolean
        talk: boolean
        creators: Array<string>
        country: string[]
        price: number

        constructor(n: string, c: string, weight: number, think: boolean, talk: boolean, creators: Array<string>, country: Array<string>, price: number) {
            this.name = n
            this.color = c
            this.weight = weight
            this.think = think,
                this.talk = talk,
                this.creators = creators,
                this.country = country,
                this.price = price
        }
    }
    export class RobotAPI extends Resources {
        public techs: Array<string>

        constructor(
            public name: string,
            color: string,
            weight: number,
            think: boolean,
            talk: boolean,
            creators: Array<string>,
            country: Array<string>,
            price: number,
            techs: Array<string>
        ) {
            super(name, color, weight, think, talk, creators, country, price)
            this.techs = techs
        }
    }
}

export const created = new Robot.RobotAPI(
    'Robot M.Z', 'Branca', 1.90, true, false, ['Luby S.A', 'Software S.O'], ['Brasil', 'Canadá'], 74.000, ['Javascript', 'C', 'C#']
)
