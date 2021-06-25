import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AddAssessment from "./components/AddAssessment";
import Assessments from "./components/Asessments";

function App() {
  return (
    <Provider>
      <div className="App">
        <Navbar />
        <AddAssessment />
        <Assessments />
      </div>
    </Provider>
  );
}

export default App;
