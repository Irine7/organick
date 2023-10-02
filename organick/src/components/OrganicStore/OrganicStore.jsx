import React from 'react';

import OurServices from './OurServices';
import WeFarm from './WeFarm';

function OrganicStore() {
	return (
		<section className="organic-store">
			<img className="organic-store__img" src="assets/img/quality/main.jpg" alt="Organic Store" />
			<div className="organic-store__container">
				<h2>Organic Store Services</h2>
				<p className="organic-store__text">
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking a layout. The point of using
					Lorem Ipsum is that it has a more-or-less normal distribution of
					letters, as opposed to using 'Content here, content here', making it
					look like readable English.
				</p>
				<p>
					Many desktop publishing packages and web page editors now use Lorem
					Ipsum as their default model text, and auncover many web sites still
					in their infancy. Various versions have evolved over the years
				</p>
				<OurServices />
				<WeFarm />
			</div>
		</section>
	);
}

export default OrganicStore;
