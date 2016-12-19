var React = require('react');
import ViewNewsManager from './ViewNewsManager';

export default class FavouriteNewsComponent extends  React.Component{
constructor(){
  super();
  this.state = {news:[]};
  this.getNewsArray = this.getNewsArray.bind(this);
}

   getNewsArray(){
    var that = this;
    $.ajax({
       url: "http://localhost:8080/news/getNews",
       type: "GET",
       dataType: 'JSON',
    
       success : function(msg){
       /*msg reprewsents JSON data of news headlines sent back by external API*/
       console.log("get News success");
       console.log(msg);
       that.setState({news:msg});
       },

       error: function(err){
       console.log("get News error");
       console.log(err);
      }
    });
  }

componentDidMount(){
  this.getNewsArray();
}

render()
{
console.log("inside favourite");
 return(
   <div className="container-fluid">
      <h1>View News Saved Before</h1>
      

      <ViewNewsManager newsArray={this.state.news} newsArrUpdate = {this.getNewsArray}/>
      
   </div>
 );
}
}