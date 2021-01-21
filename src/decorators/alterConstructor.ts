function logClass(constructor: Function) {
  console.log(constructor);
}

function decoratorNull(_: Function) {}

export function logClassIf(value: boolean) {
  return value ? logClass: decoratorNull
}

function decorator({ a, b }: {a: string, b: number}) {
  return function(_: Function) : void {
    console.log(`${a} ${b}`);
  }
}


@logObject
export class EletricalAppliance {
  constructor(){
    console.log('Novo');

  }
}
type Constructor = {new(...args: any[]): {} }


function logObject(constructor: Constructor){
  return class extends constructor {
    constructor(...args: any[]) {
      console.log('Antes');
      super(...args)
      console.log('Depois');

    }
  }
}

new EletricalAppliance()
new EletricalAppliance()
