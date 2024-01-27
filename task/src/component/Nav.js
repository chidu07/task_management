import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="metro">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="TaskmagnetLogo.png" alt="" width={80} height={60} />
          </a>
          <a
            className="navbar-brand font-weight-bold"
            href="#"
            style={{ fontSize: "30px" }}
          >
            Task Magnet
          </a>
          <a
            className="navbar-brand font-weight-bold"
            href="#"
            style={{ fontSize: "20px", marginLeft: "100px" }}
          >
            Admin
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className=" collapse navbar-collapse"
            id="navbarNavDropdown"
            style={{ marginLeft: "120px", margin: "20px" }}
          >
            <ul className="navbar-nav">
              <Link to="/addtask" className="link">
                {" "}
                <li className="nav-item" id="nav-text">
                  <a className="nav-link" href="#">
                    Add Task
                  </a>
                </li>
              </Link>
              <Link to="/subtask" className="link">
                <li className="nav-item" id="nav-text">
                  <a className="nav-link" href="#">
                    Update Task
                  </a>
                </li>
              </Link>

              <Link to="/viewtask" className="link">
                <li className="nav-item" id="nav-text">
                  <a className="nav-link" href="#">
                    View Task
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <Link to="/profile">
          {" "}
          <a className="navbar-brand" href="#" id="holla">
            <img src="holla.png" alt="" width={50} height={50} />
          </a>
        </Link>
      </nav>
    </div>
  );
}
