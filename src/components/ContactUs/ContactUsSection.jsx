import React, { useState, useRef, useEffect } from 'react';
import MailIcon from '../../images/letter.png';

import './ContactUsSection.css'

const ContactUsSection = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    contactMethod: 'Email',
    email: '',
    telegram: '',
    whatsapp: '',
    viber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  useEffect(() =>{
    const handleScroll = () => {
      const elemenTop = formRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if(elemenTop < windowHeight){
        formRef.current.classList.add('slide-in');
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <div className='contact-us-section'>
      <div className='contact-us-section-title'>
         <h1>Contact us</h1>
      </div>
      
      <form className='contact-form' onSubmit={handleSubmit} ref={formRef}>
        <img src={MailIcon} className='mail-icon'/>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            className='input-field'
            value={formData.name}
            onChange={handleChange}
            placeholder='Name'
            required
          />
        </div>

        <div>
          <select
            name="contactMethod"
            id='contact-method'
            value={formData.contactMethod}
            onChange={handleChange}
            placeholder='Contact me'
            
          >
            <option value="Email">E-mail</option>
            <option value="Telegram">Telegram</option>
            <option value="Whatsapp">WhatsApp</option>
            <option value="Viber">Viber</option>
          </select>
        </div>

        <div>
          <input
            type="text"
            name={formData.contactMethod}
            value={formData[formData.contactMethod]}
            onChange={handleChange}
            placeholder={formData.contactMethod}
            required
          />
        </div>

        <div>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Message'
          />
        </div>

        <button type="submit" className='submit-button'>Send</button>
      </form>
      <div className='contacts'>
        <p className='phone'><a href="tel:+380 952 534 134">+380 952 534 134</a></p>
        <p className='mail'><a href="mailto:team@vnv.solutions"></a>team@vnv.solutions</p>
      </div>
    </div>
  );
};

export default ContactUsSection;