import React from "react";
import "../styling/navbarStyling.css";
import PropTypes from "prop-types";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Assessments</h1>
      <ul>
        <li>Add</li>
        {/* <li>Mark Complete</li>
        <li>Delete</li> */}
      </ul>
    </div>
  );
}

// Navbar.propTypes = {
//   heading: PropTypes.string,
// };

// Navbar.defaultProps = {
//   heading: "Assessments",
// };

export default Navbar;
