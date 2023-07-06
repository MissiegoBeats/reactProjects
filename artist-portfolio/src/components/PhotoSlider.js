import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/slider1.jpg';
import image2 from '../images/slider2.jpg';
import image3 from '../images/slider3.jpg';

function PhotoSlider() {
  return (
      <Carousel interval={2000} style={{ width: '600px', height: '300px' }}>
      <Carousel.Item >
        <img className="d-block w-100" src={image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default PhotoSlider;
