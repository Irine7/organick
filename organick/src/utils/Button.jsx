import React from 'react';

function Button({ title, extraClassName, showIcon = true }) {
	const buttonClasses = `button-default ${extraClassName || ''}`;
	const buttonTextClasses = `button-text ${!showIcon ? 'button-without-icon' : ''}`;

	return (
		<div className="button__container">
			<button className={buttonClasses} >
				<p className={buttonTextClasses}>{title}</p>
				{showIcon && (
					<img
						src="assets/img/button/arrow.svg"
						alt="Arrow"
						className="button-icon"
					/>
				)}
			</button>
		</div>
	);
}

export default Button;
