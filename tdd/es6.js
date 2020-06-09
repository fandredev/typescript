"use strict";
var ES6;
(function (ES6) {
    let SpreadAndRest;
    (function (SpreadAndRest) {
        const cnpjFormatted = ['72.723.677/0001-69', '41.073.412/0001-39', '53.229.110/0001-96', '91.782.004/0001-24'];
        const cnpjNoFormatted = [72723677000169, 41073412000139, 53229110000196, 91782004000124];
        const cnpjs = [...cnpjFormatted, ...cnpjNoFormatted];
        console.log(cnpjs);
        let desc = [3, 2, 1];
        let asc = [1, 2, 3, ...desc];
        let re = [, ...asc];
        console.log(re);
    })(SpreadAndRest = ES6.SpreadAndRest || (ES6.SpreadAndRest = {}));
    let Destrucuring;
    (function (Destrucuring) {
        const fruits = {
            apple: 'Maça',
            orange: 'Laranja',
            limon: 'Limão'
        };
        const { apple, orange, limon: limao } = fruits;
        console.log(apple, orange, limao);
        const oneAndTwo = [1, 2];
        let [f, s] = oneAndTwo;
        console.log(f, s);
        function destrucuringParam([first, second]) {
            console.log(first);
            console.log(second);
        }
        Destrucuring.destrucuringParam = destrucuringParam;
        let DestrucuringTuple;
        (function (DestrucuringTuple) {
            function destrucuringTuple() {
                let random = ['Abc', 20, true];
                let [a, b, c] = random;
                console.log(a, b, c, 'ABC');
            }
            DestrucuringTuple.destrucuringTuple = destrucuringTuple;
        })(DestrucuringTuple = Destrucuring.DestrucuringTuple || (Destrucuring.DestrucuringTuple = {}));
    })(Destrucuring = ES6.Destrucuring || (ES6.Destrucuring = {}));
    let ParamStandard;
    (function (ParamStandard) {
        function animal(name = 'Leão') {
            console.log(name);
        }
        ParamStandard.animal = animal;
    })(ParamStandard = ES6.ParamStandard || (ES6.ParamStandard = {}));
})(ES6 || (ES6 = {}));
ES6.SpreadAndRest;
ES6.Destrucuring;
ES6.Destrucuring.destrucuringParam([10, 2]);
ES6.Destrucuring.DestrucuringTuple.destrucuringTuple();
ES6.ParamStandard.animal('Girafa');
//# sourceMappingURL=es6.js.map