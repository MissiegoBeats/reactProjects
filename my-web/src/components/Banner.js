import React from "react";
import '../styles/Banner.css';
import { GrContact } from 'react-icons/gr';
import { useNavigate } from "react-router-dom";

function Banner() {
  return (
    <div className="banner" >
      <h1>My Web</h1>
      <p>My React App</p>
      <div className='contact'><a className='contact-button' href="#contact-div">Contact us &nbsp;<GrContact /></a></div>
    </div>
  );
}

export default Banner;