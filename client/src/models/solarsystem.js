var _ = require('lodash');

var SolarSystem = function(params){
    this.name = params.name;
    this.sun = params.sun;
    this.planets = params.planets;
};

SolarSystem.prototype = {
    addPlanet: function(planet) {
        this.planets.push(planet);
        return this.planets;
    },
    // Calculates travel time between 2 planets using various modes of transport
    // outputs travel time in years...
    travelTime: function(planet1, planet2, mode) {
        var timeTo = 0;
        // velocity is in metres per second
        var velocity = 0;
        var distance = 0;

        if (planet1.sunDistance > planet2.sunDistance) {
            distance = (planet1.sunDistance - planet2.sunDistance);
        } else if (planet2.sunDistance > planet1.sunDistance) {
            distance = (planet2.sunDistance - planet1.sunDistance);
        } else {
            distance = 0;
        }

        switch(mode) {
            case 'bike':
                velocity = (40/3600);
                break;
            // car travelling at 60mph
            case 'car':
                velocity = (95.5606/3600);
                break;
            case 'starshipEnterprise':
                velocity = 300000000;
                break;
            case 'voyagerSpaceProbe':
                velocity = (62140/3600);
                break;
        }

        timeTo = ((distance/velocity)/60/60/24/365);
        return timeTo;
    },
    findPlanetByName:function(planetName){
      return _.find(this.planets, function(planet){
        return planet.name === planetName;
    });
    },
    // returns planets dependant on type (Terrestrial or GasGiants)
    filteredPlanets: function(type){
      if(!type) return this.planets;
      return _.filter(this.planets, function(planet){
        return planet.type === type;
    });
    },
    // based on planets, takes in a 'thing' as a parameter (diameter, mass, distanceFromSun, distanceFromEarth)
    findLargestDiameter: function(thing){
        var value = 0;
        var pln = {};
        this.planets.forEach(function(planet){
            if(planet[thing] > value){
            value = planet[thing];
            pln = planet;
        }

    });
        return pln;
    },
    // findLargestDiameter: function(){
    //     var value = 0;
    //     var pln = {};
    //     this.planets.forEach(function(planet){
    //         if(planet.diameter > value){
    //         value = planet.diameter;
    //         pln = planet;
    //     }
    //
    // });
    //     return pln;
    // }
    // findLargestDiameter: function(thing) {
    // var largestthing = this.planets[0];
    // for(var planet of this.planets) {
    //     console.log(planet.thing);
    //     if (planet.thing > largestthing.thing) {
    //         largestthing = planet;
    //     }
    // }
    // return largestthing;
    // }

    // order planets by a 'thing', and 'order' is either Asc or Desc
    orderBy: function(thing, order){
        var face = 0;
    }
};

module.exports = SolarSystem;
