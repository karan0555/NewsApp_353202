var React = require('react');
export default class SaveButton extends  React.Component{

constructor(){
  super();
  this.saveNewsFunction = this.saveNewsFunction.bind(this);
}

saveNewsFunction(){
    console.log('inside saved');
      $.ajax({
        url: "http://localhost:8080/news/save",
        type: "POST",
        dataType: 'JSON',
        data : this.props.item,
        success : function(msg){
        /*msg represents JSON data of news headlines sent back by external API*/
          console.log('saved');
          console.log(msg);
          alert("Saved");
        },
         error: function(err){
          console.log(err);
        }
    });
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