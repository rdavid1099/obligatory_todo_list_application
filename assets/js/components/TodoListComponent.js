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
  }

  componentDidMount() {
    this.fetchAllTodos()
  }

  fetchAllTodos() {
    fetch('/api/todo')
      .then(resp => resp.json())
      .then(result => this.setState({todos: result.todos, loading: false}))
  }

  render() {
    return (
      <div className="jumbotron">
        <TodoInput />
        <TodoList todos={this.state.todos} loading={this.state.loading} />
      </div>
    )
  }
}
