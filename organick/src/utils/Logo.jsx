import React from 'react';

import { Link } from 'react-router-dom';

function Logo() {
	return (
		<div>
			<Link to="/">
				<div className="header__logo">
					<img width="36" src="assets/img/logo.svg" alt="Organick logo" />
					<h3>Organick</h3>
				</div>
			</Link>
		</div>
	);
}

export default Logo;
