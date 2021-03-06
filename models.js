'use strict';

const mongoose = require('mongoose');

const guessSchema = mongoose.Schema({
	game: {
		numberOfGuesses: {type: String, required: true}
	}
});

guessSchema.methods.apiRepr = function() {
	return {
		id: this._id,
		game: this.game
	};
};

const Guess = mongoose.model('Guess', guessSchema);

module.exports = {Guess};