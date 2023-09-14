import Button from "../utils/Button";

function Banner_large() {
	return (
		<div className="banner_large">
			<div className="banner_large__container">
				<img src="assets/img/banner/banner_large.jpg" alt="Banner_large" className="banner_large__img" />
				<img src="assets/img/banner/background.svg" alt="Background" className="banner_large__background" />
			</div>
			<div className="banner_large__content">
				<h4>100% Natural Food</h4>
				<h1>Choose the best healthier way of life</h1>
				<Button />
			</div>
		</div>
	);
}
export default Banner_large;
