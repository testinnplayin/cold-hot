'use strict';

import React from 'react';
import {connect} from 'react-redux';

import GuessForm from './guess-form';
import GuessList from './guess-list';

export class GameBoard extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<section className="gameBoard">
				<p><span>{this.props.result}</span></p>
				<GuessForm getInput={this.props.getInput} submitGuess={this.props.submitGuess} userGuess={this.props.userGuess} guessCounter={this.props.guessCounter}
				 randomNumber={this.props.randomNumber} guesses={this.props.guesses} />
				<p><span>Guess # {this.props.guessCounter}</span></p>
				<GuessList guesses={this.props.guesses} />
			</section>
		);
	}
}

export default connect()(GameBoard);