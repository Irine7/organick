import React from 'react';

import HeaderBanners from '../utils/HeaderBanners';
import Grow from '../components/Grow/Grow';

function ShopSingle() {
	return (
		<>
			<HeaderBanners
				imgSrc="assets/img/header-banners/service.jpg"
				backgroundSrc="assets/img/header-banners/background-service.svg"
				title="Services"
			/>
			<Grow />
		</>
	);
}

export default ShopSingle;
