import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/About.css'; // Import the custom CSS file
import PhotoSlider from './PhotoSlider';

function About() {
  return (
    <div className="bg-dark text-white" style={{ marginTop: '-10px', marginBottom: '0px', userSelect:"none", height:"auto"}}>
      <div className="text-center mb-4 mt-2" style={{borderBottom:"2px solid white", display:"flex", flexWrap:"wrap", width:"100%", justifyContent:"center", alignItems:"center"}}>
        <h1>About me</h1>
      </div>
      <div className="text-center text-justify" style={{ marginTop: "20px", alignItems:"center"}}>
        <p>20yo Spanish producer/singer trying to make his way into the music industry.His main goal is to help people get out of <br /> bad times with my music. A very polyvalent artist that makes pop-rock/pop-punk, ballads, emo rap, <br />hip hop, melodic rap, hard hitting rap... 
          You can listen to this versatility and passion for music in his discography</p>
      </div>
      <div className="photo-slider bg-dark text-white d-flex justify-content-center align-items-center" style={{ height: 'auto', width: '100%', marginTop:"20px"}}>
        <PhotoSlider />
      </div>
    </div>
  );
}

export default About;
