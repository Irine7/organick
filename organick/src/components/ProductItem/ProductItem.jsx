import React from 'react';

import ProductImage from './ProductImage';
import ProductSpecs from './ProductSpecs';
import ProductDescription from './ProductDescription';

function ProductItem() {
	return (
		<section className="item-product">
			<div className="item-product_content">
				<ProductImage />
				<ProductSpecs />
			</div>
			<ProductDescription />
		</section>
	);
}

export default ProductItem;
