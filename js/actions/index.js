'use strict';

export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = (userGuess, randomNumber) => ({
	type: SUBMIT_GUESS,
	userGuess,
	randomNumber
});
