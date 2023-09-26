import React from 'react';

import HeaderBanners from '../utils/HeaderBanners';
import ShopCategories from '../components/ShopCategories';
import Subscribe from '../components/Subscribe';

function Shop() {
	return (
		<>
			<HeaderBanners
				imgSrc="assets/img/header-banners/shop.jpg"
				backgroundSrc="assets/img/header-banners/background-shop.svg"
				title="Shop"
			/>
			<ShopCategories />
			<Subscribe />
		</>
	);
}

export default Shop;