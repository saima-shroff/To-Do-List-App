import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const getTasks = async () => {
  const response = await API.get('/tasks');
  return response.data;
};

export const createTask = async (taskData) => {
  const response = await API.post('/tasks', taskData);
  return response.data;
};

export const toggleTaskComplete = async (taskId) => {
  const response = await API.patch(`/tasks/${taskId}/complete`);
  return response.data;
};

export const deleteTask = async (taskId) => {
  const response = await API.delete(`/tasks/${taskId}`);
  return response.data;
};
