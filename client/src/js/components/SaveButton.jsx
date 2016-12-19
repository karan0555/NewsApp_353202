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
        data : this.props.item,
        success : function(res){
        /*msg represents JSON data of news headlines sent back by external API*/
          console.log("inside save success");
          that.setState({data:res});
          console.log(res);
         that.showMessage();

        },
         error: function(err){
         console.log("inside save error");        
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
          <button type = "button" className= "btn pill-right" onClick = {this.saveNewsFunction}>Save</button>
        </article>
       </section>
   </div>
 );
}
}