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
				<GameBoard />
			</div>
		);
	}
};

const mapStateToProps = (state, props) => ({
	result: state.result,
	userGuess: state.userGuess,
	guessCounter: state.guessCounter,
	guesses: state.guesses,
	randomNumber: state.randomNumber
});


export default connect(mapStateToProps)(Game);