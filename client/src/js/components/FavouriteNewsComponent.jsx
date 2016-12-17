var React = require('react');
import ViewNewsManager from './ViewNewsManager';

export default class FavouriteNewsComponent extends  React.Component{
constructor(){
  super();
  this.state = {news:[]};
  this.fetchSavedNews =  this.fetchSavedNews.bind(this);
}

fetchSavedNews(){
  var that = this;
   $.ajax({
       url: "http://localhost:8080/news/getNews",
       type: "GET",
       dataType: 'JSON',
    
       success : function(msg){
       /*msg reprewsents JSON data of news headlines sent back by external API*/
       console.log("success");
       console.log(msg);
       that.setState({news:msg});
       },

       error: function(err){
       console.log("error");
       console.log(err);
      }
  });
}

render()
{
console.log("inside favourite");
 return(
   <div className="container-fluid">
      <h1>Click The button to get Your Favourite News</h1>
      <button type="button" onClick={this.fetchSavedNews} >Click Me</button>

      <ViewNewsManager newsArray={this.state.news}/>
      
   </div>
 );
}
}