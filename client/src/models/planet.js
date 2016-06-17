var Planet = function(params){
    this.name = params.name;
    this.distanceFromEarth = params.distanceFromEarth;
    this.distanceFromSun = params.distanceFromSun;
    this.orbitalPeriod = params.orbitalPeriod;
    this.diameter = params.diameter;
    this.gravity = params.gravity;
    this.type = params.type;
    this.mass = params.mass;
    this.dayLength = params.dayLength;
    this.angleOfAxis = params.angleOfAxis;
    this.moons = params.moons;
};

Planet.prototype = {

};

module.exports = Planet;
