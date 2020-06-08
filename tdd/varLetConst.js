"use strict";
var control = 'Controle';
console.log(control);
var Variables;
(function (Variables) {
    var Var;
    (function (Var) {
        function generateText(text) {
            var b = 'Beleza';
            return text.toUpperCase() + " " + b + " ? ";
        }
        Var.generateText = generateText;
        var field = 'input';
        function catchFieldVariable() {
            // console.log(b) // err
            var lala = field;
            return lala;
        }
        Var.catchFieldVariable = catchFieldVariable;
        function scopeVar() {
            var a = true;
            return a;
        }
        Var.scopeVar = scopeVar;
    })(Var = Variables.Var || (Variables.Var = {}));
    var Let;
    (function (Let) {
        function generateTextWithLet(type) {
            return type;
        }
        Let.generateTextWithLet = generateTextWithLet;
    })(Let = Variables.Let || (Variables.Let = {}));
    var Const;
    (function (Const) {
        // const nameDirector = 'Paulo'
        // export function changeNameDirector(name: string) : string {
        //     nameDirector = name // erro pq eh const
        // }
        Const.states = {
            sul: 'Rio grande do Sul',
            sudeste: 'São Paulo'
        };
        // states = { // erro
        //     sul: 'Paraná',
        //     sudeste: 'Rio de Janeiro'
        // }
        Const.states.sul = 'Paraná'; // ok
        Const.states.sudeste = 'Rio de Janeiro';
    })(Const = Variables.Const || (Variables.Const = {}));
})(Variables || (Variables = {}));
console.log(Variables.Var.generateText('Tudo'));
console.log(Variables.Var.catchFieldVariable());
console.log(Variables.Var.scopeVar());
// let
console.log(Variables.Let.generateTextWithLet([2010, 2012, 20, 3.4, 0.10, 1000, 'Felipe']));
// const
// console.log(Variables.Const.changeNameDirector('Geraldo'))
// aninhament
console.log(aa);
var aa;
// erro porque bb se mantem na linha 38 e com var o escopo sobe pra linha 1,2,3 e como o valor nao foi iniciado dá undefined na linha 36
// console.log(bb) 
// let bb
//# sourceMappingURL=varLetConst.js.map