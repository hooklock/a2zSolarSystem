var SolarSystemView = require("./views/solarSystem_view.js");

window.onload = function() {
	//Solar System Setup
	var height = document.documentElement.scrollHeight;
	var width = document.documentElement.scrollWidth;

	var scroll = function (event) {
		console.log(event);
		var y = event.clientY;
		var x = event.clientX;
		var yPercentage = y / screen.height;
		var xPercentage = x / screen.width;
		window.scrollTo(xPercentage * width, yPercentage * height);
	};
	scroll(window.onmousemove);
};
