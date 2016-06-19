var SolarSystemView = function() {
// var SolarSystemView = function(solarSystem) {
// 	this.solarSystem = solarSystem;
};

SolarSystemView.prototype = {
	render: function() {
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
	}
};

module.exports = SolarSystemView;
