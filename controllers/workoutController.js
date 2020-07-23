const db = require("../models");

module.exports = {
  getSavedWorkouts: function(req, res) {
    db.Workout.find({}).then(dbEntryData => res.json(dbEntryData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  },
  saveWorkout: function(req, res) {
    db.Workout.create(req.body).then(dbEntryData => res.json(dbEntryData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  },
  removeWorkout: function(req, res) {
    db.Workout.remove({
      _id: req.params.id
    }).then(dbEntryData => res.json(dbEntryData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  },
  updateWorkout: function(req, res) {
    db.Workout.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(entryData => res.json(entryData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  }
};
