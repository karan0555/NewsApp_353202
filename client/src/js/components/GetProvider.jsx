var React = require('react');
export default class GetProvider extends  React.Component{

constructor(){
  super();
  this.setProvider = this.setProvider.bind(this);
}

setProvider(){
  var searchValue = document.getElementById('search').value;
  {this.props.newsSearch(searchValue)};
}

render()
{
 return(
   <div className="searchProvider">
       <input type="text" placeholder="Enter News Provider" id="search" />
       <button type="button" onClick={this.setProvider} >Show News</button>
   </div>
 );
}
}