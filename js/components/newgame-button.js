'use strict';

import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

export class NewGameButton extends React.Component {
	constructor(props) {
		super(props);

		console.log(this.props);
		this.handleClickOnNewGame = this.handleClickOnNewGame.bind(this);
	}

	handleClickOnNewGame(e) {
		e.preventDefault();

		let currUserGuess = this.props.userGuess;

		this.props.dispatch(actions.resetGame(currUserGuess));
		this.props.dispatch(actions.fetchFewestGuesses(this.props.fewestGuesses));
	}

	render() {
		return (
			<div className="newGameButton">
				<button type="button" onClick={this.handleClickOnNewGame}>New Game</button>
			</div>
		);
	}

};

export default connect()(NewGameButton);