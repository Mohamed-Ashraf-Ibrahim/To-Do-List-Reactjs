import Tasks from "./Tasks";
// Functional component TasksList receiving props: tasks and onDeleteTasks
export default function TasksList({ tasks, onDeleteTasks, onToggleTasks }) {
  return (
    <div className="tasks">
      <ul>
        {tasks.map((task, index) => (
          <Tasks
            task={task}
            key={task.id}
            onDeleteTasks={onDeleteTasks}
            index={index}
            onToggleTasks={onToggleTasks}
          />
        ))}
      </ul>
    </div>
  );
}
