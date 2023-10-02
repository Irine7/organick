import React from 'react';

import HeaderBanners from '../utils/HeaderBanners';
import Subscribe from '../components/Subscribe';
import OrganicStore from '../components/OrganicStore/OrganicStore';

function Quality() {
	return (
		<>
			<HeaderBanners
				imgSrc="assets/img/header-banners/quality.jpg"
				backgroundSrc="assets/img/header-banners/background-quality.svg"
				title="Quality Standard"
			/>
			<OrganicStore />
			<Subscribe />
		</>
	);
}

export default Quality;
