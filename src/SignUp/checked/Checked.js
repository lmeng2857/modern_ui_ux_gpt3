import React from "react";
import "./checked.css";
import { useLocation, useNavigate } from "react-router-dom";

const Checked = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);

  // const state = {
  //   firstName: "Dave",
  //   lastName: "White",
  //   email: "12345@gmail.com",
  //   passwords: "1234567",
  //   occupation: "student",
  //   city: "London",
  //   bio: "Billionair Billionair Billionair Billionair Billionair",
  // };
  // const keys = Object.keys(state);

  return (
    <div className="gpt3__signup-checked">
      {/* <h1 className="gradient__text">information:</h1> */}
      <ul>
        <li>
          <h3>First Name:</h3>
          <h3>{state.firstName}</h3>
        </li>
        <li>
          <h3>Last Name:</h3>
          <h3>{state.lastName}</h3>
        </li>
        <li>
          <h3>Email:</h3>
          <h3>{state.email}</h3>
        </li>
        <li>
          <h3>Passwords:</h3>
          <h3>{state.passwords}</h3>
        </li>
        <li>
          <h3>Occupation:</h3>
          <h3>{state.occupation}</h3>
        </li>
        <li>
          <h3>City:</h3>
          <h3>{state.city}</h3>
        </li>
        <li>
          <h3>Bio:</h3>
          <h3>{state.bio}</h3>
        </li>
      </ul>
      <div className="gpt3__signup-checked-button">
        <button onClick={() => navigate("/signup", { state })}>Change</button>
        <a href="/signup/succeed">
          <p>Continue</p>
        </a>
      </div>
    </div>
  );
};

export default Checked;
