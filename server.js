const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Import routes and give the server access to them.
var routes = require("./controllers/trax_controllers.js");
app.use("/", routes);

// Send every request to the React app
// Define any API routes before this runs
//app.get("*", function(req, res) {
 // res.sendFile(path.join(__dirname, "./client/build/index.html"));
//});


// Sync sequelize models
var db = require("./models");
db.sequelize.sync({force: true}).then(function() {
	app.listen(PORT,function() {
		console.log("App now listening at localhost:" + PORT);
	});
});
