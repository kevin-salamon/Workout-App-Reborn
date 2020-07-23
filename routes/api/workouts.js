const router = require("express").Router();
const workoutController = require("../../controllers/workoutController");

router.route("/")
    .get(workoutController.getSavedWorkouts)
    .post(workoutController.saveWorkout);

router.route("/:id")
    .delete(workoutController.removeWorkout)
    .put(workoutController.updateWorkout);

module.exports = router;