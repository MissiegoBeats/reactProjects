import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
  return (
    <div className="card m-2 bg-dark text-white hover-animation" style={{ width: '18rem' }}>
      <img className="card-img-top" src={props.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.text}</p>
        <a href={props.url} className="btn btn-light" target="_blank">Link to song</a>
      </div>
    </div>
  );
}

export default Card;