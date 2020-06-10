"use strict";
var Calculator;
(function (Calculator) {
    class Base {
        constructor() {
            this.num = 0;
            this.num2 = 0;
            this.operator = '+';
        }
    }
    class Operation extends Base {
    }
    class NewC extends Operation {
        constructor(n, nn, operator) {
            super();
            this.num = 0;
            this.num2 = 0;
            this.operator = '+';
            this.num = n;
            this.num2 = nn;
            this.operator = operator;
        }
    }
    Calculator.NewC = NewC;
})(Calculator || (Calculator = {}));
// type Calc = { num: number, num2:number, operator:string}
const created = console.log(new Calculator.NewC(1, 2, "+"));
//# sourceMappingURL=heranca.js.map