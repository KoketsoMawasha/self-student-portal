import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styling/assessment.css";

export default class Assessment extends Component {
  render() {
    const { assessmentObj } = this.props;
    return (
      <div className="assessment">
        <h1>{assessmentObj.type}</h1>
        <h3>{assessmentObj.module}</h3>
        <p>{assessmentObj.description}</p>
        <p id="date">{assessmentObj.dueDate}</p>
      </div>
    );
  }
}

Assessment.propTypes = {
  assessmentObj: PropTypes.object.isRequired,
};
