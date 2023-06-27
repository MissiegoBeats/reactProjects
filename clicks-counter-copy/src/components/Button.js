import React from 'react';
import '../styles/Button.css'

function Button({ text, isClickButton, handleClick }) {
  return (
    <button
      className = { isClickButton ? 'click-button' : 'reset-button'}
      onClick = { handleClick }>
      {text}
    </button>
  );
}

export default Button;