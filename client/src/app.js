var SolarSystemView = require("./views/solarSystem_view.js");

window.onload = function() {
	//Solar System Setup
	// FIXME: This needs to be refactored into the solarSytem_view.js and then called into app.js. discuss with team Monday Morning.
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
};
