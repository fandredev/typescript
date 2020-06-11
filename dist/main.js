"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = require("./greet");
var Build;
(function (Build) {
    function hello(props) {
        return props;
    }
    Build.hello = hello;
})(Build || (Build = {}));
console.log(Build.hello('Felipe'));
console.log(greet_1.Greet.sayHello('Felipe'));
