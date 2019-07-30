import React from 'react'

import TodoInput from './TodoInput'

export default class TodoListComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="jumbotron">
        <TodoInput />
      </div>
    )
  }
}
