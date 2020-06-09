"use strict";
var Functions;
(function (Functions) {
    function multi(x, y) {
        return x * y;
    }
    Functions.multi = multi;
    function multiExtends(props) {
        return props.x * props.y;
    }
    Functions.multiExtends = multiExtends;
    var abc = function (a, b) { return a + b; };
    console.log(abc(10, 2));
    function functionWithLetLocal(props) {
        var c = 10;
        return props.x + props.x + c;
    }
    Functions.functionWithLetLocal = functionWithLetLocal;
    function nameDoctor(name, age) {
        if (name === void 0) { name = 'Bob'; }
        var a = age === undefined ? '' : age;
        var b = name === undefined ? '' : name;
        var all = a + b;
        return all;
    }
    Functions.nameDoctor = nameDoctor;
    // export function nameOffice(name: string = 'James', age?: number = 20): void {
    //     console.log(name)
    // }
})(Functions || (Functions = {}));
// console.log(Functions.multi(3,2))
console.log(Functions.multiExtends({ x: 3, y: 2 }));
console.log(Functions.functionWithLetLocal({ x: 3, y: 2 }));
console.log(Functions.nameDoctor('Patricio'));
console.log(Functions.nameDoctor());
console.log(Functions.nameDoctor('Patricio ', 15));
// console.log(Functions.nameOffice('Patricio'))
//# sourceMappingURL=funcao.js.map