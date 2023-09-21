import React from 'react';

function OrganicBlocks() {
	const blocks = [
		{ img: 'assets/img/organic/juice.jpg', title: 'Organic Juice' },
		{ img: 'assets/img/organic/food.jpg', title: 'Organic Food' },
		{ img: 'assets/img/organic/cookies.jpg', title: 'Nuts Cookies' },
	];

	return (
		<div className="organic-blocks">
			<div className="organic-blocks__container">
				{blocks.map((block, index) => (
					<div className="organic-blocks__item">
						<img src={block.img} alt={block.title} key={index} className="organic-blocks__item_img" />
						<h6 className="organic-blocks__item_title" >{block.title}</h6>
					</div>
				))}
			</div>
		</div>
	);
}

export default OrganicBlocks;
