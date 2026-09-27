function TaskItem({ task, onToggleComplete, onDelete }) {
  return (
    <div className={`task-card ${task.isCompleted ? 'completed' : ''}`}>
      <div className="task-header">
        <div>
          <h3>{task.title}</h3>
        </div>

        <div className="task-actions">
          <button
            className="toggle-btn"
            onClick={() => onToggleComplete(task._id)}
          >
            {task.isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
          </button>

          <button className="delete-btn" onClick={() => onDelete(task._id)}>
            Delete
          </button>
        </div>
      </div>

      <div className="task-meta">
        <span className={`badge priority-${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
        <span className="badge category-badge">{task.category}</span>
        <span className="duration-text">{task.duration} min</span>
      </div>

      <p className="task-status">
        {task.isCompleted ? 'Completed' : 'Not completed'}
      </p>
    </div>
  );
}

export default TaskItem;
