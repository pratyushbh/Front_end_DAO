import React from 'react'
import FS_Navbar from '../../Components/FullScreen_navbar/FS_Navbar'
import { Footer } from '../../Components'
import './homepage.css'

const Homepage = () => {
  return (
    <div className=' bg-dark Homepage'>
        <div className='Header'>
            <h2>Deepverse</h2>
            <div className='nav'>
            <FS_Navbar/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Homepage