import React from 'react';

function GrowItems() {
	const items = [
		{
			id: 1,
			title: 'Dairy Products',
			text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis',
			imgSrc: 'assets/img/icons/grow/milk-bottle.png',
		},
		{
			id: 2,
			title: 'Store Services',
			text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis',
			imgSrc: 'assets/img/icons/grow/store.png',
		},
		{
			id: 3,
			title: 'Delivery Services',
			text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis',
			imgSrc: 'assets/img/icons/grow/delivery.png',
		},
		{
			id: 4,
			title: 'Agricultural Services',
			text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis',
			imgSrc: 'assets/img/icons/grow/agricaltural.png',
		},
		{
			id: 5,
			title: 'Organic Products',
			text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis',
			imgSrc: 'assets/img/icons/grow/organic.png',
		},
		{
			id: 6,
			title: 'Fresh Vegetables',
			text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis',
			imgSrc: 'assets/img/icons/grow/fresh.png',
		},
	];

	const group1 = items.slice(0, 3);
	const group2 = items.slice(3, 6);

	return (
		<div className="grow-items">
			<div className="grow-items__container">
				{group1.map((item, id) => (
					<div className="grow-items__item_left" key={id}>
						<img src={item.imgSrc} alt={item.title} />
						<h6 className="grow-items__title">{item.title}</h6>
						<p className="grow-items__text_left">{item.text}</p>
					</div>
				))}
			</div>
			<div className="grow-items__container">
				{group2.map((item, id) => (
					<div className="grow-items__item_right" key={id}>
						<img src={item.imgSrc} alt={item.title} />
						<h6 className="grow-items__title">{item.title}</h6>
						<p className="grow-items__text_right">{item.text}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default GrowItems;
