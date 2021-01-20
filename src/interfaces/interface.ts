namespace Interface {
  export interface People {
    name: string
    age: number
  }

  export function salute(people: People) : void {
    console.log(` Olá ${people.name}`);
  }
  export function changeName(people: People) : void {
    people.name = 'José'
  }

  export const people: People = {
    name: 'João',
    age: 15
  }
}

Interface.salute(Interface.people)
Interface.changeName(Interface.people)
Interface.salute(Interface.people)
