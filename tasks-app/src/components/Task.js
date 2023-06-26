import React from 'react';
import '../styles/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Task({id, text, completed, completeTask, removeTask}) {
  return (
    <div className={ completed ? 'task-container completed' : 'task-container' }>
      <div className="task-text">
        <p>{text}</p>
      </div>
      <div className="task-icons-container">
        <AiOutlineCloseCircle className='closeCircle' />
      </div>
    </div>
  );
};

export default Task;