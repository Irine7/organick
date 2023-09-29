import React from 'react';
import Button from '../../utils/Button';
import Heading from '../../utils/Heading';
import GrowItems from './GrowItems';

function Grow() {
	return (
		<section className="grow">
			<Heading
				title={'Better Agriculture for Better Future'}
				subtitle={'What we Grow'}
			/>
			<img src="assets/img/grow/grow.jpg" alt="Grow photo" className='grow__img' />
			<Button title="Explore More" extraClassName="button-default_light" />
			<GrowItems />
		</section>
	);
}

export default Grow;
