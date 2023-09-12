function Header() {
	const menu = ['Home', 'About', 'Pages', 'Shop', 'Projects', 'News'];

	return (
		<div className="header">
			<div className="container">
				<a href="/">
					<div className="header__logo">
						<img width="36" src="assets/img/logo.svg" alt="Organick logo" />
						<h4>Organick</h4>
					</div>
				</a>
				<nav className="header__menu">
					{menu.map((item, index) => (
						<span key={index}> {item}</span>
					))}
				</nav>
				<div className="header__cart">
					<div class="input-container">
						<input type="text" />
						<img src="assets/img/header/search.svg" alt="" class="icon" />
					</div>
					<div className="header__cart-block">
						<img src="assets/img/header/cart.svg" alt="" />
						<span>Cart(0)</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
