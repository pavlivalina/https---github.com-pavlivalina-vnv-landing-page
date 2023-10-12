import React, { useState } from 'react';
import FacebookIcon from '../../../images/facebook.png';
import InstagramIcon from '../../../images/instagram.png';
import LinkedinIcon from '../../../images/linkedin.png';
import TiktokIcon from '../../../images/tik-tok.png';
import TelegramIcon from '../../../images/telegram-logo.png';

import "./BurgerMenu.css"

const BurgerMenu = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleMenu = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <input type="checkbox" id="navi-toggle" className="checkbox" checked={isChecked} />
      <label for="navi-toggle" className="button-burger" onClick={toggleMenu}>
        <span className="icon">&nbsp;</span>
      </label>
      <div className={`background ${isChecked ? 'active' : ''}`} onClick={toggleMenu}>&nbsp;</div>
      <div className={`bar-content ${isChecked ? 'active' : ''}`}>
        <div className='social-media-bar'>
          <a ><img src={FacebookIcon} className='socials-icon'/></a>
          <a ><img src={TiktokIcon} className='socials-icon'/></a>
          <a ><img src={LinkedinIcon} className='socials-icon'/></a>
          <a ><img src={TelegramIcon} className='socials-icon'/></a>
          <a ><img src={InstagramIcon} className='socials-icon'/></a>
        </div>
        <nav className='nav'>
          <ul className={`list ${isChecked ? 'active' : ''}`}>
          <li className="item">
            <a className="link" href="#why-us-section" onClick={toggleMenu}>
              Why Us?
            </a>
          </li>
          <li className="item">
            <a className="link" href="#services-section" onClick={toggleMenu}>
              Services
            </a>
          </li>
          <li className="item">
            <a className="link" href="#projects-section" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li className="item">
            <a className="link" href="#faq-section" onClick={toggleMenu}>
              FAQ
            </a>
          </li>
        </ul>
        </nav>
      </div>
      <div className='contacts-bar'>
        <p className='phone'><a href="tel:+380 952 534 134">+380 952 534 134</a></p>
        <p className='mail'><a href="mailto:team@vnv.solutions"></a>team@vnv.solutions</p>
      </div>
    </>
  )
}

export default BurgerMenu;
