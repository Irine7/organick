import React from 'react';

import HeaderBanners from '../utils/HeaderBanners';
import Subscribe from '../components/Subscribe';

function Portfolio() {
	const cards = [
		{
			imgSrc: 'assets/img/portfolio/lemon.jpg',
			title: 'Green & Tasty Lemon',
			subtitle: 'Fruits',
		},
		{
			imgSrc: 'assets/img/portfolio/carrot.jpg',
			title: 'Organic Carrot',
			subtitle: 'Vegetables',
		},
		{
			imgSrc: 'assets/img/portfolio/leaf.jpg',
			title: 'Organic Betel Leaf',
			subtitle: 'Farmer',
		},
		{
			imgSrc: 'assets/img/portfolio/tomato.jpg',
			title: 'Natural Tomato',
			subtitle: 'Vegetables',
		},
		{
			imgSrc: 'assets/img/portfolio/raspberry.jpg',
			title: 'Black Raspberry',
			subtitle: 'Farmer',
		},
		{
			imgSrc: 'assets/img/portfolio/orange.jpg',
			title: 'Honey Orange',
			subtitle: 'Fruits',
		},
	];
	return (
		<>
			<HeaderBanners
				imgSrc="assets/img/header-banners/portfolio.jpg"
				backgroundSrc="assets/img/header-banners/background-portfolio.svg"
				title="Portfolio Standard"
			/>
			<div className="portfolio">
				{cards.map((card, index) => (
					<div className="portfolio__card" key={index}>
						<img
							src={card.imgSrc}
							alt={card.title}
							className="portfolio__card_img"
						/>
						<h6 className="portfolio__card_title">{card.title}</h6>
						<h4 className="portfolio__card_subtitle">{card.subtitle}</h4>
					</div>
				))}
			</div>
			<Subscribe />
		</>
	);
}

export default Portfolio;
