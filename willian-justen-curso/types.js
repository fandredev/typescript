"use strict";
// boolean (true,false)
let isOpen;
isOpen = false;
// str
let message;
message = `foo ${isOpen}`;
message = 'foo';
message = "Foo";
// number
let total;
total = 20;
total = 20.3;
total = 0xff0;
// array (type[])
let items;
items = [1, 2, 3];
let values;
values = ['String', '2', 'true'];
// tuple
let title;
title = [1, 'foo'];
// any
let coisa;
coisa = true;
coisa = 'true';
coisa = [];
coisa = {};
coisa = 1;
// void (vazio)
function logger() {
    console.log('foo');
}
// null | undefined
// never
function error() {
    throw new Error('Erro');
}
// object
let carros;
carros = {
    key: 'foo'
};
// type inference
let messagez = 'message';
// messagez = 1
messagez = 'string nova';
window.addEventListener('click', (e) => {
    console.log(e.target);
});
//# sourceMappingURL=types.js.map