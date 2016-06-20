// var FunFact = require("./models/funFact.js");
var FunFacts = require("./models/funFacts.js");
// var Moon = require("./models/moon.js");
var Planet = require("./models/planet.js");
var SolarSystem = require("./models/solarsystem.js");
// var Sun = require("./models/sun.js");
// var User = require("./models/user.js");
var SolarSystemView = require("./views/solarSystem_view.js");
var PlanetView = require("./views/planet_view.js");
var GetRequest = require("./models/getRequest.js");





window.onload = function() {
	// var planetview = new PlanetView(planet);
	var getRequestSolar = new GetRequest('http://localhost:3000/solarSystem');
	var solarsystem = new SolarSystem(getRequestSolar);
	// var solarsystem = new SolarSystem(JSON.parse(localStorage.getItem('data')));
	console.log(solarsystem);
	var solarsystemview = new SolarSystemView(solarsystem);
	solarsystemview.render();
};
