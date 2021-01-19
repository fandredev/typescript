/**
 * Criar metódo preco com desconto
 * Quais são os parametros e o retorno?
 * Alterar metodo resumo para mostrar o preço com desconto
 */

export class Produto {
  constructor(
    public readonly name: string,
    public price: number,
    public discount: number = 0,
  ) {}

  public resume() : string {
    return `${this.name} custa R$${this.precoComDesconto()} (${this.discount * 100}%) off `
  }
  
  precoComDesconto() : number {
    return this.price * (1 - this.discount)
  }
}

const prod1 = new Produto('Computer',4.20)
prod1.discount = 0.06

const prod2 = new Produto('Phones',4.20, 0.15)
console.log(prod2.precoComDesconto());
console.log(prod2.resume());
