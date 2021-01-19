/**
 * Criar um objeto funcionário com
 *   - Array de strings com os nomes dos supervisores
 *   - Função de bater ponto com que recebe a hora(numerico) e retorna uma string
 *      -> Ponto normal (<= 8)
 *      -> Fora do horário (> 8)
 */

// Minha solução
let employee: { supervisors: string[], hit_point: (hour: number) => string } = {
  supervisors: ['Felipe','André','Júnior'],
  hit_point: hour => {
    if(hour <= 8) return 'Ponto normal'
    else return 'Fora do Ponto'
  }
}

const { hit_point } = employee

console.log(hit_point(9));
