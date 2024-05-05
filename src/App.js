import "./App.css";
import React from "react";
import Container from "./containers/Container";
import SignUp from "./SignUp/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Container></Container>}></Route>
      <Route path="/signup/*" element={<SignUp />}></Route>
    </Routes>
  );
}

export default App;
