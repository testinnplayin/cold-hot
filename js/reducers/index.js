'use strict';

import update from 'immutability-helper';
import * as types from '../actions/index';

const initialState = {
	result: 'Make Your Guess!',
	userGuess: '',
	guessCounter: 0,
	guesses: [],
	randomNumber: getRandomNumber(),
	instructions: false
};

function getRandomNumber() {
	let num = Math.floor(Math.random() * 100);
	return num;
}

function determineOutcome(userGuess, randomNumber) {
	if (userGuess == randomNumber) {
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
		case types.SUBMIT_GUESS://actions named on what has happened
			let guess = action.guess

			const newState_1 = update(state, {
				guess: {
					$set: guess
				}
			});

			console.log(newState_1);

			return newState_1;
		case types.GET_INPUT:
			let userGuess = action.userGuess;

			const newState_2 = update(state, {
				userGuess: {
					$set: userGuess
				}
			});

			console.log(newState_2);

			return newState_2;
		case types.CHANGE_COUNTER:
			let guessCounter = action.guessCounter,
				newCounter = changeCounter(guessCounter);

			const newState_3 = update(state, {
				guessCounter: {
					$set: newCounter
				}
			});

			console.log(newState_3);

			return newState_3;
		case types.DETERMINE_RESULT:
			let compGuess = action.compGuess,
				randomNumber = action.randomNumber,
				result = determineOutcome(compGuess, randomNumber);

			const newState_4 = update(state, {
				result: {
					$set: result
				}
			});

			console.log(newState_4);

			return newState_4;

		case types.SHOW_GUESSES:
			let guesses = action.guesses,
				singleGuess = action.singleGuess;

			const newState_5 = update(state, {
				guesses: {
					$push: [singleGuess]
				}
			});

			console.log(newState_5);

			return newState_5;
		case types.SHOW_INSTRUCTIONS:
			let instructions = action.instructions;

			const newState_6 = update(state, {
				instructions: {
					$set: instructions
				}
			});

			console.log(newState_6);

			return newState_6;
		case types.RESET_GAME:
			let currRandomNum = action.currUserGuess,
				newRandomNum = getRandomNumber(),
				newState = initialState;

			const newState_7 = update(newState, {
				randomNumber: {
					$set: newRandomNum
				}
			});

			console.log(newState_7);

			return newState_7;
		case types.FETCH_FEWEST_GUESSES_SUCCESS:
			let fewestGuesses = action.fewestGuesses;

			const newState_8 = update(state, {
				fewestGuesses: {
					$set: fewestGuesses
				}
			});

			console.log(newState_8);

			return newState_8;
		case types.FETCH_FEWEST_GUESSES_ERROR:
			let error = action.error;

			const newState_9 = update(state, {
				fewestGuesses: error
			});

			console.log(newState_9);

			return newState_9;
		case types.SAVE_FEWEST_GUESSES_SUCCESS:
			let saveFewestGuesses = action.fewestGuesses;

			const newState_10 = update(state, {
				fewestGuesses: {
					$set: saveFewestGuesses
				}
			});

			console.log(newState_10);

			return newState_10;
		case types.SAVE_FEWEST_GUESSES_ERROR:
			let saveError = action.saveError;

			const newState_11 = update(state, {
				fewestGuesses: {
					$set: saveError
				}
			});

			console.log(newState_11);

			return newState_11;
		default:
			return state;
	}
};