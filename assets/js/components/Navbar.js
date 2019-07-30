import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">Obligatory TODO List</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className={`nav-item ${props.location.pathname === '/' ? 'active' : ''}`}>
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className={`nav-item ${props.location.pathname === '/hello' ? 'active' : ''}`}>
          <Link className="nav-link" to="/hello">Hello</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default withRouter(props => <Navbar {...props} />)
