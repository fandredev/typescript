var control = 'Controle'
console.log(control)
namespace Variables{
    export namespace Var {
        export function generateText(text:string): string {
            var b = 'Beleza'
            return `${text.toUpperCase()} ${b} ? `
        }
        var field = 'input'
        export function catchFieldVariable() : string {
            // console.log(b) // err
            var lala = field
            return lala
        }
        export function scopeVar () : boolean{
            var a = true
            return a
        }
    }
    export namespace Let {
        export function generateTextWithLet(type: string[] | number[] | any) :  string[] | number[] | any {
            return type
        }
    }

    export namespace Const {
        // const nameDirector = 'Paulo'

        // export function changeNameDirector(name: string) : string {
        //     nameDirector = name // erro pq eh const
        // }

        export const states: any = {
            sul:'Rio grande do Sul',
            sudeste:'São Paulo'
        }

        // states = { // erro
        //     sul: 'Paraná',
        //     sudeste: 'Rio de Janeiro'
        // }

        states.sul = 'Paraná' // ok
        states.sudeste = 'Rio de Janeiro'
    }
}
console.log(Variables.Var.generateText('Tudo'))
console.log(Variables.Var.catchFieldVariable())
console.log(Variables.Var.scopeVar())

// let
console.log(Variables.Let.generateTextWithLet([2010,2012,20,3.4,0.10,1000,'Felipe']))

// const
// console.log(Variables.Const.changeNameDirector('Geraldo'))



// aninhament

console.log(aa)
var aa
// erro porque bb se mantem na linha 38 e com var o escopo sobe pra linha 1,2,3 e como o valor nao foi iniciado dá undefined na linha 36
// console.log(bb) 
// let bb
