import React from "react";
import '../styles/Button.css';

function Button(props) {

  const esOperador = val => {
    return isNaN(val) && (val !== '.') && (val !== '=');
  };

  return (
    <div className={`button-container${esOperador(props.children) ? '-operator' : ''}`.trim()}>
      {props.children}
    </div>
  ); 
}

export default Button;