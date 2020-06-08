"use strict";
var Examples;
(function (Examples) {
    function generateVehicle(props) {
        var newBrand = props.brand;
        newBrand = 'Saab'.toUpperCase();
        var newModel = props.model;
        newModel = '9000 CD 2.3 Turbo'.toUpperCase();
        var newYear = props.year;
        newYear.toPrecision(4);
        props.people.forEach(function (props) {
            var response = [
                newBrand, newModel, newYear, props.renavam, props.name, props.age, props.plate
            ].join(' | ');
            console.log(response);
        });
    }
    Examples.generateVehicle = generateVehicle;
    var Account;
    (function (Account) {
        function generateAccounts(props) {
            var myAccount = Object.create(null);
            myAccount = props;
            myAccount.address.map(function (p) {
                p.number = 15;
            });
            console.log(myAccount);
        }
        Account.generateAccounts = generateAccounts;
    })(Account = Examples.Account || (Examples.Account = {}));
})(Examples || (Examples = {}));
Examples.generateVehicle({
    brand: 'Matra',
    model: 'Pick-Up CD 4x4 Curto/Longo 2.5 TDI Dies.',
    year: 2003,
    renavam: 99479051835,
    plate: 'AKF-0083',
    color: 'green',
    people: [
        {
            name: 'Rodrigo',
            age: 31
        }
    ]
});
Examples.Account.generateAccounts({
    cc: '0032562-7',
    agency: 5566,
    bank_name: 'Bradesco',
    bank_code: 237,
    address: [
        {
            neighborhood: 'Jaguaré',
            street: 'Rua dos bancos',
            number: Math.random().toFixed(2)
        }
    ]
});
//# sourceMappingURL=interface2.js.map