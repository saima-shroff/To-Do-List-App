import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleComplete, onDelete }) {
  if (!tasks.length) {
    return (
      <div className="empty-state">
        <p>No tasks yet. Add your first task above.</p>
      </div>
    );
  }

  return (
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
  );
}

export default TaskList;
