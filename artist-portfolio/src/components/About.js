import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';

function About() {
  return (
    <div class="bg-dark" style={{ color: "white", marginTop: "60px", marginBottom: "20px"}} id="about">
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px", marginTop: "10px" }}>
        <h1>About</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px", marginTop: "10px" }}>
        <div class="card" style={{ width: "18rem", marginLeft:"10px", marginRight:"10px"}}>
          <img class="card-img-top" src={image1} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style={{ width: "18rem", marginLeft:"10px", marginRight:"10px" }}>
          <img class="card-img-top" src={image2} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style={{ width: "18rem", marginLeft:"10px", marginRight:"10px" }}>
          <img class="card-img-top" src={image3} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;