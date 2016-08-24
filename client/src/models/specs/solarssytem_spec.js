var assert = require('chai').assert;
var SolarSystem = require('../solarsystem.js');
var Planet = require('../planet.js');
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
  });

	// this will be the same for all parameters...
  it('should have a name', function(){
    assert.equal("Mercury", mercury.name);
  });

	// shows weight on chosen planet, when current weight in kgs is input
  it('should tell new weight on chosen planet', function(){
    assert.equal(80.05714285714285, earth.weightOnPlanet(80));
  });

});

describe('SolarSystem', function() {

  beforeEach(function(){
	  solarsystem = new SolarSystem({name: "Solar System", planets: []});
	  mercury = new Planet({
      name: "Mercury",
      earthDistance: 77000000 ,
      sunDistance: 58000000,
      orbitalPeriod: 88,
      diameter: 4879,
      gravity: 3.7,
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
      axisAngle: 177.4,
      moons: []
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
  });

  it('should add a planet', function(){
    assert.equal('Earth', solarsystem.addPlanet(earth)[0].name);
  });

// outputs travel time in years
  it('should find travel time between planets in years', function(){
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
    assert.deepEqual( earth, solarsystem.findLargestThing('diameter'));
  });

  it('should find the furthest distance from sun', function(){
    solarsystem.addPlanet(mercury);
    solarsystem.addPlanet(venus);
    solarsystem.addPlanet(earth);
    assert.deepEqual( earth, solarsystem.findLargestThing('sunDistance'));
  });

  it('should find the longest orbital period', function(){
    solarsystem.addPlanet(mercury);
    solarsystem.addPlanet(venus);
    solarsystem.addPlanet(earth);
    assert.deepEqual( earth, solarsystem.findLargestThing('orbitalPeriod'));
  });

  it('should find the highest gravity', function(){
    solarsystem.addPlanet(mercury);
    solarsystem.addPlanet(venus);
    solarsystem.addPlanet(earth);
    assert.deepEqual( earth, solarsystem.findLargestThing('gravity'));
  });

  it('should find the largest mass', function(){
    solarsystem.addPlanet(mercury);
    solarsystem.addPlanet(venus);
    solarsystem.addPlanet(earth);
    assert.deepEqual( earth, solarsystem.findLargestThing('mass'));
  });

  it('should find the largest axis angle', function(){
    solarsystem.addPlanet(mercury);
    solarsystem.addPlanet(venus);
    solarsystem.addPlanet(earth);
    assert.deepEqual( venus, solarsystem.findLargestThing('axisAngle'));
  });

  it('should find the planet of longest day length', function(){
    solarsystem.addPlanet(mercury);
    solarsystem.addPlanet(venus);
    solarsystem.addPlanet(earth);
    assert.deepEqual( venus, solarsystem.longestDayLength());
  });

  it('should order planets by chosen item', function(){
    solarsystem.addPlanet(mercury);
    solarsystem.addPlanet(venus);
    solarsystem.addPlanet(earth);
    assert.deepEqual( [venus, mercury, earth], solarsystem.orderThingsBy("dayLength", "ascending"));
  });

  it('should find planet by thing and value', function(){
    solarsystem.addPlanet(mercury);
    solarsystem.addPlanet(venus);
    solarsystem.addPlanet(earth);
    assert.equal( "Earth", solarsystem.findPlanetByThing(365, "orbitalPeriod").name);
  });

});

describe('Fun Facts', function() {

  beforeEach(function(){
    solarsystem = new SolarSystem({name: "Solar System", planets: []});
    mercury = new Planet({
      name: "Mercury",
      earthDistance: 77000000 ,
      sunDistance: 58000000,
      orbitalPeriod: 88,
      diameter: 4879,
      gravity: 3.7,
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

    fact1 = new FunFact({name: mercury.name, type: mercury.type, fact: "This is the closest planet to the sun!"});
    fact2 = new FunFact({name: venus.name, type: venus.type, fact: "This is the closest planet to the sun!"});
    fact3 = new FunFact({name: earth.name, type: earth.type, fact: "This is the closest planet to the sun!"});
    factoids = new FunFacts({facts: []});
  });

  it('Fact should have a fact', function(){
      assert.equal("This is the closest planet to the sun!", fact1.fact);
  });

  it('should add a fact', function(){
      factoids.addFact(fact1);
      assert.equal("Mercury", factoids.facts[0].name);
  });

});
