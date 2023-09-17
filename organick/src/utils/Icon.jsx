import React from 'react';

function Icon({ imgSrc }) {
	return (
		<div className="icons__container">
			<img src={imgSrc} alt="Icon" />
		</div>
	);
}

export default Icon;
