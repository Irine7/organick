import React from 'react';

import Icon from '../../utils/Icon';

function AboutUsList() {
	const list = [
		{
			id: 3,
			title: 'Modern Agriculture Equipment',
			imgSrc: 'assets/img/icons/tractor.png',
		},
		{
			id: 4,
			title: 'No growth hormones are used',
			imgSrc: 'assets/img/icons/chemical-plant.png',
		},
	];

	return (
		
		
		<div className="about-us__row">
			{list.map((item, index) => (
					<div className="about-us__block" key={index}>
						<Icon imgSrc={item.imgSrc} />
						<div className="about-us__block__content">
							<h6>{item.title}</h6>
						</div>
					</div>
					))}
					</div>
		
	);
}

export default AboutUsList;
