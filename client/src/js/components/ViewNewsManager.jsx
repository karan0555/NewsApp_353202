import React from 'react';
import FavNewsDisplay from './FavNewsDisplay.jsx';

export default class ViewNewsManager extends React.Component{
	constructor(){
		super();
		this.updateArray = this.updateArray.bind(this);		
	}
	updateArray(item){
		this.props.newsArrUpdate(item);
	}
	render(){
		console.log("Inside View News Manager ");
		console.log(this.props.newsArray);
		var that = this;
		var arr = this.props.newsArray;

		return(
			<div>
				<h4>Inside View News Manager</h4>
				{
          			arr.map(function(Item){
            		return(<FavNewsDisplay item={Item} fxn={that.updateArray}/>)
            		}
          			)
        		}
			</div>
		)
	}
}