import React from 'react';
import {browserHistory} from 'react-router';

export default class Login extends React.Component{
	constructor(){
		super();
		this.loginFunction = this.loginFunction.bind(this);
	}

	loginFunction(){
		console.log("in login function");
		var username = this.refs.uname.value;
		var password = this.refs.pass.value;
		$.ajax({
	       url: "http://localhost:8080/users/login",
	       type: "POST",
	       data: 'username='+username+'&password='+password,
	       success : function(msg){
	       /*msg reprewsents JSON data of news headlines sent back by external API*/
	       console.log("in login");
	       console.log(msg);
	       console.log("login success");
	       alert("successfully logged in");
	       browserHistory.push('/home');
	       },

	       error: function(err){
	       console.log("login fail");
	       alert('check ur username and password');
	       console.log(err);
      }
	});
	}

	render(){

		return(
			<div id="loginForm">
    				<div>
        				<label>Username:</label>
       				 	<input type="text" name="username" ref = "uname"/>
    				</div>
   					 <div>
        				<label>Password:</label>
        				<input type="password" name="password" ref = "pass"/>
    				</div>
    				<div>
        				<button type="submit" onClick={this.loginFunction}>Log In</button>
    				</div>
			</div>
		)
	}
}