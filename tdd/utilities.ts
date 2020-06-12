interface I_Name {
    name: string
}
let nameRandom: Readonly<I_Name> = { // utility de readonly. poderia passar na interface tb
    name: 'Felipe'
}
// nameRandom.name = 'Julia' // erro pq é readonly
console.log(nameRandom)
function Fconstructor<PropsS, PropsN>(props: PropsS, propsN: PropsN): Readonly<PropsS> {
    console.log(propsN)
    return props
}
Fconstructor<string, number>('Teste construtor + readonly', 123)
console.log(Fconstructor)
// using pick

interface I_Phones<S, N, B> {
    title: S,
    number: N,
    ok: B
}

type PickInterface = Pick<I_Phones<string, number, boolean>, 'number' | 'ok'> // Pegar apenas propriedades especificas e não o obj de interface todo

const phones: PickInterface = {
    number: 1234232,
    ok: true
}
console.log(phones)

type OmitI_Phones = Omit<I_Phones<string, number, boolean>, 'number' | 'ok'> // Omite todos os atributos que são passados

const omitPhones: OmitI_Phones = {
    title: 'Telefone x'
}
console.log(omitPhones)


type Wars = '1° Guerra Mundial' | '2° Guerra Mundial'

// Required

interface I_Props<B> {
    a: B,
    b: B
}

const PropsInt: Required<I_Props<boolean>> = {
    a: true,
    // b: false // erro pq todas as props da int sao requiridas
    b: false
}
console.log(PropsInt)

// return type

type Func = ReturnType<(<S>() => S)> // Cria um type que faz retornos de funções

function returnObj<obj>(props: obj): Func {
    return { props }
}

console.log(returnObj<object>({ props: 'Alguma coisa' }))

// Record
interface I_ConstructProps<_Props> {
    number: _Props
}
type Values = 'Value_Sale' | 'Value_Discount' | 'Value_Now'

const Record: Record<Values, I_ConstructProps<number>> = { // Pega props de type e atribui a um objeto referenciando a interface
    Value_Sale: { number: 1500 },
    Value_Discount: { number: 150 },
    Value_Now: { number: 1800 },
}
console.log(Record)