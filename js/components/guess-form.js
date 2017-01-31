'use strict';

import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

export class GuessForm extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
	}

	handleOnChange(e) {
		let userGuess = e.target.value;
		console.log(this.props);
		this.props.dispatch(actions.getInput(userGuess));
	}

	handleOnSubmit(e) {
		console.log('!!!!!!!!!!!');
		console.log(this.props);
		e.preventDefault();
		e.stopPropagation();
		
		const guess = this.props.userGuess,
			guessCounter = this.props.guessCounter;
		
		this.props.dispatch(actions.submitGuess(guess));
		this.props.dispatch(actions.changeCounter(guessCounter));
	}

	render() {
		return (
			<form onSubmit={this.handleOnSubmit}>
					<input type="text" name="userGuess" autoComplete="off" onChange={this.handleOnChange} placeholder="Enter Your Guess" />
					<button type="submit">Guess</button>
			</form>
		);
	}
};

export default connect()(GuessForm);
