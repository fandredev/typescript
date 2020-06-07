// tipo string

namespace TiposBasicos {
   export function generateTypeString(text:string):string{
    return text.toUpperCase()
   }
   export function generateTypeNumber(n:number):number {
       return n
   }
   export function generateTypeBool(type:boolean): boolean {
       return type
   }
   export function generateTypeArray(arr: Array<string>): string[] {
       return arr
   }

   export namespace OutrosTipos {
       export function generateNull(type: null) : null {
           return type
       }
       export function generateAny() : any {
            return 'Any'
       }
       export function generateUndefined(t:undefined) : undefined {
            return t
       }
       export function noReturn() : void {
           console.log('Function no returns')
       }
   }

   export namespace UnionTypes {
       export function generate(props: number | string) : number|string {
           return typeof props === 'string' ? 'String' : 'Number'
       }
   }
   
}
// obs any
let list: any[] = [1,2,false,'Oi',{},[]]
console.log(list,' Não sei o tipo que o array ira receber')

console.log(TiposBasicos.generateTypeString('felipe'))
console.log(TiposBasicos.generateTypeNumber(1))
console.log(TiposBasicos.generateTypeBool(false))
console.log(TiposBasicos.generateTypeArray(['Globo','SBT']))
console.log(TiposBasicos.OutrosTipos.noReturn())
console.log(TiposBasicos.OutrosTipos.generateNull(null))
console.log(TiposBasicos.OutrosTipos.generateAny())
console.log(TiposBasicos.OutrosTipos.generateUndefined(undefined))
console.log(TiposBasicos.UnionTypes.generate(1))

namespace Tupla {
    export const nameAndAge: [string,number] = ['Pedrinho',18]
    export const ageAndName: [number,string] = [18,'Julia']
    export const vehiclesModels: [Array<string>,Array<number>] = [['Gol','Citroen'],[2018,2015]]
    export const agePeople: [number[],string,string] = [[18,15],'Cristina','Douglas']
}
console.log(Tupla.nameAndAge)
console.log(Tupla.ageAndName)
console.log(Tupla.vehiclesModels)
console.log(Tupla.agePeople)

namespace Enum {
    export enum Numbers {
        numeroPar = 10,
        numeroImpar = 11
    }
}

let numberPar: Enum.Numbers = Enum.Numbers.numeroPar
let numberImpar: Enum.Numbers = Enum.Numbers.numeroImpar
console.log(numberPar + numberImpar)