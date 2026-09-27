import { useState } from 'react';
import { Plus } from 'lucide-react';
import './TaskForm.css';

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
      <div className="task-form-row">
        <div className="task-form-title-wrap">
          <label htmlFor="title" className="sr-only">
            Task title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="Add a task..."
            className="task-form-input title-input"
          />
        </div>

        <div className="task-form-controls">
          <div className="field-wrap select-wrap">
            <label htmlFor="priority" className="sr-only">
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="task-form-input"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="field-wrap duration-wrap">
            <label htmlFor="duration" className="sr-only">
              Duration
            </label>
            <input
              id="duration"
              name="duration"
              type="number"
              min="1"
              step="1"
              value={formData.duration}
              onChange={handleChange}
              placeholder="30m"
              className="task-form-input"
            />
          </div>

          <div className="field-wrap select-wrap category-wrap">
            <label htmlFor="category" className="sr-only">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="task-form-input"
            >
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Study">Study</option>
              <option value="Fitness">Fitness</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <button type="submit" className="primary-btn">
          <Plus size={16} />
          Add
        </button>
      </div>

      {error && <p className="form-error">{error}</p>}
    </form>
  );
}

export default TaskForm;
