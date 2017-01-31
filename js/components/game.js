'use strict';

import React from 'react';
import {connect} from 'react-redux';

import GameBoard from './game-board';

export class Game extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		return (
			<div className="game">
				<button type="button" className="instructionsButton">Instructions</button>
				<button type="button" className="newGameButton">New Game</button>
				<h1>Hot 'N' Cold</h1>
				<GameBoard result={this.props.result} guessCounter={this.props.guessCounter}
				 guesses={this.props.guesses} randomNumber={this.props.randomNumber} 
				 userGuess={this.props.userGuess} submitGuess={this.props.submitGuess}
				 getInput={this.props.getInput} />
			</div>
		);
	}
};

const mapStateToProps = (state) => ({
	result: state.result,
	userGuess: state.userGuess,
	guessCounter: state.guessCounter,
	guesses: state.guesses,
	randomNumber: state.randomNumber
});


export default connect(mapStateToProps)(Game);