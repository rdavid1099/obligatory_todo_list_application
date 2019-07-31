import React from 'react'

import TodoInput from './TodoInput'
import TodoList from './TodoList'

export default class TodoListComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      loading: true
    }
    this.fetchAllTodos = this.fetchAllTodos.bind(this)
    this.submitTodo = this.submitTodo.bind(this)
  }

  componentDidMount() {
    this.fetchAllTodos()
  }

  fetchAllTodos() {
    fetch('/api/todo')
      .then(resp => resp.json())
      .then(result => this.setState({todos: result.todos, loading: false}))
  }

  submitTodo() {
    const body = JSON.stringify({
      title: document.getElementById('todo-input-field').value
    })
    fetch(`/api/todo`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body
    })
  }

  render() {
    return (
      <div className="jumbotron">
        <TodoInput submitTodo={this.submitTodo}/>
        <TodoList todos={this.state.todos} loading={this.state.loading} />
      </div>
    )
  }
}
