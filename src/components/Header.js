import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <nav className="navbar navbar-default">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
      <a className="navbar-brand brand">Developers rules</a>
    </div>

    <div className="collapse navbar-collapse">
      <ul className="nav navbar-nav">
        <li className="active"><Link to="/">Home</Link></li>
        <li><Link to="/new">New</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </div>
  </nav>
)

export default Header
