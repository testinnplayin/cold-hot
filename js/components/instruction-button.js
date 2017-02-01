'use strict';

import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

export default class InstructionButton extends React.Component {
	constructor(props) {
		super(props);

		console.log(props);
		this.handleClickOnInstructions = this.handleClickOnInstructions.bind(this);
	}

	handleClickOnInstructions(e) {
		e.preventDefault();

		let instructions = this.props.instructions;
		console.log(props);
		
		this.props.dispatch(actions.showInstructions(instructions));
	}

	render() {
		return (
			<button type="button" onClick={this.handleClickOnInstructions}>Instructions</button>
			{this.props.instructions ? <Instructions /> : null}
		);
	}

};