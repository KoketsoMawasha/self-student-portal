import React from "react";

export default function Asessments() {
  const state = [
    {
      id: 1,
      type: "Test",
      module: "IT Management",
      dueDate: "2021-07-12",
    },
    {
      id: 2,
      type: "Assignment",
      module: "IT Risk Management",
      dueDate: "2021-06-28",
    },
    {
      id: 3,
      type: "ICE Task",
      module: "Business Analysis",
      dueDate: "2021-07-13",
    },
    {
      id: 4,
      type: "POE",
      module: "Introduction to Risk Management",
      dueDate: "2021-07-15",
    },
    {
      id: 5,
      type: "POE",
      module: "Work Integrated Learning",
      dueDate: "2021-10-12",
    },
  ];

  return (
    <div>
      <p>all assessments displayed here</p>
    </div>
  );
}