import React from 'react';

import Research from '../components/Blog/Research';
import Preferred from '../components/Blog/Preferred';
import Subscribe from '../components/Subscribe';

function Blog() {
	return (
		<>
			<img
				className="research_background"
				src="assets/img/research/background.jpg"
				alt="Research More Organic Food"
			/>
			<Research />
			<Preferred />
			<Subscribe />
		</>
	);
}

export default Blog;
