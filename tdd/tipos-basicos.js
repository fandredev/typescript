"use strict";
// tipo string
var TiposBasicos;
(function (TiposBasicos) {
    function generateTypeString(text) {
        return text.toUpperCase();
    }
    TiposBasicos.generateTypeString = generateTypeString;
    function generateTypeNumber(n) {
        return n;
    }
    TiposBasicos.generateTypeNumber = generateTypeNumber;
    function generateTypeBool(type) {
        return type;
    }
    TiposBasicos.generateTypeBool = generateTypeBool;
    function generateTypeArray(arr) {
        return arr;
    }
    TiposBasicos.generateTypeArray = generateTypeArray;
    var OutrosTipos;
    (function (OutrosTipos) {
        function generateNull(type) {
            return type;
        }
        OutrosTipos.generateNull = generateNull;
        function generateAny() {
            return 'Any';
        }
        OutrosTipos.generateAny = generateAny;
        function generateUndefined(t) {
            return t;
        }
        OutrosTipos.generateUndefined = generateUndefined;
        function noReturn() {
            console.log('Function no returns');
        }
        OutrosTipos.noReturn = noReturn;
    })(OutrosTipos = TiposBasicos.OutrosTipos || (TiposBasicos.OutrosTipos = {}));
    var UnionTypes;
    (function (UnionTypes) {
        function generate(props) {
            return typeof props === 'string' ? 'String' : 'Number';
        }
        UnionTypes.generate = generate;
    })(UnionTypes = TiposBasicos.UnionTypes || (TiposBasicos.UnionTypes = {}));
})(TiposBasicos || (TiposBasicos = {}));
// obs any
var list = [1, 2, false, 'Oi', {}, []];
console.log(list, ' Não sei o tipo que o array ira receber');
console.log(TiposBasicos.generateTypeString('felipe'));
console.log(TiposBasicos.generateTypeNumber(1));
console.log(TiposBasicos.generateTypeBool(false));
console.log(TiposBasicos.generateTypeArray(['Globo', 'SBT']));
console.log(TiposBasicos.OutrosTipos.noReturn());
console.log(TiposBasicos.OutrosTipos.generateNull(null));
console.log(TiposBasicos.OutrosTipos.generateAny());
console.log(TiposBasicos.OutrosTipos.generateUndefined(undefined));
console.log(TiposBasicos.UnionTypes.generate(1));
var Tupla;
(function (Tupla) {
    Tupla.nameAndAge = ['Pedrinho', 18];
    Tupla.ageAndName = [18, 'Julia'];
    Tupla.vehiclesModels = [['Gol', 'Citroen'], [2018, 2015]];
    Tupla.agePeople = [[18, 15], 'Cristina', 'Douglas'];
})(Tupla || (Tupla = {}));
console.log(Tupla.nameAndAge);
console.log(Tupla.ageAndName);
console.log(Tupla.vehiclesModels);
console.log(Tupla.agePeople);
var Enum;
(function (Enum) {
    var Numbers;
    (function (Numbers) {
        Numbers[Numbers["numeroPar"] = 10] = "numeroPar";
        Numbers[Numbers["numeroImpar"] = 11] = "numeroImpar";
    })(Numbers = Enum.Numbers || (Enum.Numbers = {}));
})(Enum || (Enum = {}));
var numberPar = Enum.Numbers.numeroPar;
var numberImpar = Enum.Numbers.numeroImpar;
console.log(numberPar + numberImpar);
//# sourceMappingURL=tipos-basicos.js.map