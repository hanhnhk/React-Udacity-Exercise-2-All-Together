import React, {Component} from 'react'
import PropTypes from 'prop-types';


export default class InputGroup extends Component{
	constructor(props){
		super(props);
		this.state= {message:''};
	}

	isDisabled= ()=>{
		return this.state.message.trim().length === 0;
	}

	handleMessageChange= (event) =>{
		this.setState({message: event.target.value});
	}

	handleSendMessage= (event) =>{
		event.preventDefault();
		this.props.sendMessage(this.state.message.trim());
		this.setState({message:''});
	}
	
	render(){
		return <div>
              <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." value={this.state.message} onChange={this.handleMessageChange}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()} onClick={this.handleSendMessage}>
                    SEND
                  </button>
                </div>
              </form>
            </div>;
	}
}

InputGroup.propTypes= {
	sendMessage: PropTypes.func.isRequired
}