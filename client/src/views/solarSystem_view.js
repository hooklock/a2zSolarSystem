var SolarSystemView = function(solarSystem) {
	this.solarSystem = solarSystem;
};

SolarSystemView.prototype = {
	render: function() {
		this.coolscrollything();
		// this.listPlanet();
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
	listPlanet: function(pname){
		var newPlanet = this.solarSystem.findPlanetByName(pname);
		console.log(newPlanet);
		var weightBox = document.getElementById('testbox');
		var planetName = document.createElement('h1');
		planetName.innerText = newPlanet.name;
		weightBox.appendChild(planetName);
	},
	listPlanets: function(){
		for(var planet of this.solarSystem.planets){
			this.listPlanet(planet.name);
		}
	}
};

module.exports = SolarSystemView;
