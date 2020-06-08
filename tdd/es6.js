"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var ES6;
(function (ES6) {
    var SpreadAndRest;
    (function (SpreadAndRest) {
        var cnpjFormatted = ['72.723.677/0001-69', '41.073.412/0001-39', '53.229.110/0001-96', '91.782.004/0001-24'];
        var cnpjNoFormatted = [72723677000169, 41073412000139, 53229110000196, 91782004000124];
        var cnpjs = __spreadArrays(cnpjFormatted, cnpjNoFormatted);
        console.log(cnpjs);
        var desc = [3, 2, 1];
        var asc = __spreadArrays([1, 2, 3], desc);
        var re = __spreadArrays([], asc);
        console.log(re);
    })(SpreadAndRest = ES6.SpreadAndRest || (ES6.SpreadAndRest = {}));
    var Destrucuring;
    (function (Destrucuring) {
        var fruits = {
            apple: 'Maça',
            orange: 'Laranja',
            limon: 'Limão'
        };
        var apple = fruits.apple, orange = fruits.orange, limao = fruits.limon;
        console.log(apple, orange, limao);
        var oneAndTwo = [1, 2];
        var f = oneAndTwo[0], s = oneAndTwo[1];
        console.log(f, s);
        function destrucuringParam(_a) {
            var first = _a[0], second = _a[1];
            console.log(first);
            console.log(second);
        }
        Destrucuring.destrucuringParam = destrucuringParam;
        var DestrucuringTuple;
        (function (DestrucuringTuple) {
            function destrucuringTuple() {
                var random = ['Abc', 20, true];
                var a = random[0], b = random[1], c = random[2];
                console.log(a, b, c, 'ABC');
            }
            DestrucuringTuple.destrucuringTuple = destrucuringTuple;
        })(DestrucuringTuple = Destrucuring.DestrucuringTuple || (Destrucuring.DestrucuringTuple = {}));
    })(Destrucuring = ES6.Destrucuring || (ES6.Destrucuring = {}));
    var ParamStandard;
    (function (ParamStandard) {
        function animal(name) {
            if (name === void 0) { name = 'Leão'; }
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