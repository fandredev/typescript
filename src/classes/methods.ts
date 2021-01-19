export class Produto {
  constructor(
    public readonly name: string,
    public price: number,
    public discount: number= 0,
  ) {}

  public resume() : string {
    return `${this.name} custa R$${this.price} (${this.discount * 100}%) off `
  }
}

const prod1 = new Produto('Computer',4.20)
prod1.discount = 0.06
console.log(
  prod1.resume()
);
const prod2 = new Produto('Phones',4.20, 0.15)
console.log(
  prod2.resume()
);