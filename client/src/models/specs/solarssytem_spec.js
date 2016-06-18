var assert = require('chai').assert;
var SolarSystem = require('../solarsystem.js');
var Sun = require('../sun.js');
var Planet = require('../planet.js');
var Moon = require('../moon.js');
var User = require('../user.js');
var FunFacts = require('../funFacts.js');
var FunFact = require('../funFact.js');

describe('Planet', function() {

  beforeEach(function(){
    mercury = new Planet({
        name: "Mercury",
        earthDistance: 77000000 ,
        sunDistance: 58000000,
        orbitalPeriod: 88,
        diameter: 4879,
        gravity: 24.79,
        // gravity: 3.7,
        type: "Terrestrial",
        mass: "3.285e23",
        dayLength: "58d 15h 30m",
        axisAngle: 2.11,
        moons: []
    });
      venus = new Planet({
        name: "Venus",
        earthDistance: 38000000 ,
        sunDistance: 108000000,
        orbitalPeriod: 225,
        diameter: 12104,
        gravity: 8.87,
        type: "Terrestrial",
        mass: "4.867e24",
        dayLength: "116d 18h 0m",
        axisAngle: 177.4
      });
      earth = new Planet({
        name: "Earth",
        earthDistance: 0,
        sunDistance: 149600000,
        orbitalPeriod: 365,
        diameter: 12742,
        gravity: 9.807,
        type: "Terrestrial",
        mass: "5.972e24",
        dayLength: "0d 24h 0m",
        axisAngle: 23.5,
        moons:[
          {
            name: "Moon",
            diameter: 3474
          }
        ]
      });
      moon1 = new Moon({name: "Moon", diameter: 5000});
      moon2 = new Moon({name: "Io", diameter: 1000});
  });

// this will be the same for all parameters...
  it('should have a name', function(){
      assert.equal("Mercury", mercury.name);
  });

// shows weight on chosen planet, when current weight in kgs is input
  it('should tell new weight on chosen planet', function(){
    //   console.log(mercury.weightOnPlanet(80));
      assert.equal(80.05714285714285, earth.weightOnPlanet(80));
  });

// can add moon to planet
  it('should be able to add moon', function(){
      assert.equal("Moon", mercury.addMoon(moon1)[0].name);
  });

});

describe('SolarSystem', function() {

  beforeEach(function(){
      newsun = new Sun ({name: 'Sol'});
      solarsystem = new SolarSystem({name: "Solar System", sun: newsun, planets: []});
      mercury = new Planet({
          name: "Mercury",
          earthDistance: 77000000 ,
          sunDistance: 58000000,
          orbitalPeriod: 88,
          diameter: 4879,
          gravity: 3.7,
        //   type: "Sunish",
          type: "Terrestrial",
          mass: "3.285e23",
          dayLength: "58d 15h 30m",
          axisAngle: 2.11,
          moons: []
      });
        venus = new Planet({
          name: "Venus",
          earthDistance: 38000000 ,
          sunDistance: 108000000,
          orbitalPeriod: 225,
          diameter: 12104,
          gravity: 8.87,
          type: "Terrestrial",
          mass: "4.867e24",
          dayLength: "116d 18h 0m",
          axisAngle: 177.4
        });
        earth = new Planet({
          name: "Earth",
          earthDistance: 0,
          sunDistance: 149600000,
          orbitalPeriod: 365,
          diameter: 12742,
          gravity: 9.807,
          type: "Terrestrial",
          mass: "5.972e24",
          dayLength: "0d 24h 0m",
          axisAngle: 23.5,
          moons:[
            {
              name: "Moon",
              diameter: 3474
            }
          ]
        });
        moon1 = new Moon({name: "Moon", diameter: 5000});
        moon2 = new Moon({name: "Io", diameter: 1000});
    //   planet1 = new Planet("Mercury", 2000, 5, 50, 1, 5, 1, "rocky", 50, 10, []);
    //   planet2 = new Planet("Venus", 1000, 10, 100, 2, 7, 2, "rocky", 15, 15, []);
    //   planet3 = new Planet("Earth", 0, 15, 365, 4, 9.8, 4, "rocky", 24, 23, []);
    //   planet4 = new Planet("Mars", 2500, 20, 400, 3, 8, 3, "rocky", 27, 20, []);
    //   planet5 = new Planet("Jupiter", 5000, 25, 1000, 10, 20, 50, "gas giant", 8, 35, []);
    //   moon1 = new Moon("Moon", 5000);
    //   moon2 = new Moon("Io", 1000);
    //   user1 = new User("Andrew", []);
    //   fact1 = new FunFact(planet1.name, planet1.type, "This is the closest planet to the sun!");
    //   facts = new FunFacts([]);
  });

  it('should have a name and a sun', function(){
      assert.equal('Solar System', solarsystem.name);
      assert.equal('Sol', solarsystem.sun.name);
  });

  it('should add a planet', function(){
      assert.equal('Earth', solarsystem.addPlanet(earth)[0].name);
  });

// outputs travel time in years
  it('should find travel time between planets in years', function(){
    //   console.log(solarsystem.travelTime(mercury, venus, "bike"));
      assert.equal( 142.69406392694066, solarsystem.travelTime(mercury, venus, "bike"));
  });

  it('should find planet by name', function(){
      solarsystem.addPlanet(mercury);
      solarsystem.addPlanet(venus);
      assert.equal(mercury, solarsystem.findPlanetByName("Mercury"));
  });

  it('should filter by planet type', function(){
      solarsystem.addPlanet(mercury);
      solarsystem.addPlanet(venus);
      solarsystem.addPlanet(earth);
      assert.deepEqual([mercury, venus, earth], solarsystem.filteredPlanets("Terrestrial"));
  });

  it('should find the largest diameter', function(){
      solarsystem.addPlanet(mercury);
      solarsystem.addPlanet(venus);
      solarsystem.addPlanet(earth);
      assert.deepEqual( earth, solarsystem.findLargestDiameter('diameter'));
  });

  it('should find the furthest distance from sun', function(){
      solarsystem.addPlanet(mercury);
      solarsystem.addPlanet(venus);
      solarsystem.addPlanet(earth);
      assert.deepEqual( earth, solarsystem.findLargestDiameter('sunDistance'));
  });

  it('should find the longest orbital period', function(){
      solarsystem.addPlanet(mercury);
      solarsystem.addPlanet(venus);
      solarsystem.addPlanet(earth);
      assert.deepEqual( earth, solarsystem.findLargestDiameter('orbitalPeriod'));
  });

  it('should find the highest gravity', function(){
      solarsystem.addPlanet(mercury);
      solarsystem.addPlanet(venus);
      solarsystem.addPlanet(earth);
      assert.deepEqual( earth, solarsystem.findLargestDiameter('gravity'));
  });

  it('should find the largest mass', function(){
      solarsystem.addPlanet(mercury);
      solarsystem.addPlanet(venus);
      solarsystem.addPlanet(earth);
      assert.deepEqual( earth, solarsystem.findLargestDiameter('mass'));
  });

  it('should find the largest axis angle', function(){
      solarsystem.addPlanet(mercury);
      solarsystem.addPlanet(venus);
      solarsystem.addPlanet(earth);
      assert.deepEqual( venus, solarsystem.findLargestDiameter('axisAngle'));
  });

  it('should find the planet of longest day length', function(){
      solarsystem.addPlanet(mercury);
      solarsystem.addPlanet(venus);
      solarsystem.addPlanet(earth);
      assert.deepEqual( venus, solarsystem.longestDayLength());
  });

});
