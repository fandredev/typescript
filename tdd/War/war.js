"use strict";
var War;
(function (War) {
    function viewDeaths(field) {
        const obj = {
            id: 1 /* primary */,
            name: field.name,
            precision: field.number_deaths_precision === false ? 'Não há dados precisos' : field.number_deaths_precision,
            complete_site: field.site.concat(field.ref),
            number_deaths: field.number_deaths.join('-'),
            year: field.year.join('-'),
            site: field.site,
            ref: field.ref,
            others: field.others
        };
        return obj;
    }
    War.viewDeaths = viewDeaths;
})(War || (War = {}));
const secondWar = {
    name: 'Outra guerra',
    number_deaths: [40000000, 70000000],
    year: [1206, 1324],
    localization: 'Leste Europeu e Sibéria',
    number_deaths_precision: false,
    site: 'https://pt.m.wikipedia.org/wiki/',
    ref: 'Lista_de_guerras_por_n%C3%BAmero_de_mortos',
};
const data = {
    name: 'Segunda Guerra Mundial',
    number_deaths: [60000000, 85000000],
    year: [1939, 1945],
    localization: 'Global, majoritariamente Europa Ocidental',
    number_deaths_precision: false,
    site: 'https://pt.m.wikipedia.org/wiki/',
    ref: 'Lista_de_guerras_por_n%C3%BAmero_de_mortos',
    others: {
        secondWar
    }
};
console.log(War.viewDeaths(data));
//# sourceMappingURL=war.js.map