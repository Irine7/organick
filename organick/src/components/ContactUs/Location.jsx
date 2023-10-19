import React from 'react';

function Location() {
	return (
		<section className="location">
			<img
				className="location__img"
				src="assets/img/contacts/contacts-background.jpg"
				alt="Location"
			/>
			<div className="location__content">
				<h4>Location</h4>
				<h2>Our Farms</h2>
				<p>
					Established fact that a reader will be distracted by the readable
					content of a page when looking a layout. The point of using.
				</p>
				<div className="location__info">
					<div className="location__info_item">
						<img src="assets/img/icons/contacts/location.png" alt="Location" />
						<div className="location__info_item_text">
							<span>New York, USA:</span>
							<p>299 Park Avenue New York, New York 10171</p>
						</div>
					</div>
					<div className="location__info_item">
						<img src="assets/img/icons/contacts/location.png" alt="Location" />
						<div className="location__info_item_text">
							<span>London, UK:</span>
							<p>30 Stamford Street, London SE1 9LQ</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Location;
