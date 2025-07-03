import React from 'react';

function TaskFilter({ filter, setFilter, tasks }) {
  const getCount = (status) =>
    tasks.filter((task) =>
      status === 'completed'
        ? task.completed
        : status === 'pending'
        ? !task.completed
        : true
    ).length;

  return (
    <div className="task-filter">
      <button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
      >
        All ({getCount('all')})
      </button>
      <button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
      >
        Completed ({getCount('completed')})
      </button>
      <button
        className={filter === 'pending' ? 'active' : ''}
        onClick={() => setFilter('pending')}
      >
        Pending ({getCount('pending')})
      </button>
    </div>
  );
}

export default TaskFilter;
