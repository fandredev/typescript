/**
 * Class Produto
 *  - Atributos: nome, preço e desconto
 *  - Criar constructor
 *  - Obs1: Desconto é opcional (padrao = 0)
 *  - Criar dois produtos: passando dois e três parametros (0, 1)
 */

enum Client {
  main = 'Computer i9',
  value = 100
}
namespace Products {
  const { value } = Client
  export class Product<T> {
    constructor(
      public readonly name: T,
      public price: number = Math.floor(Math.random() * value),
      public discount: number = 0,
    ) {}

    public applyDiscount() : number {
      const checkedDiscount = this.discount * value
      const multiply = this.price * checkedDiscount / value
      const _discount = this.price - multiply 
      return _discount
    }
    get getPrice() : number {
      return this.price 
    }
  }
}
const { main } = Client
const applyDiscount = new Products.Product<string>(main, 1500, 0.2).applyDiscount()

console.log(applyDiscount);
