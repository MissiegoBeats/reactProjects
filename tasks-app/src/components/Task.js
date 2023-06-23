import React from 'react';
import '../styles/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Task(props) {
  return (
    <div className={ props.completed ? 'task-container completed' : 'task-container' }>
      <div className="task-text">
        <p>{props.text}</p>
      </div>
      <div className="task-icons-container">
        <AiOutlineCloseCircle className='closeCircle' />
      </div>
    </div>
  );
};

export default Task;