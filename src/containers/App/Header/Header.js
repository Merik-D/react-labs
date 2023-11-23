// Header.js
import React from "react";
import "./Header.css";
import Navigation from "../../Navigation/Navigation";

const Header = () => {

  return (
    <div className="container">
      <header className="header">
        <Navigation />
      </header>
    </div>
  );
};

export default Header;
