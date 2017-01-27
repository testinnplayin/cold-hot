'use strict';

import React from 'react';

import GuessForm from './guess-form';

export default class GameBoard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			result: 'Make Your Guess!',
			userGuess: '',
			guessCounter: 0,
			guesses: []
		};
	}

	render() {
		return (
			<main className="gameBoard">
				<p><span>{this.state.result}</span></p>
				<GuessForm />
				<p><span>Guess # {this.state.guessCounter}</span></p>
				<p><span>{this.state.guesses}</span></p>
			</main>
		);
	}
}