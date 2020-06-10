import { I_Robot } from '../interfaces'

export abstract class Resources implements I_Robot {
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