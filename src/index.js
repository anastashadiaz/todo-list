import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.state = {
      todos: {
        1: { id: 1, content: 'eat', editable: false },
        2: { id: 2, content: 'sleep', editable: false },
        3: { id: 3, content: 'code ', editable: false }
      }
    }
  }

  render () {
    let me
    return (
      <div>
        <p>Mama mo todo list</p>
        <DaForm onSubmit={this.handleSubmit} name="Go mumshie" focus={true} />
        <Todo todos={this.state.todos} onDelete={this.handleDelete} onEdit={this.handleEdit} showEditForm={this.showEditForm} />
      </div>
    )
  }

  handleEdit(key, content) {
    this.setState({
      todos: {...this.state.todos, [key.id]: {content, id: key.id}}
    })
  }

  showEditForm(key) {
    this.setState({
      todos: {...this.state.todos, [key.id]: {content: key.content, id: key.id, editable: true}}
    })
  }

  handleDelete(key) {
    this.setState({
      todos: {...this.state.todos, [key.id]:undefined}
    })
    console.error(this.state.todos)
  }

  handleSubmit(content) {
    var newItem = {
      [`${+Date.now()}`]: {
        id: +(new Date()),
        content: content
      }
    }
    this.setState({
      todos: {...this.state.todos, ...newItem}
    })
  }

}

const Todo = ({todos, onDelete, onEdit, showEditForm}) => {
  return <ul>
    {
      Object.keys(todos).filter(id => todos[id] !== undefined).map( key => {
        return <li>
          {todos[key].id} {todos[key].content}
          <button className="item-delete" onClick={() => onDelete(todos[key])}> &times; </button>
          { todos[key].editable ?
            <DaForm onSubmit={(value) => onEdit(todos[key], value)} name="Submit"/>
            : <button onClick={() => showEditForm(todos[key])}>Edit</button>
          }
        </li>
      })
    }
  </ul>
}

// const TodoItem = ({ todos, key, onDelete, onEdit }) => {
//   return <div>
//     <li>
//     {console.error(key)}
//       {todos[key].id} {todos[key].content}
//       <button className="item-delete" onClick={() => onDelete(todos.id)}> &times; </button>
//       <DaForm onSubmit={(value) => onEdit(todos.id, value)} name="Submit"/>
//     </li>
//   </div>
// }

const DaForm = ({onSubmit, name}) => {
  let me
  return <form onSubmit={e => {
    e.preventDefault()
    onSubmit(me.value)
    me.value = ''
  }} >
    <input type="text" required ref={el => me = el} />
    <input type="submit" value={name} />
  </form>
}

ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
