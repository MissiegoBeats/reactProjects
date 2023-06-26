import React, { useState } from "react";
import '../styles/TaskList.css';
import Form from './Form.js';
import Task from './Task.js';

function TaskList() {

  const [arrayTasks, setArrayTasks] = useState([])

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedArrayTasks = [task, ...arrayTasks];
      setArrayTasks(updatedArrayTasks);
      alert("Task added successfully!");
    }
  };

  const completeTask = (id) => {
    
  };

  const removeTask = (id) => {
    
  };

  return (
    <>
      <Form onSubmit={addTask} />
      <div className='task-list-container'>
        {
          arrayTasks.map((task) => 
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              completeTask={completeTask}
              removeTask={removeTask}/>
          )
        }
      </div>
    </>
  );
}

export default TaskList;