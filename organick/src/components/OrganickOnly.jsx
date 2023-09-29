import React from 'react';

import Heading from '../utils/Heading';
import PlayButton from '../utils/PlayButton';

function OrganickOnly() {
	return (
		<section className="organick-only">
			<img className="organick-only__img" src="assets/img/grow/background.jpg" alt="Organick Video" />
			<div className="organick-only__content">
				<Heading title={'Everyday Fresh & Clean'} subtitle={'Organic Only'} />
				<p className="organick-only__text">
					Simply dummy text of the printing and typesetting industry. Lorem had
					ceased to been the industry's standard dummy text ever since the
				</p>
				<PlayButton />
			</div>
		</section>
	);
}

export default OrganickOnly;
