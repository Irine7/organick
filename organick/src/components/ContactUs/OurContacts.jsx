import React from 'react';

import Socials from '../../utils/Socials';

function OurContacts() {
	return (
		<section className="our-contacts">
			<img
				className="our-contacts__img"
				src="assets/img/contacts/main-img.jpg"
				alt="Main image"
			/>
			<div className="our-contacts__content">
				<h2>We'd love to talk about how we can work together</h2>
				<p>
					Simply dummy text of the printing and typesetting industry. Lorem had
					ceased to been the industry's standard dummy text ever since the
					1500s, when an unknown printer took a galley.
				</p>
				<div className="our-contacts__info">
					<div className="our-contacts__info_container">
						<div className="our-contacts__info_container_block">
							<img src="assets/img/icons/contacts/massage.png" alt="Massage" />
						</div>
						<div className="our-contacts__info_container_text">
							<h6>Message</h6>
							<a href="mailto:support@saasflow.com">support@organick.com</a>
						</div>
					</div>
					<div className="our-contacts__info_container">
						<div className="our-contacts__info_container_block">
							<img src="assets/img/icons/contacts/phone.png" alt="Phone" />
						</div>
						<div className="our-contacts__info_container_text">
							<h6>Contact Us</h6>
							<p>+01 123 456 789</p>
						</div>
					</div>
				</div>
				<div className="footer__socials-icons">
					<Socials />
				</div>
			</div>
		</section>
	);
}

export default OurContacts;
