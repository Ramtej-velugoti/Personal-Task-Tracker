import React, { useEffect, useState } from 'react';
import {
  saveTasks,
  loadTasks,
  loadUsername,
  clearStorage,
} from './utils/localStorage';

import Login from './components/Login';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import './styles/App.css';

function App() {
  const [username, setUsername] = useState(loadUsername()); // Load saved user
  const [tasks, setTasks] = useState([]); // Tasks will load after login
  const [filter, setFilter] = useState('all');

  // Load tasks for user once they log in
  useEffect(() => {
    if (username) {
      const userTasks = loadTasks(username);
      setTasks(userTasks);
    }
  }, [username]);

  // Save tasks for current user when tasks change
  useEffect(() => {
    if (username) {
      saveTasks(username, tasks);
    }
  }, [tasks, username]);

  const addTask = (task) => setTasks([...tasks, task]);

  const updateTask = (updatedTask) =>
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));

  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const handleLogout = () => {
    clearStorage();
    setUsername(null);
    setTasks([]);
  };

  return (
    <div className="app">
      {username ? (
        <div className="dashboard">
          <header>
            <h2>Welcome, {username}</h2>
            <button onClick={handleLogout}>Logout</button>
          </header>
          <TaskForm addTask={addTask} />
          <TaskFilter filter={filter} setFilter={setFilter} tasks={tasks} />
          <TaskList tasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
      ) : (
        <Login setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
