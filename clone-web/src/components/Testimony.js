import React from 'react';
import '../style-sheets/Testimony.css';

export function Testimony() {
  return (
    <div className="testimony-contanier">
      <img className="testimony-cliff" src={require('../images/cliff.png')} alt="cliff" height={300} width={300}/>
      <div className="testimony-text-testimony">
        <p className="testimony-name">Emma Bostian en Suecia</p>
        <p className="testimony-job">Ingeniera de SW en Spotify</p>
        <p className="testimony-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris sit amet. Mattis enim ut tellus elementum sagittis vitae et leo. At augue eget arcu dictum varius duis at consectetur.</p>
      </div>
    </div>
  );
}