var SolarSystem = require("./solarsystem.js");
var GetRequest = function(url){
  this.url = url;

  this.getSolarSystem = function(callback){
    var request = new XMLHttpRequest();
    request.open("GET", this.url);
    request.onload = function(){
      if(request.status === 200){
        console.log("got the data");
        var jsonString = request.responseText;
        var sampleSolarSystem = JSON.parse(jsonString)[0];
        return callback(sampleSolarSystem);
      }
    };
    request.send(null);
  };

  this.getFunFacts = function(callback){
    var request = new XMLHttpRequest();
    request.open("GET", this.url);
    request.onload = function(){
      if(request.status === 200){
        console.log("got the data");
        var jsonString = request.responseText;
        var sampleFunFacts = JSON.parse(jsonString);
        return callback(sampleFunFacts);
      }
    };
    request.send(null);
  };

};

module.exports = GetRequest;
