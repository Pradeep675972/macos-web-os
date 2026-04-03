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
          <p>Masood </p>
        </div>

        <div className="nav-item">
          <p>File</p>
        </div>

        <div className="nav-item">
          <p>Window</p>
        </div>

        <div className="nav-item">
          <p>Terminal</p>
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
