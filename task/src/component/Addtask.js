import React from "react";

export default function Addtask() {
  return (
    <div className="back">
      <div className="container" id="add">
        <div className="mb-3 " id="task">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Enter Task
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Starting Date
          </label>
          <input type="date" className="form-control"></input>
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            End Date
          </label>
          <input type="date" className="form-control"></input>
        </div>


        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-primary btn-lg">
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
