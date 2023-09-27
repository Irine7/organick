import React from 'react';

import Button from '../../utils/Button';

function AddToCart() {
	const [isPlaceholderHidden, setIsPlaceholderHidden] = React.useState(false);

	const togglePlaceholder = () => {
		setIsPlaceholderHidden(!isPlaceholderHidden);
	};

	return (
		<div className="item-product__add">
			<h6 className="item-product__add_title">Quantity :</h6>
			<input
				type="text"
				placeholder="1"
				className="item-product__add_number"
				onChange={togglePlaceholder}
			/>
			<Button title="Add to Cart"></Button>
		</div>
	);
}

export default AddToCart;
