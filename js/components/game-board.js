'use strict';

import React from 'react';
import {connect} from 'react-redux';

import GuessForm from './guess-form';

let showGuesses = function (guesses) {
	guesses.map(guess => {
		return (
			<span className="guessElement">{guess}</span>
		);
	});
};

export class GameBoard extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);

	}

	render() {
		return (
			<main className="gameBoard">
				<p><span>{this.props.result}</span></p>
				<GuessForm getInput={this.props.getInput} submitGuess={this.props.submitGuess} userGuess={this.props.userGuess} guessCounter={this.props.guessCounter}
				 randomNumber={this.props.randomNumber} guesses={this.props.guesses} />
				<p><span>Guess # {this.props.guessCounter}</span></p>
				<p><span>{showGuesses}</span></p>
			</main>
		);
	}
}

export default connect()(GameBoard);