"use strict";
var String_;
(function (String_) {
    function arrayWithReadOnly_(numm, strr) {
        let a = numm;
        let __name = strr;
        console.log(a, __name);
        // a[0] = 12 // erro porq a props é somente leitura
    }
    String_.arrayWithReadOnly_ = arrayWithReadOnly_;
    function sum(n1, n2) {
        return n1 + n2;
    }
    String_.sum = sum;
    const positive_ = { num: 1 };
    console.log(positive_);
    function returnListTimes(param) {
        console.log(param.name, param.year);
    }
    String_.returnListTimes = returnListTimes;
    function returnMyName(name) {
        console.log(name);
    }
    String_.returnMyName = returnMyName;
    function returnMyProfession() {
        let desc = { name: 'Fabiano', profession: 'Faxineiro' };
        desc.name = 'Catarina';
        return desc;
        // desc.profession = 'Engenheiro de Software' // erro porque a props myProfession é read only
    }
    String_.returnMyProfession = returnMyProfession;
})(String_ || (String_ = {}));
String_;
String_.arrayWithReadOnly_([1, 3, 4], 'Felipe');
let team = {
    name: 'São Paulo',
    year: 1930,
    success: 'São Paulo é um bom time'
};
let _name = {};
// let _name = {name:'Julia'}
let profession = {
    name: 'Janaína',
    profession: 'Dev'
};
Object.freeze(team);
Object.freeze(_name);
Object.freeze(profession);
String_.returnListTimes(team);
String_.returnMyName(_name);
console.log(String_.returnMyProfession());
//# sourceMappingURL=interface1.js.map