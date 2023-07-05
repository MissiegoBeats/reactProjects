import React from "react";
import '../../styles/Button.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function Button(props) {

  const esOperador = val => {
    return isNaN(val) && (val !== '.') && (val !== '=');
  };

  return (
    <button type="button"
      className={`btn btn-sm${esOperador(props.children) ? ' btn-dark' : ' btn-light'}`.trim()}
      style={{ width: "23%", height: "50px", fontSize: "1.5rem", margin: "2.5px"}}
      onClick={()=>props.handleClick(props.children)}>
      {props.children}
    </button>
  ); 
}

export default Button;