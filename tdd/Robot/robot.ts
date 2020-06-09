const { created } = require('./api')
type Questions = 'Resolve SGBD implementations'
type Tech = 'Migrate JS to TS files and using Deno'
interface I_InfoRobots {
    year: number,
    finished: boolean,
    site: string,
    store: boolean
}
interface I_Success_Robot_Finished extends I_InfoRobots { success: boolean | undefined }
export class Production implements I_Success_Robot_Finished {
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
