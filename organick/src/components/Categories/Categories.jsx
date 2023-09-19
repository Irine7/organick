import React from 'react';

import ProductCard from './ProductCard';
import Button from '../../utils/Button';
import Heading from '../../utils/Heading';

import products from './products.json';

function Categories({ title, subtitle }) {
	const filteredProducts = products.filter((product) => product.id <= 8);

	return (
		<div className="categories__container">
			<Heading title={'Our Products'} subtitle={'Categories'} />

			<div className="categories__products">
				<div className="categories__products_items">
					{filteredProducts.map((product) => (
						<ProductCard
							key={product.id}
							title={product.title}
							category={product.category}
							img={product.imgSrc}
							oldPrice={product.oldPrice}
							newPrice={product.newPrice}
						/>
					))}
				</div>
			</div>
			<Button title="Load More" />
		</div>
	);
}

export default Categories;
