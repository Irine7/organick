import React from 'react';

function Heading( {title, subtitle, extraClassName} ) {
	const headingClasses = `heading__container ${extraClassName || ''}`;

	return (
		<div className={headingClasses} >
			<h4>{subtitle}</h4>
			<h2 className="categories__title__sub">{title}</h2>
		</div>
	);
}

export default Heading;
