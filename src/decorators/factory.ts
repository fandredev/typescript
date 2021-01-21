namespace Factory {
  @logClassIf(false)
  //  @decorator({
  //    a: 'Olá',
  //    b: 10
  //  })

  class EletricalAppliance {
    constructor(){
      console.log('Novo');

    }
  }

  function logClass(constructor: Function) {
    console.log(constructor);
  }

  function decoratorNull(_: Function) {}

  function logClassIf(value: boolean) {
    return value ? logClass: decoratorNull
  }

  function decorator({ a, b }: {a: string, b: number}) {
    return function(_: Function) : void {
      console.log(`${a} ${b}`);
    }
  }
}
