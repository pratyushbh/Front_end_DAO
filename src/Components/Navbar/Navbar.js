import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import "./Navbar.css"
import { motion } from 'framer-motion';
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
      <motion.div  transition={{delay:0.2}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  viewport={{ once: true }}>
        <Link className="nav-link" to="/Treasury">Treasury</Link>
      </motion.div>
      </li>
      <li className="nav-item">
      <motion.div  transition={{delay:0.3}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  viewport={{ once: true }}>
            <Link className="nav-link" to="/Proposals">Proposals</Link>
      </motion.div>
      </li>
      <li className="nav-item">
      <motion.div  transition={{delay:0.4}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  viewport={{ once: true }}>
        <Link className="nav-link" to="/Content/Podcast">Podcast</Link>
      </motion.div>
      </li>
      <li className="nav-item">
      <motion.div  transition={{delay:0.5}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  viewport={{ once: true }}>
        <Link className="nav-link" to="/Content/Blog">Blog</Link>
      </motion.div>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar