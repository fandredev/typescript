import { BaseGalaxies as BG } from './class'
import { nameGalaxy as n1, nameGalaxy as n2 } from './global'
namespace Gal {
    export class Galaxies<S> extends BG<S> {
        public readonly name: S
        public readonly constelation: S
        image: S
        note: S
        protected type: S
        constructor(name: S, constelation: S, image: S, note: S, type: S) {
            super(name, constelation, image, note)
            this.name = name
            this.constelation = constelation
            this.image = image
            this.note = note
            this.type = type
        }

        get imageGalaxy(): any {
            return this.image
        }
    }
}

const newReg = new Gal.Galaxies<string>(
    `${n1}`,
    'Coma Berenices',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Blackeyegalaxy.jpg/70px-Blackeyegalaxy.jpg',
    '',
    'Ela tem uma faixa escura espetacular de observar a poeira na frente do núcleo brilhante da galáxia, dando origem a seus apelidos do "Olho Negro" e "Olho Mau".'
)
console.log(newReg.generateGalaxie(
    `${n2}`,
    'Ursa Major',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Messier_81_HST.jpg/70px-Messier_81_HST.jpg',
    '',
    'Nomeado pelo Johann Elert Bode, que descobriu esta galáxia em 1774.'
))
const usingGetSetters: Partial<string> = newReg.imageGalaxy
console.log(usingGetSetters)
