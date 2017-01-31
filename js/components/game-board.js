'use strict';

import React from 'react';
import {connect} from 'react-redux';

import GuessForm from './guess-form';

export class GameBoard extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);

	}

	render() {
		return (
			<main className="gameBoard">
				<p><span>{this.props.result}</span></p>
				<GuessForm getInput={this.props.getInput} submitGuess={this.props.submitGuess} userGuess={this.props.userGuess} />
				<p><span>Guess # {this.props.guessCounter}</span></p>
				<p><span>{this.props.guesses}</span></p>
			</main>
		);
	}
}

export default connect()(GameBoard);