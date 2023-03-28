import { FaBeer } from "react-icons/fa";
import { BiAlarm } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  return (
    <div>
      <h4>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={onDelete}
        />
      </h4>
      <h4>
        {" "}
        <BiAlarm style={{ color: "green", cursor: "pointer" }} />
        {task.day}
      </h4>
      <hr />
    </div>
  );
};

export default Task;
