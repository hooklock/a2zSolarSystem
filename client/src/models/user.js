var User = function(params){
    this.name = params.name;
    this.favPlanets = params.favPlanets;
};

User.prototype = {
    addPlanet: function(planet){
        this.favPlanets.push(planet);
    }
};

module.exports = User;
