import React from "react";
import header from "../assets/header1.png";
import "../styling/header.css";

const Header = ({ src }) => {
  return (
    <div className="header-container">
      <img src={src} alt="header image" />
    </div>
  );
};

export default Header;
