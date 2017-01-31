'use strict';

export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = (guess) => ({
	type: SUBMIT_GUESS,
	guess
});

export const GET_INPUT = 'GET_INPUT';
export const getInput = (userGuess) => ({
	type: GET_INPUT,
	userGuess
});

export const CHANGE_COUNTER = 'CHANGE_COUNTER';
export const changeCounter = (guessCounter) => ({
	type: CHANGE_COUNTER,
	guessCounter
});