import React from 'react';
import '../styles/ContactInfo.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsInfoCircle } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
import imageContact from '../images/contact.png';
import backgroundContact from '../images/backgroundContactImage.png';
import {FaRegCopy} from 'react-icons/fa';

function ContactInfo() {
  
  var mailBody = "Default mail body";

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    window.open('mailto:pmitestsuah@gmail.com?subject=Email To My-Web Support&body=' + mailBody,'');
  };

  const copyToClipboard = (e) => {
    var copyText = "555-555-5555";
    navigator.clipboard.writeText(copyText).then(function(x) {
      alert("Phone copied to clipboard!");
    });
  };

  return (
    <div className="contact-container" style={
      {
        backgroundImage: `url(${backgroundContact})`,
        backgroundSize: 'cover',
      }}>
      <h2><BsInfoCircle /> </h2>
      <h2>&nbsp;Contact Info</h2>
      <p>Phone: 555-555-5555  &nbsp;<FaPhoneAlt /> &nbsp; Copy phone to clipboard: <FaRegCopy className="copy" onClick={copyToClipboard}/></p>
      <p>Send us an email: </p>
      <h2 style={{
        borderBottom: '1px solid white',
        width: '532px',
        textAlign: 'center',
      }}><a className="sendMail" onClick={sendEmail}><BiLogoGmail /> </a></h2> 
      <img className="contact-image" src={imageContact}></img>
    </div>
  );
}

export default ContactInfo;