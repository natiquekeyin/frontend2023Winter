import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";

import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import TaskDetails from "./components/TaskDetails";

// Observer it starts with a capital letter...
function App() {
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:8000/tasks");
    const data = await res.json();

    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  const [tasks, setTasks] = useState([]);

  const [showAddTask, setShowAddTask] = useState(false);

  // to Delete the task from ui
  const deleteTask = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Reminder toggle

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);

    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  // Now Add task function here
  const addTask = async (task) => {
    const res = await fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    // JSON.parse().... JSON.stringify()
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  const changeTask = () => {
    // console.log("changeTask");
    setShowAddTask(!showAddTask);
  };
  return (
    <Router>
      <div className="container">
        <Header title="To do" onAdd={changeTask} showAdd={showAddTask} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No Tasks"
                )}
              </>
            }
          />

          <Route path="/about" element={<About />} />

          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

// React developer tools ...

// JSON server! we will  use it...
// npm run build (to make a build folder for publishing)
// sudo npm i -g server ... (to serve this build locally on our own server)
// sudo serve -s build -p 8000 ... NOW localhost:/8000 has become our production server
// in package.json add "server": "json-server --watch db.json --port 8000" in scripts..
// npm run server

// Hooks: useState():
// useEffect() runs with every rendering
// but if we give [] as the second parameter it will only RUN ONCE when application gets loaded...
/* 
  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:8000/tasks");

      const data = await res.json();

      console.log(data);
    };

    fetchTasks();
  }, []);

*/
