import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './components/todoItem'
import AddItem from './components/addItem'

// Create component
const TodoComponent = React.createClass({
  getInitialState: function() {
    return {
      todos: []
    }
  },
  render: function() {
    let todos = this.state.todos;
    todos = todos.map(function(item, index) {
      return (
        <TodoItem item={item} key={index} />
      );
    }.bind(this));
    return (
      <div id="todo-list">
        <p onClick={this.click}>My todo list</p>
        <AddItem onAdd={this.onAdd}/>
        <p>{this.state.age}</p>
        <ul>
          {todos}
        </ul>
      </div>
    );
  },

  onAdd: function(item) {
    let updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    })
  }

});

// Puts component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('root'));