import React from "react";

export default function AddAssignment() {
  return (
    <div>
      <form>
        <div className="form-control">
          <label htmlFor="type">Assessment Type</label>
          <input type="text" />
        </div>

        <div className="form-control">
          <label htmlFor="module">module</label>
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
