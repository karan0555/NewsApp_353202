import React from 'react';

export default class SiblingChild extends React.Component{
	render(){
	return(
	<div id="sibling">
		<h3>Sibling Component</h3>
		{this.props.data}
		<h5>News Got is </h5>
		{this.props.dataNews};
		</div>
		)
	}
}