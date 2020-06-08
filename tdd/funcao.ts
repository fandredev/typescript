namespace Functions {
    interface Func {
        x: number,
        y: number
    }

    export function multi(x: number, y: number): number {
        return x * y
    }
    export function multiExtends(props: Func): number {
        return props.x * props.y
    }
    let abc = function (a: number, b: number) { return a + b }
    console.log(abc(10, 2))

    export function functionWithLetLocal(props: Func): number {
        let c = 10
        return props.x + props.x + c
    }
    export function nameDoctor(name: string = 'Bob', age?: number): string | number {
        const a = age === undefined ? '' : age
        const b = name === undefined ? '' : name
        const all = a + b
        return all
    }
    // export function nameOffice(name: string = 'James', age?: number = 20): void {
    //     console.log(name)
    // }
}

// console.log(Functions.multi(3,2))
console.log(Functions.multiExtends({ x: 3, y: 2 }))
console.log(Functions.functionWithLetLocal({ x: 3, y: 2 }))
console.log(Functions.nameDoctor('Patricio'))
console.log(Functions.nameDoctor())
console.log(Functions.nameDoctor('Patricio ', 15))
// console.log(Functions.nameOffice('Patricio'))
