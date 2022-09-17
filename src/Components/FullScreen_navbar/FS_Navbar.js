import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import "./FS_Navbar.css"

const FS_Navbar = () => {
    const [isActive,setIsActive]=useState(false);
    const showNav=()=>{
        setIsActive(!isActive)
    }
      
  return (
    <div className='container'>
        <div className='fs_head'>
            <h2 className='fs_heading'>DEEPVERSE</h2>
        </div>
        <div className={'Navigation'+(isActive?' active': ' ')}>
            <div className={'ham-btn'+ (isActive?' active': ' ')} onClick={()=>{showNav()}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='links'>
                <div className='link'>
                <motion.div  transition={{delay:0.2}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  >
                <Link to="/">Homepage</Link>
                </motion.div>
                </div>
                <div className='link'>
                <motion.div  transition={{delay:0.3}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  >
                <Link to="/treasury">Treasury</Link>
                </motion.div>
                </div>
                <div className='link'>
                <motion.div  transition={{delay:0.4}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  >
                <Link to="/proposals">Proposal</Link>
                </motion.div>
                </div>
                <div className='link'>
                <motion.div  transition={{delay:0.5}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  >
                <Link to="/Content/Podcast">podcast</Link>
                </motion.div>
                </div>
                <div className='link'>
                <motion.div  transition={{delay:0.6}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  >
                <Link to="/Content/Blog">Blog</Link>
                </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FS_Navbar