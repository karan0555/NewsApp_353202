import React from 'react';
import GrandChild from './GrandChild.jsx';

export default class ChildComponent extends React.Component{
	constructor(){
	super();
	this.changeVal = this.changeVal.bind(this);
	this.getNews = this.getNews.bind(this);
	}
	changeVal(){
		{this.props.ph1(98765)};
	}

	getNews(){
		{this.props.ph2("techcrunch")};
	}
	
	render(){
	return(
	<div id="child">
		<h3>Child Component</h3>
		{this.props.data}
		<GrandChild ol={this.props.data}/>
		</div>
		)
	}
}