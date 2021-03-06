import React, { Component } from "react";
import "../styling/navbarStyling.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const { heading } = this.props;

    return (
      <div className="navbar">
        <h1>{heading}</h1>
        <ul className="nav-links">
          <Link to="/" className="home-link">
            <li className="home-link link">Portal</li>
          </Link>

          <Link to="/assessment/add" className="add-assessment">
            <li className="add-link link">Add</li>
          </Link>

          <Link to="/about" className="about-link">
            <li className="about-link link">About</li>
          </Link>
        </ul>
      </div>
    );
  }
}

Navbar.propTypes = {
  heading: PropTypes.string,
};

Navbar.defaultProps = {
  heading: "Add Assessment",
};
