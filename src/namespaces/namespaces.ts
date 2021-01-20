namespace Areas {

  const PI = Math.PI
  
  export function circumference(lightning: number): number{
    return PI * Math.pow(lightning, 2)
  }
  
  export function rectangule(base: number, height: number) : number{
    return base * height 
  }
  
}
console.log(Areas.circumference(10));
console.log(Areas.rectangule(10, 20));
