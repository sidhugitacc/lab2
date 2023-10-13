import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{width:"100%",display:"flex",gap:"10px"}}>
      <input
        style={{flex:"1",padding:"10px"}}
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={handleTaskChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;