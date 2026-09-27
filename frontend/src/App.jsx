import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import {
  getTasks,
  createTask,
  toggleTaskComplete,
  deleteTask
} from './services/api';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load tasks.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (taskData) => {
    try {
      const newTask = await createTask(taskData);
      setTasks((prev) => [newTask, ...prev]);
      setError('');
    } catch (err) {
      const message = err.response?.data?.message || 'Unable to create task.';
      setError(message);
      throw new Error(message);
    }
  };

  const handleToggleComplete = async (taskId) => {
    try {
      const updatedTask = await toggleTaskComplete(taskId);

      setTasks((prev) =>
        prev.map((task) => (task._id === taskId ? updatedTask : task))
      );
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to update task.');
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks((prev) => prev.filter((task) => task._id !== taskId));
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to delete task.');
    }
  };

  return (
    <div className="app-page">
      <div className="app-shell">
        <Header tasks={tasks} />

        {error && <div className="error-banner">{error}</div>}

        <TaskForm onAddTask={handleAddTask} />

        {loading ? (
          <div className="loading-state">Loading tasks…</div>
        ) : (
          <TaskList
            tasks={tasks}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}

export default App;
