
const express = require("express");
const router = express.Router();

const db = require("../models");



router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
});

module.exports = router;
