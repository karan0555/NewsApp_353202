import React from 'react';
import {browserHistory} from 'react-router';

export default class Login extends React.Component{
	constructor(){
		super();
		this.loginFunction = this.loginFunction.bind(this);
		this.registerUser = this.registerUser.bind(this);
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

	registerUser(){
		var Uname = this.refs.username.value;
		var Uemail = this.refs.email.value;
		var Uage = this.refs.age.value;
		var Upassword = this.refs.password.value;
		var userObject = {};
		userObject.username = Uname;
		userObject.email = Uemail;
		userObject.age = Uage;
		userObject.password = Upassword;

		$.ajax({
	       url: "http://localhost:8080/users/register",
	       type: "POST",
	       data: userObject,
	       success : function(msg){
	       /*msg reprewsents JSON data of news headlines sent back by external API*/
	       console.log("in Register");
	       console.log(msg);
	       alert("registered Successfully");
	       console.log("login success");
	       
	       },

	       error: function(err){
	       console.log("Register fail");
	       alert('Not Registered');
	       console.log(err);
      }
	});
	}

	render(){

		return(
			<div className="jumbotron" id="home">
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
    			<br/><br/>
    			<a href = "#registerModal" type = "button" data-toggle="modal" >Not Registered ? Click here to register... </a>
                
                <section className = "modal fade" id="registerModal">
                    <article className = "modal-dialog">
                    <section className = "modal-content">
                        <article className = "modal-header">
                            <button className="close" data-dismiss="modal">&times;</button>
                  			<h4 className="modal-title">Register Yourself</h4>
                        </article>

                   		<article className = "modal-body">
                     		<article className = "form-horizontal">
                         		<article className = "form-group">
                           			<article className = "col-sm-12 row">
                            			<label className = "col-sm-4">Username </label>
                             			<input type = "text" placeholder = "username" className = "col-sm-4 form-control" ref = "username"/>
                           			</article>
                          			 <br/>
                           			<article className = "col-sm-12 row">
                             			<label className = "col-sm-4">Email </label>
                             				<input type = "text" placeholder = "email" className = "col-sm-4 form-control" ref = "email"/>
                           			</article>
                           			<br/>
                           			<article className = "col-sm-12 row">
                           				<label className = "col-sm-4">Age </label>
                             			<input type = "text" placeholder = "age" className = "col-sm-4 form-control" ref = "age"/>
                           			</article>
                           			<br/>
                           			<article className = "col-sm-12 row">
                            			<label className = "col-lg-4">Password </label>
                            			<input type = "password" placeholder = "password" className = "col-lg-4 form-control" ref = "password"/>
                           			</article>
                        		</article>
                    		</article>
                   		</article>
                   		<article className="modal-footer">
                    		<input type = "submit" className = "btn btn-primary" data-dismiss = "modal" value ="Register" onClick = {this.registerUser}/>
                   		</article>
                    </section>
                </article>
            	</section>
			</div>
		)
	}
}