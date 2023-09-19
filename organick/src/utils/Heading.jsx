import React from 'react';

function Heading( {title, subtitle, extraClassName} ) {
	const headingClasses = `heading__container ${extraClassName || ''}`;
	const titleClasses = `categories__title__sub ${extraClassName || ''}`;

	return (
		<div className={headingClasses} >
			<h4>{subtitle}</h4>
			<h2 className={titleClasses}>{title}</h2>
		</div>
	);
}

export default Heading;
