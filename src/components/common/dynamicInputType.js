"use strict";

var React = require('react');

var DynamicInputTypes = React.createClass({
	render: function(){
		return (
			<div className= 'form-group'>
				<div className="field">
					<input type={this.props.type}
						name={this.props.name}
						className="form-control"
						ref={this.props.name}
						onChange={this.props.onChange}
						value={this.props.value}/>
				</div>
			</div>
		);
	}
});

module.exports = DynamicInputTypes;