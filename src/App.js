import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AddAssessment from "./components/AddAssessment";
import Assessments from "./components/Asessments";
import { Provider } from "./context";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Navbar heading="Self Portal" />
          <Switch>
            <Route exact path="/assessment/add" component={AddAssessment} />
            <Route exact path="/" component={Assessments} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
