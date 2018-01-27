"use strict";

var React = require('react');

var About = React.createClass({
	statics: {
		willTransitionTo: function(transition, params, query, callback){
			if(!confirm("Do you want to go to about Page?")){
				transition.about();
			}else{
				callback();
			}
		},
		
		willTransitionFrom: function(transition, component){
			if(!confirm("Do you want to leave this page?")){
				transition.about();
			}
		}
	},
	render: function() {
		return (
			<div>
				<h1>About</h1>
				<p>
					This application uses the following technologies:
					<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Fulx</li>
						<li>Node</li>
						<li>Gulp</li>
						<li>Browserify</li>
						<li>BootStrap</li>
					</ul>	
				</p>	
			</div>
		);
	}
});

module.exports = About;