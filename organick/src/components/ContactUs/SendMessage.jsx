import React from 'react';

import Button from '../../utils/Button';

function SendMessage() {
	const [placeholderStates, setPlaceholderStates] = React.useState(
		Array(5).fill(false)
	);

	const togglePlaceholder = (index) => {
		const newPlaceholderStates = [...placeholderStates];
		newPlaceholderStates[index] = !newPlaceholderStates[index];
		setPlaceholderStates(newPlaceholderStates);
	};

	const info = [
		{
			title: 'Full Name*',
			placeholder: 'Your Full Name',
		},
		{
			title: 'Your Email*',
			placeholder: 'example@yourmail.com',
		},
		{
			title: 'Company Name*',
			placeholder: 'Your company name here',
		},
		{
			title: 'Subject*',
			placeholder: 'How can we help',
		},
		{
			title: 'Message*',
			placeholder: 'Hello there, I would like to know about how to...',
		},
	];

	return (
		<section className="send-message">
			<div className="send-message__content">
				{info.map((item, index) => (
					<div className="send-message__content_item" key={index}>
						<span>{item.title}</span>
						{index === info.length - 1 ? ( // Check if it's the last item
							<textarea // Use textarea if it's the last item
								placeholder={placeholderStates[index] ? '' : item.placeholder}
								onFocus={() => togglePlaceholder(index)}
								onBlur={() => togglePlaceholder(index)}
							/>
						) : (
							<input
								type="text"
								placeholder={placeholderStates[index] ? '' : item.placeholder}
								onFocus={() => togglePlaceholder(index)}
								onBlur={() => togglePlaceholder(index)}
							/>
						)}
					</div>
				))}
			</div>
			<Button title="Send Message" />
		</section>
	);
}

export default SendMessage;
