const router = require("express").Router();
const prController = require("../../controllers/prController");

// Matches with "/api/purchase_requests"
router.route("/")
  .get(prController.findAll)
  .post(prController.create);

// Matches with "/api/purchase_requests/:id"
router
  .route("/:id")
  .get(prController.findById)
  .put(prController.update)
  .delete(prController.remove);

module.exports = router;
