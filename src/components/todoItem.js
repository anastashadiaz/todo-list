import React from 'react';

// Create TodoItem component
const TodoItem = React.createClass({
  render: function() {
    return (
      <li>
        <div className="item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.handleDelete}> x </span>
        </div>
      </li>
    );
  },
  handleDelete: function() {
    this.props.onDelete(this.props.item);
  }
});

export default TodoItem;