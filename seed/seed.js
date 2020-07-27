const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/workouts"
);

const Seed = [
  {
    calories: 100,
    protein: 100,
    workouts: 'Test 1',
    weight: 200,
  },
  {
    calories: 200,
    protein: 200,
    workouts: 'Test 2',
    weight: 300,
  }
];

db.Workout.remove({})
  .then(() => db.Workout.collection.insertMany(Seed))
  .then(data => {
    console.log("Original workouts deleted. " + data.result.n + " workouts added.");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
