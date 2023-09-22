import React from 'react';

import Logo from '../utils/Logo';
import Socials from '../utils/Socials';

function Footer() {
	const infoTitles = ['Email', 'Phone', 'Address'];
	const infoText = [
		'info@organick.com',
		'123 456-789',
		'123 Main St, Anytown, CA 12345',
	];
	const utilityPages = [
		'Licenses',
		'Password Protected',
		'Changelog',
		'404 Not Found',
	];

	return (
		<div>
			<div className="footer">
				<div className="footer__container">
					<div className="footer__contacts">
						<h5>Contact Us</h5>
						<div className="footer__contacts-info">
							{infoTitles.map((title, index) => (
								<div className='footer__contacts-info_item' key={index}>
									<p className="footer__contacts-info__title">
										{title}
									</p>
									<p className="footer__contacts-info__text" >
										{infoText[index]}
									</p>
								</div>
							))}
						</div>
					</div>
					<div className="footer__socials">
						<Logo />
						<p className="footer__socials-text" >
							Simply dummy text of the printing and typesetting industry. Lorem
							Ipsum simply dummy text of the printing
						</p>
						<div className="footer__socials-icons" >
							<Socials />
						</div>
					</div>
					<div className="footer__pages">
						<h5>Utility Pages</h5>
						<div className="footer__pages-list">
							{utilityPages.map((page, index) => (
								<p key={index}>{page}</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
