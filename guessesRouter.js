'use strict';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

const {Guess} = require('./models');

router.get('/', (req, res) => {
	Guess
	.find()
	.exec()
	.then(function(guesses) {
		res.json({games: guesses.map(guess => guess.apiRepr())
		});
	})
	.catch(function(err) {
		console.error(err);
		res.status(500).json({ message : 'Internal server error, cannot get fewest guesses' });
	});
});

module.exports = router;