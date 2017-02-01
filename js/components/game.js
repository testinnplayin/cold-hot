'use strict';

import React from 'react';
import {connect} from 'react-redux';

import GameBoard from './game-board';
import InstructionButton from './instruction-button';
import NewGameButton from './newgame-button';

export class Game extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="game">
				<header>
					<InstructionButton showInstructions={this.props.showInstructions} instructions={this.props.instructions} />
					<NewGameButton resetGame={this.props.resetGame} result={this.props.result} userGuess={this.props.userGuess} guessCounter={this.props.guessCounter}
					 randomNumber={this.props.randomNumber} guesses={this.props.guesses} />
					<h1>Hot 'N' Cold</h1>
				</header>
				<main>
					<GameBoard result={this.props.result} guessCounter={this.props.guessCounter}
					 guesses={this.props.guesses} randomNumber={this.props.randomNumber} 
					 userGuess={this.props.userGuess} submitGuess={this.props.submitGuess}
					 getInput={this.props.getInput} />
				 </main>
			</div>
		);
	}
};

const mapStateToProps = (state) => ({
	result: state.result,
	userGuess: state.userGuess,
	guessCounter: state.guessCounter,
	guesses: state.guesses,
	randomNumber: state.randomNumber,
	instructions: state.instructions
});


export default connect(mapStateToProps)(Game);