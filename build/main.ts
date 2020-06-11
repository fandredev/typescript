import { Greet } from './greet'
namespace Build {
    export function hello<T>(props: T): T {
        return props
    }
    export function showHello(name: string): void {
        const elt = document.getElementById('greeting')
        console.log(elt, name)
    }

}
console.log(Build.hello<string>('Felipe'))
console.log(Greet.sayHello('Felipe'))
console.log(Build.showHello('TypeScript'))