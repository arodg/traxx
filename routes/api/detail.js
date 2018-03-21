const router = require("express").Router();
const detailController = require("../../controllers/detailController");

// Matches with "/api/detail"
router.route("/")
  .get(detailController.findAll)
  .post(detailController.create);

// Matches with "/api/detail/:id"
router
  .route("/:id")
  .get(detailController.findById)
  .put(detailController.update)
  .delete(detailController.remove);

module.exports = router;
