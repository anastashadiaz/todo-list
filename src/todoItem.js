var React = require('react');
require('./css/todoItem.css');

//Create TodoItemComponent
var TodoItem = React.createClass({
  render: function () {
    return(
      <li>
        <div className="todo-item">
        {this.props.item}
          <form onSubmit={this.handleEdit}>
            <input type="text" placeholder={this.props.item} ref="editedItem"/>
          <input type = "submit" value = "Go mumsh"/>
          </form>
          <button className="item-delete" onClick={this.handleDelete}> x </button>
        </div>
      </li>
    );
  },

  handleEdit: function(e) {
    console.log(this.refs.editedItem);
    e.preventDefault();
    console.log("state: " + this.state);
    this.props.onEdit(this.refs.editedItem.value)
  },

  //DELETE
  handleDelete: function() {
    this.props.onDelete(this.props.item);
    console.log("wat");
  }
});

module.exports = TodoItem