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
    let todos = this.state.todos;
    todos = todos.map(function(item, index){
      return(
        <TodoItem item ={item} key={index} onDelete = {this.onDelete} onEdit={this.onEdit}/>
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
    console.log("you're deleting this item: " + item)
    const array = this.state.todos;
    const index = array.indexOf(item)
    array.splice(index, 1);
    this.setState({
      todos: array
    });
  },

  onAdd: function(item){
    const updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    })
  },

  onEdit: function(item) {
    const array = this.state.todos;
    console.log(item.placeholder)
    const index = array.indexOf(item.placeholder)
    array[index] = item;
    this.setState({
      todos: array
    });
  }
})


//put component into html page
ReactDOM.render(<App/>, document.getElementById("todo-wrapper"));