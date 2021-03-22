import React from 'react'
import PropTypes from 'prop-types'

export default function MessageList(props){
	console.log('props.messages', props.messages);
	return <ul className="message-list">
		{props.messages.map((message, index) => (
			<li
				key={index}
				className={
					message.username === props.user.username ? 'message sender' : 'message recipient'
				}
			>
				<p>{`${message.username}: ${message.text}`}</p>
			</li>
		))}
	</ul>;
}

MessageList.propTypes={
	messages: PropTypes.array.isRequired,
	user: PropTypes.object.isRequire
}