import React from 'react';

import Heading from '../../utils/Heading';
import WhyChooseCircle from './WhyChooseCircle';
import WhyChooseCard from './WhyChooseCard';

function WhyChoose() {
	return (
		<div className="why-choose">
			<div className="why-choose__container">
				<div className="why-choose__content">
					<div className="why-choose__content_left">
						<Heading
							title={'We do not buy from the open market & traders'}
							subtitle={'Why Choose Us?'}
							extraClassName="align-start"
						/>
						<p className="why-choose__text">
							Simply dummy text of the printing and typesetting industry. Lorem
							had ceased to been the industry's standard the 1500s, when an
							unknown
						</p>
						<WhyChooseCircle />
					</div>
					<img src="assets/img/why-choose/why-choose.jpg" alt="Why Choose Us" className='why-choose__img' />
				</div>
				<WhyChooseCard />
			</div>
		</div>
	);
}

export default WhyChoose;
