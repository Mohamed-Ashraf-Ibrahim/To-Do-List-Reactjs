export default function Stats({ tasks, onClearTasks }) {
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="stats">
      <em>
        {tasks.length > 0 ? (
          <>
            Total Number of Tasks = {tasks.length}
            {completedTasks.length > 0 &&
              ` (${completedTasks.length} completed)`}
          </>
        ) : (
          "There are no tasks"
        )}
      </em>
      {tasks.length > 0 ? (
        <button className="clear-btn" onClick={onClearTasks}>
          Clear Tasks
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
