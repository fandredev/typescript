export type T_War<S, AN, B, O> = {
    name: S,
    number_deaths: AN,
    year: AN,
    localization: S,
    number_deaths_precision: B,
    site: S,
    ref: S,
    others?: O
}

export type ReturnFuncWar = ReturnType<(<ReturnFunc>() => ReturnFunc)>

