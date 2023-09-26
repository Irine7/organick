import React from 'react';
import Heading from '../utils/Heading';

function AboutUsOffer() {
	const categories = [
		{
			id: 1,
			title: 'Spicy',
			imgSrc: 'assets/img/about/spicy.png',
		},
		{
			id: 2,
			title: 'Nuts & Feeds',
			imgSrc: 'assets/img/about/nuts.png',
		},
		{
			id: 3,
			title: 'Fruits',
			imgSrc: 'assets/img/about/fruits.png',
		},
		{
			id: 4,
			title: 'Vegetables',
			imgSrc: 'assets/img/about/vegetables.png',
		},
	];
	return (
		<section className="about-us__offer">
			<div className="about-us__offer_container">
				<Heading
					title={'What We Offer for You'}
					subtitle={'About Us'}
					isLight={true}
				/>
				<div className="about-us__offer_items">
					{categories.map((category, index) => (
						<div className="about-us__offer_item" key={index}>
							<div className="about-us__offer_item_image">
								<img src={category.imgSrc} alt={category.title} />
							</div>
							<h6 className="about-us__offer_item_title">{category.title}</h6>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default AboutUsOffer;
