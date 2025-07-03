// src/utils/localStorage.js

export const saveTasks = (username, tasks) => {
  localStorage.setItem(`tasks_${username}`, JSON.stringify(tasks));
};

export const loadTasks = (username) => {
  const data = localStorage.getItem(`tasks_${username}`);
  return data ? JSON.parse(data) : [];
};

export const saveUsername = (username) => {
  localStorage.setItem('username', username);
};

export const loadUsername = () => {
  return localStorage.getItem('username');
};

export const clearStorage = () => {
  localStorage.removeItem('username');
};
