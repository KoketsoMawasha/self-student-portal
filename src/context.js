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
    // case "TOGGLE_COMPLETE":
    //   return {};
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
        module: "IT Management",
        description: "Study chapters 1-6: worth 25%",
        complete: false,
        dueDate: "2021-07-12",
      },
      {
        id: 2,
        type: "Assignment",
        module: "IT Risk Management",
        description: "Complete assignment:  worth 30%",
        complete: true,
        dueDate: "2021-06-28",
      },
      {
        id: 3,
        type: "ICE Task",
        module: "Business Analysis",
        description: "Complete activity 2.5 on RCLearn",
        complete: false,
        dueDate: "2021-07-13",
      },
      {
        id: 4,
        type: "POE",
        module: "Introduction to Risk Management",
        description: "Complete POE assessment: worth 35%",
        complete: false,
        dueDate: "2021-07-15",
      },
      {
        id: 5,
        type: "POE",
        module: "Work Integrated Learning",
        description: "Complete summative POE in groups: worth 35%",
        complete: false,
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
