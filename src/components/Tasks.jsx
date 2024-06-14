export default function Tasks({ task, onDeleteTasks, onToggleTasks }) {
  return (
    <li className="task-item">
      <div className="checkbox-wrapper-13 task-content">
        <input
          id={`c1-${task.id}`}
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTasks(task.id)}
        />
        <span style={task.completed ? { textDecoration: "line-through" } : {}}>
          {task.item}
        </span>
      </div>
      <button className="close-btn" onClick={() => onDeleteTasks(task.id)}>
        ❌
      </button>
    </li>
  );
}
