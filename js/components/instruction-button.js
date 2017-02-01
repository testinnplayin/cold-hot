'use strict';

import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';
import Instructions from './instructions';

export class InstructionButton extends React.Component {
	constructor(props) {
		super(props);

		this.handleClickOnInstructions = this.handleClickOnInstructions.bind(this);
	}

	handleClickOnInstructions(e) {
		e.preventDefault();

		let instructions = !(this.props.instructions);

		this.props.dispatch(actions.showInstructions(instructions));
	}

	render() {
		return (
			<div className="instructionButton">
				<button type="button" onClick={this.handleClickOnInstructions}>Instructions</button>
				{this.props.instructions ? <Instructions instructions={this.props.instructions} /> : null}
			</div>
		);
	}

};

export default connect()(InstructionButton);