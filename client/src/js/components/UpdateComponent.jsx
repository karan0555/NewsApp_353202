import React from 'react';

export default class DeleteButton extends React.Component{
  constructor(){
    super();
    this.State = {comments:"Default"};
    this.updateNewsFunction = this.updateNewsFunction.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.checkValue = this.checkValue.bind(this);
  }

  checkValue(event){
    var val = event.target.value;
    this.setState({comments:val});
    this.props.item.comments = val;
    console.log("updated Comment "+this.props.item.comments);
  }

  updateNewsFunction(){
     var that = this;
     console.log("inside Update Function");
     console.log(that.props.item.comments);
      $.ajax({
        url: "http://localhost:8080/news/update",
        type: "PUT",
        data : that.props.item,
        success : function(msg){
        /*msg represents JSON data of news headlines sent back by external API*/
          console.log("delete success");
          console.log(msg); 
          that.showAlert(msg);        
        },
         error: function(err){
         console.log("inside delete error");
          console.log(err);
        }
    });
  }

  showAlert(msg){
    alert(msg);
  }


  render(){
  console.log("UPDATE COMPONENT");
  console.log(this.props.item);
  var itemNews = this.props.item;
  var idNe = this.props.item._id;
  var idNews = "#" + this.props.item._id;
    return(
      <span>
        <a href={idNews} role="button" className="btn btn-warning" data-toggle="modal">Update</a>

        <section className="modal fade" id={idNe}>
          <article className="modal-dialog">
            <section className="modal-content">

                <article className="modal-header">
                  <button className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">{itemNews.title}</h4>
                </article>

                <article className="modal-body">
                  <img src={itemNews.urlToImage} width="250" height="100" alt="Image of news" />
                  <hr/>
                  <form className="form-horizontal">
                    <section className="form-group">
                      <label className="col-lg-2 control-label" for="newsDescription">Description</label>
                      <article className="col-lg-10">
                        <textarea className="form-control" id="newsDescription" rows="5" disabled>{itemNews.description}</textarea>
                      </article>
                    </section>

                    <section className="form-group">
                      <label className="col-lg-2 control-label" for="newsComments">Comments</label>
                      <article className="col-lg-10">
                        <textarea className="form-control" id="newsComments" rows="4" onChange={this.checkValue}>{itemNews.comments}</textarea>                        
                      </article>
                    </section>
                  </form>
                </article>

                <article className="modal-footer">
                  <button className="btn btn-success pull-right close" data-dismiss="modal" type="submit" onClick={this.updateNewsFunction}>Submit</button>
                </article> 
            </section>
          </article>
        </section>
      </span>
    )
  }


}