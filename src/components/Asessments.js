import React, { Component } from "react";
import "../styling/assessments.css";
import Assessment from "./Assessment";
import { Consumer } from "../context";
import Header from "./Header";

export default class Asessments extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { assignments } = value;
          return (
            <>
              <Header />
              <h1 className="main-heading">Academic Workload</h1>
              <div className="assessments">
                {assignments.map((task) => {
                  return <Assessment key={task.id} assessmentObj={task} />;
                })}
                
              </div>
            </>
          );
        }}
      </Consumer>
    );
  }
}

// return (
//   <div className="assessments">
//     {this.state.map((assessment) => {
//       return <Assessment key={assessment.id} assessmentObj={assessment} />;
//     })}
//   </div>
// );
