import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import USComponent from "./components/USComponent";
import USComponentArray from "./components/USComponentArray";
import { useState } from "react";
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
    console.log("delete", id);
  };

  return (
    <div className="container">
      <Header title="To do" />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
