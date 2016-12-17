var React = require('react');
import SaveButton from './SaveButton.jsx';
export default class NewsDisplay extends  React.Component{

render()
{
console.log("NEWS DISPLAY");
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
        </article>
      </section>
     <SaveButton item={newsItem}/>
      </section>
   </div>
 );
}
}