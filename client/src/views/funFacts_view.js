var _ = require('lodash');

var FunFactsView = function(funfacts) {
	this.funfacts = funfacts;
};

FunFactsView.prototype = {
	render: function() {
		this.randomFact();
	},
    randomFact: function(){
        var factBox = document.getElementById('RandomFact');
        var random = _.sample(this.funfacts.facts).fact;
        factBox.innerText = random;
    }
};

module.exports = FunFactsView;
