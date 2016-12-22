var should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
//app = require("../app");
app = require("../bin/www");
var url = supertest("http://localhost:8080");
var server=supertest.agent("http://localhost:8080");

describe("Testing the registration route", function(err){
  it("should handle the request of registration", function(done){
    var obj = {"username" : "karan1","email":"karan1@gmail.com","age":"24","password":"karan1@123"};
    url
    .post("/users/register")
    .expect(200)
    .send(obj)
    .end(function(err,res){
      if (err) {
        throw err;
      }
      assert.equal("User Saved Successfully",res.text, "res.text is not matching with inserted");
      //res.text.should.be.equal("Hello!");
      done();
    });
  });
});

describe("Testing the login route", function(err){
  it("should handle the login request", function(done){
    var obj = {"username" : "karan1","password":"karan1@123"};
    url
    .post("/users/login")
    .expect(200)
    .send(obj)
    .end(function(err,res){
      if (err) {
        throw err;
      }
      assert.equal("Welcome to login",res.text, "res.text is not matching with inserted");
      //res.text.should.be.equal("Hello!");
      done();
    });
  });
});

describe("Testing the save news route", function(err){
  it("should handle the login request",loginCheck())
  it("should handle the save news request", function(done){

    var obj = {"author": "BBC News",
    "title": "Football abuse inquiry: 83 potential suspects identified",
    "description": "There are now 83 potential suspects and 98 clubs involved in the inquiry into child abuse in football, police chiefs say.",
    "url": "http://www.bbc.co.uk/news/uk-38260878",
    "urlToImage": "http://ichef-1.bbci.co.uk/news/1024/cpsprodpb/7F58/production/_92900623_thinkstockphotos-126460058.jpg",
    "publishedAt": "2016-12-09T10:20:14Z",
  "comments":"comments filled"};
    server
      .post("/news/save")
      .expect(200)
      .send(obj)
      .end(function(err,res){
        if (err) {
          throw err;
        }
        assert.equal("News Saved Successfully",res.text, "res.text is not matching with inserted");
        //res.text.should.be.equal("Hello!");
        done();
    });
  });
});

describe("Testing the delete news route", function(err){
  it("should handle the login request",loginCheck())
  it("should handle the delete news request", function(done){

    var obj = {"author": "BBC News",
    "title": "Football abuse inquiry: 83 potential suspects identified",
    "description": "There are now 83 potential suspects and 98 clubs involved in the inquiry into child abuse in football, police chiefs say.",
    "url": "http://www.bbc.co.uk/news/uk-38260878",
    "urlToImage": "http://ichef-1.bbci.co.uk/news/1024/cpsprodpb/7F58/production/_92900623_thinkstockphotos-126460058.jpg",
    "publishedAt": "2016-12-09T10:20:14Z",
  "comments":"comments filled"};
    server
      .delete("/news/delete")
      .expect(200)
      .send(obj)
      .end(function(err,res){
        if (err) {
          throw err;
        }
        assert.equal("news DELETED",res.text, "res.text is not matching with inserted");
        //res.text.should.be.equal("Hello!");
        done();
    });
  });
});


describe("Testing the update news route", function(err){
  it("should handle the login request",loginCheck())
  it("should handle the update news request", function(done){

    var obj = {
    "url": "http://www.bbc.co.uk/news/uk-38260878",
  "comments":"comments new"};
    server
      .put("/news/update")
      .expect(200)
      .send(obj)
      .end(function(err,res){
        if (err) {
          throw err;
        }
        assert.equal("NEWS UPDAted successfully",res.text, "res.text is not matching with inserted");
        //res.text.should.be.equal("Hello!");
        done();
    });
  });
});

function loginCheck(){
  return function(done) {
     server
         .post('/users/login')
         .send({"username" : "karan1","password":"karan1@123"})
         .expect(200)
         .end(onResponse);
     function onResponse(err, res) {
        if (err) return done(err);
        return done();
     }
 };
};
