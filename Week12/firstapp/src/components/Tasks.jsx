import { useState } from "react";

const Tasks = () => {
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
  //  num=20; it is a state ...
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
