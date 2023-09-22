import Logo from '../utils/Logo';
import InputContainer from '../utils/InputContainer';
import Cart from '../utils/Cart';

function Header() {
	const menu = ['Home', 'About', 'Pages', 'Shop', 'Projects', 'News'];

	return (
		<div className="header">
			<div className="header__container">
				<Logo />
				<nav className="header__menu">
					{menu.map((item, index) => (
						<span key={index}> {item}</span>
					))}
				</nav>
				<div className="header__cart">
					<InputContainer />
					<Cart />
				</div>
			</div>
		</div>
	);
}

export default Header;
