"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logarClasse(construtor) {
    console.log(construtor);
}
function decoratorVazio(_) { }
function logarClassesSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a + ' ', obj.b);
    };
}
function logarObjeto(constructor) {
    console.log('carregado');
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = this;
            console.log('antes');
            _this = _super.apply(this, args) || this;
            console.log('depois');
            return _this;
        }
        return class_1;
    }(constructor));
}
// @logarClasse
var Eletrodomestico = /** @class */ (function () {
    function Eletrodomestico() {
        console.log('novo...');
    }
    Eletrodomestico = __decorate([
        logarClassesSe(false)
        // @decorator({ a: 'Felipe', b: 18, c: 'Lindo' })
        // @logarObjeto
        ,
        imprimivel
    ], Eletrodomestico);
    return Eletrodomestico;
}());
function imprimivel(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
var eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
// Desafio Decorator perfilAdmin
var usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
};
var MudancaAdministrativa = /** @class */ (function () {
    function MudancaAdministrativa() {
    }
    MudancaAdministrativa.prototype.critico = function () {
        console.log('Algo crítico foi alterado!');
    };
    MudancaAdministrativa = __decorate([
        perfilAdmin
    ], MudancaAdministrativa);
    return MudancaAdministrativa;
}());
new MudancaAdministrativa().critico();
function perfilAdmin(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('sem permissao');
            }
            return _this;
        }
        return class_2;
    }(constructor));
}
//# sourceMappingURL=decorators.js.map