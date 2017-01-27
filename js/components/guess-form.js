'use strict';

import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

export class GuessForm extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		return (
			<form onSubmit={this.props.submitGuess}>
					<input type="text" name="userGuess" autoComplete="off" placeholder="Enter Your Guess" ref={ref => {this.userGuessInput = ref}} />
					<button type="submit">Guess</button>
			</form>
		);
	}
};

export default connect()(GuessForm);