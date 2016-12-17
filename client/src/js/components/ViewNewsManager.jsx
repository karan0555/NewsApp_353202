import React from 'react';
import FavNewsDisplay from './FavNewsDisplay.jsx';

export default class ViewNewsManager extends React.Component{
	constructor(){
		super();
	}

	render(){
		console.log("Inside View News Manager ");
		console.log(this.props.newsArray);
		return(
			<div>
				<h4>Inside View News Manager</h4>
				{
          			this.props.newsArray.map(function(Item){
            		return(<FavNewsDisplay item={Item} />)
            		}
          			)
        		}
			</div>
		)
	}
}