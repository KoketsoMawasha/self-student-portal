import React from "react";
import "../styling/navbarStyling.css";
function Navbar() {
  return (
    <div className="navbar">
      <h1>My Navbar</h1>
      <ul>
        <li>Add</li>
        <li>Mark Complete</li>
        <li>Delete</li>
      </ul>
    </div>
  );
}

export default Navbar;
