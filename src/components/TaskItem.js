import React from 'react';

function TaskItem({ task, updateTask, deleteTask }) {
  const toggleComplete = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      {task.description && <p>{task.description}</p>}
      <p className="meta">
        Created: {new Date(task.createdAt).toLocaleString()}
      </p>
      <div className="actions">
        <button onClick={toggleComplete}>
          {task.completed ? 'Mark Pending' : 'Mark Complete'}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
