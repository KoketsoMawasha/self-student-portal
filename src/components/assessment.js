import React, { Component } from "react";

export default class assessment extends Component {
  render(type, module, dueDate) {
    return (
      <div className="assessment">
        <h1>{assessment.type}</h1>
        <h3>{assessment.module}</h3>
        <p>{assessment.module}</p>
        <p>{assessment.dueDate}</p>
      </div>
    );
  }
}
