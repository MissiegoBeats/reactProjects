import React, { useState } from "react";
import '../styles/TaskList.css';
import Form from './Form.js';
import Task from './Task.js';

function TaskList() {

  const [arrayTasks, setArrayTasks] = useState([])

  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedArrayTasks = [task, ...arrayTasks];
      setArrayTasks(updatedArrayTasks);
      alert("Task added successfully!");
    }
  };

  const completeTask = id => {
    const updatedArrayTasks = arrayTasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setArrayTasks(updatedArrayTasks);
    alert("Task completed successfully!");
  };

  const removeTask = id => {
    const updatedArrayTasks = arrayTasks.filter(task => task.id !== id);
    setArrayTasks(updatedArrayTasks);
    alert("Task removed successfully!")
  };

  return (
    //No se crea un div como tal, sino un fragmento de React con <></>
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