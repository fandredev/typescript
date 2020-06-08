namespace Planets {
    interface InfoPlanets {
        (name: string, position: number | string, size: number): void
    }
    interface infoStars {
        (name: string): void
    }
    interface infoComets {
        (name: string): void
    }
    export let myPlanets: InfoPlanets
    export let myStars: infoStars
    export let myComets: infoComets

    myPlanets = function (name: string, position: number | string, size: number): void {
        let namePlanet = name
        let positionPlanet = position
        let sizePlanet = size
        console.log(namePlanet, positionPlanet, sizePlanet)
    }
    myStars = function (name: string): void {
        console.log(name)
    }
    myComets = (name: string): void => {
        console.log(name)
    }
}

Planets.myPlanets('Mercúrio', 1, 4.879)
Planets.myStars('Estrela da Manhã')
Planets.myComets('Halley')