export namespace Greet {
    export function sayHello<type>(props: type) {
        return `Hello from ${props}`
    }
}
