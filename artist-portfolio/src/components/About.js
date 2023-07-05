import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import '../styles/About.css'; // Import the custom CSS file

function About() {
  return (
    <div className="bg-dark text-white" style={{ marginTop: '60px', marginBottom: '20px', userSelect:"none"}} id="about">
      <div className="text-center mb-4 mt-2">
        <h1>About</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="card m-2 bg-dark text-white hover-animation" style={{ width: '18rem' }}>
          <img className="card-img-top" src={image1} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Florida</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-light">Link to song</a>
          </div>
        </div>
        <div className="card m-2 bg-dark text-white hover-animation" style={{ width: '18rem' }}>
          <img className="card-img-top" src={image2} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">This Weekend</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-light">Link to song</a>
          </div>
        </div>
        <div className="card m-2 bg-dark text-white hover-animation" style={{ width: '18rem' }}>
          <img className="card-img-top" src={image3} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Thoughts</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-light">Link to song</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
