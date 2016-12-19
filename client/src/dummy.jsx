var React = require('react');

var UpdateModal = React.createClass({getInitialState: function()
{
return({Title:this.props.allMoviesData.Title,Year:this.props.allMoviesData.Year});
},
handleChangeTitle: function(e)
{
this.setState({Title:e.target.value});
},
handleChangeYear: function(e)
{
 console.log("hello");
this.setState({Year:e.target.value});
},
updateMovie: function()
{
 console.log(this.props.allMoviesData._id);
 $.ajax({
   url:"http://localhost:8080/omdb/movies/"+this.props.allMoviesData._id,
   type: 'PUT',
   datatype: 'JSON',
   data:this.state,
   success: function(res)
   {
     console.log("Movie Updated");
   }.bind(this),
   error: function()
   {
     console.log("Error in update opration");
   }.bind(this)
 });
},
closeModal: function(){
 this.props.handleHideModal();
},render: function()
{
 return(        <div className="modal fade" id="myModal">
         <div className="modal-dialog">
           <div className="modal-content">
             <div className="modal-header">
               <button className="close" onClick={this.closeModal} data-dismiss="modal">&times;</button>
               <h4 className="modal-title">Update Movie</h4>
             </div>
             <div className="modal-body">
               <form className="form-horizontal">
                 <div className="form-group">
                   <label className="col-lg-2 control-label">Poster</label>
                   <div className="col-lg-10">
                     <img className="thumbnail" src={this.props.allMoviesData.Poster} />
                   </div>
                 </div>
                 <div className="form-group">
                   <div className="col-lg-10">
                     <input type="text" onChange={this.handleChangeTitle} defaultValue={this.props.allMoviesData.Title} className="form-control" id="inputName" name="Title"/>
                   </div>
                 </div>
                 <div className="form-group">
                   <div className="col-lg-10">
                     <input type="text" onChange={this.handleChangeYear}  defaultValue={this.props.allMoviesData.Year} className="form-control" id="inputEmail" name="Year"/>
                   </div>
                 </div>
               </form>
             </div>
             <div className="modal-footer">
               <button className="btn btn-default" onClick={this.closeModal} type="button" data-dismiss="modal">
                 Close
               </button>
               <button className="btn btn-primary" onClick={this.updateMovie}>Update</button>
             </div>
           </div>
         </div>
       </div>
 );
}});module.exports= UpdateModal;

1:42
COde to display Modal
1:42


var React = require('react');
var ReactDOM = require('react-dom');
var UpdateModal = require('./UpdateModal');
var ViewMovie = React.createClass({
 getInitialState()
 {
   return {showModal: false};
 },
 handleHideModal()
 {
   this.setState({showModal: false});
 },
 handleShowModal()
 {
   this.setState({showModal: true});
 },
deleteMovie: function()
{
 $.ajax({
   url:"http://localhost:8080/omdb/movies/"+this.props.allMoviesData._id,
   type: 'Delete',
   datatype: 'JSON',
   success: function(res)
   {
     console.log("Movie Deleted");
   }.bind(this),
   error: function()
   {
     console.log("Error in deleted opration");
   }.bind(this)
 });
},
render: function()
{
 return(    <div className="ViewMovie">
           <h2 className="movieName"> </h2>
           <div className="well">
               <div className="row">
                   <div className="col-2">
                       <img className="thumbnail" src={this.props.allMoviesData.Poster}/>
                   </div>
                     <div className="col-10">
                         <h4>{this.props.allMoviesData.Title}</h4>
                         <ul className='list-group'>
                             <li className='list-group-item'>Year Released : {this.props.allMoviesData.Year}</li>
                             <li className='list-group-item'>IMDB Id : {this.props.allMoviesData.imdbID}</li>
                         </ul>
                         <button className="btn btn-success" onClick={this.deleteMovie}>Delete</button>
                         <a href="#myModal" onMouseDown={this.handleShowModal}  role="button" className="btn btn-primary" data-toggle="modal">
                                           Update
                                       </a>
                             {this.state.showModal ? <UpdateModal handleHideModal={this.handleHideModal}  allMoviesData={this.props.allMoviesData}/> : null}
                     </div>
               </div>
           </div>
       </div>  );
}})module.exports= ViewMovie;
Add Comment