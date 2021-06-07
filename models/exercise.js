const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
	//create this name, duration, distanc, weight, reps, sets
	type: String,
	name: String,
	duration: Number,
	distance: Number,
	weight: Number,
	reps: Number,
	sets: Number,
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;