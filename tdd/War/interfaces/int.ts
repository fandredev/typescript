export interface I_War<Str, ArrayN, O, B> {
    name: Str,
    number_deaths: ArrayN,
    year: ArrayN,
    localization: Str,
    number_deaths_precision: B,
    site: Str,
    ref: Str,
    others?: O
}
