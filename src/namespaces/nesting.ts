namespace Geometry {
  export namespace Area {
    const PI = Math.PI
    
    export function circumference(lightning: number): number{
      return PI * Math.pow(lightning, 2)
    }
    
    export function rectangule(base: number, height: number) : number{
      return base * height 
    }
  }
  
}
console.log(Geometry.Area.circumference(10));
console.log(Geometry.Area.rectangule(10, 20));
