var friends = require("../data/friends.js");


module.exports = function(app){
    //when visiting (clicking on link or routed to) .../api/friends, we will display the array of friends in json format
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    //POST route for /api/friends.  Takes in new data
    app.post("/api/friends", function(req,res){

        console.log("#friends:" +friends.length);
        console.log(req.body);//nh: delete after debugging
        console.log("-----------");

        //parse user's survey entry
        var userInput = req.body;
        var userAnswers = userInput.answers;
        //Will capture all the differences between each friend and current user
        var differences = [];
        console.log("user answers:");
        console.log(userAnswers);//nh: delete after debugging
        console.log("-----------");

        var totalDiff =0;
        //Nested for loops: Loop through all friends for best match
        for (var i = 0; i< friends.length; i++){
            console.log("friends i:")
            console.log(friends[i]);//nh: delete after debugging
            console.log("-----------");
            totalDiff =0; 

            //loop through answers:
            for (var j = 0; j<friends[i].answers.length; j++){
                totalDiff += Math.abs(parseInt(userAnswers[j])-parseInt(friends[i].answers[j]));
                console.log("totalDiff: ")
                console.log(totalDiff);
                console.log("-----------");
                
            }
            differences.push(totalDiff);
            console.log("updated differences:");
            console.log(differences);
            console.log("-----------");
    

        }

        var minDiff = Math.min.apply(null,differences);
        console.log("minDiff: "+ minDiff )
        //May be more than one entry in friends list with the same totalDiff:
        var closestMatches = [];
        // For each item in differences, if it is equal to the minimumDifference, add the corresponding friendData to the closestMatches array.
        for (var i = 0; i < differences.length; i++) {
            if (differences[i] === minDiff) {
                closestMatches.push(friends[i]);
            }
        }

        //push existing user to the friends array.
        friends.push(userInput);
        //return json of the closestMatch info to be viewed in the html (modal)
        res.json(closestMatches);
        console.log("closestMatches: ")
        console.log(closestMatches);

    });//end app.post

    
}