import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import '../styles/About.css'; // Import the custom CSS file

function About() {
  return (
    <div className="bg-dark text-white" style={{ marginTop: '60px', marginBottom: '20px', userSelect:"none", height:"650px"}} id="about">
      <div className="text-center mb-4 mt-2" style={{borderBottom:"2px solid white", display:"flex", flexWrap:"wrap", width:"100%", justifyContent:"center", alignItems:"center"}}>
        <h1>About</h1>
      </div>
      <div className="text-center text-justify" style={{ marginTop: "20px", alignItems:"center"}}>
        <p>20yo Spanish producer/singer trying to make his way into the music industry.His main goal is to help people get out of <br /> bad times with my music. A very polyvalent artist that makes pop-rock/pop-punk, ballads, emo rap, <br />hip hop, melodic rap, hard hitting rap... 
          You can listen to this versatility and passion for music in his discography</p>
      </div>
      <div className="d-flex justify-content-center">
        <div className="card m-2 bg-dark text-white hover-animation" style={{ width: '18rem' }}>
          <img className="card-img-top" src={image1} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Florida</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://youtu.be/KZtbAWjpKHE" className="btn btn-light" target="_blank">Link to song</a>
          </div>
        </div>
        <div className="card m-2 bg-dark text-white hover-animation" style={{ width: '18rem' }}>
          <img className="card-img-top" src={image2} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">This Weekend</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://youtu.be/xhfrtlTylJw" className="btn btn-light" target="_blank">Link to song</a>
          </div>
        </div>
        <div className="card m-2 bg-dark text-white hover-animation" style={{ width: '18rem' }}>
          <img className="card-img-top" src={image3} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Thoughts</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://youtu.be/1zvGHLummI4" className="btn btn-light" target="_blank">Link to song</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
