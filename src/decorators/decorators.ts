@logClass
class EletricalAppliance {
  constructor(){
    console.log('Novo');

  }
}

function logClass(constructor: Function) {
  console.log(constructor);
}
