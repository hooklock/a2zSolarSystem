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
        gravity: 3.7,
        type: "Terrestrial",
        mass: "3.285e23",
        dayLength: "58d 15h 30m",
        axisAngle: 2.11
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
    //   planet4 = new Planet("Mars", 2500, 20, 400, 3, 8, 3, "rocky", 27, 20, []);
    //   planet5 = new Planet("Jupiter", 5000, 25, 1000, 10, 20, 50, "gas giant", 8, 35, []);
      moon1 = new Moon({name: "Moon", diameter: 5000});
      moon2 = new Moon("Io", 1000);
    //   user1 = new User("Andrew", []);
    //   fact1 = new FunFact(planet1.name, planet1.type, "This is the closest planet to the sun!");
    //   facts = new FunFacts([]);
  });

  it('should have a name', function(){
      assert.equal("Mercury", mercury.name);
  });

  // this will be the same for all parameters...

  it('should tell new weight on chosen planet', function(){
      assert.equal(80.05714285714285, earth.weightOnPlanet(80));
  });

});

// describe('SolarSystem', function() {
//
//   beforeEach(function(){
//       newsun = new Sun ('Sol');
//       milkyway = new SolarSystem("Solar System", newsun, []);
//       planet1 = new Planet("Mercury", 2000, 5, 50, 1, 5, 1, "rocky", 50, 10, []);
//       planet2 = new Planet("Venus", 1000, 10, 100, 2, 7, 2, "rocky", 15, 15, []);
//       planet3 = new Planet("Earth", 0, 15, 365, 4, 9.8, 4, "rocky", 24, 23, []);
//       planet4 = new Planet("Mars", 2500, 20, 400, 3, 8, 3, "rocky", 27, 20, []);
//       planet5 = new Planet("Jupiter", 5000, 25, 1000, 10, 20, 50, "gas giant", 8, 35, []);
//       moon1 = new Moon("Moon", 5000);
//       moon2 = new Moon("Io", 1000);
//       user1 = new User("Andrew", []);
//       fact1 = new FunFact(planet1.name, planet1.type, "This is the closest planet to the sun!");
//       facts = new FunFacts([]);
//   });
//
//   it('should have a name and a sun', function(){
//       console.log(milkyway);
//       assert.equal('Sol', milkyway.sun);
//   });
//
//   // it('should find account by name', function(){
//   //     bank1.addAccount(account1);
//   //     bank1.addAccount(account2);
//   //     bank1.addAccount(account3);
//   //     bank1.addAccount(account4);
//   //     bank1.addAccount(account5);
//   //     bank1.addAccount(account6);
//   //     bank1.addAccount(account7);
//   //     console.log(bank1);
//   //     assert.equal( account5, bank1.findAccByOwnerName("Swan"));
//   // });
//   //
//   // it('should find the largest account', function(){
//   //     bank1.addAccount(account1);
//   //     bank1.addAccount(account2);
//   //     bank1.addAccount(account3);
//   //     bank1.addAccount(account4);
//   //     bank1.addAccount(account5);
//   //     bank1.addAccount(account6);
//   //     bank1.addAccount(account7);
//   //     assert.equal( account6, bank1.accounts.findLargestAccount);
//   // });
//
// });
