const router = require("express").Router();
const traxx_controllers = require("../../controllers/traxx_controllers");

// Matches with "/api/b"
router.route("/")
  .get(traxx_controllers.findAll)
  .post(traxx_controllers.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(traxx_controllers.findById)
  .put(traxx_controllers.update)
  .delete(traxx_controllers.remove);

module.exports = router;
