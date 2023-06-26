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
    }
  };

  const completeTask = (id) => {
    /*setArrayTasks(arrayTasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
    }));*/
  };

  const removeTask = (id) => {
    //setArrayTasks(arrayTasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <Form onSubmit={addTask} />
      <div className='task-list-container'>
        {
          arrayTasks.map((task) => 
            <Task
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