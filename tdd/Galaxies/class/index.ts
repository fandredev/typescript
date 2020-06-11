import { Galaxies } from '../interfaces'

export abstract class BaseGalaxies<S> implements Galaxies<S> {
    public readonly name: S
    readonly constelation: S
    image: S
    note: S
    constructor(name: S, constelation: S, image: S, note: S) {
        this.name = name
        this.constelation = constelation
        this.image = image
        this.note = note
    }
    generateGalaxie<N, C, I, Note>(galaxies: N, constelation: C, image: I, note: Note, type: S): object {
        let object = {
            name: galaxies,
            constelation,
            image,
            note,
            type
        }
        return object
    }
}
