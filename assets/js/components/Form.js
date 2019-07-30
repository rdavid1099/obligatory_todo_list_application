import React from 'react'

const Form = props => (
  <form>
    {props.children}
    <button type="button" className="btn btn-primary" onClick={props.onSubmit}>Submit</button>
  </form>
)

export default Form
