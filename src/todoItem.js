var React = require('react');
require('./css/todoItem.css');

//Create TodoItemComponent
var TodoItem = React.createClass({
  render: function () {
    return(
      <li>
        <div className = "todo-item">
          <span className = "item-name" id="input"> {this.props.item} </span>
          <a href="#" className = "item-delete" onClick = {this.handleDelete}> x </a>
        </div>
      </li>
    );
  },

  //DELETE
  handleDelete: function() {
    this.props.onDelete(this.props.item);
  }
});

module.exports = TodoItem