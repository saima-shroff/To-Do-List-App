import { CalendarDays, CheckCheck, Clock3 } from 'lucide-react';

function Header({ tasks }) {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  const pendingTasks = tasks.filter((task) => !task.isCompleted);
  const totalMinutes = pendingTasks.reduce(
    (sum, task) => sum + Number(task.duration || 0),
    0
  );

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return (
    <header className="app-header">
      <div className="header-topline">
        <span className="date-pill">
          <CalendarDays size={14} />
          {today}
        </span>
      </div>

      <h1>My Tasks</h1>

      <div className="header-stats">
        <span className="stat-pill">
          <CheckCheck size={15} />
          {pendingTasks.length} pending
        </span>

        <span className="stat-pill">
          <Clock3 size={15} />
          {hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`} left
        </span>
      </div>
    </header>
  );
}

export default Header;
