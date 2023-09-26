import React from 'react';
import Heading from '../utils/Heading';

function Eco() {
	const content = [
		{
			title: 'Start with Our Company First',
			text: '	Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.',
		},
		{
			title: 'Learn How to Grow Yourself',
			text: '	Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.',
		},
		{
			title: 'Farming Strategies of Today',
			text: '	Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.',
		},
	];

	return (
		<section className="eco">
			<img src="assets/img/eco/eco-friendly.jpg" alt="eco-friendly" className="eco__img" />
			<div className="eco__container">
				<Heading
					title={'Econis is a Friendly Organic Store'}
					subtitle={'Eco Friendly'}
					extraClassName="align-start"
				/>
				<div className="eco__content">
					{content.map((item, index) => (
						<div className="eco__item" key={index}>
							<h6>{item.title}</h6>
							<p>{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Eco;
