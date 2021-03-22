import React, {Component} from 'react'
import MessageList from './MessageList'
import InputGroup from './InputGroup'
import PropTypes from 'prop-types'

export default class ChatWindow extends Component{
	sendMessage = (message) =>{
		this.props.sendMessage(this.props.user.username, message);
	}
	
	render(){
		return (
			<div className="chat-window">
				<h2>Super Awesome Chat</h2>
            	<div className="name sender">{this.props.user.username}</div>
				<MessageList user={this.props.user} messages={this.props.messages}/>
				<InputGroup sendMessage={this.sendMessage}/>
			</div>
			
		);
	}
}

ChatWindow.propTypes ={
	sendMessage: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
	messages: PropTypes.array.isRequired
}