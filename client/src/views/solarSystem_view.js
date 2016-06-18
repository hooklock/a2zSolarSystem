var SolarSystemView = function(solarSystem) {
	this.solarSystem = solarSystem;
};

SolarSystemView.prototype = {
	render: function() {

	},

	scroll: function (event) {
		var y = event.clientY;
		var x = event.clientX;
		var yPercentage = y / screen.height;
		var xPercentage = x / screen.width;
		window.scrollTo(xPercentage * width, yPercentage * height);
	}
};

module.exports = SolarSystemView;
