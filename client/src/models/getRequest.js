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
                    // var solarsystem = new SolarSystem(sampleSolarSystem);
                    // console.log(solarsystem);
                    // return solarsystem;
                    return callback(sampleSolarSystem);
                    // localStorage.setItem('data', JSON.stringify(sampleSolarSystem));
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
                    // var solarsystem = new SolarSystem(sampleFunFacts);
                    // console.log(solarsystem);
                    // return solarsystem;
                    return callback(sampleFunFacts);
                    // localStorage.setItem('data', JSON.stringify(sampleSolarSystem));
                }
            };
            request.send(null);
    };

    // this.getSolarSystem();
};

module.exports = GetRequest;
