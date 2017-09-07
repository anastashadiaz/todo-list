import React from 'react';

// Create TodoItem component
const TodoItem = React.createClass({
  render: function() {
    return (
      <li>
        <div className="item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete"> x </span>
        </div>
      </li>
    );
  }
});

export default TodoItem;