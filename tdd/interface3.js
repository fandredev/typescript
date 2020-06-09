"use strict";
var Planets;
(function (Planets) {
    Planets.myPlanets = function (name, position, size) {
        let namePlanet = name;
        let positionPlanet = position;
        let sizePlanet = size;
        console.log(namePlanet, positionPlanet, sizePlanet);
    };
    Planets.myStars = function (name) {
        console.log(name);
    };
    Planets.myComets = (name) => {
        console.log(name);
    };
})(Planets || (Planets = {}));
Planets.myPlanets('Mercúrio', 1, 4.879);
Planets.myStars('Estrela da Manhã');
Planets.myComets('Halley');
//# sourceMappingURL=interface3.js.map