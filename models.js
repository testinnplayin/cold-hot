'use strict';

const mongoose = require('mongoose');

const guessSchema = mongoose.Schema({
	game: {
		numberOfGuesses: {type: String, required: true}
	}
});

const Guess = mongoose.model('Guess', guessSchema);

module.exports = {Guess};