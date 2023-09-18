import React from 'react';

import Heading from '../../utils/Heading';
import TestimonialNumbers from './TestimonialNumbers';

function Testimonial() {
	return (
		<div className="testimonial__container">
			<img src="assets/img/testimonial/testimonial.jpg" className="testimonial__img" alt="Testimonial background" />
			<div className="testimonial__content">
				<Heading title={'What Our Customer Saying?'} subtitle={'Testimonials'} />
				<div className="testimonial__consumer">
					<img src="assets/img/testimonial/consumer.svg" className="testimonial__consumer__img" alt="Consumer" />
					<img src="assets/img/icons/stars.svg" className="testimonial__consumer__stars" alt="Stars rating" />
					<p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
					<h6 className="testimonial__consumer__name">Sara Taylor</h6>
					<p>Consumer</p>
				</div>
				<TestimonialNumbers />
			</div>
		</div>
	);
}

export default Testimonial;
