import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.state = {
      todos: {
        1: { id: 1, content: 'eat' },
        2: { id: 2, content: 'sleep '},
        3: { id: 3, content: 'code '}
      }
    }
  }

  render () {
    let me
    return (
      <div>
        <p>Mama mo todo list</p>
        <DaForm onSubmit={this.handleSubmit} name="Go mumshie" focus={true} />
        <Todo todos={this.state.todos} onDelete={this.handleDelete} onEdit={this.handleEdit} />
      </div>
    )
  }

  handleEdit(key, content) {
    console.error(key.content)
    console.error(key.id)
    this.setState({
      todos: {...this.state.todos, [key.id]: {content, id: key.id}}
    })
    console.error(this.state.todos)
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

const Todo = ({todos, onDelete, onEdit}) => {
  return <ul>
    {
      Object.keys(todos).filter(id => todos[id] !== undefined).map( key => {
        return <li>
          {todos[key].content}
          <button className="item-delete" onClick={() => onDelete(todos[key])}> &times; </button>
          <DaForm onSubmit={(value) => onEdit(todos[key], value)} name="Submit"/>
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
