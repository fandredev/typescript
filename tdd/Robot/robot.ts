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

const created = new Robot.RobotAPI(
    'Robot M.Z', 'Branca', 1.90, true, false, ['Luby S.A', 'Software S.O'], ['Brasil', 'Canadá'], 74.000, ['Javascript', 'C', 'C#']
)

type Questions = 'Resolve SGBD implementations'
type Tech = 'Migrate JS to TS files and using Deno'
interface I_InfoRobots {
    year: number,
    finished: boolean,
    site: string,
    store: boolean
}
interface I_Success_Robot_Finished extends I_InfoRobots { success: boolean | undefined }
class Production implements I_Success_Robot_Finished {
    readonly year: number = 2020
    public finished: boolean
    public site: string
    readonly store: boolean
    readonly success: boolean
    constructor(y: number, f: boolean, ss: string, sss: boolean, ssss: boolean) {
        this.year = y; this.finished = f; this.site = ss; this.store = sss; this.success = ssss
    }
    get getSuccessRobotFinished() { return this.finished }
    set yearConclusionRobot(finished: boolean) { this.finished = finished }
    public implementationsOpenedNewYears(params: Questions, params2: Tech): string {
        return `${params} | ${params2}`
    }
}

let createdRobot =
    new Production(2020, true, 'www.robot.io', true, true)
// .implementationsOpenedNewYears('Resolve SGBD implementations', 'Migrate JS to TS files and using Deno')
const createds = {
    createdRobot,
    created,
    implementations: ['Resolve SGBD implementations', 'Migrate JS to TS files and using Deno']
}
Object.preventExtensions(createds)
console.log(createds)
