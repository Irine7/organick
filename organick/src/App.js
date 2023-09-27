import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import ShopSingle from './pages/ShopSingle';

import './scss/app.scss';

function App() {
	return (
		<section className="wrapper">
			<Header />
			<section className="content">

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/shop-single" element={<ShopSingle />} />
				</Routes>
			</section>
			<Footer />
		</section>
	);
}

export default App;
