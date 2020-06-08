type Constructor = { new(...args: any[]): {} }
function logarClasse(construtor: Constructor) {
    console.log(construtor)
}
function decoratorVazio(_: Constructor): void { }

function logarClassesSe(valor: boolean) {
    return valor ? logarClasse : decoratorVazio
}

function decorator(obj: { a: string, b: number, c?: string }) {
    return function (_: Function): void {
        console.log(obj.a + ' ', obj.b)
    }
}
function logarObjeto(constructor: Constructor) {
    console.log('carregado')
    return class extends constructor {
        constructor(...args: any[]) {
            console.log('antes')
            super(...args)
            console.log('depois')
        }
    }
}
// @logarClasse
@logarClassesSe(false)
// @decorator({ a: 'Felipe', b: 18, c: 'Lindo' })
// @logarObjeto
@imprimivel
class Eletrodomestico {
    constructor() {
        console.log('novo...')
    }
}

// new Eletrodomestico
// new Eletrodomestico
// new Eletrodomestico
interface Eletrodomestico {
    imprimir(): void
}
function imprimivel(constructor: Function) {
    constructor.prototype.imprimir = function () {
        console.log(this)
    }
}
const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()


// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
}
@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}

new MudancaAdministrativa().critico()

function perfilAdmin<T extends Constructor>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args)
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('sem permissao')
            }
        }
    }
}