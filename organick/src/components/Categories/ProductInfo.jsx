import React from 'react';

function ProductInfo({ title, oldPrice, newPrice }) {
	return (
		<div className="product-info">
			<p className="product-info__title">{title}</p>
			<div className="product-info__content">
				<div className="product-info__price">
					<p className="product-info__price_crossed-out">{oldPrice} </p>
					<p className="product-info__price_new"> {newPrice}</p>
					<img src="assets/img/products/stars.svg" alt="Stars rating" />
				</div>
			</div>
		</div>
	);
}

export default ProductInfo;
