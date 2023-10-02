import React from 'react';

function WeFarm() {
	return (
		<div className="organic-store__we-farm">
			<h3>We farm your land</h3>
			<p className="organic-store__we-farm_text">
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking a layout. The point of using
				Lorem Ipsum is that it has a more-or-less normal distribution of
				letters, as opposed to using 'Content here, content here', making it
				look like readable English.
			</p>
			<div className="organic-store__we-farm_content">
				<div className="organic-store__we-farm_item">
					<button className="organic-store__we-farm_button">
						<h6 className="organic-store__we-farm_button_title">01</h6>
					</button>
					<h6>Best quality support</h6>
				</div>
				<div className="organic-store__we-farm_item">
					<button className="organic-store__we-farm_button">
						<h6 className="organic-store__we-farm_button_title">02</h6>
					</button>
					<h6>Money back guarantee</h6>
				</div>
			</div>
		</div>
	);
}

export default WeFarm;
