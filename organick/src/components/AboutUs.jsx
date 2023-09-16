import React from 'react';

import Icon from '../utils/Icon';
import Button from '../utils/Button';

function AboutUs() {
	return (
		<div className="about-us__container">
			<img src="assets/img/about/about-us.svg" alt="" />
			<div className="about-us__content">
				<h4 className="about-us__subtitle">About Us</h4>
				<h2 className="about-us__title">
					We Believe in Working Accredited Farmers
				</h2>
				<p>
					Simply dummy text of the printing and typesetting industry. Lorem had
					ceased to been the industry's standard dummy text ever since the
					1500s, when an unknown printer took a galley.
				</p>
				<div className="about-us__list">
					<div className="about-us__item">
						<Icon imgSrc="assets/img/icons/leaf.svg" />
						<div className="about-us__item__content">
							<h6>Organic Foods Only</h6>
							<p>
								Simply dummy text of the printing and typesetting industry.
								Lorem Ipsum
							</p>
						</div>
					</div>
					<div className="about-us__item">
						<Icon imgSrc="assets/img/icons/mailbox.svg" />
						<div className="about-us__item__content">
							<h6>Organic Foods Only</h6>
							<p>
								Simply dummy text of the printing and typesetting industry.
								Lorem Ipsum
							</p>
						</div>
					</div>
				</div>
				<Button title="Shop Now" />
			</div>
		</div>
	);
}

export default AboutUs;
