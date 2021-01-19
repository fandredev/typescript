
// Type Alias
type Employee = {
  supervisors: string[], 
  hit_point: (hour: number) => string
}

enum StaticNames {
  main = 'Beatriz',
  secondary = 'Carlos'
}
const { main, secondary } = StaticNames


export let employee: Employee = {
  supervisors: [main, secondary],
  hit_point: hour => {
    if(hour <= 8) return 'Ponto normal'
    else return 'Fora do Ponto'
  }
}

const { hit_point } = employee

console.log(hit_point(9));
