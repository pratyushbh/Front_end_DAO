import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-active'>
      <nav className="navbar navbar-expand-lg navbar-light">
  <Link className="navbar-brand" to="/">Deepverse</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/Treasury">Treasury</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Proposals">Proposals</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Content/Podcast">Podcast</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Content/Blog">Blog</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar