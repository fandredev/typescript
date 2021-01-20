export abstract class Operation<T, U> {
  constructor(protected op1: T, protected op2: T) {}

  abstract execute(): U
}

class SumBinary extends Operation<number, number> {
  public execute() : number {
    return this.op1 + this.op2
  }
}

console.log(new SumBinary(3,3).execute());
