import React from 'react';
import Heading from '../../utils/Heading';
import TeamCards from './TeamCards';

function Team({filteredCards}) {

	return (
		<section className="team">
			<Heading title={'Our Organic Experts'} subtitle={'Team'} />
			<p className="team__text">
				Simply dummy text of the printing and typesetting industry. Lorem had
				ceased to been the industry's standard dummy text ever since the 1500s,
				when an unknown printer took a galley.
			</p>
			<TeamCards filteredCards={filteredCards} />
		</section>
	);
}

export default Team;
