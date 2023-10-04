import React from 'react';

function BlackRaspberry() {
	const info = [
		{
			date: 'December 4, 2022',
			client: 'Kevin Martin',
			category: 'Agriculture , Eco',
			service: 'Organic Products',
		},
	];

	return (
		<section className="raspberry">
			<div className="raspberry__content">
				<h1 className="raspberry__title">Black Raspberry</h1>
				<p>
					Established fact that a reader will be distracted by the readable
					content of a page when looking a layout. The point of using Lorem
					Ipsum is that it has a more-or-less normal distribution of letters, as
					opposed
				</p>
			</div>
			<div className="raspberry__info">
				{info.map((item, index) => (
					<div className='raspberry__info_container' key={index}>
						<div className="raspberry__info_items">
							<h6 className="raspberry__info_item">Date</h6>
							<p>:</p>
							<p>{item.date}</p>
						</div>
						<div className="raspberry__info_items">
							<h6 className="raspberry__info_item">Client</h6>
							<p>:</p>
							<p>{item.client}</p>
						</div>
						<div className="raspberry__info_items">
							<h6 className="raspberry__info_item">Service</h6>
							<p>:</p>
							<p>{item.service}</p>
						</div>
						<div className="raspberry__info_items">
							<h6 className="raspberry__info_item">Category</h6>
							<p>:</p>
							<p>{item.category}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default BlackRaspberry;
