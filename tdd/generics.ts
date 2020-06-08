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
}
type API = { name: string, age: number }

const api = {
    name: 'Felipe',
    rating: 18,
    progress: 70
}

Courses.myCoursesUsingInterfaces(api)
Courses.myCoursesUsingGenerics<string>('Curso de Desenvolvimento Web')
Courses.myCoursesUsingGenerics('Curso de Desenvolvimento Web') // inferencia de tipos
Courses.allPropsMyCourses(['Curso de Typescript', 5, 70])
console.log(Courses.scriptsNPM<string>(['Dev', 'Run']))
