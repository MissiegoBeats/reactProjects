import React from 'react';
import backgroundImage from '../images/artist-background.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Welcome() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  };

  return (
    <div style={backgroundStyle}>
      <h1 className="display-4">Welcome to the Music Artist Website</h1>
    </div>
  );
}

export default Welcome;
