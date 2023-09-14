import React from 'react';

import Header from './components/Header';
import Banner_large from './components/Banner_large';
import Footer from './components/Footer';

import './scss/app.scss';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Banner_large />
			</div>
			<Footer />
		</div>
	);
}

export default App;
