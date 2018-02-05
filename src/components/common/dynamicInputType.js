"use strict";

var React = require('react');

var DynamicInputTypes = React.createClass({
	render: function(){
		var inputBox = {
			width: '426px'
		}
		return (
			<div className= 'form-group'>
				<div className="field">
					<input type={this.props.type}
						name={this.props.name}
						className="form-control"
						style={inputBox}
						ref={this.props.name}
						onChange={this.props.onChange}
						value={this.props.value}/>
				</div>
			</div>
		);
	}
});

module.exports = DynamicInputTypes;