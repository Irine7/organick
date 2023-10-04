import React from 'react';
import Heading from '../../utils/Heading';
import Button from '../../utils/Button';
import NewsContent from './NewsContent';

import articles from './articles.json';

function News() {
	const filteredArticles = articles.filter((article) => article.id <= 2);
	return (
		<section className="news">
			<div className="news__container">
				<div className="news__container_header">
					<Heading
						title={'Discover weekly content about organic food & more'}
						subtitle={'News'}
						extraClassName="align-start"
					/>
					<Button
						title="View All Products"
						extraClassName="button-default_light"
					/>
				</div>
				<NewsContent filteredArticles={filteredArticles} />
			</div>
		</section>
	);
}

export default News;
