import React from 'react';

import HeaderBanners from '../utils/HeaderBanners';
import Team from '../components/Team/Team.jsx';
import cards from '../components/Team/team-cards.json';
import Subscribe from '../components/Subscribe';

function OurTeam() {
	const filteredCards = cards.filter((card) => card.id <= 6);

	return (
		<>
			<HeaderBanners
				imgSrc="assets/img/header-banners/team.jpg"
				backgroundSrc="assets/img/header-banners/background-team.svg"
				title="Our Team"
			/>
			<Team filteredCards={filteredCards} />
			<Subscribe />
		</>
	);
}

export default OurTeam;
