class Plane {
  public readonly model: string

  constructor(model: string, public readonly prefix: string) {
    this.model = model
  }
}

const plane = new Plane('Airbus A350 XWB',' XWB')

plane.model = 'Cessna 172 Skyhawk.' // Error!
plane.prefix = 'XXX' // Error!

console.log(plane);
