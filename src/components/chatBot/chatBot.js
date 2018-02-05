"use strict";

var React = require('react');
var DynamicInputTypes = require('../common/dynamicInputType');
var ChatHistory = require('../chatHistory/chatHistory');
var QuestionsList = require('../../constants/workFlow').workflow;
var _ = require('lodash');

var ChatBot = React.createClass({
	getInitialState: function(){
		return {
			chatTextValue: {text: "", inputType: "", questionAsked: "", step: 1}
		};
	},

	nextQuestion: function(step){
		var nextQuestion = _.find(QuestionsList, {Step: step});
		return nextQuestion
	},

	componentWillMount: function(){
		var firstQuestion = _.find(QuestionsList, {IsAsked: false});
		this.state.chatTextValue.questionAsked = firstQuestion.Question;
		this.state.chatTextValue.inputType = firstQuestion.Type;
		this.state.chatTextValue.text = firstQuestion.Answer;
		this.setState({chatTextValue: this.state.chatTextValue});
	},

	setChatBotState: function(event){
		var field = event.target.name;
		var value = event.target.value;
		this.state.chatTextValue[field] = value;
		return this.setState({chatTextValue: this.state.chatTextValue});
	},

	saveAnswer: function(event){
		event.preventDefault();
		var questionList =  _.find(QuestionsList, {Step: this.state.chatTextValue.step}); 
		var questionListIndex = _.findIndex(QuestionsList, questionList); 
		questionList.Answer = this.state.chatTextValue.text;
		questionList.IsAsked = true;
		QuestionsList.splice(questionListIndex, 1, questionList);
		this.setState({chatTextValue: this.state.chatTextValue});
	},

	render: function() {
		var chatBotDialog = {
    		padding: '10px',
    		border: 'solid 3px #ddd',
    		minHeight: '500px',
    		width: '512px',
    		marginLeft: '411px'
		}

		var inputBox = {
			display: 'inline-flex',
			marginTop: '345px'
		}

		var sendButton = {
			height: '34px',
    		marginLeft: '10px'
		}

		return (
			<div className="chat-bot-dialog" style={chatBotDialog}>
				<div>
					<ChatHistory questions={this.state.chatTextValue}/>
				</div>
				<div style={inputBox}>
					<DynamicInputTypes
						type = {this.state.chatTextValue.inputType}
						name="text"
						label="text"
						value= {this.state.chatTextValue.text}
						onChange={this.setChatBotState}
					/>
					<button type="button" style={sendButton} className="btn btn-default btn-sm" onClick={this.saveAnswer}>Send</button>
				</div>
			</div>
		);
	}
});



module.exports = ChatBot;