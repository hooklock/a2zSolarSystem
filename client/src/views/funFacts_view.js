var _ = require('lodash');

var FunFactsView = function(funfacts) {
	this.funfacts = funfacts;
};

FunFactsView.prototype = {
	render: function() {
		this.randomFact();
		// this.showFunFactDiv();
		// this.closeFunFactDiv();
	},
    randomFact: function(){
        var factBox = document.getElementById('viewDiv');
		while (factBox.hasChildNodes()) {
		factBox.removeChild(factBox.firstChild);
		}
        var random = _.sample(this.funfacts.facts).fact;
		var factoid = document.createElement("h3");
		factBox.appendChild(factoid);
        factoid.innerText = random;
    },
	showFunFactDiv: function() {
		var factButton = document.getElementById("FactFrame");
		factButton.addEventListener("click", function(e) {
			var innerOrbitDisplay = document.getElementById("viewDiv");
			e.target = innerOrbitDisplay.style.visibility = "visible";
			this.randomFact();
		}.bind(this));
	},
	closeFunFactDiv: function() {
		document.getElementById('main-frame').onclick = function(e) {
			if(e.target != document.getElementById("viewDiv") && e.target != document.getElementById("viewDiv").children[0]) {
				console.log(document.getElementById("viewDiv").children);
				var closeDiv = document.getElementById("viewDiv");
				e.target = closeDiv.style.visibility = "hidden";
			}
		};
	},
};

module.exports = FunFactsView;
