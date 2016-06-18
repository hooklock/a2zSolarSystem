var SolarSystem = require('../solarsystem.js');
var Sun = require('../sun.js');
var Planet = require('../planet.js');
var Moon = require('../moon.js');
var User = require('../user.js');
var FunFacts = require('../funFacts.js');
var FunFact = require('../funFact.js');
var assert = require('chai').assert;


describe('SolarSystem', function() {

  beforeEach(function(){
      newsun = new Sun ('Sun');
      milkyway = new SolarSystem("Sol", newsun, []);
      planet1 = new Planet("Z&A", 1000, "personal");
      planet2 = new Planet("Dave", 2000, "personal");
      planet3 = new Planet("CodeClan", 10000, "business");
      planet4 = new Planet("Charlie Brown", 10, "personal");
      planet5 = new Planet("Swan", 5, "business");
      moon1 = new Moon("Lewis", 50000, "business");
      moon2 = new Moon("Lewis", 50000, "business");
      user1 = new User("Andrew", 100, "personal");
      fact1 = new FunFact("Andrew", 100, "personal");
      facts = new FunFacts([]);

  });

  it('should add an account', function(){
      console.log(bank1);
      bank1.addAccount(account1);
      console.log(bank1);
      assert.equal(1, bank1.accounts.length);
  });

  it('should find account by name', function(){
      bank1.addAccount(account1);
      bank1.addAccount(account2);
      bank1.addAccount(account3);
      bank1.addAccount(account4);
      bank1.addAccount(account5);
      bank1.addAccount(account6);
      bank1.addAccount(account7);
      console.log(bank1);
      assert.equal( account5, bank1.findAccByOwnerName("Swan"));
  });

  it('should find the largest account', function(){
      bank1.addAccount(account1);
      bank1.addAccount(account2);
      bank1.addAccount(account3);
      bank1.addAccount(account4);
      bank1.addAccount(account5);
      bank1.addAccount(account6);
      bank1.addAccount(account7);
      assert.equal( account6, bank1.accounts.findLargestAccount);
  });

});
