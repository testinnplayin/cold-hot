'use strict';

import React from 'react';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="game">
				<button type="button" className="instructionsButton">Instructions</button>
				<button type="button" className="newGameButton">New Game</button>
				<h1>Hot 'N' Cold</h1>
			</div>
		);
	}
};