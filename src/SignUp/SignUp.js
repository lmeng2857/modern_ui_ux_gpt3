import React from "react";
import Heading from "./Heading";
import Forms from "./forms/Forms";
import Checked from "./checked/Checked";
import Succeed from "./Succeed";
import "./signUp.css";
import { Routes, Route } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="gpt3__signup gradient__bg">
      <Heading />
      <Routes>
        <Route path="/" element={<Forms />} />
        <Route path="/checked" element={<Checked />} />
        <Route path="/succeed" element={<Succeed />} />
      </Routes>
    </div>
  );
};

export default SignUp;
