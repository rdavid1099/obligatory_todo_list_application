import React from 'react'

import Form from './Form'
import TextInput from './TextInput'

const TodoInput = props => (
  <Form
    onSubmit={props.submitTodo}
  >
    <TextInput
      label="What Do You Need To Do?"
      id="todo-input-field"
      placeholder="Enter Your TODO Items"
    />
  </Form>
)

export default TodoInput
