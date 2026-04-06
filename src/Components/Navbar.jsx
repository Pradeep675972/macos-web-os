import React from "react";
import "./nav.scss";
import Datetime from "./Datetime";
const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <div className="appleicon">
          <img src="./navbar-icons/apple.svg" alt="Apple Icon" />
        </div>
        <div className="nav-item">
          <p>Pradeep </p>
        </div>

        <div className="nav-item">
          <p>File</p>
        </div>
              <div className="nav-item">
          <p>Edit</p>
        </div>
              <div className="nav-item">
          <p>View</p>
        </div>
              <div className="nav-item">
          <p>History</p>
        </div>

        <div className="nav-item">
          <p>Window</p>
        </div>

        <div className="nav-item">
          <p>Terminal</p>
        </div>

              <div className="nav-item">
          <p>Help</p>
        </div>
      </div>

      <div className="right">
        <div className="navicon">
          <img src="./navbar-icons/wifi.svg" alt="Apple Icon" />
        </div>

             <div className="nav-item">
         <Datetime/>
        </div>




      </div>
    </nav>
  );
};

export default Navbar;
