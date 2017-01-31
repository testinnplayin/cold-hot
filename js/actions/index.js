'use strict';

export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = (guess, randomNumber, guessCounter) => ({
	type: SUBMIT_GUESS,
	guess,
	randomNumber,
	guessCounter
});

export const GET_INPUT = 'GET_INPUT';
export const getInput = (userGuess) => ({
	type: handleChange,
	userGuess
});
