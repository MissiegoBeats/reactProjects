import React from 'react';
import '../styles/ContactInfo.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsInfoCircle } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
import imageContact from '../images/contact.png';
import backgroundContact from '../images/backgroundContactImage.png';

function ContactInfo() {
  
  function sendMail() {
    alert("mail sent")
  }

  return (
    <div className="contact-container" style={
      {
        backgroundImage: `url(${backgroundContact})`,
        backgroundSize: 'cover',
      }}>
      <h2><BsInfoCircle /> </h2>
      <h2>&nbsp;Contact Info</h2>
      <p>Phone: 555-555-5555  &nbsp;<FaPhoneAlt /></p>
      <p>Send us an email: </p>
      <h2 style={{
        borderBottom: '1px solid white',
        width: '532px',
        textAlign: 'center',
      }}><a className="sendMail" onClick={sendMail}><BiLogoGmail /> </a></h2> 
      <img className="contact-image" src={imageContact}></img>
    </div>
  );
}

export default ContactInfo;