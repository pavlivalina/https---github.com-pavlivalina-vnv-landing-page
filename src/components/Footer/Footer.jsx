import React from 'react'
import FacebookIcon from '../../images/facebook.png';
import InstagramIcon from '../../images/instagram.png';
import LinkedinIcon from '../../images/linkedin.png';
import TiktokIcon from '../../images/tik-tok.png';
import TelegramIcon from '../../images/telegram-logo.png';


import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='social-media'>
      <a ><img src={FacebookIcon} className='socials-icon'/></a>
      <a ><img src={TiktokIcon} className='socials-icon'/></a>
      <a ><img src={LinkedinIcon} className='socials-icon'/></a>
      <a ><img src={TelegramIcon} className='socials-icon'/></a>
      <a ><img src={InstagramIcon} className='socials-icon'/></a>
    </div>
    </div>
  )
}

export default Footer