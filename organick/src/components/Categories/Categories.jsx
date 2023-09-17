import React from 'react';

import ProductCard from './ProductCard';

import products from './products.json';

function Categories() {
	return (
		<div className="categories__container">
			<div className="categories__title">
				<h4>Categories</h4>
				<h2 className="categories__title__sub">Our Products</h2>
			</div>
			<div className="categories__products">
				{products.map((product) => (
					<ProductCard key={product.id} title={product.title} category={product.category} img={product.imgSrc} oldPrice={product.oldPrice} newPrice={product.newPrice} />
				))}
			</div>
		</div>
	);
}

export default Categories;
