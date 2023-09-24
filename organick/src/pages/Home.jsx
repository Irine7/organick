import React from 'react';

import Banner from '../components/Banner/Banner';
import AboutUs from '../components/AboutUs/AboutUs';
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
			<AboutUs
				imgSrc="assets/img/about/about-us.svg"
				title="We Believe in Working Accredited Farmers"
				text="Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
			/>
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
