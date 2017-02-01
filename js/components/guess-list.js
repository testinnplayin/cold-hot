'use strict';

import React from 'react';

export default function GuessList(props) {
	const guesses = props.guesses;

	const guess = guesses.map((gContent, i) => {
		return (
			<span key={i} value={gContent}>{gContent}</span>
		);
	});

	return (
		<div className="guessList">
			{guess}
		</div>
	);
};