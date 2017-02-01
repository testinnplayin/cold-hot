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