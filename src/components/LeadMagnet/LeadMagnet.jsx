import React from "react";
import Logo from '../../images/vnv-logo.png';
import "./LeadMagnet.css";

const LeadMagnet = ({ text, closePopup }) => {
  return (
    <div className="popup-container">
     <h1>Get a Free Consultation</h1>
     <div className="popup-body">
     <img src={Logo} className="vnv-logo"></img>
     <p>Send us your email now to get a free consultation and expert advice.</p>
      <div>
          <input
            type="text"
            name="name"
            id="name"
            className='input-field-magnet'
            placeholder='Email'
            required
          />
        </div>
        <div class="wrap-magnet">
          <button class="button-magnet">Order</button>
        </div>
     </div>
      <button className='popup-button' onClick={closePopup}>X</button>
     </div>
  );
};

export default LeadMagnet