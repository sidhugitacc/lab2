import React, { useState } from 'react';

const TaskList = ({ tasks, onEditTask }) => {
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  const handleEditClick = (index) => {
    setEditingTaskIndex(index);
    setEditedTask(tasks[index]);
  };

  const handleEditChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleSaveClick = (index) => {
    onEditTask(index, editedTask);
    setEditingTaskIndex(null);
  };

  return (
    <div>
      <div style={{fontWeight:"bold",fontSize:"20px"}}>Task List</div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {index === editingTaskIndex ? (
              <div>
                <input
                  type="text"
                  value={editedTask}
                  onChange={handleEditChange}
                />
                <button onClick={() => handleSaveClick(index)}>Save</button>
              </div>
            ) : (
              <div>
                {task}{' '}
                <button onClick={() => handleEditClick(index)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;