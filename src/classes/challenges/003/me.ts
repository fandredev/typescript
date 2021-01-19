enum MotoCycle {
  main = 'Fazer 250'
}
// 1
class Motocycle {
  name: string = MotoCycle.main
  velocity: number = 0

  constructor(name: string, velocity: number) {
    this.name = name
    this.velocity = velocity
  }

  public honk() {
    console.log(`Toooooooooot!`)
  }
  public speedUp(delta: number = 0) : number {
    return this.velocity += delta
  }
}
const motocycle = new Motocycle('Ducati', 5)
motocycle.speedUp()
motocycle.honk()
motocycle.speedUp(30)

console.log(motocycle.velocity);


// 2

class Object2D {
  protected base: number = 0
  protected height: number = 0

  constructor(base: number, height: number) {}
}

class Rectangle extends Object2D {
  constructor(public base: number, height: number) {
    super(base, height)
    this.base = base
    this.height = height
  }

  public area() : number {
    return this.base * this.height
  }
}

const rectangule = new Rectangle(10, 2.3)

console.log(rectangule.area());


// 3

class Intern {
  public _first_name: string = ''

  get first_name() : string {
    return this._first_name
  }
  
  set first_name(value) {
    if(value.length >= 3) {
      this._first_name = value
    } else this.first_name = ''
  }
}
const intern = new Intern()
intern.first_name = 'Le'
console.log(intern);
