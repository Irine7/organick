import React from 'react';

function Button() {
	return (
		<div className="button__container">
			<button className='button-default'>
				<p className="button-text">Default button</p>
				<img src="assets/img/button/arrow.svg" alt="Arrow" class="button-icon" />
			</button>
		</div>
	);
}

export default Button;
