import "../styling/AddAssessment.css";
import React, { Component } from "react";
import FormInputGroup from "./FormInputGroup";
import { v1 as uuid } from "uuid";
import { Consumer } from "../context";

export default class AddAssessment extends Component {
  state = {
    type: "",
    moduleName: "",
    description: "",
    dueDate: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { type, moduleName, description, dueDate } = this.state;

    // 1.Check presence of inputs
    if (!type || !moduleName) return;

    const newAssignment = {
      id: uuid(),
      type,
      moduleName,
      description,
      dueDate,
    };

    dispatch({ type: "ADD_ASSIGNMENT", payload: newAssignment });
    console.log(newAssignment);

    // 2.after successful submit, clear inputs
    this.setState({ type: "", moduleName: "", description: "", dueDate: "" });
  };

  render() {
    const { type, moduleName, description, dueDate } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div>
              <h1
                style={{
                  textAlign: "center",
                  margin: "1.5rem 0",
                }}
              >
                Assign Workload
              </h1>
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
                  label="Description / Study Scope"
                  name="description"
                  value={description}
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
