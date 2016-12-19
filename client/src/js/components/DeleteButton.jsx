import React from 'react';

export default class DeleteButton extends React.Component{
	constructor(){
		super();
		this.deleteNewsFunction = this.deleteNewsFunction.bind(this);
    this.showAlert = this.showAlert.bind(this);
	}

	deleteNewsFunction(){
     var that = this;
      $.ajax({
        url: "http://localhost:8080/news/delete",
        type: "DELETE",
        data : that.props.item,
        success : function(msg){
        /*msg represents JSON data of news headlines sent back by external API*/
          console.log("delete success");
          that.props.functionUpdate(that.props.item);
          console.log(msg); 
          that.showAlert(msg);        
        },
         error: function(err){
         console.log("inside delete error");
          console.log(err);
        }
    });
  }

  showAlert(msg){
    alert(msg);
  }


	render(){
		console.log("inside delete component");
		console.log(this.props);
		return(
			<span>
				<button className="btn-warning" onClick={this.deleteNewsFunction}>Delete</button>
			</span>
		)
	}


}