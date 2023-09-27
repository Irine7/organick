import React from 'react';

import Icon from '../../utils/Icon';

function AboutUsList({ text }) {
	const list = [
		{
			id: 1,
			title: 'Organic Foods Only',
			imgSrc: 'assets/img/icons/leaf.png',
		},
		{
			id: 2,
			title: 'Quality Standards',
			imgSrc: 'assets/img/icons/mailbox.png',
		},
	];

	return (
		<>
			{list.map((item, index) => (
				<div className="about-us__list" key={index} >
					<div className="about-us__item" >
						<Icon imgSrc={item.imgSrc} />
						<div className="about-us__item__content">
							<h6>{item.title}</h6>
							<p>{text}</p>
						</div>
					</div>
				</div>
			))}
		</>
	);
}

export default AboutUsList;
