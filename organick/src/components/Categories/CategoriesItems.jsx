import React from 'react';
import ProductCard from './ProductCard';

function CategoriesItems( {filteredProducts} ) {

	return (
		<div className="categories__products">
			<div className="categories__products_items">
			{filteredProducts && filteredProducts.length > 0 ? (
				filteredProducts.map((product) => (
					<ProductCard
						key={product.id}
						title={product.title}
						category={product.category}
						img={product.imgSrc}
						oldPrice={product.oldPrice}
						newPrice={product.newPrice}
					/>
				))
			) : (
				<h5>No products available</h5>
			)}
			
			</div>
		</div>
	);
}

export default CategoriesItems;
