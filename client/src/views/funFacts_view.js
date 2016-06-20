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
        // console.log(this.funfacts.facts);
        var random = _.sample(this.funfacts.facts).fact;
        factBox.innerText = random;
        // console.log(random);
    }
};

module.exports = FunFactsView;
