import React from 'react';

function OurServices() {
	const services = [
		{
			imgSrc: 'assets/img/quality/why-organic.jpg',
			title: 'Why Organic',
			text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.',
		},
		{
			imgSrc: 'assets/img/quality/specialty-produce.jpg',
			title: 'Specialty Produce',
			text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.',
		},
	];

	return <div className="organic-store__our-services">
		{services.map((item, index) => (
			<div className="organic-store__our-services_item" key={index}>
				<img className="organic-store__our-services_item_img" src={item.imgSrc} alt={item.title} />
				<div className="organic-store__our-services_item_content">
					<h6>{item.title}</h6>
					<p>{item.text}</p>
				</div>
			</div>
		))}
	</div>;
}

export default OurServices;
