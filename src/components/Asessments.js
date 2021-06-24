import React, { Component } from "react";
import "../styling/assessments.css";
import Assessment from "./Assessment";

export default class Asessments extends Component {
  state = [
    {
      id: 1,
      type: "Test",
      module: "IT Management",
      description: "Study chapters 1-6: worth 25%",
      dueDate: "2021-07-12",
    },
    {
      id: 2,
      type: "Assignment",
      module: "IT Risk Management",
      description: "Complete assignment:  worth 30%",
      dueDate: "2021-06-28",
    },
    {
      id: 3,
      type: "ICE Task",
      module: "Business Analysis",
      description: "Complete activity 2.5 on RCLearn",
      dueDate: "2021-07-13",
    },
    {
      id: 4,
      type: "POE",
      module: "Introduction to Risk Management",
      description: "Complete POE assessment: worth 35%",
      dueDate: "2021-07-15",
    },
    {
      id: 5,
      type: "POE",
      module: "Work Integrated Learning",
      description: "Complete summative POE in groups: worth 35%",
      dueDate: "2021-10-12",
    },
  ];
  render() {
    return (
      <div>
        {this.state.map((assessment) => {
          return <Assessment assessmentObj={assessment} />;
        })}
      </div>
    );
  }
}
