import React, { useState } from 'react'
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
                    <a href='#'>Homepage</a>
                </div>
                <div className='link'>
                    <a href='#'>Treasury</a>
                </div>
                <div className='link'>
                    <a href='#'>Proposal</a>
                </div>
                <div className='link'>
                    <a href='#'>Blogs</a>
                </div>
                <div className='link'>
                    <a href='#'>Podcasts</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FS_Navbar