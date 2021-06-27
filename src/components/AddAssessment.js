import "../styling/AddAssessment.css";
import React, { Component } from "react";
import FormInputGroup from "./FormInputGroup";
import { v1 as uuid } from "uuid";

export default class AddAssessment extends Component {
  state = {
    type: "",
    moduleName: "",
    dueDate: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { type, moduleName, dueDate } = this.state;

    // 1.Check if inputs are there
    if (!type) return;
    if (!moduleName) return;

    if (!dueDate) {
      this.setState({ dueDate: "due date unknown" });
    }

    const newAssignment = {
      id: uuid(),
      type: type,
      moduleName: moduleName,
      dueDate: dueDate,
    };

    console.log(newAssignment);

    // 2.after successful submit, clear inputs
    this.setState({ type: "", moduleName: "", dueDate: "" });
  };

  render() {
    const { type, moduleName, dueDate } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
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
  }
}
