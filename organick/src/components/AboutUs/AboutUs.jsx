import React from 'react';

import Button from '../../utils/Button';
import Heading from '../../utils/Heading';
import AboutUsList from './AboutUsList';
import AboutList from './AboutList';

function AboutUs({ imgSrc, img, text, title, duplicateText, extraClassName, pageAbout }) {
	const containerClassName = `about-us__container ${extraClassName || ''}`;

	return (
		<div className={containerClassName}>
			<img src={img} alt="About Us" className="about-us__img_add" />
			<img src={imgSrc} alt="About Us" className="about-us__img" />
			<div className="about-us__content">
				<div className="about-us__wrapper">
					<Heading
						title={title}
						subtitle={'About Us'}
						extraClassName="align-start"
					/>
				</div>
				<p className="about-us__text">{text}</p>
				{duplicateText && <p>{text}</p>}
				<>
					{ pageAbout ? <AboutList /> : <AboutUsList text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum" /> }
				</>
				{ pageAbout ? <Button title="Explore More" /> : <Button title="Shop Now" /> }
			</div>
		</div>
	);
}

export default AboutUs;
