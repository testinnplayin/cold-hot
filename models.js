'use strict';

const mongoose = require('mongoose');

const guessSchema = mongoose.Schema({
	numberOfGuesses: {type: String, required: true}
});

