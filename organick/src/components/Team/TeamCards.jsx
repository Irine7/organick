import React from 'react';

function TeamCards( {filteredCards} ) {

	return (
		<div className="team__cards">
			{filteredCards.map((card, index) => (
				<div className="team__card" key={index}>
					<img src={card.imgSrc} alt={card.name} className="team__card_img" />
					<div className="team__card_content">
						<h6 className="team__card_name">{card.name}</h6>
						<p className="team__card_position">{card.position}</p>
						<div className="team__card_social">
							{card.socialIcons.includes('facebook') && (
								<div className="team__card_social_item">
									<a
										href={`https://www.facebook.com/${card.name}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src="/assets/img/socials/facebook.svg"
											alt="Facebook"
										/>
									</a>
								</div>
							)}
							{card.socialIcons.includes('twitter') && (
								<div className="team__card_social_item">
									<a
										href={`https://twitter.com/${card.name}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src="/assets/img/socials/twitter.svg" alt="Twitter" />
									</a>
								</div>
							)}
							{card.socialIcons.includes('instagram') && (
								<div className="team__card_social_item">
									<a
										href={`https://www.instagram.com/${card.name}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src="/assets/img/socials/instagram.svg"
											alt="Instagram"
										/>
									</a>
								</div>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default TeamCards;
