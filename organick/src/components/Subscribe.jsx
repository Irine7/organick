import React from 'react';

import SubscribeBlock from '../utils/SubscribeBlock';

function Subscribe() {
	return (
		<section className="subscribe">
			<h2 className="subscribe__title">Subscribe to our Newsletter</h2>
			<div className="subscribe__img">
				<img src="assets/img/subscribe/sub.png" alt="Subscribe part" />
			</div>
			<SubscribeBlock />
		</section>
	);
}

export default Subscribe;
