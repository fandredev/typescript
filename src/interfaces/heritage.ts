// Herança

interface A {
  a() : void
}
interface B {
  b() : void
}

interface ABC extends A, B {
  c(): void
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  b(): void {
    throw new Error("Method not implemented.");
  }
  a(): void {
    throw new Error("Method not implemented.");
  }
}
namespace Testing {

  export function testing(b: B) {

  }
}

Testing.testing(new RealAB)


abstract class AbstractABD implements A, B {
  b(): void {
    throw new Error("Method not implemented.");
  }
  a(): void {
    throw new Error("Method not implemented.");
  }
  abstract d() : void
}
