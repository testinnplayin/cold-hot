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
		let gamesObj = {
			games: guesses.map(guess => guess.apiRepr())
		},
			gamesArr = gamesObj.games,
			gamesLng = gamesArr.length,
			numsArr = [];

		for (let i = 0; i < gamesLng; i++) {
			let gameObj = gamesArr[i],
				num = parseInt(gameObj.game.numberOfGuesses);

			numsArr.push(num);
		}

		let min = Math.min(...numsArr);

		res.json({
			fewestGuesses: min
		});
	})
	.catch(function(err) {
		console.error(err);
		res.status(500).json({ message : 'Internal server error, cannot get fewest guesses' });
	});
});

router.post('/', jsonParser, (req, res) => {
	const requiredFields = ['numberOfGuesses'];
	let lng = requiredFields.length;
	
	for (let i = 0; i < lng; i++) {
		let field = requiredFields[i];

		if(!(field in req.body)) {
			let msg = `Please specify a value for ${field}`;
			console.error(msg);
			return res.status(400).send(msg);
		}
	}

	Guess
	.create({
		game: {
			numberOfGuesses: req.body.numberOfGuesses
		}
	})
	.then(function(guess) {
		res.status(201).json(guess.apiRepr());
	})
	.catch(function(err) {
		console.error(err);
		res.status(500).json({ message : 'Internal server error, cannot post' });
	});
});

module.exports = router;