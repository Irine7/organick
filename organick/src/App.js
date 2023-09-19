import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner/Banner';
import AboutUs from './components/AboutUs';
import Categories from './components/Categories/Categories';
import Testimonial from './components/Testimonial/Testimonial';
import Offer from './components/Offer';

import './scss/app.scss';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
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
			</div>
			<Categories />
			<Testimonial />
			<Offer />
			<Footer />
		</div>
	);
}

export default App;
