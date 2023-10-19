import React from 'react';
import Button from '../../utils/Button';

function Banner({
	title,
	subtitle,
	imgSrc,
	backgroundSrc,
	hasOverlay,
	extraClassName,
	button,
	buttonText
}) {
	const bannerStyles = {
		position: 'relative',
	};

	const bannerClasses = `banner ${extraClassName || ''}`;

	const overlayStyles = {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		background: 'rgba(0, 0, 0, 0)',
		display: hasOverlay ? 'block' : 'none',
	};

	return (
		<section className={bannerClasses} style={bannerStyles}>
			<div className="banner__container">
				{hasOverlay && <div style={overlayStyles}></div>}
				{backgroundSrc && (
					<img
						src={backgroundSrc}
						alt="Background"
						className="banner__background"
					/>
				)}
				<img src={imgSrc} alt="Banner" className="banner__img" />
			</div>
			<div className="banner__content">
				{title && <h4>{title}</h4>}
				{subtitle && <h1>{subtitle}</h1>}
				{button && <Button title={buttonText} />}
			</div>
		</section>
	);
}

export default Banner;