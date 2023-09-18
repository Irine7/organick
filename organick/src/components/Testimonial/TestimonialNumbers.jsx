import React from 'react';

function TestimonialNumbers() {
	const testimonialsNumbers = [
		{ number: '100%', text: 'Organic' },
		{ number: '285', text: 'Active Product' },
		{ number: '350+', text: 'Organic Orchards' },
		{ number: '25+', text: 'Years of Farming' },
	];

	return (
		<div className="testimonial__numbers__container">
			{testimonialsNumbers.map((item, index) => (
				<div className="testimonial__numbers" key={index}>
					<h2>{item.number}</h2>
					<p>{item.text}</p>
				</div>
			))}
		</div>
	);
}

export default TestimonialNumbers;
