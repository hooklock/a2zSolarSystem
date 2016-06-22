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
		this.showDiv();
		this.closeDiv();
		this.viewScroll();
		// this.listPlanet();
		// this.displayWeight();
		// this.planetByType();
		// this.showPlanetDiv();
		// this.closePlanetDiv();
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
		planetlist.setAttribute("id", "planetList");
		container.appendChild(planetlist);
		weightForm.onkeyup = function(e){
			var planetBox = document.getElementById('planetList');
			while (planetBox.hasChildNodes()) {
			planetBox.removeChild(planetBox.firstChild);
			}
			e.preventDefault();
			this.listPlanets(e.target.value);
		}.bind(this);
	},

	showInnerOrbitContainer: function() {
		var showButton = document.getElementsByName("orbit-inner-display")[0];
		showButton.addEventListener("click", function(e) {
			var innerOrbitDisplay = document.getElementsByClassName("orbit-inner-planet-img")[0];
			var MercuryDiv = document.getElementsByClassName("Mercury-div")[0];
			var VenusDiv = document.getElementsByClassName("Venus-div")[0];
			var EarthDiv = document.getElementsByClassName("Earth-div")[0];
			var MarsDiv = document.getElementsByClassName("Mars-div")[0];
			var innerOrbitClose = document.getElementById("orbit-inner-close");
			e.target = innerOrbitDisplay.style.visibility = "visible";
			e.target = innerOrbitClose.style.visibility = "visible";
			e.target = MercuryDiv.style.visibility = "visible";
			e.target = VenusDiv.style.visibility = "visible";
			e.target = EarthDiv.style.visibility = "visible";
			e.target = MarsDiv.style.visibility = "visible";
		});
	},

	closeInnerOrbitContainer: function() {
		var close = document.getElementById("orbit-inner-close");
		close.addEventListener("click", function(e) {
			var innerOrbitDisplay = document.getElementsByClassName("orbit-inner-planet-img")[0];
			var MercuryDiv = document.getElementsByClassName("Mercury-div")[0];
			var VenusDiv = document.getElementsByClassName("Venus-div")[0];
			var EarthDiv = document.getElementsByClassName("Earth-div")[0];
			var MarsDiv = document.getElementsByClassName("Mars-div")[0];
			var innerOrbitClose = document.getElementById("orbit-inner-close");
			e.target = innerOrbitDisplay.style.visibility = "hidden";
			e.target = innerOrbitClose.style.visibility = "hidden";
			e.target = MercuryDiv.style.visibility = "hidden";
			e.target = VenusDiv.style.visibility = "hidden";
			e.target = EarthDiv.style.visibility = "hidden";
			e.target = MarsDiv.style.visibility = "hidden";
		});
	},

	showDiv: function() {
		var weightButton = document.getElementById("WeightFrame");
		weightButton.addEventListener("click", function(e) {
			var innerOrbitDisplay = document.getElementById("viewDiv");
			innerOrbitDisplay.style.visibility = "visible";
			this.displayWeight();
		}.bind(this));
		var timeButton = document.getElementById("TimeFrame");
		timeButton.addEventListener("click", function(e) {
			var innerOrbitDisplay = document.getElementById("viewDiv");
			innerOrbitDisplay.style.visibility = "visible";
			this.displayTravelTime();
		}.bind(this));
		var typeButton = document.getElementById("TypeFrame");
		typeButton.addEventListener("click", function(e) {
			var innerOrbitDisplay = document.getElementById("viewDiv");
			innerOrbitDisplay.style.visibility = "visible";
			this.planetByType();
		}.bind(this));
		var orderButton = document.getElementById("OrderFrame");
		orderButton.addEventListener("click", function(e) {
			var innerOrbitDisplay = document.getElementById("viewDiv");
			innerOrbitDisplay.style.visibility = "visible";
			this.orderPlanetsBy();
		}.bind(this));

		// planet buttons here
		var mercuryButton = document.getElementById("Mercury");
		mercuryButton.addEventListener("click", function(e) {
			var planetDisplay = document.getElementById("planetDiv");
			planetDisplay.style.visibility = "visible";
			this.displayPlanetInfo(mercuryButton.id);
		}.bind(this));
		var venusButton = document.getElementById("Venus");
		venusButton.addEventListener("click", function(e) {
			var planetDisplay = document.getElementById("planetDiv");
			planetDisplay.style.visibility = "visible";
			this.displayPlanetInfo(venusButton.id);
		}.bind(this));
		var earthButton = document.getElementById("Earth");
		earthButton.addEventListener("click", function(e) {
			var planetDisplay = document.getElementById("planetDiv");
			planetDisplay.style.visibility = "visible";
			this.displayPlanetInfo(earthButton.id);
		}.bind(this));
		var marsButton = document.getElementById("Mars");
		marsButton.addEventListener("click", function(e) {
			var planetDisplay = document.getElementById("planetDiv");
			planetDisplay.style.visibility = "visible";
			this.displayPlanetInfo(marsButton.id);
		}.bind(this));
		var jupiterButton = document.getElementById("Jupiter");
		jupiterButton.addEventListener("click", function(e) {
			var planetDisplay = document.getElementById("planetDiv");
			planetDisplay.style.visibility = "visible";
			this.displayPlanetInfo(jupiterButton.id);
		}.bind(this));
		var saturnButton = document.getElementById("Saturn");
		saturnButton.addEventListener("click", function(e) {
			var planetDisplay = document.getElementById("planetDiv");
			planetDisplay.style.visibility = "visible";
			this.displayPlanetInfo(saturnButton.id);
		}.bind(this));
		var uranusButton = document.getElementById("Uranus");
		uranusButton.addEventListener("click", function(e) {
			var planetDisplay = document.getElementById("planetDiv");
			planetDisplay.style.visibility = "visible";
			this.displayPlanetInfo(uranusButton.id);
		}.bind(this));
		var neptuneButton = document.getElementById("Neptune");
		neptuneButton.addEventListener("click", function(e) {
			var planetDisplay = document.getElementById("planetDiv");
			planetDisplay.style.visibility = "visible";
			this.displayPlanetInfo(neptuneButton.id);
		}.bind(this));
	},

	closeDiv: function() {
 		document.getElementById('main-frame').onclick = function(e) {
	  		var closeDiv = document.getElementById("viewDiv");
			if(closeDiv.style.visibility === "visible"){
	 			closeDiv.style.visibility = "hidden";
		}
 		};
		var closeDiv2 = document.getElementById("planetDiv");
			closeDiv2.onclick = function(e){
			if(closeDiv2.style.visibility === "visible") {
					closeDiv2.style.visibility = "hidden";
				}
		};
	},

	displayPlanetInfo: function(planetname){
		var planetInfo = this.solarSystem.findPlanetByName(planetname);
		var planetDiv = document.getElementById("planetDiv");
		while (planetDiv.hasChildNodes()) {
		planetDiv.removeChild(planetDiv.firstChild);
		}
		console.log(planetInfo);
		var planetName  = planetInfo.name;
		var planetSunDistance  = planetInfo.sunDistance;
		var planetEarthDistance  = planetInfo.earthDistance;
		var planetGravity  = planetInfo.gravity;
		var planetMass  = planetInfo.mass;
		var planetOrbitalPeriod  = planetInfo.orbitalPeriod;
		var planetDiameter  = planetInfo.diameter;
		var planetDayLength  = planetInfo.dayLength;
		var planetAxisAngle  = planetInfo.axisAngle;
		// var planetMoons  = planetInfo.moons;

		var break1 = document.createElement("br");
		var break2 = document.createElement("br");
		var break3 = document.createElement("br");
		var break4 = document.createElement("br");
		var break5 = document.createElement("br");
		var break6 = document.createElement("br");
		var break7 = document.createElement("br");
		var break8 = document.createElement("br");

		var nameBox = document.createElement("h1");
		nameBox.setAttribute("id", "planetTitle");
		var pictureBox = document.createElement("h1");
		nameBox.innerText = "This is " + planetName;
		var sunDistanceBox = document.createElement("p");
		sunDistanceBox.setAttribute("class", "planet-p");
		sunDistanceBox.innerText = "Distance from Sun: " + planetSunDistance + "Km";
		var earthDistanceBox = document.createElement("p");
		earthDistanceBox.setAttribute("class", "planet-p");
		earthDistanceBox.innerText = "Distance from Earth: " + planetEarthDistance + "Km";
		var gravityBox = document.createElement("p");
		gravityBox.setAttribute("class", "planet-p");
		gravityBox.innerText = "Gravity: " + planetGravity + "m/s/s";
		var massBox = document.createElement("p");
		massBox.setAttribute("class", "planet-p");
		massBox.innerText = "Mass: " + planetMass;
		var orbitalPeriodBox = document.createElement("p");
		orbitalPeriodBox.setAttribute("class", "planet-p");
		orbitalPeriodBox.innerText = planetName + " takes " + planetOrbitalPeriod + " Earth Days to orbit the Sun.";
		var diameterBox = document.createElement("p");
		diameterBox.setAttribute("class", "planet-p");
		diameterBox.innerText = "Diameter: " + planetDiameter + " m.";
		var dayLengthBox = document.createElement("p");
		dayLengthBox.setAttribute("class", "planet-p");
		dayLengthBox.innerText = "Length of day: " + planetDayLength;
		var axisAngleBox = document.createElement("p");
		axisAngleBox.setAttribute("class", "planet-p");
		axisAngleBox.innerText = "Angle of axis: " + planetAxisAngle + " degrees.";

		var planetPng = document.createElement("img");
		planetPng.setAttribute("id", "planetpng");
		planetPng.setAttribute("src", "./img/" + planetName + "Png.png");
		console.log(planetPng);

		planetDiv.appendChild(nameBox);
		planetDiv.appendChild(pictureBox);
		planetDiv.appendChild(break1);
		planetDiv.appendChild(sunDistanceBox);
		planetDiv.appendChild(break2);
		planetDiv.appendChild(earthDistanceBox);
		planetDiv.appendChild(break3);
		planetDiv.appendChild(gravityBox);
		planetDiv.appendChild(break4);
		planetDiv.appendChild(massBox);
		planetDiv.appendChild(break5);
		planetDiv.appendChild(orbitalPeriodBox);
		planetDiv.appendChild(break6);
		planetDiv.appendChild(diameterBox);
		planetDiv.appendChild(break7);
		planetDiv.appendChild(dayLengthBox);
		planetDiv.appendChild(break8);
		planetDiv.appendChild(axisAngleBox);
		pictureBox.appendChild(planetPng);

	},

	displayTravelTime: function(){
		var travelBox = document.getElementById('viewDiv');
		while (travelBox.hasChildNodes()) {
		travelBox.removeChild(travelBox.firstChild);
		}
		var lineBreak1 = document.createElement("br");
		var lineBreak2 = document.createElement("br");
		var lineBreak3 = document.createElement("br");
		// var innerOrbitClose = document.createElement("img");
		// innerOrbitClose.setAttribute("src", "./img/frame-close.png");
		// innerOrbitClose.setAttribute("class", "close-icon");
		// innerOrbitClose.setAttribute("id", "orbit-inner-close");

		// var travelBox = document.getElementById('TravelTime');
		var travelForm = document.createElement('form');
		travelForm.setAttribute('id', 'travelform');
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
		planet1Label.appendChild(lineBreak1);
		planet2Label.appendChild(planet2Select);
		planet2Label.appendChild(lineBreak2);
		planet3Label.appendChild(planet3Select);
		planet3Label.appendChild(lineBreak3);
		travelForm.appendChild(planet1Label);
		travelForm.appendChild(planet2Label);
		travelForm.appendChild(planet3Label);
		travelForm.appendChild(submitButton);
		travelBox.appendChild(travelForm);
		// travelForm.appendChild(innerOrbitClose);

		this.makeDisplayTravelTimeDropDowns();

		var displayTravel = document.createElement("h3");
		displayTravel.setAttribute("id", "displayTravelTime");
		travelBox.appendChild(displayTravel);
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
		mode4.text = "Starship Enterprise";

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
				var gasPlanet = document.createElement("h3");
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
					var terrPlanet = document.createElement("h3");
					terrPlanet.innerText = planet.name;
					gtPlanet.appendChild(terrPlanet);
				}
		}.bind(this);
	},

	orderPlanetsBy: function() {
		var orderBox = document.getElementById("viewDiv");
		while (orderBox.hasChildNodes()) {
		orderBox.removeChild(orderBox.firstChild);
		}

		var lineBreak1 = document.createElement("br");
		var lineBreak2 = document.createElement("br");
		var lineBreak3 = document.createElement("br");

		var orderForm = document.createElement('form');
		orderForm.setAttribute('id', 'orderform');
		var thingLabel = document.createElement('label');
		thingLabel.setAttribute( 'id', 'thing-dropdown');
		thingLabel.innerText = "Choose your attribute:  ";
		var orderLabel = document.createElement('label');
		orderLabel.setAttribute( 'id', 'order-dropdown');
		orderLabel.innerText = "Ascending or descending?: ";
		var thingSelect = document.createElement('select');
		thingSelect.setAttribute( 'id', 'thing-content');
		var orderSelect = document.createElement('select');
		orderSelect.setAttribute( 'id', 'order-content');
		var submitButton = document.createElement('input');
		submitButton.setAttribute('type', 'submit');
		submitButton.setAttribute('value', 'Find Planet');

		orderForm.addEventListener('submit', this.getOrderInfo.bind(this));

		thingLabel.appendChild(thingSelect);
		thingLabel.appendChild(lineBreak1);
		orderLabel.appendChild(orderSelect);
		orderLabel.appendChild(lineBreak2);
		orderForm.appendChild(thingLabel);
		orderForm.appendChild(orderLabel);
		orderForm.appendChild(submitButton);
		orderBox.appendChild(orderForm);
		// travelForm.appendChild(innerOrbitClose);

		this.makeDisplayOrderDropDowns();

		var displayOrder = document.createElement("h3");
		displayOrder.setAttribute("id", "displayOrder");
		orderBox.appendChild(displayOrder);

	},

	makeDisplayOrderDropDowns: function() {
		// for(var element in this.solarSystem.planets[0]){
		// var thing = document.createElement('option');
		var order1 = document.createElement('option');
		var order2 = document.createElement('option');
		// console.log(Object.keys(this.solarSystem.planets[0]));

		var keys = Object.keys(this.solarSystem.planets[0]);
		for(var key in keys){
			var thing = document.createElement('option');
			// console.log(keys[key]);
			var element = keys[key];
			// console.log(element);
			// var element2 = element.toUpperCase

		thing.text = element.toUpperCase();
		thing.setAttribute( 'class', 'planetNameClass' );
			// newObject = JSON.stringify(thing);
		thing.setAttribute( 'value', element );

		// console.log("thing", thing);

		var newthingSelect = document.getElementById('thing-content');

		newthingSelect.appendChild(thing);
		}

		order1.text = "Ascending";
		order1.setAttribute( 'class', 'planetNameClass' );
		order1.setAttribute( 'value', "ascending" );
		order2.text = "Descending";
		order2.setAttribute( 'class', 'planetNameClass' );
		order2.setAttribute( 'value', "descending" );

		var neworderSelect = document.getElementById('order-content');

		neworderSelect.appendChild(order1);
		neworderSelect.appendChild(order2);
	},

	getOrderInfo: function(e) {
		e.preventDefault();

		var displayOrder = document.getElementById("displayOrder");

		while (displayOrder.hasChildNodes()) {
		displayOrder.removeChild(displayOrder.firstChild);
		}

		var select1 = document.getElementById('thing-content');
		var select2 = document.getElementById('order-content');

		object1 = select1.options[select1.selectedIndex].value;
		object2 = select2.options[select2.selectedIndex].value;

		// console.log(object1);
		// console.log(object2);

		// console.log(this.solarSystem);

		var orderOfPlanets = this.solarSystem.orderThingsBy(object1, object2);

		console.log(orderOfPlanets);

		displayOrder.innerText = "In " + object2 + " order: " + orderOfPlanets[0].name + ", " + orderOfPlanets[1].name + ", " + orderOfPlanets[2].name + ", " + orderOfPlanets[3].name + ", " + orderOfPlanets[4].name + ", " + orderOfPlanets[5].name + ", " + orderOfPlanets[6].name + ", " + orderOfPlanets[7].name;

	}
};


	// planetByThing: function(){
	// 	var thingContainer = document.getElementById("thingContainer");
	// 	var thingForm = document.createElement("form");
	// 	var thingSelect = document.createElement("select");
	//
	// }

module.exports = SolarSystemView;
