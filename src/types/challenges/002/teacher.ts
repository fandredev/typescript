/**
  let contaBancaria = {
      saldo: 3456,
      depositar(valor) {
          this.saldo += valor
      }
  }
 
  let correntista = {
      nome: 'Ana Silva',
      contaBancaria: contaBancaria,
      contatos: ['34567890', '98765432']
  }
  
  correntista.contaBancaria.depositar(3000)
  console.log(correntista)


  -> Transforme o código acima de js para typescript
 */

// Solução do Professor

type ContaBancaria = {
  saldo: number,
  depositar: (valor:number) => void
}

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number) {
      this.saldo += valor
  }
}

type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: string[]
}

let correntista: Correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)
