import React from 'react';

import AddToCart from './AddToCart';

function ProductSpecs() {
	return (
		<div className="item-product__specs">
			<h3 className="item-product__specs_title">Pistachio</h3>
			<img src="assets/img/icons/stars.svg" alt="Stars rating" className="item-product__rating" />
			<div className="item-product__price">
				<p className="item-product__price_crossed-out"> $20.00 </p>
				<p className="item-product__price_new"> $15.00 </p>
			</div>
			<p>
				Simply dummy text of the printing and typesetting industry. Lorem had
				ceased to been the industry's standard dummy text ever since the 1500s,
				when an unknown printer took a galley.
			</p>
			<AddToCart />
		</div>
	);
}

export default ProductSpecs;
