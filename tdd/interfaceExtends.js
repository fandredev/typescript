"use strict";
var Peopless;
(function (Peopless) {
    let OtherInformations;
    (function (OtherInformations) {
        OtherInformations[OtherInformations["age"] = 18] = "age";
    })(OtherInformations || (OtherInformations = {}));
    const data = {
        name: 'Vinicius Vitor Fábio Carvalho',
        cpf: 604.13356302,
        rg: 197834954,
        data: 18121968,
        signo: 'Sagitário',
        mother: 'Jennifer Isis',
        father: 'Nicolas Bruno Kaique Carvalho',
        email: 'viniciusvitorfabiocarvalho__viniciusvitorfabiocarvalho@maptec.com.br',
        password: '9pGdyfxZJI',
        cep: 85905040,
        address: 'Rua Barão do Rio Branco',
        number: 567,
        neighborhood: 'Centro',
        city: 'Toledo',
        uf: 'PR',
        phone: 4528774294,
        cel: 45999005791,
        height: 1.84,
        weight: 104,
        type_blood: 'O+',
        favorite_color: 'amarelo',
        age: OtherInformations.age
    };
    function allData(props) {
        console.log(props);
    }
    function filteredData(props) {
        console.log(props.name);
    }
    allData(data);
    filteredData({ name: 'felipe' });
})(Peopless || (Peopless = {}));
//# sourceMappingURL=interfaceExtends.js.map