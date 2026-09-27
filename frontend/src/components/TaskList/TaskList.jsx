import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';

function TaskList({ tasks, onToggleComplete, onDelete }) {
  if (!tasks.length) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">✓</div>
        <h3>All caught up for today</h3>
        <p>No tasks yet. Add your first one above to get started.</p>
      </div>
    );
  }

  return (
    <div className="task-list-wrap">
      <div className="filter-bar" aria-label="Task filters">
        <button type="button" className="filter-tab active">All</button>
        <button type="button" className="filter-tab">Pending</button>
        <button type="button" className="filter-tab">Completed</button>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
