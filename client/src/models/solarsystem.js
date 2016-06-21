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

        console.log("distance", distance);
        console.log("mode", mode);

        switch(mode) {
            case 'bike':
                velocity = (40);
                break;
            // car travelling at 60mph
            case 'car':
                velocity = (95.5606);
                break;
            case 'starshipEnterprise':
                velocity = (300000*3600);
                break;
            case 'voyagerSpaceProbe':
                velocity = (62140);
                break;
        }

        console.log("Velocity", velocity);

        if(mode === 'starshipEnterprise'){
            timeTo = ((distance/velocity));
        } else if(mode ===  'voyagerSpaceProbe') {
            timeTo = ((distance/velocity)/24);
        } else {
            timeTo = ((distance/velocity)/24/365);
        }
        return timeTo;
    },
    findPlanetByName: function(planetName){
      return _.find(this.planets, function(planet){
        return planet.name === planetName;
    });
    },
    // returns planet found by thing and value
    // could be used to fins answers for a game?
    findPlanetByThing: function(value, thing){
      return _.find(this.planets, function(planet){
        return planet[thing] === value;
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
    findLargestThing: function(thing){
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
    longestDayLength: function(){
        var value = 0;
        var pln = {};
        this.planets.forEach(function(planet){
            var newlength = [];
            var length1 = planet.dayLength.split(" ");
            for(var string of length1){
                string = parseInt(string.slice(0, -1));
                newlength.push(string);
            }
            // console.log(length1);
            var hourslength = ((newlength[0]*24) + newlength[1])
            if(hourslength > value){
            value = hourslength;
            pln = planet;
        }

    });
        return pln;
    },

    // order planets by a 'thing', and 'order' is either Asc or Desc
    orderThingsBy: function(thing, order){
        orderplanets = this.planets;
        orderplanets.sort(function(a,b){
            if(a[thing].type === String){
                a[thing] = a[thing].toUpperCase();
                b[thing] = b[thing].toUpperCase();
            }
            if(thing === 'dayLength'){
                var newlength1 = [];
                var newlength2 = [];
                var length1 = a[thing];
                var length2 = b[thing];
                if(typeof a[thing] === 'string'){
                    length1 = a[thing].split(" ");
                    for(var string1 of length1){
                        string1 = parseInt(string1.slice(0, -1));
                        newlength1.push(string1);
                        hourslength1 = ((newlength1[0]*24) + newlength1[1]);
                    }
                }
                if(typeof b[thing] === 'string'){
                    length2 = b[thing].split(" ");
                    for(var string2 of length2){
                        string2 = parseInt(string2.slice(0, -1));
                        newlength2.push(string2);
                        hourslength2 = ((newlength2[0]*24) + newlength2[1]);
                    }
                }
                a[thing] = newlength1;
                b[thing] = newlength2;
            }
            if(order === "ascending"){
                if (a[thing] > b[thing]) {
                    return 1;
                }
                if (a[thing] < b[thing]) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            }
            if(order === "descending"){
                if (a[thing] > b[thing]) {
                    return -1;
                }
                if (a[thing] < b[thing]) {
                    return 1;
                }
                // a must be equal to b
                return 0;
            }
        });
        return orderplanets;
    }
};

module.exports = SolarSystem;
