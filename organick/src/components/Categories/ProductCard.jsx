import React from 'react';
import ProductCardTitle from './ProductCardTitle';
import ProductInfo from './ProductInfo';

function ProductCard({ title, category, img, oldPrice, newPrice }) {
	return (
		<div className="product-item">
			<ProductCardTitle category={category} />
			<img src={img} className="product-item__img" alt="Product" />
			<ProductInfo title={title} oldPrice={oldPrice} newPrice={newPrice} />
		</div>
		
	);
}

export default ProductCard;
