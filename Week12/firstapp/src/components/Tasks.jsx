import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  //  num=20; it is a state ...
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;

// Why useState when we had props already?
// test

// 1. props are immutable while useState variables are mutable...
// 2. whenever state variables change, the component gets re-rendered...[useEffect]
// 3. We can globally maintain state of a component by using usestate...[in App.js]
// 4. React-Redux .. through which we maintian state in each component itself(desirable)
// Icons in React:

// Do you guys see all the updates till March 28 now? :)
