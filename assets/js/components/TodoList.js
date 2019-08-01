import React from 'react'

import LoadingSpinner from './LoadingSpinner'

const renderTodos = (todos, editTodo, deleteTodo) => todos.map(todo => (
  <tr className="table-light" key={todo.id}>
    <td style={{width: '85%', textAlign: 'center'}} contentEditable="true" onBlur={e => editTodo(e, todo.id)}>{todo.title}</td>
    <td><button type="button" className="btn btn-primary" onClick={() => deleteTodo(todo.id)}>Completed</button></td>
  </tr>
))

const TodoList = props => (
  <center>
  {
    props.loading && <LoadingSpinner />
  }
  {
    !props.loading &&
    <>
      {props.todos.length ? <h3>Stuff Needs to Get Done!</h3> : <h3>Nothing to See Here 🙃</h3>}
      <table className="table">
        <tbody>
          {renderTodos(props.todos, props.editTodo, props.deleteTodo)}
        </tbody>
      </table>
    </>
    }
  </center>
)

export default TodoList
