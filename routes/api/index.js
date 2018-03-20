const router = require("express").Router();
const prRoutes = require("./pr");
const itemRoutes = require("./item");
const detailRoutes = require("./detail")

// Purchase Request routes
router.use("/pr", prRoutes);

// Item routes
router.use("/item", itemRoutes);

// Purchase Request detail routes
router.use("/detail", detailRoutes);

module.exports = router;
