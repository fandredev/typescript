class Car<T> { 
  private velocityNow: number = 0

  constructor(brand: T, model: T, private velocityMax: number = 200) {}

  private alterVelocity(delta: number) : number { 
    const newVelocity = this.velocityNow + delta
    const velocityValid = newVelocity >= 0 && newVelocity <= this.velocityMax
    
    if(velocityValid) this.velocityNow = newVelocity
    else {
      this.velocityNow = delta > 0 ? this.velocityMax : 0
    }

    return this.velocityNow
  }

  public speedUp() : number {
    return this.alterVelocity(5)
  }

  public stop() : number {
    return this.alterVelocity(-10)
  }
}

const carOne = new Car<string>('Ford','Ka', 185)
console.log(carOne.speedUp());
console.log(carOne.speedUp());
console.log(carOne.stop());
console.log(carOne.speedUp());
console.log(carOne.speedUp());



