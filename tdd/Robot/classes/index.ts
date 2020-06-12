import { I_Robot } from '../interfaces'

export abstract class Resources<S, N, B, ArrStr> implements I_Robot<S, N, B, ArrStr> {
    name: S
    color: S
    weight: N
    think: B
    talk: B
    creators: ArrStr
    country: ArrStr
    price: N
    constructor(n: S, c: S, weight: N, think: B, talk: B, creators: ArrStr, country: ArrStr, price: N) {
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