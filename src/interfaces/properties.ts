namespace Objects {
  export interface Object {
    name: string
    day?: number // Atributo opcional,
    [prop: string] : any // Não sei o nome e o retorno dum próximo possível paramêtro
  }

  export function cut({ name, day = +new Date().getDay(), country }: Object) : string {
    return `I cut ${name} in ${day}. Country: ${country}`
  }
}

const object: Objects.Object = {
  name: 'Tesoura',
  country: 'Brasil'
}

console.log(Objects.cut(object));
