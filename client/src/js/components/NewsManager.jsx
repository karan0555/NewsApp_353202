var React = require('react');
import NewsDisplay from './NewsDisplay';
import SaveButton from './SaveButton.jsx';
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
            return(<div className="jumbotron manager"><NewsDisplay item={Item} />
                    <SaveButton item={Item}/></div>)
            }
          )
        }
   </div>
 );
}
}