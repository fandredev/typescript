"use strict";
exports.__esModule = true;
exports.Base = void 0;
var Base = /** @class */ (function () {
    function Base(name_disease, localization_map, country, uf, font, confirmed_cases, confirmed_active, confirmed_recover, confirmed_deaths, date) {
        this.name_disease = name_disease;
        this.localization_map = localization_map;
        this.country = country;
        this.uf = uf;
        this.font = font;
        this.confirmed_cases = confirmed_cases;
        this.confirmed_active = confirmed_active;
        this.confirmed_recover = confirmed_recover;
        this.confirmed_deaths = confirmed_deaths;
        this.date = date;
    }
    return Base;
}());
exports.Base = Base;
