'use strict';

import update from 'immutability-helper';
import * as types from '../actions/index';

const initialState = {
	result: 'Make Your Guess!',
	userGuess: '',
	guessCounter: 0,
	guesses: [],
	randomNumber: Math.floor(Math.random() * 100)
};

function determineOutcome(userGuess, randomNumber) {
	if (userGuess === randomNumber) {
		return 'Got It!';
	} else if (Math.abs(randomNumber - userGuess) <= 5) {
		return 'Hot!';
	} else if (Math.abs(randomNumber - userGuess) > 5 && Math.abs(randomNumber - userGuess) <= 10) {
		return 'Warm';
	} else {
		return "Cold";
	}
}

function changeCounter(guessCounter) {
	let newCounter = guessCounter + 1;
	return newCounter;
}

export const gameReducer = (state=initialState, action) => {
	switch(action.type) {
		case types.SUBMIT_GUESS:
			let userGuess = action.userGuess,
				randomNumber = action.randomNumber,
				guessCounter = action.guessCounter,
				resultComp = determineOutcome(userGuess, randomNumber),
				newCounter = changeCounter(guessCounter);

			const newState_1 = update(state, {
				result: {
					$set: resultComp
				},
				counter: {
					$set: newCounter
				},
				guesses: {
					$push: [userGuess]
				}
			});

			console.log(newState_1);

			return newState_1;
		default:
			return state;
	}
};