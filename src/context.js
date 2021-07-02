import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        assignments: state.assignments.filter(
          (assignment) => assignment.id !== action.payload
        ),
      };
    case "ADD_ASSIGNMENT":
      return {
        ...state,
        assignments: [action.payload, ...state.assignments],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    assignments: [
      {
        id: 1,
        type: "Test",
        moduleName: "IT Management",
        description: "Study chapters 1-6: worth 25%",
        dueDate: "2021-07-12",
      },
      {
        id: 2,
        type: "Assignment",
        moduleName: "IT Risk Management",
        description: "Complete assignment:  worth 30%",
        dueDate: "2021-06-28",
      },
      {
        id: 3,
        type: "ICE Task",
        moduleName: "Business Analysis",
        description: "Complete activity 2.5 on RCLearn",
        dueDate: "2021-07-13",
      },
      {
        id: 4,
        type: "POE",
        moduleName: "Introduction to Risk Management",
        description: "Complete POE assessment: worth 35%",
        dueDate: "2021-07-15",
      },
      {
        id: 5,
        type: "POE",
        moduleName: "Work Integrated Learning",
        description: "Complete summative POE in groups: worth 35%",
        dueDate: "2021-10-12",
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
