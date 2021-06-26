import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styling/assessment.css";
import deleteIcon from "../assets/deleteIcon.png";
import completeIcon from "../assets/completeIcon.png";

export default class Assessment extends Component {
  render() {
    const { assessmentObj } = this.props;
    return (
      <div className="assessment">
        <div className="assessment-info">
          <h1>{assessmentObj.type}</h1>
          <h3>{assessmentObj.module}</h3>
          <p>{assessmentObj.description}</p>
          <p id="date">{assessmentObj.dueDate}</p>
        </div>
        <div className="actionLinks">
          <a href="#" className="completeIcon">
            <img src={completeIcon} />
          </a>

          <a href="#" className="deleteIcon">
            <img src={deleteIcon} alt="deleteIcon" />
          </a>
        </div>
      </div>
    );
  }
}

Assessment.propTypes = {
  assessmentObj: PropTypes.object.isRequired,
};
