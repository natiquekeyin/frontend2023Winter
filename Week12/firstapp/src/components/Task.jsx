import { FaBeer } from "react-icons/fa";
import { BiAlarm } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h4>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h4>
      <h5>
        {" "}
        <BiAlarm style={{ color: "green", cursor: "pointer" }} />
        {task.day}
      </h5>
    </div>
  );
};

export default Task;
