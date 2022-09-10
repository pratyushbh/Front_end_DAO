import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='bg-active'>
      <nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">Treasury</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Proposals</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Podcasts</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Blogs</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar