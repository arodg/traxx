const router = require("express").Router();
const traxxController = require("../../controllers/traxx_controllers");

// Matches with "/api/books"
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
