const router = require("express").Router();
const prRoutes = require("./pr");
const itemRoutes = require("./item");
const employeeRoutes = require("./employee")

// Purchase Request routes
router.use("/pr", prRoutes);

// Item routes
router.use("/item", itemRoutes);

// Employee routes
router.use("/employee", employeeRoutes);

module.exports = router;
