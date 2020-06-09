"use strict";
var SixthRepublic;
(function (SixthRepublic_1) {
    class SixthRepublic {
        constructor(name, broken, term_office, vice, current, reelection, corrupt) {
            this.name = name;
            this.broken = broken;
            this.term_office = term_office;
            this.vice = vice;
            this.current = current;
            this.reelection = reelection;
            this.corrupt = corrupt;
        }
    }
    class Presidents extends SixthRepublic {
        constructor(name, broken, term_office, vice, current, reelection, corrupt) {
            super(name, broken, term_office, vice, reelection, current, corrupt);
            this.name = name;
            this.broken = broken;
            this.term_office = term_office;
            this.vice = vice;
            this.current = current;
            this.reelection = reelection;
            this.corrupt = corrupt;
        }
    }
    SixthRepublic_1.Presidents = Presidents;
    function viewMyPresidentNow(name) {
        return name;
    }
    SixthRepublic_1.viewMyPresidentNow = viewMyPresidentNow;
})(SixthRepublic || (SixthRepublic = {}));
const presidents = new SixthRepublic.Presidents('Deodoro da Fonseca', '', '2 anos e 8 dias', 'Floariano Peixoto', false, false, 'Não');
console.log(SixthRepublic.viewMyPresidentNow('Bolsonaro'));
console.log(presidents);
//# sourceMappingURL=presidents.js.map