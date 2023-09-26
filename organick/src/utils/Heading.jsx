import React from 'react';

function Heading({ title, subtitle, extraClassName, isLight }) {
	const headingClasses = `heading__container ${extraClassName || ''}`;
	const titleClasses = `categories__title__sub ${extraClassName || ''}`;
	const titleLight = isLight ? 'categories__title__light' : '';

	return (
		<div className={headingClasses}>
			<h4>{subtitle}</h4>
			<h2 className={`${titleClasses} ${titleLight}`}>{title}</h2>
		</div>
	);
}

export default Heading;
