var React = require('react');
export default class SaveButton extends  React.Component{

constructor(){
  super();
  this.state = {data:"default"};
  this.saveNewsFunction = this.saveNewsFunction.bind(this);
}

saveNewsFunction(){
    var that = this;
    console.log("inside save");
      $.ajax({
        url: "http://localhost:8080/news/save",
        type: "POST",
        dataType: 'JSON',
        data : this.props.item,
        success : function(){
        /*msg represents JSON data of news headlines sent back by external API*/
          console.log("success");
        },
         error: function(err){
         console.log("inside error");
         that.setState({data:err.responseText});
         that.showMessage();
          console.log(err);
        }
    });
  }

  showMessage(){
    alert(this.state.data);
  }

render()
{
 return(
   <div className="save-btton">
       <section className= "row">
        <article className = "col-sm-6">
          <button type = "button" onClick = {this.saveNewsFunction}>Save</button>
        </article>
       </section>
   </div>
 );
}
}