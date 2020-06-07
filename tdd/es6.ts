namespace ES6 {
    export namespace SpreadAndRest {
        const cnpjFormatted: string[] = ['72.723.677/0001-69','41.073.412/0001-39','53.229.110/0001-96','91.782.004/0001-24']
        const cnpjNoFormatted: number[] = [72723677000169,41073412000139,53229110000196,91782004000124]
        const cnpjs: any = [...cnpjFormatted,...cnpjNoFormatted]
        console.log(cnpjs)

        let desc = [3,2,1]
        let asc = [1,2,3, ...desc]
        let re = [,...asc]
        console.log(re)

    }
    export namespace Destrucuring {
        const fruits = {
            apple: 'Maça',
            orange:'Laranja',
            limon:'Limão'
        }
        const { apple, orange, limon:limao} = fruits
        console.log(apple,orange,limao)

        const oneAndTwo: Array<number> = [1,2]
        let [f,s] = oneAndTwo
        console.log(f,s)

        export function destrucuringParam([first,second]: [number,number]) {
            console.log(first)
            console.log(second)
        }

        export namespace DestrucuringTuple {

            export function destrucuringTuple() : void {
                let random: [string,number,boolean] = ['Abc',20,true]
                let [a,b,c] = random

                console.log(a,b,c, 'ABC')
            }

        }
    }
    export namespace ParamStandard{
        export function animal(name: string = 'Leão') : void {
            console.log(name)
        }
    }
}

ES6.SpreadAndRest
ES6.Destrucuring
ES6.Destrucuring.destrucuringParam([10,2])
ES6.Destrucuring.DestrucuringTuple.destrucuringTuple()
ES6.ParamStandard.animal('Girafa')