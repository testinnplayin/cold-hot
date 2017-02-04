'use strict';

import 'isomorphic-fetch';

export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = (guess) => ({
	type: SUBMIT_GUESS,
	guess
});

export const GET_INPUT = 'GET_INPUT';//INPUT_CHANGE
export const getInput = (userGuess) => ({
	type: GET_INPUT,
	userGuess
});

export const CHANGE_COUNTER = 'CHANGE_COUNTER';
export const changeCounter = (guessCounter) => ({
	type: CHANGE_COUNTER,
	guessCounter
});

export const DETERMINE_RESULT = 'DETERMINE_RESULT';
export const determineResult = (compGuess, randomNumber) => ({
	type: DETERMINE_RESULT,
	compGuess,
	randomNumber
});

export const SHOW_GUESSES = 'SHOW_GUESSES';
export const showGuesses = (guesses, singleGuess) => ({
	type: SHOW_GUESSES,
	guesses,
	singleGuess
});

export const SHOW_INSTRUCTIONS = 'SHOW_INSTRUCTIONS';
export const showInstructions = (instructions) => ({
	type: SHOW_INSTRUCTIONS,
	instructions
});

export const RESET_GAME = 'RESET_GAME';
export const resetGame = (currUserGuess) => ({
	type: RESET_GAME,
	currUserGuess
});

export const FETCH_FEWEST_GUESSES_SUCCESS = 'FETCH_FEWEST_GUESSES_SUCCESS';
export const fetchFewestGuessesSuccess = (fewestGuesses) => ({
	type: FETCH_FEWEST_GUESSES_SUCCESS,
	fewestGuesses
});

export const FETCH_FEWEST_GUESSES_ERROR = 'FETCH_FEWEST_GUESSES_ERROR';
export const fetchFewestGuessesError = (error) => ({
	type: FETCH_FEWEST_GUESSES_ERROR,
	error
});

export const fetchFewestGuesses = fewestGuesses => dispatch => {
	let endpt = '/fewest-guesses',
		reqOpts = {
			method: 'GET'
		},
		getReq = new Request(endpt, reqOpts);

	fetch(getReq)
	.then((response) => {
		if (!response.ok) {
			const error = new Error(response.statusText);
			error.response;
			throw error;
		}

		return response;
	})
	.then(response => response.json())
	.then(data => dispatch(fetchFewestGuessesSuccess(data.fewestGuesses)))
	.catch(error => dispatch(fetchFewestGuessesError(error)));

};

export const SAVE_FEWEST_GUESSES_SUCCESS = 'SAVE_FEWEST_GUESSES_SUCCESS';
export const saveFewestGuessesSuccess = (saveFewestGuesses) => ({
	type: SAVE_FEWEST_GUESSES_SUCCESS,
	saveFewestGuesses
});

export const SAVE_FEWEST_GUESSES_ERROR = 'SAVE_FEWEST_GUESSES_ERROR';
export const saveFewestGuessesError = (saveError) => ({
	type: SAVE_FEWEST_GUESSES_ERROR,
	saveError
});

export const saveFewestGuesses = saveFewestGuesses => dispatch => {
	let endpt = '/fewest-guesses',
		reqOpts = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				numberOfGuesses: saveFewestGuesses
			})
		},
		postReq = new Request(endpt, reqOpts);

		fetch(postReq)
		.then(response => {
			if (!response.ok) {
				const error = new Error(response.statusText);
				error.response;
				throw error;
			}

			return response;
		})
		.then(response => response.json())
		.then(data => dispatch(saveFewestGuessesSuccess(data.saveFewestGuesses)))
		.catch(saveError => dispatch(saveFewestGuessesError(saveError)));
};