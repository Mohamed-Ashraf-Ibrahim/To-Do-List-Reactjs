import { useState } from "react";

function Form({ onAddTasks }) {
  // State to hold the input value for the new task
  const [item, setItem] = useState("");
  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    // Check if item is empty; if so, alert the user
    if (!item) return alert("You must write a task");
    // Create a new task object with item, completed status, and unique id
    const newTasks = { item, completed: false, id: Date.now() };
    onAddTasks(newTasks);
    setItem("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Add a Task ..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button>Add Task</button>
      </form>
    </div>
  );
}
export default Form;
