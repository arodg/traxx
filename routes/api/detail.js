const router = require("express").Router();
const detailController = require("../../controllers/detailController");

// Matches with "/api/purchase_requests"
router.route("/")
  .get(detailController.findAll)
  .post(detailController.create);

// Matches with "/api/purchase_requests/:id"
router
  .route("/:id")
  .get(detailController.findById)
  .put(detailController.update)
  .delete(detailController.remove);

module.exports = router;
