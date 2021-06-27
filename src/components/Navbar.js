import React, { Component } from "react";
import "../styling/navbarStyling.css";
import PropTypes from "prop-types";

// function Navbar() {
//   return (
//     <div className="navbar">
//       <h1>Assessments</h1>
//       <ul>
//         <li>Add</li>
//         {/* <li>Mark Complete</li>
//         <li>Delete</li> */}
//       </ul>
//     </div>
//   );
// }

export default class Navbar extends Component {
  render() {
    const { heading } = this.props;

    return (
      <div className="navbar">
        <h1>{heading}</h1>
        <ul className="nav-links">
          <li className="add-link">Add</li>
        </ul>
      </div>
    );
  }
}

Navbar.propTypes = {
  heading: PropTypes.string,
};

// Navbar.defaultProps = {
//   heading: "Assessments",
// };
