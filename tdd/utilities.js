"use strict";
let nameRandom = {
    name: 'Felipe'
};
// nameRandom.name = 'Julia' // erro pq é readonly
console.log(nameRandom);
function Fconstructor(props, propsN) {
    console.log(propsN);
    return props;
}
Fconstructor('Teste construtor + readonly', 123);
console.log(Fconstructor);
const phones = {
    number: 1234232,
    ok: true
};
console.log(phones);
const omitPhones = {
    title: 'Telefone x'
};
console.log(omitPhones);
const PropsInt = {
    a: true,
    // b: false // erro pq todas as props da int sao requiridas
    b: false
};
console.log(PropsInt);
function returnObj(props) {
    return { props };
}
console.log(returnObj({ props: 'Alguma coisa' }));
const Record = {
    Value_Sale: { number: 1500 },
    Value_Discount: { number: 150 },
    Value_Now: { number: 1800 },
};
console.log(Record);
//# sourceMappingURL=utilities.js.map