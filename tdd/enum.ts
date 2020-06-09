// inferencia de tipo
namespace Enuns {
    enum Num {
        // Números
        zero,
        one,
        two
    }
    enum Inicializer {
        number = 15,
        numberRandom = 20,
        n // 21
    }
    enum State {
        ok = 'São Paulo',
        other = 'Rio de Janeiro',
        good = 'Pernanbuco',
        peaceful = 'Amazonas',
        danger = ok
    }
    enum a {
        a = State.other
    }
    console.log(Num.zero + Num.one)
    console.log(Inicializer.n)
    console.log(Inicializer.numberRandom)
    console.log(Inicializer.numberRandom + Num.two)
    console.log(State.danger)
    console.log(a.a)

    function viewNumberZero(num: { props: number }): number {
        if (num.props !== Num.zero) return Num.two
        else
            return num.props
    }
    console.log(viewNumberZero({ props: 2 }))

    enum e {
        a
    }
    let field = e.a // pegar index = 0
    let fieldE = e[field] // pegar valor = A

    console.log(field, fieldE)

}
namespace EnunsSpeciais {
    // Enums constantes [ doc ]
    const enum BrasilWinCupYears { // const enum nunca muda e sempre sera incremental nunca o valor
        First,
        Second,
        Third,
        Four,
        Five
    }
    const brasilWinCupYears: Number[] = [
        BrasilWinCupYears.First,
        BrasilWinCupYears.Second,
        BrasilWinCupYears.Third,
        BrasilWinCupYears.Four,
        BrasilWinCupYears.Five,
    ]
    console.log(brasilWinCupYears)


    declare enum Values {
        A = BrasilWinCupYears.First,
        B = BrasilWinCupYears.Second
    }
    let v = Values.A
    console.log(v)



}