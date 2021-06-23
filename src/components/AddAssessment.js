import "../styling/AddAssessment.css";
import React, { Component } from "react";

export default class AddAssessment extends Component {
  state = {
    type: "",
    moduleName: "",
    dueDate: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { type, moduleName, dueDate } = this.state;

    return (
      <div>
        <form>
          <div className="form-control">
            <label htmlFor="type">Assessment Type</label>
            <input
              name="type"
              type="text"
              value={type}
              onChange={this.onChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="module">Module</label>
            <input
              name="moduleName"
              type="text"
              value={moduleName}
              onChange={this.onChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="date">Due Date</label>
            <input
              name="dueDate"
              type="text"
              value={dueDate}
              onChange={this.onChange}
            />
            <input id="submitBtn" type="submit" value="Add Assessment" />
          </div>
        </form>
      </div>
    );
  }
}
