namespace String_ {
    interface InterfaceTeams {
        name: string,
        year: number,
        [success:string] : any
    }
    interface Positive {
        num: number
    }
    interface MyName {
        name?:string
    }
    interface MyProfession {
        name: string,
        age?:number,
        readonly profession: string
    }

    export function arrayWithReadOnly_(numm: Array<number>,strr: string ) : any{
        let a: ReadonlyArray<number> = numm
        let __name: string = strr
        console.log(a, __name)
        // a[0] = 12 // erro porq a props é somente leitura
    }
    export function sum(n1:number,n2:number): number {
        return n1 + n2
    }

    const positive_ : Positive = {num:1}
    console.log(positive_)

    export function returnListTimes(param: InterfaceTeams) : void {
        console.log(param.name, param.year)
    }

    export function returnMyName(name: MyName) {
        console.log(name)
    }

    export function returnMyProfession() : MyProfession {
        let desc: MyProfession = {name: 'Fabiano', profession: 'Faxineiro'}
        desc.name = 'Catarina'
        return desc
        // desc.profession = 'Engenheiro de Software' // erro porque a props myProfession é read only
    }
}
String_
String_.arrayWithReadOnly_([1,3,4],'Felipe')
let team = {
    name: 'São Paulo',
    year: 1930,
    success: 'São Paulo é um bom time'
}
let _name = {}
// let _name = {name:'Julia'}
let profession = {
    name: 'Janaína',
    profession: 'Dev'
}

Object.freeze(team)
Object.freeze(_name)
Object.freeze(profession)
String_.returnListTimes(team)
String_.returnMyName(_name)
console.log(String_.returnMyProfession())