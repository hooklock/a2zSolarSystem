var FunFacts = function(params){
    this.facts = params.facts;
};

FunFacts.prototype = {
    addFact: function(fact){
        this.facts.push(fact);
    }
};

module.exports = FunFacts;
