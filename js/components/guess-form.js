'use strict';

import React from 'react';

export default class GuessForm extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<form onSubmit={this.submitGuess}>
					<input type="text" name="userGuess" autoComplete="off" placeholder="Enter Your Guess"/>
					<button type="submit">Guess</button>
			</form>
		);
	}
};