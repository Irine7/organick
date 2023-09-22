import React from 'react';
import Button from '../../utils/Button';

function NewsContent() {
	const newsContent = [
		{
			date: '25 Nov',
			img: 'assets/img/news/greens.jpg',
			author: 'Rachi Card',
			title: 'The Benefits of Vitamin D & How to Get It',
			text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
		},
		{
			date: '25 Nov',
			img: 'assets/img/news/tomatoes.jpg',
			author: 'Rachi Card',
			title: 'Our Favorite Summertime Tomato',
			text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
		},
	];

	return (
		<div className="news__content">
			<div className="news__cards">
				{newsContent.map((item, index) => (
					<div className="news__card_item" key={index}>
						<div className="news__card_item_date">
							<p className="circle">{item.date.split(' ')[0]}</p>
							<p className="month">{item.date.split(' ')[1]}</p>
						</div>
						<img src={item.img} alt="User" className="news__card_img" />
						<div className="news__content_container">
							<div className="news__content_author">
								<img src="assets/img/icons/user-light.png" alt="User" />
								<span>{item.author}</span>
							</div>
							<h6>{item.title}</h6>
							<p className="news__card_text">{item.text}</p>
							<Button title="Read More" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default NewsContent;
