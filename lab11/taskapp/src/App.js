import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3']);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  return (
    <div style={{width:"500px",margin:" 100px auto",padding:"10px",border:"2px solid black"}}>
      <div style={{fontWeight:"bold",fontSize:"50px",textAlign:"center"}}>Task App</div>
          <TaskForm addTask={addTask} />
     <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around", marginTop:"30px"}}>
      <div>
          <TaskList tasks={tasks} onEditTask={editTask} />
      </div>
      <div>
          <div style={{fontWeight:"bold",fontSize:"20px"}}>Delete Tasks</div>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}{' '}
                <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
      </div>
     </div>
    </div>
  );
};

export default App;