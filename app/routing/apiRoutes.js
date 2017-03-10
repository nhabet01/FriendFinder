var friends = require("../data/friends.js");


module.exports = function(app){
    //when visiting (clicking on link or routed to) .../api/friends, we will display the array of friends in json format
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    var 
}