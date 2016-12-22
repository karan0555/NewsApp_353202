
import 'file?name=[name].[ext]!../index.html';
import 'file?name=[name].[ext]!../includes/css/styles.css';
import Login from './components/Login.jsx'
import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory, hashHistory, Route, Router, IndexRoute}
  = require('react-router');

import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import NavbarComponent from './components/NavbarComponent.jsx';
import FavouriteNewsComponent from './components/FavouriteNewsComponent.jsx';

class MainComponent extends React.Component{

render(){

return (
<div id="main">
<NavbarComponent/>
  <br/><br/><br/>
    {this.props.children}
</div>
)
}
}
ReactDOM.render(
<Router history={browserHistory}>
             <Route path="/" component={MainComponent} >
             	<IndexRoute component={Login} />
                <Route path="/login" component={Login} />
             	<Route path="/favNews" component={FavouriteNewsComponent} />
             	<Route path="/home" component={Home}/>
             	<Route path="/about" component={About}/>
             	<Route path="/contact" component={Contact}/>
             </Route>


</Router>,document.getElementById('content'));