var SolarSystem = function(params){
    this.name = params.name;
    this.sun = params.sun;
    this.planets = params.planets;
};

SolarSystem.prototype = {
    addPlanet: function(planet) {
        this.planets.push(planet);
    },
    travelTime: function(planet1, planet2, mode) {

    },
    weightOnPlanet: function(planet) {

    }
};

module.exports = SolarSystem;
