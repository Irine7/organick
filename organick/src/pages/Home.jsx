import React from 'react';

import Banner from '../components/Banner/Banner';
import AboutUs from '../components/AboutUs';
import Categories from '../components/Categories/Categories';
import Testimonial from '../components/Testimonial/Testimonial';
import Offer from '../components/Offer';
import Eco from '../components/Eco';
import OrganicBlocks from '../components/OrganicBlocks';
import News from '../components/News/News';
import Subscribe from '../components/Subscribe';

function Home() {
	return (
		<>
			<Banner
				title="100% Natural Food"
				subtitle="Choose the best healthier way of life"
				imgSrc="assets/img/banner/banner_large.jpg"
				backgroundSrc="assets/img/banner/background.svg"
				hasOverlay={true}
				button={true}
			/>
			<div className="banner__small">
				<Banner
					title="Natural!"
					subtitle="Get Garden Fresh Fruits"
					imgSrc="assets/img/banner/natural.jpg"
					extraClassName="banner__first"
				/>
				<Banner
					title="Offer!"
					subtitle="Get 10% off on Vegetables"
					imgSrc="assets/img/banner/offer.jpg"
				/>
			</div>
			<AboutUs />
			<Categories />
			<Testimonial />
			<Offer />
			<Eco />
			<OrganicBlocks />
			<News />
			<Subscribe />
		</>
	);
}

export default Home;