import { useState } from 'react';

const initialFormState = {
  title: '',
  priority: 'Medium',
  duration: '',
  category: 'Personal'
};

function TaskForm({ onAddTask }) {
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedTitle = formData.title.trim();
    const durationValue = Number(formData.duration);

    if (!trimmedTitle) {
      setError('Task title cannot be empty.');
      return;
    }

    if (!Number.isFinite(durationValue) || durationValue <= 0) {
      setError('Duration must be a positive number.');
      return;
    }

    try {
      await onAddTask({
        title: trimmedTitle,
        priority: formData.priority,
        duration: durationValue,
        category: formData.category
      });

      setFormData(initialFormState);
      setError('');
    } catch (err) {
      setError(err.message || 'Unable to add task.');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add a new task</h2>

      <div className="form-grid">
        <div className="input-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Finish project report"
          />
        </div>

        <div className="input-group">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="duration">Duration (minutes)</label>
          <input
            id="duration"
            name="duration"
            type="number"
            min="1"
            step="1"
            value={formData.duration}
            onChange={handleChange}
            placeholder="30"
          />
        </div>

        <div className="input-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Study">Study</option>
            <option value="Fitness">Fitness</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {error && <p className="form-error">{error}</p>}

      <button type="submit" className="primary-btn">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
