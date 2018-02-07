"use strict";

var React = require('react');

var ChatHistory = React.createClass({
	getInitialState: function(){
		return	{
			user: 'Chatbot',
			css: 'left'
		};
	},

	componentWillMount: function(){
		this.state.user = this.props.questions.user == true ? "User" : "Chatbot"
		this.state.css = this.props.questions.user == true ? "right" : "left"
		this.setState({user: this.state.user})
		this.setState({css: this.state.css})
	},

	render: function() {
		var messageContainer = {
			padding: '7px',
            border: 'solid 1px #ddd',
            width: '512px',
            backgroundColor: 'white',
            whiteSpace: 'normal',
            wordWrap: 'break-word',
            marginBottom: '11px',
            maxWidth: '85%',
            display: 'block',
            /* border: solid 0.5px, */
            color: '#3c434c',
            float: this.state.css,
            lineHeight: '11px',
            borderRadius: '4px',
            boxShadow: '0 2px 2px rgba(0,0,0,0.15),-2px 0 0 rgba(0,0,0,0.03),2px 0 0 rgba(0,0,0,0.03),0 2px 0 rgba(0,0,0,0.12)'
		}

		var userName = {
			fontSize: '10px',
    		display: 'block',
    		marginLeft: '4px',
    		marginTop: '2px'
		}

		var imageSize = {
			height: '13px'
		}

		var onlieImage = {
			display: '-webkit-box'
		}

		return (
			<div>
				<div style={messageContainer}>
					<div style={onlieImage}>
						<img src="images/online.png" style={imageSize}/>
						<label style={userName}>{this.state.user}</label>
					</div>
					<label >{this.props.questions.question}</label>
				</div>
				
			</div>
		);
	}
});

module.exports = ChatHistory;