import React from 'react'

import LoadingSpinner from './LoadingSpinner'

const renderTodos = todos => todos.map((todo, key) => (
  <tr className="table-light">
    <td><button type="button" className="btn btn-primary" onClick={console.log}>Completed</button></td>
    <td>{todo.title}</td>
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
          {renderTodos(props.todos)}
        </tbody>
      </table>
    </>
    }
  </center>
)

export default TodoList
