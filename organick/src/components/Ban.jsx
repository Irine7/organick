import Button from "../utils/Button";

function Ban() {
	return (
		<div className="banner">
			<div className="banner__container">
				<img src="assets/img/banner/banner_large.jpg" alt="Banner" className="banner__img" />
				<img src="assets/img/banner/background.svg" alt="Background" className="banner__background" />
			</div>
			<div className="banner__content">
				<h4>100% Natural Food</h4>
				<h1>Choose the best healthier way of life</h1>
				<Button />
			</div>
		</div>
	);
}
export default Ban;
