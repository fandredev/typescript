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
