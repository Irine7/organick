import React from 'react';
import Button from '../utils/Button';
import Heading from '../utils/Heading';
import ProductCard from './Categories/ProductCard';

import products from './Categories/products.json';

function Offer() {
	const filteredProducts = products.filter((product) => product.id >= 9);

	return (
		<section className="offer">
			<div className="offer__container">
				<Heading
					title={'We Offer Organic For You'}
					subtitle={'Offer'}
					extraClassName="align-start categories__title__sub_white"
				/>
				<Button title="View All Products" extraClassName="button-default_light" />
			</div>
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
		</section>
	);
}

export default Offer;
