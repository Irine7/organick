import React from 'react';

function HeaderBanners({ imgSrc, backgroundSrc, title }) {
	return (
		<div className="header-banners">
			<img src={imgSrc} alt="Header banner" className="header-banners__img" />
			<img src={backgroundSrc} alt="Background" className="header-banners__background" />
			<h1 className="header-banners__title">{title}</h1>
		</div>
	);
}

export default HeaderBanners;