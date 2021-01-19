/**
 * Criar um objeto funcionário com
 *   - Array de strings com os nomes dos supervisores
 *   - Função de bater ponto com que recebe a hora(numerico) e retorna uma string
 *      -> Ponto normal (<= 8)
 *      -> Fora do horário (> 8)
 */

// Solução do professor

let funcionario: {
  supervisores: string[],
  baterPonto: (horas: number) => string
} = {
  supervisores: ['Ana','Fernando'],
  baterPonto(horario:number) : string {
    if(horario <= 8) {
      return 'Ponto normal'
    }
    else {
      return 'Fora do horário'
    }
  }
}

console.log(funcionario.supervisores);

console.log(funcionario.baterPonto(9));
