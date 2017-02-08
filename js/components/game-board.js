'use strict';

import React from 'react';
import {connect} from 'react-redux';

import GuessForm from './guess-form';
import GuessList from './guess-list';
import * as actions from '../actions/index';

export class GameBoard extends React.Component {
	constructor(props) {
		super(props);
		this.persistentFewest = '';
	}

	componentDidMount() {
		this.props.dispatch(actions.fetchFewestGuesses(this.props.fewestGuesses));
	}

	render() {

		if (this.props.result === 'Got It!') {
			if(typeof(this.props.fewestGuesses) !== 'undefined'){ this.persistentFewest = this.props.fewestGuesses }
			console.info('I think this inconsitency may be caused by an omission in the mongoose POST. I think it just needs to have fewestGuesses queried/found/and returned along with the rest of the data');
			console.log(this.persistentFewest,this.props.fewestGuesses,this.props.guessCounter);
			this.props.dispatch(actions.saveFewestGuesses(this.props.guessCounter));
		}

		return (
			<section className="gameBoard">
				<p><span value={this.props.result}>{this.props.result}</span></p>
				<GuessForm getInput={this.props.getInput} submitGuess={this.props.submitGuess} userGuess={this.props.userGuess} guessCounter={this.props.guessCounter}
				 randomNumber={this.props.randomNumber} guesses={this.props.guesses} />
				<p><span value={this.props.guessCounter}>Guess # {this.props.guessCounter}</span></p>
				<GuessList guesses={this.props.guesses} />
				<p><span>Fewest Guesses: {this.props.fewestGuesses || this.persistentFewest}</span></p>
			</section>
		);
	}
}

export default connect()(GameBoard);
