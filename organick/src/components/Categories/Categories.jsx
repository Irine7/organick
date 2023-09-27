import React from 'react';

import Button from '../../utils/Button';
import Heading from '../../utils/Heading';

import products from './products.json';

import CategoriesItems from './CategoriesItems';

function Categories({ title, subtitle }) {
	const filteredProducts = products.filter((product) => product.id <= 8);
	return (
		<section className="categories">
			<Heading title={'Our Products'} subtitle={'Categories'} />
			<CategoriesItems filteredProducts={filteredProducts}/>
			<Button title="Load More" />
		</section>
	);
}

export default Categories;
