namespace Heritage {
  export class Me {
    constructor(protected name: string, age: number = 18){} // Com o protected consigo passar os atributos por herança

    get getMyName(){
      return this.name
    }
  }
}

class People extends Heritage.Me {
  constructor(age: number = 18){
    super('', age)
  }
  get getMyName(){
    return this.name
  }
}

const peoples = new People(20)
console.log(peoples);
