var Planet = require("../models/planet.js");

var SolarSystemView = function(solarSystem) {
	this.solarSystem = solarSystem;
};

SolarSystemView.prototype = {
	render: function() {
		// this.displayWeight();
		// this.displayTravelTime();
		this.showInnerOrbitContainer();
		this.closeInnerOrbitContainer();
		this.showWeightDiv();
		this.closeDiv();
		this.viewScroll();
		// this.listPlanet();
		// this.displayWeight();
		this.planetByType();
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
		var planetName = document.createElement('p');
		// console.log(newPlanet.weightOnPlanet(weight));

		planetName.innerText = newPlanet.name + ": " + newPlanet.weightOnPlanet(weight).toFixed(2) + " kgs";
		weightBox.appendChild(planetName);
	},

	listPlanets: function(weight){
		for(var planet of this.solarSystem.planets){
			this.listPlanet(planet.name, weight);
		}
	},

	displayWeight: function(){
		var container = document.getElementById('viewDiv');
		while (container.hasChildNodes()) {
		container.removeChild(container.firstChild);
		}
		var weightForm = document.createElement('form');
		var weightInput = document.createElement('input');
		weightInput.setAttribute('placeholder', 'Enter Weight in Kgs');
		weightInput.setAttribute('id', 'weightInput');
		weightForm.appendChild(weightInput);
		container.appendChild(weightForm);
		var planetlist = document.createElement('p');
		planetlist.setAttribute("id", "planetList")
		container.appendChild(planetlist);
		weightForm.onkeyup = function(e){
			var planetBox = document.getElementById('planetList')
			while (planetBox.hasChildNodes()) {
			planetBox.removeChild(planetBox.firstChild);
			}
			e.preventDefault();
			this.listPlanets(e.target.value);
		}.bind(this);
	},
	// XXX: Could use some refactoring as this only deals with the opening of one element.
	showInnerOrbitContainer: function() {
		var showButton = document.getElementsByName("orbit-inner-display")[0];
		showButton.addEventListener("click", function(e) {
			var innerOrbitDisplay = document.getElementsByClassName("orbit-inner-planet-img")[0];
			var innerOrbitClose = document.getElementById("orbit-inner-close");
			e.target = innerOrbitDisplay.style.visibility = "visible";
			e.target = innerOrbitClose.style.visibility = "visible";
		});
	},
	// XXX: Could use some refactoring as this only deals with the closing of one element.
	closeInnerOrbitContainer: function() {
		var close = document.getElementById("orbit-inner-close");
		close.addEventListener("click", function(e) {
			var innerOrbitDisplay = document.getElementsByClassName("orbit-inner-planet-img")[0];
			var innerOrbitClose = document.getElementById("orbit-inner-close");
			e.target = innerOrbitDisplay.style.visibility = "hidden";
			e.target = innerOrbitClose.style.visibility = "hidden";
		});
	},

	showWeightDiv: function() {
		var weightButton = document.getElementById("WeightFrame");
		weightButton.addEventListener("click", function(e) {
			var innerOrbitDisplay = document.getElementById("viewDiv");
			e.target = innerOrbitDisplay.style.visibility = "visible";
			this.displayWeight();
		}.bind(this));
	// },
		var timeButton = document.getElementById("TimeFrame");
		timeButton.addEventListener("click", function(e) {
			var innerOrbitDisplay = document.getElementById("viewDiv");
			e.target = innerOrbitDisplay.style.visibility = "visible";
			this.displayTravelTime();
		}.bind(this));
		var typeButton = document.getElementById("TypeFrame");
		typeButton.addEventListener("click", function(e) {
			var innerOrbitDisplay = document.getElementById("viewDiv");
			e.target = innerOrbitDisplay.style.visibility = "visible";
			this.planetByType();
		}.bind(this));
	},
	closeDiv: function() {
		document.getElementById('main-frame').onclick = function(e) {
			if(e.target != document.getElementById("viewDiv") && e.target != document.getElementById("viewDiv").children[0] && e.target != document.getElementById("viewDiv").children[1] && e.target != document.getElementById("viewDiv").children[2]) {
				console.log(document.getElementById("viewDiv").children);
        		var closeDiv = document.getElementById("viewDiv");
				e.target = closeDiv.style.visibility = "hidden";
    		}
    	};
	},

	displayTravelTime: function(){
		var travelBox = document.getElementById('viewDiv');
		while (travelBox.hasChildNodes()) {
		travelBox.removeChild(travelBox.firstChild);
		}
		// var travelBox = document.getElementById('TravelTime');
		var travelForm = document.createElement('form');
		travelForm.setAttribute('id', 'travelform');
		// travelForm.setAttribute('type', 'submit');
		var planet1Label = document.createElement('label');
		planet1Label.setAttribute( 'id', 'planet1-dropdown');
		planet1Label.innerText = "Choose your first Planet:  ";
		var planet2Label = document.createElement('label');
		planet2Label.setAttribute( 'id', 'planet2-dropdown');
		planet2Label.innerText = "Choose your second Planet:  ";
		var planet3Label = document.createElement('label');
		planet3Label.setAttribute( 'id', 'planet3-dropdown');
		planet3Label.innerText = "Choose your mode of transport:  ";
		var planet1Select = document.createElement('select');
		planet1Select.setAttribute( 'id', 'planet1-content');
		var planet2Select = document.createElement('select');
		planet2Select.setAttribute( 'id', 'planet2-content');
		var planet3Select = document.createElement('select');
		planet3Select.setAttribute( 'id', 'planet3-content');
		var submitButton = document.createElement('input');
		submitButton.setAttribute('type', 'submit');
		submitButton.setAttribute('value', 'Click Here');

		travelForm.addEventListener('submit', this.getTimeInfo.bind(this));

		planet1Label.appendChild(planet1Select);
		planet2Label.appendChild(planet2Select);
		planet3Label.appendChild(planet3Select);
		travelForm.appendChild(planet1Label);
		travelForm.appendChild(planet2Label);
		travelForm.appendChild(planet3Label);
		travelForm.appendChild(submitButton);
		travelBox.appendChild(travelForm);



		this.makeDisplayTravelTimeDropDowns();

		var displayTravel = document.createElement("h1");
		displayTravel.setAttribute("id", "displayTravelTime");
		// var travelBox = document.getElementById('viewDiv');
		travelBox.appendChild(displayTravel);
		console.log(displayTravel);

	},
	makeDisplayTravelTimeDropDowns: function() {
		for(var planet of this.solarSystem.planets){
	    	var planet1 = document.createElement('option');
	    	var planet2 = document.createElement('option');

	    	planet1.text = planet.name;
	    	planet2.text = planet.name;
	    	planet1.setAttribute( 'class', 'planetNameClass' );
	    	planet2.setAttribute( 'class', 'planetNameClass' );
			newObject = JSON.stringify(planet);
	    	planet1.setAttribute( 'value', newObject );
	    	planet2.setAttribute( 'value', newObject );

	    	var newplanet1Select = document.getElementById('planet1-content');
	    	var newplanet2Select = document.getElementById('planet2-content');

	    	newplanet1Select.appendChild(planet1);
	    	newplanet2Select.appendChild(planet2);
		}

		var mode1 = document.createElement('option');
		var mode2 = document.createElement('option');
		var mode3 = document.createElement('option');
		var mode4 = document.createElement('option');

		mode1.text = "Bike";
		mode2.text = "Car";
		mode3.text = "Voyager Probe";
		mode4.text = "starship Enterprise";

		mode1.setAttribute( 'class', 'travelModeClass' );
		mode2.setAttribute( 'class', 'travelModeClass' );
		mode3.setAttribute( 'class', 'travelModeClass' );
		mode4.setAttribute( 'class', 'travelModeClass' );

		mode1.setAttribute( 'value', 'bike' );
		mode2.setAttribute( 'value', 'car' );
		mode3.setAttribute( 'value', 'voyagerSpaceProbe' );
		mode4.setAttribute( 'value', 'starshipEnterprise' );

		var modeSelect = document.getElementById('planet3-content');

		modeSelect.appendChild(mode1);
		modeSelect.appendChild(mode2);
		modeSelect.appendChild(mode3);
		modeSelect.appendChild(mode4);

	},
	getTimeInfo: function(e){
		e.preventDefault();

		var displayTravel = document.getElementById("displayTravelTime");


		while (displayTravel.hasChildNodes()) {
		displayTravel.removeChild(displayTravel.firstChild);
		}

		var select1 = document.getElementById('planet1-content');
		var select2 = document.getElementById('planet2-content');
		var select3 = document.getElementById('planet3-content');

		object1 = select1.options[select1.selectedIndex].value;
		object2 = select2.options[select2.selectedIndex].value;
		object3 = select3.options[select3.selectedIndex].value;

		thisObject1 = JSON.parse(object1);
		thisObject2 = JSON.parse(object2);

		console.log(thisObject1);
		console.log(thisObject2);
		console.log(object3);

		var travelTimeDays = this.solarSystem.travelTime(thisObject1, thisObject2, object3).toFixed();

		// var displayTravel = document.getElementById('FinalTravelTime');


		if(object3 === 'voyagerSpaceProbe'){
			displayTravel.innerText = "It would take you: " + travelTimeDays + " days to travel between " + thisObject1.name + " and " + thisObject2.name + " using a " + object3 + ".";
		} else if(object3 === 'starshipEnterprise')  {
			displayTravel.innerText = "It would take you: " + travelTimeDays + " hours to travel between " + thisObject1.name + " and " + thisObject2.name + " using a " + object3 + ".";
		} else {
			displayTravel.innerText = "It would take you: " + travelTimeDays + " years to travel between " + thisObject1.name + " and " + thisObject2.name + " using a " + object3 + ".";
		}
	},
	planetByType: function(){
		var typeContainer = document.getElementById("viewDiv");
		while (typeContainer.hasChildNodes()) {
		typeContainer.removeChild(typeContainer.firstChild);
		}
		var tButton = document.createElement("button");
		tButton.innerHTML = "See Terrestrial Planets";
		typeContainer.appendChild(tButton);
		var gButton = document.createElement("button");
		gButton.innerHTML = "See Gas Planets";
		typeContainer.appendChild(gButton);
		var gtPlanet = document.createElement("p");
		gtPlanet.setAttribute("id", "gtPlanets");
		typeContainer.appendChild(gtPlanet);

		gButton.onclick = function(e){
			e.preventDefault();
			var gtPlanet = document.getElementById("gtPlanets");
			while (gtPlanet.hasChildNodes()) {
			gtPlanet.removeChild(gtPlanet.firstChild);
			}
			var gList = this.solarSystem.filteredPlanets("Gas");
			for(var planet of gList){
				var gasPlanet = document.createElement("h1");
				gasPlanet.innerText = planet.name;
				gtPlanet.appendChild(gasPlanet);
			}
		}.bind(this);
			tButton.onclick = function(e){
				e.preventDefault();
				var gtPlanet = document.getElementById("gtPlanets");
				while (gtPlanet.hasChildNodes()) {
				gtPlanet.removeChild(gtPlanet.firstChild);
				}
				var tList = this.solarSystem.filteredPlanets("Terrestrial");
				for(var planet of tList){
					var terrPlanet = document.createElement("h1");
					terrPlanet.innerText = planet.name;
					gtPlanet.appendChild(terrPlanet);
				}
		}.bind(this);
	},

	// planetByThing: function(){
	// 	var thingContainer = document.getElementById("thingContainer");
	// 	var thingForm = document.createElement("form");
	// 	var thingSelect = document.createElement("select");
	//
	// }


};

module.exports = SolarSystemView;
