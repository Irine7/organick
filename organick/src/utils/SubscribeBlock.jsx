import React from 'react';
import Button from './Button';

function SubscribeBlock() {
	return (
		<div className="subscribe__container">
			<input type="text" placeholder="Your Email Address" />
			<Button title="Subscribe" />
		</div>
	);
}

export default SubscribeBlock;
