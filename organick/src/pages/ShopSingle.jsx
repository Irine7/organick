import React from 'react';

import HeaderBanners from '../utils/HeaderBanners';
import Subscribe from '../components/Subscribe';
import ProductItem from '../components/ProductItem/ProductItem';

function ShopSingle() {
	return (
		<>
			<HeaderBanners
				imgSrc="assets/img/header-banners/shop-single.jpg"
				backgroundSrc="assets/img/header-banners/shop-single.svg"
				title="Shop Single"
			/>
			<ProductItem />
			<Subscribe />
		</>
	);
}

export default ShopSingle;