"use strict";

var React = require('react');
var DynamicInputTypes = require('../common/dynamicInputType');
var _ = require('lodash');

var ChatBot = React.createClass({
	getInitialState: function(){
		return {
			chatTextValue: {text: '', inputType: 'text', questionAsked: 'On Which date do you want to book?'}
		};
	},

	componentWillMount: function(){
		var questionAsked = this.state.chatTextValue.questionAsked;

		if(questionAsked.includes('budget')){
			this.state.chatTextValue.inputType = 'number';
			this.setState({chatTextValue: this.state.chatTextValue});
		}else if(questionAsked.includes('date')){
			this.state.chatTextValue.inputType = 'date';
			this.setState({chatTextValue: this.state.chatTextValue});
		}else{
			this.state.chatTextValue.inputType = 'text';
			this.setState({chatTextValue: this.state.chatTextValue});
		}
	},

	setChatBotState: function(event){
		var field = event.target.name;
		var value = event.target.value;
		this.state.chatTextValue[field] = value;
		return this.setState({chatTextValue: this.state.chatTextValue});
	},

	render: function() {
		return (
			<div>
				<h1>ChatBot</h1>
				<label>{this.state.chatTextValue.questionAsked}</label>
				<DynamicInputTypes
					type = {this.state.chatTextValue.inputType}
					name="text"
					label="text"
					value= {this.state.chatTextValue.text}
					onChange={this.setChatBotState}
				/>
			</div>
		);
	}
});

module.exports = ChatBot;