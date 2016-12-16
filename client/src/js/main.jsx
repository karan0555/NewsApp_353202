 import 'file?name=[name].[ext]!../index.html';
import React from 'react';
import ReactDOM from 'react-dom';
import ChildComponent from './components/childrenComponents/ChildComponent.jsx';
import SiblingChild from './components/childrenComponents/SiblingChild.jsx';


class MainComponent extends React.Component{
	constructor(){
	super();
	this.state= {stringData:12356, newsArray:[]};
	this.changeValue= this.changeValue.bind(this);
	this.changeChildren= this.changeChildren.bind(this);
	this.changeNewsArray= this.changeNewsArray.bind(this);
	this.getNews = this.getNews.bind(this);
	}

	getNews(newsPublisher){
	var that=this;
		 $.ajax({
    	 url: "https://newsapi.org/v1/articles?source=techcrunch&apiKey=68ee5777f2d94da7846740cd1c6b27aa",
    	 type: "GET",
    	 dataType: 'JSON',
    
    	 success : function(msg){
    	 /*msg reprewsents JSON data of news headlines sent back by external API*/
    	 console.log(msg);
    	 var newsArrayGot = msg.articles;
    	 console.log("Arrays is ");
    	 console.log(newsArrayGot);
    	 that.changeNewsArray(newsArrayGot);
    	 },

    	 error: function(err){
   	  }
 	});
	}

	changeNewsArray(val1){
		console.log("Array got is");
		console.log(val1);
		this.setState({newsArray:val1});
		console.log(this.state.newsArray);
	}
	changeValue(val){
		this.setState({stringData:val});
	}
	changeChildren(){
		this.setState({stringData:9000});
	}
	render(){
	var value = this.state.stringData;
	var newsGot = this.state.newsArray;
		return(
		<div id="main">
			<h1>Hello From React</h1>
			/* <button type= "button" onClick={this.changeChildren}>Click Me</button> */
			<ChildComponent data={value} ph1={this.changeValue} ph2={this.getNews}/>
			
		</div>
		)
	}
}

ReactDOM.render(
	<MainComponent/>,document.getElementById('content')
);
