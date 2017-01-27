'use strict';

import React from 'react';

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
				<form onSubmit={this.submitGuess}>
					<input type="text" name="userGuess" autoComplete="off" placeholder="Enter Your Guess"/>
					<button type="submit">Guess</button>
				</form>
				<p><span>Guess # {this.state.guessCounter}</span></p>
				<p><span>{this.state.guesses}</span></p>
			</main>
		);
	}
}