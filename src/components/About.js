import React, { Component } from "react";
import Header from "./Header";
import headerImg from "../assets/header2.png";

class About extends Component {
  render() {
    return (
      <div className="about" style={aboutStyling}>
        {/* <h1 style={{ margin: "1.5rem 0", color: "white" }}>
          About Self Portal
        </h1> */}
        <Header src={headerImg} />

        <p>
          The self student portal was developed to facilitate the viewing,
          adding and marking of student's individual academic progress and
          position with their relevant workload.
          <br /> <br />
          The portal also strives to evolve into a real-time portal allowing
          students to post key lecture points and notes or class activities
          during lectures for later reviewing, engagement & sparking of academic
          conversations even amongst learners that could not make it on campus
          for various reasons. Keeping all learners fully engaged and up to
          date. <br /> <br />
          In the near future, more features are anticipated to improve the
          learning experience for hybrid online and contact learning
          environments.
        </p>
      </div>
    );
  }
}

const aboutStyling = {
  padding: "2rem",
  // maxWidth: "50rem",
  fontSize: "1.2rem",
  margin: "1rem 0",
};

export default About;
