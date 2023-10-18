import React from 'react';

function WhyChooseCard() {
	const cards = [
		{
			id: 1,
			imgSrc: 'assets/img/icons/why-choose/cart.png',
			title: 'Return Policy',
		},
		{
			id: 2,
			imgSrc: 'assets/img/icons/why-choose/fresh-leaf.png',
			title: '100% Fresh',
		},
		{
			id: 3,
			imgSrc: 'assets/img/icons/why-choose/phone.png',
			title: 'Support 24/7',
		},
		{
			id: 4,
			imgSrc: 'assets/img/icons/why-choose/card-security.png',
			title: 'Secured Payment',
		},
	];

	return (
		<div className="why-choose__card">
			{cards.map((card, index) => (
				<div className="why-choose__card_item" key={index}>
					<div className="why-choose__card_item_image">
						<img src={card.imgSrc} alt="card" />
					</div>
					<h6 className="why-choose__card_item_title">{card.title}</h6>
					<p className="why-choose__card_item_text">Simply dummy text of the printing type setting industry.</p>
				</div>
			))}
		</div>
	);
}

export default WhyChooseCard;
