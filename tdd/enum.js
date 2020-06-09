"use strict";
// inferencia de tipo
var Enuns;
(function (Enuns) {
    let Num;
    (function (Num) {
        // Números
        Num[Num["zero"] = 0] = "zero";
        Num[Num["one"] = 1] = "one";
        Num[Num["two"] = 2] = "two";
    })(Num || (Num = {}));
    let Inicializer;
    (function (Inicializer) {
        Inicializer[Inicializer["number"] = 15] = "number";
        Inicializer[Inicializer["numberRandom"] = 20] = "numberRandom";
        Inicializer[Inicializer["n"] = 21] = "n"; // 21
    })(Inicializer || (Inicializer = {}));
    let State;
    (function (State) {
        State["ok"] = "S\u00E3o Paulo";
        State["other"] = "Rio de Janeiro";
        State["good"] = "Pernanbuco";
        State["peaceful"] = "Amazonas";
        State["danger"] = "S\u00E3o Paulo";
    })(State || (State = {}));
    let a;
    (function (a) {
        a["a"] = "Rio de Janeiro";
    })(a || (a = {}));
    console.log(Num.zero + Num.one);
    console.log(Inicializer.n);
    console.log(Inicializer.numberRandom);
    console.log(Inicializer.numberRandom + Num.two);
    console.log(State.danger);
    console.log(a.a);
    function viewNumberZero(num) {
        if (num.props !== Num.zero)
            return Num.two;
        else
            return num.props;
    }
    console.log(viewNumberZero({ props: 2 }));
    let e;
    (function (e) {
        e[e["a"] = 0] = "a";
    })(e || (e = {}));
    let field = e.a; // pegar index = 0
    let fieldE = e[field]; // pegar valor = A
    console.log(field, fieldE);
})(Enuns || (Enuns = {}));
var EnunsSpeciais;
(function (EnunsSpeciais) {
    const brasilWinCupYears = [
        0 /* First */,
        1 /* Second */,
        2 /* Third */,
        3 /* Four */,
        4 /* Five */,
    ];
    console.log(brasilWinCupYears);
    let v = Values.A;
    console.log(v);
})(EnunsSpeciais || (EnunsSpeciais = {}));
//# sourceMappingURL=enum.js.map