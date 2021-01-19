class Mathematics {
  static PI:number = Math.PI

  static areaCirc(lighting: number) : number {
    return this.PI * lighting * lighting
  }
}

console.log(Mathematics.areaCirc(4));
