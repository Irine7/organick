import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import ShopSingle from './pages/ShopSingle';
import Service from './pages/Service';
import Quality from './pages/Quality';
import Portfolio from './pages/Portfolio';
import Raspberry from './pages/Raspberry';
import OurTeam from './pages/OurTeam';

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
					<Route path="/service" element={<Service />} />
					<Route path="/quality" element={<Quality />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/raspberry" element={<Raspberry />} />
					<Route path="/team" element={<OurTeam />} />
				</Routes>
			</section>
			<Footer />
		</section>
	);
}

export default App;
