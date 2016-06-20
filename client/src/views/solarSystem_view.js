var Planet = require("../models/planet.js");

var SolarSystemView = function(solarSystem) {
	this.solarSystem = solarSystem;
};

SolarSystemView.prototype = {
	render: function() {
		this.showInnerOrbitContainer();
		this.closeInnerOrbitContainer();
		this.viewScroll();
		// this.listPlanet();
		this.displayWeight();
	},

	viewScroll: function() {
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
		var weightBox = document.getElementById('planetList');
		var planetName = document.createElement('li');
		planetName.innerText = newPlanet.name + ": " + newPlanet.weightOnPlanet(weight).toFixed(2) + " kgs";
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
		weightInput.setAttribute('placeholder', 'Enter Weight in Kgs');
		weightForm.appendChild(weightInput);
		weightHere.appendChild(weightForm);
		weightForm.onkeyup = function(e){
			var planetBox = document.getElementById('planetList');
			while (planetBox.hasChildNodes()) {
			planetBox.removeChild(planetBox.firstChild);
			}
			e.preventDefault();
			console.log(e.target.value);
			console.log(this);
			this.listPlanets(e.target.value);
		}.bind(this);
	},

	showInnerOrbitContainer: function() {
		var showButton = document.getElementsByName("orbit-inner-display")[0];
		showButton.addEventListener("click", function(event) {
			var innerOrbitDisplay = document.getElementsByClassName("orbit-inner-planet-img")[0];
			var innerOrbitClose = document.getElementById("orbit-inner-close");
			event.target = innerOrbitDisplay.style.visibility = "visible";
			event.target = innerOrbitClose.style.visibility = "visible";
		});
	},

	closeInnerOrbitContainer: function() {
		var close = document.getElementById("orbit-inner-close");
		console.log(close);
		close.addEventListener("click", function(event) {
			console.log("Clicky");
			var innerOrbitDisplay = document.getElementsByClassName("orbit-inner-planet-img")[0];
			var innerOrbitClose = document.getElementById("orbit-inner-close");
			event.target = innerOrbitDisplay.style.visibility = "hidden";
			event.target = innerOrbitClose.style.visibility = "hidden";
		});
	}

};

module.exports = SolarSystemView;
