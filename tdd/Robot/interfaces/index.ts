export interface I_Robot<S,N,B,ArrStr> {
    readonly name: S,
    color: S,
    weight: N,
    think?: B,
    talk?: B,
    readonly creators: ArrStr | undefined,
    readonly country: ArrStr | undefined,
    price: N
}
export interface I_InfoRobots<N,B,S> {
    year: N,
    finished: B,
    site: S,
    store: B
}
export interface I_Success_Robot_Finished<N,B,S> extends I_InfoRobots<N,B,S> { success: B | undefined }

export interface I_futureRobot<N,B,S> extends I_Success_Robot_Finished<N,B,S> {
    name: B | N
}