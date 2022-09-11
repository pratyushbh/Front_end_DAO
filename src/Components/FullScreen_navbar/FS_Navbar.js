import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./FS_Navbar.css"

const FS_Navbar = () => {
    const [isActive,setIsActive]=useState(false);
    const showNav=()=>{
        setIsActive(!isActive)
    }
  return (
    <div className='container'>
        <div className={'Navigation'+(isActive?' active': ' ')}>
            <div className={'ham-btn'+ (isActive?' active': ' ')} onClick={()=>{showNav()}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='links'>
                <div className='link'>
                    <Link to="/">Homepage</Link>
                </div>
                <div className='link'>
                    <Link to="/treasury">Treasury</Link>
                </div>
                <div className='link'>
                    <Link to="/proposals">Proposal</Link>
                </div>
                <div className='link'>
                    <Link to="/Content/Podcast">podcast</Link>
                </div>
                <div className='link'>
                    <Link to="/Content/Blog">Blog</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FS_Navbar