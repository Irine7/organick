import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';

import './scss/app.scss';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/shop" element={<Shop />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
