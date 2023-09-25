import React from 'react';

function WhyChooseCircle() {
	const circleBlock = [
		{
			id: 1,
			title: '100% Natural Product',
			text: 'Simply dummy text of the printing and typesetting industry Lorem Ipsum',
		},
		{
			id: 2,
			title: 'Increases resistance',
			text: 'Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing',
		},
	];
	return (
		<div className="why-choose__circle">
			{circleBlock.map((item, index) => (
				<div className="why-choose__circle__content" key={index}>
					<div className="why-choose__circle_item" >
						<img src="assets/img/icons/why-choose/circle.svg" alt="Circle icon" />
						<span className='why-choose__circle_title'>{item.title}</span>
					</div>
					<p className="why-choose__circle_text">{item.text}</p>
				</div>
			))}
		</div>
	);
}

export default WhyChooseCircle;
