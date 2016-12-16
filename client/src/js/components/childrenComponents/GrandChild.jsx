import React from 'react';

export default class ChildComponent extends React.Component{
	constructor(){
	super();
	}
	
	render(){
	console.log(this.props);
	return(
	<div id="child">
		<h3>Grand Child Component</h3>
		{this.props.ol}
	</div>
		)
	}
}