import "./App.css";
import React from "react";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibilities,
  Brand,
  Cta,
  Navbar,
  Wgpt,
} from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />

      <Wgpt />
      <Features />
      <Possibilities />

      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
