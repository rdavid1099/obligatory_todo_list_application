import React from 'react'

import LoadingSpinner from './LoadingSpinner'

const renderTodos = todos => todos.map((todo, key) => (
  <div className="row" key={key}>
    <p>{todo.title}</p>
  </div>
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
      <div>
        {renderTodos(props.todos)}
      </div>
    </>
    }
  </center>
)

export default TodoList
