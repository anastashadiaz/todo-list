import React from 'react';

const AddItem = React.createClass({
  render: function() {
    return(
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" ref="newItem" placeholder="add something" required/>
        <input type="submit" value="+"/>
      </form>
    );
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
  }
});

export default AddItem;