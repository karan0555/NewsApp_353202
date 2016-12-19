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
   <div className="jumbotron">
       <input type="text" placeholder="Enter News Provider" id="search" /><br/>
       <input type="button" className="btn btn-primary block-center" value="Search News" onClick={this.setProvider} />
   </div>
 );
}
}