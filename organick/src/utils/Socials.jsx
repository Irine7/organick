import React from 'react';

function Socials() {
	const socials = ['Instagram', 'Facebook', 'Twitter', 'Pinterest'];
	return (
		<div className="socials">
			{socials.map((social, index) => (
				<a href="#" className="socials__item" key={index}>
					<img src={`/assets/img/socials/${social}.svg`} />
				</a>
			))}
		</div>
	);
}

export default Socials;
