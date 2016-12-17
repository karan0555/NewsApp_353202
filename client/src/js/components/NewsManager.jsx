var React = require('react');
import NewsDisplay from './NewsDisplay';
export default class NewsManager extends  React.Component{

constructor(){
  super();
}


render()
{
  console.log("NEWS MANAGER Array received is");
  console.log(this.props.newsArr);
 return(
   <div>
       {
          this.props.newsArr.map(function(Item){
            return(<NewsDisplay item={Item} />)
            }
          )
        }
   </div>
 );
}
}