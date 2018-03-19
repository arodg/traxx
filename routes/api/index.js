const router = require("express").Router();
const purchaseRequestRoutes = require("./purchase_requests");

// Purchase Request routes
router.use("/purchase_requests", purchaseRequestRoutes);

module.exports = router;
