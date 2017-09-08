var React = require('react');
var ReactDOM = require('react-dom');
require('./css/addItem.css');

var AddItem = React.createClass({
  render: function(){
    return(
      <form id="add-todo" onSubmit = {this.handleSubmit}>
        <input type = "text" required ref = "newItem"/>
        <input type = "submit" value = "Go mumsh"/>
      </form>
    )
  },

  //Submit handler
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value)
    ReactDOM.findDOMNode(this.refs.newItem).value = "";
  }
});

module.exports = AddItem