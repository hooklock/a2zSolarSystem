// var FunFact = require("./models/funFact.js");
var FunFacts = require("./models/funFacts.js");
var Planet = require("./models/planet.js");
var SolarSystem = require("./models/solarsystem.js");
var SolarSystems = require("./models/solarSystems.js");
// var User = require("./models/user.js");
var SolarSystemView = require("./views/solarSystem_view.js");
var PlanetView = require("./views/planet_view.js");
var FunFactsView = require("./views/funFacts_view.js");
var GetRequest = require("./models/getRequest.js");

window.onload = function() {
	var getRequestSolar = new GetRequest('http://localhost:3000/solarSystem');
	getRequestSolar.getSolarSystem(function(sampleSolarSystem){
		var solarsystem = new SolarSystem(sampleSolarSystem);
		var solarsystemview = new SolarSystemView(solarsystem);
		passOutSolarSystem(solarsystem, solarsystemview);
	});

	var getRequestFunFacts = new GetRequest('http://localhost:3000/funFacts');
	getRequestFunFacts.getFunFacts(function(sampleFunFacts){
		var funfacts = new FunFacts();
		for(var fact of sampleFunFacts){
			funfacts.addFact(fact);
		}
		var funfactsview = new FunFactsView(funfacts);
		passOutFunFacts(funfacts, funfactsview);
	});

	function passOutSolarSystem(solarsystem, solarsystemview){
		solarsystemview.render();
	}

	function passOutFunFacts(funfacts, funfactsview){
		funfactsview.render();
	}


};
