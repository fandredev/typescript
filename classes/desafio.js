"use strict";
var Produto = /** @class */ (function () {
    function Produto(nome, preco, desconto) {
        if (desconto === void 0) { desconto = 0; }
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    return Produto;
}());
var product = new Produto('Maquina de lavar', 600);
var product2 = new Produto('Nootbook', 1500, 0.5);
console.log(product, product2);
//# sourceMappingURL=desafio.js.map