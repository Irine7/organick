import React from 'react';

import BlackRaspberry from '../components/Raspberry/BlackRaspberry';
import AboutFarm from '../components/Raspberry/AboutFarm';
import Subscribe from '../components/Subscribe';

function Raspberry() {
	return (
		<>
			<img
				className="raspberry_background"
				src="assets/img/raspberry/background.jpg"
				alt="Black Raspberry"
			/>
			<BlackRaspberry />
			<AboutFarm />
			<Subscribe />
		</>
	);
}

export default Raspberry;
