// boolean (true,false)
let isOpen: boolean
isOpen = false

// str
let message: string
message = `foo ${isOpen}`
message = 'foo'
message = "Foo"

// number
let total: number
total = 20
total = 20.3
total = 0xff0

// array (type[])
let items: number[]
items = [1, 2, 3]

let values: Array<string>
values = ['String', '2', 'true']

// tuple
let title: [number, string]
title = [1, 'foo']

// enum
const enum Colors {
    white = '#fff',
    black = '#000'
}

// any
let coisa: any
coisa = true
coisa = 'true'
coisa = []
coisa = {}
coisa = 1

// void (vazio)
function logger(): void {
    console.log('foo')
}

// null | undefined

// never
function error(): never {
    throw new Error('Erro')
}

// object

let carros: object
carros = {
    key: 'foo'
}

// type inference
let messagez = 'message'
// messagez = 1
messagez = 'string nova'

window.addEventListener('click', (e: MouseEvent) => {
    console.log(e.target)
})

