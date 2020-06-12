import { I_Success_Robot_Finished } from './interfaces'
import { Resources } from './classes'
import type { Questions, Tech } from './type'
namespace Robot {
    export class RobotAPI<S, N, B, ArrStr> extends Resources<S, N, B, ArrStr> {
        public techs: ArrStr
        constructor(
            public name: S,
            color: S,
            weight: N,
            think: B,
            talk: B,
            creators: ArrStr,
            country: ArrStr,
            price: N,
            techs: ArrStr
        ) {
            super(name, color, weight, think, talk, creators, country, price)
            this.techs = techs
        }
        get setTech(): any {
            return this.techs
        }
    }
}

const Ccreated = new Robot.RobotAPI(
    'Robot M.Z', 'Branca', 1.90, true, false, ['Luby S.A', 'Software S.O'], ['Brasil', 'Canadá'], 74.000, ['Javascript', 'C', 'C#']
)
console.log(Ccreated)
class Production<N, B, S> implements I_Success_Robot_Finished<N, B, S>  {
    readonly year: N
    public finished: B
    public site: S
    readonly store: B
    readonly success: B
    constructor(y: N, f: B, ss: S, sss: B, ssss: B) {
        this.year = y; this.finished = f; this.site = ss; this.store = sss; this.success = ssss
    }
    get getSuccessRobotFinished() { return this.finished }
    set yearConclusionRobot(finished: B) { this.finished = finished }
    public implementationsOpenedNewYears(params: Questions, params2: Tech): string {
        return `${params} | ${params2}`
    }
}

let createdRobot =
    new Production(2020, true, 'www.robot.io', true, true)
// .implementationsOpenedNewYears('Resolve SGBD implementations', 'Migrate JS to TS files and using Deno')
const createds = {
    createdRobot,
    Ccreated,
    implementations: ['Resolve SGBD implementations', 'Migrate JS to TS files and using Deno']
}
Object.preventExtensions(createds)
console.log(createds)


