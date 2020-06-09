namespace Courses {
    interface Courses {
        name: string,
        rating?: number,
        progress: number
    }

    export function myCoursesUsingGenerics<Type>(nameCourse: Type): void {
        console.log(nameCourse)
    }
    export function myCoursesUsingInterfaces(props: Courses): void {
        console.log(props)
    }
    export function allPropsMyCourses<T>(props: T[]): void {
        console.log(props)
    }
    export function scriptsNPM<Courses>(props: Courses[]): Courses[] {
        return props
    }

    export namespace Techs {
        export function techsWeb<T>(name: T): T {
            return name
        }
        export function techsMobile<T>(name: T[]): T[] {
            return name
        }
        export function ageWars<Type>(name: Type[]): Type[] {
            return name
        }
    }
}

type API = { name: string, age: number }

const api = {
    name: 'Felipe',
    rating: 18,
    progress: 70
}


console.log(Courses.Techs.ageWars<number>([1940, 1941]))
console.log(Courses.Techs.techsMobile<string>(['Flutter', 'Kotlin']))

console.log(Courses.Techs.techsWeb<string>('Javascript'))

Courses.myCoursesUsingInterfaces(api)
Courses.myCoursesUsingGenerics<string>('Curso de Desenvolvimento Web')
Courses.myCoursesUsingGenerics('Curso de Desenvolvimento Web') // inferencia de tipos
Courses.allPropsMyCourses(['Curso de Typescript', 5, 70])
console.log(Courses.scriptsNPM<string>(['Dev', 'Run']))



namespace OtherGenerics {
    export function lorem<T>(props: T): void {
        console.log(props)
    }
    export function filitation<Type>(a: Type): void {
        console.log(a)
    }
    export function login<Log>(login: Log): void {
        console.log(login)
    }
    export function physics<Type>(props: Type): void {
        console.log(props)
    }
}

enum ID {
    first = 1,
    second,
    third,
    four
}
type lorem = {
    readonly id: number,
    name: string,
    readonly cpf: number,
    readonly rg: number,
    readonly signo: string
}
type filiation = {
    readonly id: number
    mother: string,
    father: string
}
type login = {
    readonly id: number
    email: string
    password: string
}
type pyhsics = {
    height: string,
    weight: number,
    readonly blood_type: string
}
const objo: lorem = {
    id: ID.first,
    name: 'Felipe',
    cpf: 29175210584,
    rg: 294706835,
    signo: 'Escorpião'
}
const objFiliation: filiation = {
    ...objo,
    mother: 'Malu Adriana',
    father: 'Iago Anderson Theo Vieira'
}
const objLogin: login = {
    ...objo,
    ...objFiliation,
    email: 'isabellasarahisisvieira..isabellasarahisisvieira@raffinimobiliario.com.br',
    password: '9iqJQPZXR5'
}
const allPropsAndPhysic: pyhsics = {
    ...objo,
    ...objFiliation,
    ...objLogin,
    weight: 50,
    blood_type: 'AB+',
    height: '1.50'
}
OtherGenerics.lorem<Object>(objo)
OtherGenerics.filitation<Object>(objFiliation)
OtherGenerics.login<Object>(objLogin)
OtherGenerics.physics<Object>(allPropsAndPhysic)

