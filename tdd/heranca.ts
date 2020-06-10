namespace Calculator {
    interface NumberOperations {
        num: number | undefined,
        num2: number | undefined,
        operator: string
    }
    abstract class Base implements NumberOperations {
        public num: number | undefined = 0
        public num2: number | undefined = 0
        public readonly operator: string = '+'
    }
    class Operation extends Base { }
    export class NewC extends Operation {
        public num: number | undefined = 0
        public num2: number | undefined = 0
        public readonly operator: string = '+'
        constructor(n: number, nn: number, operator: string) {
            super()
            this.num = n
            this.num2 = nn
            this.operator = operator
        }
    }
}
// type Calc = { num: number, num2:number, operator:string}
const created: void = console.log(new Calculator.NewC(1, 2, "+"))
