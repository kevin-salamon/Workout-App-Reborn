const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var moment = require('moment');
var today = moment().format('L');
console.log(today); // confirmed as mm/dd/yyyy

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: today
    },
    calories: {
        type: Number
    },
    protein: {
        type: Number
    },
    workouts: {
        type: Array
    },
    weight: {
        type: Number
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;