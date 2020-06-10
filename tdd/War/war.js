"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data/data");
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
console.log(War.viewDeaths(data_1.data));
//# sourceMappingURL=war.js.map