import React from 'react';

import HeaderBanners from '../utils/HeaderBanners';
import AboutUs from '../components/AboutUs/AboutUs';
import WhyChoose from '../components/WhyChoose/WhyChoose';
import Team from '../components/Team/Team';
import AboutUsOffer from '../components/AboutUsOffer';
import Subscribe from '../components/Subscribe';

function About() {
	return (
		<>
			<HeaderBanners
				imgSrc="assets/img/header-banners/about.jpg"
				backgroundSrc="assets/img/header-banners/background-about.svg"
				title="About Us"
			/>
			<AboutUs
				imgSrc="assets/img/about/bowl.png"
				img="assets/img/about/cherry.png"
				text="Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
				duplicateText={true}
				pageAbout={true}
				title="We do Creative Things for Success"
				extraClassName="background-light"
			/>
			<WhyChoose />
			<Team />
			<AboutUsOffer />
			<Subscribe />
		</>
	);
}

export default About;
