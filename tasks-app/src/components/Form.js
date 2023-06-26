import React, { useState } from 'react';
import '../styles/Form.css';
import { v4 as uuidv4 } from 'uuid'; //package to generate unique id's

function Form(props) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSendTask = e => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(), //generate unique id
      text: input,
      completed: false
    };
    props.onSubmit(newTask);
    alert("Task added successfully!");

  };

  return (
    <form className='form-container' onSubmit={handleSendTask}>
      <input 
        className='form-input'
        type='text'
        placeholder='Add a task'
        name='text'
        onChange={handleChange}
      />
      <button className='form-button'>
        Add task
        </button>
    </form>
  );
};

export default Form;