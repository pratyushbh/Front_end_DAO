import React, { useCallback, useState } from 'react';
import FS_Navbar from '../../Components/FullScreen_navbar/FS_Navbar'
import { motion,useInView } from 'framer-motion'
import Blog_homepage from '../../assets/Blog_Homepage.png'
import Podcast_homepage from '../../assets/PodCast_Homepage.png'
import Treasury_homepage from '../../assets/Treasury.png'
import './homepage.css'
import particlesOptions from "../../particles.json";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Content from '../../Components/contentSection/content';
import Horizontal from '../../Components/HorizontalScroll/HorizontalScroll';
import SS from '../../Components/solar-system/SS';
import { Footer } from '../../Components';



const Homepage = () => {
  const particlesInit = useCallback(main => {
    loadFull(main);
}, [])
  const [event,setEvent]=useState();
  return (
    <div className='Homepage' onWheel={(e)=>{console.log(window.pageXOffset)}}>
            <Particles options={particlesOptions} init={particlesInit}/>
        <div className='nav'>
          <FS_Navbar/>
        </div>
        <Horizontal/>
        {/* <div className='MainContent'>
          <div className='Blog'>
            <div className='row'>
            <div className='col'>
              <div className="Blog_Content">
              <motion.div  transition={{delay:0.2}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  viewport={{ once: true }}>
              </motion.div>
              </div>
              </div>
              <div className='col'>
              <motion.div transition={{delay:0.4}}  initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  viewport={{ once: true }}>
                <div><img  className="Homepage_img" src={Blog_homepage} alt="Blog_homepage"/></div>
              </motion.div>
              </div>
            </div>
          </div>
          <motion.div  transition={{delay:0.2}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  viewport={{ once: true }}>
           <Content/>
          </motion.div>
          <div className='Treasury'>  
            <div className="Treasury_Content">
            <motion.div  transition={{delay:0.2}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  viewport={{ once: true }}>
                <h2>Treasury</h2>
                <h6>Treasury Info</h6>
            </motion.div>
            </div>
            <div>
            <motion.div  transition={{delay:0.4}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  viewport={{ once: true }}>
              <img  className="Homepage_img" src={Treasury_homepage} alt="Blog_homepage"/>
            </motion.div>
            </div>
          </div>
          </div>
          */}
          <Footer/>
        </div> 
  )
}

export default Homepage