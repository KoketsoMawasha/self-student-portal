import "../styling/AddAssessment.css";
import React, { Component } from "react";
import FormInputGroup from "./FormInputGroup";
import { v1 as uuid } from "uuid";
import { Consumer } from "../context";

export default class AddAssessment extends Component {
  state = {
    type: "",
    moduleName: "",
    dueDate: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { type, moduleName, dueDate } = this.state;

    // 1.Check presence of inputs
    if (!type || !moduleName) return;
    if (!dueDate) {
      this.setState({ dueDate: "due date unknown" });
    }

    dueDate
      ? this.setState({ dueDate: dueDate })
      : this.setState({ dueDate: "Due date unknown" });

    const newAssignment = {
      id: uuid(),
      type: type,
      moduleName: moduleName,
      dueDate: dueDate,
    };

    dispatch({ type: "ADD_ASSIGNMENT", payload: newAssignment });
    console.log(newAssignment);

    // 2.after successful submit, clear inputs
    this.setState({ type: "", moduleName: "", dueDate: "" });
  };

  render() {
    const { id, type, moduleName, dueDate } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div>
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <FormInputGroup
                  label="Assessment Type"
                  name="type"
                  value={type}
                  onChange={this.onChange}
                />
                <FormInputGroup
                  label="Module Name"
                  name="moduleName"
                  value={moduleName}
                  onChange={this.onChange}
                />

                <FormInputGroup
                  label="Due Date"
                  name="dueDate"
                  value={dueDate}
                  onChange={this.onChange}
                />

                <div className="form-control">
                  <input id="submitBtn" type="submit" value="Add Assessment" />
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
