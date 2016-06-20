// var FunFact = require("./models/funFact.js");
var FunFacts = require("./models/funFacts.js");
// var Moon = require("./models/moon.js");
var Planet = require("./models/planet.js");
var SolarSystem = require("./models/solarsystem.js");
var SolarSystems = require("./models/solarSystems.js");
// var Sun = require("./models/sun.js");
// var User = require("./models/user.js");
var SolarSystemView = require("./views/solarSystem_view.js");
var PlanetView = require("./views/planet_view.js");
var GetRequest = require("./models/getRequest.js");





window.onload = function() {
	var getRequestSolar = new GetRequest('http://localhost:3000/solarSystem');
	getRequestSolar.getSolarSystem(function(sampleSolarSystem){
		var solarsystem = new SolarSystem(sampleSolarSystem);
		var solarsystemview = new SolarSystemView(solarsystem);
		doTheThings(solarsystem, solarsystemview);
		solarsystemview.render();
	});

	function doTheThings(solarsystem, solarsystemview){
		console.log("scope whoot");
		console.log(solarsystem);
		// solarsystemview.listPlanet(solarsystem.planets[1].name);
		solarsystemview.listPlanets(solarsystem);
	}
};
