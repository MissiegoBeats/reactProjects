import React, { useState } from "react";
import '../styles/TaskList.css';
import Form from './Form.js';
import Task from './Task.js';

function TaskList() {

  const [arrayTasks, setArrayTasks] = useState([])

  const addTask = (task) => {
    setArrayTasks(arrayTasks.append(task));
  };

  const removeTask = (task) => {
    setArrayTasks(arrayTasks.remove(task));
  };
  return (
    <>
      <Form />
      <div className='task-list-container'>
        {
          arrayTasks.map((task) => 
            <Task
              text={task.text}
              completed={task.completed} />
          )
        }
      </div>
    </>
  );
}

export default TaskList;