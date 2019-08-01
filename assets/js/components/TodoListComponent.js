import React from 'react'
import Faker from 'faker'

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
    this.editTodo = this.editTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.updateTodoToList = this.updateTodoToList.bind(this)
    this.generateData = this.generateData.bind(this)
  }

  componentDidMount() {
    this.fetchAllTodos()
  }

  fetchAllTodos() {
    fetch('/api/todo')
      .then(resp => resp.json())
      .then(result => this.setState({todos: result.todos, loading: false}))
  }

  addTodoToList(todo) {
    const todos = [...this.state.todos]
    todos.push(todo)
    this.setState({ todos })
  }

  updateTodoToList(id, opts) {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        if (!opts.delete) {
          todo.title = opts.title
          return todo;
        }
      } else {
        return todo
      }
    }).filter(el => el != null)
    this.setState({ todos })
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
      .then(resp => resp.json())
      .then(result => this.addTodoToList(result))
  }

  deleteTodo(id) {
    fetch(`/api/todo/${id}`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      }
    })
      .then(resp => resp.json())
      .then(result => this.updateTodoToList(id, {delete: true}))
  }

  editTodo(e, id) {
    const title = e.target.textContent
    const body = JSON.stringify({ title })
    fetch(`/api/todo/${id}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body
    })
      .then(resp => resp.json())
      .then(result => this.updateTodoToList(id, { title }))
  }

  generateData() {
    for (var i = 0; i < 1000; i++) {
      const body = JSON.stringify({ title: Faker.random.words() })
      fetch(`/api/todo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body
      })
        .then(resp => resp.json())
        .then(result => this.addTodoToList(result))
    }
  }

  render() {
    return (
      <div className="jumbotron">
        <TodoInput submitTodo={this.submitTodo}/>
        <TodoList
          generateData={this.generateData}
          editTodo={this.editTodo}
          deleteTodo={this.deleteTodo}
          todos={this.state.todos}
          loading={this.state.loading}
        />
      </div>
    )
  }
}
