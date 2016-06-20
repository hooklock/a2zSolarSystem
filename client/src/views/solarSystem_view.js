var SolarSystemView = function(solarSystem) {
	this.solarSystem = solarSystem;
};

SolarSystemView.prototype = {
	render: function() {
		this.coolscrollything();
		this.listPlanet();
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
	listPlanet: function(){
		var newPlanet = this.solarSystem.findPlanetByName("Mercury");
		var weightBox = getElementById('Zak-planet-weight');
		var planetName = createElement('h1');
		planetName.innerText = newPlanet[name];
		weightBox.appendChild(planetName);
	}
};

module.exports = SolarSystemView;
