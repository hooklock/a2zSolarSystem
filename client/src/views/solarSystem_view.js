var SolarSystemView = function(solarSystem) {
	this.solarSystem = solarSystem;
};

SolarSystemView.prototype = {
	render: function() {
		this.show();
		this.coolscrollything();
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
	show: function() {
		var showButton = document.getElementsByName("orbit-inner-display")[0];
		showButton.addEventListener("click", function(event) {
			var innerOrbitDisplay = document.getElementsByClassName("orbit-inner-planet-img")[0];
			event.target = innerOrbitDisplay.style.visibility = "visible";
		});
	}

};

module.exports = SolarSystemView;
