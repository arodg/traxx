
const router = require("express").Router();
const prController = require("../../controllers/prController");

// Matches with "/api/pr"
router.route("/")
  .get(prController.findAll)
  .post(prController.create);

// Matches with "/api/pr/:id"
router
  .route("/:id")
  .get(prController.findById)
  .put(prController.update)
  .delete(prController.remove);

module.exports = router;
