import React from 'react'

import CategoriesItems from '../Categories/CategoriesItems';

import products from '../Categories/products.json';

function SortedProducts() {
	const filteredProducts = products.filter((product) => product.category === 'Nuts');

	return (
		<div>
			<CategoriesItems filteredProducts={filteredProducts} />
		</div>
	)
}

export default SortedProducts
