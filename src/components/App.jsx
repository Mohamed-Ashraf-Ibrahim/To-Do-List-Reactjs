import Header from "./Header";
import Form from "./Form";
import TasksList from "./TasksList";
import Stats from "./Stats";
import "../App.css";
import { useLocalStorageState } from "../useLocalStorageState";

function App() {
  // State to store tasks, initialized with tasks from localStorage or empty array
  // const [tasks, setTasks] = useState(() => {
  //   const savedTasks = localStorage.getItem("tasks");
  //   return savedTasks ? JSON.parse(savedTasks) : [];
  // });

  const [tasks, setTasks] = useLocalStorageState([], "tasks");

  // useEffect to update localStorage whenever tasks state changes
  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  // Function to handle adding a new task to the tasks state
  function handleAddTasks(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  // Function to handle deleting a task from the tasks state
  function handleDeleteTasks(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  // Function to toggle the completion status of a task with given id
  function handleToggleTasks(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // Function to clear all tasks by setting tasks state to an empty array
  function handleClearTasks() {
    setTasks([]);
  }
  // Render the App component
  return (
    <div className="container">
      <Header />
      <Form onAddTasks={handleAddTasks} />
      <TasksList
        tasks={tasks}
        onDeleteTasks={handleDeleteTasks}
        onToggleTasks={handleToggleTasks}
      />
      <Stats tasks={tasks} onClearTasks={handleClearTasks} />
    </div>
  );
}
export default App;
