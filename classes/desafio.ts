class Produto {
    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0
    ){}
}
let product = new Produto('Maquina de lavar',600)
let product2 = new Produto('Nootbook',1500,0.5)
console.log(product, product2)