import { Check, Clock3, Tag, Trash2 } from 'lucide-react';
import './TaskItem.css';

function TaskItem({ task, onToggleComplete, onDelete }) {
  const priorityClass = {
    Low: 'priority-low',
    Medium: 'priority-medium',
    High: 'priority-high'
  };

  const isCompleted = Boolean(task.isCompleted);

  return (
    <article className={`task-card ${isCompleted ? 'completed' : ''}`}>
      <div className="task-card-row">
        <div className="task-main">
          <button
            type="button"
            className={`check-toggle ${isCompleted ? 'checked' : ''}`}
            onClick={() => onToggleComplete(task._id)}
            aria-label={isCompleted ? 'Mark task incomplete' : 'Mark task complete'}
          >
            <Check size={12} strokeWidth={3} />
          </button>

          <div className="task-copy">
            <h3 className={isCompleted ? 'completed-text' : ''}>{task.title}</h3>

            <div className="task-meta-row">
              <span className={`task-badge ${priorityClass[task.priority] || 'priority-medium'}`}>
                {task.priority}
              </span>

              <span className="meta-pill">
                <Tag size={12} />
                {task.category}
              </span>

              <span className="meta-pill">
                <Clock3 size={12} />
                {task.duration} min
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="delete-btn"
          onClick={() => onDelete(task._id)}
          aria-label="Delete task"
        >
          <Trash2 size={15} />
        </button>
      </div>

      <div className="task-footer">
        <span>{isCompleted ? 'Completed' : 'Active'}</span>
      </div>
    </article>
  );
}

export default TaskItem;
