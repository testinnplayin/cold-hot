'use strict';

import React from 'react';

export default function GuessList(props) {
	console.log(props);
	const guesses = props.guesses;

	const guess = guesses.map((gContent, i) => {
		return (
			<span key={i}>{gContent}</span>
		);
	});

	return (
		<div className="guessList">
			{guess}
		</div>
	);
};