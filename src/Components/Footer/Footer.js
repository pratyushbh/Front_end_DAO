import React from 'react'
import './Footer.css'
import Twitter from '../../assets/Twitter.png';
import Telegram  from '../../assets/Telegram.png';
import github from '../../assets/Github.png';

const Footer = (e) => {
  return (
    <div>
      <div className='divider'></div>
      <div className='footer' >
      <h2 className='footer_heading'>DEEPVERSE</h2>
        <div className='icons'>
          <img src={Twitter}  className="icon" alt='Twitter'/>
          <img src={Telegram} className="icon" alt='Telegram'/>
          <img src={github} className="icon" alt='github'/>
        </div>
        <div className='copyright'></div>
      </div>
     </div>
  )
}

export default Footer