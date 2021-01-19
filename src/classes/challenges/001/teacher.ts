/**
 * Class Produto
 *  - Atributos: nome, preço e desconto
 *  - Criar constructor
 *  - Obs1: Desconto é opcional (padrao = 0)
 *  - Criar dois produtos: passando dois e três parametros (0, 1)
 */


class Produto {
  constructor(
    public readonly nome: string,
    public preco: number,
    public discount: number= 0,
  ) {}
}

const prod1 = new Produto('Computador',4.20)
prod1.discount = 0.06

const prod2 = new Produto('Computador',4.20, 0.15)
