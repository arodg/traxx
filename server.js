const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();


// Serve up static assets
app.use(express.static("client/build"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Import routes and give the server access to them.
const routes = require("./controllers/_controllers.js");
app.use("/", routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// Sync sequelize models
var db = require("./models");
db.sequelize.sync({force: true}).then(function() {
	app.listen(PORT,function() {
		console.log("App now listening at localhost:" + PORT);
	});
});
