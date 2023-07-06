import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsYoutube } from 'react-icons/bs';
import '../styles/Discography.css';

function Card(props) {
  return (
    <div className="card m-2 bg-dark text-white hover-animation" style={{ width: '18rem' }}>
      <img className="card-img-top" src={props.image} alt="Card" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <a href={props.url} className="btn btn-light w-100 button-listen-youtube" target="_blank"><BsYoutube></BsYoutube></a>
      </div>
    </div>
  );
}

export default Card;