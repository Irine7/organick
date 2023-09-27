import React from 'react';

import SortedProducts from './SortedProducts';

function RelatedProducts() {
	return (
		<section className="related-products">
			<h2 className="related-products__title">Related Products</h2>
			<div className="related-products__container">
				<SortedProducts />
			</div>
		</section>
	);
}

export default RelatedProducts;
