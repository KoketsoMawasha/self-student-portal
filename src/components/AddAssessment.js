import "../styling/AddAssessment.css";
import React, { Component } from "react";

export default class AddAssessment extends Component {
  state = {
    type: "",
    moduleName: "",
    dueDate: "",
  };

  render() {
    const { type, moduleName, dueDate } = this.state;

    return (
      <div>
        <form>
          <div className="form-control">
            <label htmlFor="type">Assessment Type</label>
            <input type="text" value={type} />
          </div>

          <div className="form-control">
            <label htmlFor="module">Module</label>
            <input type="text" value={moduleName} />
          </div>

          <div className="form-control">
            <label htmlFor="date">Due Date</label>
            <input type="text" value={dueDate} />
          </div>
        </form>
      </div>
    );
  }
}
