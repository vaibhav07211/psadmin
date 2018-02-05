"use strict";

var React = require('react');

var ChatHistory = React.createClass({
	getInitialState: function(){
		return	{
			
		};
	},

	render: function() {
		var messageContainer = {
			padding: '7px',
            border: 'solid 1px #ddd',
            width: '512px',
            backgroundColor: 'white',
            whiteSpace: 'normal',
            wordWrap: 'break-word',
            maxWidth: '85%',
            display: 'block',
            /* border: solid 0.5px, */
            color: '#3c434c',
            float: 'left',
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
				<h3>Movie Booking</h3>
				<div>
					<div style={messageContainer}>
						<div style={onlieImage}>
							<img src="images/online.png" style={imageSize}/>
							<label style={userName}>Chatbot</label>
						</div>
						<label >{this.props.questions.questionAsked}</label>
					</div>
					<label>{this.props.questions.text}</label>
				</div>
			</div>
		);
	}
});

module.exports = ChatHistory;