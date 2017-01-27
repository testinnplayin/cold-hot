'use strict';

import React from 'react';
import {connect} from 'react-redux';

import GameBoard from './game-board';

export class Game extends React.Component {
	constructor(props) {
		super(props);
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

export default connect()(Game);