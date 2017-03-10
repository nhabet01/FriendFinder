// Set Dependencies (npm packages used to give the server useful functionality)
// ============================================================================
var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path");

// Sets up the Express App
// =============================================================
// Tells node that we are creating an "express" server
var app = express();
// Sets an initial port to be whatever is in the environment variable PORT, or 3000 if none is available (When hosting your application on another service (Heroku), your host may independently configure the process.env.PORT variable for you)
var PORT = process.env.PORT || 3000;

//application/json parser:
var jsonParser = bodyParser.json();//nh: taken from site not sure if needed

// Sets up the Express app to handle data parsing. BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));//should this be false?
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// app.use(bodyParser.raw({type: 'application/vnd.custom-type'}));
// app.use(bodyParser.json({ type: "application/*+json" }));

// LISTENER
// The below code effectively "starts" our server
// ==============================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

//================================================================================
//Routes:
//require files similar to requiring node modules.  tell to pass in app=express
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);