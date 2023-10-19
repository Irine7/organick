import React from 'react';

import HeaderBanners from '../utils/HeaderBanners';
import OurContacts from '../components/ContactUs/OurContacts'
import Location from '../components/ContactUs/Location'
import SendMessage from '../components/ContactUs/SendMessage'
import Subscribe from '../components/Subscribe';

function ContactUs() {
	return (
		<>
			<HeaderBanners
				imgSrc="assets/img/header-banners/contacts.jpg"
				backgroundSrc="assets/img/header-banners/background-contacts.svg"
				title="Contact Us"
			/>
			<OurContacts />
			<Location />
			<SendMessage />
			<Subscribe />
		</>
	);
}

export default ContactUs;
