import React from 'react';
import Button from '../../utils/Button';

function ProductDescription() {
	return (
		<div className="item-product__description">
		<div className='item-product__description_buttons'>
			<Button title="Product Description" showIcon={false} />
			<Button title="Additional Info" showIcon={false} extraClassName="button-default_light" />
		</div>
			<p className="item-product__description_text">
				Welcome to the world of natural and organic. Here you can discover the
				bounty of nature. We have grown on the principles of health, ecology,
				and care. We aim to give our customers a healthy chemical-free meal for
				perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as
				glucose and fructose — make up 70% and 80% of the carbs in raw.
			</p>
		</div>
	);
}

export default ProductDescription;
