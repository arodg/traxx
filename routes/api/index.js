const router = require("express").Router();
const requestRoutes = require("./purchase_requests");

// Book routes
router.use("/purchase_requests", requestRoutes);

module.exports = router;
