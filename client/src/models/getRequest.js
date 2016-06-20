var GetRequest = function(url){
    this.url = url;

    this.getSolarSystem = function(callback){
            var request = new XMLHttpRequest();
            request.open("GET", this.url);
            request.onload = function(){
                if(request.status === 200){
                    console.log("got the data");
                    var jsonString = request.responseText;
                    var sampleSolarSystem = JSON.parse(jsonString);

                    callback(sampleSolarSystem);
                    // localStorage.setItem('data', JSON.stringify(sampleSolarSystem));
                }
            };
            request.send(null);
    };

    this.getSolarSystem();
};

module.exports = GetRequest;
