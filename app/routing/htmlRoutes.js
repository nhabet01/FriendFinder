var path = require("path");

//in exports, want to pass in parameter app which refers to express()
module.exports = function(app){
    //when user hits the site .../survey, deliver the survey.html file
    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    //no specific url given here b/c we want user to be directed home in any non predefined situation
    app.use(function(req,res){
        res.sendFile(path.join(__dirname + "/../public/home.html"))
    });

}