import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div className="gpt3__signup-heading">
      <Link to="/">
        <img src={logo} alt="GPT-3 Logo" />
      </Link>
    </div>
  );
};

export default Heading;
