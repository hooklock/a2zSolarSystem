var FunFacts = function(){
  this.facts = [];
};

FunFacts.prototype = {
  addFact: function(fact){
    this.facts.push(fact);
  }
};

module.exports = FunFacts;
