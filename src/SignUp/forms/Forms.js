import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./forms.css";

const Forms = () => {
  const savedState = useLocation();
  console.log(savedState.state);

  const [state, setState] = useState(
    savedState.state || {
      firstName: "",
      lastName: "",
      email: "",
      passwords: "",
      occupation: "",
      city: "",
      bio: "",
    }
  );

  const navigate = useNavigate();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    navigate("/signup/checked", { state });
    // setCache(state);
    // setState({});
  };
  // const handleClick = () => {
  //   setReady(true);
  // };

  // useEffect(() => {
  //   if (ready) navigate("/checked", state);
  // }, [state]);

  return (
    <div className="gpt3__signup-forms ">
      <form
        className="gpt3__signup-form "
        id="form_1"
        action=""
        onSubmit={handleSubmitForm}
      >
        <label htmlFor="firstName">First Name</label>
        <input
          autoFocus
          required
          type="text"
          id="firstName"
          placeholder="First Name"
          value={state.firstName}
          onChange={(e) => setState({ ...state, firstName: e.target.value })}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          required
          type="text"
          id="lastName"
          placeholder="Last Name"
          value={state.lastName}
          onChange={(e) => setState({ ...state, lastName: e.target.value })}
        />

        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          id="email"
          placeholder="Your Email"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />

        <label htmlFor="passwords">Passwords</label>
        <input
          required
          type="password"
          id="passwords"
          placeholder="Passwords"
          minLength="8"
          value={state.passwords}
          onChange={(e) => setState({ ...state, passwords: e.target.value })}
        />

        <label htmlFor="occupation">Occupation</label>
        <input
          required
          type="text"
          id="occupation"
          placeholder="Occupation"
          value={state.occupation}
          onChange={(e) => setState({ ...state, occupation: e.target.value })}
        />

        <label htmlFor="city">City</label>
        <input
          required
          type="text"
          id="city"
          placeholder="City"
          value={state.city}
          onChange={(e) => setState({ ...state, city: e.target.value })}
        />

        <label htmlFor="bio">Bio</label>
        <input
          required
          type="text"
          id="bio"
          placeholder="Bio"
          value={state.bio}
          onChange={(e) => setState({ ...state, bio: e.target.value })}
        />
        <div className="gpt3__signup-form-button">
          <a href="/">
            <p>Go Back</p>
          </a>
          <button>Continue</button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
