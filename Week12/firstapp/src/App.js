import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import USComponent from "./components/USComponent";
import USComponentArray from "./components/USComponentArray";
import { useState } from "react";
import AddTask from "./components/AddTask";
// Observer it starts with a capital letter...
function App() {
  let someTasks = [
    {
      id: 1,
      text: "Doctor's Appointment",
      day: "April 7th at 1:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Shopping",
      day: "April 17th at 11:30am",
      reminder: false,
    },
    {
      id: 3,
      text: "Meeting with boss",
      day: "March 28th  at 1:30pm",
      reminder: true,
    },
  ];
  const [tasks, setTasks] = useState(someTasks);

  // to Delete the task from ui
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Reminder toggle

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="To do" />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks "
      )}
    </div>
  );
}

export default App;

// React developer tools ...
