import React from 'react';
import "./Header.css";
import Logo from "../../images/vnv-logo.png"
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Header = () => {
  return (
    <div className="header">
      
      <div className="container">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
      </div>
      <BurgerMenu></BurgerMenu>
      <div className='welcome-container'>
        <div className='welcome-text-container'>
          <div className='welcome-text'>
            <p>Easy, quality, IT -</p>
            <p><strong>w</strong>inning <strong>solutions</strong></p>
            <p>for your business</p>
          </div>
          </div>
        <div class="wrap">
          <button class="button">Order</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
