var Planet = require("../models/planet.js");

var SolarSystemView = function(solarSystem) {
	this.solarSystem = solarSystem;
};

SolarSystemView.prototype = {
	render: function() {
		this.coolscrollything();
		// this.listPlanet();
		this.displayWeight();
	},
	coolscrollything: function() {
		var speed = 3;
		var x, y;
		function handleMouse(e) {
		  if (x && y) {
			document.getElementsByClassName("parallax")[0].scrollTop += speed*(e.clientY - y);
			document.getElementsByClassName("parallax")[0].scrollLeft += speed*(e.clientX - x);
		  }
		  x = e.clientX;
		  y = e.clientY;
		}
		document.onmousemove = handleMouse;
	},
	listPlanet: function(pname, weight){

		var newPlanet = new Planet(this.solarSystem.findPlanetByName(pname));
		// console.log(newPlanet);
		var weightBox = document.getElementById('planetList');
		var planetName = document.createElement('li');
		// console.log(newPlanet.weightOnPlanet(weight));
		planetName.innerText = newPlanet.name + ": " + newPlanet.weightOnPlanet(weight) + " kgs";
		weightBox.appendChild(planetName);
	},
	listPlanets: function(weight){
		for(var planet of this.solarSystem.planets){
			this.listPlanet(planet.name, weight);
		}
	},
	displayWeight: function(){
		var weightHere = document.getElementById('testbox');
		var weightForm = document.createElement('form');
		var weightInput = document.createElement('input');
		// weightInput.setAttribute('name', 'Enter your Weight');
		weightInput.setAttribute('placeholder', 'Enter Weight in Kgs');
		weightForm.appendChild(weightInput);
		weightHere.appendChild(weightForm);
		weightForm.onkeyup = function(e){
			var planetBox = document.getElementById('planetList')
			while (planetBox.hasChildNodes()) {
			planetBox.removeChild(planetBox.firstChild);
			}
			e.preventDefault();
			console.log(e.target.value);
			console.log(this);
			this.listPlanets(e.target.value);
		}.bind(this);
	}
};

module.exports = SolarSystemView;
