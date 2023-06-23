import React from 'react';
import '../styles/Form.css';

function Form(props) {
  return (
    <form className='form-container'>
      <input 
        className='form-input'
        type='text'
        placeholder='Add a task'
        name='text'
      />
      <button className='form-button'>
        Add task
        </button>
    </form>
  );
};

export default Form;