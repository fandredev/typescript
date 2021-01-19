abstract class Calculator {
  protected result: number

  abstract execute(...numbers: number[]) : void

  getResult() : number {
    return this.result
  }
}

class Sum extends Calculator {
  execute(...numbers: number[]) : void {
    this.result = numbers.reduce((t, a) => t + a, 1)
  }
}

class Multiply extends Calculator {
  execute(...numbers: number[]) : void {
    this.result = numbers.reduce((t, a) => t * a, 1)
  }
}

let c1: Sum = new Sum()
c1.execute(1,4,7,5)

console.log(c1.getResult());

let c2: Multiply = new Multiply()
c2.execute(1,4,7,5)

console.log(c2.getResult());
