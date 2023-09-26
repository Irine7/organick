import React from 'react';

import products from './Categories/products.json';

import CategoriesItems from './Categories/CategoriesItems';

function ShopCategories() {
	const filteredProducts = products.filter((product) => product.id >= 1);

	return (
		<section className="shop-categories">
			<CategoriesItems filteredProducts={filteredProducts} />
		</section>
	);
}

export default ShopCategories;
