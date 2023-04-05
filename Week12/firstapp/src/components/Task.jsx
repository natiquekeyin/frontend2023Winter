import { FaBeer } from "react-icons/fa";
import { BiAlarm } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <img
          src={task.day}
          alt=""
          style={{ width: 100, height: 100, borderRadius: "50%" }}
        />
      </h5>
      <p>
        <Link to={`/task/${task.id}`}>View Details</Link>
      </p>
    </div>
  );
};

export default Task;
