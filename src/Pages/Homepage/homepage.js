import React from 'react'
import FS_Navbar from '../../Components/FullScreen_navbar/FS_Navbar'
import { Footer } from '../../Components'
import Blog_homepage from '../../assets/Blog_Homepage.png'
import Podcast_homepage from '../../assets/PodCast_Homepage.png'
import Treasury_homepage from '../../assets/Treasury.png'
import './homepage.css'

const Homepage = () => {
  return (
    <div className='bg-dark Homepage'>
        <div className='nav'>
          <FS_Navbar/>
        </div>
        <div className='Intro'>
        <div class=" row">
            <div class="col">
              <h2>LEARN BUILD WORK TECH</h2>
              <h6>Introduction</h6>
            </div>
            <div class="col-md-auto">
              <h1>DEEP</h1>
              <h1>VERSE</h1>
            </div>
          </div>
        </div>
        <div className='MainContent'>
          <div className='Blog bg-light'>
            <div className='row'>
            <div className='col'>
              <div className="Blog_Content">
                <h2>Exclusive Blogs</h2>
                <h6>Since We are a DAO that educate people about web3 we publish Exclusive Blogs on our website, You can check them on the Content Page of the Site</h6>
              </div>
              </div>
              <div className='col'>
                <div><img  className="Homepage_img" src={Blog_homepage} alt="Blog_homepage"/></div>
              </div>
            </div>
          </div>
            <div className='Podcast bg-black'>
            <div className='row'>
              <div className='col'>
                <div><img  className="Homepage_img" src={Podcast_homepage} alt="Blog_homepage"/></div>
              </div>
            <div className='col'>
              <div className="Podcast_Content">
                <h2>Podcast</h2>
                <h6>Get Access to our Podcast and get up to date infos</h6>
              </div>
              </div>
            </div>
          </div>
          <div className='Treasury bg-light'>  
            <div className="Treasury_Content">
                <h2>Treasury</h2>
                <h6>Treasury Info</h6>
            </div>
            <div><img  className="Homepage_img" src={Treasury_homepage} alt="Blog_homepage"/></div>
          </div>
          </div>
        </div>
  )
}

export default Homepage