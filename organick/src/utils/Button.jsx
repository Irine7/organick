import React from 'react';

function Button({ title, extraClassName }) {
	const buttonClasses = `button-default ${extraClassName || ''}`;

	return (
		<div className="button__container">
			<button className={buttonClasses} >
				<p className="button-text">{title}</p>
				<img
					src="assets/img/button/arrow.svg"
					alt="Arrow"
					class="button-icon"
				/>
			</button>
		</div>
	);
}

export default Button;
