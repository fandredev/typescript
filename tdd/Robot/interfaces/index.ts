export interface I_Robot {
    readonly name: string,
    color: string,
    weight: number,
    think?: boolean,
    talk?: boolean,
    readonly creators: Array<string> | undefined,
    readonly country: Array<string> | undefined,
    price: number
}
export interface I_InfoRobots {
    year: number,
    finished: boolean,
    site: string,
    store: boolean
}
export interface I_Success_Robot_Finished extends I_InfoRobots { success: boolean | undefined }

export interface I_futureRobot extends I_Success_Robot_Finished {
    name: boolean | number
}