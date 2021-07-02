import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styling/assessment.css";
import { Consumer } from "../context";
import deleteIcon from "../assets/deleteIcon.png";
import completeIcon from "../assets/completeIcon.png";
import classnames from "classnames";

class Assessment extends Component {
  constructor() {
    super();
    this.state = {
      complete: false,
    };
  }
  deleteBtn = (id, dispatch, e) => {
    e.preventDefault();
    dispatch({ type: "DELETE", payload: id });
  };

  completeBtn = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return { complete: !prevState.complete };
    });
  };

  render() {
    const { assessmentObj } = this.props;
    const { id } = assessmentObj;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div
              className={classnames("assessment", {
                complete: this.state.complete,
              })}
            >
              <div className="assessment-info">
                <h1>{assessmentObj.type}</h1>
                <h3>{assessmentObj.moduleName}</h3>
                <p>{assessmentObj.description}</p>
                <p id="date">
                  {assessmentObj.dueDate
                    ? assessmentObj.dueDate
                    : "Due date unknown"}
                </p>
              </div>

              <div className="actionLinks">
                <a
                  href="#"
                  className="completeIcon"
                  onClick={this.completeBtn.bind(this)}
                >
                  <img src={completeIcon} />
                </a>

                <a
                  href="#"
                  className="deleteIcon"
                  onClick={this.deleteBtn.bind(this, id, dispatch)}
                >
                  <img src={deleteIcon} alt="deleteIcon" />
                </a>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Assessment.propTypes = {
  assessmentObj: PropTypes.object.isRequired,
};

export default Assessment;
