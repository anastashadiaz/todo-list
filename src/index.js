import {BrowserRouter, Route} from 'react-router-dom'
require('./css/index.css');

var React = require('react');
var ReactDOM = require('react-dom');

// Module requires
var TodoItem = require("./todoItem")
var AddItem = require("./addItem")
var About = require("./about")

var App = React.createClass({
  render: function(){
    return(
      <BrowserRouter>
        <div>
        <Route path ={'/'} component = {TodoComponent}></Route>
        <Route path = {'/about'} component = {About}></Route>
        </div>
      </BrowserRouter>
    );
  }
})


//Create component
var TodoComponent = React.createClass({
  getInitialState: function () {
    return{
      todos: []
    }
  },

  render: function () {
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return(
        <TodoItem item ={item} key = {index} onDelete = {this.onDelete}/>
      );
    }.bind(this));
    return(
      <div id = "todo-list">
        <h1>Todo mo mukha mo</h1>
        <ul>{todos}</ul>
        <AddItem onAdd = {this.onAdd} />
      </div>
    );
  },// render

  onDelete: function(item){
    var updatedTodos = this.state.todos.filter(function(val, index){
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  },

  onAdd: function(item){
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    })
  }
})


//put component into html page
ReactDOM.render(<App/>, document.getElementById("todo-wrapper"));
