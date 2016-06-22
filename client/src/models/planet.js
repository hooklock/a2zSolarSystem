var Planet = function(params){
    this.name = params.name;
    this.earthDistance = params.earthDistance;
    this.sunDistance = params.sunDistance;
    this.orbitalPeriod = params.orbitalPeriod;
    this.diameter = params.diameter;
    this.gravity = params.gravity;
    this.type = params.type;
    this.mass = params.mass;
    this.dayLength = params.dayLength;
    this.axisAngle = params.axisAngle;
    this.moons = params.moons;
};

Planet.prototype = {
    // input current weight in kgs, and outputs new weight in kgs
    weightOnPlanet: function(currentweight) {
        var newWeight = (currentweight * (this.gravity/9.8));
        return newWeight;
    },
    addMoon: function(moon) {
        this.moons.push(moon);
        return this.moons;
    }
};

module.exports = Planet;
