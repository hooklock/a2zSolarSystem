var PlanetView = function(planet) {
	this.planet = planet;
};

PlanetView.prototype = {
  displayNewWeight: function(planet, currentWeight){
    var weightBox = document.getElementById('Zak-planet-weight');
    var planetName = document.createElement('p');
    planetName.innerText = planet.name;
    weightBox.appendChild(planetName);
  }
};

module.exports = PlanetView;
