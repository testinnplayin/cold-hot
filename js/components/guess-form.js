'use strict';

import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

export class GuessForm extends React.Component {
	constructor(props) {
		super(props);
		// console.log(props);
	}

	render() {
		return (
			<form onSubmit={this.props.onSubmit}>
					<input type="text" name="userGuess" autoComplete="off" placeholder="Enter Your Guess" onChange={} />
					<button type="submit">Guess</button>
			</form>
		);
	}
};

export default connect()(GuessForm);
// ref={ref => {this.userGuessInput = ref}}
// handle change of input in guess_form and dispatch an event which will store the input value of the user into state
// then use that state on submit to compare with guessed value