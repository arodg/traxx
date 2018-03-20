const express = require("express");
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const app = express();

// API Routes
router.use("/api", apiRoutes);

// Test
//app.get('/', (req, res) => {
	//res.send({ express: 'Hello From Trax' });
//});

// Define any API routes before this runs
app.post("/api/items", function(req,res) {
  console.log(req.body);
  models.items.create(req.body)
  .then(() => console.log("success"))
  .catch(err => console.log(err))
})

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
