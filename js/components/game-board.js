'use strict';

import React from 'react';
import {connect} from 'react-redux';

import GuessForm from './guess-form';
import GuessList from './guess-list';
import * as actions from '../actions/index';

export class GameBoard extends React.Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		this.props.dispatch(actions.fetchFewestGuesses(this.props.fewestGuesses));
	}

	render() {
		return (
			<section className="gameBoard">
				<p><span value={this.props.result}>{this.props.result}</span></p>
				<GuessForm getInput={this.props.getInput} submitGuess={this.props.submitGuess} userGuess={this.props.userGuess} guessCounter={this.props.guessCounter}
				 randomNumber={this.props.randomNumber} guesses={this.props.guesses} />
				<p><span value={this.props.guessCounter}>Guess # {this.props.guessCounter}</span></p>
				<GuessList guesses={this.props.guesses} />
				<p><span>{this.props.fewestGuesses}</span></p>
			</section>
		);
	}
}

export default connect()(GameBoard);