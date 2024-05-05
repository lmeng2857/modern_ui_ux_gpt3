import React from "react";
import { Link } from "react-router-dom";
import "./cta.css";

const Cta = () => {
  return (
    <div className="gpt3__cta section__margin">
      <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register Today & start exploring the endless possibilities.</h3>
      </div>
      <div className="gpt3__cta-button">
        <Link to="/signup">
          <button type="button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Cta;
