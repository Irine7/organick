import React from 'react';

import HeaderBanners from '../utils/HeaderBanners';
import NewsContent from '../components/News/NewsContent';
import Subscribe from '../components/Subscribe';

import articles from '../components/News/articles.json';


function OurNews() {
	const filteredArticles = articles.filter((article) => article.id <= 6);

	return (
		<>
			<HeaderBanners
				imgSrc="assets/img/header-banners/news.jpg"
				backgroundSrc="assets/img/header-banners/background-news.svg"
				title="Recent News"
			/>
			<section className="our-news">
				<NewsContent filteredArticles={filteredArticles} />
				<Subscribe />
			</section>
		</>
	);
}

export default OurNews;
