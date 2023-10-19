import React from 'react';

import Banner from '../components/Banner/Banner';
import Button from '../utils/Button';

function NotFound() {
	return (
		<>
			<Banner
				imgSrc="assets/img/header-banners/404.jpg"
				backgroundSrc="assets/img/header-banners/background-404.svg"
				hasOverlay={true}
			/>
			<section className='not-found'>
				<span>404</span>
				<h1>Page Not Found</h1>
				<p className='not-found__text'>The page you are looking for doesn't exist or has been moved</p>
				<Button title="Go to Homepage" />
			</section>
		</>
	);
}

export default NotFound;
