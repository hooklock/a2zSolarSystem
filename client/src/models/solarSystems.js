var SolarSystems = function(solarsystem){
    this.solarsystems = [];
};

SolarSystems.prototype = {
    addSolarSystem: function(solarsystem){
        this.solarsystems.push(solarsystem);
        return this.solarsystems;
    }
};

module.exports = SolarSystems;
