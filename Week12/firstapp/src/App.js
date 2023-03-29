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

  const [showAddTask, setShowAddTask] = useState(false);

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

  // Now Add task function here
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);
  };

  const changeTask = () => {
    // console.log("changeTask");
    setShowAddTask(!showAddTask);
  };
  return (
    <div className="container">
      <Header title="To do" onAdd={changeTask} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
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
