import React from 'react';

import Icon from '../utils/Icon';
import Button from '../utils/Button';
import Heading from '../utils/Heading';

function AboutUs() {
	return (
		<div className="about-us__container">
			<img src="assets/img/about/about-us.svg" alt="" />
			<div className="about-us__content">
				<div className="about-us__wrapper">
					<Heading
						title={'We Believe in Working Accredited Farmers'}
						subtitle={'About Us'}
						extraClassName="align-start"
					/>
				</div>
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
