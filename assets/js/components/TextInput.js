import React from 'react'

const TextInput = props => (
  <div className="form-group">
    <label>{props.label}</label>
    <input type="text" className="form-control" id={props.id} placeholder={props.placeholder} />
  </div>
)

export default TextInput
