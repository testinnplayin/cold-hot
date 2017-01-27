'use strict';

import React from 'react';
import {connect} from 'react-redux';

import GuessForm from './guess-form';

export class GameBoard extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			result: 'Make Your Guess!',
			userGuess: '',
			guessCounter: 0,
			guesses: [],
			randomNumber: Math.floor(Math.random() * 100)
		};

		this.submitGuess = this.submitGuess.bind(this);
	}

	submitGuess(e) {
		e.preventDefault();
		e.stopPropagation();
		const userGuess = this.userGuessInput.value;
		let randomNumber = this.props.state.randomNumber,
			guessCounter = this.props.state.guessState;
		console.log('submit triggered');
		console.log(props);

		this.props.dispatch(actions.submitGuess(userGuess, randomNumber, guessCounter));
		return false;
	}

	render() {
		return (
			<main className="gameBoard">
				<p><span>{this.state.result}</span></p>
				<GuessForm onSubmit={this.onSubmit} />
				<p><span>Guess # {this.state.guessCounter}</span></p>
				<p><span>{this.state.guesses}</span></p>
			</main>
		);
	}
}

export default connect()(GameBoard);