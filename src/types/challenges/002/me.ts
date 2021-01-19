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


// Minha solução

export type Account = {
  balance: number,
  deposit: (value: number) => number
}

type AccountHolder = {
  name: string,
  contacts: Array<string>,
  accounts: Account
}

let accounts: Account = {
  balance: 3456,
  deposit(value: number) : number {
      return this.balance += value
  }
}

enum StaticInfos {
  name = 'Ana Silva',
  rh = '34567890',
  adm ='98765432'
}
const { name, rh, adm } = StaticInfos

let accountHolder: AccountHolder = {
  name,
  accounts,
  contacts: [rh, adm]
}

console.log(accountHolder.accounts.deposit(60000));
