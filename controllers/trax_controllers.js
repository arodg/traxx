
const express = require("express");
const router = express.Router();

const db = require("../models");



router.get("/", function(req, res) {
  db.item.findAll({}).then(function(data) {
    var hbsObject = {
      item: data
    };
    res.render("index", hbsObject);
  });
});


router.post("/api/", function(req, res) {
  db.item.create({
      item_name: req.body.item_name
    }).then(function(result) {
      res.json({id: result.insertID});
    });
});


router.put("/api/item/:id", function(req, res) {
  db.item.update({
  
  }, {
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    res.status(200).end();
  }); 
});


module.exports = router;
