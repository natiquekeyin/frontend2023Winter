import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "./Button";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const TaskDetails = () => {
  const [task, setTask] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:8000/tasks/${params.id}`);

      const data = await res.json();

      if (res.status === 404) {
        navigate("/about");
      }

      setTask(data);
      setLoading(false);
    };

    fetchTask();
  });

  //   if (error) {
  //     return <Navigate to="/" />;
  //   }

  return loading ? (
    <h3>Loading....</h3>
  ) : (
    <div>
      <p>
        <em>Currently, you are at {pathname}</em>
      </p>
      <h3>{task.text}</h3>
      <img src={task.day} width="200" alt="" /> <br />
      <Button
        text="Go Back"
        onClick={() => {
          navigate(-1);
        }}
      />
    </div>
  );
};

export default TaskDetails;
