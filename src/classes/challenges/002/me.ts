/**
 * Criar metódo preco com desconto
 * Quais são os parametros e o retorno?
 * Alterar metodo resumo para mostrar o preço com desconto
 */

export class Product {
  constructor(
    public readonly name: string,
    public price: number,
    public discount: number = 0,
    public priceWithDiscounts?: number
  ) {}

  public resume() : number {
    return this.priceWithDiscounts
  }
  
  priceWithDiscount(price: number, discount: number) : number {
    const checkedDiscount = discount * price
    const multiply = price * checkedDiscount / price
    const _discount = price - multiply
    this.priceWithDiscounts = _discount


    return this.priceWithDiscounts
  }
}

const prod1 = new Product('Computer',4.20)
prod1.discount = 0.06

const prod2 = new Product('Phones',4.20, 0.15)
console.log(prod2.priceWithDiscount(100, 0.3));
console.log(prod2.resume());
