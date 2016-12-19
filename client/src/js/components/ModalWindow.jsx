import React from 'react';

export default class ModalComponent extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
		<div>
			<a href="#" role="button" className="btn btn-warning" data-toggle="modal"><span className="glyphicon glyphicon-hand-up"></span>Click for Modal window</a>

		</div>	
		)
	}
}
