import React from "react";
import { useEffect, useState } from "react";
export default function Viewtask() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/index/admin")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setTasks(data.data);
        } else {
          console.error(data.message);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="back">
      <div className="container d-flex justify-content-center bg-dark ">
        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task</th>
              <th scope="col">Updated Task Details</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{task.email}</td>
                <td>{task.password}</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit Task
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Delete Task
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
