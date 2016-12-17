import React from 'react';

import GetProvider from './GetProvider.jsx';
import NewsManager from './NewsManager.jsx';

export default class Home extends React.Component{
	constructor(){
	super();
	this.state= {newsSource:"bbc-news", newsArray:[]};
	this.changeNewsArray= this.changeNewsArray.bind(this);
	this.getNews = this.getNews.bind(this);
	this.saveNews = this.saveNews.bind(this);
	}

	getNews(newsPublisher){
	this.setState({newsSource:newsPublisher})
	var that=this;
		 $.ajax({
    	 url: "https://newsapi.org/v1/articles?source="+newsPublisher+"&apiKey=68ee5777f2d94da7846740cd1c6b27aa",
    	 type: "GET",
    	 dataType: 'JSON',
    
    	 success : function(msg){
    	 /*msg reprewsents JSON data of news headlines sent back by external API*/
    	 var newsArrayGot = msg.articles;
    	 that.changeNewsArray(newsArrayGot);
    	 },

    	 error: function(err){
    	 console.log(err);
   	  }
 	});
	}

	saveNews(newsItem){
		console.log('inside saved');
  		$.ajax({
   			url: "http://localhost:8080/news/save",
   			type: "POST",
   			dataType: 'JSON',
   			data : newsItem,
   			success : function(msg){
   			/*msg represents JSON data of news headlines sent back by external API*/
    			console.log('saved');
    			document.alert('news saved');
   			},
  			 error: function(err){
     			console.log('error');
   			}
		});
	}

	changeNewsArray(val1){
		this.setState({newsArray:val1});
	}

	render(){
	console.log("HOME");
	console.log("Source");
	console.log(this.state.newsSource);
	console.log("NEWS ARRAY");
	console.log(this.state.newsArray);
		return(
		<div id="home">
			<h1>Search For News</h1>
			<GetProvider newsSearch = {this.getNews}/>
			<NewsManager newsArr = {this.state.newsArray}/>
		</div>
		)
	}
}

