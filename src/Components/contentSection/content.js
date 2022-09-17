import React, { useEffect, useRef } from 'react'
import Blog_homepage from '../../assets/Blog_Homepage.png'
import { Link } from 'react-router-dom';
import Podcast_homepage from '../../assets/PodCast_Homepage.png'
import "./content.css";


function Content() {
    let wrapper = useRef()
    let toplayer= useRef();
    let handle= useRef();
    let skew=0;
    let delta=0;
  return (
    <div>
        <section onMouseMove={(e)=>{
            if(wrapper.current.className.indexOf('skewed')!=-1){
                skew=1000
            }
        delta=(e.clientX - (window.innerWidth) / 2) * 0.5;
        handle.current.style.left=e.clientX + (4*delta) + 'px';
        toplayer.current.style.width=e.clientX + skew + (4*delta)+ 'px';}} ref={wrapper} id="wrapper" className="skewed">
            <Link to="/Content/Blog">
            <div className="layer bg-dark bottom">
                <div className='content-wrap'>
                    <div className='content-body text-lg-start  text-muted'>
                        <h1>Blog</h1>
                        <p>Since We are a DAO that educate people about web3 we publish Exclusive Blogs on our website, You can check them on the Content Page of the Site</p>
                    </div>
                    <img className='img_1' src={Blog_homepage} alt="Blog_homepage"/>
                </div>
            </div>
            </Link>
            <Link to="/Content/Podcast">
            <div ref={toplayer} className="layer top">
                <div className='content-wrap'>
                    <div className='content-body'>
                        <h1>Podcast</h1>
                        <p>Get Access to our Podcast and get up to date infos</p>
                    </div>
                    <img className='img_2' src={Podcast_homepage} alt="Podcast_homepage"/>
                </div>
            </div>
            </Link>
            <div ref={handle} className='handle'></div>
        </section>
    </div>
  )
}

export default Content;