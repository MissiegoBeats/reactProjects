import React from 'react';
import '../style-sheets/Testimony.css';

export function Testimony(props) {
  return (
    <div className="testimony-contanier">
      <img className="testimony-cliff" src={require(`../images/${props.image}.png`)} alt="cliff" height={300} width={300} />
      <div className="testimony-text-container">
        <p className="testimony-name"><strong>{props.name}</strong> en {props.country}</p>
        <p className="testimony-job">{props.job} en <strong>{props.company}</strong></p>
        <p className="testimony-text">{props.text}</p>
      </div>
    </div>
  );
}