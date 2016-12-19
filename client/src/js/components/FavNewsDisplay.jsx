var React = require('react');
import DeleteButton from './DeleteButton.jsx';
import UpdateComponent from './UpdateComponent.jsx';
export default class FavNewsDisplay extends  React.Component{
constructor(){
  super(); 
  this.updateNewsArray = this.updateNewsArray.bind(this); 
}

updateNewsArray(item){
  this.props.fxn(item);
}

render() 
{
console.log("FavNEWS DISPLAY");
console.log(this.props.item);
var newsItem = this.props.item;
 return(
   <div className="news-display">
       <section className = "jumbotron" >
      <section className = "row">
        <article className = "col-sm-4">
          <img src={this.props.item.urlToImage} height = "200" width = "300" />
        </article>
        <article className = "col-sm-8">
          <h3> Title: {this.props.item.title} </h3>
          <h6>Published At : {this.props.item.publishedAt} </h6>
          <p>{this.props.item.description}</p>
          <h6>Comments</h6><textarea rows="2" cols="20" disabled>{this.props.item.comment}</textarea>
        </article>
      </section>
      <DeleteButton item={this.props.item} functionUpdate = {this.updateNewsArray}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <UpdateComponent item={this.props.item}/>
      </section>
      
   </div>
 );
}
}