import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import '../styles/About.css'; // Import the custom CSS file
import Card from './Card.js';
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
      <div className="d-flex justify-content-center">
        <Card 
          image={image1}
          name="Florida"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
          url="https://youtu.be/KZtbAWjpKHE" />
        <Card
          image={image2}
          name="This Weekend"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
          url="https://youtu.be/xhfrtlTylJw" />
        <Card
          image={image3}
          name="Thoughts"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
          url="https://youtu.be/1zvGHLummI4" />
      </div>
      <div className="photo-slider bg-dark text-white d-flex justify-content-center align-items-center" style={{ height: 'auto', width: '100%', marginTop:"20px"}}>
        <PhotoSlider />
      </div>
    </div>
  );
}

export default About;
