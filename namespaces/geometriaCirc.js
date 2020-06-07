"use strict";
var Geometria;
(function (Geometria) {
    var Areas;
    (function (Areas) {
        var PI = 3.14;
        function circuferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Areas.circuferencia = circuferencia;
    })(Areas = Geometria.Areas || (Geometria.Areas = {}));
})(Geometria || (Geometria = {}));
//# sourceMappingURL=geometriaCirc.js.map