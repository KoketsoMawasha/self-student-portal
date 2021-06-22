import React from "react";
import "../styling/AddAssessment.css";

export default function AddAssignment() {
  return (
    <div>
      <form>
        <div className="form-control">
          <label htmlFor="type">Assessment Type</label>
          <input type="text" />
        </div>

        <div className="form-control">
          <label htmlFor="module">Module</label>
          <input type="text" />
        </div>

        <div className="form-control">
          <label htmlFor="date">Due Date</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}
